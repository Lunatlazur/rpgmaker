//=============================================================================
// Lunatlazur_ResumableAutoEventMessage.js
// ----------------------------------------------------------------------------
// Copyright (c) 2018 Taku Aoi
// This plugin is released under the zlib/libpng License.
// http://zlib.net/zlib_license.html
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2018/04/01
// ----------------------------------------------------------------------------
// [Web]    : https://lunatlazur.com/
// [Twitter]: https://twitter.com/lunatlazur/
// [GitHub] : https://github.com/Lunatlazur/
//=============================================================================
/*:
 * @plugindesc Resumable message for an automatically starting event
 * @author Taku Aoi
 * @help This plugin holds the position of the message when saving during an
 * event that started automatically is running for to return from that position
 * when loading.
 */
/*:ja
 * @plugindesc 自動イベントのメッセージ位置記録プラグイン
 * @author あおいたく
 * @help このプラグインは自動ではじまるイベントの途中でセーブを行ったときに、表示中の
 * メッセージ位置を保持し、ロード時にその位置から復帰できるようにします。
 *
 * 変更履歴
 * ********
 *
 * 1.0.0 2018/04/01:
 *   - 公開
 *
 */
(function () {
    const pulginName = 'Lunatlazur_ResumableAutoEventMessage';
    const _DataManager_createGameObjects = DataManager.createGameObjects;
    DataManager.createGameObjects = function () {
        _DataManager_createGameObjects.call(this);
        MessageStateManager._gameMessageState = new Game_MessageState;
    };
    const _DataManager_makeSaveContents = DataManager.makeSaveContents;
    DataManager.makeSaveContents = function () {
        const contents = _DataManager_makeSaveContents.call(this);
        contents.novelState = MessageStateManager._gameMessageState;
        return contents;
    };
    const _DataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function (contents) {
        _DataManager_extractSaveContents.apply(this, arguments);
        MessageStateManager._gameMessageState = contents.novelState || new Game_MessageState;
        const interpreter = $gameMap._interpreter;
        const index = MessageStateManager.restoreEventIndex(interpreter._eventId);
        if (typeof index !== 'undefined') {
            interpreter._index = index;
        }
    };
    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.apply(this, arguments);
        switch ((command || '').toUpperCase()) {
            case 'チャプター設定':
            case 'SET_CHAPTER':
                ChapterManager.chapter = args[0];
                break;
        }
    };
    const _Game_Interpreter_executeCommand = Game_Interpreter.prototype.executeCommand;
    Game_Interpreter.prototype.executeCommand = function () {
        const index = this._index;
        const nextFrameNeeded = _Game_Interpreter_executeCommand.call(this);
        if (MessageStateManager.isStateRecordableEvent(this._eventId) && nextFrameNeeded) {
            if (index === this._index) {
                MessageStateManager.removeEventIndex(this._eventId);
            }
        }
        return nextFrameNeeded;
    };
    const _Game_Interpreter_command101 = Game_Interpreter.prototype.command101;
    Game_Interpreter.prototype.command101 = function () {
        const index = this._index;
        const result = _Game_Interpreter_command101.call(this);
        if (MessageStateManager.isStateRecordableEvent(this._eventId)) {
            MessageStateManager.storeEventIndex(this._eventId, index - 1);
        }
        return result;
    };
    const _DataManager_makeSavefileInfo = DataManager.makeSavefileInfo;
    DataManager.makeSavefileInfo = function () {
        const info = _DataManager_makeSavefileInfo.call(this);
        info.chapter = ChapterManager.chapter;
        info.lastMessage = $gameMessage.allText();
        return info;
    };
    const _Window_SavefileList_drawPartyCharacters = Window_SavefileList.prototype.drawPartyCharacters;
    Window_SavefileList.prototype.drawPartyCharacters = function (info, x, y) {
        if (info.lastMessage) {
            info.lastMessage = this.convertEscapeCharacters(info.lastMessage)
                .replace(/\x1bn<([^>]+)>/, '$1')
                .replace(/\x1b([\$\.\|\^!><\{\}\\]|[A-Z]+)/i, '');
            const maxLength = (this.width - this.standardPadding() * 2) / this.standardFontSize() - 4;
            if (info.lastMessage.length >= maxLength) {
                info.lastMessage = info.lastMessage.substr(0, maxLength - 1) + '…';
            }
            this.drawText(info.lastMessage, 8, y - 32);
        }
        else {
            _Window_SavefileList_drawPartyCharacters.apply(this, arguments);
        }
    };
    const _Window_SavefileList_drawGameTitle = Window_SavefileList.prototype.drawGameTitle;
    Window_SavefileList.prototype.drawGameTitle = function (info, x, y, width) {
        _Window_SavefileList_drawGameTitle.apply(this, arguments);
        if (info.chapter) {
            this.drawText(info.chapter, x, y, width, 'right');
        }
    };
    class Game_MessageState {
        constructor() {
            this.events = {};
        }
    }
    class ChapterManager {
    }
    ChapterManager.chapter = '';
    class MessageStateManager {
        static isMapEvent(eventId) {
            return eventId !== 0;
        }
        static isAutoEvent(eventId) {
            const event = $gameMap.event(eventId);
            if (!event) {
                return event;
            }
            return event.page().trigger === 3;
        }
        static isStateRecordableEvent(eventId) {
            return this.isMapEvent(eventId) && this.isAutoEvent(eventId);
        }
        static storeEventIndex(eventId, index) {
            this._gameMessageState.events[eventId] = index;
        }
        static removeEventIndex(eventId) {
            delete this._gameMessageState.events[eventId];
        }
        static restoreEventIndex(eventId) {
            return this._gameMessageState.events[eventId];
        }
    }
})();

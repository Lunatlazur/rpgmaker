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
 */
(function () {
    var pulginName = 'Lunatlazur_ResumableAutoEventMessage';
    var _DataManager_createGameObjects = DataManager.createGameObjects;
    DataManager.createGameObjects = function () {
        _DataManager_createGameObjects.call(this);
        MessageStateManager._gameMessageState = new Game_MessageState;
    };
    var _DataManager_makeSaveContents = DataManager.makeSaveContents;
    DataManager.makeSaveContents = function () {
        var contents = _DataManager_makeSaveContents.call(this);
        contents.novelState = MessageStateManager._gameMessageState;
        return contents;
    };
    var _DataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function (contents) {
        _DataManager_extractSaveContents.apply(this, arguments);
        MessageStateManager._gameMessageState = contents.novelState || new Game_MessageState;
        var interpreter = $gameMap._interpreter;
        var index = MessageStateManager.restoreEventIndex(interpreter._eventId);
        if (typeof index !== 'undefined') {
            interpreter._index = index;
        }
    };
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.apply(this, arguments);
        switch ((command || '').toUpperCase()) {
            case 'チャプター設定':
            case 'SET_CHAPTER':
                ChapterManager.chapter = args[0];
                break;
        }
    };
    var _Game_Interpreter_executeCommand = Game_Interpreter.prototype.executeCommand;
    Game_Interpreter.prototype.executeCommand = function () {
        var index = this._index;
        var nextFrameNeeded = _Game_Interpreter_executeCommand.call(this);
        if (MessageStateManager.isStateRecordableEvent(this._eventId) && nextFrameNeeded) {
            if (index === this._index) {
                MessageStateManager.removeEventIndex(this._eventId);
            }
        }
        return nextFrameNeeded;
    };
    var _Game_Interpreter_command101 = Game_Interpreter.prototype.command101;
    Game_Interpreter.prototype.command101 = function () {
        var index = this._index;
        var result = _Game_Interpreter_command101.call(this);
        if (MessageStateManager.isStateRecordableEvent(this._eventId)) {
            MessageStateManager.storeEventIndex(this._eventId, index - 1);
        }
        return result;
    };
    var _DataManager_makeSavefileInfo = DataManager.makeSavefileInfo;
    DataManager.makeSavefileInfo = function () {
        var info = _DataManager_makeSavefileInfo.call(this);
        info.chapter = ChapterManager.chapter;
        info.lastMessage = $gameMessage.allText();
        return info;
    };
    var _Window_SavefileList_drawPartyCharacters = Window_SavefileList.prototype.drawPartyCharacters;
    Window_SavefileList.prototype.drawPartyCharacters = function (info, x, y) {
        if (info.lastMessage) {
            info.lastMessage = this.convertEscapeCharacters(info.lastMessage)
                .replace(/\x1bn<([^>]+)>/, '$1')
                .replace(/\x1b([\$\.\|\^!><\{\}\\]|[A-Z]+)/i, '');
            var maxLength = (this.width - this.standardPadding() * 2) / this.standardFontSize() - 4;
            if (info.lastMessage.length >= maxLength) {
                info.lastMessage = info.lastMessage.substr(0, maxLength - 1) + '…';
            }
            this.drawText(info.lastMessage, 8, y - 32);
        }
        else {
            _Window_SavefileList_drawPartyCharacters.apply(this, arguments);
        }
    };
    var _Window_SavefileList_drawGameTitle = Window_SavefileList.prototype.drawGameTitle;
    Window_SavefileList.prototype.drawGameTitle = function (info, x, y, width) {
        _Window_SavefileList_drawGameTitle.apply(this, arguments);
        if (info.chapter) {
            this.drawText(info.chapter, x, y, width, 'right');
        }
    };
    var Game_MessageState = /** @class */ (function () {
        function Game_MessageState() {
            this.events = {};
        }
        return Game_MessageState;
    }());
    var ChapterManager = /** @class */ (function () {
        function ChapterManager() {
        }
        ChapterManager.chapter = '';
        return ChapterManager;
    }());
    var MessageStateManager = /** @class */ (function () {
        function MessageStateManager() {
        }
        MessageStateManager.isMapEvent = function (eventId) {
            return eventId !== 0;
        };
        MessageStateManager.isAutoEvent = function (eventId) {
            var event = $gameMap.event(eventId);
            if (!event) {
                return event;
            }
            return event.page().trigger === 3;
        };
        MessageStateManager.isStateRecordableEvent = function (eventId) {
            return this.isMapEvent(eventId) && this.isAutoEvent(eventId);
        };
        MessageStateManager.storeEventIndex = function (eventId, index) {
            this._gameMessageState.events[eventId] = index;
        };
        MessageStateManager.removeEventIndex = function (eventId) {
            delete this._gameMessageState.events[eventId];
        };
        MessageStateManager.restoreEventIndex = function (eventId) {
            return this._gameMessageState.events[eventId];
        };
        return MessageStateManager;
    }());
})();

//=============================================================================
// Lunatlazur_PauseSignAfterText.js
// ----------------------------------------------------------------------------
// Copyright (c) 2018 Taku Aoi
// This plugin is released under the zlib License.
// https://zlib.net/zlib_license.html
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2018-04-01
// ----------------------------------------------------------------------------
// [Web]    : https://lunatlazur.com
// [Twitter]: https://twitter.com/aoitaku
// [GitHub] : https://github.com/lunatlazur
//=============================================================================
/*:
 * @plugindesc Change message pause sign position
 * @author Taku Aoi
 * @help This plugin places message pause sign at the end of message.
 *
 * Usage
 * =====
 *
 * This plugin has no plugin options or plugin commands.
 *
 *
 * Changelog
 * =========
 *
 * 1.0.0 2018-04-01
 * ----------------
 * - Published.
 *
 */
/*:ja
 * @plugindesc メッセージ送りアイコン位置変更プラグイン
 * @author あおいたく
 * @help このプラグインはメッセージ送り記号をメッセージの末尾に表示するようにします。
 *
 * 使い方
 * ======
 *
 * このプラグインにはプラグインオプション、プラグインコマンドはありません。
 *
 *
 * 変更履歴
 * ========
 *
 * 1.0.0 2018-04-01
 * ----------------
 * - 公開
 *
 */
(function () {
    'use strict';

    const _Window_Message_initMembers = Window_Message.prototype.initMembers;
    Window_Message.prototype.initMembers = function () {
        this._endOfTextPosition = { x: 0, y: 0 };
        _Window_Message_initMembers.call(this);
    };
    function _Window_Message_pauseSignOffsetX() {
        return this.contents.fontSize;
    }
    function _Window_Message_pauseSignOffsetY() {
        return (this._padding + this.lineHeight()) / 4;
    }
    const _Window_Message_onEndOfText = Window_Message.prototype.onEndOfText;
    Window_Message.prototype.onEndOfText = function () {
        if (this._textState) {
            const x = _Window_Message_pauseSignOffsetX.call(this);
            const y = _Window_Message_pauseSignOffsetY.call(this);
            this._endOfTextPosition.x = this._textState.x + x;
            this._endOfTextPosition.y = this._textState.y + this._textState.height + y;
        }
        _Window_Message_onEndOfText.call(this);
    };
    Window_Message.prototype._refreshPauseSign = function () {
        Window.prototype._refreshPauseSign.call(this);
        if (this._endOfTextPosition) {
            this._windowPauseSignSprite.move(this._endOfTextPosition.x, this._endOfTextPosition.y);
        }
    };
    Window_Message.prototype._updatePauseSign = function () {
        Window.prototype._updatePauseSign.call(this);
        if (this._endOfTextPosition) {
            this._windowPauseSignSprite.move(this._endOfTextPosition.x, this._endOfTextPosition.y);
        }
    };

}());

//=============================================================================
// Lunatlazur_PauseSignAfterText.js
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
 * @plugindesc Change message pause sign position
 * @author Taku Aoi
 * @help This plugin places message pause sign at the end of message.
 */
/*:ja
 * @plugindesc メッセージ送り記号位置変更プラグイン
 * @author あおいたく
 * @help このプラグインはメッセージ送り記号をメッセージの末尾に表示するようにします。
 */
(function () {
    var pluginName = 'Lunatlazur_PauseSignAfterText';
    var _Window_Message_initMembers = Window_Message.prototype.initMembers;
    Window_Message.prototype.initMembers = function () {
        this._endOfTextPosition = { x: 0, y: 0 };
        _Window_Message_initMembers.call(this);
    };
    Window_Message.prototype.pauseSignOffset = function () {
        if (!this._pauseSignOffset) {
            this._pauseSignOffset = {
                x: this.contents.fontSize,
                y: (this._padding + this.lineHeight()) / 4,
            };
        }
        return this._pauseSignOffset;
    };
    var _Window_Message_onEndOfText = Window_Message.prototype.onEndOfText;
    Window_Message.prototype.onEndOfText = function () {
        if (this._textState) {
            this._endOfTextPosition.x = this._textState.x + this.pauseSignOffset().x;
            this._endOfTextPosition.y = this._textState.y + this._textState.height + this.pauseSignOffset().y;
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
})();

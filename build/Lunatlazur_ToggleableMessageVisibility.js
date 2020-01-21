//=============================================================================
// Lunatlazur_ToggleableMessageVisibility.js
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
 * @plugindesc Toggle message window visibility
 * @author Taku Aoi
 * @help This plugin makes message window visibility toggleable.
 * Tap the close button in the upper right corner of the message window or just
 * right-click to hide the message window.
 * If you right-click with the message window not displayed, the message window
 * will be displayed again.
 *
 * History
 * *******
 *
 * 1.0.0 2018/04/01:
 *   - Published.
 *
 */
/*:ja
 * @plugindesc メッセージウィンドウ表示切り替えプラグイン
 * @author あおいたく
 * @help このプラグインはメッセージウィンドウの表示／非表示を切替できるようにします。
 * 右クリックまたはメッセージウィンドウ右上の✕ボタンをタップすると、ウィンドウを
 * 非表示にします。
 * 非表示中に右クリックで再表示します。
 *
 * 変更履歴
 * ********
 *
 * 1.0.0 2018/04/01:
 *   - 公開
 *
 */
(function () {
    const pluginName = 'Lunatlazur_ToggleableMessageVisibility';
    // スペースキーを OK でなくスペースキーとして割り当てる
    Input.keyMapper[32] = 'space';
    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.apply(this, arguments);
        switch ((command || '').toUpperCase()) {
            case 'SHOW_MESSAGE':
            case 'メッセージの表示':
                WindowVisibilityManager.setShowing(true);
                break;
            case 'HIDE_MESSAGE':
            case 'メッセージの非表示':
                WindowVisibilityManager.setHiding(true);
                break;
            case 'TOGGLE_MESSAGE':
            case 'メッセージ表示の切替':
                WindowVisibilityManager.setToggling(true);
                break;
        }
    };
    function _Window_Message_toggleMessage() {
        if (this._hideMessageManager.isHidden) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    const _Window_Message_initMembers = Window_Message.prototype.initMembers;
    Window_Message.prototype.initMembers = function () {
        this._hideMessageManager = new HideMessageManager;
        _Window_Message_initMembers.call(this);
        if (this._background === 0) {
            this._hideMessageManager.createHideMessageButton(28);
        }
    };
    const _Window_Message_show = Window_Message.prototype.show;
    Window_Message.prototype.show = function () {
        _Window_Message_show.call(this);
        this._hideMessageManager.handleShow();
    };
    const _Window_Message_hide = Window_Message.prototype.hide;
    Window_Message.prototype.hide = function () {
        _Window_Message_hide.call(this);
        this._hideMessageManager.handleHide(this.subWindows());
    };
    function _Window_Message_isHideButtonTouched() {
        if (this.isOpen() && this.active && TouchInput.isTriggered()) {
            return this._hideMessageManager.isHidingTriggered();
        }
        return false;
    }
    const _Window_Message_updateInput = Window_Message.prototype.updateInput;
    Window_Message.prototype.updateInput = function () {
        if (this._hideMessageManager.isHidden) {
            return true;
        }
        if (this._hideMessageManager.isButtonAvailable && _Window_Message_isHideButtonTouched.call(this)) {
            this.hide();
            return true;
        }
        return _Window_Message_updateInput.apply(this, arguments);
    };
    const _Window_Message_update = Window_Message.prototype.update;
    Window_Message.prototype.update = function () {
        if (this._hideMessageManager.isButtonAvailable) {
            this._hideMessageManager.handleOpennessChanged(this.isOpen(), this.x, this.y, this.width, this.height);
        }
        _Window_Message_update.call(this);
    };
    const _Window_Message_updateWait = Window_Message.prototype.updateWait;
    Window_Message.prototype.updateWait = function () {
        if (!this.isClosed() && !$gameMessage.isChoice()) {
            if (Input.isTriggered('space') || TouchInput.isCancelled()) {
                _Window_Message_toggleMessage.call(this);
            }
            else {
                if (WindowVisibilityManager.isHiding()) {
                    this.hide();
                    WindowVisibilityManager.setHiding(false);
                }
                else if (WindowVisibilityManager.isShowing()) {
                    this.show();
                    WindowVisibilityManager.setShowing(false);
                }
                else if (WindowVisibilityManager.isToggling()) {
                    _Window_Message_toggleMessage.call(this);
                    WindowVisibilityManager.setToggling(false);
                }
            }
        }
        const isWaiting = _Window_Message_updateWait.apply(this, arguments);
        if (this._hideMessageManager.isHidden && this.visible) {
            this.hide();
        }
        return isWaiting;
    };
    const _Window_Message_updateBackground = Window_Message.prototype.updateBackground;
    Window_Message.prototype.updateBackground = function () {
        _Window_Message_updateBackground.call(this);
        if (this._background === 0) {
            this._hideMessageManager.enableButton();
        }
        else {
            this._hideMessageManager.disableButton();
        }
    };
    const _Window_ChoiceList_update = Window_ChoiceList.prototype.update;
    Window_ChoiceList.prototype.update = function () {
        if (!this.visible) {
            return;
        }
        _Window_ChoiceList_update.apply(this, arguments);
    };
    const _Window_NumberInput_update = Window_NumberInput.prototype.update;
    Window_NumberInput.prototype.update = function () {
        if (!this.visible) {
            return;
        }
        _Window_NumberInput_update.apply(this, arguments);
    };
    const _Window_EventItem_update = Window_EventItem.prototype.update;
    Window_EventItem.prototype.update = function () {
        if (!this.visible) {
            return;
        }
        _Window_EventItem_update.apply(this, arguments);
    };
    class WindowVisibilityManager {
        static setShowing(show) {
            this._show = show;
        }
        static setHiding(hide) {
            this._hide = hide;
        }
        static setToggling(toggle) {
            this._toggle = toggle;
        }
        static isShowing() {
            return this._show;
        }
        static isHiding() {
            return this._hide;
        }
        static isToggling() {
            return this._toggle;
        }
    }
    WindowVisibilityManager._show = false;
    WindowVisibilityManager._hide = false;
    WindowVisibilityManager._toggle = false;
    class HideMessageButton {
        constructor(size) {
            const bitmap = new Bitmap(size, size);
            bitmap.fontFace = 'GameFont';
            bitmap.fontSize = size;
            bitmap.textColor = '#ffffff';
            bitmap.drawText('✕', 0, 0, size, size);
            this._sprite = new Sprite(bitmap);
            this._sprite.x = 0;
            this._sprite.y = 0;
            this._sprite.visible = false;
            SceneManager._scene.addChild(this._sprite);
        }
        get x() {
            return this._sprite.x;
        }
        set x(x) {
            this._sprite.x = x;
        }
        get y() {
            return this._sprite.y;
        }
        set y(y) {
            this._sprite.y = y;
        }
        get width() {
            return this._sprite.width;
        }
        get height() {
            return this._sprite.height;
        }
        hide() {
            this._sprite.visible = false;
        }
        show() {
            this._sprite.visible = true;
        }
        adjust(right, top) {
            this.x = right - this.width - 4;
            this.y = top + 4;
        }
        isPointInside(x, y) {
            return !!(x >= this.x && x < this.x + this.width && y >= this.y && y < this.y + this.height);
        }
    }
    class HideMessageManager {
        constructor() {
            this._hiddenSubWindows = [];
            this._hideMessageButton = null;
            this._isOpened = false;
            this._isHidden = false;
            this._isButtonAvailable = false;
        }
        get isHidden() {
            return this._isHidden;
        }
        get isOpened() {
            return this._isOpened;
        }
        get isButtonAvailable() {
            return this._isButtonAvailable;
        }
        createHideMessageButton(size) {
            this._hideMessageButton = new HideMessageButton(size);
            this.enableButton();
        }
        enableButton() {
            this._isButtonAvailable = true;
        }
        disableButton() {
            this._isButtonAvailable = false;
        }
        handleShow() {
            if (this.isButtonAvailable) {
                this._hideMessageButton.show();
            }
            this._hiddenSubWindows.forEach((subWindow) => subWindow.show());
            this._hiddenSubWindows = [];
            this._isHidden = false;
        }
        handleHide(subWindows) {
            if (this.isButtonAvailable) {
                this._hideMessageButton.hide();
            }
            subWindows.forEach((subWindow) => {
                if (subWindow.visible) {
                    subWindow.hide();
                    if (this._hiddenSubWindows.indexOf(subWindow) === -1) {
                        this._hiddenSubWindows.push(subWindow);
                    }
                }
            });
            this._isHidden = true;
        }
        handleOpennessChanged(opened, x, y, width, height) {
            if (!this.isButtonAvailable) {
                return;
            }
            if (opened) {
                if (!this.isOpened) {
                    this.handleOpened(x, y, width, height);
                }
            }
            else {
                if (this.isOpened) {
                    this.handleClosing();
                }
            }
        }
        handleOpened(x, y, width, height) {
            this._isOpened = true;
            if (this.isButtonAvailable) {
                this._hideMessageButton.adjust(width, y);
                this._hideMessageButton.show();
            }
        }
        handleClosing() {
            this._isOpened = false;
            if (this.isButtonAvailable) {
                this._hideMessageButton.hide();
            }
        }
        isHidingTriggered() {
            if (this.isButtonAvailable && this._hideMessageButton.width) {
                return this._hideMessageButton.isPointInside(TouchInput.x, TouchInput.y);
            }
            return false;
        }
    }
})();

//=============================================================================
// Lunatlazur_EventCommandSkip.js
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
 * @plugindesc Skip event command
 * @author Taku Aoi
 * @help This plugin allows you to skip event commands by pressing
 * the Ctrl key.
 *
 * Usage
 * =====
 *
 * Plug-in command list
 * ====================
 *
 * START_SKIP
 * ----------
 *
 *     START_SKIP
 *
 * Start skipping.
 *
 *
 * CANCEL_SKIP
 * -----------
 *
 *     CANCEL_SKIP
 *
 * Cancel the skip.
 *
 *
 * TOGGLE_SKIP
 * -----------
 *
 *     TOGGLE_SKIP
 *
 * If it is not skipping, it will start skipping.
 * If it is skipping, it will be interrupted.
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
 * @plugindesc イベントコマンドスキッププラグイン
 * @author あおいたく
 * @help このプラグインはCtrlキーを押すことでイベントコマンドをスキップ
 * できるようにします。
 *
 * 使い方
 * ======
 *
 * プラグインコマンド一覧
 * ======================
 *
 * スキップの開始
 * --------------
 *
 *     スキップの開始
 *
 * スキップを開始します。
 *
 *
 * スキップの中断
 * --------------
 *
 *     スキップの中断
 *
 * スキップを中断します。
 *
 *
 * スキップの切替
 * --------------
 *
 *     スキップの切替
 *
 * スキップ中でないならスキップを開始し、スキップ中ならスキップを中断します。
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

    class SkipManager {
        static isSkipping() {
            return this._skipping;
        }
        static startSkip() {
            this._skipping = true;
        }
        static cancelSkip() {
            this._skipping = false;
        }
        static toggleSkip() {
            this._skipping = !this._skipping;
        }
    }
    SkipManager._skipping = false;
    function isSkipping() {
        return SkipManager.isSkipping() || Input.isPressed('control');
    }
    function isSkipInterrupting() {
        return (Input.isTriggered('ok') ||
            Input.isTriggered('cancel') ||
            TouchInput.isTriggered() ||
            TouchInput.isCancelled());
    }
    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.apply(this, arguments);
        switch ((command || '').toUpperCase()) {
            case 'START_SKIP':
            case 'スキップの開始':
                SkipManager.startSkip();
                break;
            case 'CANCEL_SKIP':
            case 'スキップの中断':
                SkipManager.cancelSkip();
                break;
            case 'TOGGLE_SKIP':
            case 'スキップの切替':
                SkipManager.toggleSkip();
                break;
        }
    };
    const _Window_Message_updateWait = Window_Message.prototype.updateWait;
    Window_Message.prototype.updateWait = function () {
        if (!this.isClosed() && !$gameMessage.isChoice() && this.visible) {
            if (SkipManager.isSkipping() && isSkipInterrupting()) {
                SkipManager.cancelSkip();
                return true;
            }
            if (Input.isTriggered('ok') || Input.isTriggered('cancel') || TouchInput.isTriggered()) {
                this._showFast = true;
            }
            if (isSkipping()) {
                this._waitCount = 0;
            }
        }
        return _Window_Message_updateWait.apply(this, arguments);
    };
    const _Window_Message_isTriggered = Window_Message.prototype.isTriggered;
    Window_Message.prototype.isTriggered = function () {
        return _Window_Message_isTriggered.apply(this, arguments) || isSkipping();
    };
    const _Game_Screen_movePicture = Game_Screen.prototype.movePicture;
    Game_Screen.prototype.movePicture = function (pictureId, origin, x, y, scaleX, scaleY, opacity, blendMode, duration) {
        _Game_Screen_movePicture.call(this, pictureId, origin, x, y, scaleX, scaleY, opacity, blendMode, isSkipping() ? 2 : duration);
    };
    const _Game_Screen_startFadeIn = Game_Screen.prototype.startFadeIn;
    Game_Screen.prototype.startFadeIn = function (duration) {
        _Game_Screen_startFadeIn.call(this, isSkipping() ? 2 : duration);
    };
    const _Game_Screen_startFadeOut = Game_Screen.prototype.startFadeOut;
    Game_Screen.prototype.startFadeOut = function (duration) {
        _Game_Screen_startFadeOut.call(this, isSkipping() ? 2 : duration);
    };
    if (Game_Screen.prototype.startTransition) {
        const _Game_Screen_startTransition = Game_Screen.prototype.startTransition;
        Game_Screen.prototype.startTransition = function (isFadingIn, isFilledWhite, name, duration) {
            _Game_Screen_startTransition.call(this, isFadingIn, isFilledWhite, name, isSkipping() ? 2 : duration);
        };
    }
    const _Game_Interpreter_wait = Game_Interpreter.prototype.wait;
    Game_Interpreter.prototype.wait = function (duration) {
        _Game_Interpreter_wait.call(this, isSkipping() ? 2 : duration);
    };

}());

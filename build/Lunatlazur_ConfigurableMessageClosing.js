//=============================================================================
// Lunatlazur_ConfigurableMessageClosing.js
// ----------------------------------------------------------------------------
// Copyright (c) 2018 Taku Aoi
// This plugin is released under the zlib/libpng License.
// http://zlib.net/zlib_license.html
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2018/04/01
// ----------------------------------------------------------------------------
// [Web]    : https://lunatlazur.com/
// [Twitter]: https://twitter.com/aoitaku/
// [GitHub] : https://github.com/aoitaku/
//=============================================================================
/*:
 * @plugindesc Keep message window visible
 * @author Taku Aoi
 * @help This plugin keeps message window visible while close command called.
 */
/*:ja
 * @plugindesc メッセージ表示継続プラグイン
 * @author あおいたく
 * @help このプラグインはメッセージウィンドウを自動で閉じずに、表示したままにできるよう
 * にします。
 *
 * == プラグインコマンド一覧 ==
 *
 * KEEP_MESSAGE_VISIBLE [ON|OFF]
 * メッセージの表示を継続 [ON|OFF]
 *
 * 例: KEEP_MESSAGE_VISIBLE ON
 *
 *   ON でメッセージウィンドウを自動で閉じないようにします。
 *   OFF にしたときにメッセージが存在しなければ、メッセージウィンドウは即座に閉じ
 *   られます。
 *
 * CLOSE_MESSAGE
 * メッセージを閉じる
 *
 *   メッセージウィンドウを閉じます。
 */
(function () {
    var pluginName = 'Lunatlazur_ConfigurableMessageClosing';
    var indentWhenFaceVisible = 168;
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.apply(this, arguments);
        WindowAutoCloseManager.processPluginCommand(command, args);
    };
    var _Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
    Window_Message.prototype.terminateMessage = function () {
        if (WindowAutoCloseManager.isAutoCloseEnabled()) {
            _Window_Message_terminateMessage.call(this);
        }
        else {
            $gameMessage.clear();
            this.contents.clearRect(indentWhenFaceVisible, 0, this.contentsWidth() - indentWhenFaceVisible, this.contentsHeight());
        }
    };
    var _Window_Message_update = Window_Message.prototype.update;
    Window_Message.prototype.update = function () {
        if (WindowAutoCloseManager.isForceClosing()) {
            _Window_Message_terminateMessage.call(this);
            WindowAutoCloseManager.cancelForceClose();
        }
        _Window_Message_update.call(this);
    };
    var WindowAutoCloseManager = /** @class */ (function () {
        function WindowAutoCloseManager() {
        }
        WindowAutoCloseManager.processPluginCommand = function (command, args) {
            switch ((command || '').toUpperCase()) {
                case 'KEEP_MESSAGE_VISIBLE':
                case 'メッセージの表示を継続':
                    var arg = (args[0] || '').toUpperCase();
                    if (arg === 'TRUE' || arg === 'ON') {
                        this.disableAutoClose();
                    }
                    else if (arg === 'FALSE' || arg === 'OFF') {
                        this.enableAutoClose();
                        if (!$gameMessage.hasText()) {
                            this.setForceClose();
                        }
                    }
                    break;
                case 'CLOSE_MESSAGE':
                case 'メッセージを閉じる':
                    this.setForceClose();
                    break;
                default:
                    break;
            }
        };
        WindowAutoCloseManager.enableAutoClose = function () {
            this._autoClose = true;
        };
        WindowAutoCloseManager.disableAutoClose = function () {
            this._autoClose = false;
        };
        WindowAutoCloseManager.isAutoCloseEnabled = function () {
            return this._autoClose;
        };
        WindowAutoCloseManager.setForceClose = function () {
            this._forceClose = true;
        };
        WindowAutoCloseManager.cancelForceClose = function () {
            this._forceClose = false;
        };
        WindowAutoCloseManager.isForceClosing = function () {
            return this._forceClose;
        };
        WindowAutoCloseManager._autoClose = true;
        WindowAutoCloseManager._forceClose = false;
        return WindowAutoCloseManager;
    }());
})();

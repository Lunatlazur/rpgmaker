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
// [Twitter]: https://twitter.com/lunatlazur/
// [GitHub] : https://github.com/Lunatlazur/
//=============================================================================
/*:
 * @plugindesc Keep message window visible
 * @author Taku Aoi
 * @help This plugin keeps message window visible while close command called.
 */
/*:ja
 * @plugindesc メッセージ表示継続プラグイン
 * @author あおいたく
 * @help このプラグインはメッセージの表示後に他のイベントコマンドが実行されても
 * メッセージウィンドウを自動で閉じずに、表示したままにできるようにします。
 * メッセージウィンドウを表示したままピクチャを表示・移動するときなどに便利です。
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
  const pluginName = 'Lunatlazur_ConfigurableMessageClosing';

  const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.apply(this, arguments)
    WindowAutoCloseManager.processPluginCommand(command, args)
  }

  const _Window_Message_terminateMessage = Window_Message.prototype.terminateMessage
  Window_Message.prototype.terminateMessage = function () {
    if (WindowAutoCloseManager.isAutoCloseEnabled()) {
      _Window_Message_terminateMessage.call(this)
    } else {
      const indentWhenFaceVisible = this.newLineX()
      $gameMessage.clear()
      this.contents.clearRect(
        indentWhenFaceVisible,
        0,
        this.contentsWidth() - indentWhenFaceVisible,
        this.contentsHeight()
      )
    }
  }

  const _Window_Message_update = Window_Message.prototype.update
  Window_Message.prototype.update = function() {
    if (WindowAutoCloseManager.isForceClosing()) {
      _Window_Message_terminateMessage.call(this)
      WindowAutoCloseManager.cancelForceClose()
    }
    _Window_Message_update.call(this)
  }

  class WindowAutoCloseManager {

    private static _autoClose: boolean = true

    private static _forceClose: boolean = false

    public static processPluginCommand (command: string, args: string[]) {
      switch ((command || '').toUpperCase()) {
      case 'KEEP_MESSAGE_VISIBLE':
      case 'メッセージの表示を継続':
        const arg = (args[0] || '').toUpperCase()
        if (arg === 'TRUE' || arg === 'ON') {
          this.disableAutoClose()
        } else if (arg === 'FALSE' || arg === 'OFF') {
          this.enableAutoClose()
          if (!$gameMessage.hasText()) {
            this.setForceClose()
          }
        }
        break
      case 'CLOSE_MESSAGE':
      case 'メッセージを閉じる':
        this.setForceClose()
        break
      default:
        break
      }
    }

    public static enableAutoClose () {
      this._autoClose = true
    }

    public static disableAutoClose () {
      this._autoClose = false
    }

    public static isAutoCloseEnabled () {
      return this._autoClose
    }

    public static setForceClose () {
      this._forceClose = true
    }

    public static cancelForceClose () {
      this._forceClose = false
    }

    public static isForceClosing () {
      return this._forceClose
    }
  }
})()

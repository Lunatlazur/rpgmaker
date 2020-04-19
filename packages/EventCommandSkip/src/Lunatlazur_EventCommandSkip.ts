//=============================================================================
// Lunatlazur_EventCommandSkip.js
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
/*:ja
 * @plugindesc イベントコマンドスキッププラグイン
 * @author あおいたく
 * @help このプラグインはCtrlキーを押すことでイベントコマンドをスキップ
 * できるようにします。
 *
 * 【プラグインコマンド一覧】
 *
 * 【スキップの開始】
 * スキップの開始
 *
 * 　スキップを開始します。
 *
 * 【スキップの中断】
 * スキップの中断
 *
 * 　スキップを中断します。
 *
 * 【スキップの切替】
 * スキップの切替
 *
 * 　スキップ中でないならスキップを開始し、スキップ中ならスキップを中断します。
 */

interface Game_Interpreter {
  _waitCount: number
}

interface Game_Screen {
  startTransition (isFadingIn: boolean, isFilledWhite: boolean, name: string, duration: number): void
}

(function(){
  const pluginName = 'Lunatlazur_EventCommandSkip'

  class SkipManager {
    private static _skipping = false

    public static isSkipping () {
      return this._skipping
    }

    public static startSkip () {
      this._skipping = true
    }

    public static cancelSkip () {
      this._skipping = false
    }

    public static toggleSkip () {
      this._skipping = !this._skipping
    }
  }

  function isSkipping () {
    return SkipManager.isSkipping() || Input.isPressed('control')
  }

  function isSkipInterrupting () {
    return (
      Input.isTriggered('ok') ||
      Input.isTriggered('cancel') ||
      TouchInput.isTriggered() ||
      TouchInput.isCancelled()
    )
  }

  const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.apply(this, arguments)
    switch ((command || '').toUpperCase()) {
    case 'START_SKIP':
    case 'スキップの開始':
      SkipManager.startSkip()
      break
    case 'CANCEL_SKIP':
    case 'スキップの中断':
      SkipManager.cancelSkip()
      break
    case 'TOGGLE_SKIP':
    case 'スキップの切替':
      SkipManager.toggleSkip()
      break
    }
  }

  const _Window_Message_updateWait = Window_Message.prototype.updateWait
  Window_Message.prototype.updateWait = function() {
    if (!this.isClosed() && !$gameMessage.isChoice() && this.visible) {
      if (SkipManager.isSkipping() && isSkipInterrupting()) {
        SkipManager.cancelSkip()
        return true
      }
      if (Input.isTriggered('ok') || Input.isTriggered('cancel') || TouchInput.isTriggered()) {
        this._showFast = true
      }

      if (isSkipping()) {
        this._waitCount = 0
      }
    }
    return _Window_Message_updateWait.apply(this, arguments)
  }

  const _Window_Message_isTriggered = Window_Message.prototype.isTriggered
  Window_Message.prototype.isTriggered = function() {
    return _Window_Message_isTriggered.apply(this, arguments) || isSkipping()
  }

  const _Game_Screen_movePicture = Game_Screen.prototype.movePicture
  Game_Screen.prototype.movePicture = function(pictureId, origin, x, y, scaleX, scaleY, opacity, blendMode, duration) {
    _Game_Screen_movePicture.call(this, pictureId, origin, x, y, scaleX, scaleY, opacity, blendMode, isSkipping() ? 2 : duration)
  }

  const _Game_Screen_startFadeIn = Game_Screen.prototype.startFadeIn
  Game_Screen.prototype.startFadeIn = function (duration: number) {
    _Game_Screen_startFadeIn.call(this, isSkipping() ? 2 : duration)
  }

  const _Game_Screen_startFadeOut = Game_Screen.prototype.startFadeOut
  Game_Screen.prototype.startFadeOut = function (duration: number) {
    _Game_Screen_startFadeOut.call(this, isSkipping() ? 2 : duration)
  }

  if (Game_Screen.prototype.startTransition) {
    const _Game_Screen_startTransition = Game_Screen.prototype.startTransition
    Game_Screen.prototype.startTransition = function (isFadingIn: boolean, isFilledWhite: boolean, name: string, duration: number) {
      _Game_Screen_startTransition.call(this, isFadingIn, isFilledWhite, name, isSkipping() ? 2 : duration)
    }
  }

  const _Game_Interpreter_wait = Game_Interpreter.prototype.wait
  Game_Interpreter.prototype.wait = function(duration) {
    _Game_Interpreter_wait.call(this, isSkipping() ? 2 : duration)
  }
})()

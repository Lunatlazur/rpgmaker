const pluginName = 'Lunatlazur_ConfigurableMessageClosing'

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

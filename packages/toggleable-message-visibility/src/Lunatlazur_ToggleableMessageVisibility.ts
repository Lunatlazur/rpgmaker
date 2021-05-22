const pluginName = 'Lunatlazur_ToggleableMessageVisibility'

// スペースキーを OK でなくスペースキーとして割り当てる
Input.keyMapper[32] = 'space'

const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  _Game_Interpreter_pluginCommand.apply(this, arguments)
  switch ((command || '').toUpperCase()) {
  case 'SHOW_MESSAGE':
  case 'メッセージの表示':
    WindowVisibilityManager.setShowing(true)
    break
  case 'HIDE_MESSAGE':
  case 'メッセージの非表示':
    WindowVisibilityManager.setHiding(true)
    break
  case 'TOGGLE_MESSAGE':
  case 'メッセージ表示の切替':
    WindowVisibilityManager.setToggling(true)
    break
  }
}

function _Window_Message_toggleMessage (this: Window_Message) {
  if (this._hideMessageManager.isHidden) {
    this.show()
  } else {
    this.hide()
  }
}

const _Window_Message_initMembers = Window_Message.prototype.initMembers
Window_Message.prototype.initMembers = function () {
  this._hideMessageManager = new HideMessageManager
  _Window_Message_initMembers.call(this)
  if (this._background === 0) {
    this._hideMessageManager.createHideMessageButton(28)
  }
}

const _Window_Message_show = Window_Message.prototype.show
Window_Message.prototype.show = function () {
  _Window_Message_show.call(this)
  this._hideMessageManager.handleShow()
}

const _Window_Message_hide = Window_Message.prototype.hide
Window_Message.prototype.hide = function () {
  _Window_Message_hide.call(this)
  this._hideMessageManager.handleHide(this.subWindows())
}

function _Window_Message_isHideButtonTouched(this: Window_Message) {
  if (this.isOpen() && this.active && TouchInput.isTriggered()) {
    return this._hideMessageManager.isHidingTriggered()
  }
  return false
}

const _Window_Message_updateInput = Window_Message.prototype.updateInput
Window_Message.prototype.updateInput = function() {
  if (this._hideMessageManager.isHidden) {
    return true
  }
  if (this._hideMessageManager.isButtonAvailable && _Window_Message_isHideButtonTouched.call(this)) {
    this.hide()
    return true
  }
  return _Window_Message_updateInput.apply(this, arguments)
}

const _Window_Message_update = Window_Message.prototype.update
Window_Message.prototype.update = function() {
  if (this._hideMessageManager.isButtonAvailable) {
    this._hideMessageManager.handleOpennessChanged(this.isOpen(), this.x, this.y, this.width, this.height)
  }
  _Window_Message_update.call(this)
}

const _Window_Message_updateWait = Window_Message.prototype.updateWait
Window_Message.prototype.updateWait = function () {
  if (!this.isClosed() && !$gameMessage.isChoice()) {
    if (Input.isTriggered('space') || TouchInput.isCancelled()) {
      _Window_Message_toggleMessage.call(this)
    } else {
      if (WindowVisibilityManager.isHiding()) {
        this.hide()
        WindowVisibilityManager.setHiding(false)
      } else if (WindowVisibilityManager.isShowing()) {
        this.show()
        WindowVisibilityManager.setShowing(false)
      } else if (WindowVisibilityManager.isToggling()) {
        _Window_Message_toggleMessage.call(this)
        WindowVisibilityManager.setToggling(false)
      }
    }
  }
  const isWaiting = _Window_Message_updateWait.apply(this, arguments)
  if (this._hideMessageManager.isHidden && this.visible) {
    this.hide()
  }
  return isWaiting
}

const _Window_Message_updateBackground = Window_Message.prototype.updateBackground
Window_Message.prototype.updateBackground = function() {
  _Window_Message_updateBackground.call(this)
  if (this._background === 0) {
    this._hideMessageManager.enableButton()
  } else {
    this._hideMessageManager.disableButton()
  }
}

const _Window_ChoiceList_update = Window_ChoiceList.prototype.update
Window_ChoiceList.prototype.update = function() {
  if (!this.visible) {
    return
  }
  _Window_ChoiceList_update.apply(this, arguments)
}

const _Window_NumberInput_update = Window_NumberInput.prototype.update
Window_NumberInput.prototype.update = function() {
  if (!this.visible) {
    return
  }
  _Window_NumberInput_update.apply(this, arguments)
}

const _Window_EventItem_update = Window_EventItem.prototype.update
Window_EventItem.prototype.update = function() {
  if (!this.visible) {
    return
  }
  _Window_EventItem_update.apply(this, arguments)
}

class WindowVisibilityManager {
  private static _show: boolean = false
  private static _hide: boolean = false
  private static _toggle: boolean = false

  public static setShowing(show: boolean) {
    this._show = show
  }

  public static setHiding(hide: boolean) {
    this._hide = hide
  }

  public static setToggling(toggle: boolean) {
    this._toggle = toggle
  }

  public static isShowing () {
    return this._show
  }

  public static isHiding () {
    return this._hide
  }

  public static isToggling () {
    return this._toggle
  }
}

class HideMessageButton {
  private _sprite: Sprite

  public get x () {
    return this._sprite.x
  }

  public set x (x: number) {
    this._sprite.x = x
  }

  public get y () {
    return this._sprite.y
  }

  public set y (y: number) {
    this._sprite.y = y
  }

  public get width () {
    return this._sprite.width
  }

  public get height () {
    return this._sprite.height
  }

  constructor (size: number) {
    const bitmap = new Bitmap(size, size)
    bitmap.fontFace = 'GameFont'
    bitmap.fontSize = size
    bitmap.textColor = '#ffffff'
    bitmap.drawText('✕', 0, 0, size, size)
    this._sprite = new Sprite(bitmap)
    this._sprite.x = 0
    this._sprite.y = 0
    this._sprite.visible = false
    SceneManager._scene.addChild(this._sprite)
  }

  public hide () {
    this._sprite.visible = false
  }

  public show () {
    this._sprite.visible = true
  }

  public adjust (right: number, top: number) {
    this.x = right - this.width - 4
    this.y = top + 4
  }

  public isPointInside (x: number, y: number) {
    return !!(x >= this.x && x < this.x + this.width && y >= this.y && y < this.y + this.height)
  }
}

class HideMessageManager {

  private _message: Window_Message
  private _hiddenSubWindows: Window_Base[]
  private _hideMessageButton: HideMessageButton
  private _isHidden: boolean
  private _isOpened: boolean
  private _isButtonAvailable: boolean

  public get isHidden () {
    return this._isHidden
  }

  public get isOpened () {
    return this._isOpened
  }

  public get isButtonAvailable () {
    return this._isButtonAvailable
  }

  constructor () {
    this._hiddenSubWindows = []
    this._hideMessageButton = null
    this._isOpened = false
    this._isHidden = false
    this._isButtonAvailable = false
  }

  public createHideMessageButton (size :number) {
    this._hideMessageButton = new HideMessageButton(size)
    this.enableButton()
  }

  public enableButton () {
    this._isButtonAvailable = true
  }

  public disableButton () {
    this._isButtonAvailable = false
  }

  public handleShow () {
    if (this.isButtonAvailable) {
      this._hideMessageButton.show()
    }
    this._hiddenSubWindows.forEach((subWindow) => subWindow.show())
    this._hiddenSubWindows = []
    this._isHidden = false
  }

  public handleHide (subWindows: Window_Base[]) {
    if (this.isButtonAvailable) {
      this._hideMessageButton.hide()
    }
    subWindows.forEach((subWindow) => {
      if (subWindow.visible) {
        subWindow.hide()
        if (this._hiddenSubWindows.indexOf(subWindow) === -1) {
          this._hiddenSubWindows.push(subWindow)
        }
      }
    })
    this._isHidden = true
  }

  public handleOpennessChanged (opened: boolean, x: number, y: number, width: number, height: number) {
    if (!this.isButtonAvailable) {
      return
    }
    if (opened) {
      if (!this.isOpened) {
        this.handleOpened(x, y, width, height)
      }
    } else {
      if (this.isOpened) {
        this.handleClosing()
      }
    }
  }

  public handleOpened (x: number, y: number, width: number, height: number) {
    this._isOpened = true
    if (this.isButtonAvailable) {
      this._hideMessageButton.adjust(width, y)
      this._hideMessageButton.show()
    }
  }

  public handleClosing () {
    this._isOpened = false
    if (this.isButtonAvailable) {
      this._hideMessageButton.hide()
    }
  }

  public isHidingTriggered () {
    if (this.isButtonAvailable && this._hideMessageButton.width) {
      return this._hideMessageButton.isPointInside(TouchInput.x, TouchInput.y)
    }
    return false
  }
}

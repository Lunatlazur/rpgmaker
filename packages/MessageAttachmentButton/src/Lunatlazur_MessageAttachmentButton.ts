//=============================================================================
// Lunatlazur_MessageAttachmentButton.js
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
 * @plugindesc Functional button on message window
 * @author Taku Aoi
 * @help This plugin adds some functional button to the message window.
 *
 * Command parameters
 *
 * In case that the command is 'scene':
 * By passing the "XXX" part of "Scene_XXX" (for example, Save, Load, Menu,
 * Title etc) as parameter, you can make transition to the corresponding scene
 * when button is pressed.
 *
 * In case that the command is 'plugin':
 * By passing the plug-in command name and arguments as parameter, you can
 * execute the corresponding plug-in command when the button is pressed.
 *
 * @param Custom button text font
 * @desc Additional button text fonts.
 * @type string[]
 *
 * @param buttons
 * @desc configure the buttons attached to the message window.
 * @type struct<button>[]
 * @default ["{\"text\":\"save\",\"command\":\"scene\",\"parameters\":\"save\"}","{\"text\":\"load\",\"command\":\"scene\",\"parameters\":\"load\"}"]
 */
/*:ja
 * @plugindesc メッセージウィンドウ拡張ボタンプラグイン
 * @author あおいたく
 * @help このプラグインはメッセージウィンドウに任意の機能を実行するためのボタンを
 * 追加します。
 *
 * コマンドのパラメータについて
 *
 * command が scene のとき：
 * パラメータにScene_XXX の XXX の部分（Save, Load, Menu, Title など）を
 * 指定することで、ボタンを押したときに該当のシーンに遷移させることができます。
 *
 * command が plugin のとき：
 * パラメータにプラグインコマンド名とパラメータを指定することで、ボタンを
 * 押したときに該当のプラグインコマンドを実行することができます。
 * *
 * @param フォント
 * @desc 追加のフォントを指定できます。先頭にあるものが優先して読み込まれます。
 * @default ["UD デジタル 教科書体 NP-R", "Klee"]
 * @type string[]
 *
 * @param ボタン
 * @desc メッセージウィンドウに表示するボタンを設定します。
 * @type struct<button>[]
 * @default ["{\"text\":\"セーブ\",\"command\":\"scene\",\"parameters\":\"save\"}","{\"text\":\"ロード\",\"command\":\"scene\",\"parameters\":\"load\"}"]
 */
/*~struct~button:
 * @param text
 * @desc text for button
 *
 * @param command
 * @desc command to be called when button pressed
 * @type select
 * @option scene
 * @option plugin command
 * @value plugin
 *
 * @param parameters
 * @desc parameters for command. see help for detail.
 */
/*~struct~button:ja
 * @param text
 * @desc ボタンに表示するテキスト。
 *
 * @param command
 * @desc ボタンを押したときに実行するコマンド。
 * @type select
 * @option シーン遷移
 * @value scene
 * @option プラグインコマンド
 * @value plugin
 *
 * @param parameters
 * @desc コマンドのパラメータを指定します。
 * 詳細はプラグインヘルプを参照してください。
 */

interface AttachmentButtonManager {
  isOpened: boolean
  isButtonAvailable: boolean
  handleShow (): void
  handleHide (): void
  handleOpened (x: number, y: number, width: number, height: number): void
  handleClosing (): void
  handleOpennessChanged (opened: boolean, x: number, y: number, width: number, height: number): void
  enableButton (): void
  disableButton (): void
  triggeredButton (): AttachmentButton
  handleMouseMove (): void
}

interface AttachmentButton {
  exec (): void
}

interface Window_Message {
  _attachmentButtonManager: AttachmentButtonManager
  _imageReservationId: number
}

interface IButtonParameter {
  text: string
  command: 'scene' | 'plugin'
  parameters: string
}

interface IButtonSetting {
  text: string
  command (interpreter?: Game_Interpreter): void
}

interface Input {
  _onKeyDown (keyEvent: { keyCode: number }): void
}

(function () {
  const pluginName = 'Lunatlazur_MessageAttachmentButton'
  const attachmentButtonSize = 20

  function getValue (params: { [key: string]: any }, ...names: string[]) {
    let found: string = null
    names.forEach((name) => {
      if (!!params[name]) {
        found = params[name]
      }
    })
    return found
  }

  const asString = getValue

  function parsePluginParameters () {
    const parameters = PluginManager.parameters(pluginName)
    const buttons = parameters['ボタン'] || parameters.buttons
    if (!buttons) {
      return []
    }
    const rawItems: string[] = (JSON.parse(buttons) as string[])
    return rawItems.map((rawItem): IButtonParameter => JSON.parse(rawItem))
  }

  const buttonSettings = parsePluginParameters().map((button) => {
    switch (button.command) {
    case 'scene':
      const sceneName = button.parameters.charAt(0).toUpperCase() + button.parameters.slice(1).toLowerCase()
      const scene: typeof Scene_Base = (window as any)[`Scene_${sceneName}`]
      if (!scene) {
        console.error(`Scene_${sceneName} は存在しないシーンです`)
        return
      }
      return {
        text: button.text,
        command () {
          SceneManager.push(scene)
        }
      }
    case 'plugin':
      return {
        text: button.text,
        command (interpreter: Game_Interpreter) {
          const [name, ...args] = button.parameters.split(" ")
          interpreter.pluginCommand(name, args)
        }
      }
    }
  })

  const customButtonTextFont = JSON.parse(asString(PluginManager.parameters(pluginName),
    'フォント',
    'Custom button text font',
  ))

  const _Window_Message_windowHeight = Window_Message.prototype.windowHeight
  Window_Message.prototype.windowHeight = function() {
    return _Window_Message_windowHeight.call(this) + attachmentButtonSize - this.standardPadding() / 2
  }

  const _Window_Message_initMembers = Window_Message.prototype.initMembers
  Window_Message.prototype.initMembers = function () {
    this._attachmentButtonManager = new AttachmentButtonManager
    _Window_Message_initMembers.call(this)
  }

  const _Window_Message_show = Window_Message.prototype.show
  Window_Message.prototype.show = function () {
    _Window_Message_show.call(this)
    this._attachmentButtonManager.handleShow()
  }

  const _Window_Message_hide = Window_Message.prototype.hide
  Window_Message.prototype.hide = function () {
    _Window_Message_hide.call(this)
    this._attachmentButtonManager.handleHide()
  }

  const _Window_Message_update = Window_Message.prototype.update
  Window_Message.prototype.update = function() {
    if (this._attachmentButtonManager.isButtonAvailable) {
      this._attachmentButtonManager.handleOpennessChanged(this.isOpen(), this.x, this.y, this.width, this.height)
    }
    _Window_Message_update.call(this)
  }

  TouchInput._onMouseMove = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX)
    const y = Graphics.pageToCanvasY(event.pageY)
    this._onMove(x, y)
  }

  const _Window_Message_updateInput = Window_Message.prototype.updateInput
  Window_Message.prototype.updateInput = function() {
    if (this._attachmentButtonManager.isButtonAvailable && _Window_Message_isButtonTouched.call(this)) {
      return true
    }
    _Window_Message_updateMouseMove.call(this)
    return _Window_Message_updateInput.apply(this, arguments)
  }

  function _Window_Message_updateMouseMove (this: Window_Message) {
    if (TouchInput.isMoved()) {
      this._attachmentButtonManager.handleMouseMove()
    }
  }

  const _Window_Message_updateBackground = Window_Message.prototype.updateBackground
  Window_Message.prototype.updateBackground = function() {
    _Window_Message_updateBackground.call(this)
    if (this._background === 0) {
      this._attachmentButtonManager.enableButton()
    } else {
      this._attachmentButtonManager.disableButton()
    }
  }

  function _Window_Message_isButtonTouched(this: Window_Message) {
    if (this.isOpen() && this.active && TouchInput.isTriggered()) {
      const button = this._attachmentButtonManager.triggeredButton()
      if (button) {
        button.exec()
        return true
      }
    }
    return false
  }

  const _Window_Message_drawMessageFace = Window_Message.prototype.drawMessageFace
  Window_Message.prototype.drawMessageFace = function() {
    if (this._attachmentButtonManager.isButtonAvailable) {
      const offsetY = (this.contentsHeight() - Window_Base._faceHeight) / 2
      this.drawFace($gameMessage.faceName(), $gameMessage.faceIndex(), 0, offsetY);
      ImageManager.releaseReservation(this._imageReservationId);
    } else {
      _Window_Message_drawMessageFace.call(this)
    }
  };


  function find<T> (items: T[], predicate: (item: T) => boolean): T {
    let found: T
    items.forEach((item) => {
      if (predicate(item)) {
        found = item
      }
    })
    return found
  }

  class AttachmentButton {
    private _sprite: Sprite
    private _func: (interpreter?: Game_Interpreter) => void
    private _text: string
    private _fontSize: number

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

    constructor (text: string, size?: number) {
      this._fontSize = size ? size : 28
      this._text = text
      const bitmap = new Bitmap(this._fontSize, this._fontSize)
      bitmap.fontFace = [...customButtonTextFont, 'GameFont'].join(',')
      bitmap.fontSize = this._fontSize
      bitmap.textColor = '#aaaaaa'
      bitmap.resize(bitmap.measureTextWidth(text), bitmap.height)
      bitmap.drawText(this._text, 0, 0, bitmap.width, this._fontSize)
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

    public setPosition (x: number, y: number) {
      this.x = x
      this.y = y
    }

    public isPointInside (x: number, y: number) {
      return !!(x >= this.x && x < this.x + this.width && y >= this.y && y < this.y + this.height)
    }

    public attachFunction (func: (interpreter?: Game_Interpreter) => void) {
      this._func = func
    }

    public isVisible () {
      return !!this._sprite.visible
    }

    public isTouchable () {
      return !!(this.isVisible() && this.width > 0)
    }

    public exec () {
      this._func($gameMap._interpreter)
    }

    public onMouseOver () {
      this._sprite.bitmap.clear()
      this._sprite.bitmap.textColor = '#ffffff'
      this._sprite.bitmap.drawText(this._text, 0, 0, this._sprite.bitmap.width, this._fontSize)
    }

    public onMouseLeave () {
      this._sprite.bitmap.clear()
      this._sprite.bitmap.textColor = '#aaaaaa'
      this._sprite.bitmap.drawText(this._text, 0, 0, this._sprite.bitmap.width, this._fontSize)
    }
  }

  class AttachmentButtonManager {

    private _buttons: AttachmentButton[]
    private _isOpened: boolean
    private _isButtonAvailable: boolean
    private _lastSelectedButton: AttachmentButton

    constructor () {
      this._buttons = buttonSettings.map((setting) => {
        const button = new AttachmentButton(setting.text, attachmentButtonSize)
        button.attachFunction(setting.command)
        return button
      })
      this._isOpened = false
      this._isButtonAvailable = false
    }

    public get isOpened () {
      return this._isOpened
    }

    public get isButtonAvailable () {
      return this._isButtonAvailable
    }

    public enableButton () {
      this._isButtonAvailable = true
    }

    public disableButton () {
      this._isButtonAvailable = false
    }

    public handleMouseMove () {
      if (this.isButtonAvailable) {
        const selectedButton = this.selectedButton()
        if (selectedButton) {
          if (selectedButton !== this._lastSelectedButton) {
            if (this._lastSelectedButton) {
              this._lastSelectedButton.onMouseLeave()
            }
            selectedButton.onMouseOver()
            this._lastSelectedButton = selectedButton
          }
        } else {
          if (this._lastSelectedButton) {
            this._lastSelectedButton.onMouseLeave()
            this._lastSelectedButton = null
          }
        }
      }
    }

    public handleShow () {
      if (this.isButtonAvailable) {
        this._buttons.forEach((button) => button.show())
      }
    }

    public handleHide () {
      if (this.isButtonAvailable) {
        this._buttons.forEach((button) => button.hide())
      }
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
        let right = width
        for (let i = this._buttons.length - 1; i >= 0; i--) {
          const button = this._buttons[i]
          button.setPosition(right - button.width - 8, y + height - button.height - 8)
          if (button.isPointInside(TouchInput.x, TouchInput.y)) {
            this._lastSelectedButton = button
            button.onMouseOver()
          }
          right -= button.width + 16
          button.show()
        }
      }
    }

    public handleClosing () {
      this._isOpened = false
      if (this.isButtonAvailable) {
        this._buttons.forEach((button) => button.hide())
      }
    }

    public triggeredButton () {
      if (this.isButtonAvailable) {
        return this.selectedButton()
      }
      return null
    }

    public selectedButton () {
      return find(this._buttons, (button) => {
        return button.isTouchable() && button.isPointInside(TouchInput.x, TouchInput.y)
      })
    }
  }
})()

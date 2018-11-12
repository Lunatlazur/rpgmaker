//=============================================================================
// Lunatlazur_ActorNameWindow.js
// ----------------------------------------------------------------------------
// Copyright (c) 2018 Taku Aoi
// This plugin is released under the zlib License.
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
 * @plugindesc Show actor name window
 * @author Taku Aoi
 * @help This plugin shows speaker's name window.
 *
 * Input the character name with \N<Character name> format
 * to display the speaker's name window.
 *
 * The same font as the message window is used for this window.
 */
/*:ja
 * @plugindesc 名前ウィンドウ表示プラグイン
 * @author あおいたく
 * @help このプラグインは名前ウィンドウを表示できるようにします。
 *
 * \N<キャラクター名> 形式でメッセージ内にキャラクターの名前を記述することで
 * メッセージウィンドウの上部に名前ウィンドウを表示するようになります。
 *
 * 名前ウィンドウのフォントはメッセージウィンドウのものが使われます。
 *
 * @param テキストカラー
 * @desc 名前を表示するテキストの色番号を指定します。
 * @default 1
 * @type number
 *
 */

interface Window_Message {
  _nameWindow: Window_ActorName
}

interface Window_ActorName extends Window_Base {
  setText (text: string): void
  processActorName (text: string): string
}

(function () {
  const pluginName = 'Lunatlazur_ActorNameWindow'


  function getValue (params: { [key: string]: any }, ...names: string[]) {
    let found: string = null
    names.forEach((name) => {
      if (!!params[name]) {
        found = params[name]
      }
    })
    return found
  }

  function asNumber (params: { [key: string]: any }, ...names: string[]) {
    return parseInt(getValue(params, ...names), 10)
  }

  const parameters = PluginManager.parameters(pluginName)

  const params = {
    textColor: asNumber(parameters, 'テキストカラー'),
  }

  class Window_ActorName extends Window_Base {
    private _parentWindow: Window_Message
    private _text: string
    constructor (_: any) {
      super()
      this.initialize.apply(this, arguments)
    }
    public initialize (): void
    public initialize (parentWindow?: Window_Message) {
      this._parentWindow = parentWindow
      super.initialize(0, 0, 240, this.windowHeight())
      this._padding = 4
      this._text = ''
      this._openness = 0
      this.deactivate()
      this.hide()
    }

    public standardFontFace () {
      if (this._parentWindow) {
        return this._parentWindow.standardFontFace()
      } else {
        return super.standardFontFace()
      }
    }

    public windowWidth () {
      this.resetFontSettings()
      return Math.ceil(this.textWidth(this._text) + this.padding * 2 + this.standardPadding() * 4)
    }

    public windowHeight () {
      return this.lineHeight() + this.padding * 2
    }

    public contentsWidth () {
      return this.width - this.padding * 2
    }

    public contentsHeight () {
      return this.lineHeight()
    }

    public update () {
      super.update()
      if (this.active || this.isClosed() || this.isClosing()) {
        return
      }
      if (this._parentWindow.isClosing()) {
        this._openness = this._parentWindow.openness
      }
      this.close()
    }

    public setText (text: string) {
      this._text = text
      this.refresh()
    }

    public refresh () {
      this.width = this.windowWidth()
      this.createContents()
      this.contents.clear()
      this.resetFontSettings()
      this.changeTextColor(this.textColor(params.textColor))
      this.drawText(this._text, this.standardPadding() * 2, 0, this.contents.width)
      this.y = this._parentWindow.y - this.windowHeight()
    }

    public processActorName (text: string) {
      return text.replace(/\x1bN\<(.*?)\>/gi, (whole: string, ...args: string[]) => {
        this.setText(args[0])
        this.show()
        this.open()
        this.activate()
        return ''
      })
    }
  }

  const Window_Message_createSubWindows = Window_Message.prototype.createSubWindows
  Window_Message.prototype.createSubWindows = function() {
    Window_Message_createSubWindows.call(this)
    this._nameWindow = new Window_ActorName(this)
  }

  const Window_Message_subWindows = Window_Message.prototype.subWindows
  Window_Message.prototype.subWindows = function() {
    return [...Window_Message_subWindows.call(this), this._nameWindow]
  }

  const Window_Message_startMessage = Window_Message.prototype.startMessage
  Window_Message.prototype.startMessage = function() {
    this._nameWindow.deactivate()
    Window_Message_startMessage.call(this)
  }

  const Window_Message_terminateMessage = Window_Message.prototype.terminateMessage
  Window_Message.prototype.terminateMessage = function() {
    this._nameWindow.deactivate()
    Window_Message_terminateMessage.call(this)
  }

  Window_Message.prototype.convertEscapeCharacters = function(text) {
    text = Window_Base.prototype.convertEscapeCharacters.call(this, text)
    text = this._nameWindow.processActorName(text)
    return text
  }
})()

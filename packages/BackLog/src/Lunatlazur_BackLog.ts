//=============================================================================
// Lunatlazur_BackLog.js
// ----------------------------------------------------------------------------
// Copyright (c) 2018 Taku Aoi
// This plugin is released under the zlib License.
// http://zlib.net/zlib_license.html
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2019/12/21
// ----------------------------------------------------------------------------
// [Web]    : https://lunatlazur.com/
// [Twitter]: https://twitter.com/lunatlazur/
// [GitHub] : https://github.com/Lunatlazur/
//=============================================================================
/*:
 * @plugindesc Show message back log
 * @author Taku Aoi
 * @help This plugin shows message back log.
 */
/*:ja
 * @plugindesc バックログ表示プラグイン
 * @author あおいたく
 * @help このプラグインはバックログを表示できるようにします。
 *
 * 名前ウィンドウ表示プラグイン、メッセージ表示継続プラグインと同時に使う場合は、
 * 本プラグインを上記プラグインよりも下に配置してください。
 */

interface IBackLogRow {
  actorName: string
  text: string
}

interface IBackLog {
  rows: IBackLogRow[]
}

interface Window {
  _downArrowSprite: Sprite
  _upArrowSprite: Sprite
}

interface Window_BackLog extends Window_Base {
  refresh: () => void
  offset: number
}

interface Window_ActorName extends Window_Base {
  _text: string
}

interface Scene_Map {
  _backLogWindow: Window_BackLog
}

(function () {
  const pluginName = 'Lunatlazur_BackLog'
  const maxNumberOfMessages = 100

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

  const actorNameWindowPlugin: {
    enabled: boolean
    params?: {
      textColor: number
      horizontalOffset: number
    }
  } = {
    enabled: false,
  }

  if (PluginManager._scripts.indexOf('Lunatlazur_ActorNameWindow') > 0) {
    actorNameWindowPlugin.enabled = true
    const parameters = PluginManager.parameters('Lunatlazur_ActorNameWindow') 
    actorNameWindowPlugin.params = {
      textColor: asNumber(parameters, 'テキストカラー'),
      horizontalOffset: asNumber(parameters, '水平位置'),
    }
  }

  const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.apply(this, arguments)
    switch ((command || '').toUpperCase()) {
    case 'ENABLE_BACKLOG':
    case 'バックログの有効化':
      BackLogManager.enable()
      break
    case 'DISABLE_BACKLOG':
    case 'バックログの無効化':
      BackLogManager.disable()
      break
    }
  }

  class BackLogManager {
    private static _backLog: IBackLog = {
      rows: [],
    }
    private static _hiddenWindows: Window_Base[] = []
    private static _enabled = true
    private static _busy = false

    public static initialize () {
      this._backLog = { rows: [] }
      this._hiddenWindows = []
      this._enabled = true
      this._busy = false
    }

    public static makeSaveContents () {
      return {
        enabled: this._enabled,
      }
    }

    public static extractSaveContents (contents: ISaveContents & { backLogState?: { enabled: boolean } }) {
      if (contents.backLogState) {
        this._enabled = contents.backLogState.enabled
      }
    }

    public static get numberOfRows () {
      return this._backLog.rows.length
    }

    public static get hiddenWindows () {
      return this._hiddenWindows
    }

    public static get disabled () {
      return !this._enabled
    }

    public static enable () {
      this._enabled = true
    }

    public static disable () {
      this._enabled = false
    }

    public static pushRow (text: string, actorName?: string) {
      if (maxNumberOfMessages <= this.numberOfRows) {
        this._backLog.rows.shift()
      }
      this._backLog.rows.push({ text, actorName })
    }

    public static pushHiddenWindow (...windows: Window_Base[]) {
      this._hiddenWindows.push(...windows)
    }

    public static clearHiddenWindows () {
      this._hiddenWindows = []
    }

    public static clearRows () {
      this._backLog.rows = []
    }

    public static scrolledContent (offset: number, length: number) {
      return [...this._backLog.rows].reverse().slice(offset, offset + length)
    }

    public static isBusy () {
      return this._busy
    }

    public static setBusy (busy: boolean) {
      this._busy = busy
    }
  }

  const DataManager_createGameObjects = DataManager.createGameObjects 
  DataManager.createGameObjects = function() {
    DataManager_createGameObjects.apply(this, arguments)
    BackLogManager.initialize()
  }

  const DataManager_makeSaveContents = DataManager.makeSaveContents
  DataManager.makeSaveContents = function() {
    const contents = DataManager_makeSaveContents.call(this)
    contents.backLogState = BackLogManager.makeSaveContents()
    return contents
  }

  const DataManager_extractSaveContents = DataManager.extractSaveContents
  DataManager.extractSaveContents = function(contents) {
    DataManager_extractSaveContents.apply(this, arguments)
    BackLogManager.extractSaveContents(contents)
  }
  
  const Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects
  Scene_Map.prototype.createDisplayObjects = function() {
    Scene_Map_createDisplayObjects.call(this)
    this._backLogWindow = new Window_BackLog()
    this.addChild(this._backLogWindow)
  }

  const Scene_Map_update = Scene_Map.prototype.update
  Scene_Map.prototype.update = function () {
    const threshold = 20
    if (this._backLogWindow.visible) {
      this._backLogWindow.update()
      return
    }
    Scene_Map_update.call(this)
    if (BackLogManager.disabled) {
      return
    }
    if (this._messageWindow.isClosing() || this._messageWindow.isOpening()) {
      return
    }
    if (this._scrollTextWindow.visible) {
      return
    }
    if (Input.isTriggered('pageup') || TouchInput.wheelY <= -threshold) {
      if (this._messageWindow.isOpen()) {
        BackLogManager.pushHiddenWindow(this._messageWindow)
        const visibleWindows = [...this._messageWindow.subWindows()].filter((window) => {
          return window.visible
        })
        if (!this._messageWindow._hideMessageManager) {
          visibleWindows.forEach((window) => window.hide())
          BackLogManager.pushHiddenWindow(...visibleWindows)
        }
        this._messageWindow._showFast = true
        this._messageWindow.hide()
      }
      if (this._mapNameWindow.isOpen()) {
        BackLogManager.pushHiddenWindow(this._mapNameWindow)
        this._mapNameWindow.hide()
      }
      this._backLogWindow.offset = 0
      this._backLogWindow.show()
    }
  }

  const Window_Message_startMessage = Window_Message.prototype.startMessage
  Window_Message.prototype.startMessage = function () {
    Window_Message_startMessage.call(this)
    if (BackLogManager.isBusy()) {
      return
    }
    BackLogManager.setBusy(true)
    const lines = this._textState.text.split('\n')
    const numVisibleRows = this.numVisibleRows()
    lines.reduce((prev, _, index) => {
      return (index % numVisibleRows ? prev : [...prev, lines.slice(index, index + numVisibleRows).join('\n')])
    } , [] as string[]).forEach((row) => {
      BackLogManager.pushRow(row, this._nameWindow && this._nameWindow.visible && this._nameWindow._text)
    })
  }
    
  const Window_Message_terminateMessage = Window_Message.prototype.terminateMessage
  Window_Message.prototype.terminateMessage = function() {
    BackLogManager.setBusy(false)
    Window_Message_terminateMessage.call(this)
  }

  class Window_BackLog extends Window_Base {
    public offset: number

    private _fontSize: number
    private _stayCount: number
    private _touching: boolean

    constructor (_?: any) {
      super()
      this.initialize.apply(this, arguments)
    }

    public initialize (): void
    public initialize (fontSize?: number) {
      super.initialize(0, 0, Graphics.width, Graphics.height)
      this._fontSize = fontSize || 28
      this.offset = 0
      this._stayCount = 0
      this._touching = false
      this.deactivate()
      this.hide()
    }

    public messageWindow () {
      return (SceneManager._scene as Scene_Map)._messageWindow
    }

    public standardPadding() {
      return 4
    }

    public standardFontSize () {
      return this._fontSize
    }

    public standardFontFace () {
      return Window_Message.prototype.standardFontFace.call(this)
    }

    public rowHeight () {
      const padding = 18
      /* 2カラムレイアウト
      const rowsPerMessage = this.messageWindow().numVisibleRows()
      */
      //* シングルカラムレイアウト
      const rowsPerMessage = this.messageWindow().numVisibleRows() + (actorNameWindowPlugin.enabled ? 1 : 0)
      //*/
      return this.lineHeight() * rowsPerMessage + padding * 2
    }

    public numVisibleRows () {
      return Math.floor(Graphics.height / this.rowHeight())
    }

    public update () {
      Window_Base.prototype.update.call(this)
      this.updateArrows()
      this.processHandling()
      this.processWheel()
      this.processTouch()
      this._stayCount++
    }
  
    public updateArrows () {
      this.downArrowVisible = this.offset > 0
      this.upArrowVisible = this.offset < BackLogManager.numberOfRows - 1
    }

    public _refreshArrows () {
      Window.prototype._refreshArrows.call(this)
      this._downArrowSprite.move(this.width - 16, this._downArrowSprite.y)
      this._upArrowSprite.move(this.width - 16, this._upArrowSprite.y)
    }
  
    public refresh () {
      this.createContents()
      this.contents.clear()
      this.resetFontSettings()
      this.updateArrows()
      this.drawRows(this.offset)
      this._stayCount = 0
    }

    public rewind () {
      if (this.offset > 0) {
        this.offset -= 1
        this.refresh()
      }
    }

    public forward () {
      if (this.offset < BackLogManager.numberOfRows - 1) {
        this.offset += 1
        this.refresh()
      }
    }

    public rewindPage () {
      const offset = this.offset
      this.offset -= this.numVisibleRows()
      if (this.offset < 0) {
        this.offset = 0
      }
      if (offset !== this.offset) {
        this.refresh()
      }
    }

    public forwardPage () {
      const offset = this.offset
      this.offset += this.numVisibleRows()
      if (this.offset >= BackLogManager.numberOfRows) {
        this.offset = BackLogManager.numberOfRows - 1
      }
      if (offset !== this.offset) {
        this.refresh()
      }
    }

    public isCancelTriggered () {
      return Input.isRepeated('cancel')
    }

    public processHandling () {
      if (Input.isRepeated('up')) {
        this.forward()
      }
      if (Input.isRepeated('down')) {
        this.rewind()
      }
      if (this.isCancelTriggered()) {
        this.processCancel()
      } else if (Input.isTriggered('pageup')) {
        this.forwardPage()
      } else if (Input.isTriggered('pagedown')) {
        this.rewindPage()
      }
    }
      
    public processCancel () {
      this.hide()
      BackLogManager.hiddenWindows.forEach((window) => {
        window.show()
      })
      BackLogManager.clearHiddenWindows()
    }

    public processWheel () {
      if (this.isOpen()) {
        const threshold = 20
        if (TouchInput.wheelY >= threshold) {
          this.rewind()
        }
        if (TouchInput.wheelY <= -threshold) {
          this.forward()
        }
      }
    }
  
    public isTouchedInsideFrame () {
      var x = this.canvasToLocalX(TouchInput.x)
      var y = this.canvasToLocalY(TouchInput.y)
      return x >= 0 && y >= 0 && x < this.width && y < this.height
    }

    public processTouch () {
      if (this.isOpen()) {
        if (TouchInput.isTriggered() && this.isTouchedInsideFrame()) {
          this._touching = true
          this.onTouch()
        } else if (TouchInput.isCancelled()) {
          this.processCancel()
        }
        if (this._touching) {
          if (TouchInput.isPressed()) {
            this.onTouch()
          } else {
            this._touching = false
          }
        }
      } else {
        this._touching = false
      }
    }
  
    public onTouch () {
      const x = this.canvasToLocalX(TouchInput.x)
      const y = this.canvasToLocalY(TouchInput.y)
      if (this._stayCount > 10 && x >= this.width - 20) {
        if (y < 20) {
          this.forward()
        } else if (y >= this.height - 20) {
          this.rewind()
        }
      }
    }
  
    public show () {
      this.refresh()
      super.show()
    }

    public drawRows (offset: number) {
      const rows = BackLogManager.scrolledContent(offset, this.numVisibleRows() + 1)
      const x = 14
      const marginY = (this.lineHeight() - 2) / 2
      rows.forEach ((row, index) => {
        const y = this.contentsHeight() - marginY - this.rowHeight() * (index + 1)
        this.contents.fillRect(0, y + marginY, this.contentsWidth(), 2, this.textColor(8))
        /* 2カラムレイアウト
        if (actorNameWindowPlugin.enabled) {
          if (row.actorName) {
            this.changeTextColor(this.textColor(actorNameWindowPlugin.params.textColor))
            this.drawText(row.actorName, x, y + this.lineHeight())
          }
          this.drawTextEx(row.text, x + 168, y + this.lineHeight())
        } else {
          this.drawTextEx(row.text, x, y + this.lineHeight())
        }
        /*/
        //* シングルカラムレイアウト
        if (actorNameWindowPlugin.enabled && row.actorName) {
          this.changeTextColor(this.textColor(actorNameWindowPlugin.params.textColor))
          this.drawText(row.actorName, x, y + this.lineHeight())
        }
        this.drawTextEx(row.text, x, y + this.lineHeight() * (actorNameWindowPlugin.enabled ? 2 : 1))
        //*/
      })
    }
  }

})()

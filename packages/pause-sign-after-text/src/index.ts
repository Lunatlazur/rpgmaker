const pluginName = 'Lunatlazur_PauseSignAfterText'

const _Window_Message_initMembers = Window_Message.prototype.initMembers
Window_Message.prototype.initMembers = function () {
  this._endOfTextPosition = { x: 0, y: 0 }
  _Window_Message_initMembers.call(this)
}

function _Window_Message_pauseSignOffsetX (this: Window_Message) {
  return this.contents.fontSize
}

function _Window_Message_pauseSignOffsetY (this: Window_Message) {
  return (this._padding + this.lineHeight()) / 4
}

const _Window_Message_onEndOfText = Window_Message.prototype.onEndOfText
Window_Message.prototype.onEndOfText = function () {
  if (this._textState) {
    const x = _Window_Message_pauseSignOffsetX.call(this)
    const y = _Window_Message_pauseSignOffsetY.call(this)
    this._endOfTextPosition.x = this._textState.x + x
    this._endOfTextPosition.y = this._textState.y + this._textState.height + y
  }
  _Window_Message_onEndOfText.call(this)
}

Window_Message.prototype._refreshPauseSign = function () {
  Window.prototype._refreshPauseSign.call(this)
  if (this._endOfTextPosition) {
    this._windowPauseSignSprite.move(this._endOfTextPosition.x, this._endOfTextPosition.y)
  }
}

Window_Message.prototype._updatePauseSign = function () {
  Window.prototype._updatePauseSign.call(this)
  if (this._endOfTextPosition) {
    this._windowPauseSignSprite.move(this._endOfTextPosition.x, this._endOfTextPosition.y)
  }
}

const pluginName = 'Lunatlazur_ConfigurableMessageWindow'

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

function asNumber (params: { [key: string]: any }, ...names: string[]) {
  return parseInt(getValue(params, ...names), 10)
}

function asBoolean (params: { [key: string]: any }, ...names: string[]) {
  const value = getValue(params, ...names).toLowerCase()
  return value === 'true' || value === 'on'
}

const parameters = PluginManager.parameters(pluginName)

const params = {
  numberOfMessageRows: asNumber(
    parameters,
    'メッセージ行数',
    'Number of message rows',
  ),
  customMessageWait: asNumber(
    parameters,
    'メッセージウェイト',
    'Custom Message wait',
  ),
  customMessageFont: JSON.parse(asString(
    parameters,
    'フォント',
    'Custom message font',
  )),
  applyCustomMessageFontToChoice: asBoolean(
    parameters,
    '選択肢に追加のフォント指定を反映',
    'Apply custom message font to choice',
  ),
}

const _Window_Base_standardFontFace = Window_Base.prototype.standardFontFace
Window_Message.prototype.standardFontFace = function () {
  const fontfaces = [
    ...params.customMessageFont,
    _Window_Base_standardFontFace.call(this),
  ].join(',')
  return fontfaces
}

Window_ChoiceList.prototype.standardFontFace = function () {
  const fontfaces = [
    ...params.customMessageFont,
    _Window_Base_standardFontFace.call(this),
  ].join(',')
  return fontfaces
}

const _Window_Message_updateMessage = Window_Message.prototype.updateMessage
Window_Message.prototype.updateMessage = function() {
  const speed = _Window_Message_getMessageSpeed()
  if (this._textState && !this._lineShowFast && !this._showFast) {
    if (speed <= 0) {
      this._showFast = true
    } else {
      this._waitCount = speed - 1
    }
  }
  return _Window_Message_updateMessage.apply(this, arguments)
}

const _Window_Message_getMessageSpeed = function() {
  return params.customMessageWait || 1
}

const _Window_Message_numVisibleRows = Window_Message.prototype.numVisibleRows
Window_Message.prototype.numVisibleRows = function() {
  return params.numberOfMessageRows ||
    _Window_Message_numVisibleRows.call(this)
}

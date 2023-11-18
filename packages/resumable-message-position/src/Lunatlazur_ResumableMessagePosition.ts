namespace RPGMakerMV {

  export interface SaveContents {
    novelState: ResumableMessagePosition.Game_MessageState
  }
  export interface SavefileInfo {
    chapter: string
    lastMessage: string
  }
}

namespace ResumableMessagePosition {
  export interface Game_MessageState {
    events: EventState
  }
  export interface EventState {
    [key: number]: number
  }
}

const pulginName = 'Lunatlazur_ResumableMessagePosition'

const _DataManager_createGameObjects = DataManager.createGameObjects
DataManager.createGameObjects = function() {
  _DataManager_createGameObjects.call(this)
  MessageStateManager._gameMessageState = new Game_MessageState
}

const _DataManager_makeSaveContents = DataManager.makeSaveContents
DataManager.makeSaveContents = function() {
  const contents = _DataManager_makeSaveContents.call(this)
  contents.novelState = MessageStateManager._gameMessageState
  return contents
}

const _DataManager_extractSaveContents = DataManager.extractSaveContents
DataManager.extractSaveContents = function(contents) {
  _DataManager_extractSaveContents.apply(this, arguments)
  MessageStateManager._gameMessageState = contents.novelState || new Game_MessageState
  const interpreter = $gameMap._interpreter
  const index = MessageStateManager.restoreEventIndex(interpreter._eventId)
  if (typeof index !== 'undefined') {
    interpreter._index = index
  }
}

const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  _Game_Interpreter_pluginCommand.apply(this, arguments)
  switch ((command || '').toUpperCase()) {
  case 'チャプター設定':
  case 'SET_CHAPTER':
    ChapterManager.chapter = args[0]
    break
  }
}

const _Game_Interpreter_executeCommand = Game_Interpreter.prototype.executeCommand
Game_Interpreter.prototype.executeCommand = function() {
  const index = this._index
  const nextFrameNeeded = _Game_Interpreter_executeCommand.call(this)
  if (MessageStateManager.isStateRecordableEvent(this._eventId) && nextFrameNeeded) {
    if (index === this._index) {
      MessageStateManager.removeEventIndex(this._eventId)
    }
  }
  return nextFrameNeeded
}

const _Game_Interpreter_command101 = Game_Interpreter.prototype.command101
Game_Interpreter.prototype.command101 = function() {
  const index = this._index
  const result = _Game_Interpreter_command101.call(this)
  if (MessageStateManager.isStateRecordableEvent(this._eventId)) {
    MessageStateManager.storeEventIndex(this._eventId, index - 1)
  }
  return result
}

const _DataManager_makeSavefileInfo = DataManager.makeSavefileInfo
DataManager.makeSavefileInfo = function() {
  const info = _DataManager_makeSavefileInfo.call(this)
  info.chapter = ChapterManager.chapter
  info.lastMessage = $gameMessage.allText()
  return info
}

const _Window_SavefileList_drawPartyCharacters = Window_SavefileList.prototype.drawPartyCharacters
Window_SavefileList.prototype.drawPartyCharacters = function(info, x, y) {
  if (info.lastMessage) {
    info.lastMessage = this.convertEscapeCharacters(info.lastMessage)
      .replace(/\x1bn<([^>]+)>/, '$1')
      .replace(/\x1b([\$\.\|\^!><\{\}\\]|[A-Z]+)/i, '')
    const maxLength = (this.width - this.standardPadding() * 2) / this.standardFontSize() - 4
    if (info.lastMessage.length >= maxLength) {
      info.lastMessage = info.lastMessage.substr(0, maxLength - 1) + '…'
    }
    this.drawText(info.lastMessage, 8, y - 32)
  } else {
    _Window_SavefileList_drawPartyCharacters.apply(this, arguments)
  }
}

const _Window_SavefileList_drawGameTitle = Window_SavefileList.prototype.drawGameTitle
Window_SavefileList.prototype.drawGameTitle = function(info, x, y, width) {
  _Window_SavefileList_drawGameTitle.apply(this, arguments);
  if (info.chapter) {
    this.drawText(info.chapter, x, y, width, 'right');
  }
}

class Game_MessageState implements ResumableMessagePosition.Game_MessageState {
  public events: ResumableMessagePosition.EventState = {}
}

class ChapterManager {
  public static chapter = ''
}

class MessageStateManager {
  public static _gameMessageState: Game_MessageState

  public static isMapEvent (eventId: number) {
    return eventId !== 0
  }

  public static isAutoEvent (eventId: number) {
    const event = $gameMap.event(eventId)
    if (!event) {
      return event
    }
    return event.page().trigger === 3
  }

  public static isStateRecordableEvent (eventId: number) {
    return this.isMapEvent(eventId) && this.isAutoEvent(eventId)
  }

  public static storeEventIndex (eventId: number, index: number) {
    this._gameMessageState.events[eventId] = index
  }

  public static removeEventIndex (eventId: number) {
    delete this._gameMessageState.events[eventId]
  }

  public static restoreEventIndex (eventId: number) {
    return this._gameMessageState.events[eventId]
  }
}


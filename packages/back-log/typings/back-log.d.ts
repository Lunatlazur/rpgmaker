declare interface Scene_Map {
  _backLogWindow: Window_BackLog
}

declare interface Window_BackLog extends Window_Base {
  offset: number
}

declare interface BackLogRow {
  actorName: string
  text: string
}

declare interface BackLog {
  rows: BackLogRow[]
}

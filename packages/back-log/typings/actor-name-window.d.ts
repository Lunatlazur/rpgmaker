declare interface Window_Message {
  _nameWindow: Window_ActorName
  _hideMessageManager: HideMessageManager
}

declare interface Window_ActorName extends Window_Base {
  _text: string
}

declare interface HideMessageManager {
}

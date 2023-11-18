interface HideMessageManager {
  isHidden: boolean
  isOpened: boolean
  isButtonAvailable: boolean
  handleShow (): void
  handleHide (subWindows: Window_Base[]): void
  handleOpened (x: number, y: number, width: number, height: number): void
  handleClosing (): void
  handleOpennessChanged (opened: boolean, x: number, y: number, width: number, height: number): void
  createHideMessageButton (size: number): void
  enableButton (): void
  disableButton (): void
  isHidingTriggered (): boolean
}

interface Window_Message {
  _hideMessageManager: HideMessageManager
}

interface Window_Message {
  _attachmentButtonManager: AttachmentButtonManager
  _imageReservationId: number
}

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

declare namespace AttachmentButton {
  export interface ButtonParameter {
    text: string
    command: 'scene' | 'plugin'
    parameters: string
  }

  export interface ButtonSetting {
    text: string
    command (interpreter?: Game_Interpreter): void
  }

  export interface Input {
    _onKeyDown (keyEvent: { keyCode: number }): void
  }
}

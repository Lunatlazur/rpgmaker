interface Window_Message {
  _attachmentButtonManager: AttachmentButtonManager
  _imageReservationId: number
}

declare namespace AttachmentButton {
  export type ButtonParameter = {
    text: string
    command: 'scene' | 'plugin'
    parameters: string
  }

  export type ButtonSetting = {
    text: string
    command (interpreter?: Game_Interpreter): void
  }

  export type Input = {
    _onKeyDown (keyEvent: { keyCode: number }): void
  }
}

interface Window_Message {
  _nameWindow: Window_ActorName
}

interface Window_ActorName extends Window_Base {
  setText (text: string): void
  processActorName (text: string): string
  updatePlacement (): void
  updateBackground (): void
}

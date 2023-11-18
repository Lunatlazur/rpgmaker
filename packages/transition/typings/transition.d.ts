interface Sprite_Transition extends Sprite_Base {
}

interface Spriteset_Base {
  _transitionSprite: Sprite_Transition
}

interface Game_Screen {
  startTransition (
    isFadingIn: boolean,
    isFilledWhite: boolean,
    name: string,
    duration: number,
  ): void
}

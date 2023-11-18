interface Game_Screen {
  startTransition (
    isFadingIn: boolean,
    isFilledWhite: boolean,
    name: string,
    duration: number,
  ): void
}

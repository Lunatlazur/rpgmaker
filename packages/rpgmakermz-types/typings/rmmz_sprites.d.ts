declare class Sprite_Animation extends Sprite {
  constructor()
  initMembers(): void
  setup(
    targets: Game_Battler[],
    animation: RPGMakerMZ.DataAnimation,
    mirror: boolean,
    delay: number,
    previous: Sprite_Animation | Sprite_AnimationMV
  ): void
  canStart(): boolean
  shouldWaitForPrevious(): boolean
  updateEffectGeometry(): void
  updateMain(): void
  processSoundTimings(): void
  processFlashTimings(): void
  checkEnd(): void
  updateFlash(): void
  isPlaying(): boolean
  setRotation(x: number, y: number, z: number): void
  setProjectionMatrix(renderer: PIXI.Renderer): void
  setCameraMatrix(renderer: PIXI.Renderer): void
  setViewport(renderer: PIXI.Renderer): void
  targetPosition(renderer: PIXI.Renderer): Point
  targetSpritePosition(sprite: Sprite): Point
  saveViewport(renderer: PIXI.Renderer): void
  resetViewport(renderer: PIXI.Renderer): void
  onBeforeRender(renderer: PIXI.Renderer): void
  onAfterRender(renderer: PIXI.Renderer): void
}

declare class Sprite_AnimationMV extends Sprite {
  constructor()
  initMembers(): void
  setup(
    targets: Game_Battler[],
    animation: RPGMakerMZ.DataAnimationMV,
    mirror: boolean,
    delay: number
  ): void
  setupRate(): number
  setupDuration(): number
  updateFlash(): void
  updateScreenFlash(): void
  absoluteX(): number
  absoluteY(): number
  updateHiding(): void
  isPlaying(): boolean
  loadBitmaps(): void
  isReady(): boolean
  createCellSprites(): void
  createScreenFlashSprite(): void
  updateMain(): void
  updatePosition(): void
  updateFrame(): void
  currentFrameIndex(): number
  updateAllCellSprites(frame: RPGMakerMZ.DataAnimationMV.Frame): void;
  updateCellSprite(sprite: Sprite, cell: RPGMakerMZ.DataAnimationMV.Cell): void
  processTimingData(timing: RPGMakerMZ.DataAnimationMV.Timing): void;
  startFlash(color: RPGMakerMZ.Color.Rgba, duration: number): void
  startScreenFlash(color: RPGMakerMZ.Color.Rgba, duration: number): void
  startHiding(duration: number): void
  onEnd(): void
}

declare class Sprite_Balloon extends Sprite {
  _target: Sprite | null
  _balloonId: number
  _duration: number
  constructor()
  initialize(): void
  initMembers(): void
  loadBitmap(): void
  setup(targetSprite: Sprite, balloonId: number): void
  update(): void
  updatePosition(): void
  updateFrame(): void
  speed(): number
  waitTime(): number
  frameIndex(): number
  isPlaying(): number
}

declare class Sprite_Battler extends Sprite_Clickable {
  constructor(battler: Game_Battler)
  initMembers(): void
  setBattler(battler: Game_Battler): void
  checkBattler(battler: Game_Battler): boolean
  mainSprite(): Sprite
  setHome(x: number, y: number): void
  updateMain(): void
  updateBitmap(): void
  updateFrame(): void
  updateMove(): void
  updatePosition(): void
  updateDamagePopup(): void
  updateSelectionEffect(): void
  setupDamagePopup(): void
  createDamageSprite(): void
  destroyDamageSprite(sprite: Sprite_Damage): void
  damageOffsetX(): number
  damageOffsetY(): number
  startMove(x: number, y: number, duration: number): void
  onMoveEnd(): void
  isEffecting(): boolean
  isMoving(): boolean
  inHomePosition(): boolean
  onMouseEnter(): void
  onMouseExit(): void
  onPress(): void
  onClick(): void
}
type ClickCallback = () => void
declare interface ButtonInfo {
  x: number
  w: number
}

declare class Sprite_Button extends Sprite_Clickable {
  protected _buttonType: string
  protected _clickHandler: ClickCallback | null
  protected _coldFrame: Rectangle
  protected _hotFrame: Rectangle
  constructor(buttonType: string)
  setupFrame(): void
  blockWidth(): number
  blockHeight(): number
  loadButtomImage(): void
  buttonData(): ButtonInfo
  update(): void
  checkBitmap(): void
  updateFrame(): void
  updateOpacity(): void
  setColdFrame(x: number, y: number, width: number, height: number): void
  setHotFrame(x: number, y: number, width: number, height: number): void
  setClickHandler(method: ClickCallback | null): void
  onClick(): void
  onMouseEnter(): void
  onMouseExit(): void
  onPress(): void
}

declare class Sprite_Character extends Sprite {
  protected _character: Game_Character
  protected _balloonDuration: number
  protected _tilesetId: number
  protected _upperBody: Sprite
  protected _lowerBody: Sprite
  protected _tileId: number
  protected _characterName: string
  protected _characterIndex: number
  protected _isBigCharacter: boolean
  protected _bushDepth: number
  constructor(character: Game_Character)
  initialize(): void
  initialize(character: Game_Character): void
  initMembers(): void
  setCharacter(character: Game_Character): void
  checkCharacter(character: Game_Character): boolean
  update(): void
  updateVisibility(): void
  isTile(): boolean
  isObjectCharacter(): boolean
  isEmptyCharacter(): boolean
  tilesetBitmap(tileId: number): Bitmap
  updateBitmap(): void
  isImageChanged(): boolean
  setTileBitmap(): void
  setCharacterBitmap(): void
  updateFrame(): void
  updateTileFrame(): void
  updateCharacterFrame(): void
  characterBlockX(): number
  characterBlockY(): number
  characterPatternX(): number
  characterPatternY(): number
  patternWidth(): number
  patternHeight(): number
  updateHalfBodySprites(): void
  createHalfBodySprites(): void
  updatePosition(): void
  updateOther(): void
}

declare abstract class Sprite_Clickable extends Sprite {
  protected _pressed: boolean
  protected _hovered: boolean
  constructor()
  initialize(): void
  update(): void
  processTouch(): void
  isPressed(): boolean
  isClickEnabled(): boolean
  isBeingTouched(): boolean
  hitTest(x: number, y: number): Rectangle
  abstract onMouseEnter(): void
  abstract onMouseExit(): void
  abstract onPress(): void
  abstract onClick(): void
}

declare class Sprite_Damage extends Sprite {
  constructor()
  setup(target: Game_Battler): void
  setupCriticalEffect(): void
  fontFace(): string
  fontSize(): number
  damageColor(): string
  outlineColor(): string
  outlineWidth(): number
  createMiss(): void
  createDigits(value: number): void
  createChildSprite(width: number, height: number): Sprite
  createBitmap(width: number, height: number): Bitmap
  update(): void
  updateChild(sprite: Sprite): void
  updateFlash(): void
  updateOpacity(): void
  isPlaying(): boolean
}

declare class Sprite_Destination extends Sprite {
  // TODO:
}

declare class Sprite_Timer extends Sprite {
  // TODO:
}

declare class Spriteset_Base<T, S> extends Sprite {
  protected _animationSprites: Sprite_AnimationMV | Sprite_Animation[]
  protected _baseSprite: Sprite
  protected _blackScreen: ScreenSprite
  protected _baseColorFilter: ColorFilter
  protected _pictureContainer: Sprite
  protected _timerSprite: Sprite_Timer
  protected _overallColorFilter: ColorFilter
  protected _effectsContainer: Tilemap
  constructor()
  loadSystemImages(): void
  createLowerLayer(): void
  createUpperLayer(): void
  update(): void
  createBaseSprite(): void
  createBaseFilters(): void
  createPictures(): void
  pictureContainerRect(): Rectangle
  createTimer(): void
  createOverallFilters(): void
  updateBaseFilters(): void
  updateOverallFilters(): void
  updatePosition(): void
  findTargetSprite(target: T): S | null | undefined
  updateAnimations(): void
  processAnimationRequests(): void
  createAnimation(request: Game_Temp.AnimationRequest): void
  createAnimationSprite(targets: Game_CharacterBase[], animation: RPGMakerMZ.DataAnimation, mirror: boolean, delay: number): void
  isMVAnimation(animation: RPGMakerMZ.DataAnimation): boolean
  makeTargetSprites(targets: T[]): S[]
  lastAnimationSprite(): Sprite_Animation | Sprite_AnimationMV
  isAnimationForEach(animation: RPGMakerMZ.DataAnimation): boolean
  animationBaseDelay(): number
  animationNextDelay(): number
  animationShouldMirror(target: Game_Battler): boolean
  removeAnimation(sprite: Sprite_Animation | Sprite_AnimationMV): void
  removeAllAnimations(): void
  isAnimationPlaying(): boolean
}

declare class Spriteset_Battle extends Spriteset_Base<Game_Battler, Sprite_Battler> {
  constructor()
  createBackground(): void
  createBattleback(): void
  createBattleField(): void
  battleFieldOffsetY(): number
  updateBattleback(): void
  createEnemies(): void
  compareEnemySprite(a: Sprite_Battler, b: Sprite_Battler): number
  createActors(): void
  updateActors(): void
  battlerSprites(): Sprite_Battler[]
  isEffecting(): boolean
  isAnyoneMoving(): boolean
  isBusy(): boolean
}

declare class Spriteset_Map extends Spriteset_Base<Game_CharacterBase, Sprite_Character> {
  protected _balloonSprites: Sprite_Balloon[]
  protected _characterSprites: Sprite_Character[]
  protected _parallax: TilingSprite
  protected _tilemap: Tilemap
  protected _tileset: RPGMakerMZ.DataTileset
  protected _shadowSprite: Sprite
  protected _destinationSprite: Sprite_Destination
  protected _weather: Weather
  protected _parallaxName: string
  initialize(): void
  loadSystemImages(): void
  createLowerLayer(): void
  update(): void
  hideCharacters(): void
  createParallax(): void
  createTilemap(): void
  loadTileset(): void
  createCharacters(): void
  createShadow(): void
  createDestination(): void
  createWeather(): void
  updateTileset(): void
  updateParallax(): void
  updateTilemap(): void
  updateShadow(): void
  updateWeather(): void
  updateBalloons(): void
  processBalloonRequests(): void
  createBalloon(request: Game_Temp.BalloonRequest): void
  removeBalloon(sprite: Sprite_Balloon): void
  removeAllBalloons(): void
  findTargetSprite(target: Game_CharacterBase): Sprite_Character | undefined
  animationBaseDelay(): number
}

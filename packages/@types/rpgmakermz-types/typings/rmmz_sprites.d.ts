declare class Sprite_Animation extends Sprite {
  constructor()
  initialize(): void
  initMembers(): void
  setup(
    targets: Game_Battler[],
    animation: RPGMakerMZ.DataAnimation,
    mirror: boolean,
    delay: number,
    previous: Sprite_Animation | Sprite_AnimationMV
  ): void
  canStart(): boolean
  destroy(): void
  update(): void
  _render(renderer: PIXI.Renderer): void
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
  resetViewport(renderer: PIXI.Renderer): void
  onBeforeRender(renderer: PIXI.Renderer): void
  onAfterRender(renderer: PIXI.Renderer): void
}

declare class Sprite_AnimationMV extends Sprite {
  constructor()
  initialize(): void
  initMembers(): void
  setup(
    targets: Game_Battler[],
    animation: RPGMakerMZ.DataAnimationMV,
    mirror: boolean,
    delay: number
  ): void
  setupRate(): number
  setupDuration(): number
  update(): void
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
  initialize(): void
  initialize(battler: Game_Battler): void
  initMembers(): void
  setBattler(battler: Game_Battler): void
  checkBattler(battler: Game_Battler): boolean
  mainSprite(): Sprite
  setHome(x: number, y: number): void
  update(): void
  updateVisibility(): void
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
  initialize(): void
  initialize(buttonType: string): void
  setupFrames(): void
  blockWidth(): number
  blockHeight(): number
  loadButtonImage(): void
  buttonData(): ButtonInfo
  update(): void
  checkBitmap(): void
  updateFrame(): void
  updateOpacity(): void
  setColdFrame(x: number, y: number, width: number, height: number): void
  setHotFrame(x: number, y: number, width: number, height: number): void
  setClickHandler(method: ClickCallback | null): void
  onClick(): void
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
  onMouseEnter(): void
  onMouseExit(): void
  onPress(): void
  onClick(): void
}

declare class Sprite_Damage extends Sprite {
  constructor()
  initialize(): void
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
  destroy(): void
  isPlaying(): boolean
}

declare class Sprite_Destination extends Sprite {
  constructor()
  initialize(): void
  destroy(): void
  update(): void
  createBitmap(): void
  updatePosition(): void
  updateAnimation(): void
}

declare class Sprite_Timer extends Sprite {
  constructor()
  initialize(): void
  destroy(): void
  createBitmap(): void
  fontFace(): string
  fontSize(): number
  update(): void
  updateBitmap(): void
  redraw(): void
  timerText(): string
  updatePosition(): void
  updateVisibility(): void
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
  initialize(): void
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
  destroy(): void
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
  initialize(): void
  createBackground(): void
  createBattleback(): void
  createBattleField(): void
  battleFieldOffsetY(): number
  updateBattleback(): void
  createEnemies(): void
  compareEnemySprite(a: Sprite_Battler, b: Sprite_Battler): number
  loadSystemImages(): void
  createLowerLayer(): void
  update(): void
  findTargetSprite(target: Game_Battler): Sprite_Battler
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
  destroy(): void
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

declare class Sprite_Actor extends Sprite_Battler {
  createMainSprite(): void
  createShadowSprite(): void
  createStateSprite(): void
  createWeaponSprite(): void
  damageOffsetX(): number
  damageOffsetY(): number
  initMembers(): void
  initialize(): void
  initialize(battler: Game_Actor): void
  mainSprite(): Sprite
  motionSpeed(): number
  moveToStartPosition(): void
  onMoveEnd(): void
  refreshMotion(): void
  retreat(): void
  setActorHome(index: number): void
  setBattler(battler: Game_Battler): void
  override setBattler(battler: Game_Actor): void
  setupMotion(): void
  setupWeaponAnimation(): void
  shouldStepForward(): boolean
  startEntryMotion(): void
  startMotion(motionType: string): void
  stepBack(): void
  stepForward(): void
  update(): void
  updateBitmap(): void
  updateFrame(): void
  updateMain(): void
  updateMotion(): void
  updateMotionCount(): void
  updateMove(): void
  updateShadow(): void
  updateTargetPosition(): void
}

declare class Sprite_Enemy extends Sprite_Battler {
  createStateIconSprite(): void
  damageOffsetX(): number
  damageOffsetY(): number
  initMembers(): void
  initVisibility(): void
  initialize(): void
  override initialize(battler: Game_Enemy): void
  isEffecting(): boolean
  loadBitmap(name: string): void
  revertToNormal(): void
  setBattler(battler: Game_Battler): void
  override setBattler(battler: Game_Enemy): void
  setHue(hue: number): void
  setupEffect(): void
  startAppear(): void
  startBlink(): void
  startBossCollapse(): void
  startCollapse(): void
  startDisappear(): void
  startEffect(effectType: string): void
  startInstantCollapse(): void
  startWhiten(): void
  update(): void
  updateAppear(): void
  updateBitmap(): void
  updateBlink(): void
  updateBossCollapse(): void
  updateCollapse(): void
  updateDisappear(): void
  updateEffect(): void
  updateFrame(): void
  updateInstantCollapse(): void
  updatePosition(): void
  updateStateSprite(): void
  updateWhiten(): void
}

declare class Sprite_Battleback extends Sprite {
  adjustPosition(): void
  autotileType(z: number): number
  battleback1Bitmap(): Bitmap
  battleback1Name(): string
  battleback2Bitmap(): Bitmap
  battleback2Name(): string
  defaultBattleback1Name(): string
  defaultBattleback2Name(): string
  initialize(): void
  override initialize(type: number): void
  normalBattleback1Name(): string
  normalBattleback2Name(): string
  overworldBattleback1Name(): string
  overworldBattleback2Name(): string
  shipBattleback1Name(): string
  shipBattleback2Name(): string
  terrainBattleback1Name(type: number): string
  terrainBattleback2Name(type: number): string
}

declare class Sprite_Gauge extends Sprite {
  bitmapHeight(): number
  bitmapWidth(): number
  createBitmap(): void
  currentMaxValue(): number
  currentValue(): number
  destroy(options?: any): void
  drawGauge(): void
  drawGaugeRect(x: number, y: number, width: number, height: number): void
  drawLabel(): void
  drawValue(): void
  flashingColor1(): string
  flashingColor2(): string
  gaugeBackColor(): string
  gaugeColor1(): string
  gaugeColor2(): string
  gaugeHeight(): number
  gaugeRate(): number
  gaugeX(): number
  initMembers(): void
  initialize(): void
  isValid(): boolean
  label(): string
  labelColor(): string
  labelFontFace(): string
  labelFontSize(): number
  labelOpacity(): number
  labelOutlineColor(): string
  labelOutlineWidth(): number
  labelY(): number
  measureLabelWidth(): number
  redraw(): void
  setup(battler: Game_Battler, statusType: string): void
  setupLabelFont(): void
  setupValueFont(): void
  smoothness(): number
  textHeight(): number
  update(): void
  updateBitmap(): void
  updateFlashing(): void
  updateGaugeAnimation(): void
  updateTargetValue(value: number, maxValue: number): void
  valueColor(): string
  valueFontFace(): string
  valueFontSize(): number
  valueOutlineColor(): string
  valueOutlineWidth(): number
}

declare interface Sprite_Name extends Omit<Sprite, 'name'> {}
declare class Sprite_Name {
  bitmapHeight(): number
  bitmapWidth(): number
  createBitmap(): void
  destroy(options?: any): void
  fontFace(): string
  fontSize(): number
  initMembers(): void
  initialize(): void
  name(): string
  outlineColor(): string
  outlineWidth(): number
  redraw(): void
  setup(battler: Game_Actor): void
  setupFont(): void
  textColor(): string
  update(): void
  updateBitmap(): void
}

declare class Sprite_StateIcon extends Sprite {
  animationWait(): number
  initMembers(): void
  initialize(): void
  loadBitmap(): void
  setup(battler: Game_Battler): void
  shouldDisplay(): boolean
  update(): void
  updateFrame(): void
  updateIcon(): void
}

declare class Sprite_StateOverlay extends Sprite {
  animationWait(): number
  initMembers(): void
  initialize(): void
  loadBitmap(): void
  setup(battler: Game_Battler): void
  update(): void
  updateFrame(): void
  updatePattern(): void
}

declare class Sprite_Weapon extends Sprite {
  animationWait(): number
  initMembers(): void
  initialize(): void
  isPlaying(): boolean
  loadBitmap(): void
  setup(weaponImageId: number): void
  update(): void
  updateFrame(): void
  updatePattern(): void
}

declare class Sprite_Picture extends Sprite {
  initialize(): void
  override initialize(pictureId: number): void
  loadBitmap(): void
  picture(): Game_Picture
  update(): void
  updateBitmap(): void
  updateOrigin(): void
  updateOther(): void
  updatePosition(): void
  updateScale(): void
  updateTone(): void
}

//-----------------------------------------------------------------------------
declare interface Array<T> {
  clone(): T[]
  equals(array: unknown[]): boolean
  remove(element: T): T[]

  /**
   * Checks whether the array contains a given element.
   *
   * @deprecated include should be used instead.
   * @param element
   */
  contains(element: unknown): boolean
}

declare interface Math {
  randomInt(max: number): number
}

declare interface Number {
  clamp(min: number, max: number): number
  mod(n: number): number
  padZero(length: number): string
}

declare interface String {
  /**
   * @deprecated include should be used instead.
   * @param string
   */
  contains(string: string): boolean
  format(): string
  padZero(length: number): string
}

//-----------------------------------------------------------------------------
declare class Utils {
  private constructor()

  static RPGMAKER_NAME: string
  static RPGMAKER_VERSION: string

  static checkRMVersion(version: string): boolean
  static isOptionValid(name: string): boolean
  static isNwjs(): boolean
  static isMobileDevice(): boolean
  static isMobileSafari(): boolean
  static isAndroidChrome(): boolean
  static isLocal(): boolean
  static canUseWebGL(): boolean
  static canUseWebAudioAPI(): boolean
  static canUseCssFontLoading(): boolean
  static canUseIndexedDB(): boolean
  static canPlayOgg(): boolean
  static canPlayWebm(): boolean
  static encodeURI(str: string): string
  static extractFileName(filename: string): string
  static escapeHtml(str: string): string
  static containsArabic(): boolean
  static setEncryptionInfo(hasImages: boolean, hasAudio: boolean, key: string): void
  static hasEncryptedImages(): boolean
  static hasEncryptedAudio(): boolean
  static decryptArrayBuffer(source: ArrayBuffer): ArrayBuffer
}

//-----------------------------------------------------------------------------
declare class Graphics {
  private constructor()
  static initialize(): boolean

  static _width: number
  static _height: number
  static _defaultScale: number
  static _realScale: number
  static _errorPrinter: HTMLElement | null
  static _tickHandler: ((delta: number) => void) | null
  static _canvas: HTMLCanvasElement | null
  static _fpsCounter: Graphics.FPSCounter | null
  static _loadingSpinner: HTMLElement | null
  static _stretchEnabled: boolean
  static _app: PIXI.Application | null
  static _effekseer: effekseer.EffekseerContext | null
  static _wasLoading: boolean

  static frameCount: number
  static boxHeight: number
  static boxWidth: number

  static app: PIXI.Application | null
  static effekseer: effekseer.EffekseerContext | null

  static setTickHandler(handler: (delta: number) => void): void
  static startGameLoop(): void
  static stopGameLoop(): void
  static setStage(stage: Stage): void
  static startLoading(): void
  static endLoading(): boolean
  static printError(name: string, message: string, error: Error | null): void
  static showRetryButton(retry: () => void): void
  static eraseError(): void
  static pageToCanvasX(x: number): number
  static pageToCanvasY(y: number): number
  static isInsideCanvas(x: number, y: number): boolean
  static showScreen(): void
  static hideScreen(): void
  static resize(width: number, height: number): void

  static width: number
  static height: number
  static defaultScale: number

  static _createAllElements(): void
  static _updateAllElements(): void
  static _onTick(deltaTime: number): void
  static _canRender(): boolean
  static _updateRealScale(): number
  static _stretchWidth(): number
  static _stretchHeight(): number
  static _makeErrorHtml(name: string, message: string): string
  static _defaultStretchMode(): boolean
  static _createErrorPrinter(): void
  static _updateErrorPrinter(): void
  static _createCanvas(): void
  static _updateCanvas(): void
  static _updateVideo(): void
  static _createLoadingSpinner(): void
  static _createFPSCounter(): void
  static _centerElement(element: HTMLElement): void
  static _disableContextMenu(): void
  static _applyCanvasFilter(): void
  static _clearCanvasFilter(): void
  static _setupEventHandlers(): void
  static _onWindowResize(): void
  static _onKeyDown(event: KeyboardEvent): void
  static _switchFPSCounter(): void
  static _switchStretchMode(): void
  static _switchFullScreen(): void
  static _isFullScreen(): boolean
  static _requestFullScreen(): void
  static _cancelFullScreen(): void
  static _createPixiApp(): void
  static _setupPixi(): void
  static _createEffekseerContext(): void
}

declare namespace Graphics {
    class FPSCounter {
    initialize(): void

    _tickCount: number
    _frameTime: number
    _frameStart: number
    _lastLoop: number
    _showFps: boolean
    fps: number
    duration: number
    _boxDiv: HTMLDivElement | null
    _labelDiv: HTMLDivElement | null
    _numberDiv: HTMLDivElement | null

    startTick(): void
    endTick(): void
    switchMode(): void
    _createElements(): void
    _update(): void
  }
}

//-----------------------------------------------------------------------------
declare class Point extends PIXI.Point {
  constructor(x: number, y: number)
  initialize(x: number, y: number): void
}

//-----------------------------------------------------------------------------
declare class Rectangle extends PIXI.Rectangle {
  constructor(x: number, y: number, width: number, height: number)
  initialize(x: number, y: number, width: number, height: number): void
}

//-----------------------------------------------------------------------------
declare class Bitmap {
  constructor(width: number, height: number)
  initialize(width: number, height: number): void

  _canvas: HTMLCanvasElement | null
  _context: CanvasRenderingContext2D | null
  _baseTexture: PIXI.BaseTexture | null
  _image: HTMLImageElement | null
  _url: string
  _paintOpacity: number
  _smooth: boolean
  _loadListeners: Array<() => void>
  _loadingState: 'none' | 'loading' | 'loaded' | 'error'
  fontFace: string
  fontSize: number
  fontBold: boolean
  fontItalic: boolean
  textColor: string
  outlineColor: string
  outlineWidth: number

  static load(url: string): Bitmap
  static snap(stage: Stage): Bitmap

  isReady(): boolean
  isError(): boolean

  get url(): string
  get baseTexture(): PIXI.BaseTexture | null
  get image(): HTMLImageElement | null
  get canvas(): HTMLCanvasElement | null
  get context(): CanvasRenderingContext2D | null
  get width(): number
  get height(): number
  get rect(): Rectangle
  accessor smooth: boolean
  accessor paintOpacity: number

  destroy(): void
  resize(width: number, height: number): void
  blt(source: Bitmap, sx: number, sy: number, sw: number, sh: number, dx: number,dy: number, dw: number, dh: number): void
  getPixel(x: number, y: number): string
  getAlphaPixel(x: number, y: number): string
  clearRect(x: number, y: number, width: number, height: number): void
  clear(): void
  fillRect(x: number, y:number, width: number, height: number, color: string): void
  fillAll(color: string): void
  strokeRect(x: number, y: number, width: number, height: number, color: string): void
  gradientFillRect(x: number, y: number, width: number, height: number, color1: string, color2: string, vertical: boolean): void
  drawCircle(x: number, y: number, radius: number, color: number): void
  drawText(text: Stringifiable, x: number, y: number, maxWidth: number, lineHeight:number, align: string): void
  measureTextWidth(text: string): number
  addLoadListener(listener: (self: Bitmap) => void): void
  retry(): void

  _makeFontNameText(): string
  _drawTextOutline(text: Stringifiable, tx: number, ty: number, maxWidth: number): void
  _drawTextBody(text: Stringifiable, tx: number, ty: number, maxWidth: number): void
  _createCanvas(width: number, height: number): void
  _ensureCanvas(): void
  _destroyCanvas(): void
  _createBaseTexture(source: ConstructorParameters<typeof PIXI.BaseTexture>): void
  _updateScaleMode(): void
  _startLoading(): void
  _startDecrypting(): void
  _onXhrLoad(xhr: XMLHttpRequest): void
  _onLoad(): void
  _callLoadListeners(): void
  _onError(): void
}

//-----------------------------------------------------------------------------
interface Sprite extends Omit<PIXI.Sprite, 'width' | 'height'> {}
declare class Sprite {
  constructor(bitmap?: Bitmap)
  initialize(bitmap?: Bitmap): void

  _bitmap?: Bitmap
  _frame: Rectangle
  _hue: number
  _blendColor: RPGMakerMZ.Color.Rgba
  _colorTone: RPGMakerMZ.Color.Tone
  _colorFilter: null
  _blendMode: number
  _hidden: boolean
  _refreshFrame: boolean

  static _emptyBaseTexture: PIXI.BaseTexture | null
  static _counter: number

  accessor bitmap: Bitmap
  accessor width: number
  accessor height: number
  accessor opacity: number
  accessor blendMode: number

  destroy(): void
  update(): void
  hide(): void
  show(): void
  updateVisibility(): void
  move(x: number, y: number): void
  setFrame(x: number, y: number, width: number, height: number): void
  setHue(hue: number): void
  getBlendColor(): RPGMakerMZ.Color.Rgba
  setBlendColor(color: RPGMakerMZ.Color.Rgba): void
  getColorTone(): RPGMakerMZ.Color.Tone
  setColorTone(tone: RPGMakerMZ.Color.Tone): void

  _onBitmapChange(): void
  _onBitmapLoad(bitmapLoaded: Bitmap): void
  _refresh(): void
  _createColorFilter(): void
  _updateColorFilter(): void
}

//-----------------------------------------------------------------------------
interface Tilemap extends Omit<PIXI.Container , 'width' | 'height'> {}
declare class Tilemap {
  constructor()
  initialize(): void

  _width: number
  _height: number
  _margin: number
  _mapWidth: number
  _mapHeight: number
  _mapData: number[] | null
  _bitmaps: Bitmap[]

  tileWidth: number
  tileHeight: number
  origin: Point
  flags: number[]
  animationCount: number
  horizontalWrap: boolean
  verticalWrap: boolean

  accessor width: number
  accessor height: number

  destroy(): void
  setData(width: number, height: number, data: number[]): void
  isReady(): boolean
  update(): void
  setBitmaps(bitmaps: Bitmap[]): void
  refresh(): void
  updateTransform(): void

  _createLayers(): void
  _updateBitmaps(): void
  _addAllSpots(startX: number, startY: number): void
  _addSpot(startX: number, startY: number, x: number, y: number): void
  _addSpotTile(tileId: number, dx: number, dy: number): void
  _addTile(): void
  _addNormalTile(layer: Tilemap.Layer, tileId: number, dx: number, dy: number): void
  _addAutotile(layer: Tilemap.Layer, tileId: number, dx: number, dy: number): void
  _addTableEdge(layer: Tilemap.Layer, tileId: number, dx: number, dy: number): void
  _addShadow(layer: Tilemap.Layer, shadowBits: number, dx: number, dy: number): void
  _readMapData(x: number, y: number, z: number): number
  _isHigherTile(tileId: number): boolean
  _isTableTile(tileId: number): boolean
  _isOverpassPosition(): boolean
  _sortChildren(): void
  _compareChildOrder(a: Sprite, b: Sprite): number

  static TILE_ID_B: number
  static TILE_ID_C: number
  static TILE_ID_D: number
  static TILE_ID_E: number
  static TILE_ID_A5: number
  static TILE_ID_A1: number
  static TILE_ID_A2: number
  static TILE_ID_A3: number
  static TILE_ID_A4: number
  static TILE_ID_MAX: number

  static isVisibleTile(tileId: number): boolean
  static isAutotile(tileId: number): boolean
  static getAutotileKind(tileId: number): number
  static getAutotileShape(tileId: number): number
  static makeAutotileId(tileId: number): number
  static isSameKindTile(tileId: number): boolean
  static isTileA1(tileId: number): boolean
  static isTileA2(tileId: number): boolean
  static isTileA3(tileId: number): boolean
  static isTileA4(tileId: number): boolean
  static isTileA5(tileId: number): boolean
  static isWaterTile(tileId: number): boolean
  static isWaterfallTile(tileId: number): boolean
  static isGroundTile(tileId: number): boolean
  static isShadowingTile(tileId: number): boolean
  static isRoofTile(tileId: number): boolean
  static isWallTopTile(tileId: number): boolean
  static isWallSideTile(tileId: number): boolean
  static isWallTile(tileId: number): boolean
  static isFloorTypeAutotile(tileId: number): boolean
  static isWallTypeAutotile(tileId: number): boolean
  static isWaterfallTypeAutotile(tileId: number): boolean

  static FLOOR_AUTOTILE_TABLE: RPGMakerMZ.Tilemap.AutoTile.Composite[]
  static WALL_AUTOTILE_TABLE: RPGMakerMZ.Tilemap.AutoTile.Composite[]
  static WATERFALL_AUTOTILE_TABLE: RPGMakerMZ.Tilemap.AutoTile.Composite[]
}
declare namespace Tilemap {
  class Layer {
    constructor()
    initialize(): void

    _elements: RPGMakerMZ.Tilemap.Layer.Element[]
    _indexBuffer: PIXI.Buffer | null
    _indexArray: Float32Array
    _vertexBuffer: PIXI.Buffer | null
    _vertexArray: Float32Array
    _vao: PIXI.Geometry | null
    _needsTexturesUpdate: boolean
    _needsVertexUpdate: boolean
    _images: Array<HTMLImageElement | HTMLCanvasElement>
    _state: PIXI.State
    _shader: PIXI.Shader
    _internalTextures: PIXI.Texture[]

    static MAX_GL_TEXTURES: number
    static VERTEX_STRIDE: number

    destroy(): void
    setBitmaps(bitmaps: Bitmap[]): void
    clear(): void
    addRect(setNumber: number, sx: number, sy: number, dx: number, dy: number, w: number, h: number): void
    render(renderer: PIXI.ObjectRenderer): void
    isReady(): boolean

    _createVao(): void
    _updateIndexBuffer(): void
    _updateVertexBuffer(): void
  }

  class Renderer extends PIXI.ObjectRenderer {
    constructor()
    initialize(): void

    _shader: PIXI.Shader | null
    _images: Array<HTMLImageElement | HTMLCanvasElement>
    _internalTextures: PIXI.Texture[]
    _clearBuffer: Uint8Array

    override destroy(): void
    getShader(): PIXI.Shader

    contextChange(): void
    _createShader(): void
    _createInternalTextures(): void
    _destroyInternalTextures(): void
    updateTextures(renderer: PIXI.ObjectRenderer, images: Array<HTMLImageElement | HTMLCanvasElement>): void
    bindTextures(renderer: PIXI.ObjectRenderer): void
  }
}

//-----------------------------------------------------------------------------
declare class TilingSprite extends PIXI.TilingSprite {
  constructor(bitmap?: Bitmap)
  initialize(bitmap?: Bitmap): void

  _bitmap?: Bitmap
  // PIXI.TilingSprite で定義済みだが型宣言にないのでここで宣言する
  _width: number
  _height: number
  _frame: Rectangle
  origin: Point

  accessor bitmap: Bitmap
  accessor opacity: number

  override destroy(): void
  update(): void
  move(x: number, y: number, width: number, height: number): void
  setFrame(x: number, y: number, width: number, height: number): void
  updateTransform(): void

  _onBitmapChange(): void
  _onBitmapLoad(): void
  _refresh(): void
}

//-----------------------------------------------------------------------------
declare class ScreenSprite extends PIXI.Container {
  constructor()
  initialize(): void

  _graphics: PIXI.Graphics
  _red: number
  _green: number
  _blue: number

  accessor opacity: number

  override destroy(): void
  setColor(r: number,g: number,b: number): void
  setBlack(): void
  setWhite(): void
}

//-----------------------------------------------------------------------------
interface Window extends Omit<PIXI.Container , 'width' | 'height'> {}
declare class Window {
  constructor()
  initialize(): void

  _isWindow: boolean
  _windowskin: Bitmap | null
  _width: number
  _height: number
  _cursorRect: Rectangle
  _openness: number
  _animationCount: number
  _padding: number
  _margin: number
  _colorTone: RPGMakerMZ.Color.Tone
  _innerChildren: PIXI.Container[]
  _container: PIXI.Container | null
  _backSprite: Sprite | null
  _frameSprite: Sprite | null
  _contentsBackSprite: Sprite | null
  _cursorSprite: Sprite | null
  _contentsSprite: Sprite | null
  _downArrowSprite: Sprite | null
  _upArrowSprite: Sprite | null
  _pauseSignSprite: Sprite | null

  origin: Point
  active: boolean
  frameVisible: boolean
  cursorVisible: boolean
  downArrowVisible: boolean
  upArrowVisible: boolean
  pause: boolean

  accessor windowskin: Bitmap | null
  accessor contents: Bitmap
  accessor contentsBack: Bitmap
  accessor width: number
  accessor height: number
  accessor padding: number
  accessor margin: number
  accessor opacity: number
  accessor backOpacity: number
  accessor contentsOpacity: number
  accessor openness: number

  get innerWidth(): number
  get innerHeight(): number
  get innerRect(): Rectangle

  destroy(): void
  update(): void
  move(x: number, y: number, width: number, height: number): void
  isOpen(): boolean
  isClosed(): boolean
  setCursorRect(x: number, y: number, width: number, height: number): void
  moveCursorBy(x: number, y: number): void
  moveInnerChildrenBy(x: number, y: number): void
  setTone(r: number, g: number, b: number): void
  addChildToBack(child: PIXI.Container): PIXI.Container
  addInnerChild(child: PIXI.Container): PIXI.Container
  updateTransform(): void
  drawShape(): void

  _createAllParts(): void
  _createContainer(): void
  _createBackSprite(): void
  _createFrameSprite(): void
  _createClientArea(): void
  _createContentsBackSprite(): void
  _createCursorSprite(): void
  _createContentsSprite(): void
  _createArrowSprites(): void
  _createPauseSignSprites(): void
  _onWindowskinLoad(): void
  _refreshAllParts(): void
  _refreshBack(): void
  _refreshFrame(): void
  _refreshCursor(): void
  _setRectPartsGeometry(sprite: Sprite, srect: Rectangle, drect: Rectangle, m: number): void
  _refreshArrows(): void
  _refreshPauseSign(): void
  _updateClientArea(): void
  _updateFrame(): void
  _updateContentsBack(): void
  _updateCursor(): void
  _makeCursorAlpha(): number
  _updateContents(): void
  _updateArrows(): void
  _updatePauseSign(): void
  _updateFilterArea(): void
}

//-----------------------------------------------------------------------------
declare class WindowLayer extends PIXI.Container {
  constructor()
  initialize(): void

  render(renderer: PIXI.Renderer): void
  update(): void
}

//-----------------------------------------------------------------------------
declare class Weather extends PIXI.Container {
  constructor()
  initialize(): void

  _width: number
  _height: number
  _sprites: Sprite[]

  type: string
  power: number
  origin: Point

  _rainBitmap: Bitmap | null
  _stormBitmap: Bitmap | null
  _snowBitmap: Bitmap | null

  destroy(): void
  update(): void

  _createBitmaps(): void
  _createDimmer(): void
  _updateDimmer(): void
  _updateAllSprites(): void
  _addSprite(): void
  _removeSprite(): void
  _updateSprite(sprite: Sprite): void
  _updateRainSprite(sprite: Sprite): void
  _updateStormSprite(sprite: Sprite): void
  _updateSnowSprite(sprite: Sprite): void
  _rebornSprite(sprite: Sprite): void
}

//-----------------------------------------------------------------------------
declare class ColorFilter extends PIXI.Filter {
  constructor()
  initialize(): void

  setHue(hue: number): void
  setColorTone(tone: RPGMakerMZ.Color.Tone): void
  setBlendColor(color: string): void
  setBrightness(brightness: number): void

  _fragmentSrc(): void
}

//-----------------------------------------------------------------------------
declare class Stage extends PIXI.Container {
  constructor()
  initialize(): void

  destroy(): void
}

//-----------------------------------------------------------------------------
declare class WebAudio {
  constructor(url: string)
  initialize(url: string): void

  _url: string

  static initialize(): boolean

  static _context: AudioContext | null
  static _masterGainNode: GainNode | null
  static _masterVolume: number

  static setMasterVolume(value: number): void
  static _createContext(): void
  static _currentTime(): void
  static _createMasterGainNode(): void
  static _setupEventHandlers(): void
  static _onUserGesture(): void
  static _onVisibilityChange(): void
  static _onHide(): void
  static _onShow(): void
  static _shouldMuteOnHide(): void
  static _resetVolume(): void
  static _fadeIn(duration: number): void
  static _fadeOut(duration: number): void

  clear(): void

  _data: Uint8Array | null
  _fetchedSize: number
  _fetchedData: Uint8Array[]
  _buffers: AudioBuffer[]
  _sourceNodes: AudioBufferSourceNode[]
  _gainNode: GainNode | null
  _pannerNode: PannerNode | null
  _totalTime: number
  _sampleRate: number
  _loop: number
  _loopStart: number
  _loopLength: number
  _loopStartTime: number
  _loopLengthTime: number
  _startTime: number
  _volume: number
  _pitch: number
  _pan: number
  _endTimer: (() => void) | null
  _loadListeners: Array<() => void>
  _stopListeners: Array<() => void>
  _lastUpdateTime: number
  _isLoaded: boolean
  _isError: boolean
  _isPlaying: boolean
  _decoder: VorbisDecoder | null

  get url(): string
  accessor volume: number
  accessor pitch: number
  accessor pan: number

  isReady(): boolean
  isError(): boolean
  isPlaying(): boolean
  play(loop: boolean, offset: number): void
  stop(): void
  destroy(): void
  fadeOut(duration: number): void
  fadeIn(duration: number): void
  seek(): number
  addLoadListener(listener: () => void): void
  addStopListener(listener: () => void): void
  retry(): void

  _startLoading(): void
  _shouldUseDecoder(): boolean
  _createDecoder(): void
  _destroyDecoder(): void
  _realUrl(): string
  _startXhrLoading(): void
  _startFetching(): void
  _onXhrLoad(): void
  _onFetch(): void
  _onError(): void
  _onFetchProcess(value: Uint8Array): void
  _updateBufferOnFetch(): void
  _concatenateFetchedData(): void
  _updateBuffer(): void
  _readableBuffer(): void
  _decodeAudioData(): void
  _onDecode(buffer: AudioBuffer): void
  _refreshSourceNode(): void
  _startPlaying(offset: number): void
  _startAllSourceNodes(): void
  _startSourceNode(index: number): void
  _stopSourceNode(): void
  _createPannerNode(): void
  _createGainNode(): void
  _createAllSourceNodes(): void
  _createSourceNode(index: number): void
  _removeNodes(): void
  _createEndTimer(): void
  _removeEndTimer(): void
  _updatePanner(): void
  _onLoad(): void
  _readLoopComments(arrayBuffer: ArrayBuffer): void
  _readMetaData(view: DataView, index: number, size: number): void
  _readFourCharacters(view: DataView, index: number): void
}

//-----------------------------------------------------------------------------
declare class Video {
  private constructor()
  static initialize(width: number, height: number): void

  static _element: HTMLVideoElement | null
  static _loading: boolean
  static _volume: number

  static resize(width: number, height: number): void
  static play(): void
  static isPlaying(): boolean
  static setVolume(volume: number): void
  static _createElement(): void
  static _onLoad(): void
  static _onError(): void
  static _onEnd(): void
  static _updateVisibility(videoVisible: boolean): void
  static _isVisible(): boolean
  static _setupEventHandlers(): void
  static _onUserGesture(): void
}

//-----------------------------------------------------------------------------
declare class Input {
  private constructor()
  static initialize(): void

  static keyRepeatWait: number
  static keyRepeatInterval: number
  static keyMapper: RPGMakerMZ.Input.KeyMapping
  static gamepadMapper: RPGMakerMZ.Input.GamepadMapping

  static clear(): void
  static _currentState: RPGMakerMZ.Input.KeyState
  static _previousState: RPGMakerMZ.Input.KeyState
  static _gamepadStates: RPGMakerMZ.Input.GamepadState[]
  static _latestButton: RPGMakerMZ.Input.KeyName | null
  static _pressedTime: number
  static _dir4: number
  static _dir8: number
  static _preferredAxis: string
  static _date: number
  static _virtualButton: RPGMakerMZ.Input.KeyName | null

  static update(): void
  static isPressed(keyName: RPGMakerMZ.Input.KeyName): boolean
  static isTriggered(keyName: RPGMakerMZ.Input.KeyName): boolean
  static isRepeated(keyName: RPGMakerMZ.Input.KeyName): boolean
  static isLongPressed(keyname: RPGMakerMZ.Input.KeyName): boolean

  static accessor dir4: number
  static accessor dir8: number
  static accessor date: number

  static virtualClick(buttonName: RPGMakerMZ.Input.KeyName): void

  static _setupEventHandlers(): void
  static _onKeyDown(event: KeyboardEvent): void
  static _shouldPreventDefault(keyCode: number): boolean
  static _onKeyUp(event: KeyboardEvent): void
  static _onLostFocus(): void
  static _pollGamepads(): void
  static _updateGamepadState(gamepad: Gamepad): void
  static _updateDirection(): void
  static _signX(): number
  static _signY(): number
  static _makeNumpadDirection(x: number, y: number): number
  static _isEscapeCompatible(keyName: RPGMakerMZ.Input.KeyName): boolean
}

//-----------------------------------------------------------------------------
declare class TouchInput {
  private constructor()
  static initialize(): void

  static keyRepeatWait: number
  static keyRepeatInterval: number
  static moveThreshold: number

  static clear(): void

  static _createNewState(): void

  static _mousePressed: boolean
  static _screenPressed: boolean
  static _pressedTime: number
  static _clicked: boolean
  static _newState: RPGMakerMZ.TouchInput.State
  static _currentState: RPGMakerMZ.TouchInput.State
  static _x: number
  static _y: number
  static _triggerX: number
  static _triggerY: number
  static _moved: boolean
  static _date: number

  static update(): void
  static isClicked(): boolean
  static isPressed(): boolean
  static isTriggered(): boolean
  static isRepeated(): boolean
  static isLongPressed(): boolean
  static isCancelled(): boolean
  static isMoved(): boolean
  static isHovered(): boolean
  static isReleased(): boolean

  static get wheelX(): number
  static get wheelY(): number
  static get x(): number
  static get y(): number
  static get date(): number

  static _setupEventHandlers(): void
  static _onMouseDown(event: MouseEvent): void
  static _onLeftButtonDown(event: MouseEvent): void
  static _onMiddleButtonDown(event: MouseEvent): void
  static _onRightButtonDown(event: MouseEvent): void
  static _onMouseMove(event: MouseEvent): void
  static _onMouseUp(event: MouseEvent): void
  static _onWheel(event: WheelEvent): void
  static _onTouchStart(event: TouchEvent): void
  static _onTouchMove(event: TouchEvent): void
  static _onTouchEnd(event: TouchEvent): void
  static _onTouchCancel(): void
  static _onLostFocus(): void
  static _onTrigger(x: number, y: number): void
  static _onCancel(x: number, y: number): void
  static _onMove(x: number, y: number): void
  static _onHover(x: number, y: number): void
  static _onRelease(x: number, y: number): void
}

//-----------------------------------------------------------------------------
declare class JsonEx {
  private constructor()
  static maxDepth: number

  static stringify(object: unknown): string
  static parse<T>(json: string): T
  static makeDeepCopy<T>(object: T): T
  static _encode(value: unknown, depth: number): string
  static _decode<T>(value: string): T
}

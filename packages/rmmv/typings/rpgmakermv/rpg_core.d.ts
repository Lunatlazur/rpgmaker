declare namespace RPGMakerMV {
    type ProgressListener = (countLoaded: number, countLoading: number) => void

    interface ImageCacheItem {
        bitmap: Bitmap;
        touch: number;
        key: string;
    }

    /**
     * Bitmap states(Bitmap._loadingState)
     */
    type BitmapLoadingState =
        'none' |
        'pending' |
        'purged' |
        'requesting' |
        'requestCompleted' |
        'decrypting' |
        'decryptCompleted' |
        'loaded' |
        'error';

    type EventInfo = CommonEventInfo | BattleEventInfo | TestEventInfo | MapEventInfo

    interface CommonEventInfo {
        eventType: 'common_event';
        commonEventId: number;
    }

    interface BattleEventInfo {
        eventType: 'battle_event';
        troopId: number;
    }

    interface TestEventInfo {
        eventType: 'test_event';
    }

    interface MapEventInfo {
        eventType: "map_event";
        mapId: number;
        mapEventId: number;
        page: number;
    }

    type EventError = (CommonEventError | BattleEventError | TestEventError | MapEventError) & {
        eventCommand:
            'set_route_script' |
            'auto_route_script' |
            'conditional_branch_script' |
            'control_variables' |
            'script' |
            'plugin_command' |
            'other';
        content: string;
    }

    type CommonEventError = Error & CommonEventInfo

    type BattleEventError = Error & BattleEventInfo

    type TestEventError = Error & TestEventInfo

    type MapEventError = Error & MapEventInfo
}

declare class ProgressWatcher {
    static _countLoaded: number
    static _countLoading: number
    static _progressListener: RPGMakerMV.ProgressListener
    private constructor();
    static initialize(): void;
    static _bitmapListener(bitmap: Bitmap): void;
    static _audioListener(audio: WebAudio): void;
    static setProgressListener(progressListener: RPGMakerMV.ProgressListener): void;
    static clearProgress(): void;
    static truncateProgress(): void;
}

declare class JsExtensions {
    private constructor();
}

declare interface Number {
    /**
     * Returns a number whose value is limited to the given range.
     *
     * @method Number.prototype.clamp
     * @param {Number} min The lower boundary
     * @param {Number} max The upper boundary
     * @return {Number} A number in the range (min, max)
     */
    clamp(min: number, max: number): number;

    /**
     * Returns a modulo value which is always positive.
     *
     * @method Number.prototype.mod
     * @param {Number} n The divisor
     * @return {Number} A modulo value
     */
    mod(n: number): number;
}

declare interface String {
    /**
     * Replaces %1, %2 and so on in the string to the arguments.
     *
     * @method String.prototype.format
     * @param {Any} ...args The objects to format
     * @return {String} A formatted string
     */
    format(...args :Array<string | number>): string;
    /**
     * Makes a number string with leading zeros.
     *
     * @method String.prototype.padZero
     * @param {Number} length The length of the output string
     * @return {String} A string with leading zeros
     */
    padZero(length: number): string;
}

declare interface Number {
    /**
     * Makes a number string with leading zeros.
     *
     * @method Number.prototype.padZero
     * @param {Number} length The length of the output string
     * @return {String} A string with leading zeros
     */
    padZero(length: number): string;
}

declare interface Array<T> {
    /**
     * Checks whether the two arrays are same.
     *
     * @method Array.prototype.equals
     * @param {Array} array The array to compare to
     * @return {Boolean} True if the two arrays are same
     */
    equals(array: T[]): boolean;
    /**
     * Makes a shallow copy of the array.
     *
     * @method Array.prototype.clone
     * @return {Array} A shallow copy of the array
     */
    clone(): T;
    /**
     * Checks whether the array contains a given element.
     *
     * @method Array.prototype.contains
     * @param {Any} element The element to search for
     * @return {Boolean} True if the array contains a given element
     */
    contains(element: T): boolean;
}

declare interface String {
    /**
     * Checks whether the string contains a given string.
     *
     * @method String.prototype.contains
     * @param {String} string The string to search for
     * @return {Boolean} True if the string contains a given string
     */
    contains(string: string): boolean;
}

declare interface Math {
    /**
     * Generates a random integer in the range (0, max-1).
     *
     * @static
     * @method Math.randomInt
     * @param {Number} max The upper boundary (excluded)
     * @return {Number} A random integer
     */
    randomInt(max: number): number;
}

declare class Utils {
    private constructor();

    static RPGMAKER_NAME: 'MV';
    static RPGMAKER_VERSION: string;
    static RPGMAKER_ENGINE: string;

    /**
     * Checks whether the option is in the query string.
     *
     * @static
     * @method isOptionValid
     * @param {String} name The option name
     * @return {Boolean} True if the option is in the query string
     */
    static isOptionValid(name: string): boolean;
    /**
     * Checks whether the platform is NW.js.
     *
     * @static
     * @method isNwjs
     * @return {Boolean} True if the platform is NW.js
     */
    static isNwjs(): boolean;
    /**
     * Checks whether the platform is a mobile device.
     *
     * @static
     * @method isMobileDevice
     * @return {Boolean} True if the platform is a mobile device
     */
    static isMobileDevice(): boolean;
    /**
     * Checks whether the browser is Mobile Safari.
     *
     * @static
     * @method isMobileSafari
     * @return {Boolean} True if the browser is Mobile Safari
     */
    static isMobileSafari(): boolean;
    /**
     * Checks whether the browser is Android Chrome.
     *
     * @static
     * @method isAndroidChrome
     * @return {Boolean} True if the browser is Android Chrome
     */
    static isAndroidChrome(): boolean;
    /**
     * Checks whether the browser can read files in the game folder.
     *
     * @static
     * @method canReadGameFiles
     * @return {Boolean} True if the browser can read files in the game folder
     */
    static canReadGameFiles(): boolean;
    /**
     * Makes a CSS color string from RGB values.
     *
     * @static
     * @method rgbToCssColor
     * @param {Number} r The red value in the range (0, 255)
     * @param {Number} g The green value in the range (0, 255)
     * @param {Number} b The blue value in the range (0, 255)
     * @return {String} CSS color string
     */
    static rgbToCssColor(r: number, g: number, b: number): string;

    static _id: number;
    static generateRuntimeId(): number;

    static _supportPassiveEvent: boolean;
    /**
     * Test this browser support passive event feature
     *
     * @static
     * @method isSupportPassiveEvent
     * @return {Boolean} this browser support passive event or not
     */
    static isSupportPassiveEvent(): boolean;
}

/**
 * The resource class. Allows to be collected as a garbage if not use for some time or ticks
 */
declare class CacheEntry {
    /**
     * @param {CacheMap} cache manager
     * @param {string} key, url of the resource
     * @param {string} item - Bitmap, HTML5Audio, WebAudio - whatever you want to store in the cache
     */
    constructor(cache: CacheMap, key: string, item: Bitmap | Html5Audio | WebAudio);
    cache: CacheMap;
    key: string;
    item: Bitmap | Html5Audio | WebAudio;
    cached: boolean;
    touchTicks: number;
    touchSeconds: number;
    ttlTicks: number;
    ttlSeconds: number;
    freedByTTL: boolean;

    /**
     * frees the resource
     */
    free(byTTL?: boolean): void;
    /**
     * Allocates the resource
     * @returns {CacheEntry}
     */
    allocate(): CacheEntry;
    /**
     * Sets the time to live
     * @param {number} ticks TTL in ticks, 0 if not set
     * @param {number} time TTL in seconds, 0 if not set
     * @returns {CacheEntry}
     */
    setTimeToLive(ticks?: number, seconds?: number): CacheEntry;
    isStillAlive(): boolean;
    /**
     * makes sure that resource wont freed by Time To Live
     * if resource was already freed by TTL, put it in cache again
     */
    touch(): void;
}

/**
 * Cache for images, audio, or any other kind of resource
 */
declare class CacheMap {
    /**
     * @param manager
     * @constructor
     */
    constructor(manager: typeof DataManager | typeof ConfigManager | typeof StorageManager | typeof ImageManager | typeof AudioManager | typeof SoundManager | typeof TextManager | typeof SceneManager | typeof BattleManager | typeof PluginManager);
    manager: typeof DataManager | typeof ConfigManager | typeof StorageManager | typeof ImageManager | typeof AudioManager | typeof SoundManager | typeof TextManager | typeof SceneManager | typeof BattleManager | typeof PluginManager;
    _inner: { [key: string]: CacheEntry };
    _lastRemovedEntries: CacheEntry[];
    updateTicks: number;
    lastCheckTTL: number;
    delayCheckTTL: number;
    updateSeconds: number;

    /**
     * checks ttl of all elements and removes dead ones
     */
    checkTTL(): void;
    /**
     * cache item
     * @param key url of cache element
     * @returns {*|null}
     */
    getItem(key: string): any;
    clear(): void;
    setItem(key: string, item: any): CacheEntry;
    update(ticks: number, delta: number): void;
}

declare class ImageCache {
    constructor();
    static limit: number;
    initialize(): void;
    add(key: string, value: Bitmap): void;
    get(key: string): Bitmap;
    reserve(key: string, value: Bitmap, reservationId: number): void;
    releaseReservation(reservationId: number): void;
    _truncateCache(): void;
    _mustBeHeld(item: RPGMakerMV.ImageCacheItem): boolean;
    isReady(): boolean;
    getErrorBitmap(): Bitmap;
}

declare class RequestQueue {
    constructor();
    initialize(): void;
    enqueue(key: string, value: Bitmap): void;
    update(): void;
    raisePriority(key: string): void;
    clear(): void;
}

/**
 * The point class.
 */
declare class Point extends PIXI.Point {
    /**
     * @param {Number} x The x coordinate
     * @param {Number} y The y coordinate
     */
    constructor(x?: number, y?: number);
    initialize(x?: number, y?: number): void;
}

/**
 * The rectangle class.
 */
declare class Rectangle extends PIXI.Rectangle {
    /**
     * @param {Number} x The x coordinate for the upper-left corner
     * @param {Number} y The y coordinate for the upper-left corner
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     */
    constructor(x?: number, y?: number, width?: number, height?: number);
    initialize(x?: number, y?: number, width?: number, height?: number): void;
    /**
     * @static
     * @property emptyRectangle
     * @type Rectangle
     * @private
     */
    static emptyRectangle: Rectangle;
}

/**
 * The basic object that represents an image.
 */
declare class Bitmap {
    /**
     * @param {Number} width The width of the bitmap
     * @param {Number} height The height of the bitmap
     */
    constructor(width?: number, height?: number);
    static _reuseImages: HTMLImageElement[];
    _createCanvas(width: number, height: number): void;
    __canvas: HTMLCanvasElement;
    __context: CanvasRenderingContext2D;
    __baseTexture: PIXI.BaseTexture;
    _createBaseTexture(source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement): void;
    _clearImgInstance(): void;
    _canvas: HTMLCanvasElement;
    _context: CanvasRenderingContext2D;
    _baseTexture: PIXI.BaseTexture;
    _renewCanvas(): void;

    initialize(width?: number, height?: number): void;
    _image: HTMLImageElement;
    _url: string;
    _paintOpacity: number;
    _smooth: boolean;
    _loadListeners: Function[];
    _loadingState: RPGMakerMV.BitmapLoadingState;
    _decodeAfterRequest: boolean;
    /**
     * Cache entry, for images. In all cases _url is the same as cacheEntry.key
     * @type CacheEntry
     */
    cacheEntry: CacheEntry;
    /**
     * The face name of the font.
     *
     * @property fontFace
     * @type String
     */
    fontFace: string;
    /**
     * The size of the font in pixels.
     *
     * @property fontSize
     * @type Number
     */
    fontSize: number;
    /**
     * Whether the font is italic.
     *
     * @property fontItalic
     * @type Boolean
     */
    fontItalic: boolean;
    /**
     * The color of the text in CSS format.
     *
     * @property textColor
     * @type String
     */
    textColor: string;
    /**
     * The color of the outline of the text in CSS format.
     *
     * @property outlineColor
     * @type String
     */
    outlineColor: string;
    /**
     * The width of the outline of the text.
     *
     * @property outlineWidth
     * @type Number
     */
    outlineWidth: number;

    /**
     * Loads a image file and returns a new bitmap object.
     *
     * @static
     * @method load
     * @param {String} url The image url of the texture
     * @return Bitmap
     */
    static load(url: string): Bitmap;
    /**
     * Takes a snapshot of the game screen and returns a new bitmap object.
     *
     * @static
     * @method snap
     * @param {Stage} stage The stage object
     * @return Bitmap
     */
    static snap(stage: Stage): Bitmap;

    /**
     * Checks whether the bitmap is ready to render.
     *
     * @method isReady
     * @return {Boolean} True if the bitmap is ready to render
     */
    isReady(): boolean;
    /**
     * Checks whether a loading error has occurred.
     *
     * @method isError
     * @return {Boolean} True if a loading error has occurred
     */
    isError(): boolean;
    /**
     * touch the resource
     * @method touch
     */
    touch(): void;

    /**
     * [read-only] The url of the image file.
     *
     * @property url
     * @type String
     */
    readonly url: string;
    /**
     * [read-only] The base texture that holds the image.
     *
     * @property baseTexture
     * @type PIXI.BaseTexture
     */
    readonly baseTexture: PIXI.BaseTexture;
    /**
     * [read-only] The bitmap canvas.
     *
     * @property canvas
     * @type HTMLCanvasElement
     */
    readonly canvas: HTMLCanvasElement;
    /**
     * [read-only] The 2d context of the bitmap canvas.
     *
     * @property context
     * @type CanvasRenderingContext2D
     */
    readonly context: CanvasRenderingContext2D;
    /**
     * [read-only] The width of the bitmap.
     *
     * @property width
     * @type Number
     */
    readonly width: number;
    /**
     * [read-only] The height of the bitmap.
     *
     * @property height
     * @type Number
     */
    readonly height: number;
    /**
     * [read-only] The rectangle of the bitmap.
     *
     * @property rect
     * @type Rectangle
     */
    readonly rect: Rectangle;
    /**
     * Whether the smooth scaling is applied.
     *
     * @property smooth
     * @type Boolean
     */
    smooth: boolean;
    /**
     * The opacity of the drawing object in the range (0, 255).
     *
     * @property paintOpacity
     * @type Number
     */
    paintOpacity: number;

    resize(width: number, height: number): void;
    blt(source: Bitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw?: number, dh?: number): void;
    bltImage(source: Bitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw?: number, dh?: number): void;
    getPixel(x: number, y: number): string;
    getAlphaPixel(x: number, y: number): string;
    clearRect(x: number, y: number, width: number, height: number): void;
    clear(): void;
    fillRect(x: number, y: number, width: number, height: number, color: string): void;
    fillAll(color: string): void;
    gradientFillRect(x: number, y: number, width: number, height: number, color1: string, color2: string, vertical: boolean): void;
    drawCircle(x: number, y: number, radius: number, color: string): void;
    drawText(text: string, x: number, y: number, maxWidth?: number, lineHeight?: number, align?: string): void;
    drawSmallText(text: string, x: number, y: number, maxWidth?: number, lineHeight?: number, align?: string): void;
    measureTextWidth(text: string): number;
    adjustTone(r: number, g: number, b: number): void;
    rotateHue(offset: number): void;
    blur(): void;
    addLoadListener(listener: Function): void;
    _makeFontNameText(): string;
    _drawTextOutline(text: string, tx: number, ty: number, maxWidth: number): void;
    _drawTextBody(text: string, tx: number, ty: number, maxWidth: number): void;
    _onLoad(): void;
    decode(): void;
    _callLoadListeners(): void;
    _onError(): void;
    _setDirty(): void;
    checkDirty(): void;
    static request(url: string): Bitmap;
    _requestImage(url: string): void;
    isRequestOnly(): boolean;
    isRequestReady(): boolean;
    startRequest(): void;
    minFontSize: number;
    drawSmallTextBitmap: Bitmap;
}

declare class Graphics {
    private constructor();
    static _cssFontLoading: boolean;
    static _fontLoaded: any; // FontFaceSet
    static _videoVolume: number;

    static initialize(width?: number, height?: number, type?: string): void;
    static _width: number;
    static _height: number;
    static _rendererType: string;
    static _boxWidth: number;
    static _boxHeight: number;
    static _scale: number;
    static _realScale: number;
    static _errorShowed: boolean;
    static _errorPrinter: HTMLParagraphElement;
    static _canvas: HTMLCanvasElement;
    static _video: HTMLVideoElement;
    static _videoUnlocked: boolean;
    static _videoLoading: boolean;
    static _upperCanvas: HTMLCanvasElement;
    static _renderer: PIXI.SystemRenderer;
    static _fpsMeter: any;
    static _modeBox: HTMLDivElement;
    static _skipCount: number;
    static _maxSkip: number;
    static _rendered: boolean;
    static _loadingImage: HTMLImageElement;
    static _loadingCount: number;
    static _fpsMeterToggled: boolean;
    static _stretchEnabled: boolean;
    static _canUseDifferenceBlend: boolean;
    static _canUseSaturationBlend: boolean;
    static _hiddenCanvas: HTMLCanvasElement;

    static _setupCssFontLoading(): void;
    static canUseCssFontLoading(): boolean;

    static frameCount: number;
    static BLEND_NORMAL: 0;
    static BLEND_ADD: 1;
    static BLEND_MULTIPLY: 2;
    static BLEND_SCREEN: 3;

    static tickStart(): void;
    static tickEnd(): void;
    static render(stage: Stage): void;
    static isWebGL(): boolean;
    static hasWebGL(): boolean;
    static canUseDifferenceBlend(): boolean;
    static canUseSaturationBlend(): boolean;
    static setLoadingImage(src: string): void;
    static setProgressEnabled(enable: boolean): void;
    static startLoading(): void;
    static _setupProgress(): void;
    static _showProgress(): void;
    static _hideProgress(): void;
    static _updateProgressCount(countLoaded: number, countLoading: number): void;
    static _updateProgress(): void;
    static updateLoading(): void;
    static endLoading(): void;
    static printLoadingError(url: string): void;
    static eraseLoadingError(): void;
    static printError(name: string, message: string): void;
    static printErrorDetail(error: RPGMakerMV.EventError): void;
    static setErrorMessage(message: string): void;
    static setShowErrorDetail(showErrorDetail: boolean): void
    static showFps(): void;
    static hideFps(): void;
    static loadFont(name: string, url: string): void;
    static isFontLoaded(name: string): boolean;
    static playVideo(src: string): void;
    static _playVideo(src: string): void;
    static isVideoPlaying(): boolean;
    static canPlayVideoType(type: string): boolean;
    static setVideoVolume(value: number): void;
    static pageToCanvasX(x: number): number;
    static pageToCanvasY(y: number): number;
    static isInsideCanvas(x: number, y: number): boolean;
    static callGC(): void;

    static width: number;
    static height: number;
    static boxWidth: number;
    static boxHeight: number;
    static scale: number;

    static _createAllElements(): void;
    static _updateAllElements(): void;
    static _updateRealScale(): void;
    static _makeErrorHtml(name: string, message: string): string;
    static _defaultStretchMode(): boolean;
    static _testCanvasBlendModes(): void;
    static _modifyExistingElements(): void;
    static _createErrorPrinter(): void;
    static _updateErrorPrinter(): void;
    static _makeErrorMessage(): void;
    static _makeErrorDetail(info: string, stack: string): void;
    static _formatEventInfo(error: RPGMakerMV.EventError): void;
    static _formatEventCommandInfo(error: RPGMakerMV.EventError): void;
    static _formatStackTrace(error: RPGMakerMV.EventError): void;
    static _createCanvas(): void;
    static _updateCanvas(): void;
    static _createVideo(): void;
    static _updateVideo(): void;
    static _createUpperCanvas(): void;
    static _updateUpperCanvas(): void;
    static _clearUpperCanvas(): void;
    static _paintUpperCanvas(): void;
    static _createRenderer(): void;
    static _updateRenderer(): void;
    static _createFPSMeter(): void;
    static _createModeBox(): void;
    static _createGameFontLoader(): void;
    static _createFontLoader(name: string): void;
    static _centerElement(element: HTMLElement): void;
    static _disableTextSelection(): void;
    static _disableContextMenu(): void;
    static _applyCanvasFilter(): void;
    static _onVideoLoad(): void;
    static _onVideoError(): void;
    static _onVideoEnd(): void;
    static _updateVisibility(videoVisible: boolean): void;
    static _isVideoVisible(): boolean;
    static _setupEventHandlers(): void;
    static _onWindowResize(): void;
    static _onKeyDown(event: KeyboardEvent): void;
    static _onTouchEnd(event: TouchEvent): void;
    static _switchFPSMeter(): void;
    static _switchStretchMode(): void;
    static _switchFullScreen(): void;
    static _isFullScreen(): boolean;
    static _requestFullScreen(): void;
    static _cancelFullScreen(): void;
}

declare class Input {
    private constructor();
    static initialize(): void;

    static keyRepeatWait: number;
    static keyRepeatInterval: number;
    static keyMapper: { [key: number]: string };
    static gamepadMapper: { [key: number]: string };

    static clear(): void;
    static _currentState: { [key: string]: boolean };
    static _previousState: { [key: string]: boolean };
    static _gamepadStates: boolean[][];
    static _latestButton: string;
    static _pressedTime: number;
    static _dir4: number;
    static _dir8: number;
    static _preferredAxis: string;
    static _date: number

    static update(): void;
    static isPressed(keyName: string): boolean;
    static isTriggered(keyName: string): boolean;
    static isRepeated(keyName: string): boolean;
    static isLongPressed(keyName: string): boolean;

    static dir4: number;
    static dir8: number;
    static date: number;

    static _wrapNwjsAlert(): void;
    static _setupEventHandlers(): void;
    static _onKeyDown(event: KeyboardEvent): void;
    static _shouldPreventDefault(keyCode: number): boolean;
    static _onKeyUp(event: KeyboardEvent): void;
    static _onLostFocus(): void;
    static _pollGamepads(): void;
    static _updateGamepadState(gamepad: Gamepad): void;
    static _updateDirection(): void;
    static _signX(): number;
    static _signY(): number;
    static _makeNumpadDirection(x: number, y: number): number;
    static _isEscapeCompatible(keyName: string): boolean;
}

declare interface IDataTouchInput {
    triggered: boolean;
    cancelled: boolean;
    moved: boolean;
    released: boolean;
    wheelX: number;
    wheelY: number;
}

declare class TouchInput {
    private constructor();
    static initialize(): void;

    static keyRepeatWait: number;
    static keyRepeatInterval: number;

    static clear(): void;
    static date: number;
    static _mousePressed: boolean;
    static _screenPressed: boolean;
    static _pressedTime: number;
    static _events: IDataTouchInput;
    static _triggered: boolean;
    static _cancelled: boolean;
    static _moved: boolean;
    static _released: boolean;
    static _wheelX: number;
    static _wheelY: number;
    static _x: number;
    static _y: number;
    static _date: number;

    static update(): void;
    static isPressed(): boolean;
    static isTriggered(): boolean;
    static isRepeated(): boolean;
    static isLongPressed(): boolean;
    static isCancelled(): boolean;
    static isMoved(): boolean;
    static isReleased(): boolean;

    static wheelX: number;
    static wheelY: number;
    static x: number;
    static y: number;

    static _setupEventHandlers(): void;
    static _onMouseDown(event: MouseEvent): void;
    static _onLeftButtonDown(event: MouseEvent): void;
    static _onMiddleButtonDown(event: MouseEvent): void;
    static _onRightButtonDown(event: MouseEvent): void;
    static _onMouseMove(event: MouseEvent): void;
    static _onMouseUp(event: MouseEvent): void;
    static _onWheel(event: WheelEvent): void;
    static _onTouchStart(event: TouchEvent): void;
    static _onTouchMove(event: TouchEvent): void;
    static _onTouchEnd(event: TouchEvent): void;
    static _onTouchCancel(event: TouchEvent): void;
    static _onPointerDown(event: PointerEvent): void;
    static _onTrigger(x: number, y: number): void;
    static _onCancel(x: number, y: number): void;
    static _onMove(x: number, y: number): void;
    static _onRelease(x: number, y: number): void;
}

declare class Sprite extends PIXI.Sprite {
    constructor(bitmap?: Bitmap);
    voidFilter: PIXI.filters.VoidFilter;

    initialize(bitmap?: Bitmap): void;
    _bitmap: Bitmap;
    _frame: Rectangle;
    _realFrame: Rectangle;
    _offset: Point;
    _blendColor: number[];
    _colorTone: number[];
    _canvas: HTMLCanvasElement;
    _context: CanvasRenderingContext2D;
    _tintTexture: PIXI.BaseTexture;

    _isPicture: boolean

    spriteId: number
    opaque: boolean

    static _counter: number;

    bitmap: Bitmap;
    width: number;
    height: number;
    opacity: number;

    update(): void;
    move(x: number, y: number): void;
    setFrame(x: number, y: number, width: number, height: number): void;
    getBlendColor(): number[];
    setBlendColor(color: number[]): void;
    getColorTone(): number[];
    setColorTone(tone: number[]): void;

    _onBitmapLoad(bitmapLoaded: Bitmap): void;
    _refresh(): void;
    _isInBitmapRect(x: number, y: number, w: number, h: number): boolean;
    _needsTint(): boolean;
    _createTinter(w: number, h: number): void;
    _executeTint(x: number, y: number, w: number, h: number): void;
    _renderCanvas_PIXI(renderer: PIXI.CanvasRenderer): void;
    _renderWebGL_PIXI(renderer: PIXI.WebGLRenderer): void;
    _renderCanvas(renderer: PIXI.CanvasRenderer): void;
    _speedUpCustomBlendModes(renderer: PIXI.CanvasRenderer): void;
    _renderWebGL(renderer: PIXI.WebGLRenderer): void;
}

declare class Tilemap extends PIXI.Container {
    constructor();
    initialize(): void;
    _margin: number;
    _width: number;
    _height: number;
    _tileWidth: number;
    _tileHeight: number;
    _mapWidth: number;
    _mapHeight: number;
    _mapData: number[];
    _layerWidth: number;
    _layerHeight: number;
    _lastTiles: number[][][][];

    bitmaps: Bitmap[];
    origin: Point;
    flags: { [key: number]: boolean };
    animationCount: number;
    animationFrame: number;
    horizontalWrap: boolean;
    verticalWrap: boolean;

    width: number;
    height: number;
    tileWidth: number;
    tileHeight: number;

    setData(width: number, height: number, data: number[]): void;
    isReady(): boolean;
    update(): void;
    refresh(): void;
    refreshTileset(): void;
    updateTransform(): void;
    _needsRepaint: boolean;
    _lastAnimationFrame: number;
    _lastStartX: number;
    _lastStartY: number;
    _frameUpdated: boolean;

    _createLayers(): void;
    _lowerBitmap: Bitmap;
    _upperBitmap: Bitmap;
    _lowerLayer: Sprite;
    _upperLayer: Sprite;

    _updateLayerPositions(startX: number, startY: number): void;
    _paintAllTiles(startX: number, startY: number): void;
    _paintTiles(startX: number, startY: number, x: number, y: number): void;
    _readLastTiles(i: number, x: number, y: number): number[];
    _writeLastTiles(i: number, x: number, y: number, tiles: number[]): void;
    _drawTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;
    _drawNormalTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;
    _drawAutotile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;
    _drawTableEdge(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;
    _drawShadow(bitmap: Bitmap, shadowBits: number, dx: number, dy: number): void;
    _readMapData(x: number, y: number, z: number): number;
    _isHigherTile(tileId: number): boolean;
    _isTableTile(tileId: number): boolean;
    _isOverpassPosition(mx: number, my: number): boolean;
    _sortChildren(): void;
    _compareChildOrder(a: Sprite, b: Sprite): number;

    static TILE_ID_B: 0;
    static TILE_ID_C: 256;
    static TILE_ID_D: 512;
    static TILE_ID_E: 768;
    static TILE_ID_A5: 1536;
    static TILE_ID_A1: 2048;
    static TILE_ID_A2: 2816;
    static TILE_ID_A3: 4352;
    static TILE_ID_A4: 5888;
    static TILE_ID_MAX: 8192;

    static isVisibleTile(tileId: number): boolean;
    static isAutotile(tileId: number): boolean;
    static getAutotileKind(tileId: number): number;
    static getAutotileShape(tileId: number): number;
    static makeAutotileId(kind: number, shape: number): number;
    static isSameKindTile(tileID1: number, tileID2: number): boolean;
    static isTileA1(tileId: number): boolean;
    static isTileA2(tileId: number): boolean;
    static isTileA3(tileId: number): boolean;
    static isTileA4(tileId: number): boolean;
    static isTileA5(tileId: number): boolean;
    static isWaterTile(tileId: number): boolean;
    static isWaterfallTile(tileId: number): boolean;
    static isGroundTile(tileId: number): boolean;
    static isShadowingTile(tileId: number): boolean;
    static isRoofTile(tileId: number): boolean;
    static isWallTopTile(tileId: number): boolean;
    static isWallSideTile(tileId: number): boolean;
    static isWallTile(tileId: number): boolean;
    static isFloorTypeAutotile(tileId: number): boolean;
    static isWallTypeAutotile(tileId: number): boolean;
    static isWaterfallTypeAutotile(tileId: number): boolean;
    static FLOOR_AUTOTILE_TABLE: [
        [[2,4],[1,4],[2,3],[1,3]],[[2,0],[1,4],[2,3],[1,3]],
        [[2,4],[3,0],[2,3],[1,3]],[[2,0],[3,0],[2,3],[1,3]],
        [[2,4],[1,4],[2,3],[3,1]],[[2,0],[1,4],[2,3],[3,1]],
        [[2,4],[3,0],[2,3],[3,1]],[[2,0],[3,0],[2,3],[3,1]],
        [[2,4],[1,4],[2,1],[1,3]],[[2,0],[1,4],[2,1],[1,3]],
        [[2,4],[3,0],[2,1],[1,3]],[[2,0],[3,0],[2,1],[1,3]],
        [[2,4],[1,4],[2,1],[3,1]],[[2,0],[1,4],[2,1],[3,1]],
        [[2,4],[3,0],[2,1],[3,1]],[[2,0],[3,0],[2,1],[3,1]],
        [[0,4],[1,4],[0,3],[1,3]],[[0,4],[3,0],[0,3],[1,3]],
        [[0,4],[1,4],[0,3],[3,1]],[[0,4],[3,0],[0,3],[3,1]],
        [[2,2],[1,2],[2,3],[1,3]],[[2,2],[1,2],[2,3],[3,1]],
        [[2,2],[1,2],[2,1],[1,3]],[[2,2],[1,2],[2,1],[3,1]],
        [[2,4],[3,4],[2,3],[3,3]],[[2,4],[3,4],[2,1],[3,3]],
        [[2,0],[3,4],[2,3],[3,3]],[[2,0],[3,4],[2,1],[3,3]],
        [[2,4],[1,4],[2,5],[1,5]],[[2,0],[1,4],[2,5],[1,5]],
        [[2,4],[3,0],[2,5],[1,5]],[[2,0],[3,0],[2,5],[1,5]],
        [[0,4],[3,4],[0,3],[3,3]],[[2,2],[1,2],[2,5],[1,5]],
        [[0,2],[1,2],[0,3],[1,3]],[[0,2],[1,2],[0,3],[3,1]],
        [[2,2],[3,2],[2,3],[3,3]],[[2,2],[3,2],[2,1],[3,3]],
        [[2,4],[3,4],[2,5],[3,5]],[[2,0],[3,4],[2,5],[3,5]],
        [[0,4],[1,4],[0,5],[1,5]],[[0,4],[3,0],[0,5],[1,5]],
        [[0,2],[3,2],[0,3],[3,3]],[[0,2],[1,2],[0,5],[1,5]],
        [[0,4],[3,4],[0,5],[3,5]],[[2,2],[3,2],[2,5],[3,5]],
        [[0,2],[3,2],[0,5],[3,5]],[[0,0],[1,0],[0,1],[1,1]]
    ];
    static WALL_AUTOTILE_TABLE: [
        [[2,2],[1,2],[2,1],[1,1]],[[0,2],[1,2],[0,1],[1,1]],
        [[2,0],[1,0],[2,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],
        [[2,2],[3,2],[2,1],[3,1]],[[0,2],[3,2],[0,1],[3,1]],
        [[2,0],[3,0],[2,1],[3,1]],[[0,0],[3,0],[0,1],[3,1]],
        [[2,2],[1,2],[2,3],[1,3]],[[0,2],[1,2],[0,3],[1,3]],
        [[2,0],[1,0],[2,3],[1,3]],[[0,0],[1,0],[0,3],[1,3]],
        [[2,2],[3,2],[2,3],[3,3]],[[0,2],[3,2],[0,3],[3,3]],
        [[2,0],[3,0],[2,3],[3,3]],[[0,0],[3,0],[0,3],[3,3]]
    ];
    static WATERFALL_AUTOTILE_TABLE: [
        [[2,0],[1,0],[2,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],
        [[2,0],[3,0],[2,1],[3,1]],[[0,0],[3,0],[0,1],[3,1]]
    ];
}

declare class ShaderTilemap extends Tilemap {
    constructor();
    roundPixels: boolean;

    _hackRenderer(renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer): PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    renderCanvas(renderer: PIXI.CanvasRenderer): void;
    renderWebGL(renderer: PIXI.WebGLRenderer): void;
    refresh(): void;
    _lastBitmapLength: number;

    refreshTileset(): void;
    updateTransform(): void;

    _createLayers(): void;
    lowerZLayer: PIXI.tilemap.ZLayer;
    upperZLayer: PIXI.tilemap.ZLayer;

    _updateLayerPositions(startX: number, startY: number): void;
    _paintAllTiles(startX: number, startY: number): void;
    _paintTiles(startX: number, startY: number, x: number, y: number): void;
    _drawTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;
    _drawTile(layer: PIXI.tilemap.RectTileLayer, tileId: number, dx: number, dy: number): void;
    _drawNormalTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;
    _drawNormalTile(layer: PIXI.tilemap.RectTileLayer, tileId: number, dx: number, dy: number): void;
    _drawAutotile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;
    _drawAutotile(layer: PIXI.tilemap.RectTileLayer, tileId: number, dx: number, dy: number): void;
    _drawTableEdge(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;
    _drawTableEdge(layer: PIXI.tilemap.RectTileLayer, tileId: number, dx: number, dy: number): void;
    _drawShadow(bitmap: Bitmap, shadowBits: number, dx: number, dy: number): void;
    _drawShadow(layer: PIXI.tilemap.RectTileLayer, shadowBits: number, dx: number, dy: number): void;
}

declare class TilingSprite extends PIXI.extras.TilingSprite {
    constructor(bitmap: Bitmap);
    initialize(bitmap: Bitmap): void;
    _bitmap: Bitmap;
    _width: number;
    _height: number;
    _frame: Rectangle;
    spriteId: number;
    origin: Point;

    _renderCanvas_PIXI(renderer: PIXI.CanvasRenderer): void;
    _renderWebGL_PIXI(renderer: PIXI.WebGLRenderer): void;
    _renderCanvas(renderer: PIXI.CanvasRenderer): void;

    bitmap: Bitmap;
    opacity: number;

    update(): void;
    move(x?: number, y?: number, width?: number, height?: number): void;
    setFrame(x: number, y: number, width: number, height: number): void;
    updateTransform(): void;
    updateTransformTS(): void;
    _onBitmapLoad(): void;
    _refresh(): void;
    _renderWebGL(renderer: PIXI.WebGLRenderer): void;
}

declare class ScreenSprite extends PIXI.Container {
    constructor();
    initialize(): void;
    _graphics: PIXI.Graphics;
    _red: number;
    _green: number;
    _blue: number;
    _colorText: string;

    opacity: number;

    static YEPWarned: boolean;
    static warnYep(): void;

    anchor: number;
    blendMode: number;

    setBlack(): void;
    setWhite(): void;
    setColor(r?: number, g?: number, b?: number): void;
}

declare class Window extends PIXI.Container {
    constructor();

    initialize(): void;
    _isWindow: boolean;
    _windowskin: Bitmap;
    _width: number;
    _height: number;
    _cursorRect: Rectangle;
    _openness: number;
    _animationCount: number;
    _padding: number;
    _margin: number;
    _colorTone: number[];
    _windowSpriteContainer: PIXI.Container;
    _windowBackSprite: Sprite;
    _windowCursorSprite: Sprite;
    _windowFrameSprite: Sprite;
    _windowContentsSprite: Sprite;
    _windowArrowSprites: Sprite[];
    _windowPauseSignSprite: Sprite;

    origin: Point;
    active: boolean;
    downArrowVisible: boolean;
    upArrowVisible: boolean;
    pause: boolean;

    windowskin: Bitmap;
    contents: Bitmap;
    width: number;
    height: number;
    padding: number;
    margin: number;
    opacity: number;
    backOpacity: number;
    contentsOpacity: number;
    openness: number;

    update(): void;
    move(x?: number, y?: number, width?: number, height?: number): void;
    isOpen(): boolean;
    isClosed(): boolean;
    setCursorRect(x?: number, y?: number, width?: number, height?: number): void;
    setTone(r: number, g: number, b: number): void;
    addChildToBack(child: PIXI.DisplayObject): PIXI.DisplayObject;
    updateTransform(): void;

    _createAllParts(): void;
    _downArrowSprite: Sprite;
    _upArrowSprite: Sprite;

    _onWindowskinLoad(): void;
    _refreshAllParts(): void;
    _refreshBack(): void;
    _refreshFrame(): void;
    _refreshCursor(): void;
    _refreshContents(): void;
    _refreshArrows(): void;
    _refreshPauseSign(): void;
    _updateCursor(): void;
    _updateContents(): void;
    _updateArrows(): void;
    _updatePauseSign(): void;
}

declare class WindowLayer extends PIXI.Container {
    constructor();
    initialize(): void;

    _width: number;
    _height: number;
    _tempCanvas: HTMLCanvasElement;
    _translationMatrix: number[];
    _windowMask: PIXI.Graphics;
    _windowRect: PIXI.Rectangle;
    _renderSprite: Sprite;

    onRemoveAsAChild(): void;
    static voidFilter: PIXI.filters.VoidFilter;

    width: number;
    height: number;
    filterArea: PIXI.Rectangle;

    move(x: number, y: number, width: number, height: number): void;
    update(): void;
    renderCanvas(renderer: PIXI.CanvasRenderer): void;
    _canvasClearWindowRect(renderSession: PIXI.CanvasRenderer, window: Window): void;
    renderWebGL(renderer: PIXI.WebGLRenderer): void;
    _maskWindow(window: Window, shift: PIXI.Point): void;
}

declare class Weather extends PIXI.Container {
    constructor();
    initialize(): void;
    _width: number;
    _height: number;
    _sprites: Sprite[];
    _rainBitmap: Bitmap;
    _stormBitmap: Bitmap;
    _snowBitmap: Bitmap;
    _dimmerSprite: ScreenSprite;

    type: string;
    power: number;
    origin: Point;

    update(): void;

    _createBitmaps(): void;
    _createDimmer(): void;
    _updateDimmer(): void;
    _updateAllSprites(): void;
    _addSprite(): void;
    _removeSprite(): void;
    _updateSprite(sprite: Sprite): void;
    _updateRainSprite(sprite: Sprite): void;
    _updateStormSprite(sprite: Sprite): void;
    _updateSnowSprite(sprite: Sprite): void;
    _rebornSprite(sprite: Sprite): void;
}

declare class ToneFilter extends PIXI.filters.ColorMatrixFilter {
    constructor();
    adjustHue(value: number): void;
    adjustSaturation(value?: number): void;
    adjustTone(r?: number, g?: number, b?: number): void;
}

declare class ToneSprite extends PIXI.Container {
    constructor();
    initialize(): void;
    _red: number;
    _green: number;
    _blue: number;
    _gray: number;

    clear(): void;
    setTone(r?: number, g?: number, b?: number, gray?: number): void;

    _renderCanvas(renderer: PIXI.CanvasRenderer): void;
    _renderWebGL(renderer: PIXI.WebGLRenderer): void;
}

declare class Stage extends PIXI.Container {
    constructor();
    initialize(): void;
}

declare class WebAudio {
    constructor(url: string);
    static _standAlone: typeof ResourceHandler;

    initialize(url: string): void;

    static _masterVolume: number;
    static _context: AudioContext;
    static _masterGainNode: GainNode;
    static _initialized: boolean;
    static _unlocked: boolean;

    static initialize(noAudio: boolean): boolean;
    static canPlayOgg(): boolean;
    static canPlayM4a(): boolean;
    static setMasterVolume(value: number): void;
    static _createContext(): void;
    static _detectCodecs(): void;
    static _canPlayOgg: boolean;
    static _canPlayM4a: boolean;
    static _createMasterGainNode(): void;
    static _setupEventHandlers(): void;
    static _onTouchStart(): void;
    static _onVisibilityChange(): void;
    static _onHide(): void;
    static _onShow(): void;
    static _shouldMuteOnHide(): boolean;
    static _fadeIn(duration: number): void;
    static _fadeOut(duration: number): void;

    clear(): void;
    _url: string;
    _buffer: AudioBuffer;
    _sourceNode: AudioBufferSourceNode;
    _gainNode: GainNode;
    _pannerNode: PannerNode;
    _totalTime: number;
    _sampleRate: number;
    _loopStart: number;
    _loopLength: number;
    _startTime: number;
    _volume: number;
    _pitch: number;
    _pan: number;
    _endTimer: number;
    _loadListeners: Function[];
    _stopListeners: Function[];
    _hasError: boolean;
    _autoPlay: boolean;

    url: string;
    volume: number;
    pitch: number;
    pan: number;

    isReady(): boolean;
    isError(): boolean;
    isPlaying(): boolean;
    play(loop: boolean, offset: number): void;
    stop(): void;
    fadeIn(duration: number): void;
    fadeOut(duration: number): void;
    seek(): number;
    addLoadListener(listener: Function): void;
    addStopListener(listener: Function): void;

    _load(url: string): void;
    _onXhrLoad(xhr: XMLHttpRequest): void;
    _startPlaying(loop: boolean, offset: number): void;
    _createNodes(): void;
    _connectNodes(): void;
    _removeNodes(): void;
    _createEndTimer(): void;
    _removeEndTimer(): void;
    _updatePanner(): void;
    _onLoad(): void;
    _readLoopComments(array: Uint8Array): void;
    _readOgg(array: Uint8Array): void;
    _readMp4(array: Uint8Array): void;
    _readMetaData(array: Uint8Array, index: number, size: number): void;
    _readLittleEndian(array: Uint8Array, index: number): void;
    _readBigEndian(array: Uint8Array, index: number): void;
    _readFourCharacters(array: Uint8Array, index: number): void;
}

declare class Html5Audio {
    private constructor();

    static _initialized: boolean;
    static _unlocked: boolean;
    static _audioElement: HTMLAudioElement;
    static _gainTweenInterval: number;
    static _tweenGain: number;
    static _tweenTargetGain: number;
    static _tweenGainStep: number;
    static _staticSePath: string;

    static setup(url: string): void;
    static initialize(): boolean;

    static _setupEventHandlers(): void;
    static _onTouchStart(): void;
    static _onVisibilityChange(): void;
    static _onLoadedData(): void;
    static _onError(): void;
    static _onEnded(): void;
    static _onHide(): void;
    static _onShow(): void;

    static clear(): void;
    static _url: string;
    static _buffered: boolean;
    static _hasError: boolean;
    static _autoPlay: boolean;
    static _isLoading: boolean;
    static _loadListeners: Function[];
    static _volume: number;

    static setStaticSe(url: string): void;

    static url: string;
    static volume: string;

    static isReady(): boolean;
    static isError(): boolean;
    static isPlaying(): boolean;
    static play(loop: boolean, offset: number): void;
    static stop(): void;
    static fadeIn(duration: number): void;
    static fadeOut(duration: number): void;
    static seek(): number;
    static addLoadListener(listener: Function): void;

    static _load(url: string): void;
    static _startPlaying(loop: boolean, offset: number): void;
    static _onLoad(): void;
    static _startGainTween(duration: number): void;
    static _applyTweenValue(volume: number): void;
}

declare class JsonEx {
    private constructor();

    static maxDepth: number;
    static _id: number;

    static _generateId(): number;
    static _restoreCircularReference(circulars: any[]): void;

    static stringify(object: any): string;
    static parse(json: string): any;
    static _linkCircularReference(contents: any, circulars: any[], registry: any[]): void;
    static _cleanMetadata(object: any): void;
    static makeDeepCopy(object: any): any;
    static _encode(value: any, circular: any[], depth: number): any;
    static _decode(value: any, circular: any[], registry: any): any;
    static _getConstructorName(value: any): any;
    static _resetPrototype(value: any, prototype: any): any;
}

declare class Decrypter {
    private constructor();

    static hasEncryptedImages: boolean;
    static hasEncryptedAudio: boolean;

    static _requestImgFile: any[]; // TODO おそらく未使用なので具体的な型が分からない。
    static _headerlength: number;
    static _xhrOk: number;
    static _encryptionKey: string;
    static _ignoreList: string[];

    static SIGNATURE: string;
    static VER: string;
    static REMAIN: string;

    static checkImgIgnore(url: string): boolean;
    static decryptImg(url: string, bitmap: Bitmap): void;
    static decryptHTML5Audio(url: string, bgm: RPGMakerMV.AudioObject, pos: number): void;
    static cutArrayHeader(arrayBuffer: ArrayBuffer, length: number): ArrayBuffer;
    static decryptArrayBuffer(arrayBuffer: ArrayBuffer): ArrayBuffer;
    static createBlobUrl(arrayBuffer: ArrayBuffer): string;
    static extToEncryptExt(url: string): string;
    static readEncryptionkey(): void;
}

declare class ResourceHandler {
    private constructor();

    static _reloaders: Function[];
    static _defaultRetryInterval: number[];

    static createLoader(url: string, retryMethod: Function, resignMethod: Function, retryInterval: number): void;
    static exists(): boolean;
    static retry(): void;
}

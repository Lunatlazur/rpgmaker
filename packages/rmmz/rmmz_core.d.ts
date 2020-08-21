//=============================================================================
// rmmz_core.js v1.0.0
//=============================================================================
/**
 *
 */
declare namespace rmmz_core.js {

	/**
	 *
	 */
	interface Array<T> {

		/**
		 *
		 */
		prototype: {

			/**
			 * Makes a shallow copy of the array.
			 *
			 * @memberof JsExtensions
			 * @returns {array} A shallow copy of the array.
			 * @return
			 */
			clone(): T[];

			/**
			 * Checks whether the array contains a given element.
			 *
			 * @memberof JsExtensions
			 * @param {any} element - The element to search for.
			 * @returns {boolean} True if the array contains a given element.
			 * @deprecated includes() should be used instead.
			 * @param element
			 * @return
			 */
			contains(element: T): boolean;

			/**
			 * Checks whether the two arrays are the same.
			 *
			 * @memberof JsExtensions
			 * @param {array} array - The array to compare to.
			 * @returns {boolean} True if the two arrays are the same.
			 * @param array
			 * @return
			 */
			equals(array: any): array is T[];

			/**
			 * Removes a given element from the array (in place).
			 *
			 * @memberof JsExtensions
			 * @param {any} element - The element to remove.
			 * @returns {array} The array after remove.
			 * @param element
			 * @return
			 */
			remove(element: T): T;
		}
	}

	/**
	 *
	 */
	interface Math {

		/**
		 * Generates a random integer in the range (0, max-1).
		 *
		 * @memberof JsExtensions
		 * @param {number} max - The upper boundary (excluded).
		 * @returns {number} A random integer.
		 * @param max
		 * @return
		 */
		randomInt(max: number): number;
	}

	/**
	 *
	 */
	interface Number {

		/**
		 *
		 */
		prototype: {

			/**
			 * Returns a number whose value is limited to the given range.
			 *
			 * @memberof JsExtensions
			 * @param {number} min - The lower boundary.
			 * @param {number} max - The upper boundary.
			 * @returns {number} A number in the range (min, max).
			 * @param min
			 * @param max
			 * @return
			 */
			clamp(min: number, max: number): number;

			/**
			 * Returns a modulo value which is always positive.
			 *
			 * @memberof JsExtensions
			 * @param {number} n - The divisor.
			 * @returns {number} A modulo value.
			 * @param n
			 * @return
			 */
			mod(n: number): number;

			/**
			 * Makes a number string with leading zeros.
			 *
			 * @memberof JsExtensions
			 * @param {number} length - The length of the output string.
			 * @returns {string} A string with leading zeros.
			 * @param length
			 * @return
			 */
			padZero(length: number): string;
		}
	}

	/**
	 *
	 */
	interface String {

		/**
		 *
		 */
		prototype: {

			/**
			 * Checks whether the string contains a given string.
			 *
			 * @memberof JsExtensions
			 * @param {string} string - The string to search for.
			 * @returns {boolean} True if the string contains a given string.
			 * @deprecated includes() should be used instead.
			 * @param string
			 * @return
			 */
			contains(string: string): boolean;

			/**
			 * Replaces %1, %2 and so on in the string to the arguments.
			 *
			 * @memberof JsExtensions
			 * @param {any} ...args The objects to format.
			 * @returns {string} A formatted string.
			 * @return
			 */
			format(): string;

			/**
			 * Makes a number string with leading zeros.
			 *
			 * @memberof JsExtensions
			 * @param {number} length - The length of the output string.
			 * @returns {string} A string with leading zeros.
			 * @param length
			 * @return
			 */
			padZero(length: number): string;
		}
	}
}

/**
 *
 */
declare namespace Utils {

	/**
	 * The name of the RPG Maker. "MZ" in the current version.
	 *
	 * @type string
	 * @constant
	 */
	var RPGMAKER_NAME: 'MZ';

	/**
	 * The version of the RPG Maker.
	 *
	 * @type string
	 * @constant
	 */
	var RPGMAKER_VERSION: string;

	/**
	 * Checks whether the current RPG Maker version is greater than or equal to
	 * the given version.
	 *
	 * @param {string} version - The "x.x.x" format string to compare.
	 * @returns {boolean} True if the current version is greater than or equal
	 *                    to the given version.
	 * @param version
	 * @return
	 */
	function checkRMVersion(version: string): boolean;

	/**
	 * Checks whether the option is in the query string.
	 *
	 * @param {string} name - The option name.
	 * @returns {boolean} True if the option is in the query string.
	 * @param name
	 * @return
	 */
	function isOptionValid(name: string): boolean;

	/**
	 * Checks whether the platform is NW.js.
	 *
	 * @returns {boolean} True if the platform is NW.js.
	 * @return
	 */
	function isNwjs(): boolean;

	/**
	 * Checks whether the platform is a mobile device.
	 *
	 * @returns {boolean} True if the platform is a mobile device.
	 * @return
	 */
	function isMobileDevice(): boolean;

	/**
	 * Checks whether the browser is Mobile Safari.
	 *
	 * @returns {boolean} True if the browser is Mobile Safari.
	 * @return
	 */
	function isMobileSafari(): boolean;

	/**
	 * Checks whether the browser is Android Chrome.
	 *
	 * @returns {boolean} True if the browser is Android Chrome.
	 * @return
	 */
	function isAndroidChrome(): boolean;

	/**
	 * Checks whether the browser is accessing local files.
	 *
	 * @returns {boolean} True if the browser is accessing local files.
	 * @return
	 */
	function isLocal(): boolean;

	/**
	 * Checks whether the browser supports WebGL.
	 *
	 * @returns {boolean} True if the browser supports WebGL.
	 * @return
	 */
	function canUseWebGL(): boolean;

	/**
	 * Checks whether the browser supports Web Audio API.
	 *
	 * @returns {boolean} True if the browser supports Web Audio API.
	 * @return
	 */
	function canUseWebAudioAPI(): boolean;

	/**
	 * Checks whether the browser supports CSS Font Loading.
	 *
	 * @returns {boolean} True if the browser supports CSS Font Loading.
	 * @return
	 */
	function canUseCssFontLoading(): boolean;

	/**
	 * Checks whether the browser supports IndexedDB.
	 *
	 * @returns {boolean} True if the browser supports IndexedDB.
	 * @return
	 */
	function canUseIndexedDB(): boolean;

	/**
	 * Checks whether the browser can play ogg files.
	 *
	 * @returns {boolean} True if the browser can play ogg files.
	 * @return
	 */
	function canPlayOgg(): boolean;

	/**
	 * Checks whether the browser can play webm files.
	 *
	 * @returns {boolean} True if the browser can play webm files.
	 * @return
	 */
	function canPlayWebm(): boolean;

	/**
	 * Encodes a URI component without escaping slash characters.
	 *
	 * @param {string} str - The input string.
	 * @returns {string} Encoded string.
	 * @param str
	 * @return
	 */
	function encodeURI(str: string): string;

	/**
	 * Escapes special characters for HTML.
	 *
	 * @param {string} str - The input string.
	 * @returns {string} Escaped string.
	 * @param str
	 * @return
	 */
	function escapeHtml(str: string): string;

	/**
	 * Checks whether the string contains any Arabic characters.
	 *
	 * @returns {boolean} True if the string contains any Arabic characters.
	 * @param str
	 * @return
	 */
	function containsArabic(str: string): boolean;

	/**
	 * Sets information related to encryption.
	 *
	 * @param {boolean} hasImages - Whether the image files are encrypted.
	 * @param {boolean} hasAudio - Whether the audio files are encrypted.
	 * @param {string} key - The encryption key.
	 * @param hasImages
	 * @param hasAudio
	 * @param key
	 */
	function setEncryptionInfo(hasImages: boolean, hasAudio: boolean, key: string): void;

	/**
	 * [Note] This function is implemented for module independence.
	 */
	var _hasEncryptedImages: boolean;

	/**
	 *
	 */
	var _hasEncryptedAudio: boolean;

	/**
	 *
	 */
	var _encryptionKey: string;

	/**
	 * Checks whether the image files in the game are encrypted.
	 *
	 * @returns {boolean} True if the image files are encrypted.
	 * @return
	 */
	function hasEncryptedImages(): /* !this._hasEncryptedImages */ boolean;

	/**
	 * Checks whether the audio files in the game are encrypted.
	 *
	 * @returns {boolean} True if the audio files are encrypted.
	 * @return
	 */
	function hasEncryptedAudio(): /* !this._hasEncryptedAudio */ boolean;

	/**
	 * Decrypts encrypted data.
	 *
	 * @param {ArrayBuffer} source - The data to be decrypted.
	 * @returns {ArrayBuffer} The decrypted data.
	 * @param source
	 * @return
	 */
	function decryptArrayBuffer(source: ArrayBuffer): ArrayBuffer;
}

/**
 * The static class that carries out graphics processing.
 *
 * @namespace
 */
declare interface Graphics {

	/**
	 *
	 * @return
	 */
	new (): Graphics;
}


/**
 *
 */
declare namespace Graphics{

	/**
	 * Initializes the graphics system.
	 *
	 * @returns {boolean} True if the graphics system is available.
	 * @return
	 */
	function initialize(): boolean;

	/**
	 *
	 */
	var _width: number;

	/**
	 *
	 */
	var _height: number;

	/**
	 *
	 */
	var _defaultScale: number;

	/**
	 *
	 */
	var _realScale: number;

	/**
	 *
	 */
	var _fpsCounter: Graphics.FPSCounter;

	/**
	 *
	 */
	var _loadingSpinner: {

		/**
		 *
		 */
		id: string;
	}

	/**
	 *
	 */
	var _stretchEnabled: boolean;

	/**
	 *
	 */
	var _wasLoading: boolean;

	/**
	 * The total frame count of the game screen.
	 *
	 * @type number
	 * @name Graphics.frameCount
	 */
	var frameCount: number;

	/**
	 * The width of the window display area.
	 *
	 * @type number
	 * @name Graphics.boxWidth
	 */
	var boxWidth: number;

	/**
	 * The height of the window display area.
	 *
	 * @type number
	 * @name Graphics.boxHeight
	 */
	var boxHeight: number;

	/**
	 * Register a handler for tick events.
	 *
	 * @param {function} handler - The listener function to be added for updates.
	 * @param handler
	 */
	function setTickHandler(handler: (delta: number) => void): void;

	/**
	 * Starts the game loop.
	 */
	function startGameLoop(): void;

	/**
	 * Stops the game loop.
	 */
	function stopGameLoop(): void;

	/**
	 * Sets the stage to be rendered.
	 *
	 * @param {Stage} stage - The stage object to be rendered.
	 * @param stage
	 */
	function setStage(stage: () => void): void;

	/**
	 * Shows the loading spinner.
	 */
	function startLoading(): void;

	/**
	 * Erases the loading spinner.
	 *
	 * @returns {boolean} True if the loading spinner was active.
	 * @return
	 */
	function endLoading(): boolean;

	/**
	 * Displays the error text to the screen.
	 *
	 * @param {string} name - The name of the error.
	 * @param {string} message - The message of the error.
	 * @param {Error} [error] - The error object.
	 * @param name
	 * @param message
	 * @param error?
	 */
	function printError(name: string, message: string, error?: Error): void;

	/**
	 * Displays a button to try to reload resources.
	 *
	 * @param {function} retry - The callback function to be called when the button
	 *                           is pressed.
	 * @param retry
	 */
	function showRetryButton(retry: () => void): void;

	/**
	 * Erases the loading error text.
	 */
	function eraseError(): void;

	/**
	 * Converts an x coordinate on the page to the corresponding
	 * x coordinate on the canvas area.
	 *
	 * @param {number} x - The x coordinate on the page to be converted.
	 * @returns {number} The x coordinate on the canvas area.
	 * @param x
	 * @return
	 */
	function pageToCanvasX(x: number): number;

	/**
	 * Converts a y coordinate on the page to the corresponding
	 * y coordinate on the canvas area.
	 *
	 * @param {number} y - The y coordinate on the page to be converted.
	 * @returns {number} The y coordinate on the canvas area.
	 * @param y
	 * @return
	 */
	function pageToCanvasY(y: number): number;

	/**
	 * Checks whether the specified point is inside the game canvas area.
	 *
	 * @param {number} x - The x coordinate on the canvas area.
	 * @param {number} y - The y coordinate on the canvas area.
	 * @returns {boolean} True if the specified point is inside the game canvas area.
	 * @param x
	 * @param y
	 * @return
	 */
	function isInsideCanvas(x: number, y: number): boolean;

	/**
	 * Shows the game screen.
	 */
	function showScreen(): void;

	/**
	 * Hides the game screen.
	 */
	function hideScreen(): void;

	/**
	 * Changes the size of the game screen.
	 *
	 * @param {number} width - The width of the game screen.
	 * @param {number} height - The height of the game screen.
	 * @param width
	 * @param height
	 */
	function resize(width: number, height: number): void;

	/**
	 *
	 */
	function _createAllElements(): void;

	/**
	 *
	 */
	function _updateAllElements(): void;

	/**
	 *
	 * @param deltaTime
	 */
	function _onTick(deltaTime: number): void;

	/**
	 *
	 * @return
	 */
	function _canRender(): boolean;

	/**
	 *
	 */
	function _updateRealScale(): void;

	/**
	 *
	 */
	function _stretchWidth(): void;

	/**
	 *
	 * @return
	 */
	function _stretchHeight(): number;

	/**
	 *
	 * @param name
	 * @param message
	 */
	function _makeErrorHtml(name: string, message: string): void;

	/**
	 *
	 * @return
	 */
	function _defaultStretchMode(): boolean;

	/**
	 *
	 */
	function _createErrorPrinter(): void;

	/**
	 *
	 */
	function _updateErrorPrinter(): void;

	/**
	 *
	 */
	function _createCanvas(): void;

	/**
	 *
	 */
	function _updateCanvas(): void;

	/**
	 *
	 */
	function _updateVideo(): void;

	/**
	 *
	 */
	function _createLoadingSpinner(): void;

	/**
	 *
	 */
	function _createFPSCounter(): void;

	/**
	 *
	 * @param element
	 */
	function _centerElement(element: HTMLElement): void;

	/**
	 *
	 */
	function _disableContextMenu(): void;

	/**
	 *
	 */
	function _applyCanvasFilter(): void;

	/**
	 *
	 */
	function _clearCanvasFilter(): void;

	/**
	 *
	 */
	function _setupEventHandlers(): void;

	/**
	 *
	 */
	function _onWindowResize(): void;

	/**
	 *
	 * @param event
	 */
	function _onKeyDown(event: KeyboardEvent): void;

	/**
	 *
	 */
	function _switchFPSCounter(): void;

	/**
	 *
	 */
	function _switchStretchMode(): void;

	/**
	 *
	 */
	function _switchFullScreen(): void;

	/**
	 *
	 */
	function _isFullScreen(): void;

	/**
	 *
	 */
	function _requestFullScreen(): void;

	/**
	 *
	 */
	function _cancelFullScreen(): void;

	/**
	 *
	 */
	function _createPixiApp(): void;

	/**
	 *
	 */
	function _setupPixi(): void;

	/**
	 *
	 */
	function _createEffekseerContext(): void;

	/**
	 *
	 */
	interface FPSCounter {

		/**
		 *
		 */
		new ();

		/**
		 *
		 */
		initialize(): void;

		/**
		 *
		 */
		startTick(): void;

		/**
		 *
		 */
		endTick(): void;

		/**
		 *
		 */
		switchMode(): void;

		/**
		 *
		 */
		_createElements(): void;

		/**
		 *
		 */
		_update(): void;

		/**
		 *
		 */
		_tickCount: number;

		/**
		 *
		 */
		_frameTime: number;

		/**
		 *
		 */
		_frameStart: number;

		/**
		 *
		 */
		_lastLoop: number;

		/**
		 *
		 */
		_showFps: boolean;

		/**
		 *
		 */
		fps: number;

		/**
		 *
		 */
		duration: number;
	}
}

/**
 * The point class.
 *
 * @class
 * @extends PIXI.Point
 * @param {number} x - The x coordinate.
 * @param {number} y - The y coordinate.
 */
declare interface Point {

	/**
	 *
	 * @return
	 */
	new (): Point;
}


/**
 * The rectangle class.
 *
 * @class
 * @extends PIXI.Rectangle
 * @param {number} x - The x coordinate for the upper-left corner.
 * @param {number} y - The y coordinate for the upper-left corner.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 */
declare interface Rectangle {

	/**
	 *
	 * @return
	 */
	new (): Rectangle;
}

/**
 * The basic object that represents an image.
 *
 * @class
 * @param {number} width - The width of the bitmap.
 * @param {number} height - The height of the bitmap.
 */
declare interface Bitmap {

	/**
	 *
	 */
	new ();

	/**
	 *
	 * @param width
	 * @param height
	 */
	initialize(width: number, height: number): void;

	/**
	 * Loads a image file.
	 *
	 * @param {string} url - The image url of the texture.
	 * @returns {Bitmap} The new bitmap object.
	 * @param url
	 * @return
	 */
	load(url: string): /* Bitmap.+Bitmap */ Bitmap;

	/**
	 * Takes a snapshot of the game screen.
	 *
	 * @param {Stage} stage - The stage object.
	 * @returns {Bitmap} The new bitmap object.
	 * @param stage
	 * @return
	 */
	snap(stage: () => void): Bitmap;

	/**
	 * Checks whether the tileset is ready to render.
	 *
	 * @type boolean
	 * @returns {boolean} True if the tilemap is ready.
	 * @return
	 */
	isReady(): boolean;

	/**
	 * Checks whether a loading error has occurred.
	 *
	 * @returns {boolean} True if a loading error has occurred.
	 * @return
	 */
	isError(): boolean;

	/**
	 * Destroys the stage.
	 */
	destroy(): void;

	/**
	 * Resizes the bitmap.
	 *
	 * @param {number} width - The new width of the bitmap.
	 * @param {number} height - The new height of the bitmap.
	 * @param width
	 * @param height
	 */
	resize(width: number, height: number): void;

	/**
	 * Performs a block transfer.
	 *
	 * @param {Bitmap} source - The bitmap to draw.
	 * @param {number} sx - The x coordinate in the source.
	 * @param {number} sy - The y coordinate in the source.
	 * @param {number} sw - The width of the source image.
	 * @param {number} sh - The height of the source image.
	 * @param {number} dx - The x coordinate in the destination.
	 * @param {number} dy - The y coordinate in the destination.
	 * @param {number} [dw=sw] The width to draw the image in the destination.
	 * @param {number} [dh=sh] The height to draw the image in the destination.
	 * @param source
	 * @param sx
	 * @param sy
	 * @param sw
	 * @param sh
	 * @param dx
	 * @param dy
	 * @param dw?
	 * @param dh?
	 */
	blt(source: Bitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw?: number, dh?: number): void;

	/**
	 * Returns pixel color at the specified point.
	 *
	 * @param {number} x - The x coordinate of the pixel in the bitmap.
	 * @param {number} y - The y coordinate of the pixel in the bitmap.
	 * @returns {string} The pixel color (hex format).
	 * @param x
	 * @param y
	 * @return
	 */
	getPixel(x: number, y: number): string;

	/**
	 * Returns alpha pixel value at the specified point.
	 *
	 * @param {number} x - The x coordinate of the pixel in the bitmap.
	 * @param {number} y - The y coordinate of the pixel in the bitmap.
	 * @returns {string} The alpha value.
	 * @param x
	 * @param y
	 * @return
	 */
	getAlphaPixel(x: number, y: number): string;

	/**
	 * Clears the specified rectangle.
	 *
	 * @param {number} x - The x coordinate for the upper-left corner.
	 * @param {number} y - The y coordinate for the upper-left corner.
	 * @param {number} width - The width of the rectangle to clear.
	 * @param {number} height - The height of the rectangle to clear.
	 * @param x
	 * @param y
	 * @param width
	 * @param height
	 */
	clearRect(x: number, y: number, width: number, height: number): void;

	/**
	 * Clears the entire bitmap.
	 */
	clear(): void;

	/**
	 * Fills the specified rectangle.
	 *
	 * @param {number} x - The x coordinate for the upper-left corner.
	 * @param {number} y - The y coordinate for the upper-left corner.
	 * @param {number} width - The width of the rectangle to fill.
	 * @param {number} height - The height of the rectangle to fill.
	 * @param {string} color - The color of the rectangle in CSS format.
	 * @param x
	 * @param y
	 * @param width
	 * @param height
	 * @param color
	 */
	fillRect(x: number, y: number, width: number, height: number, color: string): void;

	/**
	 * Fills the entire bitmap.
	 *
	 * @param {string} color - The color of the rectangle in CSS format.
	 * @param color
	 */
	fillAll(color: string): void;

	/**
	 * Draws the specified rectangular frame.
	 *
	 * @param {number} x - The x coordinate for the upper-left corner.
	 * @param {number} y - The y coordinate for the upper-left corner.
	 * @param {number} width - The width of the rectangle to fill.
	 * @param {number} height - The height of the rectangle to fill.
	 * @param {string} color - The color of the rectangle in CSS format.
	 * @param x
	 * @param y
	 * @param width
	 * @param height
	 * @param color
	 */
	strokeRect(x: number, y: number, width: number, height: number, color: string): void;

	/**
	 * Draws the rectangle with a gradation.
	 *
	 * @param {number} x - The x coordinate for the upper-left corner.
	 * @param {number} y - The y coordinate for the upper-left corner.
	 * @param {number} width - The width of the rectangle to fill.
	 * @param {number} height - The height of the rectangle to fill.
	 * @param {string} color1 - The gradient starting color.
	 * @param {string} color2 - The gradient ending color.
	 * @param {boolean} vertical - Whether the gradient should be draw as vertical or not.
	 * @param x
	 * @param y
	 * @param width
	 * @param height
	 * @param color1
	 * @param color2
	 * @param vertical
	 */
	gradientFillRect(x: number, y: number, width: number, height: number, color1: string, color2: string, vertical: boolean): void;

	/**
	 * Draws a bitmap in the shape of a circle.
	 *
	 * @param {number} x - The x coordinate based on the circle center.
	 * @param {number} y - The y coordinate based on the circle center.
	 * @param {number} radius - The radius of the circle.
	 * @param {string} color - The color of the circle in CSS format.
	 * @param x
	 * @param y
	 * @param radius
	 * @param color
	 */
	drawCircle(x: number, y: number, radius: number, color: string): void;

	/**
	 * Draws the outline text to the bitmap.
	 *
	 * @param {string} text - The text that will be drawn.
	 * @param {number} x - The x coordinate for the left of the text.
	 * @param {number} y - The y coordinate for the top of the text.
	 * @param {number} maxWidth - The maximum allowed width of the text.
	 * @param {number} lineHeight - The height of the text line.
	 * @param {string} align - The alignment of the text.
	 * @param text
	 * @param x
	 * @param y
	 * @param maxWidth
	 * @param lineHeight
	 * @param align
	 */
	drawText(text: string, x: number, y: number, maxWidth: number, lineHeight: number, align: string): void;

	/**
	 * Returns the width of the specified text.
	 *
	 * @param {string} text - The text to be measured.
	 * @returns {number} The width of the text in pixels.
	 * @param text
	 * @return
	 */
	measureTextWidth(text: string): number;

	/**
	 * Adds a callback function that will be called when the bitmap is loaded.
	 *
	 * @param {function} listner - The callback function.
	 * @param listner
	 */
	addLoadListener(listner: (bitmap: Bitmap) => void): void;

	/**
	 * Tries to load the image again.
	 */
	retry(): void;

	/**
	 *
	 * @return
	 */
	_makeFontNameText(): string;

	/**
	 *
	 * @param text
	 * @param tx
	 * @param ty
	 * @param maxWidth
	 */
	_drawTextOutline(text: string, tx: number, ty: number, maxWidth: number): void;

	/**
	 *
	 * @param text
	 * @param tx
	 * @param ty
	 * @param maxWidth
	 */
	_drawTextBody(text: string, tx: number, ty: number, maxWidth: number): void;

	/**
	 *
	 * @param width
	 * @param height
	 */
	_createCanvas(width: number, height: number): void;

	/**
	 *
	 */
	_ensureCanvas(): void;

	/**
	 *
	 */
	_destroyCanvas(): void;

	/**
	 *
	 * @param source
	 */
	_createBaseTexture(source: HTMLCanvasElement): void;

	/**
	 *
	 */
	_updateScaleMode(): void;

	/**
	 *
	 */
	_startLoading(): void;

	/**
	 *
	 */
	_startDecrypting(): void;

	/**
	 *
	 * @param xhr
	 */
	_onXhrLoad(xhr: /* Bitmap.prototype._onXhrLoad0 */ XMLHttpRequest): void;

	/**
	 *
	 */
	_onLoad(): void;

	/**
	 *
	 */
	_callLoadListeners(): void;

	/**
	 *
	 */
	_onError(): void;

	/**
	 *
	 */
	_url: string;

	/**
	 *
	 */
	_paintOpacity: number;

	/**
	 *
	 */
	_smooth: boolean;

	/**
	 *
	 */
	_loadListeners: Array<(bitmap: Bitmap) => void>;

	/**
	 *
	 */
	_loadingState: string;

	/**
	 *
	 */
	fontFace: string;

	/**
	 *
	 */
	fontSize: number;

	/**
	 *
	 */
	fontBold: boolean;

	/**
	 *
	 */
	fontItalic: boolean;

	/**
	 *
	 */
	textColor: string;

	/**
	 *
	 */
	outlineColor: string;

	/**
	 *
	 */
	outlineWidth: number;
}

declare namespace Bitmap.prototype{
	// Bitmap.prototype._onXhrLoad.!0

	/**
	 *
	 */
	interface _onXhrLoad0 {

		/**
		 *
		 */
		responseType: string;

		/**
		 *
		 */
		onload(): void;

		/**
		 *
		 */
		onerror(): void;
	}
}

/**
 * The basic object that is rendered to the game screen.
 *
 * @class
 * @extends PIXI.Sprite
 * @param {Bitmap} bitmap - The image for the sprite.
 */
declare interface Sprite {

	/**
	 *
	 * @return
	 */
	new (): Sprite;
}

/**
 *
 */
declare namespace Sprite {

	/**
	 *
	 */
	var _counter: number;
}

/**
 * The tilemap which displays 2D tile-based game map.
 *
 * @class
 * @extends PIXI.Container
 */
declare interface Tilemap {

	/**
	 *
	 * @return
	 */
	new (): Tilemap;
}

/**
 *
 */
declare namespace Tilemap{

	/**
	 *:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 * Tile type checkers
	 */
	var TILE_ID_B: number;

	/**
	 *
	 */
	var TILE_ID_C: number;

	/**
	 *
	 */
	var TILE_ID_D: number;

	/**
	 *
	 */
	var TILE_ID_E: number;

	/**
	 *
	 */
	var TILE_ID_A5: number;

	/**
	 *
	 */
	var TILE_ID_A1: number;

	/**
	 *
	 */
	var TILE_ID_A2: number;

	/**
	 *
	 */
	var TILE_ID_A3: number;

	/**
	 *
	 */
	var TILE_ID_A4: number;

	/**
	 *
	 */
	var TILE_ID_MAX: number;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isVisibleTile(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isAutotile(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function getAutotileKind(tileId: any): number;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function getAutotileShape(tileId: any): number;

	/**
	 *
	 * @param kind
	 * @param shape
	 */
	function makeAutotileId(kind: any, shape: any): void;

	/**
	 *
	 * @param tileID1
	 * @param tileID2
	 * @return
	 */
	function isSameKindTile(tileID1: any, tileID2: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isTileA1(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isTileA2(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isTileA3(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isTileA4(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isTileA5(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isWaterTile(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isWaterfallTile(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isGroundTile(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isShadowingTile(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isRoofTile(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isWallTopTile(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isWallSideTile(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isWallTile(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isFloorTypeAutotile(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isWallTypeAutotile(tileId: any): boolean;

	/**
	 *
	 * @param tileId
	 * @return
	 */
	function isWaterfallTypeAutotile(tileId: any): boolean;

	/**
	 * prettier-ignore
	 */
	var FLOOR_AUTOTILE_TABLE: [
    [[2, 4], [1, 4], [2, 3], [1, 3]],
    [[2, 0], [1, 4], [2, 3], [1, 3]],
    [[2, 4], [3, 0], [2, 3], [1, 3]],
    [[2, 0], [3, 0], [2, 3], [1, 3]],
    [[2, 4], [1, 4], [2, 3], [3, 1]],
    [[2, 0], [1, 4], [2, 3], [3, 1]],
    [[2, 4], [3, 0], [2, 3], [3, 1]],
    [[2, 0], [3, 0], [2, 3], [3, 1]],
    [[2, 4], [1, 4], [2, 1], [1, 3]],
    [[2, 0], [1, 4], [2, 1], [1, 3]],
    [[2, 4], [3, 0], [2, 1], [1, 3]],
    [[2, 0], [3, 0], [2, 1], [1, 3]],
    [[2, 4], [1, 4], [2, 1], [3, 1]],
    [[2, 0], [1, 4], [2, 1], [3, 1]],
    [[2, 4], [3, 0], [2, 1], [3, 1]],
    [[2, 0], [3, 0], [2, 1], [3, 1]],
    [[0, 4], [1, 4], [0, 3], [1, 3]],
    [[0, 4], [3, 0], [0, 3], [1, 3]],
    [[0, 4], [1, 4], [0, 3], [3, 1]],
    [[0, 4], [3, 0], [0, 3], [3, 1]],
    [[2, 2], [1, 2], [2, 3], [1, 3]],
    [[2, 2], [1, 2], [2, 3], [3, 1]],
    [[2, 2], [1, 2], [2, 1], [1, 3]],
    [[2, 2], [1, 2], [2, 1], [3, 1]],
    [[2, 4], [3, 4], [2, 3], [3, 3]],
    [[2, 4], [3, 4], [2, 1], [3, 3]],
    [[2, 0], [3, 4], [2, 3], [3, 3]],
    [[2, 0], [3, 4], [2, 1], [3, 3]],
    [[2, 4], [1, 4], [2, 5], [1, 5]],
    [[2, 0], [1, 4], [2, 5], [1, 5]],
    [[2, 4], [3, 0], [2, 5], [1, 5]],
    [[2, 0], [3, 0], [2, 5], [1, 5]],
    [[0, 4], [3, 4], [0, 3], [3, 3]],
    [[2, 2], [1, 2], [2, 5], [1, 5]],
    [[0, 2], [1, 2], [0, 3], [1, 3]],
    [[0, 2], [1, 2], [0, 3], [3, 1]],
    [[2, 2], [3, 2], [2, 3], [3, 3]],
    [[2, 2], [3, 2], [2, 1], [3, 3]],
    [[2, 4], [3, 4], [2, 5], [3, 5]],
    [[2, 0], [3, 4], [2, 5], [3, 5]],
    [[0, 4], [1, 4], [0, 5], [1, 5]],
    [[0, 4], [3, 0], [0, 5], [1, 5]],
    [[0, 2], [3, 2], [0, 3], [3, 3]],
    [[0, 2], [1, 2], [0, 5], [1, 5]],
    [[0, 4], [3, 4], [0, 5], [3, 5]],
    [[2, 2], [3, 2], [2, 5], [3, 5]],
    [[0, 2], [3, 2], [0, 5], [3, 5]],
    [[0, 0], [1, 0], [0, 1], [1, 1]]
	];

	/**
	 * prettier-ignore
	 */
	var WALL_AUTOTILE_TABLE: [
    [[2, 2], [1, 2], [2, 1], [1, 1]],
    [[0, 2], [1, 2], [0, 1], [1, 1]],
    [[2, 0], [1, 0], [2, 1], [1, 1]],
    [[0, 0], [1, 0], [0, 1], [1, 1]],
    [[2, 2], [3, 2], [2, 1], [3, 1]],
    [[0, 2], [3, 2], [0, 1], [3, 1]],
    [[2, 0], [3, 0], [2, 1], [3, 1]],
    [[0, 0], [3, 0], [0, 1], [3, 1]],
    [[2, 2], [1, 2], [2, 3], [1, 3]],
    [[0, 2], [1, 2], [0, 3], [1, 3]],
    [[2, 0], [1, 0], [2, 3], [1, 3]],
    [[0, 0], [1, 0], [0, 3], [1, 3]],
    [[2, 2], [3, 2], [2, 3], [3, 3]],
    [[0, 2], [3, 2], [0, 3], [3, 3]],
    [[2, 0], [3, 0], [2, 3], [3, 3]],
    [[0, 0], [3, 0], [0, 3], [3, 3]]
	];

	/**
	 * prettier-ignore
	 */
	var WATERFALL_AUTOTILE_TABLE: [
    [[2, 0], [1, 0], [2, 1], [1, 1]],
    [[0, 0], [1, 0], [0, 1], [1, 1]],
    [[2, 0], [3, 0], [2, 1], [3, 1]],
    [[0, 0], [3, 0], [0, 1], [3, 1]]
	];
	/**
	 *:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 * Internal classes
	 */
	interface Layer {

		/**
		 *
		 */
		new ();

		/**
		 *
		 */
		initialize(): void;

		/**
		 *
		 */
		destroy(): void;

		/**
		 * Sets the bitmaps used as a tileset.
		 *
		 * @param {array} bitmaps - The array of the tileset bitmaps.
		 * @param bitmaps
		 */
		setBitmaps(bitmaps: any): void;

		/**
		 *
		 */
		clear(): void;

		/**
		 *
		 * @param setNumber
		 * @param sx
		 * @param sy
		 * @param dx
		 * @param dy
		 * @param w
		 * @param h
		 */
		addRect(setNumber: number, sx: number, sy: number, dx: number, dy: number, w: number, h: number): void;

		/**
		 * Renders the object using the WebGL renderer.
		 *
		 * @param {PIXI.Renderer} renderer - The renderer.
		 * @param renderer
		 */
		render(renderer: PIXI.Renderer): void;

		/**
		 *
		 * @return
		 */
		isReady(): boolean;

		/**
		 *
		 */
		_createVao(): void;

		/**
		 *
		 */
		_updateIndexBuffer(): void;

		/**
		 *
		 */
		_updateVertexBuffer(): void;

		/**
		 *
		 */
		MAX_GL_TEXTURES: number;

		/**
		 *
		 */
		VERTEX_STRIDE: number;
	}

	/**
	 *
	 */
	interface Renderer {

		/**
		 *
		 * @return
		 */
		new (): Renderer;
	}
}

/**
 * The sprite object for a tiling image.
 *
 * @class
 * @extends PIXI.TilingSprite
 * @param {Bitmap} bitmap - The image for the tiling sprite.
 */
declare interface TilingSprite {

	/**
	 *
	 * @return
	 */
	new (): TilingSprite;
}

/**
 * The sprite which covers the entire game screen.
 *
 * @class
 * @extends PIXI.Container
 */
declare interface ScreenSprite {

	/**
	 *
	 * @return
	 */
	new (): ScreenSprite;
}

/**
 * The window in the game.
 *
 * @class
 * @extends PIXI.Container
 */
declare interface Window {

	/**
	 *
	 * @return
	 */
	new (): Window;
}

/**
 * The layer which contains game windows.
 *
 * @class
 * @extends PIXI.Container
 */
declare interface WindowLayer {

	/**
	 *
	 * @return
	 */
	new (): WindowLayer;
}

/**
 * The weather effect which displays rain, storm, or snow.
 *
 * @class
 * @extends PIXI.Container
 */
declare interface Weather {

	/**
	 *
	 * @return
	 */
	new (): Weather;
}

/**
 * The color filter for WebGL.
 *
 * @class
 * @extends PIXI.Filter
 */
declare interface ColorFilter {

	/**
	 *
	 */
	new ();

	/**
	 *
	 */
	initialize(): void;

	/**
	 * Sets the hue rotation value.
	 *
	 * @param {number} hue - The hue value (-360, 360).
	 * @param hue
	 */
	setHue(hue: number): void;

	/**
	 * Sets the color tone.
	 *
	 * @param {array} tone - The color tone [r, g, b, gray].
	 * @param tone
	 */
	setColorTone(tone: [number, number, number, number]): void;

	/**
	 * Sets the blend color.
	 *
	 * @param {array} color - The blend color [r, g, b, a].
	 * @param color
	 */
	setBlendColor(color: [number, number, number, number]): void;

	/**
	 * Sets the brightness.
	 *
	 * @param {number} brightness - The brightness (0 to 255).
	 * @param brightness
	 */
	setBrightness(brightness: number): void;

	/**
	 *
	 * @return
	 */
	_fragmentSrc(): string;
}

/**
 * The root object of the display tree.
 *
 * @class
 * @extends PIXI.Container
 */
declare interface Stage {

	/**
	 *
	 * @return
	 */
	new (): Stage;
}

/**
 * The audio object of Web Audio API.
 *
 * @class
 * @param {string} url - The url of the audio file.
 */
declare interface WebAudio {

	/**
	 *
	 */
	new ();

	/**
	 * Initializes the audio system.
	 *
	 * @returns {boolean} True if the audio system is available.
	 * @return
	 */
	initialize(): boolean;

	/**
	 * Clears the audio data.
	 */
	clear(): void;

	/**
	 * Checks whether the audio data is ready to play.
	 *
	 * @returns {boolean} True if the audio data is ready to play.
	 * @return
	 */
	isReady(): /* !this._buffers */ any;

	/**
	 * Checks whether a loading error has occurred.
	 *
	 * @returns {boolean} True if a loading error has occurred.
	 * @return
	 */
	isError(): /* !this._isError */ any;

	/**
	 * Checks whether the audio is playing.
	 *
	 * @returns {boolean} True if the audio is playing.
	 * @return
	 */
	isPlaying(): /* !this._isPlaying */ any;

	/**
	 * Plays the audio.
	 *
	 * @param {boolean} loop - Whether the audio data play in a loop.
	 * @param {number} offset - The start position to play in seconds.
	 * @param loop
	 * @param offset
	 */
	play(loop: boolean, offset: number): void;

	/**
	 * Stops the audio.
	 */
	stop(): void;

	/**
	 * Destroys the audio.
	 */
	destroy(): void;

	/**
	 * Performs the audio fade-in.
	 *
	 * @param {number} duration - Fade-in time in seconds.
	 * @param duration
	 */
	fadeIn(duration: number): void;

	/**
	 * Performs the audio fade-out.
	 *
	 * @param {number} duration - Fade-out time in seconds.
	 * @param duration
	 */
	fadeOut(duration: number): void;

	/**
	 * Gets the seek position of the audio.
	 * @return
	 */
	seek(): number;

	/**
	 * Adds a callback function that will be called when the audio data is loaded.
	 *
	 * @param {function} listner - The callback function.
	 * @param listner
	 */
	addLoadListener(listner: () => void): void;

	/**
	 * Adds a callback function that will be called when the playback is stopped.
	 *
	 * @param {function} listner - The callback function.
	 * @param listner
	 */
	addStopListener(listner: () => void): void;

	/**
	 * Tries to load the audio again.
	 */
	retry(): void;

	/**
	 *
	 */
	_startLoading(): void;

	/**
	 *
	 * @return
	 */
	_shouldUseDecoder(): boolean;

	/**
	 *
	 */
	_createDecoder(): void;

	/**
	 *
	 */
	_destroyDecoder(): void;

	/**
	 *
	 * @return
	 */
	_realUrl(): string;

	/**
	 *
	 * @param url
	 */
	_startXhrLoading(url: string): void;

	/**
	 *
	 * @param url
	 */
	_startFetching(url: string): void;

	/**
	 *
	 * @param xhr
	 */
	_onXhrLoad(xhr: /* WebAudio.prototype._onXhrLoad0 */ any): void;

	/**
	 *
	 * @param response
	 */
	_onFetch(response: any): void;

	/**
	 *
	 */
	_onError(): void;

	/**
	 *
	 * @param value
	 */
	_onFetchProcess(value: any): void;

	/**
	 *
	 */
	_updateBufferOnFetch(): void;

	/**
	 *
	 */
	_concatenateFetchedData(): void;

	/**
	 *
	 */
	_updateBuffer(): void;

	/**
	 *
	 * @return
	 */
	_readableBuffer(): /* !this._data.buffer */ any;

	/**
	 *
	 * @param arrayBuffer
	 */
	_decodeAudioData(arrayBuffer: ArrayBuffer): void;

	/**
	 *
	 * @param buffer
	 */
	_onDecode(buffer: any): void;

	/**
	 *
	 */
	_refreshSourceNode(): void;

	/**
	 *
	 * @param offset
	 */
	_startPlaying(offset: number): void;

	/**
	 *
	 */
	_startAllSourceNodes(): void;

	/**
	 *
	 * @param index
	 */
	_startSourceNode(index: number): void;

	/**
	 *
	 */
	_stopSourceNode(): void;

	/**
	 *
	 */
	_createPannerNode(): void;

	/**
	 *
	 */
	_createGainNode(): void;

	/**
	 *
	 */
	_createAllSourceNodes(): void;

	/**
	 *
	 * @param index
	 */
	_createSourceNode(index: number): void;

	/**
	 *
	 */
	_removeNodes(): void;

	/**
	 *
	 */
	_createEndTimer(): void;

	/**
	 *
	 */
	_removeEndTimer(): void;

	/**
	 *
	 */
	_updatePanner(): void;

	/**
	 *
	 */
	_onLoad(): void;

	/**
	 *
	 * @param arrayBuffer
	 */
	_readLoopComments(arrayBuffer: ArrayBuffer): void;

	/**
	 *
	 * @param view
	 * @param index
	 * @param size
	 */
	_readMetaData(view: DataView, index: number, size: number): void;

	/**
	 *
	 * @param view
	 * @param index
	 * @return
	 */
	_readFourCharacters(view: DataView, index: number): string;

	/**
	 *
	 */
	_masterVolume: number;

	/**
	 * Sets the master volume for all audio.
	 *
	 * @param {number} value - The master volume (0 to 1).
	 * @param value
	 */
	setMasterVolume(value: number): void;

	/**
	 *
	 */
	_createContext(): void;

	/**
	 *
	 * @return
	 */
	_currentTime(): /* !this._context.currentTime */ any;

	/**
	 *
	 */
	_createMasterGainNode(): void;

	/**
	 *
	 */
	_setupEventHandlers(): void;

	/**
	 *
	 */
	_onUserGesture(): void;

	/**
	 *
	 */
	_onVisibilityChange(): void;

	/**
	 *
	 */
	_onHide(): void;

	/**
	 *
	 */
	_onShow(): void;

	/**
	 *
	 * @return
	 */
	_shouldMuteOnHide(): boolean;

	/**
	 *
	 */
	_resetVolume(): void;

	/**
	 *
	 * @param duration
	 */
	_fadeIn(duration: number): void;

	/**
	 *
	 * @param duration
	 */
	_fadeOut(duration: number): void;
}

/**
 * The static class that handles video playback.
 *
 * @namespace
 */
declare interface Video {

	/**
	 *
	 * @return
	 */
	new (): Video;
}


/**
 *
 */
declare namespace Video {

	/**
	 * Initializes the video system.
	 *
	 * @param {number} width - The width of the video.
	 * @param {number} height - The height of the video.
	 * @param width
	 * @param height
	 */
	function initialize(width: number, height: number): void;

	/**
	 *
	 */
	var _loading: boolean;

	/**
	 *
	 */
	var _volume: number;

	/**
	 * Changes the display size of the video.
	 *
	 * @param {number} width - The width of the video.
	 * @param {number} height - The height of the video.
	 * @param width
	 * @param height
	 */
	function resize(width: number, height: number): void;

	/**
	 * Starts playback of a video.
	 *
	 * @param {string} src - The url of the video.
	 * @param src
	 */
	function play(src: string): void;

	/**
	 * Checks whether the video is playing.
	 *
	 * @returns {boolean} True if the video is playing.
	 * @return
	 */
	function isPlaying(): /* !this._loading */ any;

	/**
	 * Sets the volume for videos.
	 *
	 * @param {number} volume - The volume for videos (0 to 1).
	 * @param volume
	 */
	function setVolume(volume: number): void;

	/**
	 *
	 */
	function _createElement(): void;

	/**
	 *
	 */
	function _onLoad(): void;

	/**
	 *
	 */
	function _onError(): void;

	/**
	 *
	 */
	function _onEnd(): void;

	/**
	 *
	 * @param videoVisible
	 */
	function _updateVisibility(videoVisible: boolean): void;

	/**
	 *
	 * @return
	 */
	function _isVisible(): boolean;

	/**
	 *
	 */
	function _setupEventHandlers(): void;

	/**
	 *
	 */
	function _onUserGesture(): void;
}

/**
 * The static class that handles input data from the keyboard and gamepads.
 *
 * @namespace
 */
declare interface Input {

	/**
	 *
	 * @return
	 */
	new (): Input;
}


/**
 *
 */
declare namespace Input {

	/**
	 * Initializes the input system.
	 */
	function initialize(): void;

	/**
	 * The wait time of the key repeat in frames.
	 *
	 * @type number
	 */
	var keyRepeatWait: number;

	/**
	 * The interval of the key repeat in frames.
	 *
	 * @type number
	 */
	var keyRepeatInterval: number;

	/**
	 * A hash table to convert from a virtual key code to a mapped key name.
	 *
	 * @type Object
	 */
	var keyMapper: {
	}

	/**
	 * A hash table to convert from a gamepad button to a mapped key name.
	 *
	 * @type Object
	 */
	var gamepadMapper: {
	}

	/**
	 * Clears all the input data.
	 */
	function clear(): void;

	/**
	 *
	 */
	namespace _currentState{
	}

	/**
	 *
	 */
	namespace _previousState{
	}

	/**
	 *
	 */
	var _gamepadStates: number[][];

	/**
	 *
	 */
	var _pressedTime: number;

	/**
	 *
	 */
	var _dir4: number;

	/**
	 *
	 */
	var _dir8: number;

	/**
	 *
	 */
	var _preferredAxis: string;

	/**
	 *
	 */
	var _date: number;

	/**
	 * Updates the input data.
	 */
	function update(): void;

	/**
	 * Checks whether a key is currently pressed down.
	 *
	 * @param {string} keyName - The mapped name of the key.
	 * @returns {boolean} True if the key is pressed.
	 * @param keyName
	 * @return
	 */
	function isPressed(keyName: string): boolean;

	/**
	 * Checks whether a key is just pressed.
	 *
	 * @param {string} keyName - The mapped name of the key.
	 * @returns {boolean} True if the key is triggered.
	 * @param keyName
	 * @return
	 */
	function isTriggered(keyName: string): boolean;

	/**
	 * Checks whether a key is just pressed or a key repeat occurred.
	 *
	 * @param {string} keyName - The mapped name of the key.
	 * @returns {boolean} True if the key is repeated.
	 * @param keyName
	 * @return
	 */
	function isRepeated(keyName: string): boolean;

	/**
	 * Checks whether a key is kept depressed.
	 *
	 * @param {string} keyName - The mapped name of the key.
	 * @returns {boolean} True if the key is long-pressed.
	 * @param keyName
	 * @return
	 */
	function isLongPressed(keyName: string): boolean;

	/**
	 *
	 * @param buttonName
	 */
	function virtualClick(buttonName: string): void;

	/**
	 *
	 */
	function _setupEventHandlers(): void;

	/**
	 *
	 * @param event
	 */
	function _onKeyDown(event: KeyboardEvent): void;

	/**
	 *
	 * @param keyCode
	 * @return
	 */
	function _shouldPreventDefault(keyCode: number): boolean;

	/**
	 *
	 * @param event
	 */
	function _onKeyUp(event: KeyboardEvent): void;

	/**
	 *
	 */
	function _onLostFocus(): void;

	/**
	 *
	 */
	function _pollGamepads(): void;

	/**
	 *
	 * @param gamepad
	 */
	function _updateGamepadState(gamepad: Gamepad): void;

	/**
	 *
	 */
	function _updateDirection(): void;

	/**
	 *
	 * @return
	 */
	function _signX(): number;

	/**
	 *
	 * @return
	 */
	function _signY(): number;

	/**
	 *
	 * @param x
	 * @param y
	 * @return
	 */
	function _makeNumpadDirection(x: number, y: number): number;

	/**
	 *
	 * @param keyName
	 * @return
	 */
	function _isEscapeCompatible(keyName: string): boolean;
}

/**
 * The static class that handles input data from the mouse and touchscreen.
 *
 * @namespace
 */
declare interface TouchInput {

	/**
	 *
	 * @return
	 */
	new (): TouchInput;
}


/**
 *
 */
declare namespace TouchInput{

	/**
	 * Initializes the touch system.
	 */
	function initialize(): void;

	/**
	 * The wait time of the pseudo key repeat in frames.
	 *
	 * @type number
	 */
	var keyRepeatWait: number;

	/**
	 * The interval of the pseudo key repeat in frames.
	 *
	 * @type number
	 */
	var keyRepeatInterval: number;

	/**
	 * The threshold number of pixels to treat as moved.
	 *
	 * @type number
	 */
	var moveThreshold: number;

	/**
	 * Clears all the touch data.
	 */
	function clear(): void;

	/**
	 *
	 */
	var _mousePressed: boolean;

	/**
	 *
	 */
	var _screenPressed: boolean;

	/**
	 *
	 */
	var _pressedTime: number;

	/**
	 *
	 */
	var _clicked: boolean;

	/**
	 *
	 */
	namespace _newState{

		/**
		 *
		 */
		var triggered: boolean;

		/**
		 *
		 */
		var cancelled: boolean;

		/**
		 *
		 */
		var moved: boolean;

		/**
		 *
		 */
		var hovered: boolean;

		/**
		 *
		 */
		var released: boolean;

		/**
		 *
		 */
		var wheelX: number;

		/**
		 *
		 */
		var wheelY: number;
	}

	/**
	 *
	 */
	var _x: number;

	/**
	 *
	 */
	var _y: number;

	/**
	 *
	 */
	var _triggerX: number;

	/**
	 *
	 */
	var _triggerY: number;

	/**
	 *
	 */
	var _moved: boolean;

	/**
	 *
	 */
	var _date: number;

	/**
	 * Updates the touch data.
	 */
	function update(): void;

	/**
	 * Checks whether the mouse button or touchscreen has been pressed and
	 * released at the same position.
	 *
	 * @returns {boolean} True if the mouse button or touchscreen is clicked.
	 * @return
	 */
	function isClicked(): /* !this._clicked */ boolean;

	/**
	 * Checks whether the mouse button or touchscreen is currently pressed down.
	 *
	 * @returns {boolean} True if the mouse button or touchscreen is pressed.
	 * @return
	 */
	function isPressed(): /* !this._mousePressed */ boolean;

	/**
	 * Checks whether the left mouse button or touchscreen is just pressed.
	 *
	 * @returns {boolean} True if the mouse button or touchscreen is triggered.
	 * @return
	 */
	function isTriggered(): /* !this._currentState.triggered */ boolean;

	/**
	 * Checks whether the left mouse button or touchscreen is just pressed
	 * or a pseudo key repeat occurred.
	 *
	 * @returns {boolean} True if the mouse button or touchscreen is repeated.
	 * @return
	 */
	function isRepeated(): /* !this._currentState.triggered */ boolean;

	/**
	 * Checks whether the left mouse button or touchscreen is kept depressed.
	 *
	 * @returns {boolean} True if the left mouse button or touchscreen is long-pressed.
	 * @return
	 */
	function isLongPressed(): boolean;

	/**
	 * Checks whether the right mouse button is just pressed.
	 *
	 * @returns {boolean} True if the right mouse button is just pressed.
	 * @return
	 */
	function isCancelled(): /* !this._currentState.cancelled */ boolean;

	/**
	 * Checks whether the mouse or a finger on the touchscreen is moved.
	 *
	 * @returns {boolean} True if the mouse or a finger on the touchscreen is moved.
	 * @return
	 */
	function isMoved(): /* !this._currentState.moved */ boolean;

	/**
	 * Checks whether the mouse is moved without pressing a button.
	 *
	 * @returns {boolean} True if the mouse is hovered.
	 * @return
	 */
	function isHovered(): /* !this._currentState.hovered */ boolean;

	/**
	 * Checks whether the left mouse button or touchscreen is released.
	 *
	 * @returns {boolean} True if the mouse button or touchscreen is released.
	 * @return
	 */
	function isReleased(): /* !this._currentState.released */ boolean;

	/**
	 *
	 * @return
	 */
	function _createNewState(): /* TouchInput._newState */  {
    triggered: boolean;
    cancelled: boolean;
    moved: boolean;
    hovered: boolean;
    released: boolean;
    wheelX: number;
    wheelY: number;
	};

	/**
	 *
	 */
	function _setupEventHandlers(): void;

	/**
	 *
	 * @param event
	 */
	function _onMouseDown(event: MouseEvent): void;

	/**
	 *
	 * @param event
	 */
	function _onLeftButtonDown(event: MouseEvent): void;

	/**
	 *
	 */
	function _onMiddleButtonDown(): void;

	/**
	 *
	 * @param event
	 */
	function _onRightButtonDown(event: MouseEvent): void;

	/**
	 *
	 * @param event
	 */
	function _onMouseMove(event: MouseEvent): void;

	/**
	 *
	 * @param event
	 */
	function _onMouseUp(event: MouseEvent): void;

	/**
	 *
	 * @param event
	 */
	function _onWheel(event: MouseEvent): void;

	/**
	 *
	 * @param event
	 */
	function _onTouchStart(event: TouchEvent): void;

	/**
	 *
	 * @param event
	 */
	function _onTouchMove(event: TouchEvent): void;

	/**
	 *
	 * @param event
	 */
	function _onTouchEnd(event: TouchEvent): void;

	/**
	 *
	 */
	function _onTouchCancel(): void;

	/**
	 *
	 */
	function _onLostFocus(): void;

	/**
	 *
	 * @param x
	 * @param y
	 */
	function _onTrigger(x: number, y: number): void;

	/**
	 *
	 * @param x
	 * @param y
	 */
	function _onCancel(x: number, y: number): void;

	/**
	 *
	 * @param x
	 * @param y
	 */
	function _onMove(x: number, y: number): void;

	/**
	 *
	 * @param x
	 * @param y
	 */
	function _onHover(x: number, y: number): void;

	/**
	 *
	 * @param x
	 * @param y
	 */
	function _onRelease(x: number, y: number): void;
}

/**
 * The static class that handles JSON with object information.
 *
 * @namespace
 */
declare interface JsonEx {

	/**
	 *
	 * @return
	 */
	new (): JsonEx;
}


/**
 *
 */
declare namespace JsonEx {

	/**
	 * The maximum depth of objects.
	 *
	 * @type number
	 * @default 100
	 */
	var maxDepth: number;

	/**
	 * Converts an object to a JSON string with object information.
	 *
	 * @param {object} object - The object to be converted.
	 * @returns {string} The JSON string.
	 * @param object
	 * @return
	 */
	function stringify(object: any): string;

	/**
	 * Parses a JSON string and reconstructs the corresponding object.
	 *
	 * @param {string} json - The JSON string.
	 * @returns {object} The reconstructed object.
	 * @param json
	 * @return
	 */
	function parse(json: string): any;

	/**
	 * Makes a deep copy of the specified object.
	 *
	 * @param {object} object - The object to be copied.
	 * @returns {object} The copied object.
	 * @param object
	 * @return
	 */
	function makeDeepCopy<T>(object: T): T;

	/**
	 *
	 * @param value
	 * @param depth
	 * @return
	 */
	function _encode(value: /* JsonEx.stringify.!0 */ any, depth: number): /* JsonEx._encodeRet */ any;

	/**
	 *
	 * @param value
	 * @return
	 */
	function _decode(value: /* JsonEx._decode0 */ any): /* JsonEx._decode0 */ any;
}

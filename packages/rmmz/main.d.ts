/**
 * =============================================================================
 *  main.js v1.0.0
 * =============================================================================
 */
declare var scriptUrls :string[];

/**
 *
 */
declare var effekseerWasmUrl : string;

/**
 *
 */
declare interface Main {

	/**
	 *
	 */
	new ();

	/**
	 *
	 */
	run(): void;

	/**
	 *
	 */
	showLoadingSpinner(): void;

	/**
	 *
	 */
	eraseLoadingSpinner(): void;

	/**
	 *
	 */
	testXhr(): void;

	/**
	 *
	 */
	loadMainScripts(): void;

	/**
	 *
	 */
	onScriptLoad(): void;

	/**
	 *
	 * @param e
	 */
	onScriptError(e : Event): void;

	/**
	 *
	 * @param name
	 * @param message
	 */
	printError(name : string, message : string): void;

	/**
	 *
	 * @param name
	 * @param message
	 */
	makeErrorHtml(name : string, message : string): void;

	/**
	 *
	 */
	onWindowLoad(): void;

	/**
	 *
	 * @param event
	 */
	onWindowError(event : Event): void;

	/**
	 *
	 */
	isPathRandomized(): void;

	/**
	 *
	 */
	initEffekseerRuntime(): void;

	/**
	 *
	 */
	onEffekseerLoad(): void;

	/**
	 *
	 */
	onEffekseerError(): void;

	/**
	 *
	 */
	xhrSucceeded : boolean;

	/**
	 *
	 */
	loadCount : number;

	/**
	 *
	 */
	numScripts : number;
}

/**
 *
 */
declare var main : Main;

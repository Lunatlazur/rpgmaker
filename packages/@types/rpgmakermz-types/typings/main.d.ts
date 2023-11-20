//=============================================================================
// main.js v1.5.0
//=============================================================================

type scriptUrls = [
  'js/libs/pixi.js',
  'js/libs/pako.min.js',
  'js/libs/localforage.min.js',
  'js/libs/effekseer.min.js',
  'js/libs/vorbisdecoder.js',
  'js/rmmz_core.js',
  'js/rmmz_managers.js',
  'js/rmmz_objects.js',
  'js/rmmz_scenes.js',
  'js/rmmz_sprites.js',
  'js/rmmz_windows.js',
  'js/plugins.js'
] & string[]
type effekseerWasmUrl = 'js/libs/effekseer.wasm' | string

declare class Main {
  xhrSucceeded: boolean
  loadCount: number
  numScripts?: number
  error: any | null

  run(): void

  showLoadingSpinner(): void
  eraseLoadingSpinner(): void
  testXhr(): void
  hookNwjsClose(): void
  loadMainScripts(): void
  onScriptLoad(): void
  onScriptError(e: Event): void
  printError(name: string, message: string): void
  makeErrorHtml(name: string, message: string): string
  onWindowLoad(): void
  onWindowError(event: Event): void
  isPathRandomized(): void
  initEffekseerRuntime(): void
  onEffekseerLoad(): void
  onEffekseerError(): void
}

declare const main: Main

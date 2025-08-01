/**
 * RPGツクールMV用 DOM型定義
 * 
 * このファイルは自動生成されています。直接編集しないでください。
 * 生成日時: 2025-08-01T19:51:30.520Z
 */

type AAGUID = BufferSource;

AbortController: {
  prototype: AbortController;
  new(): AbortController;
}

AbortSignal: {
  prototype: AbortSignal;
  new(): AbortSignal;
}

interface AbortSignalEventMap {
  "abort": Event;
}

AbstractRange: {
  prototype: AbstractRange;
  new(): AbstractRange;
}

interface AbstractWorker {
  onerror: ((this: AbstractWorker, ev: ErrorEvent) => any) | null;
  addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
  removeEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AbstractWorkerEventMap {
  "error": ErrorEvent;
}

interface Account {
  displayName: string;
  id: string;
  imageURL?: string;
  name?: string;
  rpDisplayName: string;
}

declare function addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;

interface AddEventListenerOptions extends EventListenerOptions {
  once?: boolean;
  passive?: boolean;
}

interface AesCbcParams extends Algorithm {
  iv: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

interface AesCfbParams extends Algorithm {
  iv: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

interface AesCmacParams extends Algorithm {
  length: number;
}

interface AesCtrParams extends Algorithm {
  counter: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
  length: number;
}

interface AesDerivedKeyParams extends Algorithm {
  length: number;
}

interface AesGcmParams extends Algorithm {
  additionalData?: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
  iv: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
  tagLength?: number;
}

interface AesKeyAlgorithm extends KeyAlgorithm {
  length: number;
}

interface AesKeyGenParams extends Algorithm {
  length: number;
}

declare function alert(message?: any): void;

interface Algorithm {
  name: string;
}

type AlgorithmIdentifier = string | Algorithm;

type AlignSetting = "center" | "end" | "left" | "right" | "start";

AnalyserNode: {
  prototype: AnalyserNode;
  new(context: BaseAudioContext, options?: AnalyserOptions): AnalyserNode;
}

interface AnalyserOptions extends AudioNodeOptions {
  fftSize?: number;
  maxDecibels?: number;
  minDecibels?: number;
  smoothingTimeConstant?: number;
}

/** The ANGLE_instanced_arrays extension is part of the WebGL API and allows to draw the same object, or groups of similar objects multiple times, if they share the same vertex data, primitive count and type. */
interface ANGLE_instanced_arrays {
  drawArraysInstancedANGLE(mode: GLenum, first: GLint, count: GLsizei, primcount: GLsizei): void;
  drawElementsInstancedANGLE(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, primcount: GLsizei): void;
  vertexAttribDivisorANGLE(index: GLuint, divisor: GLuint): void;
  readonly VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: GLenum;
}

interface Animatable {
  animate(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions): Animation;
  getAnimations(): Animation[];
}

Animation: {
  prototype: Animation;
  new(effect?: AnimationEffect | null, timeline?: AnimationTimeline | null): Animation;
}

AnimationEffect: {
  prototype: AnimationEffect;
  new(): AnimationEffect;
}

AnimationEvent: {
  prototype: AnimationEvent;
  new(type: string, animationEventInitDict?: AnimationEventInit): AnimationEvent;
}

interface AnimationEventInit extends EventInit {
  animationName?: string;
  elapsedTime?: number;
  pseudoElement?: string;
}

interface AnimationEventMap {
  "cancel": AnimationPlaybackEvent;
  "finish": AnimationPlaybackEvent;
}

interface AnimationFrameProvider {
  cancelAnimationFrame(handle: number): void;
  requestAnimationFrame(callback: FrameRequestCallback): number;
}

AnimationPlaybackEvent: {
  prototype: AnimationPlaybackEvent;
  new(type: string, eventInitDict?: AnimationPlaybackEventInit): AnimationPlaybackEvent;
}

interface AnimationPlaybackEventInit extends EventInit {
  currentTime?: number | null;
  timelineTime?: number | null;
}

type AnimationPlayState = "finished" | "idle" | "paused" | "running";

AnimationTimeline: {
  prototype: AnimationTimeline;
  new(): AnimationTimeline;
}

type AppendMode = "segments" | "sequence";

applicationCache: ApplicationCache

ApplicationCache: {
  prototype: ApplicationCache;
  new(): ApplicationCache;
  readonly CHECKING: number;
  readonly DOWNLOADING: number;
  readonly IDLE: number;
  readonly OBSOLETE: number;
  readonly UNCACHED: number;
  readonly UPDATEREADY: number;
}

interface ApplicationCacheEventMap {
  "cached": Event;
  "checking": Event;
  "downloading": Event;
  "error": Event;
  "noupdate": Event;
  "obsolete": Event;
  "progress": ProgressEvent<ApplicationCache>;
  "updateready": Event;
}

interface AssertionOptions {
  allowList?: ScopedCredentialDescriptor[];
  extensions?: WebAuthnExtensions;
  rpId?: string;
  timeoutSeconds?: number;
}

interface AssignedNodesOptions {
  flatten?: boolean;
}

declare function atob(data: string): string;

type AttestationConveyancePreference = "direct" | "indirect" | "none";

Attr: {
  prototype: Attr;
  new(): Attr;
}

Audio: {
  new(src?: string): HTMLAudioElement;
}

AudioBuffer: {
  prototype: AudioBuffer;
  new(options: AudioBufferOptions): AudioBuffer;
}

interface AudioBufferOptions {
  length: number;
  numberOfChannels?: number;
  sampleRate: number;
}

AudioBufferSourceNode: {
  prototype: AudioBufferSourceNode;
  new(context: BaseAudioContext, options?: AudioBufferSourceOptions): AudioBufferSourceNode;
}

interface AudioBufferSourceOptions {
  buffer?: AudioBuffer | null;
  detune?: number;
  loop?: boolean;
  loopEnd?: number;
  loopStart?: number;
  playbackRate?: number;
}

AudioContext: {
  prototype: AudioContext;
  new(contextOptions?: AudioContextOptions): AudioContext;
}

interface AudioContextInfo {
  currentTime?: number;
  sampleRate?: number;
}

type AudioContextLatencyCategory = "balanced" | "interactive" | "playback";

interface AudioContextOptions {
  latencyHint?: AudioContextLatencyCategory | number;
  sampleRate?: number;
}

type AudioContextState = "closed" | "running" | "suspended";

AudioDestinationNode: {
  prototype: AudioDestinationNode;
  new(): AudioDestinationNode;
}

AudioListener: {
  prototype: AudioListener;
  new(): AudioListener;
}

AudioNode: {
  prototype: AudioNode;
  new(): AudioNode;
}

interface AudioNodeOptions {
  channelCount?: number;
  channelCountMode?: ChannelCountMode;
  channelInterpretation?: ChannelInterpretation;
}

AudioParam: {
  prototype: AudioParam;
  new(): AudioParam;
}

interface AudioParamDescriptor {
  automationRate?: AutomationRate;
  defaultValue?: number;
  maxValue?: number;
  minValue?: number;
  name: string;
}

AudioParamMap: {
  prototype: AudioParamMap;
  new(): AudioParamMap;
}

AudioProcessingEvent: {
  prototype: AudioProcessingEvent;
  new(type: string, eventInitDict: AudioProcessingEventInit): AudioProcessingEvent;
}

interface AudioProcessingEventInit extends EventInit {
  inputBuffer: AudioBuffer;
  outputBuffer: AudioBuffer;
  playbackTime: number;
}

AudioScheduledSourceNode: {
  prototype: AudioScheduledSourceNode;
  new(): AudioScheduledSourceNode;
}

interface AudioScheduledSourceNodeEventMap {
  "ended": Event;
}

interface AudioTimestamp {
  contextTime?: number;
  performanceTime?: number;
}

AudioWorklet: {
  prototype: AudioWorklet;
  new(): AudioWorklet;
}

AudioWorkletNode: {
  prototype: AudioWorkletNode;
  new(context: BaseAudioContext, name: string, options?: AudioWorkletNodeOptions): AudioWorkletNode;
}

interface AudioWorkletNodeEventMap {
  "processorerror": Event;
}

interface AudioWorkletNodeOptions extends AudioNodeOptions {
  numberOfInputs?: number;
  numberOfOutputs?: number;
  outputChannelCount?: number[];
  parameterData?: Record<string, number>;
  processorOptions?: any;
}

interface AuthenticationExtensionsClientInputs {
  appid?: string;
  authnSel?: AuthenticatorSelectionList;
  exts?: boolean;
  loc?: boolean;
  txAuthGeneric?: txAuthGenericArg;
  txAuthSimple?: string;
  uvi?: boolean;
  uvm?: boolean;
}

interface AuthenticationExtensionsClientOutputs {
  appid?: boolean;
  authnSel?: boolean;
  exts?: AuthenticationExtensionsSupported;
  loc?: Coordinates;
  txAuthGeneric?: ArrayBuffer;
  txAuthSimple?: string;
  uvi?: ArrayBuffer;
  uvm?: UvmEntries;
}

type AuthenticationExtensionsSupported = string[];

AuthenticatorAssertionResponse: {
  prototype: AuthenticatorAssertionResponse;
  new(): AuthenticatorAssertionResponse;
}

type AuthenticatorAttachment = "cross-platform" | "platform";

AuthenticatorAttestationResponse: {
  prototype: AuthenticatorAttestationResponse;
  new(): AuthenticatorAttestationResponse;
}

AuthenticatorResponse: {
  prototype: AuthenticatorResponse;
  new(): AuthenticatorResponse;
}

interface AuthenticatorSelectionCriteria {
  authenticatorAttachment?: AuthenticatorAttachment;
  requireResidentKey?: boolean;
  userVerification?: UserVerificationRequirement;
}

type AuthenticatorSelectionList = AAGUID[];

type AuthenticatorTransport = "ble" | "internal" | "nfc" | "usb";

type AutoKeyword = "auto";

type AutomationRate = "a-rate" | "k-rate";

BarProp: {
  prototype: BarProp;
  new(): BarProp;
}

BaseAudioContext: {
  prototype: BaseAudioContext;
  new(): BaseAudioContext;
}

interface BaseAudioContextEventMap {
  "statechange": Event;
}

BeforeUnloadEvent: {
  prototype: BeforeUnloadEvent;
  new(): BeforeUnloadEvent;
}

BhxBrowser: {
  prototype: BhxBrowser;
  new(): BhxBrowser;
}

type BigInteger = Uint8Array;

type BinaryType = "arraybuffer" | "blob";

BiquadFilterNode: {
  prototype: BiquadFilterNode;
  new(context: BaseAudioContext, options?: BiquadFilterOptions): BiquadFilterNode;
}

interface BiquadFilterOptions extends AudioNodeOptions {
  Q?: number;
  detune?: number;
  frequency?: number;
  gain?: number;
  type?: BiquadFilterType;
}

type BiquadFilterType = "allpass" | "bandpass" | "highpass" | "highshelf" | "lowpass" | "lowshelf" | "notch" | "peaking";

Blob: {
  prototype: Blob;
  new(blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
}

interface BlobCallback {
  (blob: Blob | null): void;
}

type BlobPart = BufferSource | Blob | string;

interface BlobPropertyBag {
  endings?: EndingType;
  type?: string;
}

declare function blur(): void;

interface Body {
  readonly body: ReadableStream<Uint8Array> | null;
  readonly bodyUsed: boolean;
  arrayBuffer(): Promise<ArrayBuffer>;
  blob(): Promise<Blob>;
  formData(): Promise<FormData>;
  json(): Promise<any>;
  text(): Promise<string>;
}

type BodyInit = Blob | BufferSource | FormData | URLSearchParams | ReadableStream<Uint8Array> | string;

BroadcastChannel: {
  prototype: BroadcastChannel;
  new(name: string): BroadcastChannel;
}

interface BroadcastChannelEventMap {
  "message": MessageEvent;
  "messageerror": MessageEvent;
}

declare function btoa(data: string): string;

type BufferSource = ArrayBufferView | ArrayBuffer;

interface ByteLengthChunk {
  byteLength?: number;
}

ByteLengthQueuingStrategy: {
  prototype: ByteLengthQueuingStrategy;
  new(options: { highWaterMark: number }): ByteLengthQueuingStrategy;
}

Cache: {
  prototype: Cache;
  new(): Cache;
}

interface CacheQueryOptions {
  ignoreMethod?: boolean;
  ignoreSearch?: boolean;
  ignoreVary?: boolean;
}

caches: CacheStorage

CacheStorage: {
  prototype: CacheStorage;
  new(): CacheStorage;
}

declare function cancelAnimationFrame(handle: number): void;

type CanPlayTypeResult = "" | "maybe" | "probably";

interface CanvasCompositing {
  globalAlpha: number;
  globalCompositeOperation: string;
}

type CanvasDirection = "inherit" | "ltr" | "rtl";

interface CanvasDrawImage {
  drawImage(image: CanvasImageSource, dx: number, dy: number): void;
  drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
  drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
}

interface CanvasDrawPath {
  beginPath(): void;
  clip(fillRule?: CanvasFillRule): void;
  clip(path: Path2D, fillRule?: CanvasFillRule): void;
  fill(fillRule?: CanvasFillRule): void;
  fill(path: Path2D, fillRule?: CanvasFillRule): void;
  isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
  isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
  isPointInStroke(x: number, y: number): boolean;
  isPointInStroke(path: Path2D, x: number, y: number): boolean;
  stroke(): void;
  stroke(path: Path2D): void;
}

type CanvasFillRule = "evenodd" | "nonzero";

interface CanvasFillStrokeStyles {
  fillStyle: string | CanvasGradient | CanvasPattern;
  strokeStyle: string | CanvasGradient | CanvasPattern;
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
  createPattern(image: CanvasImageSource, repetition: string | null): CanvasPattern | null;
  createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
}

interface CanvasFilters {
  filter: string;
}

CanvasGradient: {
  prototype: CanvasGradient;
  new(): CanvasGradient;
}

interface CanvasImageData {
  createImageData(sw: number, sh: number): ImageData;
  createImageData(imagedata: ImageData): ImageData;
  getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
  putImageData(imagedata: ImageData, dx: number, dy: number): void;
  putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
}

interface CanvasImageSmoothing {
  imageSmoothingEnabled: boolean;
  imageSmoothingQuality: ImageSmoothingQuality;
}

type CanvasImageSource = HTMLOrSVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas;

type CanvasLineCap = "butt" | "round" | "square";

type CanvasLineJoin = "bevel" | "miter" | "round";

interface CanvasPath {
  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
  closePath(): void;
  ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
  lineTo(x: number, y: number): void;
  moveTo(x: number, y: number): void;
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
  rect(x: number, y: number, w: number, h: number): void;
}

interface CanvasPathDrawingStyles {
  lineCap: CanvasLineCap;
  lineDashOffset: number;
  lineJoin: CanvasLineJoin;
  lineWidth: number;
  miterLimit: number;
  getLineDash(): number[];
  setLineDash(segments: number[]): void;
}

CanvasPattern: {
  prototype: CanvasPattern;
  new(): CanvasPattern;
}

interface CanvasRect {
  clearRect(x: number, y: number, w: number, h: number): void;
  fillRect(x: number, y: number, w: number, h: number): void;
  strokeRect(x: number, y: number, w: number, h: number): void;
}

CanvasRenderingContext2D: {
  prototype: CanvasRenderingContext2D;
  new(): CanvasRenderingContext2D;
}

interface CanvasRenderingContext2DSettings {
  alpha?: boolean;
  desynchronized?: boolean;
}

interface CanvasShadowStyles {
  shadowBlur: number;
  shadowColor: string;
  shadowOffsetX: number;
  shadowOffsetY: number;
}

interface CanvasState {
  restore(): void;
  save(): void;
}

interface CanvasText {
  fillText(text: string, x: number, y: number, maxWidth?: number): void;
  measureText(text: string): TextMetrics;
  strokeText(text: string, x: number, y: number, maxWidth?: number): void;
}

type CanvasTextAlign = "center" | "end" | "left" | "right" | "start";

type CanvasTextBaseline = "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top";

interface CanvasTextDrawingStyles {
  direction: CanvasDirection;
  font: string;
  textAlign: CanvasTextAlign;
  textBaseline: CanvasTextBaseline;
}

interface CanvasTransform {
  getTransform(): DOMMatrix;
  resetTransform(): void;
  rotate(angle: number): void;
  scale(x: number, y: number): void;
  setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
  setTransform(transform?: DOMMatrix2DInit): void;
  transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
  translate(x: number, y: number): void;
}

interface CanvasUserInterface {
  drawFocusIfNeeded(element: Element): void;
  drawFocusIfNeeded(path: Path2D, element: Element): void;
  scrollPathIntoView(): void;
  scrollPathIntoView(path: Path2D): void;
}

/** @deprecated */
declare function captureEvents(): void;

CaretPosition: {
  prototype: CaretPosition;
  new(): CaretPosition;
}

CDATASection: {
  prototype: CDATASection;
  new(): CDATASection;
}

type ChannelCountMode = "clamped-max" | "explicit" | "max";

type ChannelInterpretation = "discrete" | "speakers";

ChannelMergerNode: {
  prototype: ChannelMergerNode;
  new(context: BaseAudioContext, options?: ChannelMergerOptions): ChannelMergerNode;
}

interface ChannelMergerOptions extends AudioNodeOptions {
  numberOfInputs?: number;
}

ChannelSplitterNode: {
  prototype: ChannelSplitterNode;
  new(context: BaseAudioContext, options?: ChannelSplitterOptions): ChannelSplitterNode;
}

interface ChannelSplitterOptions extends AudioNodeOptions {
  numberOfOutputs?: number;
}

CharacterData: {
  prototype: CharacterData;
  new(): CharacterData;
}

interface ChildNode extends Node {
  /**
   * Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.
   *
   * Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
   */
  after(...nodes: (Node | string)[]): void;
  /**
   * Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.
   *
   * Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
   */
  before(...nodes: (Node | string)[]): void;
  /**
   * Removes node.
   */
  remove(): void;
  /**
   * Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.
   *
   * Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
   */
  replaceWith(...nodes: (Node | string)[]): void;
}

declare function clearInterval(handle?: number): void;

declare function clearTimeout(handle?: number): void;

interface ClientData {
  challenge: string;
  extensions?: WebAuthnExtensions;
  hashAlg: string | Algorithm;
  origin: string;
  rpId: string;
  tokenBinding?: string;
}

clientInformation: Navigator

interface ClientQueryOptions {
  includeUncontrolled?: boolean;
  type?: ClientTypes;
}

ClientRect: {
  prototype: ClientRect;
  new(): ClientRect;
}

ClientRectList: {
  prototype: ClientRectList;
  new(): ClientRectList;
}

type ClientTypes = "all" | "sharedworker" | "window" | "worker";

Clipboard: {
  prototype: Clipboard;
  new(): Clipboard;
}

ClipboardEvent: {
  prototype: ClipboardEvent;
  new(type: string, eventInitDict?: ClipboardEventInit): ClipboardEvent;
}

interface ClipboardEventInit extends EventInit {
  clipboardData?: DataTransfer | null;
}

declare function close(): void;

closed: boolean

CloseEvent: {
  prototype: CloseEvent;
  new(type: string, eventInitDict?: CloseEventInit): CloseEvent;
}

interface CloseEventInit extends EventInit {
  code?: number;
  reason?: string;
  wasClean?: boolean;
}

type ColorSpaceConversion = "default" | "none";

Comment: {
  prototype: Comment;
  new(data?: string): Comment;
}

function compile(bytes: BufferSource): Promise<Module>;

CompileError: {
      prototype: CompileError;
      new(): CompileError;
  }

function compileStreaming(source: Response | Promise<Response>): Promise<Module>;

type CompositeOperation = "accumulate" | "add" | "replace";

type CompositeOperationOrAuto = "accumulate" | "add" | "auto" | "replace";

CompositionEvent: {
  prototype: CompositionEvent;
  new(type: string, eventInitDict?: CompositionEventInit): CompositionEvent;
}

interface CompositionEventInit extends UIEventInit {
  data?: string;
}

interface ComputedEffectTiming extends EffectTiming {
  activeDuration?: number;
  currentIteration?: number | null;
  endTime?: number;
  localTime?: number | null;
  progress?: number | null;
}

interface ComputedKeyframe {
  composite: CompositeOperationOrAuto;
  computedOffset: number;
  easing: string;
  offset: number | null;
  [property: string]: string | number | null | undefined;
}

interface ConcatParams extends Algorithm {
  algorithmId: Uint8Array;
  hash?: string | Algorithm;
  partyUInfo: Uint8Array;
  partyVInfo: Uint8Array;
  privateInfo?: Uint8Array;
  publicInfo?: Uint8Array;
}

declare function confirm(message?: string): boolean;

interface ConfirmSiteSpecificExceptionsInformation extends ExceptionInformation {
  arrayOfDomainStrings?: string[];
}

console: Console

interface Console {
  memory: any;
  assert(condition?: boolean, ...data: any[]): void;
  clear(): void;
  count(label?: string): void;
  countReset(label?: string): void;
  debug(...data: any[]): void;
  dir(item?: any, options?: any): void;
  dirxml(...data: any[]): void;
  error(...data: any[]): void;
  exception(message?: string, ...optionalParams: any[]): void;
  group(...data: any[]): void;
  groupCollapsed(...data: any[]): void;
  groupEnd(): void;
  info(...data: any[]): void;
  log(...data: any[]): void;
  table(tabularData?: any, properties?: string[]): void;
  time(label?: string): void;
  timeEnd(label?: string): void;
  timeLog(label?: string, ...data: any[]): void;
  timeStamp(label?: string): void;
  trace(...data: any[]): void;
  warn(...data: any[]): void;
}

ConstantSourceNode: {
  prototype: ConstantSourceNode;
  new(context: BaseAudioContext, options?: ConstantSourceOptions): ConstantSourceNode;
}

interface ConstantSourceOptions {
  offset?: number;
}

type ConstrainBoolean = boolean | ConstrainBooleanParameters;

interface ConstrainBooleanParameters {
  exact?: boolean;
  ideal?: boolean;
}

type ConstrainDOMString = string | string[] | ConstrainDOMStringParameters;

interface ConstrainDOMStringParameters {
  exact?: string | string[];
  ideal?: string | string[];
}

type ConstrainDouble = number | ConstrainDoubleRange;

interface ConstrainDoubleRange extends DoubleRange {
  exact?: number;
  ideal?: number;
}

type ConstrainULong = number | ConstrainULongRange;

interface ConstrainULongRange extends ULongRange {
  exact?: number;
  ideal?: number;
}

interface ConstrainVideoFacingModeParameters {
  exact?: VideoFacingModeEnum | VideoFacingModeEnum[];
  ideal?: VideoFacingModeEnum | VideoFacingModeEnum[];
}

ConvolverNode: {
  prototype: ConvolverNode;
  new(context: BaseAudioContext, options?: ConvolverOptions): ConvolverNode;
}

interface ConvolverOptions extends AudioNodeOptions {
  buffer?: AudioBuffer | null;
  disableNormalization?: boolean;
}

/** The position and altitude of the device on Earth, as well as the accuracy with which these properties are calculated. */
interface Coordinates {
  readonly accuracy: number;
  readonly altitude: number | null;
  readonly altitudeAccuracy: number | null;
  readonly heading: number | null;
  readonly latitude: number;
  readonly longitude: number;
  readonly speed: number | null;
}

type COSEAlgorithmIdentifier = number;

CountQueuingStrategy: {
  prototype: CountQueuingStrategy;
  new(options: { highWaterMark: number }): CountQueuingStrategy;
}

declare function createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;

Credential: {
  prototype: Credential;
  new(): Credential;
}

interface CredentialCreationOptions {
  publicKey?: PublicKeyCredentialCreationOptions;
  signal?: AbortSignal;
}

type CredentialMediationRequirement = "optional" | "required" | "silent";

interface CredentialRequestOptions {
  mediation?: CredentialMediationRequirement;
  publicKey?: PublicKeyCredentialRequestOptions;
  signal?: AbortSignal;
}

CredentialsContainer: {
  prototype: CredentialsContainer;
  new(): CredentialsContainer;
}

crypto: Crypto

Crypto: {
  prototype: Crypto;
  new(): Crypto;
}

CryptoKey: {
  prototype: CryptoKey;
  new(): CryptoKey;
}

CryptoKeyPair: {
  prototype: CryptoKeyPair;
  new(): CryptoKeyPair;
}

/** Holds useful CSS-related methods. No object with this interface are implemented: it contains only static methods and therefore is a utilitarian interface. */
declare namespace CSS {
  function escape(ident: string): string;
  function supports(property: string, value: string): boolean;
  function supports(conditionText: string): boolean;
}

CSSConditionRule: {
  prototype: CSSConditionRule;
  new(): CSSConditionRule;
}

CSSFontFaceRule: {
  prototype: CSSFontFaceRule;
  new(): CSSFontFaceRule;
}

CSSGroupingRule: {
  prototype: CSSGroupingRule;
  new(): CSSGroupingRule;
}

CSSImportRule: {
  prototype: CSSImportRule;
  new(): CSSImportRule;
}

CSSKeyframeRule: {
  prototype: CSSKeyframeRule;
  new(): CSSKeyframeRule;
}

CSSKeyframesRule: {
  prototype: CSSKeyframesRule;
  new(): CSSKeyframesRule;
}

CSSMediaRule: {
  prototype: CSSMediaRule;
  new(): CSSMediaRule;
}

CSSNamespaceRule: {
  prototype: CSSNamespaceRule;
  new(): CSSNamespaceRule;
}

CSSPageRule: {
  prototype: CSSPageRule;
  new(): CSSPageRule;
}

CSSRule: {
  prototype: CSSRule;
  new(): CSSRule;
  readonly CHARSET_RULE: number;
  readonly FONT_FACE_RULE: number;
  readonly IMPORT_RULE: number;
  readonly KEYFRAMES_RULE: number;
  readonly KEYFRAME_RULE: number;
  readonly MEDIA_RULE: number;
  readonly NAMESPACE_RULE: number;
  readonly PAGE_RULE: number;
  readonly STYLE_RULE: number;
  readonly SUPPORTS_RULE: number;
}

CSSRuleList: {
  prototype: CSSRuleList;
  new(): CSSRuleList;
}

CSSStyleDeclaration: {
  prototype: CSSStyleDeclaration;
  new(): CSSStyleDeclaration;
}

CSSStyleRule: {
  prototype: CSSStyleRule;
  new(): CSSStyleRule;
}

CSSStyleSheet: {
  prototype: CSSStyleSheet;
  new(): CSSStyleSheet;
}

CSSSupportsRule: {
  prototype: CSSSupportsRule;
  new(): CSSSupportsRule;
}

interface CustomElementConstructor {
  new (...params: any[]): HTMLElement;
}

CustomElementRegistry: {
  prototype: CustomElementRegistry;
  new(): CustomElementRegistry;
}

customElements: CustomElementRegistry

CustomEvent: {
  prototype: CustomEvent;
  new<T>(typeArg: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;
}

interface CustomEventInit<T = any> extends EventInit {
  detail?: T;
}

DataCue: {
  prototype: DataCue;
  new(): DataCue;
}

DataTransfer: {
  prototype: DataTransfer;
  new(): DataTransfer;
}

DataTransferItem: {
  prototype: DataTransferItem;
  new(): DataTransferItem;
}

DataTransferItemList: {
  prototype: DataTransferItemList;
  new(): DataTransferItemList;
}

interface DecodeErrorCallback {
  (error: DOMException): void;
}

interface DecodeSuccessCallback {
  (decodedData: AudioBuffer): void;
}

defaultStatus: string

DeferredPermissionRequest: {
  prototype: DeferredPermissionRequest;
  new(): DeferredPermissionRequest;
}

DelayNode: {
  prototype: DelayNode;
  new(context: BaseAudioContext, options?: DelayOptions): DelayNode;
}

interface DelayOptions extends AudioNodeOptions {
  delayTime?: number;
  maxDelayTime?: number;
}

declare function departFocus(navigationReason: NavigationReason, origin: FocusNavigationOrigin): void;

DeviceAcceleration: {
  prototype: DeviceAcceleration;
  new(): DeviceAcceleration;
}

DeviceLightEvent: {
  prototype: DeviceLightEvent;
  new(typeArg: string, eventInitDict?: DeviceLightEventInit): DeviceLightEvent;
}

interface DeviceLightEventInit extends EventInit {
  value?: number;
}

DeviceMotionEvent: {
  prototype: DeviceMotionEvent;
  new(type: string, eventInitDict?: DeviceMotionEventInit): DeviceMotionEvent;
  requestPermission(): Promise<PermissionState>;
}

interface DeviceMotionEventAcceleration {
  readonly x: number | null;
  readonly y: number | null;
  readonly z: number | null;
}

interface DeviceMotionEventAccelerationInit {
  x?: number | null;
  y?: number | null;
  z?: number | null;
}

interface DeviceMotionEventInit extends EventInit {
  acceleration?: DeviceMotionEventAccelerationInit;
  accelerationIncludingGravity?: DeviceMotionEventAccelerationInit;
  interval?: number;
  rotationRate?: DeviceMotionEventRotationRateInit;
}

interface DeviceMotionEventRotationRate {
  readonly alpha: number | null;
  readonly beta: number | null;
  readonly gamma: number | null;
}

interface DeviceMotionEventRotationRateInit {
  alpha?: number | null;
  beta?: number | null;
  gamma?: number | null;
}

DeviceOrientationEvent: {
  prototype: DeviceOrientationEvent;
  new(type: string, eventInitDict?: DeviceOrientationEventInit): DeviceOrientationEvent;
  requestPermission(): Promise<PermissionState>;
}

interface DeviceOrientationEventInit extends EventInit {
  absolute?: boolean;
  alpha?: number | null;
  beta?: number | null;
  gamma?: number | null;
}

interface DevicePermissionDescriptor extends PermissionDescriptor {
  deviceId?: string;
  name: "camera" | "microphone" | "speaker";
}

devicePixelRatio: number

DeviceRotationRate: {
  prototype: DeviceRotationRate;
  new(): DeviceRotationRate;
}

interface DhImportKeyParams extends Algorithm {
  generator: Uint8Array;
  prime: Uint8Array;
}

interface DhKeyAlgorithm extends KeyAlgorithm {
  generator: Uint8Array;
  prime: Uint8Array;
}

interface DhKeyDeriveParams extends Algorithm {
  public: CryptoKey;
}

interface DhKeyGenParams extends Algorithm {
  generator: Uint8Array;
  prime: Uint8Array;
}

type DirectionSetting = "" | "lr" | "rl";

/**
* Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
*/
declare function dispatchEvent(event: Event): boolean;

type DisplayCaptureSurfaceType = "application" | "browser" | "monitor" | "window";

type DistanceModelType = "exponential" | "inverse" | "linear";

document: Document

Document: {
  prototype: Document;
  new(): Document;
}

interface DocumentAndElementEventHandlers {
  oncopy: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
  oncut: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
  onpaste: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
  addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
  removeEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface DocumentAndElementEventHandlersEventMap {
  "copy": ClipboardEvent;
  "cut": ClipboardEvent;
  "paste": ClipboardEvent;
}

interface DocumentEvent {
  createEvent(eventInterface: "AnimationEvent"): AnimationEvent;
  createEvent(eventInterface: "AnimationPlaybackEvent"): AnimationPlaybackEvent;
  createEvent(eventInterface: "AudioProcessingEvent"): AudioProcessingEvent;
  createEvent(eventInterface: "BeforeUnloadEvent"): BeforeUnloadEvent;
  createEvent(eventInterface: "ClipboardEvent"): ClipboardEvent;
  createEvent(eventInterface: "CloseEvent"): CloseEvent;
  createEvent(eventInterface: "CompositionEvent"): CompositionEvent;
  createEvent(eventInterface: "CustomEvent"): CustomEvent;
  createEvent(eventInterface: "DeviceLightEvent"): DeviceLightEvent;
  createEvent(eventInterface: "DeviceMotionEvent"): DeviceMotionEvent;
  createEvent(eventInterface: "DeviceOrientationEvent"): DeviceOrientationEvent;
  createEvent(eventInterface: "DragEvent"): DragEvent;
  createEvent(eventInterface: "ErrorEvent"): ErrorEvent;
  createEvent(eventInterface: "Event"): Event;
  createEvent(eventInterface: "Events"): Event;
  createEvent(eventInterface: "FocusEvent"): FocusEvent;
  createEvent(eventInterface: "FocusNavigationEvent"): FocusNavigationEvent;
  createEvent(eventInterface: "GamepadEvent"): GamepadEvent;
  createEvent(eventInterface: "HashChangeEvent"): HashChangeEvent;
  createEvent(eventInterface: "IDBVersionChangeEvent"): IDBVersionChangeEvent;
  createEvent(eventInterface: "InputEvent"): InputEvent;
  createEvent(eventInterface: "KeyboardEvent"): KeyboardEvent;
  createEvent(eventInterface: "ListeningStateChangedEvent"): ListeningStateChangedEvent;
  createEvent(eventInterface: "MSGestureEvent"): MSGestureEvent;
  createEvent(eventInterface: "MSMediaKeyMessageEvent"): MSMediaKeyMessageEvent;
  createEvent(eventInterface: "MSMediaKeyNeededEvent"): MSMediaKeyNeededEvent;
  createEvent(eventInterface: "MSPointerEvent"): MSPointerEvent;
  createEvent(eventInterface: "MediaEncryptedEvent"): MediaEncryptedEvent;
  createEvent(eventInterface: "MediaKeyMessageEvent"): MediaKeyMessageEvent;
  createEvent(eventInterface: "MediaQueryListEvent"): MediaQueryListEvent;
  createEvent(eventInterface: "MediaStreamErrorEvent"): MediaStreamErrorEvent;
  createEvent(eventInterface: "MediaStreamEvent"): MediaStreamEvent;
  createEvent(eventInterface: "MediaStreamTrackEvent"): MediaStreamTrackEvent;
  createEvent(eventInterface: "MessageEvent"): MessageEvent;
  createEvent(eventInterface: "MouseEvent"): MouseEvent;
  createEvent(eventInterface: "MouseEvents"): MouseEvent;
  createEvent(eventInterface: "MutationEvent"): MutationEvent;
  createEvent(eventInterface: "MutationEvents"): MutationEvent;
  createEvent(eventInterface: "OfflineAudioCompletionEvent"): OfflineAudioCompletionEvent;
  createEvent(eventInterface: "OverflowEvent"): OverflowEvent;
  createEvent(eventInterface: "PageTransitionEvent"): PageTransitionEvent;
  createEvent(eventInterface: "PaymentRequestUpdateEvent"): PaymentRequestUpdateEvent;
  createEvent(eventInterface: "PermissionRequestedEvent"): PermissionRequestedEvent;
  createEvent(eventInterface: "PointerEvent"): PointerEvent;
  createEvent(eventInterface: "PopStateEvent"): PopStateEvent;
  createEvent(eventInterface: "ProgressEvent"): ProgressEvent;
  createEvent(eventInterface: "PromiseRejectionEvent"): PromiseRejectionEvent;
  createEvent(eventInterface: "RTCDTMFToneChangeEvent"): RTCDTMFToneChangeEvent;
  createEvent(eventInterface: "RTCDataChannelEvent"): RTCDataChannelEvent;
  createEvent(eventInterface: "RTCDtlsTransportStateChangedEvent"): RTCDtlsTransportStateChangedEvent;
  createEvent(eventInterface: "RTCErrorEvent"): RTCErrorEvent;
  createEvent(eventInterface: "RTCIceCandidatePairChangedEvent"): RTCIceCandidatePairChangedEvent;
  createEvent(eventInterface: "RTCIceGathererEvent"): RTCIceGathererEvent;
  createEvent(eventInterface: "RTCIceTransportStateChangedEvent"): RTCIceTransportStateChangedEvent;
  createEvent(eventInterface: "RTCPeerConnectionIceErrorEvent"): RTCPeerConnectionIceErrorEvent;
  createEvent(eventInterface: "RTCPeerConnectionIceEvent"): RTCPeerConnectionIceEvent;
  createEvent(eventInterface: "RTCSsrcConflictEvent"): RTCSsrcConflictEvent;
  createEvent(eventInterface: "RTCStatsEvent"): RTCStatsEvent;
  createEvent(eventInterface: "RTCTrackEvent"): RTCTrackEvent;
  createEvent(eventInterface: "SVGZoomEvent"): SVGZoomEvent;
  createEvent(eventInterface: "SVGZoomEvents"): SVGZoomEvent;
  createEvent(eventInterface: "SecurityPolicyViolationEvent"): SecurityPolicyViolationEvent;
  createEvent(eventInterface: "ServiceWorkerMessageEvent"): ServiceWorkerMessageEvent;
  createEvent(eventInterface: "SpeechRecognitionEvent"): SpeechRecognitionEvent;
  createEvent(eventInterface: "SpeechSynthesisErrorEvent"): SpeechSynthesisErrorEvent;
  createEvent(eventInterface: "SpeechSynthesisEvent"): SpeechSynthesisEvent;
  createEvent(eventInterface: "StorageEvent"): StorageEvent;
  createEvent(eventInterface: "TextEvent"): TextEvent;
  createEvent(eventInterface: "TouchEvent"): TouchEvent;
  createEvent(eventInterface: "TrackEvent"): TrackEvent;
  createEvent(eventInterface: "TransitionEvent"): TransitionEvent;
  createEvent(eventInterface: "UIEvent"): UIEvent;
  createEvent(eventInterface: "UIEvents"): UIEvent;
  createEvent(eventInterface: "VRDisplayEvent"): VRDisplayEvent;
  createEvent(eventInterface: "VRDisplayEvent "): VRDisplayEvent ;
  createEvent(eventInterface: "WebGLContextEvent"): WebGLContextEvent;
  createEvent(eventInterface: "WheelEvent"): WheelEvent;
  createEvent(eventInterface: string): Event;
}

interface DocumentEventMap extends GlobalEventHandlersEventMap, DocumentAndElementEventHandlersEventMap {
  "fullscreenchange": Event;
  "fullscreenerror": Event;
  "pointerlockchange": Event;
  "pointerlockerror": Event;
  "readystatechange": Event;
  "visibilitychange": Event;
}

DocumentFragment: {
  prototype: DocumentFragment;
  new(): DocumentFragment;
}

interface DocumentOrShadowRoot {
  readonly activeElement: Element | null;
  /**
   * Returns document's fullscreen element.
   */
  readonly fullscreenElement: Element | null;
  readonly pointerLockElement: Element | null;
  /**
   * Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.
   */
  readonly styleSheets: StyleSheetList;
  caretPositionFromPoint(x: number, y: number): CaretPosition | null;
  /** @deprecated */
  caretRangeFromPoint(x: number, y: number): Range;
  elementFromPoint(x: number, y: number): Element | null;
  elementsFromPoint(x: number, y: number): Element[];
  getSelection(): Selection | null;
}

type DocumentReadyState = "complete" | "interactive" | "loading";

DocumentTimeline: {
  prototype: DocumentTimeline;
  new(options?: DocumentTimelineOptions): DocumentTimeline;
}

interface DocumentTimelineOptions {
  originTime?: number;
}

DocumentType: {
  prototype: DocumentType;
  new(): DocumentType;
}

DOMError: {
  prototype: DOMError;
  new(): DOMError;
}

DOMException: {
  prototype: DOMException;
  new(message?: string, name?: string): DOMException;
  readonly ABORT_ERR: number;
  readonly DATA_CLONE_ERR: number;
  readonly DOMSTRING_SIZE_ERR: number;
  readonly HIERARCHY_REQUEST_ERR: number;
  readonly INDEX_SIZE_ERR: number;
  readonly INUSE_ATTRIBUTE_ERR: number;
  readonly INVALID_ACCESS_ERR: number;
  readonly INVALID_CHARACTER_ERR: number;
  readonly INVALID_MODIFICATION_ERR: number;
  readonly INVALID_NODE_TYPE_ERR: number;
  readonly INVALID_STATE_ERR: number;
  readonly NAMESPACE_ERR: number;
  readonly NETWORK_ERR: number;
  readonly NOT_FOUND_ERR: number;
  readonly NOT_SUPPORTED_ERR: number;
  readonly NO_DATA_ALLOWED_ERR: number;
  readonly NO_MODIFICATION_ALLOWED_ERR: number;
  readonly QUOTA_EXCEEDED_ERR: number;
  readonly SECURITY_ERR: number;
  readonly SYNTAX_ERR: number;
  readonly TIMEOUT_ERR: number;
  readonly TYPE_MISMATCH_ERR: number;
  readonly URL_MISMATCH_ERR: number;
  readonly VALIDATION_ERR: number;
  readonly WRONG_DOCUMENT_ERR: number;
}

type DOMHighResTimeStamp = number;

DOMImplementation: {
  prototype: DOMImplementation;
  new(): DOMImplementation;
}

interface DOML2DeprecatedColorProperty {
  color: string;
}

DOMMatrix: {
  prototype: DOMMatrix;
  new(init?: string | number[]): DOMMatrix;
  fromFloat32Array(array32: Float32Array): DOMMatrix;
  fromFloat64Array(array64: Float64Array): DOMMatrix;
  fromMatrix(other?: DOMMatrixInit): DOMMatrix;
}

interface DOMMatrix2DInit {
  a?: number;
  b?: number;
  c?: number;
  d?: number;
  e?: number;
  f?: number;
  m11?: number;
  m12?: number;
  m21?: number;
  m22?: number;
  m41?: number;
  m42?: number;
}

interface DOMMatrixInit extends DOMMatrix2DInit {
  is2D?: boolean;
  m13?: number;
  m14?: number;
  m23?: number;
  m24?: number;
  m31?: number;
  m32?: number;
  m33?: number;
  m34?: number;
  m43?: number;
  m44?: number;
}

DOMMatrixReadOnly: {
  prototype: DOMMatrixReadOnly;
  new(init?: string | number[]): DOMMatrixReadOnly;
  fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly;
  fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly;
  fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly;
  toString(): string;
}

DOMParser: {
  prototype: DOMParser;
  new(): DOMParser;
}

type DOMParserSupportedType = "application/xhtml+xml" | "application/xml" | "image/svg+xml" | "text/html" | "text/xml";

DOMPoint: {
  prototype: DOMPoint;
  new(x?: number, y?: number, z?: number, w?: number): DOMPoint;
  fromPoint(other?: DOMPointInit): DOMPoint;
}

interface DOMPointInit {
  w?: number;
  x?: number;
  y?: number;
  z?: number;
}

DOMPointReadOnly: {
  prototype: DOMPointReadOnly;
  new(x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly;
  fromPoint(other?: DOMPointInit): DOMPointReadOnly;
}

DOMQuad: {
  prototype: DOMQuad;
  new(p1?: DOMPointInit, p2?: DOMPointInit, p3?: DOMPointInit, p4?: DOMPointInit): DOMQuad;
  fromQuad(other?: DOMQuadInit): DOMQuad;
  fromRect(other?: DOMRectInit): DOMQuad;
}

interface DOMQuadInit {
  p1?: DOMPointInit;
  p2?: DOMPointInit;
  p3?: DOMPointInit;
  p4?: DOMPointInit;
}

DOMRect: {
  prototype: DOMRect;
  new(x?: number, y?: number, width?: number, height?: number): DOMRect;
  fromRect(other?: DOMRectInit): DOMRect;
}

interface DOMRectInit {
  height?: number;
  width?: number;
  x?: number;
  y?: number;
}

DOMRectList: {
  prototype: DOMRectList;
  new(): DOMRectList;
}

DOMRectReadOnly: {
  prototype: DOMRectReadOnly;
  new(x?: number, y?: number, width?: number, height?: number): DOMRectReadOnly;
  fromRect(other?: DOMRectInit): DOMRectReadOnly;
}

DOMSettableTokenList: {
  prototype: DOMSettableTokenList;
  new(): DOMSettableTokenList;
}

DOMStringList: {
  prototype: DOMStringList;
  new(): DOMStringList;
}

DOMStringMap: {
  prototype: DOMStringMap;
  new(): DOMStringMap;
}

type DOMTimeStamp = number;

DOMTokenList: {
  prototype: DOMTokenList;
  new(): DOMTokenList;
}

doNotTrack: string

interface DoubleRange {
  max?: number;
  min?: number;
}

DragEvent: {
  prototype: DragEvent;
  new(type: string, eventInitDict?: DragEventInit): DragEvent;
}

interface DragEventInit extends MouseEventInit {
  dataTransfer?: DataTransfer | null;
}

DynamicsCompressorNode: {
  prototype: DynamicsCompressorNode;
  new(context: BaseAudioContext, options?: DynamicsCompressorOptions): DynamicsCompressorNode;
}

interface DynamicsCompressorOptions extends AudioNodeOptions {
  attack?: number;
  knee?: number;
  ratio?: number;
  release?: number;
  threshold?: number;
}

interface EcdhKeyDeriveParams extends Algorithm {
  public: CryptoKey;
}

interface EcdsaParams extends Algorithm {
  hash: HashAlgorithmIdentifier;
}

interface EcKeyAlgorithm extends KeyAlgorithm {
  namedCurve: NamedCurve;
}

interface EcKeyGenParams extends Algorithm {
  namedCurve: NamedCurve;
}

interface EcKeyImportParams extends Algorithm {
  namedCurve: NamedCurve;
}

interface EffectTiming {
  delay?: number;
  direction?: PlaybackDirection;
  duration?: number | string;
  easing?: string;
  endDelay?: number;
  fill?: FillMode;
  iterationStart?: number;
  iterations?: number;
}

Element: {
  prototype: Element;
  new(): Element;
}

interface ElementContentEditable {
  contentEditable: string;
  enterKeyHint: string;
  inputMode: string;
  readonly isContentEditable: boolean;
}

interface ElementCreationOptions {
  is?: string;
}

interface ElementCSSInlineStyle {
  readonly style: CSSStyleDeclaration;
}

interface ElementDefinitionOptions {
  extends?: string;
}

interface ElementEventMap {
  "fullscreenchange": Event;
  "fullscreenerror": Event;
}

/** @deprecated Directly use HTMLElementTagNameMap or SVGElementTagNameMap as appropriate, instead. */
type ElementTagNameMap = HTMLElementTagNameMap & Pick<SVGElementTagNameMap, Exclude<keyof SVGElementTagNameMap, keyof HTMLElementTagNameMap>>;

type EndingType = "native" | "transparent";

type EndOfStreamError = "decode" | "network";

ErrorEvent: {
  prototype: ErrorEvent;
  new(type: string, eventInitDict?: ErrorEventInit): ErrorEvent;
}

interface ErrorEventInit extends EventInit {
  colno?: number;
  error?: any;
  filename?: string;
  lineno?: number;
  message?: string;
}

function escape(ident: string): string;

event: Event | undefined

Event: {
  prototype: Event;
  new(type: string, eventInitDict?: EventInit): Event;
  readonly AT_TARGET: number;
  readonly BUBBLING_PHASE: number;
  readonly CAPTURING_PHASE: number;
  readonly NONE: number;
}

interface EventHandlerNonNull {
  (event: Event): any;
}

interface EventInit {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
}

interface EventListener {
  (evt: Event): void;
}

interface EventListenerObject {
  handleEvent(evt: Event): void;
}

interface EventListenerOptions {
  capture?: boolean;
}

declare type EventListenerOrEventListenerObject = EventListener | EventListenerObject;

interface EventModifierInit extends UIEventInit {
  altKey?: boolean;
  ctrlKey?: boolean;
  metaKey?: boolean;
  modifierAltGraph?: boolean;
  modifierCapsLock?: boolean;
  modifierFn?: boolean;
  modifierFnLock?: boolean;
  modifierHyper?: boolean;
  modifierNumLock?: boolean;
  modifierScrollLock?: boolean;
  modifierSuper?: boolean;
  modifierSymbol?: boolean;
  modifierSymbolLock?: boolean;
  shiftKey?: boolean;
}

EventSource: {
  prototype: EventSource;
  new(url: string, eventSourceInitDict?: EventSourceInit): EventSource;
  readonly CLOSED: number;
  readonly CONNECTING: number;
  readonly OPEN: number;
}

interface EventSourceEventMap {
  "error": Event;
  "message": MessageEvent;
  "open": Event;
}

interface EventSourceInit {
  withCredentials?: boolean;
}

EventTarget: {
  prototype: EventTarget;
  new(): EventTarget;
}

interface ExceptionInformation {
  domain?: string | null;
}

type Exports = Record<string, ExportValue>;

type ExportValue = Function | Global | Memory | Table;

interface EXT_blend_minmax {
  readonly MAX_EXT: GLenum;
  readonly MIN_EXT: GLenum;
}

/** The EXT_frag_depth extension is part of the WebGL API and enables to set a depth value of a fragment from within the fragment shader. */
interface EXT_frag_depth {
}

interface EXT_shader_texture_lod {
}

interface EXT_sRGB {
  readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: GLenum;
  readonly SRGB8_ALPHA8_EXT: GLenum;
  readonly SRGB_ALPHA_EXT: GLenum;
  readonly SRGB_EXT: GLenum;
}

/** The EXT_texture_filter_anisotropic extension is part of the WebGL API and exposes two constants for anisotropic filtering (AF). */
interface EXT_texture_filter_anisotropic {
  readonly MAX_TEXTURE_MAX_ANISOTROPY_EXT: GLenum;
  readonly TEXTURE_MAX_ANISOTROPY_EXT: GLenum;
}

ExtensionScriptApis: {
  prototype: ExtensionScriptApis;
  new(): ExtensionScriptApis;
}

external: External

External: {
  prototype: External;
  new(): External;
}

declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;

File: {
  prototype: File;
  new(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
}

FileList: {
  prototype: FileList;
  new(): FileList;
}

interface FilePropertyBag extends BlobPropertyBag {
  lastModified?: number;
}

FileReader: {
  prototype: FileReader;
  new(): FileReader;
  readonly DONE: number;
  readonly EMPTY: number;
  readonly LOADING: number;
}

interface FileReaderEventMap {
  "abort": ProgressEvent<FileReader>;
  "error": ProgressEvent<FileReader>;
  "load": ProgressEvent<FileReader>;
  "loadend": ProgressEvent<FileReader>;
  "loadstart": ProgressEvent<FileReader>;
  "progress": ProgressEvent<FileReader>;
}

type FillMode = "auto" | "backwards" | "both" | "forwards" | "none";

type Float32List = Float32Array | GLfloat[];

declare function focus(): void;

FocusEvent: {
  prototype: FocusEvent;
  new(type: string, eventInitDict?: FocusEventInit): FocusEvent;
}

interface FocusEventInit extends UIEventInit {
  relatedTarget?: EventTarget | null;
}

FocusNavigationEvent: {
  prototype: FocusNavigationEvent;
  new(type: string, eventInitDict?: FocusNavigationEventInit): FocusNavigationEvent;
}

interface FocusNavigationEventInit extends EventInit {
  navigationReason?: string | null;
  originHeight?: number;
  originLeft?: number;
  originTop?: number;
  originWidth?: number;
}

interface FocusNavigationOrigin {
  originHeight?: number;
  originLeft?: number;
  originTop?: number;
  originWidth?: number;
}

interface FocusOptions {
  preventScroll?: boolean;
}

interface ForEachCallback {
  (keyId: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null, status: MediaKeyStatus): void;
}

FormData: {
  prototype: FormData;
  new(form?: HTMLFormElement): FormData;
}

type FormDataEntryValue = File | string;

frameElement: Element

interface FrameRequestCallback {
  (time: number): void;
}

frames: IWindow

type FullscreenNavigationUI = "auto" | "hide" | "show";

interface FullscreenOptions {
  navigationUI?: FullscreenNavigationUI;
}

interface FunctionStringCallback {
  (data: string): void;
}

GainNode: {
  prototype: GainNode;
  new(context: BaseAudioContext, options?: GainOptions): GainNode;
}

interface GainOptions extends AudioNodeOptions {
  gain?: number;
}

Gamepad: {
  prototype: Gamepad;
  new(): Gamepad;
}

GamepadButton: {
  prototype: GamepadButton;
  new(): GamepadButton;
}

GamepadEvent: {
  prototype: GamepadEvent;
  new(type: string, eventInitDict: GamepadEventInit): GamepadEvent;
}

interface GamepadEventInit extends EventInit {
  gamepad: Gamepad;
}

type GamepadHand = "" | "left" | "right";

GamepadHapticActuator: {
  prototype: GamepadHapticActuator;
  new(): GamepadHapticActuator;
}

type GamepadHapticActuatorType = "vibration";

type GamepadMappingType = "" | "standard";

GamepadPose: {
  prototype: GamepadPose;
  new(): GamepadPose;
}

interface GenericTransformStream {
  /**
   * Returns a readable stream whose chunks are strings resulting from running encoding's decoder on the chunks written to writable.
   */
  readonly readable: ReadableStream;
  /**
   * Returns a writable stream which accepts [AllowShared] BufferSource chunks and runs them through encoding's decoder before making them available to readable.
   *
   * Typically this will be used via the pipeThrough() method on a ReadableStream source.
   *
   * ```
   * var decoder = new TextDecoderStream(encoding);
   * byteReadable
   *   .pipeThrough(decoder)
   *   .pipeTo(textWritable);
   * ```
   *
   * If the error mode is "fatal" and encoding's decoder returns error, both readable and writable will be errored with a TypeError.
   */
  readonly writable: WritableStream;
}

/** An object able to programmatically obtain the position of the device. It gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location. */
interface Geolocation {
  clearWatch(watchId: number): void;
  getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): void;
  watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): number;
}

declare function getComputedStyle(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration;

declare function getMatchedCSSRules(elt: Element, pseudoElt?: string | null): CSSRuleList;

interface GetNotificationOptions {
  tag?: string;
}

interface GetRootNodeOptions {
  composed?: boolean;
}

declare function getSelection(): Selection | null;

type GLbitfield = number;

type GLboolean = boolean;

type GLclampf = number;

type GLenum = number;

type GLfloat = number;

type GLint = number;

type GLint64 = number;

type GLintptr = number;

Global: {
      prototype: Global;
      new(descriptor: GlobalDescriptor, v?: any): Global;
  }

interface GlobalDescriptor {
      mutable?: boolean;
      value: ValueType;
}

interface GlobalEventHandlers {
  /**
   * Fires when the user aborts the download.
   * @param ev The event.
   */
  onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
  onanimationcancel: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
  onanimationend: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
  onanimationiteration: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
  onanimationstart: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
  onauxclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires when the object loses the input focus.
   * @param ev The focus event.
   */
  onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
  oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when playback is possible, but would require further buffering.
   * @param ev The event.
   */
  oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the contents of the object or selection have changed.
   * @param ev The event.
   */
  onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user clicks the left mouse button on the object
   * @param ev The mouse event.
   */
  onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user clicks the right mouse button in the client area, opening the context menu.
   * @param ev The mouse event.
   */
  oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user double-clicks the object.
   * @param ev The mouse event.
   */
  ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires on the source object continuously during a drag operation.
   * @param ev The event.
   */
  ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the source object when the user releases the mouse at the close of a drag operation.
   * @param ev The event.
   */
  ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the target element when the user drags the object to a valid drop target.
   * @param ev The drag event.
   */
  ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragexit: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
   * @param ev The drag event.
   */
  ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the target element continuously while the user drags the object over a valid drop target.
   * @param ev The event.
   */
  ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the source object when the user starts to drag a text selection or selected object.
   * @param ev The event.
   */
  ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Occurs when the duration attribute is updated.
   * @param ev The event.
   */
  ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the media element is reset to its initial state.
   * @param ev The event.
   */
  onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the end of playback is reached.
   * @param ev The event
   */
  onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when an error occurs during object loading.
   * @param ev The event.
   */
  onerror: OnErrorEventHandler;
  /**
   * Fires when the object receives focus.
   * @param ev The event.
   */
  onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
  ongotpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user presses a key.
   * @param ev The keyboard event
   */
  onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  /**
   * Fires when the user presses an alphanumeric key.
   * @param ev The event.
   */
  onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  /**
   * Fires when the user releases a key.
   * @param ev The keyboard event
   */
  onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  /**
   * Fires immediately after the browser loads the object.
   * @param ev The event.
   */
  onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when media data is loaded at the current playback position.
   * @param ev The event.
   */
  onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the duration and dimensions of the media have been determined.
   * @param ev The event.
   */
  onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when Internet Explorer begins looking for media data.
   * @param ev The event.
   */
  onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onlostpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  /**
   * Fires when the user clicks the object with either mouse button.
   * @param ev The mouse event.
   */
  onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse over the object.
   * @param ev The mouse event.
   */
  onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse pointer outside the boundaries of the object.
   * @param ev The mouse event.
   */
  onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse pointer into the object.
   * @param ev The mouse event.
   */
  onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user releases a mouse button while the mouse is over the object.
   * @param ev The mouse event.
   */
  onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Occurs when playback is paused.
   * @param ev The event.
   */
  onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the play method is requested.
   * @param ev The event.
   */
  onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the audio or video has started playing.
   * @param ev The event.
   */
  onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onpointercancel: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  /**
   * Occurs to indicate progress while downloading media data.
   * @param ev The event.
   */
  onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
  /**
   * Occurs when the playback rate is increased or decreased.
   * @param ev The event.
   */
  onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user resets a form.
   * @param ev The event.
   */
  onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
  /**
   * Fires when the user repositions the scroll box in the scroll bar on the object.
   * @param ev The event.
   */
  onscroll: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onsecuritypolicyviolation: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null;
  /**
   * Occurs when the seek operation ends.
   * @param ev The event.
   */
  onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the current playback position is moved.
   * @param ev The event.
   */
  onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the current selection changes.
   * @param ev The event.
   */
  onselect: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onselectionchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onselectstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the download has stopped.
   * @param ev The event.
   */
  onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onsubmit: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs if the load operation has been intentionally halted.
   * @param ev The event.
   */
  onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs to indicate the current playback position.
   * @param ev The event.
   */
  ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  ontouchcancel?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
  ontouchend?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
  ontouchmove?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
  ontouchstart?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
  ontransitioncancel: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
  ontransitionend: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
  ontransitionrun: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
  ontransitionstart: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
  /**
   * Occurs when the volume is changed, or playback is muted or unmuted.
   * @param ev The event.
   */
  onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when playback stops because the next frame of a video resource is not available.
   * @param ev The event.
   */
  onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
  addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
  removeEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface GlobalEventHandlersEventMap {
  "abort": UIEvent;
  "animationcancel": AnimationEvent;
  "animationend": AnimationEvent;
  "animationiteration": AnimationEvent;
  "animationstart": AnimationEvent;
  "auxclick": MouseEvent;
  "blur": FocusEvent;
  "cancel": Event;
  "canplay": Event;
  "canplaythrough": Event;
  "change": Event;
  "click": MouseEvent;
  "close": Event;
  "contextmenu": MouseEvent;
  "cuechange": Event;
  "dblclick": MouseEvent;
  "drag": DragEvent;
  "dragend": DragEvent;
  "dragenter": DragEvent;
  "dragexit": Event;
  "dragleave": DragEvent;
  "dragover": DragEvent;
  "dragstart": DragEvent;
  "drop": DragEvent;
  "durationchange": Event;
  "emptied": Event;
  "ended": Event;
  "error": ErrorEvent;
  "focus": FocusEvent;
  "focusin": FocusEvent;
  "focusout": FocusEvent;
  "gotpointercapture": PointerEvent;
  "input": Event;
  "invalid": Event;
  "keydown": KeyboardEvent;
  "keypress": KeyboardEvent;
  "keyup": KeyboardEvent;
  "load": Event;
  "loadeddata": Event;
  "loadedmetadata": Event;
  "loadstart": Event;
  "lostpointercapture": PointerEvent;
  "mousedown": MouseEvent;
  "mouseenter": MouseEvent;
  "mouseleave": MouseEvent;
  "mousemove": MouseEvent;
  "mouseout": MouseEvent;
  "mouseover": MouseEvent;
  "mouseup": MouseEvent;
  "pause": Event;
  "play": Event;
  "playing": Event;
  "pointercancel": PointerEvent;
  "pointerdown": PointerEvent;
  "pointerenter": PointerEvent;
  "pointerleave": PointerEvent;
  "pointermove": PointerEvent;
  "pointerout": PointerEvent;
  "pointerover": PointerEvent;
  "pointerup": PointerEvent;
  "progress": ProgressEvent;
  "ratechange": Event;
  "reset": Event;
  "resize": UIEvent;
  "scroll": Event;
  "securitypolicyviolation": SecurityPolicyViolationEvent;
  "seeked": Event;
  "seeking": Event;
  "select": Event;
  "selectionchange": Event;
  "selectstart": Event;
  "stalled": Event;
  "submit": Event;
  "suspend": Event;
  "timeupdate": Event;
  "toggle": Event;
  "touchcancel": TouchEvent;
  "touchend": TouchEvent;
  "touchmove": TouchEvent;
  "touchstart": TouchEvent;
  "transitioncancel": TransitionEvent;
  "transitionend": TransitionEvent;
  "transitionrun": TransitionEvent;
  "transitionstart": TransitionEvent;
  "volumechange": Event;
  "waiting": Event;
  "wheel": WheelEvent;
}

type GLsizei = number;

type GLsizeiptr = number;

type GLuint = number;

type GLuint64 = number;

type HashAlgorithmIdentifier = AlgorithmIdentifier;

HashChangeEvent: {
  prototype: HashChangeEvent;
  new(type: string, eventInitDict?: HashChangeEventInit): HashChangeEvent;
}

interface HashChangeEventInit extends EventInit {
  newURL?: string;
  oldURL?: string;
}

Headers: {
  prototype: Headers;
  new(init?: HeadersInit): Headers;
}

type HeadersInit = Headers | string[][] | Record<string, string>;

history: History

History: {
  prototype: History;
  new(): History;
}

interface HkdfCtrParams extends Algorithm {
  context: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
  hash: string | Algorithm;
  label: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

interface HkdfParams extends Algorithm {
  hash: HashAlgorithmIdentifier;
  info: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
  salt: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

interface HmacImportParams extends Algorithm {
  hash: HashAlgorithmIdentifier;
  length?: number;
}

interface HmacKeyAlgorithm extends KeyAlgorithm {
  hash: KeyAlgorithm;
  length: number;
}

interface HmacKeyGenParams extends Algorithm {
  hash: HashAlgorithmIdentifier;
  length?: number;
}

HTMLAllCollection: {
  prototype: HTMLAllCollection;
  new(): HTMLAllCollection;
}

HTMLAnchorElement: {
  prototype: HTMLAnchorElement;
  new(): HTMLAnchorElement;
}

HTMLAppletElement: {
  prototype: HTMLAppletElement;
  new(): HTMLAppletElement;
}

HTMLAreaElement: {
  prototype: HTMLAreaElement;
  new(): HTMLAreaElement;
}

HTMLAudioElement: {
  prototype: HTMLAudioElement;
  new(): HTMLAudioElement;
}

HTMLBaseElement: {
  prototype: HTMLBaseElement;
  new(): HTMLBaseElement;
}

HTMLBaseFontElement: {
  prototype: HTMLBaseFontElement;
  new(): HTMLBaseFontElement;
}

HTMLBodyElement: {
  prototype: HTMLBodyElement;
  new(): HTMLBodyElement;
}

interface HTMLBodyElementEventMap extends HTMLElementEventMap, WindowEventHandlersEventMap {
  "orientationchange": Event;
}

HTMLBRElement: {
  prototype: HTMLBRElement;
  new(): HTMLBRElement;
}

HTMLButtonElement: {
  prototype: HTMLButtonElement;
  new(): HTMLButtonElement;
}

HTMLCanvasElement: {
  prototype: HTMLCanvasElement;
  new(): HTMLCanvasElement;
}

HTMLCollection: {
  prototype: HTMLCollection;
  new(): HTMLCollection;
}

/** A generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list. */
interface HTMLCollectionBase {
  /**
   * Sets or retrieves the number of objects in a collection.
   */
  readonly length: number;
  /**
   * Retrieves an object from various collections.
   */
  item(index: number): Element | null;
  [index: number]: Element;
}

interface HTMLCollectionOf<T extends Element> extends HTMLCollectionBase {
  item(index: number): T | null;
  namedItem(name: string): T | null;
  [index: number]: T;
}

HTMLDataElement: {
  prototype: HTMLDataElement;
  new(): HTMLDataElement;
}

HTMLDataListElement: {
  prototype: HTMLDataListElement;
  new(): HTMLDataListElement;
}

HTMLDetailsElement: {
  prototype: HTMLDetailsElement;
  new(): HTMLDetailsElement;
}

HTMLDialogElement: {
  prototype: HTMLDialogElement;
  new(): HTMLDialogElement;
}

HTMLDirectoryElement: {
  prototype: HTMLDirectoryElement;
  new(): HTMLDirectoryElement;
}

HTMLDivElement: {
  prototype: HTMLDivElement;
  new(): HTMLDivElement;
}

HTMLDListElement: {
  prototype: HTMLDListElement;
  new(): HTMLDListElement;
}

HTMLDocument: {
  prototype: HTMLDocument;
  new(): HTMLDocument;
}

HTMLElement: {
  prototype: HTMLElement;
  new(): HTMLElement;
}

interface HTMLElementDeprecatedTagNameMap {
  "listing": HTMLPreElement;
  "xmp": HTMLPreElement;
}

interface HTMLElementEventMap extends ElementEventMap, GlobalEventHandlersEventMap, DocumentAndElementEventHandlersEventMap {
}

interface HTMLElementTagNameMap {
  "a": HTMLAnchorElement;
  "abbr": HTMLElement;
  "address": HTMLElement;
  "applet": HTMLAppletElement;
  "area": HTMLAreaElement;
  "article": HTMLElement;
  "aside": HTMLElement;
  "audio": HTMLAudioElement;
  "b": HTMLElement;
  "base": HTMLBaseElement;
  "basefont": HTMLBaseFontElement;
  "bdi": HTMLElement;
  "bdo": HTMLElement;
  "blockquote": HTMLQuoteElement;
  "body": HTMLBodyElement;
  "br": HTMLBRElement;
  "button": HTMLButtonElement;
  "canvas": HTMLCanvasElement;
  "caption": HTMLTableCaptionElement;
  "cite": HTMLElement;
  "code": HTMLElement;
  "col": HTMLTableColElement;
  "colgroup": HTMLTableColElement;
  "data": HTMLDataElement;
  "datalist": HTMLDataListElement;
  "dd": HTMLElement;
  "del": HTMLModElement;
  "details": HTMLDetailsElement;
  "dfn": HTMLElement;
  "dialog": HTMLDialogElement;
  "dir": HTMLDirectoryElement;
  "div": HTMLDivElement;
  "dl": HTMLDListElement;
  "dt": HTMLElement;
  "em": HTMLElement;
  "embed": HTMLEmbedElement;
  "fieldset": HTMLFieldSetElement;
  "figcaption": HTMLElement;
  "figure": HTMLElement;
  "font": HTMLFontElement;
  "footer": HTMLElement;
  "form": HTMLFormElement;
  "frame": HTMLFrameElement;
  "frameset": HTMLFrameSetElement;
  "h1": HTMLHeadingElement;
  "h2": HTMLHeadingElement;
  "h3": HTMLHeadingElement;
  "h4": HTMLHeadingElement;
  "h5": HTMLHeadingElement;
  "h6": HTMLHeadingElement;
  "head": HTMLHeadElement;
  "header": HTMLElement;
  "hgroup": HTMLElement;
  "hr": HTMLHRElement;
  "html": HTMLHtmlElement;
  "i": HTMLElement;
  "iframe": HTMLIFrameElement;
  "img": HTMLImageElement;
  "input": HTMLInputElement;
  "ins": HTMLModElement;
  "kbd": HTMLElement;
  "label": HTMLLabelElement;
  "legend": HTMLLegendElement;
  "li": HTMLLIElement;
  "link": HTMLLinkElement;
  "main": HTMLElement;
  "map": HTMLMapElement;
  "mark": HTMLElement;
  "marquee": HTMLMarqueeElement;
  "menu": HTMLMenuElement;
  "meta": HTMLMetaElement;
  "meter": HTMLMeterElement;
  "nav": HTMLElement;
  "noscript": HTMLElement;
  "object": HTMLObjectElement;
  "ol": HTMLOListElement;
  "optgroup": HTMLOptGroupElement;
  "option": HTMLOptionElement;
  "output": HTMLOutputElement;
  "p": HTMLParagraphElement;
  "param": HTMLParamElement;
  "picture": HTMLPictureElement;
  "pre": HTMLPreElement;
  "progress": HTMLProgressElement;
  "q": HTMLQuoteElement;
  "rp": HTMLElement;
  "rt": HTMLElement;
  "ruby": HTMLElement;
  "s": HTMLElement;
  "samp": HTMLElement;
  "script": HTMLScriptElement;
  "section": HTMLElement;
  "select": HTMLSelectElement;
  "slot": HTMLSlotElement;
  "small": HTMLElement;
  "source": HTMLSourceElement;
  "span": HTMLSpanElement;
  "strong": HTMLElement;
  "style": HTMLStyleElement;
  "sub": HTMLElement;
  "summary": HTMLElement;
  "sup": HTMLElement;
  "table": HTMLTableElement;
  "tbody": HTMLTableSectionElement;
  "td": HTMLTableDataCellElement;
  "template": HTMLTemplateElement;
  "textarea": HTMLTextAreaElement;
  "tfoot": HTMLTableSectionElement;
  "th": HTMLTableHeaderCellElement;
  "thead": HTMLTableSectionElement;
  "time": HTMLTimeElement;
  "title": HTMLTitleElement;
  "tr": HTMLTableRowElement;
  "track": HTMLTrackElement;
  "u": HTMLElement;
  "ul": HTMLUListElement;
  "var": HTMLElement;
  "video": HTMLVideoElement;
  "wbr": HTMLElement;
}

HTMLEmbedElement: {
  prototype: HTMLEmbedElement;
  new(): HTMLEmbedElement;
}

HTMLFieldSetElement: {
  prototype: HTMLFieldSetElement;
  new(): HTMLFieldSetElement;
}

HTMLFontElement: {
  prototype: HTMLFontElement;
  new(): HTMLFontElement;
}

HTMLFormControlsCollection: {
  prototype: HTMLFormControlsCollection;
  new(): HTMLFormControlsCollection;
}

HTMLFormElement: {
  prototype: HTMLFormElement;
  new(): HTMLFormElement;
}

HTMLFrameElement: {
  prototype: HTMLFrameElement;
  new(): HTMLFrameElement;
}

HTMLFrameSetElement: {
  prototype: HTMLFrameSetElement;
  new(): HTMLFrameSetElement;
}

interface HTMLFrameSetElementEventMap extends HTMLElementEventMap, WindowEventHandlersEventMap {
}

HTMLHeadElement: {
  prototype: HTMLHeadElement;
  new(): HTMLHeadElement;
}

HTMLHeadingElement: {
  prototype: HTMLHeadingElement;
  new(): HTMLHeadingElement;
}

HTMLHRElement: {
  prototype: HTMLHRElement;
  new(): HTMLHRElement;
}

HTMLHtmlElement: {
  prototype: HTMLHtmlElement;
  new(): HTMLHtmlElement;
}

interface HTMLHyperlinkElementUtils {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  toString(): string;
  readonly origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  username: string;
}

HTMLIFrameElement: {
  prototype: HTMLIFrameElement;
  new(): HTMLIFrameElement;
}

HTMLImageElement: {
  prototype: HTMLImageElement;
  new(): HTMLImageElement;
}

HTMLInputElement: {
  prototype: HTMLInputElement;
  new(): HTMLInputElement;
}

HTMLLabelElement: {
  prototype: HTMLLabelElement;
  new(): HTMLLabelElement;
}

HTMLLegendElement: {
  prototype: HTMLLegendElement;
  new(): HTMLLegendElement;
}

HTMLLIElement: {
  prototype: HTMLLIElement;
  new(): HTMLLIElement;
}

HTMLLinkElement: {
  prototype: HTMLLinkElement;
  new(): HTMLLinkElement;
}

HTMLMapElement: {
  prototype: HTMLMapElement;
  new(): HTMLMapElement;
}

HTMLMarqueeElement: {
  prototype: HTMLMarqueeElement;
  new(): HTMLMarqueeElement;
}

interface HTMLMarqueeElementEventMap extends HTMLElementEventMap {
  "bounce": Event;
  "finish": Event;
  "start": Event;
}

HTMLMediaElement: {
  prototype: HTMLMediaElement;
  new(): HTMLMediaElement;
  readonly HAVE_CURRENT_DATA: number;
  readonly HAVE_ENOUGH_DATA: number;
  readonly HAVE_FUTURE_DATA: number;
  readonly HAVE_METADATA: number;
  readonly HAVE_NOTHING: number;
  readonly NETWORK_EMPTY: number;
  readonly NETWORK_IDLE: number;
  readonly NETWORK_LOADING: number;
  readonly NETWORK_NO_SOURCE: number;
}

interface HTMLMediaElementEventMap extends HTMLElementEventMap {
  "encrypted": MediaEncryptedEvent;
  "waitingforkey": Event;
}

HTMLMenuElement: {
  prototype: HTMLMenuElement;
  new(): HTMLMenuElement;
}

HTMLMetaElement: {
  prototype: HTMLMetaElement;
  new(): HTMLMetaElement;
}

HTMLMeterElement: {
  prototype: HTMLMeterElement;
  new(): HTMLMeterElement;
}

HTMLModElement: {
  prototype: HTMLModElement;
  new(): HTMLModElement;
}

HTMLObjectElement: {
  prototype: HTMLObjectElement;
  new(): HTMLObjectElement;
}

HTMLOListElement: {
  prototype: HTMLOListElement;
  new(): HTMLOListElement;
}

HTMLOptGroupElement: {
  prototype: HTMLOptGroupElement;
  new(): HTMLOptGroupElement;
}

HTMLOptionElement: {
  prototype: HTMLOptionElement;
  new(): HTMLOptionElement;
}

HTMLOptionsCollection: {
  prototype: HTMLOptionsCollection;
  new(): HTMLOptionsCollection;
}

interface HTMLOrSVGElement {
  autofocus: boolean;
  readonly dataset: DOMStringMap;
  nonce?: string;
  tabIndex: number;
  blur(): void;
  focus(options?: FocusOptions): void;
}

type HTMLOrSVGImageElement = HTMLImageElement | SVGImageElement;

type HTMLOrSVGScriptElement = HTMLScriptElement | SVGScriptElement;

HTMLOutputElement: {
  prototype: HTMLOutputElement;
  new(): HTMLOutputElement;
}

HTMLParagraphElement: {
  prototype: HTMLParagraphElement;
  new(): HTMLParagraphElement;
}

HTMLParamElement: {
  prototype: HTMLParamElement;
  new(): HTMLParamElement;
}

HTMLPictureElement: {
  prototype: HTMLPictureElement;
  new(): HTMLPictureElement;
}

HTMLPreElement: {
  prototype: HTMLPreElement;
  new(): HTMLPreElement;
}

HTMLProgressElement: {
  prototype: HTMLProgressElement;
  new(): HTMLProgressElement;
}

HTMLQuoteElement: {
  prototype: HTMLQuoteElement;
  new(): HTMLQuoteElement;
}

HTMLScriptElement: {
  prototype: HTMLScriptElement;
  new(): HTMLScriptElement;
}

HTMLSelectElement: {
  prototype: HTMLSelectElement;
  new(): HTMLSelectElement;
}

HTMLSlotElement: {
  prototype: HTMLSlotElement;
  new(): HTMLSlotElement;
}

HTMLSourceElement: {
  prototype: HTMLSourceElement;
  new(): HTMLSourceElement;
}

HTMLSpanElement: {
  prototype: HTMLSpanElement;
  new(): HTMLSpanElement;
}

HTMLStyleElement: {
  prototype: HTMLStyleElement;
  new(): HTMLStyleElement;
}

HTMLTableCaptionElement: {
  prototype: HTMLTableCaptionElement;
  new(): HTMLTableCaptionElement;
}

HTMLTableCellElement: {
  prototype: HTMLTableCellElement;
  new(): HTMLTableCellElement;
}

HTMLTableColElement: {
  prototype: HTMLTableColElement;
  new(): HTMLTableColElement;
}

HTMLTableDataCellElement: {
  prototype: HTMLTableDataCellElement;
  new(): HTMLTableDataCellElement;
}

HTMLTableElement: {
  prototype: HTMLTableElement;
  new(): HTMLTableElement;
}

HTMLTableHeaderCellElement: {
  prototype: HTMLTableHeaderCellElement;
  new(): HTMLTableHeaderCellElement;
}

HTMLTableRowElement: {
  prototype: HTMLTableRowElement;
  new(): HTMLTableRowElement;
}

HTMLTableSectionElement: {
  prototype: HTMLTableSectionElement;
  new(): HTMLTableSectionElement;
}

HTMLTemplateElement: {
  prototype: HTMLTemplateElement;
  new(): HTMLTemplateElement;
}

HTMLTextAreaElement: {
  prototype: HTMLTextAreaElement;
  new(): HTMLTextAreaElement;
}

HTMLTimeElement: {
  prototype: HTMLTimeElement;
  new(): HTMLTimeElement;
}

HTMLTitleElement: {
  prototype: HTMLTitleElement;
  new(): HTMLTitleElement;
}

HTMLTrackElement: {
  prototype: HTMLTrackElement;
  new(): HTMLTrackElement;
  readonly ERROR: number;
  readonly LOADED: number;
  readonly LOADING: number;
  readonly NONE: number;
}

HTMLUListElement: {
  prototype: HTMLUListElement;
  new(): HTMLUListElement;
}

HTMLUnknownElement: {
  prototype: HTMLUnknownElement;
  new(): HTMLUnknownElement;
}

HTMLVideoElement: {
  prototype: HTMLVideoElement;
  new(): HTMLVideoElement;
}

interface IDBArrayKey extends Array<IDBValidKey> {
}

IDBCursor: {
  prototype: IDBCursor;
  new(): IDBCursor;
}

type IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique";

IDBCursorWithValue: {
  prototype: IDBCursorWithValue;
  new(): IDBCursorWithValue;
}

IDBDatabase: {
  prototype: IDBDatabase;
  new(): IDBDatabase;
}

interface IDBDatabaseEventMap {
  "abort": Event;
  "close": Event;
  "error": Event;
  "versionchange": IDBVersionChangeEvent;
}

IDBFactory: {
  prototype: IDBFactory;
  new(): IDBFactory;
}

IDBIndex: {
  prototype: IDBIndex;
  new(): IDBIndex;
}

interface IDBIndexParameters {
  multiEntry?: boolean;
  unique?: boolean;
}

type IDBKeyPath = string;

IDBKeyRange: {
  prototype: IDBKeyRange;
  new(): IDBKeyRange;
  /**
   * Returns a new IDBKeyRange spanning from lower to upper. If lowerOpen is true, lower is not included in the range. If upperOpen is true, upper is not included in the range.
   */
  bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
  /**
   * Returns a new IDBKeyRange starting at key with no upper bound. If open is true, key is not included in the range.
   */
  lowerBound(lower: any, open?: boolean): IDBKeyRange;
  /**
   * Returns a new IDBKeyRange spanning only key.
   */
  only(value: any): IDBKeyRange;
  /**
   * Returns a new IDBKeyRange with no lower bound and ending at key. If open is true, key is not included in the range.
   */
  upperBound(upper: any, open?: boolean): IDBKeyRange;
}

IDBObjectStore: {
  prototype: IDBObjectStore;
  new(): IDBObjectStore;
}

interface IDBObjectStoreParameters {
  autoIncrement?: boolean;
  keyPath?: string | string[] | null;
}

IDBOpenDBRequest: {
  prototype: IDBOpenDBRequest;
  new(): IDBOpenDBRequest;
}

interface IDBOpenDBRequestEventMap extends IDBRequestEventMap {
  "blocked": Event;
  "upgradeneeded": IDBVersionChangeEvent;
}

IDBRequest: {
  prototype: IDBRequest;
  new(): IDBRequest;
}

interface IDBRequestEventMap {
  "error": Event;
  "success": Event;
}

type IDBRequestReadyState = "done" | "pending";

IDBTransaction: {
  prototype: IDBTransaction;
  new(): IDBTransaction;
}

interface IDBTransactionEventMap {
  "abort": Event;
  "complete": Event;
  "error": Event;
}

type IDBTransactionMode = "readonly" | "readwrite" | "versionchange";

type IDBValidKey = number | string | Date | BufferSource | IDBArrayKey;

IDBVersionChangeEvent: {
  prototype: IDBVersionChangeEvent;
  new(type: string, eventInitDict?: IDBVersionChangeEventInit): IDBVersionChangeEvent;
}

interface IDBVersionChangeEventInit extends EventInit {
  newVersion?: number | null;
  oldVersion?: number;
}

IIRFilterNode: {
  prototype: IIRFilterNode;
  new(context: BaseAudioContext, options: IIRFilterOptions): IIRFilterNode;
}

interface IIRFilterOptions extends AudioNodeOptions {
  feedback: number[];
  feedforward: number[];
}

Image: {
  new(width?: number, height?: number): HTMLImageElement;
}

ImageBitmap: {
  prototype: ImageBitmap;
  new(): ImageBitmap;
}

interface ImageBitmapOptions {
  colorSpaceConversion?: ColorSpaceConversion;
  imageOrientation?: ImageOrientation;
  premultiplyAlpha?: PremultiplyAlpha;
  resizeHeight?: number;
  resizeQuality?: ResizeQuality;
  resizeWidth?: number;
}

ImageBitmapRenderingContext: {
  prototype: ImageBitmapRenderingContext;
  new(): ImageBitmapRenderingContext;
}

interface ImageBitmapRenderingContextSettings {
  alpha?: boolean;
}

type ImageBitmapSource = CanvasImageSource | Blob | ImageData;

ImageData: {
  prototype: ImageData;
  new(width: number, height: number): ImageData;
  new(array: Uint8ClampedArray, width: number, height?: number): ImageData;
}

interface ImageEncodeOptions {
  quality?: number;
  type?: string;
}

type ImageOrientation = "flipY" | "none";

type ImageSmoothingQuality = "high" | "low" | "medium";

type ImportExportKind = "function" | "global" | "memory" | "table";

type Imports = Record<string, ModuleImports>;

type ImportValue = ExportValue | number;

indexedDB: IDBFactory

innerHeight: number

interface InnerHTML {
  innerHTML: string;
}

innerWidth: number

InputDeviceInfo: {
  prototype: InputDeviceInfo;
  new(): InputDeviceInfo;
}

InputEvent: {
  prototype: InputEvent;
  new(type: string, eventInitDict?: InputEventInit): InputEvent;
}

interface InputEventInit extends UIEventInit {
  data?: string | null;
  inputType?: string;
  isComposing?: boolean;
}

type InsertPosition = "beforebegin" | "afterbegin" | "beforeend" | "afterend";

Instance: {
      prototype: Instance;
      new(module: Module, importObject?: Imports): Instance;
}

function instantiate(moduleObject: Module, importObject?: Imports): Promise<Instance>;

function instantiateStreaming(response: Response | PromiseLike<Response>, importObject?: Imports): Promise<WebAssemblyInstantiatedSource>;

type Int32List = Int32Array | GLint[];

IntersectionObserver: {
  prototype: IntersectionObserver;
  new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
}

interface IntersectionObserverCallback {
  (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
}

IntersectionObserverEntry: {
  prototype: IntersectionObserverEntry;
  new(intersectionObserverEntryInit: IntersectionObserverEntryInit): IntersectionObserverEntry;
}

interface IntersectionObserverEntryInit {
  boundingClientRect: DOMRectInit;
  intersectionRatio: number;
  intersectionRect: DOMRectInit;
  isIntersecting: boolean;
  rootBounds: DOMRectInit | null;
  target: Element;
  time: number;
}

interface IntersectionObserverInit {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

isSecureContext: boolean

IStorageManager: {
  prototype: IStorageManager;
  new(): IStorageManager;
}

type IterationCompositeOperation = "accumulate" | "replace";

IWindow: {
  prototype: IWindow;
  new(): IWindow;
}

interface JsonWebKey {
  alg?: string;
  crv?: string;
  d?: string;
  dp?: string;
  dq?: string;
  e?: string;
  ext?: boolean;
  k?: string;
  key_ops?: string[];
  kty?: string;
  n?: string;
  oth?: RsaOtherPrimesInfo[];
  p?: string;
  q?: string;
  qi?: string;
  use?: string;
  x?: string;
  y?: string;
}

interface KeyAlgorithm {
  name: string;
}

KeyboardEvent: {
  prototype: KeyboardEvent;
  new(type: string, eventInitDict?: KeyboardEventInit): KeyboardEvent;
  readonly DOM_KEY_LOCATION_LEFT: number;
  readonly DOM_KEY_LOCATION_NUMPAD: number;
  readonly DOM_KEY_LOCATION_RIGHT: number;
  readonly DOM_KEY_LOCATION_STANDARD: number;
}

interface KeyboardEventInit extends EventModifierInit {
  code?: string;
  isComposing?: boolean;
  key?: string;
  location?: number;
  repeat?: boolean;
}

type KeyFormat = "jwk" | "pkcs8" | "raw" | "spki";

interface Keyframe {
  composite?: CompositeOperationOrAuto;
  easing?: string;
  offset?: number | null;
  [property: string]: string | number | null | undefined;
}

interface KeyframeAnimationOptions extends KeyframeEffectOptions {
  id?: string;
}

KeyframeEffect: {
  prototype: KeyframeEffect;
  new(target: Element | null, keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeEffectOptions): KeyframeEffect;
  new(source: KeyframeEffect): KeyframeEffect;
}

interface KeyframeEffectOptions extends EffectTiming {
  composite?: CompositeOperation;
  iterationComposite?: IterationCompositeOperation;
}

type KeyType = "private" | "public" | "secret";

type KeyUsage = "decrypt" | "deriveBits" | "deriveKey" | "encrypt" | "sign" | "unwrapKey" | "verify" | "wrapKey";

length: number

type LineAlignSetting = "center" | "end" | "start";

type LineAndPositionSetting = number | AutoKeyword;

LinkError: {
      prototype: LinkError;
      new(): LinkError;
  }

interface LinkStyle {
  readonly sheet: CSSStyleSheet | null;
}

type ListeningState = "active" | "disambiguation" | "inactive";

ListeningStateChangedEvent: {
  prototype: ListeningStateChangedEvent;
  new(): ListeningStateChangedEvent;
}

localStorage: Storage

location: Location

Location: {
  prototype: Location;
  new(): Location;
}

locationbar: BarProp

declare function matchMedia(query: string): MediaQueryList;

MediaDeviceInfo: {
  prototype: MediaDeviceInfo;
  new(): MediaDeviceInfo;
}

type MediaDeviceKind = "audioinput" | "audiooutput" | "videoinput";

MediaDevices: {
  prototype: MediaDevices;
  new(): MediaDevices;
}

interface MediaDevicesEventMap {
  "devicechange": Event;
}

MediaElementAudioSourceNode: {
  prototype: MediaElementAudioSourceNode;
  new(context: AudioContext, options: MediaElementAudioSourceOptions): MediaElementAudioSourceNode;
}

interface MediaElementAudioSourceOptions {
  mediaElement: HTMLMediaElement;
}

MediaEncryptedEvent: {
  prototype: MediaEncryptedEvent;
  new(type: string, eventInitDict?: MediaEncryptedEventInit): MediaEncryptedEvent;
}

interface MediaEncryptedEventInit extends EventInit {
  initData?: ArrayBuffer | null;
  initDataType?: string;
}

MediaError: {
  prototype: MediaError;
  new(): MediaError;
  readonly MEDIA_ERR_ABORTED: number;
  readonly MEDIA_ERR_DECODE: number;
  readonly MEDIA_ERR_NETWORK: number;
  readonly MEDIA_ERR_SRC_NOT_SUPPORTED: number;
}

MediaKeyMessageEvent: {
  prototype: MediaKeyMessageEvent;
  new(type: string, eventInitDict: MediaKeyMessageEventInit): MediaKeyMessageEvent;
}

interface MediaKeyMessageEventInit extends EventInit {
  message: ArrayBuffer;
  messageType: MediaKeyMessageType;
}

type MediaKeyMessageType = "individualization-request" | "license-release" | "license-renewal" | "license-request";

MediaKeys: {
  prototype: MediaKeys;
  new(): MediaKeys;
}

MediaKeySession: {
  prototype: MediaKeySession;
  new(): MediaKeySession;
}

interface MediaKeySessionEventMap {
  "keystatuseschange": Event;
  "message": MediaKeyMessageEvent;
}

type MediaKeySessionType = "persistent-license" | "temporary";

type MediaKeysRequirement = "not-allowed" | "optional" | "required";

type MediaKeyStatus = "expired" | "internal-error" | "output-downscaled" | "output-restricted" | "released" | "status-pending" | "usable";

MediaKeyStatusMap: {
  prototype: MediaKeyStatusMap;
  new(): MediaKeyStatusMap;
}

MediaKeySystemAccess: {
  prototype: MediaKeySystemAccess;
  new(): MediaKeySystemAccess;
}

interface MediaKeySystemConfiguration {
  audioCapabilities?: MediaKeySystemMediaCapability[];
  distinctiveIdentifier?: MediaKeysRequirement;
  initDataTypes?: string[];
  label?: string;
  persistentState?: MediaKeysRequirement;
  sessionTypes?: string[];
  videoCapabilities?: MediaKeySystemMediaCapability[];
}

interface MediaKeySystemMediaCapability {
  contentType?: string;
  robustness?: string;
}

MediaList: {
  prototype: MediaList;
  new(): MediaList;
}

type MediaProvider = MediaStream | MediaSource | Blob;

MediaQueryList: {
  prototype: MediaQueryList;
  new(): MediaQueryList;
}

MediaQueryListEvent: {
  prototype: MediaQueryListEvent;
  new(type: string, eventInitDict?: MediaQueryListEventInit): MediaQueryListEvent;
}

interface MediaQueryListEventInit extends EventInit {
  matches?: boolean;
  media?: string;
}

interface MediaQueryListEventMap {
  "change": MediaQueryListEvent;
}

MediaSource: {
  prototype: MediaSource;
  new(): MediaSource;
  isTypeSupported(type: string): boolean;
}

interface MediaSourceEventMap {
  "sourceclose": Event;
  "sourceended": Event;
  "sourceopen": Event;
}

MediaStream: {
  prototype: MediaStream;
  new(): MediaStream;
  new(stream: MediaStream): MediaStream;
  new(tracks: MediaStreamTrack[]): MediaStream;
}

MediaStreamAudioDestinationNode: {
  prototype: MediaStreamAudioDestinationNode;
  new(context: AudioContext, options?: AudioNodeOptions): MediaStreamAudioDestinationNode;
}

MediaStreamAudioSourceNode: {
  prototype: MediaStreamAudioSourceNode;
  new(context: AudioContext, options: MediaStreamAudioSourceOptions): MediaStreamAudioSourceNode;
}

interface MediaStreamAudioSourceOptions {
  mediaStream: MediaStream;
}

interface MediaStreamConstraints {
  audio?: boolean | MediaTrackConstraints;
  peerIdentity?: string;
  video?: boolean | MediaTrackConstraints;
}

MediaStreamError: {
  prototype: MediaStreamError;
  new(): MediaStreamError;
}

MediaStreamErrorEvent: {
  prototype: MediaStreamErrorEvent;
  new(typeArg: string, eventInitDict?: MediaStreamErrorEventInit): MediaStreamErrorEvent;
}

interface MediaStreamErrorEventInit extends EventInit {
  error?: MediaStreamError | null;
}

MediaStreamEvent: {
  prototype: MediaStreamEvent;
  new(type: string, eventInitDict: MediaStreamEventInit): MediaStreamEvent;
}

interface MediaStreamEventInit extends EventInit {
  stream?: MediaStream;
}

interface MediaStreamEventMap {
  "addtrack": MediaStreamTrackEvent;
  "removetrack": MediaStreamTrackEvent;
}

MediaStreamTrack: {
  prototype: MediaStreamTrack;
  new(): MediaStreamTrack;
}

MediaStreamTrackAudioSourceNode: {
  prototype: MediaStreamTrackAudioSourceNode;
  new(context: AudioContext, options: MediaStreamTrackAudioSourceOptions): MediaStreamTrackAudioSourceNode;
}

interface MediaStreamTrackAudioSourceOptions {
  mediaStreamTrack: MediaStreamTrack;
}

MediaStreamTrackEvent: {
  prototype: MediaStreamTrackEvent;
  new(type: string, eventInitDict: MediaStreamTrackEventInit): MediaStreamTrackEvent;
}

interface MediaStreamTrackEventInit extends EventInit {
  track: MediaStreamTrack;
}

interface MediaStreamTrackEventMap {
  "ended": Event;
  "isolationchange": Event;
  "mute": Event;
  "unmute": Event;
}

type MediaStreamTrackState = "ended" | "live";

interface MediaTrackCapabilities {
  aspectRatio?: DoubleRange;
  autoGainControl?: boolean[];
  channelCount?: ULongRange;
  deviceId?: string;
  echoCancellation?: boolean[];
  facingMode?: string[];
  frameRate?: DoubleRange;
  groupId?: string;
  height?: ULongRange;
  latency?: DoubleRange;
  noiseSuppression?: boolean[];
  resizeMode?: string[];
  sampleRate?: ULongRange;
  sampleSize?: ULongRange;
  width?: ULongRange;
}

interface MediaTrackConstraints extends MediaTrackConstraintSet {
  advanced?: MediaTrackConstraintSet[];
}

interface MediaTrackConstraintSet {
  aspectRatio?: ConstrainDouble;
  autoGainControl?: ConstrainBoolean;
  channelCount?: ConstrainULong;
  deviceId?: ConstrainDOMString;
  echoCancellation?: ConstrainBoolean;
  facingMode?: ConstrainDOMString;
  frameRate?: ConstrainDouble;
  groupId?: ConstrainDOMString;
  height?: ConstrainULong;
  latency?: ConstrainDouble;
  noiseSuppression?: ConstrainBoolean;
  resizeMode?: ConstrainDOMString;
  sampleRate?: ConstrainULong;
  sampleSize?: ConstrainULong;
  width?: ConstrainULong;
}

interface MediaTrackSettings {
  aspectRatio?: number;
  autoGainControl?: boolean;
  channelCount?: number;
  deviceId?: string;
  echoCancellation?: boolean;
  facingMode?: string;
  frameRate?: number;
  groupId?: string;
  height?: number;
  latency?: number;
  noiseSuppression?: boolean;
  resizeMode?: string;
  sampleRate?: number;
  sampleSize?: number;
  width?: number;
}

interface MediaTrackSupportedConstraints {
  aspectRatio?: boolean;
  autoGainControl?: boolean;
  channelCount?: boolean;
  deviceId?: boolean;
  echoCancellation?: boolean;
  facingMode?: boolean;
  frameRate?: boolean;
  groupId?: boolean;
  height?: boolean;
  latency?: boolean;
  noiseSuppression?: boolean;
  resizeMode?: boolean;
  sampleRate?: boolean;
  sampleSize?: boolean;
  width?: boolean;
}

Memory: {
      prototype: Memory;
      new(descriptor: MemoryDescriptor): Memory;
  }

interface MemoryDescriptor {
      initial: number;
      maximum?: number;
}

menubar: BarProp

MessageChannel: {
  prototype: MessageChannel;
  new(): MessageChannel;
}

MessageEvent: {
  prototype: MessageEvent;
  new<T>(type: string, eventInitDict?: MessageEventInit<T>): MessageEvent<T>;
}

interface MessageEventInit<T = any> extends EventInit {
  data?: T;
  lastEventId?: string;
  origin?: string;
  ports?: MessagePort[];
  source?: MessageEventSource | null;
}

type MessageEventSource = WindowProxy | MessagePort | ServiceWorker;

MessagePort: {
  prototype: MessagePort;
  new(): MessagePort;
}

interface MessagePortEventMap {
  "message": MessageEvent;
  "messageerror": MessageEvent;
}

interface MidiPermissionDescriptor extends PermissionDescriptor {
  name: "midi";
  sysex?: boolean;
}

MimeType: {
  prototype: MimeType;
  new(): MimeType;
}

MimeTypeArray: {
  prototype: MimeTypeArray;
  new(): MimeTypeArray;
}

Module: {
      prototype: Module;
      new(bytes: BufferSource): Module;
      customSections(moduleObject: Module, sectionName: string): ArrayBuffer[];
      exports(moduleObject: Module): ModuleExportDescriptor[];
      imports(moduleObject: Module): ModuleImportDescriptor[];
  }

interface ModuleExportDescriptor {
      kind: ImportExportKind;
      name: string;
}

interface ModuleImportDescriptor {
      kind: ImportExportKind;
      module: string;
      name: string;
}

type ModuleImports = Record<string, ImportValue>;

MouseEvent: {
  prototype: MouseEvent;
  new(type: string, eventInitDict?: MouseEventInit): MouseEvent;
}

interface MouseEventInit extends EventModifierInit {
  button?: number;
  buttons?: number;
  clientX?: number;
  clientY?: number;
  movementX?: number;
  movementY?: number;
  relatedTarget?: EventTarget | null;
  screenX?: number;
  screenY?: number;
}

/** @deprecated */
type MouseWheelEvent = WheelEvent;

declare function moveBy(x: number, y: number): void;

declare function moveTo(x: number, y: number): void;

MSAssertion: {
  prototype: MSAssertion;
  new(): MSAssertion;
}

MSBlobBuilder: {
  prototype: MSBlobBuilder;
  new(): MSBlobBuilder;
}

msContentScript: ExtensionScriptApis

type MSCredentialType = "FIDO_2_0";

MSFIDOCredentialAssertion: {
  prototype: MSFIDOCredentialAssertion;
  new(): MSFIDOCredentialAssertion;
}

MSFIDOSignature: {
  prototype: MSFIDOSignature;
  new(): MSFIDOSignature;
}

MSFIDOSignatureAssertion: {
  prototype: MSFIDOSignatureAssertion;
  new(): MSFIDOSignatureAssertion;
}

interface MSFileSaver {
  msSaveBlob(blob: any, defaultName?: string): boolean;
  msSaveOrOpenBlob(blob: any, defaultName?: string): boolean;
}

MSGesture: {
  prototype: MSGesture;
  new(): MSGesture;
}

MSGestureEvent: {
  prototype: MSGestureEvent;
  new(): MSGestureEvent;
  readonly MSGESTURE_FLAG_BEGIN: number;
  readonly MSGESTURE_FLAG_CANCEL: number;
  readonly MSGESTURE_FLAG_END: number;
  readonly MSGESTURE_FLAG_INERTIA: number;
  readonly MSGESTURE_FLAG_NONE: number;
}

MSGraphicsTrust: {
  prototype: MSGraphicsTrust;
  new(): MSGraphicsTrust;
}

MSInputMethodContext: {
  prototype: MSInputMethodContext;
  new(): MSInputMethodContext;
}

interface MSInputMethodContextEventMap {
  "MSCandidateWindowHide": Event;
  "MSCandidateWindowShow": Event;
  "MSCandidateWindowUpdate": Event;
}

interface MSLaunchUriCallback {
  (): void;
}

MSMediaKeyError: {
  prototype: MSMediaKeyError;
  new(): MSMediaKeyError;
  readonly MS_MEDIA_KEYERR_CLIENT: number;
  readonly MS_MEDIA_KEYERR_DOMAIN: number;
  readonly MS_MEDIA_KEYERR_HARDWARECHANGE: number;
  readonly MS_MEDIA_KEYERR_OUTPUT: number;
  readonly MS_MEDIA_KEYERR_SERVICE: number;
  readonly MS_MEDIA_KEYERR_UNKNOWN: number;
}

MSMediaKeyMessageEvent: {
  prototype: MSMediaKeyMessageEvent;
  new(): MSMediaKeyMessageEvent;
}

MSMediaKeyNeededEvent: {
  prototype: MSMediaKeyNeededEvent;
  new(): MSMediaKeyNeededEvent;
}

MSMediaKeys: {
  prototype: MSMediaKeys;
  new(keySystem: string): MSMediaKeys;
  isTypeSupported(keySystem: string, type?: string | null): boolean;
  isTypeSupportedWithFeatures(keySystem: string, type?: string | null): string;
}

MSMediaKeySession: {
  prototype: MSMediaKeySession;
  new(): MSMediaKeySession;
}

interface MSNavigatorDoNotTrack {
  confirmSiteSpecificTrackingException(args: ConfirmSiteSpecificExceptionsInformation): boolean;
  confirmWebWideTrackingException(args: ExceptionInformation): boolean;
  removeSiteSpecificTrackingException(args: ExceptionInformation): void;
  removeWebWideTrackingException(args: ExceptionInformation): void;
  storeSiteSpecificTrackingException(args: StoreSiteSpecificExceptionsInformation): void;
  storeWebWideTrackingException(args: StoreExceptionsInformation): void;
}

MSPointerEvent: {
  prototype: MSPointerEvent;
  new(typeArg: string, eventInitDict?: PointerEventInit): MSPointerEvent;
}

MSStream: {
  prototype: MSStream;
  new(): MSStream;
}

type MSTransportType = "BT" | "Embedded" | "NFC" | "USB";

type MSWebViewPermissionState = "allow" | "defer" | "deny" | "unknown";

type MSWebViewPermissionType = "geolocation" | "media" | "pointerlock" | "unlimitedIndexedDBQuota" | "webnotifications";

declare function msWriteProfilerMark(profilerMarkName: string): void;

interface MultiCacheQueryOptions extends CacheQueryOptions {
  cacheName?: string;
}

interface MutationCallback {
  (mutations: MutationRecord[], observer: MutationObserver): void;
}

MutationEvent: {
  prototype: MutationEvent;
  new(): MutationEvent;
  readonly ADDITION: number;
  readonly MODIFICATION: number;
  readonly REMOVAL: number;
}

MutationObserver: {
  prototype: MutationObserver;
  new(callback: MutationCallback): MutationObserver;
}

interface MutationObserverInit {
  /**
   * Set to a list of attribute local names (without namespace) if not all attribute mutations need to be observed and attributes is true or omitted.
   */
  attributeFilter?: string[];
  /**
   * Set to true if attributes is true or omitted and target's attribute value before the mutation needs to be recorded.
   */
  attributeOldValue?: boolean;
  /**
   * Set to true if mutations to target's attributes are to be observed. Can be omitted if attributeOldValue or attributeFilter is specified.
   */
  attributes?: boolean;
  /**
   * Set to true if mutations to target's data are to be observed. Can be omitted if characterDataOldValue is specified.
   */
  characterData?: boolean;
  /**
   * Set to true if characterData is set to true or omitted and target's data before the mutation needs to be recorded.
   */
  characterDataOldValue?: boolean;
  /**
   * Set to true if mutations to target's children are to be observed.
   */
  childList?: boolean;
  /**
   * Set to true if mutations to not just target, but also target's descendants are to be observed.
   */
  subtree?: boolean;
}

MutationRecord: {
  prototype: MutationRecord;
  new(): MutationRecord;
}

type MutationRecordType = "attributes" | "characterData" | "childList";

name: never

type NamedCurve = string;

NamedNodeMap: {
  prototype: NamedNodeMap;
  new(): NamedNodeMap;
}

NavigationPreloadManager: {
  prototype: NavigationPreloadManager;
  new(): NavigationPreloadManager;
}

interface NavigationPreloadState {
  enabled?: boolean;
  headerValue?: string;
}

type NavigationReason = "down" | "left" | "right" | "up";

type NavigationType = "back_forward" | "navigate" | "prerender" | "reload";

navigator: Navigator

Navigator: {
  prototype: Navigator;
  new(): Navigator;
}

interface NavigatorAutomationInformation {
  readonly webdriver: boolean;
}

interface NavigatorBeacon {
  sendBeacon(url: string, data?: Blob | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | FormData | string | null): boolean;
}

interface NavigatorConcurrentHardware {
  readonly hardwareConcurrency: number;
}

interface NavigatorContentUtils {
  registerProtocolHandler(scheme: string, url: string, title: string): void;
  unregisterProtocolHandler(scheme: string, url: string): void;
}

interface NavigatorCookies {
  readonly cookieEnabled: boolean;
}

interface NavigatorID {
  readonly appCodeName: string;
  readonly appName: string;
  readonly appVersion: string;
  readonly platform: string;
  readonly product: string;
  readonly productSub: string;
  readonly userAgent: string;
  readonly vendor: string;
  readonly vendorSub: string;
}

interface NavigatorLanguage {
  readonly language: string;
  readonly languages: ReadonlyArray<string>;
}

interface NavigatorOnLine {
  readonly onLine: boolean;
}

interface NavigatorPlugins {
  readonly mimeTypes: MimeTypeArray;
  readonly plugins: PluginArray;
  javaEnabled(): boolean;
}

interface NavigatorStorage {
  readonly storage: StorageManager;
}

interface NavigatorUserMediaErrorCallback {
  (error: MediaStreamError): void;
}

interface NavigatorUserMediaSuccessCallback {
  (stream: MediaStream): void;
}

Node: {
  prototype: Node;
  new(): Node;
  readonly ATTRIBUTE_NODE: number;
  /**
   * node is a CDATASection node.
   */
  readonly CDATA_SECTION_NODE: number;
  /**
   * node is a Comment node.
   */
  readonly COMMENT_NODE: number;
  /**
   * node is a DocumentFragment node.
   */
  readonly DOCUMENT_FRAGMENT_NODE: number;
  /**
   * node is a document.
   */
  readonly DOCUMENT_NODE: number;
  /**
   * Set when other is a descendant of node.
   */
  readonly DOCUMENT_POSITION_CONTAINED_BY: number;
  /**
   * Set when other is an ancestor of node.
   */
  readonly DOCUMENT_POSITION_CONTAINS: number;
  /**
   * Set when node and other are not in the same tree.
   */
  readonly DOCUMENT_POSITION_DISCONNECTED: number;
  /**
   * Set when other is following node.
   */
  readonly DOCUMENT_POSITION_FOLLOWING: number;
  readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
  /**
   * Set when other is preceding node.
   */
  readonly DOCUMENT_POSITION_PRECEDING: number;
  /**
   * node is a doctype.
   */
  readonly DOCUMENT_TYPE_NODE: number;
  /**
   * node is an element.
   */
  readonly ELEMENT_NODE: number;
  readonly ENTITY_NODE: number;
  readonly ENTITY_REFERENCE_NODE: number;
  readonly NOTATION_NODE: number;
  /**
   * node is a ProcessingInstruction node.
   */
  readonly PROCESSING_INSTRUCTION_NODE: number;
  /**
   * node is a Text node.
   */
  readonly TEXT_NODE: number;
}

NodeFilter: {
  readonly FILTER_ACCEPT: number;
  readonly FILTER_REJECT: number;
  readonly FILTER_SKIP: number;
  readonly SHOW_ALL: number;
  readonly SHOW_ATTRIBUTE: number;
  readonly SHOW_CDATA_SECTION: number;
  readonly SHOW_COMMENT: number;
  readonly SHOW_DOCUMENT: number;
  readonly SHOW_DOCUMENT_FRAGMENT: number;
  readonly SHOW_DOCUMENT_TYPE: number;
  readonly SHOW_ELEMENT: number;
  readonly SHOW_ENTITY: number;
  readonly SHOW_ENTITY_REFERENCE: number;
  readonly SHOW_NOTATION: number;
  readonly SHOW_PROCESSING_INSTRUCTION: number;
  readonly SHOW_TEXT: number;
}

NodeIterator: {
  prototype: NodeIterator;
  new(): NodeIterator;
}

NodeList: {
  prototype: NodeList;
  new(): NodeList;
}

interface NodeListOf<TNode extends Node> extends NodeList {
  length: number;
  item(index: number): TNode;
  /**
   * Performs the specified action for each node in an list.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn: (value: TNode, key: number, parent: NodeListOf<TNode>) => void, thisArg?: any): void;
  [index: number]: TNode;
}

interface NonDocumentTypeChildNode {
  /**
   * Returns the first following sibling that is an element, and null otherwise.
   */
  readonly nextElementSibling: Element | null;
  /**
   * Returns the first preceding sibling that is an element, and null otherwise.
   */
  readonly previousElementSibling: Element | null;
}

interface NonElementParentNode {
  /**
   * Returns the first element within node's descendants whose ID is elementId.
   */
  getElementById(elementId: string): Element | null;
}

Notification: {
  prototype: Notification;
  new(title: string, options?: NotificationOptions): Notification;
  readonly maxActions: number;
  readonly permission: NotificationPermission;
  requestPermission(deprecatedCallback?: NotificationPermissionCallback): Promise<NotificationPermission>;
}

interface NotificationAction {
  action: string;
  icon?: string;
  title: string;
}

type NotificationDirection = "auto" | "ltr" | "rtl";

interface NotificationEventMap {
  "click": Event;
  "close": Event;
  "error": Event;
  "show": Event;
}

interface NotificationOptions {
  actions?: NotificationAction[];
  badge?: string;
  body?: string;
  data?: any;
  dir?: NotificationDirection;
  icon?: string;
  image?: string;
  lang?: string;
  renotify?: boolean;
  requireInteraction?: boolean;
  silent?: boolean;
  tag?: string;
  timestamp?: number;
  vibrate?: VibratePattern;
}

type NotificationPermission = "default" | "denied" | "granted";

interface NotificationPermissionCallback {
  (permission: NotificationPermission): void;
}

/** The OES_element_index_uint extension is part of the WebGL API and adds support for gl.UNSIGNED_INT types to WebGLRenderingContext.drawElements(). */
interface OES_element_index_uint {
}

/** The OES_standard_derivatives extension is part of the WebGL API and adds the GLSL derivative functions dFdx, dFdy, and fwidth. */
interface OES_standard_derivatives {
  readonly FRAGMENT_SHADER_DERIVATIVE_HINT_OES: GLenum;
}

/** The OES_texture_float extension is part of the WebGL API and exposes floating-point pixel types for textures. */
interface OES_texture_float {
}

/** The OES_texture_float_linear extension is part of the WebGL API and allows linear filtering with floating-point pixel types for textures. */
interface OES_texture_float_linear {
}

/** The OES_texture_half_float extension is part of the WebGL API and adds texture formats with 16- (aka half float) and 32-bit floating-point components. */
interface OES_texture_half_float {
  readonly HALF_FLOAT_OES: GLenum;
}

/** The OES_texture_half_float_linear extension is part of the WebGL API and allows linear filtering with half floating-point pixel types for textures. */
interface OES_texture_half_float_linear {
}

interface OES_vertex_array_object {
  bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
  createVertexArrayOES(): WebGLVertexArrayObjectOES | null;
  deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
  isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): GLboolean;
  readonly VERTEX_ARRAY_BINDING_OES: GLenum;
}

OfflineAudioCompletionEvent: {
  prototype: OfflineAudioCompletionEvent;
  new(type: string, eventInitDict: OfflineAudioCompletionEventInit): OfflineAudioCompletionEvent;
}

interface OfflineAudioCompletionEventInit extends EventInit {
  renderedBuffer: AudioBuffer;
}

OfflineAudioContext: {
  prototype: OfflineAudioContext;
  new(contextOptions: OfflineAudioContextOptions): OfflineAudioContext;
  new(numberOfChannels: number, length: number, sampleRate: number): OfflineAudioContext;
}

interface OfflineAudioContextEventMap extends BaseAudioContextEventMap {
  "complete": OfflineAudioCompletionEvent;
}

interface OfflineAudioContextOptions {
  length: number;
  numberOfChannels?: number;
  sampleRate: number;
}

offscreenBuffering: string | boolean

OffscreenCanvas: {
  prototype: OffscreenCanvas;
  new(width: number, height: number): OffscreenCanvas;
}

OffscreenCanvasRenderingContext2D: {
  prototype: OffscreenCanvasRenderingContext2D;
  new(): OffscreenCanvasRenderingContext2D;
}

type OffscreenRenderingContext = OffscreenCanvasRenderingContext2D | ImageBitmapRenderingContext | WebGLRenderingContext | WebGL2RenderingContext;

type OffscreenRenderingContextId = "2d" | "bitmaprenderer" | "webgl" | "webgl2";

onabort: ((this: IWindow, ev: UIEvent) => any) | null

onafterprint: ((this: IWindow, ev: Event) => any) | null

onanimationcancel: ((this: IWindow, ev: AnimationEvent) => any) | null

onanimationend: ((this: IWindow, ev: AnimationEvent) => any) | null

onanimationiteration: ((this: IWindow, ev: AnimationEvent) => any) | null

onanimationstart: ((this: IWindow, ev: AnimationEvent) => any) | null

onauxclick: ((this: IWindow, ev: MouseEvent) => any) | null

onbeforeprint: ((this: IWindow, ev: Event) => any) | null

onbeforeunload: ((this: IWindow, ev: BeforeUnloadEvent) => any) | null

type OnBeforeUnloadEventHandler = OnBeforeUnloadEventHandlerNonNull | null;

interface OnBeforeUnloadEventHandlerNonNull {
  (event: Event): string | null;
}

onblur: ((this: IWindow, ev: FocusEvent) => any) | null

oncancel: ((this: IWindow, ev: Event) => any) | null

oncanplay: ((this: IWindow, ev: Event) => any) | null

oncanplaythrough: ((this: IWindow, ev: Event) => any) | null

onchange: ((this: IWindow, ev: Event) => any) | null

onclick: ((this: IWindow, ev: MouseEvent) => any) | null

onclose: ((this: IWindow, ev: Event) => any) | null

oncompassneedscalibration: ((this: IWindow, ev: Event) => any) | null

oncontextmenu: ((this: IWindow, ev: MouseEvent) => any) | null

oncuechange: ((this: IWindow, ev: Event) => any) | null

ondblclick: ((this: IWindow, ev: MouseEvent) => any) | null

ondevicelight: ((this: IWindow, ev: DeviceLightEvent) => any) | null

ondevicemotion: ((this: IWindow, ev: DeviceMotionEvent) => any) | null

ondeviceorientation: ((this: IWindow, ev: DeviceOrientationEvent) => any) | null

ondeviceorientationabsolute: ((this: IWindow, ev: DeviceOrientationEvent) => any) | null

ondrag: ((this: IWindow, ev: DragEvent) => any) | null

ondragend: ((this: IWindow, ev: DragEvent) => any) | null

ondragenter: ((this: IWindow, ev: DragEvent) => any) | null

ondragexit: ((this: IWindow, ev: Event) => any) | null

ondragleave: ((this: IWindow, ev: DragEvent) => any) | null

ondragover: ((this: IWindow, ev: DragEvent) => any) | null

ondragstart: ((this: IWindow, ev: DragEvent) => any) | null

ondrop: ((this: IWindow, ev: DragEvent) => any) | null

ondurationchange: ((this: IWindow, ev: Event) => any) | null

onemptied: ((this: IWindow, ev: Event) => any) | null

onended: ((this: IWindow, ev: Event) => any) | null

onerror: OnErrorEventHandler

type OnErrorEventHandler = OnErrorEventHandlerNonNull | null;

interface OnErrorEventHandlerNonNull {
  (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error): any;
}

onfocus: ((this: IWindow, ev: FocusEvent) => any) | null

ongotpointercapture: ((this: IWindow, ev: PointerEvent) => any) | null

onhashchange: ((this: IWindow, ev: HashChangeEvent) => any) | null

oninput: ((this: IWindow, ev: Event) => any) | null

oninvalid: ((this: IWindow, ev: Event) => any) | null

onkeydown: ((this: IWindow, ev: KeyboardEvent) => any) | null

onkeypress: ((this: IWindow, ev: KeyboardEvent) => any) | null

onkeyup: ((this: IWindow, ev: KeyboardEvent) => any) | null

onlanguagechange: ((this: IWindow, ev: Event) => any) | null

onload: ((this: IWindow, ev: Event) => any) | null

onloadeddata: ((this: IWindow, ev: Event) => any) | null

onloadedmetadata: ((this: IWindow, ev: Event) => any) | null

onloadstart: ((this: IWindow, ev: Event) => any) | null

onlostpointercapture: ((this: IWindow, ev: PointerEvent) => any) | null

onmessage: ((this: IWindow, ev: MessageEvent) => any) | null

onmessageerror: ((this: IWindow, ev: MessageEvent) => any) | null

onmousedown: ((this: IWindow, ev: MouseEvent) => any) | null

onmouseenter: ((this: IWindow, ev: MouseEvent) => any) | null

onmouseleave: ((this: IWindow, ev: MouseEvent) => any) | null

onmousemove: ((this: IWindow, ev: MouseEvent) => any) | null

onmouseout: ((this: IWindow, ev: MouseEvent) => any) | null

onmouseover: ((this: IWindow, ev: MouseEvent) => any) | null

onmouseup: ((this: IWindow, ev: MouseEvent) => any) | null

onmousewheel: ((this: IWindow, ev: Event) => any) | null

onmsgesturechange: ((this: IWindow, ev: Event) => any) | null

onmsgesturedoubletap: ((this: IWindow, ev: Event) => any) | null

onmsgestureend: ((this: IWindow, ev: Event) => any) | null

onmsgesturehold: ((this: IWindow, ev: Event) => any) | null

onmsgesturestart: ((this: IWindow, ev: Event) => any) | null

onmsgesturetap: ((this: IWindow, ev: Event) => any) | null

onmsinertiastart: ((this: IWindow, ev: Event) => any) | null

onmspointercancel: ((this: IWindow, ev: Event) => any) | null

onmspointerdown: ((this: IWindow, ev: Event) => any) | null

onmspointerenter: ((this: IWindow, ev: Event) => any) | null

onmspointerleave: ((this: IWindow, ev: Event) => any) | null

onmspointermove: ((this: IWindow, ev: Event) => any) | null

onmspointerout: ((this: IWindow, ev: Event) => any) | null

onmspointerover: ((this: IWindow, ev: Event) => any) | null

onmspointerup: ((this: IWindow, ev: Event) => any) | null

onoffline: ((this: IWindow, ev: Event) => any) | null

ononline: ((this: IWindow, ev: Event) => any) | null

onorientationchange: ((this: IWindow, ev: Event) => any) | null

onpagehide: ((this: IWindow, ev: PageTransitionEvent) => any) | null

onpageshow: ((this: IWindow, ev: PageTransitionEvent) => any) | null

onpause: ((this: IWindow, ev: Event) => any) | null

onplay: ((this: IWindow, ev: Event) => any) | null

onplaying: ((this: IWindow, ev: Event) => any) | null

onpointercancel: ((this: IWindow, ev: PointerEvent) => any) | null

onpointerdown: ((this: IWindow, ev: PointerEvent) => any) | null

onpointerenter: ((this: IWindow, ev: PointerEvent) => any) | null

onpointerleave: ((this: IWindow, ev: PointerEvent) => any) | null

onpointermove: ((this: IWindow, ev: PointerEvent) => any) | null

onpointerout: ((this: IWindow, ev: PointerEvent) => any) | null

onpointerover: ((this: IWindow, ev: PointerEvent) => any) | null

onpointerup: ((this: IWindow, ev: PointerEvent) => any) | null

onpopstate: ((this: IWindow, ev: PopStateEvent) => any) | null

onprogress: ((this: IWindow, ev: ProgressEvent) => any) | null

onratechange: ((this: IWindow, ev: Event) => any) | null

onreadystatechange: ((this: IWindow, ev: ProgressEvent<IWindow>) => any) | null

onrejectionhandled: ((this: IWindow, ev: PromiseRejectionEvent) => any) | null

onreset: ((this: IWindow, ev: Event) => any) | null

onresize: ((this: IWindow, ev: UIEvent) => any) | null

onscroll: ((this: IWindow, ev: Event) => any) | null

onsecuritypolicyviolation: ((this: IWindow, ev: SecurityPolicyViolationEvent) => any) | null

onseeked: ((this: IWindow, ev: Event) => any) | null

onseeking: ((this: IWindow, ev: Event) => any) | null

onselect: ((this: IWindow, ev: Event) => any) | null

onselectionchange: ((this: IWindow, ev: Event) => any) | null

onselectstart: ((this: IWindow, ev: Event) => any) | null

onstalled: ((this: IWindow, ev: Event) => any) | null

onstorage: ((this: IWindow, ev: StorageEvent) => any) | null

onsubmit: ((this: IWindow, ev: Event) => any) | null

onsuspend: ((this: IWindow, ev: Event) => any) | null

ontimeupdate: ((this: IWindow, ev: Event) => any) | null

ontoggle: ((this: IWindow, ev: Event) => any) | null

ontouchcancel: ((this: IWindow, ev: TouchEvent) => any) | null | undefined

ontouchend: ((this: IWindow, ev: TouchEvent) => any) | null | undefined

ontouchmove: ((this: IWindow, ev: TouchEvent) => any) | null | undefined

ontouchstart: ((this: IWindow, ev: TouchEvent) => any) | null | undefined

ontransitioncancel: ((this: IWindow, ev: TransitionEvent) => any) | null

ontransitionend: ((this: IWindow, ev: TransitionEvent) => any) | null

ontransitionrun: ((this: IWindow, ev: TransitionEvent) => any) | null

ontransitionstart: ((this: IWindow, ev: TransitionEvent) => any) | null

onunhandledrejection: ((this: IWindow, ev: PromiseRejectionEvent) => any) | null

onunload: ((this: IWindow, ev: Event) => any) | null

onvolumechange: ((this: IWindow, ev: Event) => any) | null

onvrdisplayactivate: ((this: IWindow, ev: Event) => any) | null

onvrdisplayblur: ((this: IWindow, ev: Event) => any) | null

onvrdisplayconnect: ((this: IWindow, ev: Event) => any) | null

onvrdisplaydeactivate: ((this: IWindow, ev: Event) => any) | null

onvrdisplaydisconnect: ((this: IWindow, ev: Event) => any) | null

onvrdisplayfocus: ((this: IWindow, ev: Event) => any) | null

onvrdisplaypointerrestricted: ((this: IWindow, ev: Event) => any) | null

onvrdisplaypointerunrestricted: ((this: IWindow, ev: Event) => any) | null

onvrdisplaypresentchange: ((this: IWindow, ev: Event) => any) | null

onwaiting: ((this: IWindow, ev: Event) => any) | null

onwheel: ((this: IWindow, ev: WheelEvent) => any) | null

declare function open(url?: string, target?: string, features?: string, replace?: boolean): IWindow | null;

opener: any

Option: {
  new(text?: string, value?: string, defaultSelected?: boolean, selected?: boolean): HTMLOptionElement;
}

interface OptionalEffectTiming {
  delay?: number;
  direction?: PlaybackDirection;
  duration?: number | string;
  easing?: string;
  endDelay?: number;
  fill?: FillMode;
  iterationStart?: number;
  iterations?: number;
}

orientation: string | number

type OrientationLockType = "any" | "landscape" | "landscape-primary" | "landscape-secondary" | "natural" | "portrait" | "portrait-primary" | "portrait-secondary";

type OrientationType = "landscape-primary" | "landscape-secondary" | "portrait-primary" | "portrait-secondary";

origin: string

OscillatorNode: {
  prototype: OscillatorNode;
  new(context: BaseAudioContext, options?: OscillatorOptions): OscillatorNode;
}

interface OscillatorOptions extends AudioNodeOptions {
  detune?: number;
  frequency?: number;
  periodicWave?: PeriodicWave;
  type?: OscillatorType;
}

type OscillatorType = "custom" | "sawtooth" | "sine" | "square" | "triangle";

outerHeight: number

outerWidth: number

OverconstrainedError: {
  prototype: OverconstrainedError;
  new(): OverconstrainedError;
}

OverflowEvent: {
  prototype: OverflowEvent;
  new(): OverflowEvent;
  readonly BOTH: number;
  readonly HORIZONTAL: number;
  readonly VERTICAL: number;
}

type OverSampleType = "2x" | "4x" | "none";

PageTransitionEvent: {
  prototype: PageTransitionEvent;
  new(type: string, eventInitDict?: PageTransitionEventInit): PageTransitionEvent;
}

interface PageTransitionEventInit extends EventInit {
  persisted?: boolean;
}

pageXOffset: number

pageYOffset: number

PannerNode: {
  prototype: PannerNode;
  new(context: BaseAudioContext, options?: PannerOptions): PannerNode;
}

interface PannerOptions extends AudioNodeOptions {
  coneInnerAngle?: number;
  coneOuterAngle?: number;
  coneOuterGain?: number;
  distanceModel?: DistanceModelType;
  maxDistance?: number;
  orientationX?: number;
  orientationY?: number;
  orientationZ?: number;
  panningModel?: PanningModelType;
  positionX?: number;
  positionY?: number;
  positionZ?: number;
  refDistance?: number;
  rolloffFactor?: number;
}

type PanningModelType = "HRTF" | "equalpower";

parent: IWindow

interface ParentNode {
  readonly childElementCount: number;
  /**
   * Returns the child elements.
   */
  readonly children: HTMLCollection;
  /**
   * Returns the first child that is an element, and null otherwise.
   */
  readonly firstElementChild: Element | null;
  /**
   * Returns the last child that is an element, and null otherwise.
   */
  readonly lastElementChild: Element | null;
  /**
   * Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.
   *
   * Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
   */
  append(...nodes: (Node | string)[]): void;
  /**
   * Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.
   *
   * Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
   */
  prepend(...nodes: (Node | string)[]): void;
  /**
   * Returns the first element that is a descendant of node that matches selectors.
   */
  querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
  querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
  querySelector<E extends Element = Element>(selectors: string): E | null;
  /**
   * Returns all element descendants of node that match selectors.
   */
  querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
  querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
  querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
}

Path2D: {
  prototype: Path2D;
  new(path?: Path2D | string): Path2D;
}

PaymentAddress: {
  prototype: PaymentAddress;
  new(): PaymentAddress;
}

type PaymentComplete = "fail" | "success" | "unknown";

interface PaymentCurrencyAmount {
  currency: string;
  currencySystem?: string;
  value: string;
}

interface PaymentDetailsBase {
  displayItems?: PaymentItem[];
  modifiers?: PaymentDetailsModifier[];
  shippingOptions?: PaymentShippingOption[];
}

interface PaymentDetailsInit extends PaymentDetailsBase {
  id?: string;
  total: PaymentItem;
}

interface PaymentDetailsModifier {
  additionalDisplayItems?: PaymentItem[];
  data?: any;
  supportedMethods: string | string[];
  total?: PaymentItem;
}

interface PaymentDetailsUpdate extends PaymentDetailsBase {
  error?: string;
  total?: PaymentItem;
}

interface PaymentItem {
  amount: PaymentCurrencyAmount;
  label: string;
  pending?: boolean;
}

interface PaymentMethodData {
  data?: any;
  supportedMethods: string | string[];
}

interface PaymentOptions {
  requestPayerEmail?: boolean;
  requestPayerName?: boolean;
  requestPayerPhone?: boolean;
  requestShipping?: boolean;
  shippingType?: string;
}

PaymentRequest: {
  prototype: PaymentRequest;
  new(methodData: PaymentMethodData[], details: PaymentDetailsInit, options?: PaymentOptions): PaymentRequest;
}

interface PaymentRequestEventMap {
  "shippingaddresschange": Event;
  "shippingoptionchange": Event;
}

PaymentRequestUpdateEvent: {
  prototype: PaymentRequestUpdateEvent;
  new(type: string, eventInitDict?: PaymentRequestUpdateEventInit): PaymentRequestUpdateEvent;
}

interface PaymentRequestUpdateEventInit extends EventInit {
}

PaymentResponse: {
  prototype: PaymentResponse;
  new(): PaymentResponse;
}

interface PaymentShippingOption {
  amount: PaymentCurrencyAmount;
  id: string;
  label: string;
  selected?: boolean;
}

type PaymentShippingType = "delivery" | "pickup" | "shipping";

interface Pbkdf2Params extends Algorithm {
  hash: HashAlgorithmIdentifier;
  iterations: number;
  salt: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

performance: Performance

Performance: {
  prototype: Performance;
  new(): Performance;
}

PerformanceEntry: {
  prototype: PerformanceEntry;
  new(): PerformanceEntry;
}

type PerformanceEntryList = PerformanceEntry[];

interface PerformanceEventMap {
  "resourcetimingbufferfull": Event;
}

PerformanceMark: {
  prototype: PerformanceMark;
  new(): PerformanceMark;
}

PerformanceMeasure: {
  prototype: PerformanceMeasure;
  new(): PerformanceMeasure;
}

PerformanceNavigation: {
  prototype: PerformanceNavigation;
  new(): PerformanceNavigation;
  readonly TYPE_BACK_FORWARD: number;
  readonly TYPE_NAVIGATE: number;
  readonly TYPE_RELOAD: number;
  readonly TYPE_RESERVED: number;
}

PerformanceNavigationTiming: {
  prototype: PerformanceNavigationTiming;
  new(): PerformanceNavigationTiming;
}

PerformanceObserver: {
  prototype: PerformanceObserver;
  new(callback: PerformanceObserverCallback): PerformanceObserver;
  readonly supportedEntryTypes: ReadonlyArray<string>;
}

interface PerformanceObserverCallback {
  (entries: PerformanceObserverEntryList, observer: PerformanceObserver): void;
}

PerformanceObserverEntryList: {
  prototype: PerformanceObserverEntryList;
  new(): PerformanceObserverEntryList;
}

interface PerformanceObserverInit {
  buffered?: boolean;
  entryTypes?: string[];
  type?: string;
}

PerformanceResourceTiming: {
  prototype: PerformanceResourceTiming;
  new(): PerformanceResourceTiming;
}

PerformanceTiming: {
  prototype: PerformanceTiming;
  new(): PerformanceTiming;
}

PerfWidgetExternal: {
  prototype: PerfWidgetExternal;
  new(): PerfWidgetExternal;
}

PeriodicWave: {
  prototype: PeriodicWave;
  new(context: BaseAudioContext, options?: PeriodicWaveOptions): PeriodicWave;
}

interface PeriodicWaveConstraints {
  disableNormalization?: boolean;
}

interface PeriodicWaveOptions extends PeriodicWaveConstraints {
  imag?: number[] | Float32Array;
  real?: number[] | Float32Array;
}

interface PermissionDescriptor {
  name: PermissionName;
}

type PermissionName = "accelerometer" | "ambient-light-sensor" | "background-sync" | "bluetooth" | "camera" | "clipboard" | "device-info" | "geolocation" | "gyroscope" | "magnetometer" | "microphone" | "midi" | "notifications" | "persistent-storage" | "push" | "speaker";

PermissionRequest: {
  prototype: PermissionRequest;
  new(): PermissionRequest;
}

PermissionRequestedEvent: {
  prototype: PermissionRequestedEvent;
  new(): PermissionRequestedEvent;
}

Permissions: {
  prototype: Permissions;
  new(): Permissions;
}

type PermissionState = "denied" | "granted" | "prompt";

PermissionStatus: {
  prototype: PermissionStatus;
  new(): PermissionStatus;
}

interface PermissionStatusEventMap {
  "change": Event;
}

personalbar: BarProp

interface PipeOptions {
  preventAbort?: boolean;
  preventCancel?: boolean;
  preventClose?: boolean;
  signal?: AbortSignal;
}

type PlaybackDirection = "alternate" | "alternate-reverse" | "normal" | "reverse";

Plugin: {
  prototype: Plugin;
  new(): Plugin;
}

PluginArray: {
  prototype: PluginArray;
  new(): PluginArray;
}

PointerEvent: {
  prototype: PointerEvent;
  new(type: string, eventInitDict?: PointerEventInit): PointerEvent;
}

interface PointerEventInit extends MouseEventInit {
  height?: number;
  isPrimary?: boolean;
  pointerId?: number;
  pointerType?: string;
  pressure?: number;
  tangentialPressure?: number;
  tiltX?: number;
  tiltY?: number;
  twist?: number;
  width?: number;
}

PopStateEvent: {
  prototype: PopStateEvent;
  new(type: string, eventInitDict?: PopStateEventInit): PopStateEvent;
}

interface PopStateEventInit extends EventInit {
  state?: any;
}

/** The position of the concerned device at a given time. The position, represented by a Coordinates object, comprehends the 2D position of the device, on a spheroid representing the Earth, but also its altitude and its speed. */
interface Position {
  readonly coords: Coordinates;
  readonly timestamp: number;
}

type PositionAlignSetting = "auto" | "center" | "line-left" | "line-right";

interface PositionCallback {
  (position: Position): void;
}

/** The reason of an error occurring when using the geolocating device. */
interface PositionError {
  readonly code: number;
  readonly message: string;
  readonly PERMISSION_DENIED: number;
  readonly POSITION_UNAVAILABLE: number;
  readonly TIMEOUT: number;
}

interface PositionErrorCallback {
  (positionError: PositionError): void;
}

interface PositionOptions {
  enableHighAccuracy?: boolean;
  maximumAge?: number;
  timeout?: number;
}

declare function postMessage(message: any, targetOrigin: string, transfer?: Transferable[]): void;

interface PostMessageOptions {
  transfer?: any[];
}

type PremultiplyAlpha = "default" | "none" | "premultiply";

declare function print(): void;

ProcessingInstruction: {
  prototype: ProcessingInstruction;
  new(): ProcessingInstruction;
}

ProgressEvent: {
  prototype: ProgressEvent;
  new(type: string, eventInitDict?: ProgressEventInit): ProgressEvent;
}

interface ProgressEventInit extends EventInit {
  lengthComputable?: boolean;
  loaded?: number;
  total?: number;
}

PromiseRejectionEvent: {
  prototype: PromiseRejectionEvent;
  new(type: string, eventInitDict: PromiseRejectionEventInit): PromiseRejectionEvent;
}

interface PromiseRejectionEventInit extends EventInit {
  promise: Promise<any>;
  reason?: any;
}

declare function prompt(message?: string, _default?: string): string | null;

interface PropertyIndexedKeyframes {
  composite?: CompositeOperationOrAuto | CompositeOperationOrAuto[];
  easing?: string | string[];
  offset?: number | (number | null)[];
  [property: string]: string | string[] | number | null | (number | null)[] | undefined;
}

PublicKeyCredential: {
  prototype: PublicKeyCredential;
  new(): PublicKeyCredential;
  isUserVerifyingPlatformAuthenticatorAvailable(): Promise<boolean>;
}

interface PublicKeyCredentialCreationOptions {
  attestation?: AttestationConveyancePreference;
  authenticatorSelection?: AuthenticatorSelectionCriteria;
  challenge: BufferSource;
  excludeCredentials?: PublicKeyCredentialDescriptor[];
  extensions?: AuthenticationExtensionsClientInputs;
  pubKeyCredParams: PublicKeyCredentialParameters[];
  rp: PublicKeyCredentialRpEntity;
  timeout?: number;
  user: PublicKeyCredentialUserEntity;
}

interface PublicKeyCredentialDescriptor {
  id: BufferSource;
  transports?: AuthenticatorTransport[];
  type: PublicKeyCredentialType;
}

interface PublicKeyCredentialEntity {
  icon?: string;
  name: string;
}

interface PublicKeyCredentialParameters {
  alg: COSEAlgorithmIdentifier;
  type: PublicKeyCredentialType;
}

interface PublicKeyCredentialRequestOptions {
  allowCredentials?: PublicKeyCredentialDescriptor[];
  challenge: BufferSource;
  extensions?: AuthenticationExtensionsClientInputs;
  rpId?: string;
  timeout?: number;
  userVerification?: UserVerificationRequirement;
}

interface PublicKeyCredentialRpEntity extends PublicKeyCredentialEntity {
  id?: string;
}

type PublicKeyCredentialType = "public-key";

interface PublicKeyCredentialUserEntity extends PublicKeyCredentialEntity {
  displayName: string;
  id: BufferSource;
}

type PushEncryptionKeyName = "auth" | "p256dh";

PushManager: {
  prototype: PushManager;
  new(): PushManager;
  readonly supportedContentEncodings: ReadonlyArray<string>;
}

interface PushPermissionDescriptor extends PermissionDescriptor {
  name: "push";
  userVisibleOnly?: boolean;
}

type PushPermissionState = "denied" | "granted" | "prompt";

PushSubscription: {
  prototype: PushSubscription;
  new(): PushSubscription;
}

interface PushSubscriptionJSON {
  endpoint?: string;
  expirationTime?: number | null;
  keys?: Record<string, string>;
}

PushSubscriptionOptions: {
  prototype: PushSubscriptionOptions;
  new(): PushSubscriptionOptions;
}

interface PushSubscriptionOptionsInit {
  applicationServerKey?: BufferSource | string | null;
  userVisibleOnly?: boolean;
}

declare function queueMicrotask(callback: VoidFunction): void;

interface QueuingStrategy<T = any> {
  highWaterMark?: number;
  size?: QueuingStrategySizeCallback<T>;
}

interface QueuingStrategySizeCallback<T = any> {
  (chunk: T): number;
}

RadioNodeList: {
  prototype: RadioNodeList;
  new(): RadioNodeList;
}

RandomSource: {
  prototype: RandomSource;
  new(): RandomSource;
}

Range: {
  prototype: Range;
  new(): Range;
  readonly END_TO_END: number;
  readonly END_TO_START: number;
  readonly START_TO_END: number;
  readonly START_TO_START: number;
  toString(): string;
}

interface ReadableByteStreamController {
  readonly byobRequest: ReadableStreamBYOBRequest | undefined;
  readonly desiredSize: number | null;
  close(): void;
  enqueue(chunk: ArrayBufferView): void;
  error(error?: any): void;
}

interface ReadableByteStreamControllerCallback {
  (controller: ReadableByteStreamController): void | PromiseLike<void>;
}

ReadableStream: {
  prototype: ReadableStream;
  new(underlyingSource: UnderlyingByteSource, strategy?: { highWaterMark?: number, size?: undefined }): ReadableStream<Uint8Array>;
  new<R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
}

interface ReadableStreamBYOBReader {
  readonly closed: Promise<void>;
  cancel(reason?: any): Promise<void>;
  read<T extends ArrayBufferView>(view: T): Promise<ReadableStreamReadResult<T>>;
  releaseLock(): void;
}

interface ReadableStreamBYOBRequest {
  readonly view: ArrayBufferView;
  respond(bytesWritten: number): void;
  respondWithNewView(view: ArrayBufferView): void;
}

interface ReadableStreamDefaultController<R = any> {
  readonly desiredSize: number | null;
  close(): void;
  enqueue(chunk: R): void;
  error(error?: any): void;
}

interface ReadableStreamDefaultControllerCallback<R> {
  (controller: ReadableStreamDefaultController<R>): void | PromiseLike<void>;
}

interface ReadableStreamDefaultReader<R = any> {
  readonly closed: Promise<void>;
  cancel(reason?: any): Promise<void>;
  read(): Promise<ReadableStreamReadResult<R>>;
  releaseLock(): void;
}

interface ReadableStreamErrorCallback {
  (reason: any): void | PromiseLike<void>;
}

interface ReadableStreamReadDoneResult<T> {
  done: true;
  value?: T;
}

ReadableStreamReader: {
  prototype: ReadableStreamReader;
  new(): ReadableStreamReader;
}

type ReadableStreamReadResult<T> = ReadableStreamReadValueResult<T> | ReadableStreamReadDoneResult<T>;

interface ReadableStreamReadValueResult<T> {
  done: false;
  value: T;
}

type ReadyState = "closed" | "ended" | "open";

type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";

interface RegistrationOptions {
  scope?: string;
  type?: WorkerType;
  updateViaCache?: ServiceWorkerUpdateViaCache;
}

/** @deprecated */
declare function releaseEvents(): void;

declare function removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;

type RenderingContext = CanvasRenderingContext2D | ImageBitmapRenderingContext | WebGLRenderingContext | WebGL2RenderingContext;

Request: {
  prototype: Request;
  new(input: RequestInfo, init?: RequestInit): Request;
}

declare function requestAnimationFrame(callback: FrameRequestCallback): number;

type RequestCache = "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";

type RequestCredentials = "include" | "omit" | "same-origin";

type RequestDestination = "" | "audio" | "audioworklet" | "document" | "embed" | "font" | "image" | "manifest" | "object" | "paintworklet" | "report" | "script" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt";

type RequestInfo = Request | string;

interface RequestInit {
  /**
   * A BodyInit object or null to set request's body.
   */
  body?: BodyInit | null;
  /**
   * A string indicating how the request will interact with the browser's cache to set request's cache.
   */
  cache?: RequestCache;
  /**
   * A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.
   */
  credentials?: RequestCredentials;
  /**
   * A Headers object, an object literal, or an array of two-item arrays to set request's headers.
   */
  headers?: HeadersInit;
  /**
   * A cryptographic hash of the resource to be fetched by request. Sets request's integrity.
   */
  integrity?: string;
  /**
   * A boolean to set request's keepalive.
   */
  keepalive?: boolean;
  /**
   * A string to set request's method.
   */
  method?: string;
  /**
   * A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.
   */
  mode?: RequestMode;
  /**
   * A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.
   */
  redirect?: RequestRedirect;
  /**
   * A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.
   */
  referrer?: string;
  /**
   * A referrer policy to set request's referrerPolicy.
   */
  referrerPolicy?: ReferrerPolicy;
  /**
   * An AbortSignal to set request's signal.
   */
  signal?: AbortSignal | null;
  /**
   * Can only be null. Used to disassociate request from any Window.
   */
  window?: any;
}

type RequestMode = "cors" | "navigate" | "no-cors" | "same-origin";

type RequestRedirect = "error" | "follow" | "manual";

declare function resizeBy(x: number, y: number): void;

type ResizeQuality = "high" | "low" | "medium" | "pixelated";

declare function resizeTo(width: number, height: number): void;

Response: {
  prototype: Response;
  new(body?: BodyInit | null, init?: ResponseInit): Response;
  error(): Response;
  redirect(url: string, status?: number): Response;
}

interface ResponseInit {
  headers?: HeadersInit;
  status?: number;
  statusText?: string;
}

type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";

interface RsaHashedImportParams extends Algorithm {
  hash: HashAlgorithmIdentifier;
}

interface RsaHashedKeyAlgorithm extends RsaKeyAlgorithm {
  hash: KeyAlgorithm;
}

interface RsaHashedKeyGenParams extends RsaKeyGenParams {
  hash: HashAlgorithmIdentifier;
}

interface RsaKeyAlgorithm extends KeyAlgorithm {
  modulusLength: number;
  publicExponent: BigInteger;
}

interface RsaKeyGenParams extends Algorithm {
  modulusLength: number;
  publicExponent: BigInteger;
}

interface RsaOaepParams extends Algorithm {
  label?: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

interface RsaOtherPrimesInfo {
  d?: string;
  r?: string;
  t?: string;
}

interface RsaPssParams extends Algorithm {
  saltLength: number;
}

interface RTCAnswerOptions extends RTCOfferAnswerOptions {
}

type RTCBundlePolicy = "balanced" | "max-bundle" | "max-compat";

RTCCertificate: {
  prototype: RTCCertificate;
  new(): RTCCertificate;
  getSupportedAlgorithms(): AlgorithmIdentifier[];
}

interface RTCCertificateExpiration {
  expires?: number;
}

interface RTCConfiguration {
  bundlePolicy?: RTCBundlePolicy;
  certificates?: RTCCertificate[];
  iceCandidatePoolSize?: number;
  iceServers?: RTCIceServer[];
  iceTransportPolicy?: RTCIceTransportPolicy;
  peerIdentity?: string;
  rtcpMuxPolicy?: RTCRtcpMuxPolicy;
}

RTCDataChannel: {
  prototype: RTCDataChannel;
  new(): RTCDataChannel;
}

RTCDataChannelEvent: {
  prototype: RTCDataChannelEvent;
  new(type: string, eventInitDict: RTCDataChannelEventInit): RTCDataChannelEvent;
}

interface RTCDataChannelEventInit extends EventInit {
  channel: RTCDataChannel;
}

interface RTCDataChannelEventMap {
  "bufferedamountlow": Event;
  "close": Event;
  "error": RTCErrorEvent;
  "message": MessageEvent;
  "open": Event;
}

interface RTCDataChannelInit {
  id?: number;
  maxPacketLifeTime?: number;
  maxRetransmits?: number;
  negotiated?: boolean;
  ordered?: boolean;
  priority?: RTCPriorityType;
  protocol?: string;
}

type RTCDataChannelState = "closed" | "closing" | "connecting" | "open";

type RTCDegradationPreference = "balanced" | "maintain-framerate" | "maintain-resolution";

interface RTCDtlsFingerprint {
  algorithm?: string;
  value?: string;
}

interface RTCDtlsParameters {
  fingerprints?: RTCDtlsFingerprint[];
  role?: RTCDtlsRole;
}

type RTCDtlsRole = "auto" | "client" | "server";

RTCDtlsTransport: {
  prototype: RTCDtlsTransport;
  new(): RTCDtlsTransport;
}

interface RTCDtlsTransportEventMap {
  "error": RTCErrorEvent;
  "statechange": Event;
}

type RTCDtlsTransportState = "closed" | "connected" | "connecting" | "failed" | "new";

RTCDtlsTransportStateChangedEvent: {
  prototype: RTCDtlsTransportStateChangedEvent;
  new(): RTCDtlsTransportStateChangedEvent;
}

RTCDtmfSender: {
  prototype: RTCDtmfSender;
  new(sender: RTCRtpSender): RTCDtmfSender;
}

RTCDTMFSender: {
  prototype: RTCDTMFSender;
  new(): RTCDTMFSender;
}

interface RTCDtmfSenderEventMap {
  "tonechange": RTCDTMFToneChangeEvent;
}

interface RTCDTMFSenderEventMap {
  "tonechange": RTCDTMFToneChangeEvent;
}

RTCDTMFToneChangeEvent: {
  prototype: RTCDTMFToneChangeEvent;
  new(type: string, eventInitDict: RTCDTMFToneChangeEventInit): RTCDTMFToneChangeEvent;
}

interface RTCDTMFToneChangeEventInit extends EventInit {
  tone: string;
}

type RTCDtxStatus = "disabled" | "enabled";

RTCError: {
  prototype: RTCError;
  new(init: RTCErrorInit, message?: string): RTCError;
}

type RTCErrorDetailType = "data-channel-failure" | "dtls-failure" | "fingerprint-failure" | "hardware-encoder-error" | "hardware-encoder-not-available" | "idp-bad-script-failure" | "idp-execution-failure" | "idp-load-failure" | "idp-need-login" | "idp-timeout" | "idp-tls-failure" | "idp-token-expired" | "idp-token-invalid" | "sctp-failure" | "sdp-syntax-error";

RTCErrorEvent: {
  prototype: RTCErrorEvent;
  new(type: string, eventInitDict: RTCErrorEventInit): RTCErrorEvent;
}

interface RTCErrorEventInit extends EventInit {
  error: RTCError;
}

interface RTCErrorInit {
  errorDetail: RTCErrorDetailType;
  httpRequestStatusCode?: number;
  receivedAlert?: number;
  sctpCauseCode?: number;
  sdpLineNumber?: number;
  sentAlert?: number;
}

RTCIceCandidate: {
  prototype: RTCIceCandidate;
  new(candidateInitDict?: RTCIceCandidateInit): RTCIceCandidate;
}

interface RTCIceCandidateAttributes extends RTCStats {
  addressSourceUrl?: string;
  candidateType?: RTCStatsIceCandidateType;
  ipAddress?: string;
  portNumber?: number;
  priority?: number;
  transport?: string;
}

interface RTCIceCandidateComplete {
}

interface RTCIceCandidateDictionary {
  foundation?: string;
  ip?: string;
  msMTurnSessionId?: string;
  port?: number;
  priority?: number;
  protocol?: RTCIceProtocol;
  relatedAddress?: string;
  relatedPort?: number;
  tcpType?: RTCIceTcpCandidateType;
  type?: RTCIceCandidateType;
}

interface RTCIceCandidateInit {
  candidate?: string;
  sdpMLineIndex?: number | null;
  sdpMid?: string | null;
  usernameFragment?: string | null;
}

interface RTCIceCandidatePair {
  local?: RTCIceCandidate;
  remote?: RTCIceCandidate;
}

RTCIceCandidatePairChangedEvent: {
  prototype: RTCIceCandidatePairChangedEvent;
  new(): RTCIceCandidatePairChangedEvent;
}

interface RTCIceCandidatePairStats extends RTCStats {
  availableIncomingBitrate?: number;
  availableOutgoingBitrate?: number;
  bytesReceived?: number;
  bytesSent?: number;
  localCandidateId?: string;
  nominated?: boolean;
  priority?: number;
  readable?: boolean;
  remoteCandidateId?: string;
  roundTripTime?: number;
  state?: RTCStatsIceCandidatePairState;
  transportId?: string;
  writable?: boolean;
}

type RTCIceCandidateType = "host" | "prflx" | "relay" | "srflx";

type RTCIceComponent = "rtcp" | "rtp";

type RTCIceConnectionState = "checking" | "closed" | "completed" | "connected" | "disconnected" | "failed" | "new";

type RTCIceCredentialType = "oauth" | "password";

type RTCIceGatherCandidate = RTCIceCandidateDictionary | RTCIceCandidateComplete;

RTCIceGatherer: {
  prototype: RTCIceGatherer;
  new(options: RTCIceGatherOptions): RTCIceGatherer;
}

RTCIceGathererEvent: {
  prototype: RTCIceGathererEvent;
  new(): RTCIceGathererEvent;
}

interface RTCIceGathererEventMap {
  "error": Event;
  "localcandidate": RTCIceGathererEvent;
}

type RTCIceGathererState = "complete" | "gathering" | "new";

type RTCIceGatheringState = "complete" | "gathering" | "new";

interface RTCIceGatherOptions {
  gatherPolicy?: RTCIceGatherPolicy;
  iceservers?: RTCIceServer[];
}

type RTCIceGatherPolicy = "all" | "nohost" | "relay";

interface RTCIceParameters {
  password?: string;
  usernameFragment?: string;
}

type RTCIceProtocol = "tcp" | "udp";

type RTCIceRole = "controlled" | "controlling" | "unknown";

interface RTCIceServer {
  credential?: string | RTCOAuthCredential;
  credentialType?: RTCIceCredentialType;
  urls: string | string[];
  username?: string;
}

type RTCIceTcpCandidateType = "active" | "passive" | "so";

RTCIceTransport: {
  prototype: RTCIceTransport;
  new(): RTCIceTransport;
}

interface RTCIceTransportEventMap {
  "gatheringstatechange": Event;
  "selectedcandidatepairchange": Event;
  "statechange": Event;
}

type RTCIceTransportPolicy = "all" | "relay";

type RTCIceTransportState = "checking" | "closed" | "completed" | "connected" | "disconnected" | "failed" | "new";

RTCIceTransportStateChangedEvent: {
  prototype: RTCIceTransportStateChangedEvent;
  new(): RTCIceTransportStateChangedEvent;
}

RTCIdentityAssertion: {
  prototype: RTCIdentityAssertion;
  new(idp: string, name: string): RTCIdentityAssertion;
}

interface RTCIdentityProviderOptions {
  peerIdentity?: string;
  protocol?: string;
  usernameHint?: string;
}

interface RTCInboundRTPStreamStats extends RTCRTPStreamStats {
  bytesReceived?: number;
  fractionLost?: number;
  jitter?: number;
  packetsLost?: number;
  packetsReceived?: number;
}

interface RTCMediaStreamTrackStats extends RTCStats {
  audioLevel?: number;
  echoReturnLoss?: number;
  echoReturnLossEnhancement?: number;
  frameHeight?: number;
  frameWidth?: number;
  framesCorrupted?: number;
  framesDecoded?: number;
  framesDropped?: number;
  framesPerSecond?: number;
  framesReceived?: number;
  framesSent?: number;
  remoteSource?: boolean;
  ssrcIds?: string[];
  trackIdentifier?: string;
}

interface RTCOAuthCredential {
  accessToken: string;
  macKey: string;
}

interface RTCOfferAnswerOptions {
  voiceActivityDetection?: boolean;
}

interface RTCOfferOptions extends RTCOfferAnswerOptions {
  iceRestart?: boolean;
  offerToReceiveAudio?: boolean;
  offerToReceiveVideo?: boolean;
}

interface RTCOutboundRTPStreamStats extends RTCRTPStreamStats {
  bytesSent?: number;
  packetsSent?: number;
  roundTripTime?: number;
  targetBitrate?: number;
}

RTCPeerConnection: {
  prototype: RTCPeerConnection;
  new(configuration?: RTCConfiguration): RTCPeerConnection;
  generateCertificate(keygenAlgorithm: AlgorithmIdentifier): Promise<RTCCertificate>;
  getDefaultIceServers(): RTCIceServer[];
}

interface RTCPeerConnectionErrorCallback {
  (error: DOMException): void;
}

interface RTCPeerConnectionEventMap {
  "connectionstatechange": Event;
  "datachannel": RTCDataChannelEvent;
  "icecandidate": RTCPeerConnectionIceEvent;
  "icecandidateerror": RTCPeerConnectionIceErrorEvent;
  "iceconnectionstatechange": Event;
  "icegatheringstatechange": Event;
  "negotiationneeded": Event;
  "signalingstatechange": Event;
  "statsended": RTCStatsEvent;
  "track": RTCTrackEvent;
}

RTCPeerConnectionIceErrorEvent: {
  prototype: RTCPeerConnectionIceErrorEvent;
  new(type: string, eventInitDict: RTCPeerConnectionIceErrorEventInit): RTCPeerConnectionIceErrorEvent;
}

interface RTCPeerConnectionIceErrorEventInit extends EventInit {
  errorCode: number;
  hostCandidate?: string;
  statusText?: string;
  url?: string;
}

RTCPeerConnectionIceEvent: {
  prototype: RTCPeerConnectionIceEvent;
  new(type: string, eventInitDict?: RTCPeerConnectionIceEventInit): RTCPeerConnectionIceEvent;
}

interface RTCPeerConnectionIceEventInit extends EventInit {
  candidate?: RTCIceCandidate | null;
  url?: string | null;
}

type RTCPeerConnectionState = "closed" | "connected" | "connecting" | "disconnected" | "failed" | "new";

type RTCPriorityType = "high" | "low" | "medium" | "very-low";

interface RTCRtcpFeedback {
  parameter?: string;
  type?: string;
}

type RTCRtcpMuxPolicy = "negotiate" | "require";

interface RTCRtcpParameters {
  cname?: string;
  reducedSize?: boolean;
}

interface RTCRtpCapabilities {
  codecs: RTCRtpCodecCapability[];
  headerExtensions: RTCRtpHeaderExtensionCapability[];
}

interface RTCRtpCodecCapability {
  channels?: number;
  clockRate: number;
  mimeType: string;
  sdpFmtpLine?: string;
}

interface RTCRtpCodecParameters {
  channels?: number;
  clockRate: number;
  mimeType: string;
  payloadType: number;
  sdpFmtpLine?: string;
}

interface RTCRtpCodingParameters {
  rid?: string;
}

interface RTCRtpContributingSource {
  audioLevel?: number;
  rtpTimestamp: number;
  source: number;
  timestamp: number;
}

interface RTCRtpDecodingParameters extends RTCRtpCodingParameters {
}

interface RTCRtpEncodingParameters extends RTCRtpCodingParameters {
  active?: boolean;
  codecPayloadType?: number;
  dtx?: RTCDtxStatus;
  maxBitrate?: number;
  maxFramerate?: number;
  ptime?: number;
  scaleResolutionDownBy?: number;
}

interface RTCRtpFecParameters {
  mechanism?: string;
  ssrc?: number;
}

interface RTCRtpHeaderExtension {
  kind?: string;
  preferredEncrypt?: boolean;
  preferredId?: number;
  uri?: string;
}

interface RTCRtpHeaderExtensionCapability {
  uri?: string;
}

interface RTCRtpHeaderExtensionParameters {
  encrypted?: boolean;
  id: number;
  uri: string;
}

interface RTCRtpParameters {
  codecs: RTCRtpCodecParameters[];
  headerExtensions: RTCRtpHeaderExtensionParameters[];
  rtcp: RTCRtcpParameters;
}

interface RTCRtpReceiveParameters extends RTCRtpParameters {
  encodings: RTCRtpDecodingParameters[];
}

RTCRtpReceiver: {
  prototype: RTCRtpReceiver;
  new(): RTCRtpReceiver;
  getCapabilities(kind: string): RTCRtpCapabilities | null;
}

interface RTCRtpRtxParameters {
  ssrc?: number;
}

RTCRtpSender: {
  prototype: RTCRtpSender;
  new(): RTCRtpSender;
  getCapabilities(kind: string): RTCRtpCapabilities | null;
}

interface RTCRtpSendParameters extends RTCRtpParameters {
  degradationPreference?: RTCDegradationPreference;
  encodings: RTCRtpEncodingParameters[];
  priority?: RTCPriorityType;
  transactionId: string;
}

interface RTCRTPStreamStats extends RTCStats {
  associateStatsId?: string;
  codecId?: string;
  firCount?: number;
  isRemote?: boolean;
  mediaTrackId?: string;
  mediaType?: string;
  nackCount?: number;
  pliCount?: number;
  sliCount?: number;
  ssrc?: string;
  transportId?: string;
}

interface RTCRtpSynchronizationSource extends RTCRtpContributingSource {
  voiceActivityFlag?: boolean;
}

RTCRtpTransceiver: {
  prototype: RTCRtpTransceiver;
  new(): RTCRtpTransceiver;
}

type RTCRtpTransceiverDirection = "inactive" | "recvonly" | "sendonly" | "sendrecv" | "stopped";

interface RTCRtpTransceiverInit {
  direction?: RTCRtpTransceiverDirection;
  sendEncodings?: RTCRtpEncodingParameters[];
  streams?: MediaStream[];
}

interface RTCRtpUnhandled {
  muxId?: string;
  payloadType?: number;
  ssrc?: number;
}

RTCSctpTransport: {
  prototype: RTCSctpTransport;
  new(): RTCSctpTransport;
}

interface RTCSctpTransportEventMap {
  "statechange": Event;
}

type RTCSctpTransportState = "closed" | "connected" | "connecting";

type RTCSdpType = "answer" | "offer" | "pranswer" | "rollback";

RTCSessionDescription: {
  prototype: RTCSessionDescription;
  new(descriptionInitDict?: RTCSessionDescriptionInit): RTCSessionDescription;
}

interface RTCSessionDescriptionCallback {
  (description: RTCSessionDescriptionInit): void;
}

interface RTCSessionDescriptionInit {
  sdp?: string;
  type?: RTCSdpType;
}

type RTCSignalingState = "closed" | "have-local-offer" | "have-local-pranswer" | "have-remote-offer" | "have-remote-pranswer" | "stable";

interface RTCSrtpKeyParam {
  keyMethod?: string;
  keySalt?: string;
  lifetime?: string;
  mkiLength?: number;
  mkiValue?: number;
}

interface RTCSrtpSdesParameters {
  cryptoSuite?: string;
  keyParams?: RTCSrtpKeyParam[];
  sessionParams?: string[];
  tag?: number;
}

RTCSrtpSdesTransport: {
  prototype: RTCSrtpSdesTransport;
  new(transport: RTCIceTransport, encryptParameters: RTCSrtpSdesParameters, decryptParameters: RTCSrtpSdesParameters): RTCSrtpSdesTransport;
  getLocalParameters(): RTCSrtpSdesParameters[];
}

interface RTCSrtpSdesTransportEventMap {
  "error": Event;
}

RTCSsrcConflictEvent: {
  prototype: RTCSsrcConflictEvent;
  new(): RTCSsrcConflictEvent;
}

interface RTCSsrcRange {
  max?: number;
  min?: number;
}

interface RTCStats {
  id: string;
  timestamp: number;
  type: RTCStatsType;
}

interface RTCStatsCallback {
  (report: RTCStatsReport): void;
}

RTCStatsEvent: {
  prototype: RTCStatsEvent;
  new(type: string, eventInitDict: RTCStatsEventInit): RTCStatsEvent;
}

interface RTCStatsEventInit extends EventInit {
  report: RTCStatsReport;
}

type RTCStatsIceCandidatePairState = "cancelled" | "failed" | "frozen" | "inprogress" | "succeeded" | "waiting";

type RTCStatsIceCandidateType = "host" | "peerreflexive" | "relayed" | "serverreflexive";

RTCStatsProvider: {
  prototype: RTCStatsProvider;
  new(): RTCStatsProvider;
}

RTCStatsReport: {
  prototype: RTCStatsReport;
  new(): RTCStatsReport;
}

type RTCStatsType = "candidatepair" | "datachannel" | "inboundrtp" | "localcandidate" | "outboundrtp" | "remotecandidate" | "session" | "track" | "transport";

RTCTrackEvent: {
  prototype: RTCTrackEvent;
  new(type: string, eventInitDict: RTCTrackEventInit): RTCTrackEvent;
}

interface RTCTrackEventInit extends EventInit {
  receiver: RTCRtpReceiver;
  streams?: MediaStream[];
  track: MediaStreamTrack;
  transceiver: RTCRtpTransceiver;
}

type RTCTransport = RTCDtlsTransport | RTCSrtpSdesTransport;

interface RTCTransportStats extends RTCStats {
  activeConnection?: boolean;
  bytesReceived?: number;
  bytesSent?: number;
  localCertificateId?: string;
  remoteCertificateId?: string;
  rtcpTransportStatsId?: string;
  selectedCandidatePairId?: string;
}

RuntimeError: {
      prototype: RuntimeError;
      new(): RuntimeError;
}

ScopedCredential: {
  prototype: ScopedCredential;
  new(): ScopedCredential;
}

interface ScopedCredentialDescriptor {
  id: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null;
  transports?: Transport[];
  type: ScopedCredentialType;
}

ScopedCredentialInfo: {
  prototype: ScopedCredentialInfo;
  new(): ScopedCredentialInfo;
}

interface ScopedCredentialOptions {
  excludeList?: ScopedCredentialDescriptor[];
  extensions?: WebAuthnExtensions;
  rpId?: string;
  timeoutSeconds?: number;
}

interface ScopedCredentialParameters {
  algorithm: string | Algorithm;
  type: ScopedCredentialType;
}

type ScopedCredentialType = "ScopedCred";

screen: Screen

Screen: {
  prototype: Screen;
  new(): Screen;
}

screenLeft: number

ScreenOrientation: {
  prototype: ScreenOrientation;
  new(): ScreenOrientation;
}

interface ScreenOrientationEventMap {
  "change": Event;
}

screenTop: number

screenX: number

screenY: number

ScriptProcessorNode: {
  prototype: ScriptProcessorNode;
  new(): ScriptProcessorNode;
}

interface ScriptProcessorNodeEventMap {
  "audioprocess": AudioProcessingEvent;
}

declare function scroll(x: number, y: number): void;

scrollbars: BarProp

type ScrollBehavior = "auto" | "smooth";

declare function scrollBy(x: number, y: number): void;

interface ScrollIntoViewOptions extends ScrollOptions {
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}

type ScrollLogicalPosition = "center" | "end" | "nearest" | "start";

interface ScrollOptions {
  behavior?: ScrollBehavior;
}

type ScrollRestoration = "auto" | "manual";

type ScrollSetting = "" | "up";

declare function scrollTo(x: number, y: number): void;

interface ScrollToOptions extends ScrollOptions {
  left?: number;
  top?: number;
}

scrollX: number

scrollY: number

SecurityPolicyViolationEvent: {
  prototype: SecurityPolicyViolationEvent;
  new(type: string, eventInitDict?: SecurityPolicyViolationEventInit): SecurityPolicyViolationEvent;
}

interface SecurityPolicyViolationEventInit extends EventInit {
  blockedURI?: string;
  columnNumber?: number;
  documentURI?: string;
  effectiveDirective?: string;
  lineNumber?: number;
  originalPolicy?: string;
  referrer?: string;
  sourceFile?: string;
  statusCode?: number;
  violatedDirective?: string;
}

Selection: {
  prototype: Selection;
  new(): Selection;
  toString(): string;
}

type SelectionMode = "end" | "preserve" | "select" | "start";

self: IWindow & typeof globalThis

ServiceUIFrameContext: ServiceUIFrameContext

ServiceWorker: {
  prototype: ServiceWorker;
  new(): ServiceWorker;
}

ServiceWorkerContainer: {
  prototype: ServiceWorkerContainer;
  new(): ServiceWorkerContainer;
}

interface ServiceWorkerContainerEventMap {
  "controllerchange": Event;
  "message": MessageEvent;
  "messageerror": MessageEvent;
}

interface ServiceWorkerEventMap extends AbstractWorkerEventMap {
  "statechange": Event;
}

ServiceWorkerMessageEvent: {
  prototype: ServiceWorkerMessageEvent;
  new(type: string, eventInitDict?: ServiceWorkerMessageEventInit): ServiceWorkerMessageEvent;
}

interface ServiceWorkerMessageEventInit extends EventInit {
  data?: any;
  lastEventId?: string;
  origin?: string;
  ports?: MessagePort[] | null;
  source?: ServiceWorker | MessagePort | null;
}

ServiceWorkerRegistration: {
  prototype: ServiceWorkerRegistration;
  new(): ServiceWorkerRegistration;
}

interface ServiceWorkerRegistrationEventMap {
  "updatefound": Event;
}

type ServiceWorkerState = "activated" | "activating" | "installed" | "installing" | "parsed" | "redundant";

type ServiceWorkerUpdateViaCache = "all" | "imports" | "none";

sessionStorage: Storage

declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;

declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;

ShadowRoot: {
  prototype: ShadowRoot;
  new(): ShadowRoot;
}

interface ShadowRootInit {
  delegatesFocus?: boolean;
  mode: ShadowRootMode;
}

type ShadowRootMode = "closed" | "open";

interface ShareData {
  text?: string;
  title?: string;
  url?: string;
}

SharedWorker: {
  prototype: SharedWorker;
  new(scriptURL: string, options?: string | WorkerOptions): SharedWorker;
}

interface Slottable {
  readonly assignedSlot: HTMLSlotElement | null;
}

SourceBuffer: {
  prototype: SourceBuffer;
  new(): SourceBuffer;
}

interface SourceBufferEventMap {
  "abort": Event;
  "error": Event;
  "update": Event;
  "updateend": Event;
  "updatestart": Event;
}

SourceBufferList: {
  prototype: SourceBufferList;
  new(): SourceBufferList;
}

interface SourceBufferListEventMap {
  "addsourcebuffer": Event;
  "removesourcebuffer": Event;
}

SpeechGrammar: {
  prototype: SpeechGrammar;
  new(): SpeechGrammar;
}

SpeechGrammarList: {
  prototype: SpeechGrammarList;
  new(): SpeechGrammarList;
}

SpeechRecognition: {
  prototype: SpeechRecognition;
  new(): SpeechRecognition;
}

SpeechRecognitionAlternative: {
  prototype: SpeechRecognitionAlternative;
  new(): SpeechRecognitionAlternative;
}

SpeechRecognitionEvent: {
  prototype: SpeechRecognitionEvent;
  new(): SpeechRecognitionEvent;
}

interface SpeechRecognitionEventMap {
  "audioend": Event;
  "audiostart": Event;
  "end": Event;
  "error": ErrorEvent;
  "nomatch": SpeechRecognitionEvent;
  "result": SpeechRecognitionEvent;
  "soundend": Event;
  "soundstart": Event;
  "speechend": Event;
  "speechstart": Event;
  "start": Event;
}

SpeechRecognitionResult: {
  prototype: SpeechRecognitionResult;
  new(): SpeechRecognitionResult;
}

SpeechRecognitionResultList: {
  prototype: SpeechRecognitionResultList;
  new(): SpeechRecognitionResultList;
}

speechSynthesis: SpeechSynthesis

SpeechSynthesis: {
  prototype: SpeechSynthesis;
  new(): SpeechSynthesis;
}

type SpeechSynthesisErrorCode = "audio-busy" | "audio-hardware" | "canceled" | "interrupted" | "invalid-argument" | "language-unavailable" | "network" | "not-allowed" | "synthesis-failed" | "synthesis-unavailable" | "text-too-long" | "voice-unavailable";

SpeechSynthesisErrorEvent: {
  prototype: SpeechSynthesisErrorEvent;
  new(type: string, eventInitDict: SpeechSynthesisErrorEventInit): SpeechSynthesisErrorEvent;
}

interface SpeechSynthesisErrorEventInit extends SpeechSynthesisEventInit {
  error: SpeechSynthesisErrorCode;
}

SpeechSynthesisEvent: {
  prototype: SpeechSynthesisEvent;
  new(type: string, eventInitDict: SpeechSynthesisEventInit): SpeechSynthesisEvent;
}

interface SpeechSynthesisEventInit extends EventInit {
  charIndex?: number;
  charLength?: number;
  elapsedTime?: number;
  name?: string;
  utterance: SpeechSynthesisUtterance;
}

interface SpeechSynthesisEventMap {
  "voiceschanged": Event;
}

SpeechSynthesisUtterance: {
  prototype: SpeechSynthesisUtterance;
  new(text?: string): SpeechSynthesisUtterance;
}

interface SpeechSynthesisUtteranceEventMap {
  "boundary": SpeechSynthesisEvent;
  "end": SpeechSynthesisEvent;
  "error": SpeechSynthesisErrorEvent;
  "mark": SpeechSynthesisEvent;
  "pause": SpeechSynthesisEvent;
  "resume": SpeechSynthesisEvent;
  "start": SpeechSynthesisEvent;
}

SpeechSynthesisVoice: {
  prototype: SpeechSynthesisVoice;
  new(): SpeechSynthesisVoice;
}

StaticRange: {
  prototype: StaticRange;
  new(init: StaticRangeInit): StaticRange;
}

interface StaticRangeInit {
  endContainer: Node;
  endOffset: number;
  startContainer: Node;
  startOffset: number;
}

status: string

statusbar: BarProp

StereoPannerNode: {
  prototype: StereoPannerNode;
  new(context: BaseAudioContext, options?: StereoPannerOptions): StereoPannerNode;
}

interface StereoPannerOptions extends AudioNodeOptions {
  pan?: number;
}

declare function stop(): void;

Storage: {
  prototype: Storage;
  new(): Storage;
}

interface StorageEstimate {
  quota?: number;
  usage?: number;
}

StorageEvent: {
  prototype: StorageEvent;
  new(type: string, eventInitDict?: StorageEventInit): StorageEvent;
}

interface StorageEventInit extends EventInit {
  key?: string | null;
  newValue?: string | null;
  oldValue?: string | null;
  storageArea?: Storage | null;
  url?: string;
}

interface StoreExceptionsInformation extends ExceptionInformation {
  detailURI?: string | null;
  explanationString?: string | null;
  siteName?: string | null;
}

interface StoreSiteSpecificExceptionsInformation extends StoreExceptionsInformation {
  arrayOfDomainStrings?: string[];
}

styleMedia: StyleMedia

StyleMedia: {
  prototype: StyleMedia;
  new(): StyleMedia;
}

StyleSheet: {
  prototype: StyleSheet;
  new(): StyleSheet;
}

StyleSheetList: {
  prototype: StyleSheetList;
  new(): StyleSheetList;
}

SubtleCrypto: {
  prototype: SubtleCrypto;
  new(): SubtleCrypto;
}

function supports(conditionText: string): boolean;

SVGAElement: {
  prototype: SVGAElement;
  new(): SVGAElement;
}

SVGAngle: {
  prototype: SVGAngle;
  new(): SVGAngle;
  readonly SVG_ANGLETYPE_DEG: number;
  readonly SVG_ANGLETYPE_GRAD: number;
  readonly SVG_ANGLETYPE_RAD: number;
  readonly SVG_ANGLETYPE_UNKNOWN: number;
  readonly SVG_ANGLETYPE_UNSPECIFIED: number;
}

SVGAnimatedAngle: {
  prototype: SVGAnimatedAngle;
  new(): SVGAnimatedAngle;
}

SVGAnimatedBoolean: {
  prototype: SVGAnimatedBoolean;
  new(): SVGAnimatedBoolean;
}

SVGAnimatedEnumeration: {
  prototype: SVGAnimatedEnumeration;
  new(): SVGAnimatedEnumeration;
}

SVGAnimatedInteger: {
  prototype: SVGAnimatedInteger;
  new(): SVGAnimatedInteger;
}

SVGAnimatedLength: {
  prototype: SVGAnimatedLength;
  new(): SVGAnimatedLength;
}

SVGAnimatedLengthList: {
  prototype: SVGAnimatedLengthList;
  new(): SVGAnimatedLengthList;
}

SVGAnimatedNumber: {
  prototype: SVGAnimatedNumber;
  new(): SVGAnimatedNumber;
}

SVGAnimatedNumberList: {
  prototype: SVGAnimatedNumberList;
  new(): SVGAnimatedNumberList;
}

interface SVGAnimatedPoints {
  readonly animatedPoints: SVGPointList;
  readonly points: SVGPointList;
}

SVGAnimatedPreserveAspectRatio: {
  prototype: SVGAnimatedPreserveAspectRatio;
  new(): SVGAnimatedPreserveAspectRatio;
}

SVGAnimatedRect: {
  prototype: SVGAnimatedRect;
  new(): SVGAnimatedRect;
}

SVGAnimatedString: {
  prototype: SVGAnimatedString;
  new(): SVGAnimatedString;
}

SVGAnimatedTransformList: {
  prototype: SVGAnimatedTransformList;
  new(): SVGAnimatedTransformList;
}

SVGAnimateElement: {
  prototype: SVGAnimateElement;
  new(): SVGAnimateElement;
}

SVGAnimateMotionElement: {
  prototype: SVGAnimateMotionElement;
  new(): SVGAnimateMotionElement;
}

SVGAnimateTransformElement: {
  prototype: SVGAnimateTransformElement;
  new(): SVGAnimateTransformElement;
}

SVGAnimationElement: {
  prototype: SVGAnimationElement;
  new(): SVGAnimationElement;
}

interface SVGBoundingBoxOptions {
  clipped?: boolean;
  fill?: boolean;
  markers?: boolean;
  stroke?: boolean;
}

SVGCircleElement: {
  prototype: SVGCircleElement;
  new(): SVGCircleElement;
}

SVGClipPathElement: {
  prototype: SVGClipPathElement;
  new(): SVGClipPathElement;
}

SVGComponentTransferFunctionElement: {
  prototype: SVGComponentTransferFunctionElement;
  new(): SVGComponentTransferFunctionElement;
  readonly SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
  readonly SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
  readonly SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
  readonly SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
  readonly SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
  readonly SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
}

SVGCursorElement: {
  prototype: SVGCursorElement;
  new(): SVGCursorElement;
}

SVGDefsElement: {
  prototype: SVGDefsElement;
  new(): SVGDefsElement;
}

SVGDescElement: {
  prototype: SVGDescElement;
  new(): SVGDescElement;
}

SVGElement: {
  prototype: SVGElement;
  new(): SVGElement;
}

interface SVGElementEventMap extends ElementEventMap, GlobalEventHandlersEventMap, DocumentAndElementEventHandlersEventMap {
}

SVGElementInstance: {
  prototype: SVGElementInstance;
  new(): SVGElementInstance;
}

SVGElementInstanceList: {
  prototype: SVGElementInstanceList;
  new(): SVGElementInstanceList;
}

interface SVGElementTagNameMap {
  "a": SVGAElement;
  "circle": SVGCircleElement;
  "clipPath": SVGClipPathElement;
  "defs": SVGDefsElement;
  "desc": SVGDescElement;
  "ellipse": SVGEllipseElement;
  "feBlend": SVGFEBlendElement;
  "feColorMatrix": SVGFEColorMatrixElement;
  "feComponentTransfer": SVGFEComponentTransferElement;
  "feComposite": SVGFECompositeElement;
  "feConvolveMatrix": SVGFEConvolveMatrixElement;
  "feDiffuseLighting": SVGFEDiffuseLightingElement;
  "feDisplacementMap": SVGFEDisplacementMapElement;
  "feDistantLight": SVGFEDistantLightElement;
  "feFlood": SVGFEFloodElement;
  "feFuncA": SVGFEFuncAElement;
  "feFuncB": SVGFEFuncBElement;
  "feFuncG": SVGFEFuncGElement;
  "feFuncR": SVGFEFuncRElement;
  "feGaussianBlur": SVGFEGaussianBlurElement;
  "feImage": SVGFEImageElement;
  "feMerge": SVGFEMergeElement;
  "feMergeNode": SVGFEMergeNodeElement;
  "feMorphology": SVGFEMorphologyElement;
  "feOffset": SVGFEOffsetElement;
  "fePointLight": SVGFEPointLightElement;
  "feSpecularLighting": SVGFESpecularLightingElement;
  "feSpotLight": SVGFESpotLightElement;
  "feTile": SVGFETileElement;
  "feTurbulence": SVGFETurbulenceElement;
  "filter": SVGFilterElement;
  "foreignObject": SVGForeignObjectElement;
  "g": SVGGElement;
  "image": SVGImageElement;
  "line": SVGLineElement;
  "linearGradient": SVGLinearGradientElement;
  "marker": SVGMarkerElement;
  "mask": SVGMaskElement;
  "metadata": SVGMetadataElement;
  "path": SVGPathElement;
  "pattern": SVGPatternElement;
  "polygon": SVGPolygonElement;
  "polyline": SVGPolylineElement;
  "radialGradient": SVGRadialGradientElement;
  "rect": SVGRectElement;
  "script": SVGScriptElement;
  "stop": SVGStopElement;
  "style": SVGStyleElement;
  "svg": SVGSVGElement;
  "switch": SVGSwitchElement;
  "symbol": SVGSymbolElement;
  "text": SVGTextElement;
  "textPath": SVGTextPathElement;
  "title": SVGTitleElement;
  "tspan": SVGTSpanElement;
  "use": SVGUseElement;
  "view": SVGViewElement;
}

SVGEllipseElement: {
  prototype: SVGEllipseElement;
  new(): SVGEllipseElement;
}

SVGFEBlendElement: {
  prototype: SVGFEBlendElement;
  new(): SVGFEBlendElement;
  readonly SVG_FEBLEND_MODE_COLOR: number;
  readonly SVG_FEBLEND_MODE_COLOR_BURN: number;
  readonly SVG_FEBLEND_MODE_COLOR_DODGE: number;
  readonly SVG_FEBLEND_MODE_DARKEN: number;
  readonly SVG_FEBLEND_MODE_DIFFERENCE: number;
  readonly SVG_FEBLEND_MODE_EXCLUSION: number;
  readonly SVG_FEBLEND_MODE_HARD_LIGHT: number;
  readonly SVG_FEBLEND_MODE_HUE: number;
  readonly SVG_FEBLEND_MODE_LIGHTEN: number;
  readonly SVG_FEBLEND_MODE_LUMINOSITY: number;
  readonly SVG_FEBLEND_MODE_MULTIPLY: number;
  readonly SVG_FEBLEND_MODE_NORMAL: number;
  readonly SVG_FEBLEND_MODE_OVERLAY: number;
  readonly SVG_FEBLEND_MODE_SATURATION: number;
  readonly SVG_FEBLEND_MODE_SCREEN: number;
  readonly SVG_FEBLEND_MODE_SOFT_LIGHT: number;
  readonly SVG_FEBLEND_MODE_UNKNOWN: number;
}

SVGFEColorMatrixElement: {
  prototype: SVGFEColorMatrixElement;
  new(): SVGFEColorMatrixElement;
  readonly SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
  readonly SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
  readonly SVG_FECOLORMATRIX_TYPE_MATRIX: number;
  readonly SVG_FECOLORMATRIX_TYPE_SATURATE: number;
  readonly SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
}

SVGFEComponentTransferElement: {
  prototype: SVGFEComponentTransferElement;
  new(): SVGFEComponentTransferElement;
}

SVGFECompositeElement: {
  prototype: SVGFECompositeElement;
  new(): SVGFECompositeElement;
  readonly SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
  readonly SVG_FECOMPOSITE_OPERATOR_ATOP: number;
  readonly SVG_FECOMPOSITE_OPERATOR_IN: number;
  readonly SVG_FECOMPOSITE_OPERATOR_OUT: number;
  readonly SVG_FECOMPOSITE_OPERATOR_OVER: number;
  readonly SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
  readonly SVG_FECOMPOSITE_OPERATOR_XOR: number;
}

SVGFEConvolveMatrixElement: {
  prototype: SVGFEConvolveMatrixElement;
  new(): SVGFEConvolveMatrixElement;
  readonly SVG_EDGEMODE_DUPLICATE: number;
  readonly SVG_EDGEMODE_NONE: number;
  readonly SVG_EDGEMODE_UNKNOWN: number;
  readonly SVG_EDGEMODE_WRAP: number;
}

SVGFEDiffuseLightingElement: {
  prototype: SVGFEDiffuseLightingElement;
  new(): SVGFEDiffuseLightingElement;
}

SVGFEDisplacementMapElement: {
  prototype: SVGFEDisplacementMapElement;
  new(): SVGFEDisplacementMapElement;
  readonly SVG_CHANNEL_A: number;
  readonly SVG_CHANNEL_B: number;
  readonly SVG_CHANNEL_G: number;
  readonly SVG_CHANNEL_R: number;
  readonly SVG_CHANNEL_UNKNOWN: number;
}

SVGFEDistantLightElement: {
  prototype: SVGFEDistantLightElement;
  new(): SVGFEDistantLightElement;
}

SVGFEDropShadowElement: {
  prototype: SVGFEDropShadowElement;
  new(): SVGFEDropShadowElement;
}

SVGFEFloodElement: {
  prototype: SVGFEFloodElement;
  new(): SVGFEFloodElement;
}

SVGFEFuncAElement: {
  prototype: SVGFEFuncAElement;
  new(): SVGFEFuncAElement;
}

SVGFEFuncBElement: {
  prototype: SVGFEFuncBElement;
  new(): SVGFEFuncBElement;
}

SVGFEFuncGElement: {
  prototype: SVGFEFuncGElement;
  new(): SVGFEFuncGElement;
}

SVGFEFuncRElement: {
  prototype: SVGFEFuncRElement;
  new(): SVGFEFuncRElement;
}

SVGFEGaussianBlurElement: {
  prototype: SVGFEGaussianBlurElement;
  new(): SVGFEGaussianBlurElement;
}

SVGFEImageElement: {
  prototype: SVGFEImageElement;
  new(): SVGFEImageElement;
}

SVGFEMergeElement: {
  prototype: SVGFEMergeElement;
  new(): SVGFEMergeElement;
}

SVGFEMergeNodeElement: {
  prototype: SVGFEMergeNodeElement;
  new(): SVGFEMergeNodeElement;
}

SVGFEMorphologyElement: {
  prototype: SVGFEMorphologyElement;
  new(): SVGFEMorphologyElement;
  readonly SVG_MORPHOLOGY_OPERATOR_DILATE: number;
  readonly SVG_MORPHOLOGY_OPERATOR_ERODE: number;
  readonly SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
}

SVGFEOffsetElement: {
  prototype: SVGFEOffsetElement;
  new(): SVGFEOffsetElement;
}

SVGFEPointLightElement: {
  prototype: SVGFEPointLightElement;
  new(): SVGFEPointLightElement;
}

SVGFESpecularLightingElement: {
  prototype: SVGFESpecularLightingElement;
  new(): SVGFESpecularLightingElement;
}

SVGFESpotLightElement: {
  prototype: SVGFESpotLightElement;
  new(): SVGFESpotLightElement;
}

SVGFETileElement: {
  prototype: SVGFETileElement;
  new(): SVGFETileElement;
}

SVGFETurbulenceElement: {
  prototype: SVGFETurbulenceElement;
  new(): SVGFETurbulenceElement;
  readonly SVG_STITCHTYPE_NOSTITCH: number;
  readonly SVG_STITCHTYPE_STITCH: number;
  readonly SVG_STITCHTYPE_UNKNOWN: number;
  readonly SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
  readonly SVG_TURBULENCE_TYPE_TURBULENCE: number;
  readonly SVG_TURBULENCE_TYPE_UNKNOWN: number;
}

SVGFilterElement: {
  prototype: SVGFilterElement;
  new(): SVGFilterElement;
}

interface SVGFilterPrimitiveStandardAttributes {
  readonly height: SVGAnimatedLength;
  readonly result: SVGAnimatedString;
  readonly width: SVGAnimatedLength;
  readonly x: SVGAnimatedLength;
  readonly y: SVGAnimatedLength;
}

interface SVGFitToViewBox {
  readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
  readonly viewBox: SVGAnimatedRect;
}

SVGForeignObjectElement: {
  prototype: SVGForeignObjectElement;
  new(): SVGForeignObjectElement;
}

SVGGElement: {
  prototype: SVGGElement;
  new(): SVGGElement;
}

SVGGeometryElement: {
  prototype: SVGGeometryElement;
  new(): SVGGeometryElement;
}

SVGGradientElement: {
  prototype: SVGGradientElement;
  new(): SVGGradientElement;
  readonly SVG_SPREADMETHOD_PAD: number;
  readonly SVG_SPREADMETHOD_REFLECT: number;
  readonly SVG_SPREADMETHOD_REPEAT: number;
  readonly SVG_SPREADMETHOD_UNKNOWN: number;
}

SVGGraphicsElement: {
  prototype: SVGGraphicsElement;
  new(): SVGGraphicsElement;
}

SVGImageElement: {
  prototype: SVGImageElement;
  new(): SVGImageElement;
}

SVGLength: {
  prototype: SVGLength;
  new(): SVGLength;
  readonly SVG_LENGTHTYPE_CM: number;
  readonly SVG_LENGTHTYPE_EMS: number;
  readonly SVG_LENGTHTYPE_EXS: number;
  readonly SVG_LENGTHTYPE_IN: number;
  readonly SVG_LENGTHTYPE_MM: number;
  readonly SVG_LENGTHTYPE_NUMBER: number;
  readonly SVG_LENGTHTYPE_PC: number;
  readonly SVG_LENGTHTYPE_PERCENTAGE: number;
  readonly SVG_LENGTHTYPE_PT: number;
  readonly SVG_LENGTHTYPE_PX: number;
  readonly SVG_LENGTHTYPE_UNKNOWN: number;
}

SVGLengthList: {
  prototype: SVGLengthList;
  new(): SVGLengthList;
}

SVGLinearGradientElement: {
  prototype: SVGLinearGradientElement;
  new(): SVGLinearGradientElement;
}

SVGLineElement: {
  prototype: SVGLineElement;
  new(): SVGLineElement;
}

SVGMarkerElement: {
  prototype: SVGMarkerElement;
  new(): SVGMarkerElement;
  readonly SVG_MARKERUNITS_STROKEWIDTH: number;
  readonly SVG_MARKERUNITS_UNKNOWN: number;
  readonly SVG_MARKERUNITS_USERSPACEONUSE: number;
  readonly SVG_MARKER_ORIENT_ANGLE: number;
  readonly SVG_MARKER_ORIENT_AUTO: number;
  readonly SVG_MARKER_ORIENT_UNKNOWN: number;
}

SVGMaskElement: {
  prototype: SVGMaskElement;
  new(): SVGMaskElement;
}

SVGMatrix: typeof DOMMatrix

SVGMetadataElement: {
  prototype: SVGMetadataElement;
  new(): SVGMetadataElement;
}

SVGNumber: {
  prototype: SVGNumber;
  new(): SVGNumber;
}

SVGNumberList: {
  prototype: SVGNumberList;
  new(): SVGNumberList;
}

SVGPathElement: {
  prototype: SVGPathElement;
  new(): SVGPathElement;
}

SVGPathSeg: {
  prototype: SVGPathSeg;
  new(): SVGPathSeg;
  readonly PATHSEG_ARC_ABS: number;
  readonly PATHSEG_ARC_REL: number;
  readonly PATHSEG_CLOSEPATH: number;
  readonly PATHSEG_CURVETO_CUBIC_ABS: number;
  readonly PATHSEG_CURVETO_CUBIC_REL: number;
  readonly PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;
  readonly PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;
  readonly PATHSEG_CURVETO_QUADRATIC_ABS: number;
  readonly PATHSEG_CURVETO_QUADRATIC_REL: number;
  readonly PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;
  readonly PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;
  readonly PATHSEG_LINETO_ABS: number;
  readonly PATHSEG_LINETO_HORIZONTAL_ABS: number;
  readonly PATHSEG_LINETO_HORIZONTAL_REL: number;
  readonly PATHSEG_LINETO_REL: number;
  readonly PATHSEG_LINETO_VERTICAL_ABS: number;
  readonly PATHSEG_LINETO_VERTICAL_REL: number;
  readonly PATHSEG_MOVETO_ABS: number;
  readonly PATHSEG_MOVETO_REL: number;
  readonly PATHSEG_UNKNOWN: number;
}

SVGPathSegArcAbs: {
  prototype: SVGPathSegArcAbs;
  new(): SVGPathSegArcAbs;
}

SVGPathSegArcRel: {
  prototype: SVGPathSegArcRel;
  new(): SVGPathSegArcRel;
}

SVGPathSegClosePath: {
  prototype: SVGPathSegClosePath;
  new(): SVGPathSegClosePath;
}

SVGPathSegCurvetoCubicAbs: {
  prototype: SVGPathSegCurvetoCubicAbs;
  new(): SVGPathSegCurvetoCubicAbs;
}

SVGPathSegCurvetoCubicRel: {
  prototype: SVGPathSegCurvetoCubicRel;
  new(): SVGPathSegCurvetoCubicRel;
}

SVGPathSegCurvetoCubicSmoothAbs: {
  prototype: SVGPathSegCurvetoCubicSmoothAbs;
  new(): SVGPathSegCurvetoCubicSmoothAbs;
}

SVGPathSegCurvetoCubicSmoothRel: {
  prototype: SVGPathSegCurvetoCubicSmoothRel;
  new(): SVGPathSegCurvetoCubicSmoothRel;
}

SVGPathSegCurvetoQuadraticAbs: {
  prototype: SVGPathSegCurvetoQuadraticAbs;
  new(): SVGPathSegCurvetoQuadraticAbs;
}

SVGPathSegCurvetoQuadraticRel: {
  prototype: SVGPathSegCurvetoQuadraticRel;
  new(): SVGPathSegCurvetoQuadraticRel;
}

SVGPathSegCurvetoQuadraticSmoothAbs: {
  prototype: SVGPathSegCurvetoQuadraticSmoothAbs;
  new(): SVGPathSegCurvetoQuadraticSmoothAbs;
}

SVGPathSegCurvetoQuadraticSmoothRel: {
  prototype: SVGPathSegCurvetoQuadraticSmoothRel;
  new(): SVGPathSegCurvetoQuadraticSmoothRel;
}

SVGPathSegLinetoAbs: {
  prototype: SVGPathSegLinetoAbs;
  new(): SVGPathSegLinetoAbs;
}

SVGPathSegLinetoHorizontalAbs: {
  prototype: SVGPathSegLinetoHorizontalAbs;
  new(): SVGPathSegLinetoHorizontalAbs;
}

SVGPathSegLinetoHorizontalRel: {
  prototype: SVGPathSegLinetoHorizontalRel;
  new(): SVGPathSegLinetoHorizontalRel;
}

SVGPathSegLinetoRel: {
  prototype: SVGPathSegLinetoRel;
  new(): SVGPathSegLinetoRel;
}

SVGPathSegLinetoVerticalAbs: {
  prototype: SVGPathSegLinetoVerticalAbs;
  new(): SVGPathSegLinetoVerticalAbs;
}

SVGPathSegLinetoVerticalRel: {
  prototype: SVGPathSegLinetoVerticalRel;
  new(): SVGPathSegLinetoVerticalRel;
}

SVGPathSegList: {
  prototype: SVGPathSegList;
  new(): SVGPathSegList;
}

SVGPathSegMovetoAbs: {
  prototype: SVGPathSegMovetoAbs;
  new(): SVGPathSegMovetoAbs;
}

SVGPathSegMovetoRel: {
  prototype: SVGPathSegMovetoRel;
  new(): SVGPathSegMovetoRel;
}

SVGPatternElement: {
  prototype: SVGPatternElement;
  new(): SVGPatternElement;
}

SVGPoint: typeof DOMPoint

SVGPointList: {
  prototype: SVGPointList;
  new(): SVGPointList;
}

SVGPolygonElement: {
  prototype: SVGPolygonElement;
  new(): SVGPolygonElement;
}

SVGPolylineElement: {
  prototype: SVGPolylineElement;
  new(): SVGPolylineElement;
}

SVGPreserveAspectRatio: {
  prototype: SVGPreserveAspectRatio;
  new(): SVGPreserveAspectRatio;
  readonly SVG_MEETORSLICE_MEET: number;
  readonly SVG_MEETORSLICE_SLICE: number;
  readonly SVG_MEETORSLICE_UNKNOWN: number;
  readonly SVG_PRESERVEASPECTRATIO_NONE: number;
  readonly SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
  readonly SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
  readonly SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
  readonly SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
  readonly SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
  readonly SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
  readonly SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
  readonly SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
  readonly SVG_PRESERVEASPECTRATIO_XMINYMID: number;
  readonly SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
}

SVGRadialGradientElement: {
  prototype: SVGRadialGradientElement;
  new(): SVGRadialGradientElement;
}

SVGRect: typeof DOMRect

SVGRectElement: {
  prototype: SVGRectElement;
  new(): SVGRectElement;
}

SVGScriptElement: {
  prototype: SVGScriptElement;
  new(): SVGScriptElement;
}

SVGStopElement: {
  prototype: SVGStopElement;
  new(): SVGStopElement;
}

SVGStringList: {
  prototype: SVGStringList;
  new(): SVGStringList;
}

SVGStyleElement: {
  prototype: SVGStyleElement;
  new(): SVGStyleElement;
}

SVGSVGElement: {
  prototype: SVGSVGElement;
  new(): SVGSVGElement;
  readonly SVG_ZOOMANDPAN_DISABLE: number;
  readonly SVG_ZOOMANDPAN_MAGNIFY: number;
  readonly SVG_ZOOMANDPAN_UNKNOWN: number;
}

interface SVGSVGElementEventMap extends SVGElementEventMap {
  "SVGUnload": Event;
  "SVGZoom": SVGZoomEvent;
}

SVGSwitchElement: {
  prototype: SVGSwitchElement;
  new(): SVGSwitchElement;
}

SVGSymbolElement: {
  prototype: SVGSymbolElement;
  new(): SVGSymbolElement;
}

interface SVGTests {
  readonly requiredExtensions: SVGStringList;
  readonly systemLanguage: SVGStringList;
}

SVGTextContentElement: {
  prototype: SVGTextContentElement;
  new(): SVGTextContentElement;
  readonly LENGTHADJUST_SPACING: number;
  readonly LENGTHADJUST_SPACINGANDGLYPHS: number;
  readonly LENGTHADJUST_UNKNOWN: number;
}

SVGTextElement: {
  prototype: SVGTextElement;
  new(): SVGTextElement;
}

SVGTextPathElement: {
  prototype: SVGTextPathElement;
  new(): SVGTextPathElement;
  readonly TEXTPATH_METHODTYPE_ALIGN: number;
  readonly TEXTPATH_METHODTYPE_STRETCH: number;
  readonly TEXTPATH_METHODTYPE_UNKNOWN: number;
  readonly TEXTPATH_SPACINGTYPE_AUTO: number;
  readonly TEXTPATH_SPACINGTYPE_EXACT: number;
  readonly TEXTPATH_SPACINGTYPE_UNKNOWN: number;
}

SVGTextPositioningElement: {
  prototype: SVGTextPositioningElement;
  new(): SVGTextPositioningElement;
}

SVGTitleElement: {
  prototype: SVGTitleElement;
  new(): SVGTitleElement;
}

SVGTransform: {
  prototype: SVGTransform;
  new(): SVGTransform;
  readonly SVG_TRANSFORM_MATRIX: number;
  readonly SVG_TRANSFORM_ROTATE: number;
  readonly SVG_TRANSFORM_SCALE: number;
  readonly SVG_TRANSFORM_SKEWX: number;
  readonly SVG_TRANSFORM_SKEWY: number;
  readonly SVG_TRANSFORM_TRANSLATE: number;
  readonly SVG_TRANSFORM_UNKNOWN: number;
}

SVGTransformList: {
  prototype: SVGTransformList;
  new(): SVGTransformList;
}

SVGTSpanElement: {
  prototype: SVGTSpanElement;
  new(): SVGTSpanElement;
}

SVGUnitTypes: {
  prototype: SVGUnitTypes;
  new(): SVGUnitTypes;
  readonly SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
  readonly SVG_UNIT_TYPE_UNKNOWN: number;
  readonly SVG_UNIT_TYPE_USERSPACEONUSE: number;
}

interface SVGURIReference {
  readonly href: SVGAnimatedString;
}

SVGUseElement: {
  prototype: SVGUseElement;
  new(): SVGUseElement;
}

SVGViewElement: {
  prototype: SVGViewElement;
  new(): SVGViewElement;
  readonly SVG_ZOOMANDPAN_DISABLE: number;
  readonly SVG_ZOOMANDPAN_MAGNIFY: number;
  readonly SVG_ZOOMANDPAN_UNKNOWN: number;
}

SVGZoomAndPan: {
  readonly SVG_ZOOMANDPAN_DISABLE: number;
  readonly SVG_ZOOMANDPAN_MAGNIFY: number;
  readonly SVG_ZOOMANDPAN_UNKNOWN: number;
}

SVGZoomEvent: {
  prototype: SVGZoomEvent;
  new(): SVGZoomEvent;
}

SyncManager: {
  prototype: SyncManager;
  new(): SyncManager;
}

Table: {
      prototype: Table;
      new(descriptor: TableDescriptor): Table;
  }

interface TableDescriptor {
      element: TableKind;
      initial: number;
      maximum?: number;
}

type TableKind = "anyfunc";

type TexImageSource = ImageBitmap | ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | OffscreenCanvas;

Text: {
  prototype: Text;
  new(data?: string): Text;
}

interface TextDecodeOptions {
  stream?: boolean;
}

TextDecoder: {
  prototype: TextDecoder;
  new(label?: string, options?: TextDecoderOptions): TextDecoder;
}

interface TextDecoderCommon {
  /**
   * Returns encoding's name, lowercased.
   */
  readonly encoding: string;
  /**
   * Returns true if error mode is "fatal", and false otherwise.
   */
  readonly fatal: boolean;
  /**
   * Returns true if ignore BOM flag is set, and false otherwise.
   */
  readonly ignoreBOM: boolean;
}

interface TextDecoderOptions {
  fatal?: boolean;
  ignoreBOM?: boolean;
}

TextDecoderStream: {
  prototype: TextDecoderStream;
  new(label?: string, options?: TextDecoderOptions): TextDecoderStream;
}

TextEncoder: {
  prototype: TextEncoder;
  new(): TextEncoder;
}

interface TextEncoderCommon {
  /**
   * Returns "utf-8".
   */
  readonly encoding: string;
}

interface TextEncoderEncodeIntoResult {
  read?: number;
  written?: number;
}

TextEncoderStream: {
  prototype: TextEncoderStream;
  new(): TextEncoderStream;
}

TextEvent: {
  prototype: TextEvent;
  new(): TextEvent;
  readonly DOM_INPUT_METHOD_DROP: number;
  readonly DOM_INPUT_METHOD_HANDWRITING: number;
  readonly DOM_INPUT_METHOD_IME: number;
  readonly DOM_INPUT_METHOD_KEYBOARD: number;
  readonly DOM_INPUT_METHOD_MULTIMODAL: number;
  readonly DOM_INPUT_METHOD_OPTION: number;
  readonly DOM_INPUT_METHOD_PASTE: number;
  readonly DOM_INPUT_METHOD_SCRIPT: number;
  readonly DOM_INPUT_METHOD_UNKNOWN: number;
  readonly DOM_INPUT_METHOD_VOICE: number;
}

TextMetrics: {
  prototype: TextMetrics;
  new(): TextMetrics;
}

TextTrack: {
  prototype: TextTrack;
  new(): TextTrack;
}

TextTrackCue: {
  prototype: TextTrackCue;
  new(): TextTrackCue;
}

interface TextTrackCueEventMap {
  "enter": Event;
  "exit": Event;
}

TextTrackCueList: {
  prototype: TextTrackCueList;
  new(): TextTrackCueList;
}

interface TextTrackEventMap {
  "cuechange": Event;
}

type TextTrackKind = "captions" | "chapters" | "descriptions" | "metadata" | "subtitles";

TextTrackList: {
  prototype: TextTrackList;
  new(): TextTrackList;
}

interface TextTrackListEventMap {
  "addtrack": TrackEvent;
  "change": Event;
  "removetrack": TrackEvent;
}

type TextTrackMode = "disabled" | "hidden" | "showing";

TimeRanges: {
  prototype: TimeRanges;
  new(): TimeRanges;
}

type TimerHandler = string | Function;

toolbar: BarProp

top: IWindow

declare function toString(): string;

Touch: {
  prototype: Touch;
  new(touchInitDict: TouchInit): Touch;
}

TouchEvent: {
  prototype: TouchEvent;
  new(type: string, eventInitDict?: TouchEventInit): TouchEvent;
}

interface TouchEventInit extends EventModifierInit {
  changedTouches?: Touch[];
  targetTouches?: Touch[];
  touches?: Touch[];
}

interface TouchInit {
  altitudeAngle?: number;
  azimuthAngle?: number;
  clientX?: number;
  clientY?: number;
  force?: number;
  identifier: number;
  pageX?: number;
  pageY?: number;
  radiusX?: number;
  radiusY?: number;
  rotationAngle?: number;
  screenX?: number;
  screenY?: number;
  target: EventTarget;
  touchType?: TouchType;
}

TouchList: {
  prototype: TouchList;
  new(): TouchList;
}

type TouchType = "direct" | "stylus";

TrackEvent: {
  prototype: TrackEvent;
  new(type: string, eventInitDict?: TrackEventInit): TrackEvent;
}

interface TrackEventInit extends EventInit {
  track?: TextTrack | null;
}

type Transferable = ArrayBuffer | MessagePort | ImageBitmap | OffscreenCanvas;

interface Transformer<I = any, O = any> {
  flush?: TransformStreamDefaultControllerCallback<O>;
  readableType?: undefined;
  start?: TransformStreamDefaultControllerCallback<O>;
  transform?: TransformStreamDefaultControllerTransformCallback<I, O>;
  writableType?: undefined;
}

TransformStream: {
  prototype: TransformStream;
  new<I = any, O = any>(transformer?: Transformer<I, O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>): TransformStream<I, O>;
}

interface TransformStreamDefaultController<O = any> {
  readonly desiredSize: number | null;
  enqueue(chunk: O): void;
  error(reason?: any): void;
  terminate(): void;
}

interface TransformStreamDefaultControllerCallback<O> {
  (controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}

interface TransformStreamDefaultControllerTransformCallback<I, O> {
  (chunk: I, controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}

TransitionEvent: {
  prototype: TransitionEvent;
  new(type: string, transitionEventInitDict?: TransitionEventInit): TransitionEvent;
}

interface TransitionEventInit extends EventInit {
  elapsedTime?: number;
  propertyName?: string;
  pseudoElement?: string;
}

type Transport = "ble" | "nfc" | "usb";

TreeWalker: {
  prototype: TreeWalker;
  new(): TreeWalker;
}

interface txAuthGenericArg {
  content: ArrayBuffer;
  contentType: string;
}

UIEvent: {
  prototype: UIEvent;
  new(type: string, eventInitDict?: UIEventInit): UIEvent;
}

interface UIEventInit extends EventInit {
  detail?: number;
  view?: IWindow | null;
}

type Uint32List = Uint32Array | GLuint[];

interface ULongRange {
  max?: number;
  min?: number;
}

interface UnderlyingByteSource {
  autoAllocateChunkSize?: number;
  cancel?: ReadableStreamErrorCallback;
  pull?: ReadableByteStreamControllerCallback;
  start?: ReadableByteStreamControllerCallback;
  type: "bytes";
}

interface UnderlyingSink<W = any> {
  abort?: WritableStreamErrorCallback;
  close?: WritableStreamDefaultControllerCloseCallback;
  start?: WritableStreamDefaultControllerStartCallback;
  type?: undefined;
  write?: WritableStreamDefaultControllerWriteCallback<W>;
}

interface UnderlyingSource<R = any> {
  cancel?: ReadableStreamErrorCallback;
  pull?: ReadableStreamDefaultControllerCallback<R>;
  start?: ReadableStreamDefaultControllerCallback<R>;
  type?: undefined;
}

URL: {
  prototype: URL;
  new(url: string, base?: string | URL): URL;
  createObjectURL(object: any): string;
  revokeObjectURL(url: string): void;
}

URLSearchParams: {
  prototype: URLSearchParams;
  new(init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams;
  toString(): string;
}

type UserVerificationRequirement = "discouraged" | "preferred" | "required";

type UvmEntries = UvmEntry[];

type UvmEntry = number[];

function validate(bytes: BufferSource): boolean;

ValidityState: {
  prototype: ValidityState;
  new(): ValidityState;
}

type ValueType = "f32" | "f64" | "i32" | "i64";

type VibratePattern = number | number[];

type VideoFacingModeEnum = "environment" | "left" | "right" | "user";

VideoPlaybackQuality: {
  prototype: VideoPlaybackQuality;
  new(): VideoPlaybackQuality;
}

type VisibilityState = "hidden" | "visible";

visualViewport: VisualViewport

VisualViewport: {
  prototype: VisualViewport;
  new(): VisualViewport;
}

interface VisualViewportEventMap {
  "resize": UIEvent;
  "scroll": Event;
}

interface VoidFunction {
  (): void;
}

VRDisplay: {
  prototype: VRDisplay;
  new(): VRDisplay;
}

VRDisplayCapabilities: {
  prototype: VRDisplayCapabilities;
  new(): VRDisplayCapabilities;
}

VRDisplayEvent: {
  prototype: VRDisplayEvent;
  new(type: string, eventInitDict: VRDisplayEventInit): VRDisplayEvent;
}

interface VRDisplayEventInit extends EventInit {
  display: VRDisplay;
  reason?: VRDisplayEventReason;
}

type VRDisplayEventReason = "mounted" | "navigation" | "requested" | "unmounted";

VREyeParameters: {
  prototype: VREyeParameters;
  new(): VREyeParameters;
}

VRFieldOfView: {
  prototype: VRFieldOfView;
  new(): VRFieldOfView;
}

VRFrameData: {
  prototype: VRFrameData;
  new(): VRFrameData;
}

interface VRLayer {
  leftBounds?: number[] | Float32Array | null;
  rightBounds?: number[] | Float32Array | null;
  source?: HTMLCanvasElement | null;
}

VRPose: {
  prototype: VRPose;
  new(): VRPose;
}

interface VRStageParameters {
  sittingToStandingTransform?: Float32Array;
  sizeX?: number;
  sizeY?: number;
}

VTTCue: {
  prototype: VTTCue;
  new(startTime: number, endTime: number, text: string): VTTCue;
}

VTTRegion: {
  prototype: VTTRegion;
  new(): VTTRegion;
}

WaveShaperNode: {
  prototype: WaveShaperNode;
  new(context: BaseAudioContext, options?: WaveShaperOptions): WaveShaperNode;
}

interface WaveShaperOptions extends AudioNodeOptions {
  curve?: number[] | Float32Array;
  oversample?: OverSampleType;
}

declare namespace WebAssembly {
  interface CompileError {
}

  var CompileError: {
      prototype: CompileError;
      new(): CompileError;
  };

  interface Global {
      value: any;
      valueOf(): any;
}

  var Global: {
      prototype: Global;
      new(descriptor: GlobalDescriptor, v?: any): Global;
  };

  interface Instance {
      readonly exports: Exports;
}

  var Instance: {
      prototype: Instance;
      new(module: Module, importObject?: Imports): Instance;
};

  interface LinkError {
}

  var LinkError: {
      prototype: LinkError;
      new(): LinkError;
  };

  interface Memory {
      readonly buffer: ArrayBuffer;
      grow(delta: number): number;
}

  var Memory: {
      prototype: Memory;
      new(descriptor: MemoryDescriptor): Memory;
  };

  interface Module {
}

  var Module: {
      prototype: Module;
      new(bytes: BufferSource): Module;
      customSections(moduleObject: Module, sectionName: string): ArrayBuffer[];
      exports(moduleObject: Module): ModuleExportDescriptor[];
      imports(moduleObject: Module): ModuleImportDescriptor[];
  };

  interface RuntimeError {
}

  var RuntimeError: {
      prototype: RuntimeError;
      new(): RuntimeError;
};

  interface Table {
      readonly length: number;
      get(index: number): Function | null;
      grow(delta: number): number;
      set(index: number, value: Function | null): void;
}

  var Table: {
      prototype: Table;
      new(descriptor: TableDescriptor): Table;
  };

  interface GlobalDescriptor {
      mutable?: boolean;
      value: ValueType;
}

  interface MemoryDescriptor {
      initial: number;
      maximum?: number;
}

  interface ModuleExportDescriptor {
      kind: ImportExportKind;
      name: string;
}

  interface ModuleImportDescriptor {
      kind: ImportExportKind;
      module: string;
      name: string;
}

  interface TableDescriptor {
      element: TableKind;
      initial: number;
      maximum?: number;
}

  interface WebAssemblyInstantiatedSource {
      instance: Instance;
      module: Module;
}

  type ImportExportKind = "function" | "global" | "memory" | "table";
  type TableKind = "anyfunc";
  type ValueType = "f32" | "f64" | "i32" | "i64";
  type ExportValue = Function | Global | Memory | Table;
  type Exports = Record<string, ExportValue>;
  type ImportValue = ExportValue | number;
  type ModuleImports = Record<string, ImportValue>;
  type Imports = Record<string, ModuleImports>;
  function compile(bytes: BufferSource): Promise<Module>;
  function compileStreaming(source: Response | Promise<Response>): Promise<Module>;
  function instantiate(bytes: BufferSource, importObject?: Imports): Promise<WebAssemblyInstantiatedSource>;
  function instantiate(moduleObject: Module, importObject?: Imports): Promise<Instance>;
  function instantiateStreaming(response: Response | PromiseLike<Response>, importObject?: Imports): Promise<WebAssemblyInstantiatedSource>;
  function validate(bytes: BufferSource): boolean;
}

interface WebAssemblyInstantiatedSource {
      instance: Instance;
      module: Module;
}

WebAuthentication: {
  prototype: WebAuthentication;
  new(): WebAuthentication;
}

WebAuthnAssertion: {
  prototype: WebAuthnAssertion;
  new(): WebAuthnAssertion;
}

interface WebAuthnExtensions {
}

interface WEBGL_color_buffer_float {
  readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: GLenum;
  readonly RGBA32F_EXT: GLenum;
  readonly UNSIGNED_NORMALIZED_EXT: GLenum;
}

interface WEBGL_compressed_texture_astc {
  getSupportedProfiles(): string[];
  readonly COMPRESSED_RGBA_ASTC_10x10_KHR: GLenum;
  readonly COMPRESSED_RGBA_ASTC_10x5_KHR: GLenum;
  readonly COMPRESSED_RGBA_ASTC_10x6_KHR: GLenum;
  readonly COMPRESSED_RGBA_ASTC_10x8_KHR: GLenum;
  readonly COMPRESSED_RGBA_ASTC_12x10_KHR: GLenum;
  readonly COMPRESSED_RGBA_ASTC_12x12_KHR: GLenum;
  readonly COMPRESSED_RGBA_ASTC_4x4_KHR: GLenum;
  readonly COMPRESSED_RGBA_ASTC_5x4_KHR: GLenum;
  readonly COMPRESSED_RGBA_ASTC_5x5_KHR: GLenum;
  readonly COMPRESSED_RGBA_ASTC_6x5_KHR: GLenum;
  readonly COMPRESSED_RGBA_ASTC_6x6_KHR: GLenum;
  readonly COMPRESSED_RGBA_ASTC_8x5_KHR: GLenum;
  readonly COMPRESSED_RGBA_ASTC_8x6_KHR: GLenum;
  readonly COMPRESSED_RGBA_ASTC_8x8_KHR: GLenum;
  readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: GLenum;
  readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: GLenum;
  readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: GLenum;
  readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: GLenum;
  readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: GLenum;
  readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: GLenum;
  readonly COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: GLenum;
  readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: GLenum;
  readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: GLenum;
  readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: GLenum;
  readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: GLenum;
  readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: GLenum;
  readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: GLenum;
  readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: GLenum;
}

/** The WEBGL_compressed_texture_s3tc extension is part of the WebGL API and exposes four S3TC compressed texture formats. */
interface WEBGL_compressed_texture_s3tc {
  readonly COMPRESSED_RGBA_S3TC_DXT1_EXT: GLenum;
  readonly COMPRESSED_RGBA_S3TC_DXT3_EXT: GLenum;
  readonly COMPRESSED_RGBA_S3TC_DXT5_EXT: GLenum;
  readonly COMPRESSED_RGB_S3TC_DXT1_EXT: GLenum;
}

interface WEBGL_compressed_texture_s3tc_srgb {
  readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: GLenum;
  readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: GLenum;
  readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: GLenum;
  readonly COMPRESSED_SRGB_S3TC_DXT1_EXT: GLenum;
}

/** The WEBGL_debug_renderer_info extension is part of the WebGL API and exposes two constants with information about the graphics driver for debugging purposes. */
interface WEBGL_debug_renderer_info {
  readonly UNMASKED_RENDERER_WEBGL: GLenum;
  readonly UNMASKED_VENDOR_WEBGL: GLenum;
}

interface WEBGL_debug_shaders {
  getTranslatedShaderSource(shader: WebGLShader): string;
}

/** The WEBGL_depth_texture extension is part of the WebGL API and defines 2D depth and depth-stencil textures. */
interface WEBGL_depth_texture {
  readonly UNSIGNED_INT_24_8_WEBGL: GLenum;
}

interface WEBGL_draw_buffers {
  drawBuffersWEBGL(buffers: GLenum[]): void;
  readonly COLOR_ATTACHMENT0_WEBGL: GLenum;
  readonly COLOR_ATTACHMENT10_WEBGL: GLenum;
  readonly COLOR_ATTACHMENT11_WEBGL: GLenum;
  readonly COLOR_ATTACHMENT12_WEBGL: GLenum;
  readonly COLOR_ATTACHMENT13_WEBGL: GLenum;
  readonly COLOR_ATTACHMENT14_WEBGL: GLenum;
  readonly COLOR_ATTACHMENT15_WEBGL: GLenum;
  readonly COLOR_ATTACHMENT1_WEBGL: GLenum;
  readonly COLOR_ATTACHMENT2_WEBGL: GLenum;
  readonly COLOR_ATTACHMENT3_WEBGL: GLenum;
  readonly COLOR_ATTACHMENT4_WEBGL: GLenum;
  readonly COLOR_ATTACHMENT5_WEBGL: GLenum;
  readonly COLOR_ATTACHMENT6_WEBGL: GLenum;
  readonly COLOR_ATTACHMENT7_WEBGL: GLenum;
  readonly COLOR_ATTACHMENT8_WEBGL: GLenum;
  readonly COLOR_ATTACHMENT9_WEBGL: GLenum;
  readonly DRAW_BUFFER0_WEBGL: GLenum;
  readonly DRAW_BUFFER10_WEBGL: GLenum;
  readonly DRAW_BUFFER11_WEBGL: GLenum;
  readonly DRAW_BUFFER12_WEBGL: GLenum;
  readonly DRAW_BUFFER13_WEBGL: GLenum;
  readonly DRAW_BUFFER14_WEBGL: GLenum;
  readonly DRAW_BUFFER15_WEBGL: GLenum;
  readonly DRAW_BUFFER1_WEBGL: GLenum;
  readonly DRAW_BUFFER2_WEBGL: GLenum;
  readonly DRAW_BUFFER3_WEBGL: GLenum;
  readonly DRAW_BUFFER4_WEBGL: GLenum;
  readonly DRAW_BUFFER5_WEBGL: GLenum;
  readonly DRAW_BUFFER6_WEBGL: GLenum;
  readonly DRAW_BUFFER7_WEBGL: GLenum;
  readonly DRAW_BUFFER8_WEBGL: GLenum;
  readonly DRAW_BUFFER9_WEBGL: GLenum;
  readonly MAX_COLOR_ATTACHMENTS_WEBGL: GLenum;
  readonly MAX_DRAW_BUFFERS_WEBGL: GLenum;
}

interface WEBGL_lose_context {
  loseContext(): void;
  restoreContext(): void;
}

WebGL2RenderingContext: {
  prototype: WebGL2RenderingContext;
  new(): WebGL2RenderingContext;
  readonly ACTIVE_ATTRIBUTES: GLenum;
  readonly ACTIVE_TEXTURE: GLenum;
  readonly ACTIVE_UNIFORMS: GLenum;
  readonly ALIASED_LINE_WIDTH_RANGE: GLenum;
  readonly ALIASED_POINT_SIZE_RANGE: GLenum;
  readonly ALPHA: GLenum;
  readonly ALPHA_BITS: GLenum;
  readonly ALWAYS: GLenum;
  readonly ARRAY_BUFFER: GLenum;
  readonly ARRAY_BUFFER_BINDING: GLenum;
  readonly ATTACHED_SHADERS: GLenum;
  readonly BACK: GLenum;
  readonly BLEND: GLenum;
  readonly BLEND_COLOR: GLenum;
  readonly BLEND_DST_ALPHA: GLenum;
  readonly BLEND_DST_RGB: GLenum;
  readonly BLEND_EQUATION: GLenum;
  readonly BLEND_EQUATION_ALPHA: GLenum;
  readonly BLEND_EQUATION_RGB: GLenum;
  readonly BLEND_SRC_ALPHA: GLenum;
  readonly BLEND_SRC_RGB: GLenum;
  readonly BLUE_BITS: GLenum;
  readonly BOOL: GLenum;
  readonly BOOL_VEC2: GLenum;
  readonly BOOL_VEC3: GLenum;
  readonly BOOL_VEC4: GLenum;
  readonly BROWSER_DEFAULT_WEBGL: GLenum;
  readonly BUFFER_SIZE: GLenum;
  readonly BUFFER_USAGE: GLenum;
  readonly BYTE: GLenum;
  readonly CCW: GLenum;
  readonly CLAMP_TO_EDGE: GLenum;
  readonly COLOR_ATTACHMENT0: GLenum;
  readonly COLOR_BUFFER_BIT: GLenum;
  readonly COLOR_CLEAR_VALUE: GLenum;
  readonly COLOR_WRITEMASK: GLenum;
  readonly COMPILE_STATUS: GLenum;
  readonly COMPRESSED_TEXTURE_FORMATS: GLenum;
  readonly CONSTANT_ALPHA: GLenum;
  readonly CONSTANT_COLOR: GLenum;
  readonly CONTEXT_LOST_WEBGL: GLenum;
  readonly CULL_FACE: GLenum;
  readonly CULL_FACE_MODE: GLenum;
  readonly CURRENT_PROGRAM: GLenum;
  readonly CURRENT_VERTEX_ATTRIB: GLenum;
  readonly CW: GLenum;
  readonly DECR: GLenum;
  readonly DECR_WRAP: GLenum;
  readonly DELETE_STATUS: GLenum;
  readonly DEPTH_ATTACHMENT: GLenum;
  readonly DEPTH_BITS: GLenum;
  readonly DEPTH_BUFFER_BIT: GLenum;
  readonly DEPTH_CLEAR_VALUE: GLenum;
  readonly DEPTH_COMPONENT: GLenum;
  readonly DEPTH_COMPONENT16: GLenum;
  readonly DEPTH_FUNC: GLenum;
  readonly DEPTH_RANGE: GLenum;
  readonly DEPTH_STENCIL: GLenum;
  readonly DEPTH_STENCIL_ATTACHMENT: GLenum;
  readonly DEPTH_TEST: GLenum;
  readonly DEPTH_WRITEMASK: GLenum;
  readonly DITHER: GLenum;
  readonly DONT_CARE: GLenum;
  readonly DST_ALPHA: GLenum;
  readonly DST_COLOR: GLenum;
  readonly DYNAMIC_DRAW: GLenum;
  readonly ELEMENT_ARRAY_BUFFER: GLenum;
  readonly ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
  readonly EQUAL: GLenum;
  readonly FASTEST: GLenum;
  readonly FLOAT: GLenum;
  readonly FLOAT_MAT2: GLenum;
  readonly FLOAT_MAT3: GLenum;
  readonly FLOAT_MAT4: GLenum;
  readonly FLOAT_VEC2: GLenum;
  readonly FLOAT_VEC3: GLenum;
  readonly FLOAT_VEC4: GLenum;
  readonly FRAGMENT_SHADER: GLenum;
  readonly FRAMEBUFFER: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
  readonly FRAMEBUFFER_BINDING: GLenum;
  readonly FRAMEBUFFER_COMPLETE: GLenum;
  readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
  readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
  readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
  readonly FRAMEBUFFER_UNSUPPORTED: GLenum;
  readonly FRONT: GLenum;
  readonly FRONT_AND_BACK: GLenum;
  readonly FRONT_FACE: GLenum;
  readonly FUNC_ADD: GLenum;
  readonly FUNC_REVERSE_SUBTRACT: GLenum;
  readonly FUNC_SUBTRACT: GLenum;
  readonly GENERATE_MIPMAP_HINT: GLenum;
  readonly GEQUAL: GLenum;
  readonly GREATER: GLenum;
  readonly GREEN_BITS: GLenum;
  readonly HIGH_FLOAT: GLenum;
  readonly HIGH_INT: GLenum;
  readonly IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
  readonly IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
  readonly INCR: GLenum;
  readonly INCR_WRAP: GLenum;
  readonly INT: GLenum;
  readonly INT_VEC2: GLenum;
  readonly INT_VEC3: GLenum;
  readonly INT_VEC4: GLenum;
  readonly INVALID_ENUM: GLenum;
  readonly INVALID_FRAMEBUFFER_OPERATION: GLenum;
  readonly INVALID_OPERATION: GLenum;
  readonly INVALID_VALUE: GLenum;
  readonly INVERT: GLenum;
  readonly KEEP: GLenum;
  readonly LEQUAL: GLenum;
  readonly LESS: GLenum;
  readonly LINEAR: GLenum;
  readonly LINEAR_MIPMAP_LINEAR: GLenum;
  readonly LINEAR_MIPMAP_NEAREST: GLenum;
  readonly LINES: GLenum;
  readonly LINE_LOOP: GLenum;
  readonly LINE_STRIP: GLenum;
  readonly LINE_WIDTH: GLenum;
  readonly LINK_STATUS: GLenum;
  readonly LOW_FLOAT: GLenum;
  readonly LOW_INT: GLenum;
  readonly LUMINANCE: GLenum;
  readonly LUMINANCE_ALPHA: GLenum;
  readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
  readonly MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
  readonly MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
  readonly MAX_RENDERBUFFER_SIZE: GLenum;
  readonly MAX_TEXTURE_IMAGE_UNITS: GLenum;
  readonly MAX_TEXTURE_SIZE: GLenum;
  readonly MAX_VARYING_VECTORS: GLenum;
  readonly MAX_VERTEX_ATTRIBS: GLenum;
  readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
  readonly MAX_VERTEX_UNIFORM_VECTORS: GLenum;
  readonly MAX_VIEWPORT_DIMS: GLenum;
  readonly MEDIUM_FLOAT: GLenum;
  readonly MEDIUM_INT: GLenum;
  readonly MIRRORED_REPEAT: GLenum;
  readonly NEAREST: GLenum;
  readonly NEAREST_MIPMAP_LINEAR: GLenum;
  readonly NEAREST_MIPMAP_NEAREST: GLenum;
  readonly NEVER: GLenum;
  readonly NICEST: GLenum;
  readonly NONE: GLenum;
  readonly NOTEQUAL: GLenum;
  readonly NO_ERROR: GLenum;
  readonly ONE: GLenum;
  readonly ONE_MINUS_CONSTANT_ALPHA: GLenum;
  readonly ONE_MINUS_CONSTANT_COLOR: GLenum;
  readonly ONE_MINUS_DST_ALPHA: GLenum;
  readonly ONE_MINUS_DST_COLOR: GLenum;
  readonly ONE_MINUS_SRC_ALPHA: GLenum;
  readonly ONE_MINUS_SRC_COLOR: GLenum;
  readonly OUT_OF_MEMORY: GLenum;
  readonly PACK_ALIGNMENT: GLenum;
  readonly POINTS: GLenum;
  readonly POLYGON_OFFSET_FACTOR: GLenum;
  readonly POLYGON_OFFSET_FILL: GLenum;
  readonly POLYGON_OFFSET_UNITS: GLenum;
  readonly RED_BITS: GLenum;
  readonly RENDERBUFFER: GLenum;
  readonly RENDERBUFFER_ALPHA_SIZE: GLenum;
  readonly RENDERBUFFER_BINDING: GLenum;
  readonly RENDERBUFFER_BLUE_SIZE: GLenum;
  readonly RENDERBUFFER_DEPTH_SIZE: GLenum;
  readonly RENDERBUFFER_GREEN_SIZE: GLenum;
  readonly RENDERBUFFER_HEIGHT: GLenum;
  readonly RENDERBUFFER_INTERNAL_FORMAT: GLenum;
  readonly RENDERBUFFER_RED_SIZE: GLenum;
  readonly RENDERBUFFER_STENCIL_SIZE: GLenum;
  readonly RENDERBUFFER_WIDTH: GLenum;
  readonly RENDERER: GLenum;
  readonly REPEAT: GLenum;
  readonly REPLACE: GLenum;
  readonly RGB: GLenum;
  readonly RGB565: GLenum;
  readonly RGB5_A1: GLenum;
  readonly RGBA: GLenum;
  readonly RGBA4: GLenum;
  readonly SAMPLER_2D: GLenum;
  readonly SAMPLER_CUBE: GLenum;
  readonly SAMPLES: GLenum;
  readonly SAMPLE_ALPHA_TO_COVERAGE: GLenum;
  readonly SAMPLE_BUFFERS: GLenum;
  readonly SAMPLE_COVERAGE: GLenum;
  readonly SAMPLE_COVERAGE_INVERT: GLenum;
  readonly SAMPLE_COVERAGE_VALUE: GLenum;
  readonly SCISSOR_BOX: GLenum;
  readonly SCISSOR_TEST: GLenum;
  readonly SHADER_TYPE: GLenum;
  readonly SHADING_LANGUAGE_VERSION: GLenum;
  readonly SHORT: GLenum;
  readonly SRC_ALPHA: GLenum;
  readonly SRC_ALPHA_SATURATE: GLenum;
  readonly SRC_COLOR: GLenum;
  readonly STATIC_DRAW: GLenum;
  readonly STENCIL_ATTACHMENT: GLenum;
  readonly STENCIL_BACK_FAIL: GLenum;
  readonly STENCIL_BACK_FUNC: GLenum;
  readonly STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
  readonly STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
  readonly STENCIL_BACK_REF: GLenum;
  readonly STENCIL_BACK_VALUE_MASK: GLenum;
  readonly STENCIL_BACK_WRITEMASK: GLenum;
  readonly STENCIL_BITS: GLenum;
  readonly STENCIL_BUFFER_BIT: GLenum;
  readonly STENCIL_CLEAR_VALUE: GLenum;
  readonly STENCIL_FAIL: GLenum;
  readonly STENCIL_FUNC: GLenum;
  readonly STENCIL_INDEX8: GLenum;
  readonly STENCIL_PASS_DEPTH_FAIL: GLenum;
  readonly STENCIL_PASS_DEPTH_PASS: GLenum;
  readonly STENCIL_REF: GLenum;
  readonly STENCIL_TEST: GLenum;
  readonly STENCIL_VALUE_MASK: GLenum;
  readonly STENCIL_WRITEMASK: GLenum;
  readonly STREAM_DRAW: GLenum;
  readonly SUBPIXEL_BITS: GLenum;
  readonly TEXTURE: GLenum;
  readonly TEXTURE0: GLenum;
  readonly TEXTURE1: GLenum;
  readonly TEXTURE10: GLenum;
  readonly TEXTURE11: GLenum;
  readonly TEXTURE12: GLenum;
  readonly TEXTURE13: GLenum;
  readonly TEXTURE14: GLenum;
  readonly TEXTURE15: GLenum;
  readonly TEXTURE16: GLenum;
  readonly TEXTURE17: GLenum;
  readonly TEXTURE18: GLenum;
  readonly TEXTURE19: GLenum;
  readonly TEXTURE2: GLenum;
  readonly TEXTURE20: GLenum;
  readonly TEXTURE21: GLenum;
  readonly TEXTURE22: GLenum;
  readonly TEXTURE23: GLenum;
  readonly TEXTURE24: GLenum;
  readonly TEXTURE25: GLenum;
  readonly TEXTURE26: GLenum;
  readonly TEXTURE27: GLenum;
  readonly TEXTURE28: GLenum;
  readonly TEXTURE29: GLenum;
  readonly TEXTURE3: GLenum;
  readonly TEXTURE30: GLenum;
  readonly TEXTURE31: GLenum;
  readonly TEXTURE4: GLenum;
  readonly TEXTURE5: GLenum;
  readonly TEXTURE6: GLenum;
  readonly TEXTURE7: GLenum;
  readonly TEXTURE8: GLenum;
  readonly TEXTURE9: GLenum;
  readonly TEXTURE_2D: GLenum;
  readonly TEXTURE_BINDING_2D: GLenum;
  readonly TEXTURE_BINDING_CUBE_MAP: GLenum;
  readonly TEXTURE_CUBE_MAP: GLenum;
  readonly TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
  readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
  readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
  readonly TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
  readonly TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
  readonly TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
  readonly TEXTURE_MAG_FILTER: GLenum;
  readonly TEXTURE_MIN_FILTER: GLenum;
  readonly TEXTURE_WRAP_S: GLenum;
  readonly TEXTURE_WRAP_T: GLenum;
  readonly TRIANGLES: GLenum;
  readonly TRIANGLE_FAN: GLenum;
  readonly TRIANGLE_STRIP: GLenum;
  readonly UNPACK_ALIGNMENT: GLenum;
  readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
  readonly UNPACK_FLIP_Y_WEBGL: GLenum;
  readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
  readonly UNSIGNED_BYTE: GLenum;
  readonly UNSIGNED_INT: GLenum;
  readonly UNSIGNED_SHORT: GLenum;
  readonly UNSIGNED_SHORT_4_4_4_4: GLenum;
  readonly UNSIGNED_SHORT_5_5_5_1: GLenum;
  readonly UNSIGNED_SHORT_5_6_5: GLenum;
  readonly VALIDATE_STATUS: GLenum;
  readonly VENDOR: GLenum;
  readonly VERSION: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
  readonly VERTEX_SHADER: GLenum;
  readonly VIEWPORT: GLenum;
  readonly ZERO: GLenum;
  readonly ACTIVE_UNIFORM_BLOCKS: GLenum;
  readonly ALREADY_SIGNALED: GLenum;
  readonly ANY_SAMPLES_PASSED: GLenum;
  readonly ANY_SAMPLES_PASSED_CONSERVATIVE: GLenum;
  readonly COLOR: GLenum;
  readonly COLOR_ATTACHMENT1: GLenum;
  readonly COLOR_ATTACHMENT10: GLenum;
  readonly COLOR_ATTACHMENT11: GLenum;
  readonly COLOR_ATTACHMENT12: GLenum;
  readonly COLOR_ATTACHMENT13: GLenum;
  readonly COLOR_ATTACHMENT14: GLenum;
  readonly COLOR_ATTACHMENT15: GLenum;
  readonly COLOR_ATTACHMENT2: GLenum;
  readonly COLOR_ATTACHMENT3: GLenum;
  readonly COLOR_ATTACHMENT4: GLenum;
  readonly COLOR_ATTACHMENT5: GLenum;
  readonly COLOR_ATTACHMENT6: GLenum;
  readonly COLOR_ATTACHMENT7: GLenum;
  readonly COLOR_ATTACHMENT8: GLenum;
  readonly COLOR_ATTACHMENT9: GLenum;
  readonly COMPARE_REF_TO_TEXTURE: GLenum;
  readonly CONDITION_SATISFIED: GLenum;
  readonly COPY_READ_BUFFER: GLenum;
  readonly COPY_READ_BUFFER_BINDING: GLenum;
  readonly COPY_WRITE_BUFFER: GLenum;
  readonly COPY_WRITE_BUFFER_BINDING: GLenum;
  readonly CURRENT_QUERY: GLenum;
  readonly DEPTH: GLenum;
  readonly DEPTH24_STENCIL8: GLenum;
  readonly DEPTH32F_STENCIL8: GLenum;
  readonly DEPTH_COMPONENT24: GLenum;
  readonly DEPTH_COMPONENT32F: GLenum;
  readonly DRAW_BUFFER0: GLenum;
  readonly DRAW_BUFFER1: GLenum;
  readonly DRAW_BUFFER10: GLenum;
  readonly DRAW_BUFFER11: GLenum;
  readonly DRAW_BUFFER12: GLenum;
  readonly DRAW_BUFFER13: GLenum;
  readonly DRAW_BUFFER14: GLenum;
  readonly DRAW_BUFFER15: GLenum;
  readonly DRAW_BUFFER2: GLenum;
  readonly DRAW_BUFFER3: GLenum;
  readonly DRAW_BUFFER4: GLenum;
  readonly DRAW_BUFFER5: GLenum;
  readonly DRAW_BUFFER6: GLenum;
  readonly DRAW_BUFFER7: GLenum;
  readonly DRAW_BUFFER8: GLenum;
  readonly DRAW_BUFFER9: GLenum;
  readonly DRAW_FRAMEBUFFER: GLenum;
  readonly DRAW_FRAMEBUFFER_BINDING: GLenum;
  readonly DYNAMIC_COPY: GLenum;
  readonly DYNAMIC_READ: GLenum;
  readonly FLOAT_32_UNSIGNED_INT_24_8_REV: GLenum;
  readonly FLOAT_MAT2x3: GLenum;
  readonly FLOAT_MAT2x4: GLenum;
  readonly FLOAT_MAT3x2: GLenum;
  readonly FLOAT_MAT3x4: GLenum;
  readonly FLOAT_MAT4x2: GLenum;
  readonly FLOAT_MAT4x3: GLenum;
  readonly FRAGMENT_SHADER_DERIVATIVE_HINT: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: GLenum;
  readonly FRAMEBUFFER_DEFAULT: GLenum;
  readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: GLenum;
  readonly HALF_FLOAT: GLenum;
  readonly INTERLEAVED_ATTRIBS: GLenum;
  readonly INT_2_10_10_10_REV: GLenum;
  readonly INT_SAMPLER_2D: GLenum;
  readonly INT_SAMPLER_2D_ARRAY: GLenum;
  readonly INT_SAMPLER_3D: GLenum;
  readonly INT_SAMPLER_CUBE: GLenum;
  readonly INVALID_INDEX: GLenum;
  readonly MAX: GLenum;
  readonly MAX_3D_TEXTURE_SIZE: GLenum;
  readonly MAX_ARRAY_TEXTURE_LAYERS: GLenum;
  readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: GLenum;
  readonly MAX_COLOR_ATTACHMENTS: GLenum;
  readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: GLenum;
  readonly MAX_COMBINED_UNIFORM_BLOCKS: GLenum;
  readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: GLenum;
  readonly MAX_DRAW_BUFFERS: GLenum;
  readonly MAX_ELEMENTS_INDICES: GLenum;
  readonly MAX_ELEMENTS_VERTICES: GLenum;
  readonly MAX_ELEMENT_INDEX: GLenum;
  readonly MAX_FRAGMENT_INPUT_COMPONENTS: GLenum;
  readonly MAX_FRAGMENT_UNIFORM_BLOCKS: GLenum;
  readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: GLenum;
  readonly MAX_PROGRAM_TEXEL_OFFSET: GLenum;
  readonly MAX_SAMPLES: GLenum;
  readonly MAX_SERVER_WAIT_TIMEOUT: GLenum;
  readonly MAX_TEXTURE_LOD_BIAS: GLenum;
  readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: GLenum;
  readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: GLenum;
  readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: GLenum;
  readonly MAX_UNIFORM_BLOCK_SIZE: GLenum;
  readonly MAX_UNIFORM_BUFFER_BINDINGS: GLenum;
  readonly MAX_VARYING_COMPONENTS: GLenum;
  readonly MAX_VERTEX_OUTPUT_COMPONENTS: GLenum;
  readonly MAX_VERTEX_UNIFORM_BLOCKS: GLenum;
  readonly MAX_VERTEX_UNIFORM_COMPONENTS: GLenum;
  readonly MIN: GLenum;
  readonly MIN_PROGRAM_TEXEL_OFFSET: GLenum;
  readonly OBJECT_TYPE: GLenum;
  readonly PACK_ROW_LENGTH: GLenum;
  readonly PACK_SKIP_PIXELS: GLenum;
  readonly PACK_SKIP_ROWS: GLenum;
  readonly PIXEL_PACK_BUFFER: GLenum;
  readonly PIXEL_PACK_BUFFER_BINDING: GLenum;
  readonly PIXEL_UNPACK_BUFFER: GLenum;
  readonly PIXEL_UNPACK_BUFFER_BINDING: GLenum;
  readonly QUERY_RESULT: GLenum;
  readonly QUERY_RESULT_AVAILABLE: GLenum;
  readonly R11F_G11F_B10F: GLenum;
  readonly R16F: GLenum;
  readonly R16I: GLenum;
  readonly R16UI: GLenum;
  readonly R32F: GLenum;
  readonly R32I: GLenum;
  readonly R32UI: GLenum;
  readonly R8: GLenum;
  readonly R8I: GLenum;
  readonly R8UI: GLenum;
  readonly R8_SNORM: GLenum;
  readonly RASTERIZER_DISCARD: GLenum;
  readonly READ_BUFFER: GLenum;
  readonly READ_FRAMEBUFFER: GLenum;
  readonly READ_FRAMEBUFFER_BINDING: GLenum;
  readonly RED: GLenum;
  readonly RED_INTEGER: GLenum;
  readonly RENDERBUFFER_SAMPLES: GLenum;
  readonly RG: GLenum;
  readonly RG16F: GLenum;
  readonly RG16I: GLenum;
  readonly RG16UI: GLenum;
  readonly RG32F: GLenum;
  readonly RG32I: GLenum;
  readonly RG32UI: GLenum;
  readonly RG8: GLenum;
  readonly RG8I: GLenum;
  readonly RG8UI: GLenum;
  readonly RG8_SNORM: GLenum;
  readonly RGB10_A2: GLenum;
  readonly RGB10_A2UI: GLenum;
  readonly RGB16F: GLenum;
  readonly RGB16I: GLenum;
  readonly RGB16UI: GLenum;
  readonly RGB32F: GLenum;
  readonly RGB32I: GLenum;
  readonly RGB32UI: GLenum;
  readonly RGB8: GLenum;
  readonly RGB8I: GLenum;
  readonly RGB8UI: GLenum;
  readonly RGB8_SNORM: GLenum;
  readonly RGB9_E5: GLenum;
  readonly RGBA16F: GLenum;
  readonly RGBA16I: GLenum;
  readonly RGBA16UI: GLenum;
  readonly RGBA32F: GLenum;
  readonly RGBA32I: GLenum;
  readonly RGBA32UI: GLenum;
  readonly RGBA8: GLenum;
  readonly RGBA8I: GLenum;
  readonly RGBA8UI: GLenum;
  readonly RGBA8_SNORM: GLenum;
  readonly RGBA_INTEGER: GLenum;
  readonly RGB_INTEGER: GLenum;
  readonly RG_INTEGER: GLenum;
  readonly SAMPLER_2D_ARRAY: GLenum;
  readonly SAMPLER_2D_ARRAY_SHADOW: GLenum;
  readonly SAMPLER_2D_SHADOW: GLenum;
  readonly SAMPLER_3D: GLenum;
  readonly SAMPLER_BINDING: GLenum;
  readonly SAMPLER_CUBE_SHADOW: GLenum;
  readonly SEPARATE_ATTRIBS: GLenum;
  readonly SIGNALED: GLenum;
  readonly SIGNED_NORMALIZED: GLenum;
  readonly SRGB: GLenum;
  readonly SRGB8: GLenum;
  readonly SRGB8_ALPHA8: GLenum;
  readonly STATIC_COPY: GLenum;
  readonly STATIC_READ: GLenum;
  readonly STENCIL: GLenum;
  readonly STREAM_COPY: GLenum;
  readonly STREAM_READ: GLenum;
  readonly SYNC_CONDITION: GLenum;
  readonly SYNC_FENCE: GLenum;
  readonly SYNC_FLAGS: GLenum;
  readonly SYNC_FLUSH_COMMANDS_BIT: GLenum;
  readonly SYNC_GPU_COMMANDS_COMPLETE: GLenum;
  readonly SYNC_STATUS: GLenum;
  readonly TEXTURE_2D_ARRAY: GLenum;
  readonly TEXTURE_3D: GLenum;
  readonly TEXTURE_BASE_LEVEL: GLenum;
  readonly TEXTURE_BINDING_2D_ARRAY: GLenum;
  readonly TEXTURE_BINDING_3D: GLenum;
  readonly TEXTURE_COMPARE_FUNC: GLenum;
  readonly TEXTURE_COMPARE_MODE: GLenum;
  readonly TEXTURE_IMMUTABLE_FORMAT: GLenum;
  readonly TEXTURE_IMMUTABLE_LEVELS: GLenum;
  readonly TEXTURE_MAX_LEVEL: GLenum;
  readonly TEXTURE_MAX_LOD: GLenum;
  readonly TEXTURE_MIN_LOD: GLenum;
  readonly TEXTURE_WRAP_R: GLenum;
  readonly TIMEOUT_EXPIRED: GLenum;
  readonly TIMEOUT_IGNORED: GLint64;
  readonly TRANSFORM_FEEDBACK: GLenum;
  readonly TRANSFORM_FEEDBACK_ACTIVE: GLenum;
  readonly TRANSFORM_FEEDBACK_BINDING: GLenum;
  readonly TRANSFORM_FEEDBACK_BUFFER: GLenum;
  readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: GLenum;
  readonly TRANSFORM_FEEDBACK_BUFFER_MODE: GLenum;
  readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: GLenum;
  readonly TRANSFORM_FEEDBACK_BUFFER_START: GLenum;
  readonly TRANSFORM_FEEDBACK_PAUSED: GLenum;
  readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: GLenum;
  readonly TRANSFORM_FEEDBACK_VARYINGS: GLenum;
  readonly UNIFORM_ARRAY_STRIDE: GLenum;
  readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: GLenum;
  readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: GLenum;
  readonly UNIFORM_BLOCK_BINDING: GLenum;
  readonly UNIFORM_BLOCK_DATA_SIZE: GLenum;
  readonly UNIFORM_BLOCK_INDEX: GLenum;
  readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: GLenum;
  readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: GLenum;
  readonly UNIFORM_BUFFER: GLenum;
  readonly UNIFORM_BUFFER_BINDING: GLenum;
  readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: GLenum;
  readonly UNIFORM_BUFFER_SIZE: GLenum;
  readonly UNIFORM_BUFFER_START: GLenum;
  readonly UNIFORM_IS_ROW_MAJOR: GLenum;
  readonly UNIFORM_MATRIX_STRIDE: GLenum;
  readonly UNIFORM_OFFSET: GLenum;
  readonly UNIFORM_SIZE: GLenum;
  readonly UNIFORM_TYPE: GLenum;
  readonly UNPACK_IMAGE_HEIGHT: GLenum;
  readonly UNPACK_ROW_LENGTH: GLenum;
  readonly UNPACK_SKIP_IMAGES: GLenum;
  readonly UNPACK_SKIP_PIXELS: GLenum;
  readonly UNPACK_SKIP_ROWS: GLenum;
  readonly UNSIGNALED: GLenum;
  readonly UNSIGNED_INT_10F_11F_11F_REV: GLenum;
  readonly UNSIGNED_INT_24_8: GLenum;
  readonly UNSIGNED_INT_2_10_10_10_REV: GLenum;
  readonly UNSIGNED_INT_5_9_9_9_REV: GLenum;
  readonly UNSIGNED_INT_SAMPLER_2D: GLenum;
  readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: GLenum;
  readonly UNSIGNED_INT_SAMPLER_3D: GLenum;
  readonly UNSIGNED_INT_SAMPLER_CUBE: GLenum;
  readonly UNSIGNED_INT_VEC2: GLenum;
  readonly UNSIGNED_INT_VEC3: GLenum;
  readonly UNSIGNED_INT_VEC4: GLenum;
  readonly UNSIGNED_NORMALIZED: GLenum;
  readonly VERTEX_ARRAY_BINDING: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_DIVISOR: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_INTEGER: GLenum;
  readonly WAIT_FAILED: GLenum;
}

interface WebGL2RenderingContextBase {
  beginQuery(target: GLenum, query: WebGLQuery): void;
  beginTransformFeedback(primitiveMode: GLenum): void;
  bindBufferBase(target: GLenum, index: GLuint, buffer: WebGLBuffer | null): void;
  bindBufferRange(target: GLenum, index: GLuint, buffer: WebGLBuffer | null, offset: GLintptr, size: GLsizeiptr): void;
  bindSampler(unit: GLuint, sampler: WebGLSampler | null): void;
  bindTransformFeedback(target: GLenum, tf: WebGLTransformFeedback | null): void;
  bindVertexArray(array: WebGLVertexArrayObject | null): void;
  blitFramebuffer(srcX0: GLint, srcY0: GLint, srcX1: GLint, srcY1: GLint, dstX0: GLint, dstY0: GLint, dstX1: GLint, dstY1: GLint, mask: GLbitfield, filter: GLenum): void;
  clearBufferfi(buffer: GLenum, drawbuffer: GLint, depth: GLfloat, stencil: GLint): void;
  clearBufferfv(buffer: GLenum, drawbuffer: GLint, values: Float32List, srcOffset?: GLuint): void;
  clearBufferiv(buffer: GLenum, drawbuffer: GLint, values: Int32List, srcOffset?: GLuint): void;
  clearBufferuiv(buffer: GLenum, drawbuffer: GLint, values: Uint32List, srcOffset?: GLuint): void;
  clientWaitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLuint64): GLenum;
  compressedTexImage3D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, imageSize: GLsizei, offset: GLintptr): void;
  compressedTexImage3D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint): void;
  compressedTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, imageSize: GLsizei, offset: GLintptr): void;
  compressedTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint): void;
  copyBufferSubData(readTarget: GLenum, writeTarget: GLenum, readOffset: GLintptr, writeOffset: GLintptr, size: GLsizeiptr): void;
  copyTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
  createQuery(): WebGLQuery | null;
  createSampler(): WebGLSampler | null;
  createTransformFeedback(): WebGLTransformFeedback | null;
  createVertexArray(): WebGLVertexArrayObject | null;
  deleteQuery(query: WebGLQuery | null): void;
  deleteSampler(sampler: WebGLSampler | null): void;
  deleteSync(sync: WebGLSync | null): void;
  deleteTransformFeedback(tf: WebGLTransformFeedback | null): void;
  deleteVertexArray(vertexArray: WebGLVertexArrayObject | null): void;
  drawArraysInstanced(mode: GLenum, first: GLint, count: GLsizei, instanceCount: GLsizei): void;
  drawBuffers(buffers: GLenum[]): void;
  drawElementsInstanced(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, instanceCount: GLsizei): void;
  drawRangeElements(mode: GLenum, start: GLuint, end: GLuint, count: GLsizei, type: GLenum, offset: GLintptr): void;
  endQuery(target: GLenum): void;
  endTransformFeedback(): void;
  fenceSync(condition: GLenum, flags: GLbitfield): WebGLSync | null;
  framebufferTextureLayer(target: GLenum, attachment: GLenum, texture: WebGLTexture | null, level: GLint, layer: GLint): void;
  getActiveUniformBlockName(program: WebGLProgram, uniformBlockIndex: GLuint): string | null;
  getActiveUniformBlockParameter(program: WebGLProgram, uniformBlockIndex: GLuint, pname: GLenum): any;
  getActiveUniforms(program: WebGLProgram, uniformIndices: GLuint[], pname: GLenum): any;
  getBufferSubData(target: GLenum, srcByteOffset: GLintptr, dstBuffer: ArrayBufferView, dstOffset?: GLuint, length?: GLuint): void;
  getFragDataLocation(program: WebGLProgram, name: string): GLint;
  getIndexedParameter(target: GLenum, index: GLuint): any;
  getInternalformatParameter(target: GLenum, internalformat: GLenum, pname: GLenum): any;
  getQuery(target: GLenum, pname: GLenum): WebGLQuery | null;
  getQueryParameter(query: WebGLQuery, pname: GLenum): any;
  getSamplerParameter(sampler: WebGLSampler, pname: GLenum): any;
  getSyncParameter(sync: WebGLSync, pname: GLenum): any;
  getTransformFeedbackVarying(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
  getUniformBlockIndex(program: WebGLProgram, uniformBlockName: string): GLuint;
  getUniformIndices(program: WebGLProgram, uniformNames: string[]): GLuint[] | null;
  invalidateFramebuffer(target: GLenum, attachments: GLenum[]): void;
  invalidateSubFramebuffer(target: GLenum, attachments: GLenum[], x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
  isQuery(query: WebGLQuery | null): GLboolean;
  isSampler(sampler: WebGLSampler | null): GLboolean;
  isSync(sync: WebGLSync | null): GLboolean;
  isTransformFeedback(tf: WebGLTransformFeedback | null): GLboolean;
  isVertexArray(vertexArray: WebGLVertexArrayObject | null): GLboolean;
  pauseTransformFeedback(): void;
  readBuffer(src: GLenum): void;
  renderbufferStorageMultisample(target: GLenum, samples: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
  resumeTransformFeedback(): void;
  samplerParameterf(sampler: WebGLSampler, pname: GLenum, param: GLfloat): void;
  samplerParameteri(sampler: WebGLSampler, pname: GLenum, param: GLint): void;
  texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
  texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
  texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView | null): void;
  texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView, srcOffset: GLuint): void;
  texStorage2D(target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
  texStorage3D(target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei): void;
  texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
  texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, source: TexImageSource): void;
  texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, srcData: ArrayBufferView | null, srcOffset?: GLuint): void;
  transformFeedbackVaryings(program: WebGLProgram, varyings: string[], bufferMode: GLenum): void;
  uniform1ui(location: WebGLUniformLocation | null, v0: GLuint): void;
  uniform1uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniform2ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint): void;
  uniform2uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniform3ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint, v2: GLuint): void;
  uniform3uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniform4ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint, v2: GLuint, v3: GLuint): void;
  uniform4uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniformBlockBinding(program: WebGLProgram, uniformBlockIndex: GLuint, uniformBlockBinding: GLuint): void;
  uniformMatrix2x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniformMatrix2x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniformMatrix3x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniformMatrix3x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniformMatrix4x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniformMatrix4x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  vertexAttribDivisor(index: GLuint, divisor: GLuint): void;
  vertexAttribI4i(index: GLuint, x: GLint, y: GLint, z: GLint, w: GLint): void;
  vertexAttribI4iv(index: GLuint, values: Int32List): void;
  vertexAttribI4ui(index: GLuint, x: GLuint, y: GLuint, z: GLuint, w: GLuint): void;
  vertexAttribI4uiv(index: GLuint, values: Uint32List): void;
  vertexAttribIPointer(index: GLuint, size: GLint, type: GLenum, stride: GLsizei, offset: GLintptr): void;
  waitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLint64): void;
  readonly ACTIVE_UNIFORM_BLOCKS: GLenum;
  readonly ALREADY_SIGNALED: GLenum;
  readonly ANY_SAMPLES_PASSED: GLenum;
  readonly ANY_SAMPLES_PASSED_CONSERVATIVE: GLenum;
  readonly COLOR: GLenum;
  readonly COLOR_ATTACHMENT1: GLenum;
  readonly COLOR_ATTACHMENT10: GLenum;
  readonly COLOR_ATTACHMENT11: GLenum;
  readonly COLOR_ATTACHMENT12: GLenum;
  readonly COLOR_ATTACHMENT13: GLenum;
  readonly COLOR_ATTACHMENT14: GLenum;
  readonly COLOR_ATTACHMENT15: GLenum;
  readonly COLOR_ATTACHMENT2: GLenum;
  readonly COLOR_ATTACHMENT3: GLenum;
  readonly COLOR_ATTACHMENT4: GLenum;
  readonly COLOR_ATTACHMENT5: GLenum;
  readonly COLOR_ATTACHMENT6: GLenum;
  readonly COLOR_ATTACHMENT7: GLenum;
  readonly COLOR_ATTACHMENT8: GLenum;
  readonly COLOR_ATTACHMENT9: GLenum;
  readonly COMPARE_REF_TO_TEXTURE: GLenum;
  readonly CONDITION_SATISFIED: GLenum;
  readonly COPY_READ_BUFFER: GLenum;
  readonly COPY_READ_BUFFER_BINDING: GLenum;
  readonly COPY_WRITE_BUFFER: GLenum;
  readonly COPY_WRITE_BUFFER_BINDING: GLenum;
  readonly CURRENT_QUERY: GLenum;
  readonly DEPTH: GLenum;
  readonly DEPTH24_STENCIL8: GLenum;
  readonly DEPTH32F_STENCIL8: GLenum;
  readonly DEPTH_COMPONENT24: GLenum;
  readonly DEPTH_COMPONENT32F: GLenum;
  readonly DRAW_BUFFER0: GLenum;
  readonly DRAW_BUFFER1: GLenum;
  readonly DRAW_BUFFER10: GLenum;
  readonly DRAW_BUFFER11: GLenum;
  readonly DRAW_BUFFER12: GLenum;
  readonly DRAW_BUFFER13: GLenum;
  readonly DRAW_BUFFER14: GLenum;
  readonly DRAW_BUFFER15: GLenum;
  readonly DRAW_BUFFER2: GLenum;
  readonly DRAW_BUFFER3: GLenum;
  readonly DRAW_BUFFER4: GLenum;
  readonly DRAW_BUFFER5: GLenum;
  readonly DRAW_BUFFER6: GLenum;
  readonly DRAW_BUFFER7: GLenum;
  readonly DRAW_BUFFER8: GLenum;
  readonly DRAW_BUFFER9: GLenum;
  readonly DRAW_FRAMEBUFFER: GLenum;
  readonly DRAW_FRAMEBUFFER_BINDING: GLenum;
  readonly DYNAMIC_COPY: GLenum;
  readonly DYNAMIC_READ: GLenum;
  readonly FLOAT_32_UNSIGNED_INT_24_8_REV: GLenum;
  readonly FLOAT_MAT2x3: GLenum;
  readonly FLOAT_MAT2x4: GLenum;
  readonly FLOAT_MAT3x2: GLenum;
  readonly FLOAT_MAT3x4: GLenum;
  readonly FLOAT_MAT4x2: GLenum;
  readonly FLOAT_MAT4x3: GLenum;
  readonly FRAGMENT_SHADER_DERIVATIVE_HINT: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: GLenum;
  readonly FRAMEBUFFER_DEFAULT: GLenum;
  readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: GLenum;
  readonly HALF_FLOAT: GLenum;
  readonly INTERLEAVED_ATTRIBS: GLenum;
  readonly INT_2_10_10_10_REV: GLenum;
  readonly INT_SAMPLER_2D: GLenum;
  readonly INT_SAMPLER_2D_ARRAY: GLenum;
  readonly INT_SAMPLER_3D: GLenum;
  readonly INT_SAMPLER_CUBE: GLenum;
  readonly INVALID_INDEX: GLenum;
  readonly MAX: GLenum;
  readonly MAX_3D_TEXTURE_SIZE: GLenum;
  readonly MAX_ARRAY_TEXTURE_LAYERS: GLenum;
  readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: GLenum;
  readonly MAX_COLOR_ATTACHMENTS: GLenum;
  readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: GLenum;
  readonly MAX_COMBINED_UNIFORM_BLOCKS: GLenum;
  readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: GLenum;
  readonly MAX_DRAW_BUFFERS: GLenum;
  readonly MAX_ELEMENTS_INDICES: GLenum;
  readonly MAX_ELEMENTS_VERTICES: GLenum;
  readonly MAX_ELEMENT_INDEX: GLenum;
  readonly MAX_FRAGMENT_INPUT_COMPONENTS: GLenum;
  readonly MAX_FRAGMENT_UNIFORM_BLOCKS: GLenum;
  readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: GLenum;
  readonly MAX_PROGRAM_TEXEL_OFFSET: GLenum;
  readonly MAX_SAMPLES: GLenum;
  readonly MAX_SERVER_WAIT_TIMEOUT: GLenum;
  readonly MAX_TEXTURE_LOD_BIAS: GLenum;
  readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: GLenum;
  readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: GLenum;
  readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: GLenum;
  readonly MAX_UNIFORM_BLOCK_SIZE: GLenum;
  readonly MAX_UNIFORM_BUFFER_BINDINGS: GLenum;
  readonly MAX_VARYING_COMPONENTS: GLenum;
  readonly MAX_VERTEX_OUTPUT_COMPONENTS: GLenum;
  readonly MAX_VERTEX_UNIFORM_BLOCKS: GLenum;
  readonly MAX_VERTEX_UNIFORM_COMPONENTS: GLenum;
  readonly MIN: GLenum;
  readonly MIN_PROGRAM_TEXEL_OFFSET: GLenum;
  readonly OBJECT_TYPE: GLenum;
  readonly PACK_ROW_LENGTH: GLenum;
  readonly PACK_SKIP_PIXELS: GLenum;
  readonly PACK_SKIP_ROWS: GLenum;
  readonly PIXEL_PACK_BUFFER: GLenum;
  readonly PIXEL_PACK_BUFFER_BINDING: GLenum;
  readonly PIXEL_UNPACK_BUFFER: GLenum;
  readonly PIXEL_UNPACK_BUFFER_BINDING: GLenum;
  readonly QUERY_RESULT: GLenum;
  readonly QUERY_RESULT_AVAILABLE: GLenum;
  readonly R11F_G11F_B10F: GLenum;
  readonly R16F: GLenum;
  readonly R16I: GLenum;
  readonly R16UI: GLenum;
  readonly R32F: GLenum;
  readonly R32I: GLenum;
  readonly R32UI: GLenum;
  readonly R8: GLenum;
  readonly R8I: GLenum;
  readonly R8UI: GLenum;
  readonly R8_SNORM: GLenum;
  readonly RASTERIZER_DISCARD: GLenum;
  readonly READ_BUFFER: GLenum;
  readonly READ_FRAMEBUFFER: GLenum;
  readonly READ_FRAMEBUFFER_BINDING: GLenum;
  readonly RED: GLenum;
  readonly RED_INTEGER: GLenum;
  readonly RENDERBUFFER_SAMPLES: GLenum;
  readonly RG: GLenum;
  readonly RG16F: GLenum;
  readonly RG16I: GLenum;
  readonly RG16UI: GLenum;
  readonly RG32F: GLenum;
  readonly RG32I: GLenum;
  readonly RG32UI: GLenum;
  readonly RG8: GLenum;
  readonly RG8I: GLenum;
  readonly RG8UI: GLenum;
  readonly RG8_SNORM: GLenum;
  readonly RGB10_A2: GLenum;
  readonly RGB10_A2UI: GLenum;
  readonly RGB16F: GLenum;
  readonly RGB16I: GLenum;
  readonly RGB16UI: GLenum;
  readonly RGB32F: GLenum;
  readonly RGB32I: GLenum;
  readonly RGB32UI: GLenum;
  readonly RGB8: GLenum;
  readonly RGB8I: GLenum;
  readonly RGB8UI: GLenum;
  readonly RGB8_SNORM: GLenum;
  readonly RGB9_E5: GLenum;
  readonly RGBA16F: GLenum;
  readonly RGBA16I: GLenum;
  readonly RGBA16UI: GLenum;
  readonly RGBA32F: GLenum;
  readonly RGBA32I: GLenum;
  readonly RGBA32UI: GLenum;
  readonly RGBA8: GLenum;
  readonly RGBA8I: GLenum;
  readonly RGBA8UI: GLenum;
  readonly RGBA8_SNORM: GLenum;
  readonly RGBA_INTEGER: GLenum;
  readonly RGB_INTEGER: GLenum;
  readonly RG_INTEGER: GLenum;
  readonly SAMPLER_2D_ARRAY: GLenum;
  readonly SAMPLER_2D_ARRAY_SHADOW: GLenum;
  readonly SAMPLER_2D_SHADOW: GLenum;
  readonly SAMPLER_3D: GLenum;
  readonly SAMPLER_BINDING: GLenum;
  readonly SAMPLER_CUBE_SHADOW: GLenum;
  readonly SEPARATE_ATTRIBS: GLenum;
  readonly SIGNALED: GLenum;
  readonly SIGNED_NORMALIZED: GLenum;
  readonly SRGB: GLenum;
  readonly SRGB8: GLenum;
  readonly SRGB8_ALPHA8: GLenum;
  readonly STATIC_COPY: GLenum;
  readonly STATIC_READ: GLenum;
  readonly STENCIL: GLenum;
  readonly STREAM_COPY: GLenum;
  readonly STREAM_READ: GLenum;
  readonly SYNC_CONDITION: GLenum;
  readonly SYNC_FENCE: GLenum;
  readonly SYNC_FLAGS: GLenum;
  readonly SYNC_FLUSH_COMMANDS_BIT: GLenum;
  readonly SYNC_GPU_COMMANDS_COMPLETE: GLenum;
  readonly SYNC_STATUS: GLenum;
  readonly TEXTURE_2D_ARRAY: GLenum;
  readonly TEXTURE_3D: GLenum;
  readonly TEXTURE_BASE_LEVEL: GLenum;
  readonly TEXTURE_BINDING_2D_ARRAY: GLenum;
  readonly TEXTURE_BINDING_3D: GLenum;
  readonly TEXTURE_COMPARE_FUNC: GLenum;
  readonly TEXTURE_COMPARE_MODE: GLenum;
  readonly TEXTURE_IMMUTABLE_FORMAT: GLenum;
  readonly TEXTURE_IMMUTABLE_LEVELS: GLenum;
  readonly TEXTURE_MAX_LEVEL: GLenum;
  readonly TEXTURE_MAX_LOD: GLenum;
  readonly TEXTURE_MIN_LOD: GLenum;
  readonly TEXTURE_WRAP_R: GLenum;
  readonly TIMEOUT_EXPIRED: GLenum;
  readonly TIMEOUT_IGNORED: GLint64;
  readonly TRANSFORM_FEEDBACK: GLenum;
  readonly TRANSFORM_FEEDBACK_ACTIVE: GLenum;
  readonly TRANSFORM_FEEDBACK_BINDING: GLenum;
  readonly TRANSFORM_FEEDBACK_BUFFER: GLenum;
  readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: GLenum;
  readonly TRANSFORM_FEEDBACK_BUFFER_MODE: GLenum;
  readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: GLenum;
  readonly TRANSFORM_FEEDBACK_BUFFER_START: GLenum;
  readonly TRANSFORM_FEEDBACK_PAUSED: GLenum;
  readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: GLenum;
  readonly TRANSFORM_FEEDBACK_VARYINGS: GLenum;
  readonly UNIFORM_ARRAY_STRIDE: GLenum;
  readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: GLenum;
  readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: GLenum;
  readonly UNIFORM_BLOCK_BINDING: GLenum;
  readonly UNIFORM_BLOCK_DATA_SIZE: GLenum;
  readonly UNIFORM_BLOCK_INDEX: GLenum;
  readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: GLenum;
  readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: GLenum;
  readonly UNIFORM_BUFFER: GLenum;
  readonly UNIFORM_BUFFER_BINDING: GLenum;
  readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: GLenum;
  readonly UNIFORM_BUFFER_SIZE: GLenum;
  readonly UNIFORM_BUFFER_START: GLenum;
  readonly UNIFORM_IS_ROW_MAJOR: GLenum;
  readonly UNIFORM_MATRIX_STRIDE: GLenum;
  readonly UNIFORM_OFFSET: GLenum;
  readonly UNIFORM_SIZE: GLenum;
  readonly UNIFORM_TYPE: GLenum;
  readonly UNPACK_IMAGE_HEIGHT: GLenum;
  readonly UNPACK_ROW_LENGTH: GLenum;
  readonly UNPACK_SKIP_IMAGES: GLenum;
  readonly UNPACK_SKIP_PIXELS: GLenum;
  readonly UNPACK_SKIP_ROWS: GLenum;
  readonly UNSIGNALED: GLenum;
  readonly UNSIGNED_INT_10F_11F_11F_REV: GLenum;
  readonly UNSIGNED_INT_24_8: GLenum;
  readonly UNSIGNED_INT_2_10_10_10_REV: GLenum;
  readonly UNSIGNED_INT_5_9_9_9_REV: GLenum;
  readonly UNSIGNED_INT_SAMPLER_2D: GLenum;
  readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: GLenum;
  readonly UNSIGNED_INT_SAMPLER_3D: GLenum;
  readonly UNSIGNED_INT_SAMPLER_CUBE: GLenum;
  readonly UNSIGNED_INT_VEC2: GLenum;
  readonly UNSIGNED_INT_VEC3: GLenum;
  readonly UNSIGNED_INT_VEC4: GLenum;
  readonly UNSIGNED_NORMALIZED: GLenum;
  readonly VERTEX_ARRAY_BINDING: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_DIVISOR: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_INTEGER: GLenum;
  readonly WAIT_FAILED: GLenum;
}

interface WebGL2RenderingContextOverloads {
  bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
  bufferData(target: GLenum, srcData: BufferSource | null, usage: GLenum): void;
  bufferData(target: GLenum, srcData: ArrayBufferView, usage: GLenum, srcOffset: GLuint, length?: GLuint): void;
  bufferSubData(target: GLenum, dstByteOffset: GLintptr, srcData: BufferSource): void;
  bufferSubData(target: GLenum, dstByteOffset: GLintptr, srcData: ArrayBufferView, srcOffset: GLuint, length?: GLuint): void;
  compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, imageSize: GLsizei, offset: GLintptr): void;
  compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint): void;
  compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, imageSize: GLsizei, offset: GLintptr): void;
  compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint): void;
  readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, dstData: ArrayBufferView | null): void;
  readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, offset: GLintptr): void;
  readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, dstData: ArrayBufferView, dstOffset: GLuint): void;
  texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
  texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
  texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
  texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
  texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView, srcOffset: GLuint): void;
  texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
  texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
  texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
  texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, source: TexImageSource): void;
  texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, srcData: ArrayBufferView, srcOffset: GLuint): void;
  uniform1fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniform1iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniform2fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniform2iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniform3fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniform3iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniform4fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniform4iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
  uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
}

WebGLActiveInfo: {
  prototype: WebGLActiveInfo;
  new(): WebGLActiveInfo;
}

WebGLBuffer: {
  prototype: WebGLBuffer;
  new(): WebGLBuffer;
}

interface WebGLContextAttributes {
  alpha?: boolean;
  antialias?: boolean;
  depth?: boolean;
  desynchronized?: boolean;
  failIfMajorPerformanceCaveat?: boolean;
  powerPreference?: WebGLPowerPreference;
  premultipliedAlpha?: boolean;
  preserveDrawingBuffer?: boolean;
  stencil?: boolean;
}

WebGLContextEvent: {
  prototype: WebGLContextEvent;
  new(type: string, eventInit?: WebGLContextEventInit): WebGLContextEvent;
}

interface WebGLContextEventInit extends EventInit {
  statusMessage?: string;
}

WebGLFramebuffer: {
  prototype: WebGLFramebuffer;
  new(): WebGLFramebuffer;
}

WebGLObject: {
  prototype: WebGLObject;
  new(): WebGLObject;
}

type WebGLPowerPreference = "default" | "high-performance" | "low-power";

WebGLProgram: {
  prototype: WebGLProgram;
  new(): WebGLProgram;
}

WebGLQuery: {
  prototype: WebGLQuery;
  new(): WebGLQuery;
}

WebGLRenderbuffer: {
  prototype: WebGLRenderbuffer;
  new(): WebGLRenderbuffer;
}

WebGLRenderingContext: {
  prototype: WebGLRenderingContext;
  new(): WebGLRenderingContext;
  readonly ACTIVE_ATTRIBUTES: GLenum;
  readonly ACTIVE_TEXTURE: GLenum;
  readonly ACTIVE_UNIFORMS: GLenum;
  readonly ALIASED_LINE_WIDTH_RANGE: GLenum;
  readonly ALIASED_POINT_SIZE_RANGE: GLenum;
  readonly ALPHA: GLenum;
  readonly ALPHA_BITS: GLenum;
  readonly ALWAYS: GLenum;
  readonly ARRAY_BUFFER: GLenum;
  readonly ARRAY_BUFFER_BINDING: GLenum;
  readonly ATTACHED_SHADERS: GLenum;
  readonly BACK: GLenum;
  readonly BLEND: GLenum;
  readonly BLEND_COLOR: GLenum;
  readonly BLEND_DST_ALPHA: GLenum;
  readonly BLEND_DST_RGB: GLenum;
  readonly BLEND_EQUATION: GLenum;
  readonly BLEND_EQUATION_ALPHA: GLenum;
  readonly BLEND_EQUATION_RGB: GLenum;
  readonly BLEND_SRC_ALPHA: GLenum;
  readonly BLEND_SRC_RGB: GLenum;
  readonly BLUE_BITS: GLenum;
  readonly BOOL: GLenum;
  readonly BOOL_VEC2: GLenum;
  readonly BOOL_VEC3: GLenum;
  readonly BOOL_VEC4: GLenum;
  readonly BROWSER_DEFAULT_WEBGL: GLenum;
  readonly BUFFER_SIZE: GLenum;
  readonly BUFFER_USAGE: GLenum;
  readonly BYTE: GLenum;
  readonly CCW: GLenum;
  readonly CLAMP_TO_EDGE: GLenum;
  readonly COLOR_ATTACHMENT0: GLenum;
  readonly COLOR_BUFFER_BIT: GLenum;
  readonly COLOR_CLEAR_VALUE: GLenum;
  readonly COLOR_WRITEMASK: GLenum;
  readonly COMPILE_STATUS: GLenum;
  readonly COMPRESSED_TEXTURE_FORMATS: GLenum;
  readonly CONSTANT_ALPHA: GLenum;
  readonly CONSTANT_COLOR: GLenum;
  readonly CONTEXT_LOST_WEBGL: GLenum;
  readonly CULL_FACE: GLenum;
  readonly CULL_FACE_MODE: GLenum;
  readonly CURRENT_PROGRAM: GLenum;
  readonly CURRENT_VERTEX_ATTRIB: GLenum;
  readonly CW: GLenum;
  readonly DECR: GLenum;
  readonly DECR_WRAP: GLenum;
  readonly DELETE_STATUS: GLenum;
  readonly DEPTH_ATTACHMENT: GLenum;
  readonly DEPTH_BITS: GLenum;
  readonly DEPTH_BUFFER_BIT: GLenum;
  readonly DEPTH_CLEAR_VALUE: GLenum;
  readonly DEPTH_COMPONENT: GLenum;
  readonly DEPTH_COMPONENT16: GLenum;
  readonly DEPTH_FUNC: GLenum;
  readonly DEPTH_RANGE: GLenum;
  readonly DEPTH_STENCIL: GLenum;
  readonly DEPTH_STENCIL_ATTACHMENT: GLenum;
  readonly DEPTH_TEST: GLenum;
  readonly DEPTH_WRITEMASK: GLenum;
  readonly DITHER: GLenum;
  readonly DONT_CARE: GLenum;
  readonly DST_ALPHA: GLenum;
  readonly DST_COLOR: GLenum;
  readonly DYNAMIC_DRAW: GLenum;
  readonly ELEMENT_ARRAY_BUFFER: GLenum;
  readonly ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
  readonly EQUAL: GLenum;
  readonly FASTEST: GLenum;
  readonly FLOAT: GLenum;
  readonly FLOAT_MAT2: GLenum;
  readonly FLOAT_MAT3: GLenum;
  readonly FLOAT_MAT4: GLenum;
  readonly FLOAT_VEC2: GLenum;
  readonly FLOAT_VEC3: GLenum;
  readonly FLOAT_VEC4: GLenum;
  readonly FRAGMENT_SHADER: GLenum;
  readonly FRAMEBUFFER: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
  readonly FRAMEBUFFER_BINDING: GLenum;
  readonly FRAMEBUFFER_COMPLETE: GLenum;
  readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
  readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
  readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
  readonly FRAMEBUFFER_UNSUPPORTED: GLenum;
  readonly FRONT: GLenum;
  readonly FRONT_AND_BACK: GLenum;
  readonly FRONT_FACE: GLenum;
  readonly FUNC_ADD: GLenum;
  readonly FUNC_REVERSE_SUBTRACT: GLenum;
  readonly FUNC_SUBTRACT: GLenum;
  readonly GENERATE_MIPMAP_HINT: GLenum;
  readonly GEQUAL: GLenum;
  readonly GREATER: GLenum;
  readonly GREEN_BITS: GLenum;
  readonly HIGH_FLOAT: GLenum;
  readonly HIGH_INT: GLenum;
  readonly IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
  readonly IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
  readonly INCR: GLenum;
  readonly INCR_WRAP: GLenum;
  readonly INT: GLenum;
  readonly INT_VEC2: GLenum;
  readonly INT_VEC3: GLenum;
  readonly INT_VEC4: GLenum;
  readonly INVALID_ENUM: GLenum;
  readonly INVALID_FRAMEBUFFER_OPERATION: GLenum;
  readonly INVALID_OPERATION: GLenum;
  readonly INVALID_VALUE: GLenum;
  readonly INVERT: GLenum;
  readonly KEEP: GLenum;
  readonly LEQUAL: GLenum;
  readonly LESS: GLenum;
  readonly LINEAR: GLenum;
  readonly LINEAR_MIPMAP_LINEAR: GLenum;
  readonly LINEAR_MIPMAP_NEAREST: GLenum;
  readonly LINES: GLenum;
  readonly LINE_LOOP: GLenum;
  readonly LINE_STRIP: GLenum;
  readonly LINE_WIDTH: GLenum;
  readonly LINK_STATUS: GLenum;
  readonly LOW_FLOAT: GLenum;
  readonly LOW_INT: GLenum;
  readonly LUMINANCE: GLenum;
  readonly LUMINANCE_ALPHA: GLenum;
  readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
  readonly MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
  readonly MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
  readonly MAX_RENDERBUFFER_SIZE: GLenum;
  readonly MAX_TEXTURE_IMAGE_UNITS: GLenum;
  readonly MAX_TEXTURE_SIZE: GLenum;
  readonly MAX_VARYING_VECTORS: GLenum;
  readonly MAX_VERTEX_ATTRIBS: GLenum;
  readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
  readonly MAX_VERTEX_UNIFORM_VECTORS: GLenum;
  readonly MAX_VIEWPORT_DIMS: GLenum;
  readonly MEDIUM_FLOAT: GLenum;
  readonly MEDIUM_INT: GLenum;
  readonly MIRRORED_REPEAT: GLenum;
  readonly NEAREST: GLenum;
  readonly NEAREST_MIPMAP_LINEAR: GLenum;
  readonly NEAREST_MIPMAP_NEAREST: GLenum;
  readonly NEVER: GLenum;
  readonly NICEST: GLenum;
  readonly NONE: GLenum;
  readonly NOTEQUAL: GLenum;
  readonly NO_ERROR: GLenum;
  readonly ONE: GLenum;
  readonly ONE_MINUS_CONSTANT_ALPHA: GLenum;
  readonly ONE_MINUS_CONSTANT_COLOR: GLenum;
  readonly ONE_MINUS_DST_ALPHA: GLenum;
  readonly ONE_MINUS_DST_COLOR: GLenum;
  readonly ONE_MINUS_SRC_ALPHA: GLenum;
  readonly ONE_MINUS_SRC_COLOR: GLenum;
  readonly OUT_OF_MEMORY: GLenum;
  readonly PACK_ALIGNMENT: GLenum;
  readonly POINTS: GLenum;
  readonly POLYGON_OFFSET_FACTOR: GLenum;
  readonly POLYGON_OFFSET_FILL: GLenum;
  readonly POLYGON_OFFSET_UNITS: GLenum;
  readonly RED_BITS: GLenum;
  readonly RENDERBUFFER: GLenum;
  readonly RENDERBUFFER_ALPHA_SIZE: GLenum;
  readonly RENDERBUFFER_BINDING: GLenum;
  readonly RENDERBUFFER_BLUE_SIZE: GLenum;
  readonly RENDERBUFFER_DEPTH_SIZE: GLenum;
  readonly RENDERBUFFER_GREEN_SIZE: GLenum;
  readonly RENDERBUFFER_HEIGHT: GLenum;
  readonly RENDERBUFFER_INTERNAL_FORMAT: GLenum;
  readonly RENDERBUFFER_RED_SIZE: GLenum;
  readonly RENDERBUFFER_STENCIL_SIZE: GLenum;
  readonly RENDERBUFFER_WIDTH: GLenum;
  readonly RENDERER: GLenum;
  readonly REPEAT: GLenum;
  readonly REPLACE: GLenum;
  readonly RGB: GLenum;
  readonly RGB565: GLenum;
  readonly RGB5_A1: GLenum;
  readonly RGBA: GLenum;
  readonly RGBA4: GLenum;
  readonly SAMPLER_2D: GLenum;
  readonly SAMPLER_CUBE: GLenum;
  readonly SAMPLES: GLenum;
  readonly SAMPLE_ALPHA_TO_COVERAGE: GLenum;
  readonly SAMPLE_BUFFERS: GLenum;
  readonly SAMPLE_COVERAGE: GLenum;
  readonly SAMPLE_COVERAGE_INVERT: GLenum;
  readonly SAMPLE_COVERAGE_VALUE: GLenum;
  readonly SCISSOR_BOX: GLenum;
  readonly SCISSOR_TEST: GLenum;
  readonly SHADER_TYPE: GLenum;
  readonly SHADING_LANGUAGE_VERSION: GLenum;
  readonly SHORT: GLenum;
  readonly SRC_ALPHA: GLenum;
  readonly SRC_ALPHA_SATURATE: GLenum;
  readonly SRC_COLOR: GLenum;
  readonly STATIC_DRAW: GLenum;
  readonly STENCIL_ATTACHMENT: GLenum;
  readonly STENCIL_BACK_FAIL: GLenum;
  readonly STENCIL_BACK_FUNC: GLenum;
  readonly STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
  readonly STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
  readonly STENCIL_BACK_REF: GLenum;
  readonly STENCIL_BACK_VALUE_MASK: GLenum;
  readonly STENCIL_BACK_WRITEMASK: GLenum;
  readonly STENCIL_BITS: GLenum;
  readonly STENCIL_BUFFER_BIT: GLenum;
  readonly STENCIL_CLEAR_VALUE: GLenum;
  readonly STENCIL_FAIL: GLenum;
  readonly STENCIL_FUNC: GLenum;
  readonly STENCIL_INDEX8: GLenum;
  readonly STENCIL_PASS_DEPTH_FAIL: GLenum;
  readonly STENCIL_PASS_DEPTH_PASS: GLenum;
  readonly STENCIL_REF: GLenum;
  readonly STENCIL_TEST: GLenum;
  readonly STENCIL_VALUE_MASK: GLenum;
  readonly STENCIL_WRITEMASK: GLenum;
  readonly STREAM_DRAW: GLenum;
  readonly SUBPIXEL_BITS: GLenum;
  readonly TEXTURE: GLenum;
  readonly TEXTURE0: GLenum;
  readonly TEXTURE1: GLenum;
  readonly TEXTURE10: GLenum;
  readonly TEXTURE11: GLenum;
  readonly TEXTURE12: GLenum;
  readonly TEXTURE13: GLenum;
  readonly TEXTURE14: GLenum;
  readonly TEXTURE15: GLenum;
  readonly TEXTURE16: GLenum;
  readonly TEXTURE17: GLenum;
  readonly TEXTURE18: GLenum;
  readonly TEXTURE19: GLenum;
  readonly TEXTURE2: GLenum;
  readonly TEXTURE20: GLenum;
  readonly TEXTURE21: GLenum;
  readonly TEXTURE22: GLenum;
  readonly TEXTURE23: GLenum;
  readonly TEXTURE24: GLenum;
  readonly TEXTURE25: GLenum;
  readonly TEXTURE26: GLenum;
  readonly TEXTURE27: GLenum;
  readonly TEXTURE28: GLenum;
  readonly TEXTURE29: GLenum;
  readonly TEXTURE3: GLenum;
  readonly TEXTURE30: GLenum;
  readonly TEXTURE31: GLenum;
  readonly TEXTURE4: GLenum;
  readonly TEXTURE5: GLenum;
  readonly TEXTURE6: GLenum;
  readonly TEXTURE7: GLenum;
  readonly TEXTURE8: GLenum;
  readonly TEXTURE9: GLenum;
  readonly TEXTURE_2D: GLenum;
  readonly TEXTURE_BINDING_2D: GLenum;
  readonly TEXTURE_BINDING_CUBE_MAP: GLenum;
  readonly TEXTURE_CUBE_MAP: GLenum;
  readonly TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
  readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
  readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
  readonly TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
  readonly TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
  readonly TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
  readonly TEXTURE_MAG_FILTER: GLenum;
  readonly TEXTURE_MIN_FILTER: GLenum;
  readonly TEXTURE_WRAP_S: GLenum;
  readonly TEXTURE_WRAP_T: GLenum;
  readonly TRIANGLES: GLenum;
  readonly TRIANGLE_FAN: GLenum;
  readonly TRIANGLE_STRIP: GLenum;
  readonly UNPACK_ALIGNMENT: GLenum;
  readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
  readonly UNPACK_FLIP_Y_WEBGL: GLenum;
  readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
  readonly UNSIGNED_BYTE: GLenum;
  readonly UNSIGNED_INT: GLenum;
  readonly UNSIGNED_SHORT: GLenum;
  readonly UNSIGNED_SHORT_4_4_4_4: GLenum;
  readonly UNSIGNED_SHORT_5_5_5_1: GLenum;
  readonly UNSIGNED_SHORT_5_6_5: GLenum;
  readonly VALIDATE_STATUS: GLenum;
  readonly VENDOR: GLenum;
  readonly VERSION: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
  readonly VERTEX_SHADER: GLenum;
  readonly VIEWPORT: GLenum;
  readonly ZERO: GLenum;
}

interface WebGLRenderingContextBase {
  readonly canvas: HTMLCanvasElement | OffscreenCanvas;
  readonly drawingBufferHeight: GLsizei;
  readonly drawingBufferWidth: GLsizei;
  activeTexture(texture: GLenum): void;
  attachShader(program: WebGLProgram, shader: WebGLShader): void;
  bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
  bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void;
  bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
  bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
  bindTexture(target: GLenum, texture: WebGLTexture | null): void;
  blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
  blendEquation(mode: GLenum): void;
  blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
  blendFunc(sfactor: GLenum, dfactor: GLenum): void;
  blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
  checkFramebufferStatus(target: GLenum): GLenum;
  clear(mask: GLbitfield): void;
  clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
  clearDepth(depth: GLclampf): void;
  clearStencil(s: GLint): void;
  colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
  compileShader(shader: WebGLShader): void;
  copyTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: GLint): void;
  copyTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
  createBuffer(): WebGLBuffer | null;
  createFramebuffer(): WebGLFramebuffer | null;
  createProgram(): WebGLProgram | null;
  createRenderbuffer(): WebGLRenderbuffer | null;
  createShader(type: GLenum): WebGLShader | null;
  createTexture(): WebGLTexture | null;
  cullFace(mode: GLenum): void;
  deleteBuffer(buffer: WebGLBuffer | null): void;
  deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
  deleteProgram(program: WebGLProgram | null): void;
  deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
  deleteShader(shader: WebGLShader | null): void;
  deleteTexture(texture: WebGLTexture | null): void;
  depthFunc(func: GLenum): void;
  depthMask(flag: GLboolean): void;
  depthRange(zNear: GLclampf, zFar: GLclampf): void;
  detachShader(program: WebGLProgram, shader: WebGLShader): void;
  disable(cap: GLenum): void;
  disableVertexAttribArray(index: GLuint): void;
  drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
  drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
  enable(cap: GLenum): void;
  enableVertexAttribArray(index: GLuint): void;
  finish(): void;
  flush(): void;
  framebufferRenderbuffer(target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
  framebufferTexture2D(target: GLenum, attachment: GLenum, textarget: GLenum, texture: WebGLTexture | null, level: GLint): void;
  frontFace(mode: GLenum): void;
  generateMipmap(target: GLenum): void;
  getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
  getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
  getAttachedShaders(program: WebGLProgram): WebGLShader[] | null;
  getAttribLocation(program: WebGLProgram, name: string): GLint;
  getBufferParameter(target: GLenum, pname: GLenum): any;
  getContextAttributes(): WebGLContextAttributes | null;
  getError(): GLenum;
  getExtension(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | null;
  getExtension(extensionName: "EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic | null;
  getExtension(extensionName: "EXT_frag_depth"): EXT_frag_depth | null;
  getExtension(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | null;
  getExtension(extensionName: "EXT_sRGB"): EXT_sRGB | null;
  getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null;
  getExtension(extensionName: "WEBGL_color_buffer_float"): WEBGL_color_buffer_float | null;
  getExtension(extensionName: "WEBGL_compressed_texture_astc"): WEBGL_compressed_texture_astc | null;
  getExtension(extensionName: "WEBGL_compressed_texture_s3tc_srgb"): WEBGL_compressed_texture_s3tc_srgb | null;
  getExtension(extensionName: "WEBGL_debug_shaders"): WEBGL_debug_shaders | null;
  getExtension(extensionName: "WEBGL_draw_buffers"): WEBGL_draw_buffers | null;
  getExtension(extensionName: "WEBGL_lose_context"): WEBGL_lose_context | null;
  getExtension(extensionName: "WEBGL_depth_texture"): WEBGL_depth_texture | null;
  getExtension(extensionName: "WEBGL_debug_renderer_info"): WEBGL_debug_renderer_info | null;
  getExtension(extensionName: "WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc | null;
  getExtension(extensionName: "OES_texture_half_float_linear"): OES_texture_half_float_linear | null;
  getExtension(extensionName: "OES_texture_half_float"): OES_texture_half_float | null;
  getExtension(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | null;
  getExtension(extensionName: "OES_texture_float"): OES_texture_float | null;
  getExtension(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | null;
  getExtension(extensionName: "OES_element_index_uint"): OES_element_index_uint | null;
  getExtension(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | null;
  getExtension(extensionName: string): any;
  getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any;
  getParameter(pname: GLenum): any;
  getProgramInfoLog(program: WebGLProgram): string | null;
  getProgramParameter(program: WebGLProgram, pname: GLenum): any;
  getRenderbufferParameter(target: GLenum, pname: GLenum): any;
  getShaderInfoLog(shader: WebGLShader): string | null;
  getShaderParameter(shader: WebGLShader, pname: GLenum): any;
  getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat | null;
  getShaderSource(shader: WebGLShader): string | null;
  getSupportedExtensions(): string[] | null;
  getTexParameter(target: GLenum, pname: GLenum): any;
  getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
  getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null;
  getVertexAttrib(index: GLuint, pname: GLenum): any;
  getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;
  hint(target: GLenum, mode: GLenum): void;
  isBuffer(buffer: WebGLBuffer | null): GLboolean;
  isContextLost(): boolean;
  isEnabled(cap: GLenum): GLboolean;
  isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
  isProgram(program: WebGLProgram | null): GLboolean;
  isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
  isShader(shader: WebGLShader | null): GLboolean;
  isTexture(texture: WebGLTexture | null): GLboolean;
  lineWidth(width: GLfloat): void;
  linkProgram(program: WebGLProgram): void;
  pixelStorei(pname: GLenum, param: GLint | GLboolean): void;
  polygonOffset(factor: GLfloat, units: GLfloat): void;
  renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
  sampleCoverage(value: GLclampf, invert: GLboolean): void;
  scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
  shaderSource(shader: WebGLShader, source: string): void;
  stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
  stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;
  stencilMask(mask: GLuint): void;
  stencilMaskSeparate(face: GLenum, mask: GLuint): void;
  stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
  stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;
  texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
  texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
  uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
  uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
  uniform2f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void;
  uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
  uniform3f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void;
  uniform3i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void;
  uniform4f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
  uniform4i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void;
  useProgram(program: WebGLProgram | null): void;
  validateProgram(program: WebGLProgram): void;
  vertexAttrib1f(index: GLuint, x: GLfloat): void;
  vertexAttrib1fv(index: GLuint, values: Float32List): void;
  vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
  vertexAttrib2fv(index: GLuint, values: Float32List): void;
  vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
  vertexAttrib3fv(index: GLuint, values: Float32List): void;
  vertexAttrib4f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
  vertexAttrib4fv(index: GLuint, values: Float32List): void;
  vertexAttribPointer(index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;
  viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
  readonly ACTIVE_ATTRIBUTES: GLenum;
  readonly ACTIVE_TEXTURE: GLenum;
  readonly ACTIVE_UNIFORMS: GLenum;
  readonly ALIASED_LINE_WIDTH_RANGE: GLenum;
  readonly ALIASED_POINT_SIZE_RANGE: GLenum;
  readonly ALPHA: GLenum;
  readonly ALPHA_BITS: GLenum;
  readonly ALWAYS: GLenum;
  readonly ARRAY_BUFFER: GLenum;
  readonly ARRAY_BUFFER_BINDING: GLenum;
  readonly ATTACHED_SHADERS: GLenum;
  readonly BACK: GLenum;
  readonly BLEND: GLenum;
  readonly BLEND_COLOR: GLenum;
  readonly BLEND_DST_ALPHA: GLenum;
  readonly BLEND_DST_RGB: GLenum;
  readonly BLEND_EQUATION: GLenum;
  readonly BLEND_EQUATION_ALPHA: GLenum;
  readonly BLEND_EQUATION_RGB: GLenum;
  readonly BLEND_SRC_ALPHA: GLenum;
  readonly BLEND_SRC_RGB: GLenum;
  readonly BLUE_BITS: GLenum;
  readonly BOOL: GLenum;
  readonly BOOL_VEC2: GLenum;
  readonly BOOL_VEC3: GLenum;
  readonly BOOL_VEC4: GLenum;
  readonly BROWSER_DEFAULT_WEBGL: GLenum;
  readonly BUFFER_SIZE: GLenum;
  readonly BUFFER_USAGE: GLenum;
  readonly BYTE: GLenum;
  readonly CCW: GLenum;
  readonly CLAMP_TO_EDGE: GLenum;
  readonly COLOR_ATTACHMENT0: GLenum;
  readonly COLOR_BUFFER_BIT: GLenum;
  readonly COLOR_CLEAR_VALUE: GLenum;
  readonly COLOR_WRITEMASK: GLenum;
  readonly COMPILE_STATUS: GLenum;
  readonly COMPRESSED_TEXTURE_FORMATS: GLenum;
  readonly CONSTANT_ALPHA: GLenum;
  readonly CONSTANT_COLOR: GLenum;
  readonly CONTEXT_LOST_WEBGL: GLenum;
  readonly CULL_FACE: GLenum;
  readonly CULL_FACE_MODE: GLenum;
  readonly CURRENT_PROGRAM: GLenum;
  readonly CURRENT_VERTEX_ATTRIB: GLenum;
  readonly CW: GLenum;
  readonly DECR: GLenum;
  readonly DECR_WRAP: GLenum;
  readonly DELETE_STATUS: GLenum;
  readonly DEPTH_ATTACHMENT: GLenum;
  readonly DEPTH_BITS: GLenum;
  readonly DEPTH_BUFFER_BIT: GLenum;
  readonly DEPTH_CLEAR_VALUE: GLenum;
  readonly DEPTH_COMPONENT: GLenum;
  readonly DEPTH_COMPONENT16: GLenum;
  readonly DEPTH_FUNC: GLenum;
  readonly DEPTH_RANGE: GLenum;
  readonly DEPTH_STENCIL: GLenum;
  readonly DEPTH_STENCIL_ATTACHMENT: GLenum;
  readonly DEPTH_TEST: GLenum;
  readonly DEPTH_WRITEMASK: GLenum;
  readonly DITHER: GLenum;
  readonly DONT_CARE: GLenum;
  readonly DST_ALPHA: GLenum;
  readonly DST_COLOR: GLenum;
  readonly DYNAMIC_DRAW: GLenum;
  readonly ELEMENT_ARRAY_BUFFER: GLenum;
  readonly ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
  readonly EQUAL: GLenum;
  readonly FASTEST: GLenum;
  readonly FLOAT: GLenum;
  readonly FLOAT_MAT2: GLenum;
  readonly FLOAT_MAT3: GLenum;
  readonly FLOAT_MAT4: GLenum;
  readonly FLOAT_VEC2: GLenum;
  readonly FLOAT_VEC3: GLenum;
  readonly FLOAT_VEC4: GLenum;
  readonly FRAGMENT_SHADER: GLenum;
  readonly FRAMEBUFFER: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
  readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
  readonly FRAMEBUFFER_BINDING: GLenum;
  readonly FRAMEBUFFER_COMPLETE: GLenum;
  readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
  readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
  readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
  readonly FRAMEBUFFER_UNSUPPORTED: GLenum;
  readonly FRONT: GLenum;
  readonly FRONT_AND_BACK: GLenum;
  readonly FRONT_FACE: GLenum;
  readonly FUNC_ADD: GLenum;
  readonly FUNC_REVERSE_SUBTRACT: GLenum;
  readonly FUNC_SUBTRACT: GLenum;
  readonly GENERATE_MIPMAP_HINT: GLenum;
  readonly GEQUAL: GLenum;
  readonly GREATER: GLenum;
  readonly GREEN_BITS: GLenum;
  readonly HIGH_FLOAT: GLenum;
  readonly HIGH_INT: GLenum;
  readonly IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
  readonly IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
  readonly INCR: GLenum;
  readonly INCR_WRAP: GLenum;
  readonly INT: GLenum;
  readonly INT_VEC2: GLenum;
  readonly INT_VEC3: GLenum;
  readonly INT_VEC4: GLenum;
  readonly INVALID_ENUM: GLenum;
  readonly INVALID_FRAMEBUFFER_OPERATION: GLenum;
  readonly INVALID_OPERATION: GLenum;
  readonly INVALID_VALUE: GLenum;
  readonly INVERT: GLenum;
  readonly KEEP: GLenum;
  readonly LEQUAL: GLenum;
  readonly LESS: GLenum;
  readonly LINEAR: GLenum;
  readonly LINEAR_MIPMAP_LINEAR: GLenum;
  readonly LINEAR_MIPMAP_NEAREST: GLenum;
  readonly LINES: GLenum;
  readonly LINE_LOOP: GLenum;
  readonly LINE_STRIP: GLenum;
  readonly LINE_WIDTH: GLenum;
  readonly LINK_STATUS: GLenum;
  readonly LOW_FLOAT: GLenum;
  readonly LOW_INT: GLenum;
  readonly LUMINANCE: GLenum;
  readonly LUMINANCE_ALPHA: GLenum;
  readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
  readonly MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
  readonly MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
  readonly MAX_RENDERBUFFER_SIZE: GLenum;
  readonly MAX_TEXTURE_IMAGE_UNITS: GLenum;
  readonly MAX_TEXTURE_SIZE: GLenum;
  readonly MAX_VARYING_VECTORS: GLenum;
  readonly MAX_VERTEX_ATTRIBS: GLenum;
  readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
  readonly MAX_VERTEX_UNIFORM_VECTORS: GLenum;
  readonly MAX_VIEWPORT_DIMS: GLenum;
  readonly MEDIUM_FLOAT: GLenum;
  readonly MEDIUM_INT: GLenum;
  readonly MIRRORED_REPEAT: GLenum;
  readonly NEAREST: GLenum;
  readonly NEAREST_MIPMAP_LINEAR: GLenum;
  readonly NEAREST_MIPMAP_NEAREST: GLenum;
  readonly NEVER: GLenum;
  readonly NICEST: GLenum;
  readonly NONE: GLenum;
  readonly NOTEQUAL: GLenum;
  readonly NO_ERROR: GLenum;
  readonly ONE: GLenum;
  readonly ONE_MINUS_CONSTANT_ALPHA: GLenum;
  readonly ONE_MINUS_CONSTANT_COLOR: GLenum;
  readonly ONE_MINUS_DST_ALPHA: GLenum;
  readonly ONE_MINUS_DST_COLOR: GLenum;
  readonly ONE_MINUS_SRC_ALPHA: GLenum;
  readonly ONE_MINUS_SRC_COLOR: GLenum;
  readonly OUT_OF_MEMORY: GLenum;
  readonly PACK_ALIGNMENT: GLenum;
  readonly POINTS: GLenum;
  readonly POLYGON_OFFSET_FACTOR: GLenum;
  readonly POLYGON_OFFSET_FILL: GLenum;
  readonly POLYGON_OFFSET_UNITS: GLenum;
  readonly RED_BITS: GLenum;
  readonly RENDERBUFFER: GLenum;
  readonly RENDERBUFFER_ALPHA_SIZE: GLenum;
  readonly RENDERBUFFER_BINDING: GLenum;
  readonly RENDERBUFFER_BLUE_SIZE: GLenum;
  readonly RENDERBUFFER_DEPTH_SIZE: GLenum;
  readonly RENDERBUFFER_GREEN_SIZE: GLenum;
  readonly RENDERBUFFER_HEIGHT: GLenum;
  readonly RENDERBUFFER_INTERNAL_FORMAT: GLenum;
  readonly RENDERBUFFER_RED_SIZE: GLenum;
  readonly RENDERBUFFER_STENCIL_SIZE: GLenum;
  readonly RENDERBUFFER_WIDTH: GLenum;
  readonly RENDERER: GLenum;
  readonly REPEAT: GLenum;
  readonly REPLACE: GLenum;
  readonly RGB: GLenum;
  readonly RGB565: GLenum;
  readonly RGB5_A1: GLenum;
  readonly RGBA: GLenum;
  readonly RGBA4: GLenum;
  readonly SAMPLER_2D: GLenum;
  readonly SAMPLER_CUBE: GLenum;
  readonly SAMPLES: GLenum;
  readonly SAMPLE_ALPHA_TO_COVERAGE: GLenum;
  readonly SAMPLE_BUFFERS: GLenum;
  readonly SAMPLE_COVERAGE: GLenum;
  readonly SAMPLE_COVERAGE_INVERT: GLenum;
  readonly SAMPLE_COVERAGE_VALUE: GLenum;
  readonly SCISSOR_BOX: GLenum;
  readonly SCISSOR_TEST: GLenum;
  readonly SHADER_TYPE: GLenum;
  readonly SHADING_LANGUAGE_VERSION: GLenum;
  readonly SHORT: GLenum;
  readonly SRC_ALPHA: GLenum;
  readonly SRC_ALPHA_SATURATE: GLenum;
  readonly SRC_COLOR: GLenum;
  readonly STATIC_DRAW: GLenum;
  readonly STENCIL_ATTACHMENT: GLenum;
  readonly STENCIL_BACK_FAIL: GLenum;
  readonly STENCIL_BACK_FUNC: GLenum;
  readonly STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
  readonly STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
  readonly STENCIL_BACK_REF: GLenum;
  readonly STENCIL_BACK_VALUE_MASK: GLenum;
  readonly STENCIL_BACK_WRITEMASK: GLenum;
  readonly STENCIL_BITS: GLenum;
  readonly STENCIL_BUFFER_BIT: GLenum;
  readonly STENCIL_CLEAR_VALUE: GLenum;
  readonly STENCIL_FAIL: GLenum;
  readonly STENCIL_FUNC: GLenum;
  readonly STENCIL_INDEX8: GLenum;
  readonly STENCIL_PASS_DEPTH_FAIL: GLenum;
  readonly STENCIL_PASS_DEPTH_PASS: GLenum;
  readonly STENCIL_REF: GLenum;
  readonly STENCIL_TEST: GLenum;
  readonly STENCIL_VALUE_MASK: GLenum;
  readonly STENCIL_WRITEMASK: GLenum;
  readonly STREAM_DRAW: GLenum;
  readonly SUBPIXEL_BITS: GLenum;
  readonly TEXTURE: GLenum;
  readonly TEXTURE0: GLenum;
  readonly TEXTURE1: GLenum;
  readonly TEXTURE10: GLenum;
  readonly TEXTURE11: GLenum;
  readonly TEXTURE12: GLenum;
  readonly TEXTURE13: GLenum;
  readonly TEXTURE14: GLenum;
  readonly TEXTURE15: GLenum;
  readonly TEXTURE16: GLenum;
  readonly TEXTURE17: GLenum;
  readonly TEXTURE18: GLenum;
  readonly TEXTURE19: GLenum;
  readonly TEXTURE2: GLenum;
  readonly TEXTURE20: GLenum;
  readonly TEXTURE21: GLenum;
  readonly TEXTURE22: GLenum;
  readonly TEXTURE23: GLenum;
  readonly TEXTURE24: GLenum;
  readonly TEXTURE25: GLenum;
  readonly TEXTURE26: GLenum;
  readonly TEXTURE27: GLenum;
  readonly TEXTURE28: GLenum;
  readonly TEXTURE29: GLenum;
  readonly TEXTURE3: GLenum;
  readonly TEXTURE30: GLenum;
  readonly TEXTURE31: GLenum;
  readonly TEXTURE4: GLenum;
  readonly TEXTURE5: GLenum;
  readonly TEXTURE6: GLenum;
  readonly TEXTURE7: GLenum;
  readonly TEXTURE8: GLenum;
  readonly TEXTURE9: GLenum;
  readonly TEXTURE_2D: GLenum;
  readonly TEXTURE_BINDING_2D: GLenum;
  readonly TEXTURE_BINDING_CUBE_MAP: GLenum;
  readonly TEXTURE_CUBE_MAP: GLenum;
  readonly TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
  readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
  readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
  readonly TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
  readonly TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
  readonly TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
  readonly TEXTURE_MAG_FILTER: GLenum;
  readonly TEXTURE_MIN_FILTER: GLenum;
  readonly TEXTURE_WRAP_S: GLenum;
  readonly TEXTURE_WRAP_T: GLenum;
  readonly TRIANGLES: GLenum;
  readonly TRIANGLE_FAN: GLenum;
  readonly TRIANGLE_STRIP: GLenum;
  readonly UNPACK_ALIGNMENT: GLenum;
  readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
  readonly UNPACK_FLIP_Y_WEBGL: GLenum;
  readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
  readonly UNSIGNED_BYTE: GLenum;
  readonly UNSIGNED_INT: GLenum;
  readonly UNSIGNED_SHORT: GLenum;
  readonly UNSIGNED_SHORT_4_4_4_4: GLenum;
  readonly UNSIGNED_SHORT_5_5_5_1: GLenum;
  readonly UNSIGNED_SHORT_5_6_5: GLenum;
  readonly VALIDATE_STATUS: GLenum;
  readonly VENDOR: GLenum;
  readonly VERSION: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
  readonly VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
  readonly VERTEX_SHADER: GLenum;
  readonly VIEWPORT: GLenum;
  readonly ZERO: GLenum;
}

interface WebGLRenderingContextOverloads {
  bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
  bufferData(target: GLenum, data: BufferSource | null, usage: GLenum): void;
  bufferSubData(target: GLenum, offset: GLintptr, data: BufferSource): void;
  compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, data: ArrayBufferView): void;
  compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, data: ArrayBufferView): void;
  readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
  texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
  texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
  texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
  texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
  uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
  uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
  uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
  uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
  uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
  uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
  uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;
  uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;
  uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
  uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
  uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
}

WebGLSampler: {
  prototype: WebGLSampler;
  new(): WebGLSampler;
}

WebGLShader: {
  prototype: WebGLShader;
  new(): WebGLShader;
}

WebGLShaderPrecisionFormat: {
  prototype: WebGLShaderPrecisionFormat;
  new(): WebGLShaderPrecisionFormat;
}

WebGLSync: {
  prototype: WebGLSync;
  new(): WebGLSync;
}

WebGLTexture: {
  prototype: WebGLTexture;
  new(): WebGLTexture;
}

WebGLTransformFeedback: {
  prototype: WebGLTransformFeedback;
  new(): WebGLTransformFeedback;
}

WebGLUniformLocation: {
  prototype: WebGLUniformLocation;
  new(): WebGLUniformLocation;
}

WebGLVertexArrayObject: {
  prototype: WebGLVertexArrayObject;
  new(): WebGLVertexArrayObject;
}

interface WebGLVertexArrayObjectOES extends WebGLObject {
}

declare function webkitCancelAnimationFrame(handle: number): void;

declare function webkitConvertPointFromNodeToPage(node: Node, pt: WebKitPoint): WebKitPoint;

declare function webkitConvertPointFromPageToNode(node: Node, pt: WebKitPoint): WebKitPoint;

WebKitCSSMatrix: typeof DOMMatrix

WebKitPoint: {
  prototype: WebKitPoint;
  new(x?: number, y?: number): WebKitPoint;
}

declare function webkitRequestAnimationFrame(callback: FrameRequestCallback): number;

webkitRTCPeerConnection: {
  prototype: webkitRTCPeerConnection;
  new(configuration: RTCConfiguration): webkitRTCPeerConnection;
}

webkitURL: typeof URL

WebSocket: {
  prototype: WebSocket;
  new(url: string, protocols?: string | string[]): WebSocket;
  readonly CLOSED: number;
  readonly CLOSING: number;
  readonly CONNECTING: number;
  readonly OPEN: number;
}

interface WebSocketEventMap {
  "close": CloseEvent;
  "error": Event;
  "message": MessageEvent;
  "open": Event;
}

WheelEvent: {
  prototype: WheelEvent;
  new(type: string, eventInitDict?: WheelEventInit): WheelEvent;
  readonly DOM_DELTA_LINE: number;
  readonly DOM_DELTA_PAGE: number;
  readonly DOM_DELTA_PIXEL: number;
}

interface WheelEventInit extends MouseEventInit {
  deltaMode?: number;
  deltaX?: number;
  deltaY?: number;
  deltaZ?: number;
}

window: IWindow & typeof globalThis

interface WindowEventHandlers {
  onafterprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
  onbeforeprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
  onbeforeunload: ((this: WindowEventHandlers, ev: BeforeUnloadEvent) => any) | null;
  onhashchange: ((this: WindowEventHandlers, ev: HashChangeEvent) => any) | null;
  onlanguagechange: ((this: WindowEventHandlers, ev: Event) => any) | null;
  onmessage: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
  onmessageerror: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
  onoffline: ((this: WindowEventHandlers, ev: Event) => any) | null;
  ononline: ((this: WindowEventHandlers, ev: Event) => any) | null;
  onpagehide: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
  onpageshow: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
  onpopstate: ((this: WindowEventHandlers, ev: PopStateEvent) => any) | null;
  onrejectionhandled: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null;
  onstorage: ((this: WindowEventHandlers, ev: StorageEvent) => any) | null;
  onunhandledrejection: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null;
  onunload: ((this: WindowEventHandlers, ev: Event) => any) | null;
  addEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
  removeEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface WindowEventHandlersEventMap {
  "afterprint": Event;
  "beforeprint": Event;
  "beforeunload": BeforeUnloadEvent;
  "hashchange": HashChangeEvent;
  "languagechange": Event;
  "message": MessageEvent;
  "messageerror": MessageEvent;
  "offline": Event;
  "online": Event;
  "pagehide": PageTransitionEvent;
  "pageshow": PageTransitionEvent;
  "popstate": PopStateEvent;
  "rejectionhandled": PromiseRejectionEvent;
  "storage": StorageEvent;
  "unhandledrejection": PromiseRejectionEvent;
  "unload": Event;
}

interface WindowEventMap extends GlobalEventHandlersEventMap, WindowEventHandlersEventMap {
  "abort": UIEvent;
  "afterprint": Event;
  "beforeprint": Event;
  "beforeunload": BeforeUnloadEvent;
  "blur": FocusEvent;
  "canplay": Event;
  "canplaythrough": Event;
  "change": Event;
  "click": MouseEvent;
  "compassneedscalibration": Event;
  "contextmenu": MouseEvent;
  "dblclick": MouseEvent;
  "devicelight": DeviceLightEvent;
  "devicemotion": DeviceMotionEvent;
  "deviceorientation": DeviceOrientationEvent;
  "deviceorientationabsolute": DeviceOrientationEvent;
  "drag": DragEvent;
  "dragend": DragEvent;
  "dragenter": DragEvent;
  "dragleave": DragEvent;
  "dragover": DragEvent;
  "dragstart": DragEvent;
  "drop": DragEvent;
  "durationchange": Event;
  "emptied": Event;
  "ended": Event;
  "error": ErrorEvent;
  "focus": FocusEvent;
  "hashchange": HashChangeEvent;
  "input": Event;
  "invalid": Event;
  "keydown": KeyboardEvent;
  "keypress": KeyboardEvent;
  "keyup": KeyboardEvent;
  "load": Event;
  "loadeddata": Event;
  "loadedmetadata": Event;
  "loadstart": Event;
  "message": MessageEvent;
  "mousedown": MouseEvent;
  "mouseenter": MouseEvent;
  "mouseleave": MouseEvent;
  "mousemove": MouseEvent;
  "mouseout": MouseEvent;
  "mouseover": MouseEvent;
  "mouseup": MouseEvent;
  "mousewheel": Event;
  "MSGestureChange": Event;
  "MSGestureDoubleTap": Event;
  "MSGestureEnd": Event;
  "MSGestureHold": Event;
  "MSGestureStart": Event;
  "MSGestureTap": Event;
  "MSInertiaStart": Event;
  "MSPointerCancel": Event;
  "MSPointerDown": Event;
  "MSPointerEnter": Event;
  "MSPointerLeave": Event;
  "MSPointerMove": Event;
  "MSPointerOut": Event;
  "MSPointerOver": Event;
  "MSPointerUp": Event;
  "offline": Event;
  "online": Event;
  "orientationchange": Event;
  "pagehide": PageTransitionEvent;
  "pageshow": PageTransitionEvent;
  "pause": Event;
  "play": Event;
  "playing": Event;
  "popstate": PopStateEvent;
  "progress": ProgressEvent<IWindow>;
  "ratechange": Event;
  "readystatechange": ProgressEvent<IWindow>;
  "reset": Event;
  "resize": UIEvent;
  "scroll": Event;
  "seeked": Event;
  "seeking": Event;
  "select": Event;
  "stalled": Event;
  "storage": StorageEvent;
  "submit": Event;
  "suspend": Event;
  "timeupdate": Event;
  "unload": Event;
  "volumechange": Event;
  "vrdisplayactivate": Event;
  "vrdisplayblur": Event;
  "vrdisplayconnect": Event;
  "vrdisplaydeactivate": Event;
  "vrdisplaydisconnect": Event;
  "vrdisplayfocus": Event;
  "vrdisplaypointerrestricted": Event;
  "vrdisplaypointerunrestricted": Event;
  "vrdisplaypresentchange": Event;
  "waiting": Event;
}

interface WindowLocalStorage {
  readonly localStorage: Storage;
}

interface WindowOrWorkerGlobalScope {
  readonly caches: CacheStorage;
  readonly crypto: Crypto;
  readonly indexedDB: IDBFactory;
  readonly isSecureContext: boolean;
  readonly origin: string;
  readonly performance: Performance;
  atob(data: string): string;
  btoa(data: string): string;
  clearInterval(handle?: number): void;
  clearTimeout(handle?: number): void;
  createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
  createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
  fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
  queueMicrotask(callback: VoidFunction): void;
  setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
  setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
}

type WindowProxy = Window;

interface WindowSessionStorage {
  readonly sessionStorage: Storage;
}

Worker: {
  prototype: Worker;
  new(stringUrl: string | URL, options?: WorkerOptions): Worker;
}

interface WorkerEventMap extends AbstractWorkerEventMap {
  "message": MessageEvent;
  "messageerror": MessageEvent;
}

interface WorkerOptions {
  credentials?: RequestCredentials;
  name?: string;
  type?: WorkerType;
}

type WorkerType = "classic" | "module";

Worklet: {
  prototype: Worklet;
  new(): Worklet;
}

interface WorkletOptions {
  credentials?: RequestCredentials;
}

WritableStream: {
  prototype: WritableStream;
  new<W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
}

/** This Streams API interface represents a controller allowing control of a WritableStream's state. When constructing a WritableStream, the underlying sink is given a corresponding WritableStreamDefaultController instance to manipulate. */
interface WritableStreamDefaultController {
  error(error?: any): void;
}

interface WritableStreamDefaultControllerCloseCallback {
  (): void | PromiseLike<void>;
}

interface WritableStreamDefaultControllerStartCallback {
  (controller: WritableStreamDefaultController): void | PromiseLike<void>;
}

interface WritableStreamDefaultControllerWriteCallback<W> {
  (chunk: W, controller: WritableStreamDefaultController): void | PromiseLike<void>;
}

/** This Streams API interface is the object returned by WritableStream.getWriter() and once created locks the < writer to the WritableStream ensuring that no other streams can write to the underlying sink. */
interface WritableStreamDefaultWriter<W = any> {
  readonly closed: Promise<void>;
  readonly desiredSize: number | null;
  readonly ready: Promise<void>;
  abort(reason?: any): Promise<void>;
  close(): Promise<void>;
  releaseLock(): void;
  write(chunk: W): Promise<void>;
}

interface WritableStreamErrorCallback {
  (reason: any): void | PromiseLike<void>;
}

XMLDocument: {
  prototype: XMLDocument;
  new(): XMLDocument;
}

XMLHttpRequest: {
  prototype: XMLHttpRequest;
  new(): XMLHttpRequest;
  readonly DONE: number;
  readonly HEADERS_RECEIVED: number;
  readonly LOADING: number;
  readonly OPENED: number;
  readonly UNSENT: number;
}

interface XMLHttpRequestEventMap extends XMLHttpRequestEventTargetEventMap {
  "readystatechange": Event;
}

XMLHttpRequestEventTarget: {
  prototype: XMLHttpRequestEventTarget;
  new(): XMLHttpRequestEventTarget;
}

interface XMLHttpRequestEventTargetEventMap {
  "abort": ProgressEvent<XMLHttpRequestEventTarget>;
  "error": ProgressEvent<XMLHttpRequestEventTarget>;
  "load": ProgressEvent<XMLHttpRequestEventTarget>;
  "loadend": ProgressEvent<XMLHttpRequestEventTarget>;
  "loadstart": ProgressEvent<XMLHttpRequestEventTarget>;
  "progress": ProgressEvent<XMLHttpRequestEventTarget>;
  "timeout": ProgressEvent<XMLHttpRequestEventTarget>;
}

type XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";

XMLHttpRequestUpload: {
  prototype: XMLHttpRequestUpload;
  new(): XMLHttpRequestUpload;
}

XMLSerializer: {
  prototype: XMLSerializer;
  new(): XMLSerializer;
}

XPathEvaluator: {
  prototype: XPathEvaluator;
  new(): XPathEvaluator;
}

interface XPathEvaluatorBase {
  createExpression(expression: string, resolver?: XPathNSResolver | null): XPathExpression;
  createNSResolver(nodeResolver: Node): XPathNSResolver;
  evaluate(expression: string, contextNode: Node, resolver?: XPathNSResolver | null, type?: number, result?: XPathResult | null): XPathResult;
}

XPathExpression: {
  prototype: XPathExpression;
  new(): XPathExpression;
}

type XPathNSResolver = ((prefix: string | null) => string | null) | { lookupNamespaceURI(prefix: string | null): string | null; };

XPathResult: {
  prototype: XPathResult;
  new(): XPathResult;
  readonly ANY_TYPE: number;
  readonly ANY_UNORDERED_NODE_TYPE: number;
  readonly BOOLEAN_TYPE: number;
  readonly FIRST_ORDERED_NODE_TYPE: number;
  readonly NUMBER_TYPE: number;
  readonly ORDERED_NODE_ITERATOR_TYPE: number;
  readonly ORDERED_NODE_SNAPSHOT_TYPE: number;
  readonly STRING_TYPE: number;
  readonly UNORDERED_NODE_ITERATOR_TYPE: number;
  readonly UNORDERED_NODE_SNAPSHOT_TYPE: number;
}

XSLTProcessor: {
  prototype: XSLTProcessor;
  new(): XSLTProcessor;
}
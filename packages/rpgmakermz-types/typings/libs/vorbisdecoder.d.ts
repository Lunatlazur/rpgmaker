declare namespace VorbisDecorder {
  let id: number
  let instances: VorbisDecoder[]
}

declare class VorbisDecoder {
  id: number
  context: AudioContext
  worker: Worker
  constructor(context: AudioContext, decodeHandler: (buffer: AudioBuffer) => void, errorHandler: () => void)
  destroy(): void
  onMessage(message: { id: number, data: Float32Array[], sampleRate: number } & {}): void
}

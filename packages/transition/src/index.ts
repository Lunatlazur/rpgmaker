import { ColorThresholdFilter } from './color-threshold-filter'

const pluginName = 'Lunatlazur_Transition'

PIXI.filters.ColorThresholdFilter = ColorThresholdFilter

const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  _Game_Interpreter_pluginCommand.call(this, command, args)
  switch (command) {
  case 'fadein':
  case 'フェードイン':
  case 'fadeout':
  case 'フェードアウト':
    const isFadingIn = command === 'fadein' || command === 'フェードイン'
    _Game_Interpreter_processTransitionCommand.call(this, isFadingIn, args)
    break
  }
}

function _Game_Interpreter_processTransitionCommand(this: Game_Interpreter, isFadingIn: boolean, args: string[]) {
  const { isFilledWhite, name, duration } = _Game_Interpreter_parseTransitionParameters.call(this, args)
  const spriteset = SceneManager._scene._spriteset
  if (spriteset) {
    if (isFilledWhite) {
      spriteset._fadeSprite.setWhite()
    } else {
      spriteset._fadeSprite.setBlack()
    }
  }
  if (name) {
    if (isFadingIn) {
      $gameScreen._brightness = 255
    }
    $gameScreen.startTransition(isFadingIn, isFilledWhite, name, duration)
    this.wait(duration)
  } else {
    _Game_Interpreter_fadeEx.call(this, isFadingIn, isFilledWhite, duration)
  }
}

function _Game_Interpreter_parseTransitionParameters(this: Game_Interpreter, args: string[]) {
  let [fillOrNameOrDurationOrNone, nameOrDurationOrNone, durationOrNone] = args
  const parameters: {
    isFilledWhite: boolean
    name?: string
    duration: number
  } = {
    isFilledWhite: false,
    duration: _Game_Interpreter_defaultFadeSpeed.call(this),
  }
  const fill = fillOrNameOrDurationOrNone
  if (fill === '白' || fill === 'white') {
    parameters.isFilledWhite = true
  } else if (fill !== '黒' && fill === 'black') {
    nameOrDurationOrNone = fillOrNameOrDurationOrNone
    fillOrNameOrDurationOrNone = null
  }
  const duration = durationOrNone || nameOrDurationOrNone
  const matched = duration.match(/(\d+)(?:フレーム)?/)
  if (matched) {
    parameters.duration = parseInt(matched[1], 10)
    if (durationOrNone) {
      if (nameOrDurationOrNone) {
        parameters.name = nameOrDurationOrNone
      }
    }
  } else {
    if (!durationOrNone) {
      if (nameOrDurationOrNone) {
        parameters.name = nameOrDurationOrNone
      }
    }
  }
  return parameters
}

function _Game_Interpreter_fadeEx (this: Game_Interpreter, isFadingIn: boolean, isFilledWhite: boolean, duration: number) {
  if (isFadingIn) {
    TransitionManager.fadeSpeed = duration
    if (!$gameMessage.isBusy()) {
      TransitionManager.setTransition(isFadingIn, isFilledWhite, '', 1)
      $gameScreen.startFadeIn(this.fadeSpeed())
      this.wait(this.fadeSpeed())
    }
    TransitionManager.fadeSpeed = null
  } else {
    TransitionManager.fadeSpeed = duration
    if (!$gameMessage.isBusy()) {
      $gameScreen.startFadeOut(this.fadeSpeed())
      this.wait(this.fadeSpeed())
    }
    TransitionManager.fadeSpeed = null
  }
}

const _Game_Interpreter_defaultFadeSpeed = Game_Interpreter.prototype.fadeSpeed
Game_Interpreter.prototype.fadeSpeed = function() {
  if (TransitionManager.fadeSpeed !== null) {
    return TransitionManager.fadeSpeed
  }
  return _Game_Interpreter_defaultFadeSpeed.call(this)
}

Game_Screen.prototype.startTransition = function (isFadingIn: boolean, isFilledWhite: boolean, name: string, duration: number) {
  TransitionManager.setTransition(isFadingIn, isFilledWhite, name, duration)
}

const _Spriteset_Base_createUpperLayer = Spriteset_Base.prototype.createUpperLayer
Spriteset_Base.prototype.createUpperLayer = function() {
  _Spriteset_Base_createUpperLayer.call(this)
  this._transitionSprite = new Sprite_Transition()
  this.addChild(this._transitionSprite)
}

class TransitionManager {
  private static _transition: Game_Transition | null
  public static fadeSpeed: number | null = null

  public static transition () {
    return this._transition
  }

  public static setTransition (isFadingIn: boolean, isFilledWhite: boolean, name: string, duration: number) {
    this._transition = new Game_Transition(isFadingIn, isFilledWhite, name, duration)
  }

  public static clearTransition () {
    this._transition = null
  }

  public static load (filename: string, hue?: number) {
    return ImageManager.loadBitmap('img/transitions/', filename, hue, true)
  }
}

class Game_Transition {
  public isFadingIn: boolean
  public isFilledWhite: boolean
  public name: string
  public duration: number
  public durationRest: number

  constructor (isFadingIn: boolean, isFilledWhite: boolean, name: string, duration: number) {
    this.isFadingIn = isFadingIn
    this.isFilledWhite = isFilledWhite
    this.name = name
    this.duration = duration
    this.durationRest = duration
  }

  public update () {
    if (this.durationRest > 0) {
      this.durationRest -= 1
    }
  }
}

class Sprite_Transition extends Sprite_Base {
  public z: number
  private _duration: number
  private _transitionName: string
  private _thresholdFilter: PIXI.Filter<ColorThresholdFilterUniforms>
  private _durationRest: number
  private _isFadingIn: boolean
  private _isFilledWhite: boolean
  private _fillBitmap: Bitmap

  public initialize (...args: any[]): void
  public initialize () {
    super.initialize()
    this._duration = 0
    this._durationRest = 0
    this._transitionName = ''
    this._isFadingIn = false
    this._isFilledWhite = false
    this.z = 4
    this._thresholdFilter = new PIXI.filters.ColorThresholdFilter()
    this._thresholdFilter.uniforms.threshold = this._isFadingIn ? 0.0 : 1.0
    this._thresholdFilter.uniforms.white = this._isFilledWhite
    this._thresholdFilter.uniforms.fadingIn = this._isFadingIn
    this._filters = [this._thresholdFilter]
    this._fillBitmap = new Bitmap(Graphics.width, Graphics.height)
    this._fillBitmap.fillAll('white')
    this.bitmap = this._fillBitmap
  }

  public transition () {
    return TransitionManager.transition()
  }

  public update () {
    super.update()
    this.updateBitmap()
    if (this.visible) {
      this.updateTransition()
      this.updateFilter()
    }
  }

  public updateBitmap () {
    const transition = this.transition()
    if (transition) {
      const transitionName = transition.name
      if (this._transitionName !== transitionName) {
        this._transitionName = transitionName
        this.loadBitmap()
      }
      this.visible = true
    } else {
      this._transitionName = ''
      this.bitmap = this._fillBitmap
      this.visible = false
    }
  }

  public updateTransition () {
    const transition = this.transition()
    if (transition) {
      transition.update()
      this._duration = transition.duration
      this._durationRest = transition.durationRest
      this._isFadingIn = transition.isFadingIn
      this._isFilledWhite = transition.isFilledWhite
      this._thresholdFilter.uniforms.white = this._isFilledWhite
      this._thresholdFilter.uniforms.fadingIn = this._isFadingIn
      if (this._durationRest <= 0) {
        if (!this._isFadingIn) {
          $gameScreen._brightness = 0
        }
        TransitionManager.clearTransition()
      }
    }
  }

  public updateFilter () {
    if (this._durationRest > 0) {
      const threshold = (this._durationRest * 2) / this._duration
      this._thresholdFilter.uniforms.threshold = (this._isFadingIn ? threshold : 1.0 - threshold)
    }
  }

  public loadBitmap () {
    this.bitmap = TransitionManager.load(this._transitionName)
  }
}

const Game_Interpreter_requestImages = Game_Interpreter.requestImages
Game_Interpreter.requestImages = function(list, commonList) {
  if (!list) {
    return
  }
  list.filter(({ code }) => code === 356).forEach(({ parameters }) => {
    const args = (parameters[0] as string).split(' ')
    const command = args.shift()
    if (command === 'fadein' ||
      command === 'フェードイン' ||
      command === 'fadeout' ||
      command === 'フェードアウト'
    ) {
      const { name } = _Game_Interpreter_parseTransitionParameters.call(this, args)
      if (name) {
        ImageManager.requestBitmap('img/transitions/', name, 0, true)
      }
    }
  })
  Game_Interpreter_requestImages.apply(this, arguments)
}

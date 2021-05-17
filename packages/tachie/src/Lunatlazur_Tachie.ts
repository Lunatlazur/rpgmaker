type TachiePosition = 'left' | 'center' | 'right'
type TachieDistance = 'near' | 'middle' | 'far'

interface Game_Picture {
  _onMoveCompleted: () => void
}

namespace RPGMakerMV {
  export interface SaveContents {
    tachiECharacters: Tachie.Character[]
  }
}

namespace Tachie {

  export interface CharacterData {
    filename: string
    name: string
    expressions: string[]
  }

  export interface Character {
    id: number
    name: string
    expression: string
    filename: string
    x: number
    y: number
    scale: number
    position: TachiePosition
    distance: TachieDistance
  }

  export interface TachieCommandParameter {
    value: string,
    option: string
  }

  export interface ShowTachieCommandParameters {
    expression: string
    position: TachiePosition
    distance: TachieDistance
    offsetX: number
    offsetY: number
    slideX: number
    slideY: number
    duration: number
    wait: boolean
  }

  export interface ChangeTachieCommandParameters {
    name: string
    expression: string
    duration: number
    wait: boolean
  }

  export interface MoveTachieCommandParameters {
    position: TachiePosition
    offsetX: number
    offsetY: number
    duration: number
    wait: boolean
  }

  export interface EraseTachieCommandParameters {
    slideX: number
    slideY: number
    duration: number
    wait: boolean
  }

  export interface TachiePositionParameter {
    'position': TachiePosition
  }

  export interface TachieDistanceParameter {
    'distance': TachieDistance
  }

  export interface TachieOffsetXParameter {
    'offsetX': number
  }

  export interface TachieOffsetYParameter {
    'offsetY': number
  }

  export interface TachieSlideXParameter {
    'slideX': number
  }

  export interface TachieSlideYParameter {
    'slideY': number
  }

  export interface TachieDurationParameter {
    'duration': number
  }

  export interface TachieWaitParameter {
    'wait': boolean
  }
}

const pluginName = 'Lunatlazur_Tachie'

const _DataManager_createGameObjects = DataManager.createGameObjects
DataManager.createGameObjects = function() {
  _DataManager_createGameObjects.call(this)
  TachieManager.characters = []
}

const _DataManager_makeSaveContents = DataManager.makeSaveContents
DataManager.makeSaveContents = function() {
  const contents = _DataManager_makeSaveContents.call(this)
  contents.tachiECharacters = TachieManager.characters
  return contents
}

const _DataManager_extractSaveContents = DataManager.extractSaveContents
DataManager.extractSaveContents = function(contents) {
  _DataManager_extractSaveContents.apply(this, arguments)
  TachieManager.characters = contents.tachiECharacters || []
}

const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  if (TachieManager.isTachiECommand(command)) {
    const commandProcessor = new Tachie_CommandProcessor(this)
    if (commandProcessor.processPluginCommand(command, args)) {
      return
    }
  }
  _Game_Interpreter_pluginCommand.apply(this, arguments)
}

const _Sprite_Picture_updateOrigin = Sprite_Picture.prototype.updateOrigin
Sprite_Picture.prototype.updateOrigin = function() {
  if (this.picture().origin() === 2) {
    this.anchor.x = TachieManager.config.anchorX
    this.anchor.y = TachieManager.config.anchorY
  } else {
    _Sprite_Picture_updateOrigin.call(this)
  }
}

const _Game_Picture_updateMove = Game_Picture.prototype.updateMove
Game_Picture.prototype.updateMove = function() {
  _Game_Picture_updateMove.call(this)
  if (this._onMoveCompleted && this._duration === 0) {
    this._onMoveCompleted()
    this._onMoveCompleted = null
  }
}

const _Scene_Boot_create = Scene_Boot.prototype.create
Scene_Boot.prototype.create = function() {
  _Scene_Boot_create.call(this)
  TachieManager.loadDataFile()
}

function find<T> (items: T[], predicate: (item: T) => boolean): T {
  let found: T
  items.forEach((item) => {
    if (predicate(item)) {
      found = item
    }
  })
  return found
}

class TachieCommandParser {

  public static parsePositionParameter (...args: string[]): [Tachie.TachiePositionParameter, boolean] {
    const [ parameter ] = args
    switch (parameter) {
    case '左':
    case 'left':
      return [{ 'position': 'left' }, true]
    case '右':
    case 'right':
      return [{ 'position': 'right' }, true]
    case '中':
    case 'center':
      return [{ 'position': 'center' }, true]
    }
    return [{ 'position': 'center' }, false]
  }

  public static parseDistanceParameter (...args: string[]): [Tachie.TachieDistanceParameter, boolean] {
    const [ parameter ] = args
    switch (parameter) {
    case '遠':
    case 'far':
      return [{ 'distance': 'far' }, true]
    case '近':
    case 'near':
      return [{ 'distance': 'near' }, true]
    case '中':
    case 'middle':
      return [{ 'distance': 'middle' }, true]
    }
    return [{ 'distance': 'middle' }, false]
  }

  public static parseOffsetXParameter (...args: string[]): [Tachie.TachieOffsetXParameter, boolean] {
    const [ parameter, arg ] = args
    const value = parseInt(arg, 10)
    switch (parameter) {
    case '横':
    case '横位置調整':
    case 'x':
      return [{ 'offsetX': value }, true]
    }
    return [{ 'offsetX': 0 }, false]
  }

  public static parseOffsetYParameter (...args: string[]): [Tachie.TachieOffsetYParameter, boolean] {
    const [ parameter, arg ] = args
    const value = parseInt(arg, 10)
    switch (parameter) {
    case '縦':
    case '縦位置調整':
    case 'y':
      return [{ 'offsetY': value }, true]
    }
    return [{ 'offsetY': 0 }, false]
  }

  public static parseSlideXParameter (...args: string[]): [Tachie.TachieSlideXParameter, boolean] {
    const [ parameter, arg ] = args
    const value = parseInt(arg, 10)
    switch (parameter) {
    case 'スライド横':
    case 'slide-x':
      return [{ 'slideX': value }, true]
    }
    return [{ 'slideX': 0 }, false]
  }

  public static parseSlideYParameter (...args: string[]): [Tachie.TachieSlideYParameter, boolean] {
    const [ parameter, arg ] = args
    const value = parseInt(arg, 10)
    switch (parameter) {
    case 'スライド縦':
    case 'slide-y':
      return [{ 'slideY': value }, true]
    }
    return [{ 'slideY': 0 }, false]
  }

  public static parseDurationParameter (...args: string[]): [Tachie.TachieDurationParameter, boolean] {
    const [ parameter ] = args
    const matched = parameter.match(/^(\d+)(フレーム|F)$/)
    if (matched) {
      return [{ 'duration': parseInt(matched[1], 10) }, true]
    }
    return [{ 'duration': 0 }, false]
  }

  public static parseWaitParameter (...args: string[]): [Tachie.TachieWaitParameter, boolean] {
    const [ parameter ] = args
    if (parameter === 'ウェイトあり' || parameter === 'wait') {
      return [{ 'wait': true }, true]
    } else if (parameter === 'ウェイトなし' || parameter === 'no-wait') {
      return [{ 'wait': false }, true]
    }
    return [{ 'wait': false }, false]
  }

  public static parseShowCommandParameters (parameters: Tachie.TachieCommandParameter[]) {
    const parsers = [
      this.parseWaitParameter,
      this.parseDurationParameter,
      this.parseSlideYParameter,
      this.parseSlideXParameter,
      this.parseOffsetYParameter,
      this.parseOffsetXParameter,
      this.parseDistanceParameter,
      this.parsePositionParameter,
    ]
    let index = 1
    const parameterObject: Tachie.ShowTachieCommandParameters = parsers.reduce((prev, parser) => {
      const parameter = parameters.slice(-index)[0]
      const [parsed, consumed] = parser(parameter.value, parameter.option)
      if (consumed) {
        index++
      }
      return {
        ...prev,
        ...parsed,
      }
    }, {
      expression: '',
      position: 'center',
      distance: 'middle',
      offsetX: 0,
      offsetY: 0,
      slideX: 0,
      slideY: 0,
      duration: 0,
      wait: false,
    } as Tachie.ShowTachieCommandParameters)
    const [ expression ] = index === 1 ? parameters : parameters.slice(0, -index + 1)
    if (expression) {
      parameterObject.expression = expression.value
    }
    return parameterObject
  }

  public static parseChangeCommandParameters (parameters: Tachie.TachieCommandParameter[]) {
    const parsers = [
      this.parseWaitParameter,
      this.parseDurationParameter,
    ]
    let index = 1
    const parameterObject: Tachie.ChangeTachieCommandParameters = parsers.reduce((prev, parser) => {
      const parameter = parameters.slice(-index)[0]
      const [parsed, consumed] = parser(parameter.value, parameter.option)
      if (consumed) {
        index++
      }
      return {
        ...prev,
        ...parsed,
      }
    }, {
      name: '',
      expression: '',
      duration: 0,
      wait: false,
    })
    let [ nameOrExpression, expression ] = index === 1 ? parameters : parameters.slice(0, -index + 1)
    if (expression) {
      parameterObject.name = nameOrExpression.value
      parameterObject.expression = expression.value
    } else if (nameOrExpression) {
      const chara = TachieManager.findCharacterData(nameOrExpression.value)
      if (chara) {
        parameterObject.name = nameOrExpression.value
      } else {
        parameterObject.expression = nameOrExpression.value
      }
    }
    return parameterObject
  }

  public static parseMoveCommandParameters (parameters: Tachie.TachieCommandParameter[]) {
    const parsers = [
      this.parseWaitParameter,
      this.parseDurationParameter,
      this.parseOffsetYParameter,
      this.parseOffsetXParameter,
      this.parsePositionParameter,
    ]
    let index = 1
    const parameterObject: Tachie.MoveTachieCommandParameters = parsers.reduce((prev, parser) => {
      const parameter = parameters.slice(-index)[0]
      const [parsed, consumed] = parser(parameter.value, parameter.option)
      if (consumed) {
        index++
      }
      return {
        ...prev,
        ...parsed,
      }
    }, {
      position: 'center',
      offsetX: 0,
      offsetY: 0,
      duration: 0,
      wait: false,
    } as Tachie.MoveTachieCommandParameters)
    return parameterObject
  }

  public static parseEraseCommandParameters (parameters: Tachie.TachieCommandParameter[]) {
    const parsers = [
      this.parseWaitParameter,
      this.parseDurationParameter,
      this.parseSlideYParameter,
      this.parseSlideXParameter,
    ]
    let index = 1
    const parameterObject: Tachie.EraseTachieCommandParameters = parsers.reduce((prev, parser) => {
      const parameter = parameters.slice(-index)[0]
      const [parsed, consumed] = parser(parameter.value, parameter.option)
      if (consumed) {
        index++
      }
      return {
        ...prev,
        ...parsed,
      }
    }, {
      slideX: 0,
      slideY: 0,
      duration: 0,
      wait: false,
    })
    return parameterObject
  }
}

class TachieDataLoader {
  private static _errorUrl: string

  public static load () {
    const xhr = new XMLHttpRequest()
    const url = 'data/Tachie.csv'
    xhr.open('GET', url)
    xhr.onload = (() => {
      if (xhr.status < 400) {
        TachieManager.onDataLoaded(xhr.responseText)
      }
    })
    xhr.onerror = (() => {
      this._errorUrl = this._errorUrl || url
    })
    xhr.send()
  }
}

class Tachie_Config {

  public xByPosition: {
    left: number,
    center: number,
    right: number,
  }

  public yByDistance: {
    near: number,
    middle: number,
    far: number,
  }

  public scaleByDistance: {
    near: number,
    middle: number,
    far: number,
  }

  public pictureNumberForDistance: {
    near: number,
    middle: number,
    far: number,
  }

  public pictureNumberForPosition: {
    left: number,
    right: number,
    center: number,
  }

  public anchorX: number
  public anchorY: number

  constructor (width: number, height: number) {
    this.anchorX = 0.5
    this.anchorY = 1.0

    this.xByPosition = {
      left: width / 5 * 1,
      center: width / 2,
      right: width / 5 * 4,
    }
    this.yByDistance = {
      near: height / 3 * 4,
      middle: height / 6 * 7,
      far: height,
    }
    this.scaleByDistance = {
      near: 100,
      middle: 80,
      far: 60,
    }
    this.pictureNumberForDistance = {
      near: 30,
      middle: 20,
      far: 10,
    }
    this.pictureNumberForPosition = {
      left: 8,
      right: 6,
      center: 0,
    }
  }

  public picturePosition (position: TachiePosition, distance: TachieDistance) {
    return {
      x: this.xByPosition[position],
      y: this.yByDistance[distance],
    }
  }

  public pictureNumber (position: TachiePosition, distance: TachieDistance) {
    return this.pictureNumberForDistance[distance] + this.pictureNumberForPosition[position]
  }
}

class TachieManager {
  private static _data: Tachie.CharacterData[]
  private static _characters: Tachie.Character[] = []
  private static _config: Tachie_Config

  public static get data () {
    return this._data
  }

  public static get characters () {
    return this._characters
  }

  public static set characters (characters: Tachie.Character[]) {
    this._characters = characters
  }

  public static get config () {
    return this._config
  }

  public static isTachiECommand (command: string) {
    switch ((command || '').toUpperCase()) {
    case 'SHOW_TACHIE':
    case '立ち絵表示':
    case 'CHANGE_TACHIE':
    case '立ち絵変更':
    case 'MOVE_TACHIE':
    case '立ち絵移動':
    case 'ERASE_TACHIE':
    case '立ち絵消去':
      return true
    }
    return false
  }

  public static loadDataFile () {
    TachieDataLoader.load()
  }

  public static onDataLoaded (response: string) {
    this._data = response.trim().split("\n").map((row) => {
      const [ filename, name, ...expressions ] = row.split(',').map((column) => {
        return column.trim()
      })
      return {
        filename,
        name,
        expressions,
      }
    })
    this.setup()
  }

  public static setup () {
    this._config = new Tachie_Config(Graphics.width, Graphics.height)
  }

  public static findCharacterData (name: string) {
    return find(this.data, (chara) => chara.name === name)
  }

  public static findCharacter (name: string) {
    return find(this.characters, (chara) => chara.name === name)
  }

  public static addCharacter (character: Tachie.Character) {
    this._characters.push(character)
  }

  public static removeCharacter (character: Tachie.Character) {
    this._characters.splice(this._characters.indexOf(character), 1)
  }

}

class Tachie_CommandProcessor {

  private _interpreter: Game_Interpreter

  constructor (interpreter: Game_Interpreter) {
    this._interpreter = interpreter
  }

  public static normalizeParameters (parameters: string[]) {
    return parameters.join(' ').trim().replace(/\s+/g, ' ').replace(/: /g, ':').split(' ')
  }

  public static transformParameters (parameters: string[]) {
    return parameters.map((parameter) => {
      const [value, option] = parameter.split(':')
      return { value, option }
    })
  }

  public processPluginCommand (command: string, args: string[]) {
    const [name, ...rawParameters] = args
    const parameters = Tachie_CommandProcessor.transformParameters(Tachie_CommandProcessor.normalizeParameters(rawParameters))
    switch ((command || '').toUpperCase()) {
    case 'SHOW_TACHIE':
    case '立ち絵表示':
      this.processShowCommand(name, ...parameters)
      break
    case 'CHANGE_TACHIE':
    case '立ち絵変更':
      this.processChangeCommand(name, ...parameters)
      break
    case 'MOVE_TACHIE':
    case '立ち絵移動':
      this.processMoveCommand(name, ...parameters)
      break
    case 'ERASE_TACHIE':
    case '立ち絵消去':
      this.processEraseCommand(name, ...parameters)
      break
    default:
      return false
    }
    return true
  }

  public processShowCommand (name: string, ...args: Tachie.TachieCommandParameter[]) {
    const charaData = TachieManager.findCharacterData(name)
    if (!charaData) {
      return
    }
    const {
      expression,
      position,
      offsetX,
      offsetY,
      slideX,
      slideY,
      distance,
      duration,
      wait,
    } = TachieCommandParser.parseShowCommandParameters(args)
    const chara = {
      id: TachieManager.config.pictureNumber(position, distance),
      name,
      expression,
      filename: Tachie_CommandProcessor.filenameWithExpression(charaData, expression),
      ...TachieManager.config.picturePosition(position, distance),
      scale: TachieManager.config.scaleByDistance[distance],
      position,
      distance,
    }
    chara.x += offsetX
    chara.y += offsetY
    TachieManager.addCharacter(chara)
    if (duration > 0) {
      this._showPicture(chara.id, chara.filename, chara.x - slideX, chara.y - slideY, chara.scale, chara.scale, 0)
      this._movePicture(chara.id, chara.x, chara.y, chara.scale, chara.scale, 255, duration)
      if (wait) {
        this._wait(duration)
      }
    } else {
      this._showPicture(chara.id, chara.filename, chara.x, chara.y, chara.scale, chara.scale, 255)
    }
  }

  public processChangeCommand (target: string, ...args: Tachie.TachieCommandParameter[]) {
    const chara = TachieManager.findCharacter(target)
    if (!chara) {
      return
    }
    const {
      name,
      expression,
      duration,
      wait,
    } = TachieCommandParser.parseChangeCommandParameters(args)
    const charaData = name !== '' ? TachieManager.findCharacterData(name) : TachieManager.findCharacterData(chara.name)
    const filename = Tachie_CommandProcessor.filenameWithExpression(charaData, expression)
    const pictureId = chara.id
    if (duration > 0) {
      this._showPicture(pictureId + 1, filename, chara.x, chara.y, chara.scale, chara.scale, 0)
      this._movePicture(pictureId + 1, chara.x, chara.y, chara.scale, chara.scale, 255, duration)
      this._movePicture(pictureId, chara.x, chara.y, chara.scale, chara.scale, 0, duration)
      if (wait) {
        this._wait(duration)
      }
    } else {
      this._showPicture(pictureId + 1, filename, chara.x, chara.y, chara.scale, chara.scale, 255)
      this._movePicture(pictureId + 1, chara.x, chara.y, chara.scale, chara.scale, 255, 1)
    }
    this._setHandlerForPictureMoveCompleted(pictureId + 1, () => {
      this._showPicture(pictureId, filename, chara.x, chara.y, chara.scale, chara.scale, 255)
      this._erasePicture(pictureId + 1)
    })
    if (name !== '') {
      chara.name = name
    }
  }

  public processMoveCommand (name: string, ...args: Tachie.TachieCommandParameter[]) {
    const chara = TachieManager.findCharacter(name)
    if (!chara) {
      return
    }
    const {
      position,
      offsetX,
      offsetY,
      duration,
      wait,
    } = TachieCommandParser.parseMoveCommandParameters(args)
    if (chara.position !== position) {
      const oldId = chara.id
      chara.id = TachieManager.config.pictureNumber(position, chara.distance)
      const pictureId = chara.id
      const { x, y } = TachieManager.config.picturePosition(position, chara.distance)
      chara.x = x + offsetX
      chara.y = y + offsetY
      chara.position = position
      if (duration > 0) {
        this._movePicture(oldId, chara.x, chara.y, chara.scale, chara.scale, 255, duration)
        this._setHandlerForPictureMoveCompleted(oldId, () => {
          this._showPicture(pictureId, chara.filename, chara.x, chara.y, chara.scale, chara.scale, 255)
          this._erasePicture(oldId)
        })
        if (wait) {
          this._wait(duration)
        }
      } else {
        this._showPicture(pictureId, chara.filename, chara.x, chara.y, chara.scale, chara.scale, 255)
        this._erasePicture(oldId)
      }
    } else {
      const pictureId = chara.id
      chara.x += offsetX
      chara.y += offsetY
      this._movePicture(pictureId, chara.x, chara.y, chara.scale, chara.scale, 255, duration)
      if (duration > 0 && wait) {
        this._wait(duration)
      }
    }
  }

  public processEraseCommand (name: string, ...args: Tachie.TachieCommandParameter[]) {
    const chara = TachieManager.findCharacter(name)
    if (!chara) {
      return
    }
    const {
      slideX,
      slideY,
      duration,
      wait,
    } = TachieCommandParser.parseEraseCommandParameters(args)
    const pictureId = chara.id
    TachieManager.removeCharacter(chara)
    if (duration > 0) {
      this._movePicture(pictureId, chara.x + slideX, chara.y + slideY, chara.scale, chara.scale, 0, duration)
      this._setHandlerForPictureMoveCompleted(pictureId, () => {
        this._erasePicture(pictureId)
      })
      if (wait) {
        this._wait(duration)
      }
    } else {
      this._erasePicture(pictureId)
    }
  }

  private _wait(duration: number) {
    this._interpreter.wait(duration)
  }

  private _showPicture (id: number, name: string, x: number, y: number, scaleX: number, scaleY: number, opacity: number) {
    $gameScreen.showPicture(id, name, 2, x, y, scaleX, scaleX, opacity, 0)
  }

  private _movePicture (id: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, duration: number) {
    $gameScreen.movePicture(id, 2, x, y, scaleX, scaleX, opacity, 0, duration)
  }

  private _erasePicture (id: number) {
    $gameScreen.erasePicture(id)
  }

  public static filenameWithExpression (chara: Tachie.CharacterData, expression: string) {
    const expressionId = chara.expressions.indexOf(expression)
    return `${chara.filename}${expressionId + 2}`
  }

  private _setHandlerForPictureMoveCompleted (pictureId: number, handler: () => void) {
    const picture = $gameScreen.picture(pictureId)
    if (picture) {
      picture._onMoveCompleted = handler
    }
  }
}

const Game_Interpreter_requestImages = Game_Interpreter.requestImages
Game_Interpreter.requestImages = function(list, commonList) {
  if (!list) {
    return
  }
  list.filter(({ code }) => code === 356).forEach(({ parameters }) => {
    const args = (parameters[0] as string).split(' ')
    const command = args.shift().toUpperCase()
    if (command === 'SHOW_TACHIE' ||
      command === '立ち絵表示' ||
      command === 'CHANGE_TACHIE' ||
      command === '立ち絵変更'
    ) {
      let filename: string = null
      const [ charaName, ...rawParameters ] = args
      const parameters = Tachie_CommandProcessor.transformParameters(Tachie_CommandProcessor.normalizeParameters(rawParameters))
      if (command === 'SHOW_TACHIE' || command === '立ち絵表示') {
        const { expression } = TachieCommandParser.parseShowCommandParameters(parameters)
        const character = TachieManager.findCharacterData(charaName)
        if (character) {
          filename = Tachie_CommandProcessor.filenameWithExpression(character, expression)
        }
      } else {
        const { name, expression } = TachieCommandParser.parseChangeCommandParameters(parameters)
        const character = name ? TachieManager.findCharacterData(name) :  TachieManager.findCharacterData(charaName)
        if (character) {
          filename = Tachie_CommandProcessor.filenameWithExpression(character, expression)
        }
      }
      if (filename) {
        ImageManager.requestPicture(filename, 0)
      }
    }
  })
  Game_Interpreter_requestImages.apply(this, arguments)
}

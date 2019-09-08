//=============================================================================
// Lunatlazur_Tachie.js
// ----------------------------------------------------------------------------
// Copyright (c) 2018 Taku Aoi
// This plugin is released under the zlib License.
// http://zlib.net/zlib_license.html
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2018/04/01
// ----------------------------------------------------------------------------
// [Web]    : https://lunatlazur.com/
// [Twitter]: https://twitter.com/aoitaku/
// [GitHub] : https://github.com/aoitaku/
//=============================================================================
/*:
 * @plugindesc Manage visual novel style character sprite
 * @author Taku Aoi
 * @help
 */
/*:ja
 * @plugindesc 立ち絵プラグイン
 * @author あおいたく
 * @help このプラグインはキャラクターの立ち絵を表示できるようにします。
 *
 * 【使い方】
 *
 * 1. 以下形式の名前の立ち絵画像ファイルを Picture フォルダに配置します。
 *
 *    characterA1.png
 *    characterA2.png
 *    characterA3.png
 *    characterA4.png
 *    characterA5.png
 *    characterB1.png
 *    characterB2.png
 *    :
 *    :
 *
 * 2. Data フォルダに Tachie.csv という名前で以下形式の立ち絵定義ファイルを
 *    作成してください。
 *
 *    characterA, キャラA, 笑い, 怒り, 呆れ, 不満
 *    characterB, キャラB, 笑い, 緊張, 呆れ, 不満
 *    :
 *    :
 *
 *  ・一列目は Picture フォルダに配置した立ち絵画像ファイル名から拡張子と
 *    末尾の数字を取り除いた部分です
 *  ・二列目はキャラクターの名前です
 *    プラグインコマンドから立ち絵画像ファイルを指定するときに、この名前で
 *    指定します
 *  ・三列目以降は、立ち絵画像ファイルの表情の名前です
 *    プラグインコマンドから表情を指定するときに、この名前で指定します
 *    *キャラクター名2 以降の表情差分に名前をつけてください
 *   （*キャラクター名1 は表情未指定時に使われます）
 *
 *    上記例では characterA2.png が キャラA の 笑い、characterA3.png が
 *    キャラA の 怒り という設定になっています
 *
 * 3. プラグインコマンドに立ち絵表示コマンドを入力して立ち絵を表示を行います。
 *    プラグインコマンドの詳細は下記のプラグインコマンド一覧を参照してください。
 *
 *
 * 【プラグインコマンド一覧】
 *
 * 【立ち絵表示】
 * 立ち絵表示 [キャラクター名] [表情] [位置] [距離] [横位置調整] [縦位置調整]
 *   [スライド横] [スライド縦] [表示にかける時間] [完了までウェイト]
 *
 *   立ち絵を表示します
 *
 *   キャラクター名 文字列
 *     立ち絵定義ファイルで設定したキャラクターの名前
 *   表情 文字列
 *     立ち絵定義ファイルで設定したキャラクターの表情
 *     未指定で1番目の表情
 *   位置 左|中|右
 *     立ち絵の X 座標を位置に応じた値にする
 *     未指定で中央
 *   距離 近|中|遠
 *     立ち絵の拡大率と Y 座標を距離に応じた値にする
 *     未指定で中距離
 *   横位置調整 横位置調整:n|横:n
 *     立ち絵の X 座標に指定した数値を加える
 *   縦位置調整 縦位置調整:n|縦:n
 *     立ち絵の Y 座標に指定した数値を加える
 *   スライド横 スライド横:n
 *     立ち絵の表示開始時の X 座標から指定した数値を引く
 *   スライド縦 スライド縦:n
 *     立ち絵の表示開始時の Y 座標から指定した数値を引く
 *   表示にかける時間 nフレーム
 *     表示にかける時間をフレーム数で指定する
 *   　未指定で瞬間表示
 *   表示完了までウェイト ウェイトあり|ウェイトなし
 *     表示が完了するまでウェイトする
 *     未指定でウェイトなし
 *     瞬間表示の場合は無視される
 *
 * 【呼び出し例】
 *
 * 立ち絵表示 キャラA 近
 *   キャラAを表情1で画面中央、近距離に瞬間表示
 *
 * 立ち絵表示 キャラA 表情2 左 横:5 縦:-5 スライド横:20 60フレーム ウェイトあり
 *   キャラAを表情2で画面左、中距離、左に5px、上に5pxずらした位置に
 *   20px左にスライドしながら60フレームかけて表示する
 *   表示が完了するまでウェイトする
 *
 * 【立ち絵変更】
 * 立ち絵変更 [変更前キャラクター名] [変更後キャラクター名] [表情]
 *   [変更にかける時間] [完了までウェイト]
 *
 *   立ち絵を変更します
 *   主に、表情差分や衣装差分の切り替えを行うためのコマンドです
 *
 *   変更前キャラクター名 文字列
 *     立ち絵定義ファイルで設定したキャラクターの名前
 *   変更後キャラクター名 文字列
 *     立ち絵定義ファイルで設定したキャラクターの名前
 *     未指定で現在と同じキャラクターの表情セットを使う
 *   表情 文字列
 *     立ち絵定義ファイルで設定したキャラクターの表情
 *     未指定で1番目の表情
 *   表示にかける時間 nフレーム
 *     表示にかける時間をフレーム数で指定する
 *   　未指定で瞬間表示
 *   表示完了までウェイト ウェイトあり|ウェイトなし
 *     表示が完了するまでウェイトする
 *     未指定でウェイトなし
 *     瞬間表示の場合は無視される
 *
 * 【呼び出し例】
 *
 * 立ち絵変更 キャラA 表情2 30フレーム
 *   キャラAを表情2に30フレームかけて変更する
 *
 * 立ち絵変更 キャラA キャラB 30フレーム
 *   キャラAをキャラBの表情1に30フレームかけて変更する
 *
 * 【立ち絵移動】
 * 立ち絵移動 [キャラクター名] [位置] [横位置調整] [縦位置調整]
 *   [移動にかける時間] [完了までウェイト]
 *
 *   立ち絵を移動します
 *
 *   キャラクター名 文字列
 *     立ち絵定義ファイルで設定したキャラクターの名前
 *   位置 左|中|右
 *     立ち絵の X 座標を位置に応じた値にする
 *     未指定で中央
 *   横位置調整 横位置調整:n|横:n
 *     立ち絵の X 座標に指定した数値を加える
 *   縦位置調整 縦位置調整:n|縦:n
 *     立ち絵の Y 座標に指定した数値を加える
 *   表示にかける時間 nフレーム
 *     表示にかける時間をフレーム数で指定する
 *   　未指定で瞬間表示
 *   表示完了までウェイト ウェイトあり|ウェイトなし
 *     表示が完了するまでウェイトする
 *     未指定でウェイトなし
 *     瞬間表示の場合は無視される
 *
 * 【呼び出し例】
 *
 * 立ち絵移動 キャラA 右 横:-15
 *   キャラAを画面右、右に15pxずらした位置に30フレームかけて移動させる
 *
 * 【立ち絵消去】
 * 立ち絵消去 [キャラクター名] [スライド横] [スライド縦] [消去にかける時間]
 *   [完了までウェイト]
 *
 *   立ち絵を消去します
 *
 *   キャラクター名 文字列
 *     立ち絵定義ファイルで設定したキャラクターの名前
 *   スライド横 スライド横:n
 *     立ち絵の表示開始時の X 座標から指定した数値を引く
 *   スライド縦 スライド縦:n
 *     立ち絵の表示開始時の Y 座標から指定した数値を引く
 *   表示にかける時間 nフレーム
 *     表示にかける時間をフレーム数で指定する
 *   　未指定で瞬間表示
 *   表示完了までウェイト ウェイトあり|ウェイトなし
 *     表示が完了するまでウェイトする
 *     未指定でウェイトなし
 *     瞬間表示の場合は無視される
 *
 * 【呼び出し例】
 *
 * 立ち絵消去 キャラA 30フレーム
 *   キャラAを30フレームかけて消去する
 *
 * 【FAQ】
 *
 * Q. プラグインコマンドは間違ってないのに立ち絵が表示されない
 * A. プラグインを有効化しても、プロジェクトを保存しないとプラグインコマンドが
 *    認識されないようです。一度プロジェクトを保存してからやり直してみてください。
 *
 * Q. 表情を変更したい
 * A. 立ち絵変更コマンドを使ってください。
 *
 * Q. 表示しているキャラの距離を変更したい
 * A. 消去と表示を組み合わせてください。
 *
 * Q. 透明度の指定ができない
 * A. 未実装の機能です。今後の実装予定を参照してください。
 *
 * Q. 同距離、同位置に複数のキャラクターを表示したい
 * A. 未実装の機能です。今後の実装予定を参照してください。
 *
 * Q. キャラクターの重なり順を制御したい
 * A. 未実装の機能です。今後の実装予定を参照してください。
 *
 *
 * 【今後の実装予定】
 *
 * ・表示、移動時の透明度指定
 *   表示、移動コマンドで透明度を指定できるように
 *
 * ・同距離、同位置の複数キャラクター表示
 *   同じ距離、同じ位置に複数のキャラクターを配置できるように
 *
 * ・重なり順の制御
 *   キャラクターの重なり順を明示的に指定できるように
 *
 * ・プラグインコマンドで指定した画像のプリロード対応
 *   プラグインコマンドで指定した画像をマップ遷移時にプリロードするように
 *
 * ・プラグインパラメータによる各種の値の設定
 *   立ち絵プラグインで使用するピクチャ番号などをプラグインパラメータで
 *   指定できるように
 *
 */

type CharacterPosition = 'left' | 'center' | 'right'
type CharacterDistance = 'near' | 'middle' | 'far'

interface Game_Picture {
  _onMoveCompleted: () => void
}

interface ISaveContents {
  tachieCharacters: ICharacter[]
}

interface ICharacterData {
  filename: string
  name: string
  expressions: string[]
}

interface ICharacter {
  id: number
  name: string
  expression: string
  filename: string
  x: number
  y: number
  scale: number
  position: CharacterPosition
  distance: CharacterDistance
}

interface ITachieCommandParameter {
  value: string,
  option: string
}

interface IShowTachieCommandParameters {
  expression: string
  position: CharacterPosition
  distance: CharacterDistance
  offsetX: number
  offsetY: number
  slideX: number
  slideY: number
  duration: number
  wait: boolean
}

interface IChangeTachieCommandParameters {
  name: string
  expression: string
  duration: number
  wait: boolean
}

interface IMoveTachieCommandParameters {
  position: CharacterPosition
  offsetX: number
  offsetY: number
  duration: number
  wait: boolean
}

interface IEraseTachieCommandParameters {
  slideX: number
  slideY: number
  duration: number
  wait: boolean
}

interface ITachiePositionParameter {
  type: 'position'
  value: CharacterPosition
}

interface ITachieDistanceParameter {
  type: 'distance'
  value: CharacterDistance
}

interface ITachieOffsetXParameter {
  type: 'offsetX'
  value: number
}

interface ITachieOffsetYParameter {
  type: 'offsetY'
  value: number
}

interface ITachieSlideXParameter {
  type: 'slideX'
  value: number
}

interface ITachieSlideYParameter {
  type: 'slideY'
  value: number
}

interface ITachieDurationParameter {
  type: 'duration'
  value: number
}

interface ITachieWaitParameter {
  type: 'wait'
  value: boolean
}

(function () {
  const pluginName = 'Lunatlazur_Tachie'

  const _DataManager_createGameObjects = DataManager.createGameObjects
  DataManager.createGameObjects = function() {
    _DataManager_createGameObjects.call(this)
    TachieManager.characters = []
  }

  const _DataManager_makeSaveContents = DataManager.makeSaveContents
  DataManager.makeSaveContents = function() {
    const contents = _DataManager_makeSaveContents.call(this)
    contents.tachieCharacters = TachieManager.characters
    return contents
  }

  const _DataManager_extractSaveContents = DataManager.extractSaveContents
  DataManager.extractSaveContents = function(contents) {
    _DataManager_extractSaveContents.apply(this, arguments)
    TachieManager.characters = contents.tachieCharacters || []
  }

  const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    if (TachieManager.isTachieCommand(command)) {
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

    public static parsePositionParameter (...args: string[]): [ITachiePositionParameter, boolean] {
      const [ parameter, arg ] = args
      const option = parseInt(arg, 10)
      switch (parameter) {
      case '左':
      case 'left':
        return [{ type: 'position', value: 'left' }, true]
      case '右':
      case 'right':
        return [{ type: 'position', value: 'right' }, true]
      case '中':
      case 'center':
        return [{ type: 'position', value: 'center' }, true]
      }
      return [{ type: 'position', value: 'center' }, false]
    }

    public static parseDistanceParameter (...args: string[]): [ITachieDistanceParameter, boolean] {
      const [ parameter ] = args
      switch (parameter) {
      case '遠':
      case 'far':
        return [{ type: 'distance', value: 'far' }, true]
      case '近':
      case 'near':
        return [{ type: 'distance', value: 'near' }, true]
      case '中':
      case 'middle':
        return [{ type: 'distance', value: 'middle' }, true]
      }
      return [{ type: 'distance', value: 'middle' }, false]
    }

    public static parseOffsetXParameter (...args: string[]): [ITachieOffsetXParameter, boolean] {
      const [ parameter, arg ] = args
      const value = parseInt(arg, 10)
      switch (parameter) {
      case '横':
      case '横位置調整':
      case 'x':
        return [{ type: 'offsetX', value }, true]
      }
      return [{ type: 'offsetX', value: 0 }, false]
    }

    public static parseOffsetYParameter (...args: string[]): [ITachieOffsetYParameter, boolean] {
      const [ parameter, arg ] = args
      const value = parseInt(arg, 10)
      switch (parameter) {
      case '縦':
      case '縦位置調整':
      case 'y':
        return [{ type: 'offsetY', value }, true]
      }
      return [{ type: 'offsetY', value: 0 }, false]
    }

    public static parseSlideXParameter (...args: string[]): [ITachieSlideXParameter, boolean] {
      const [ parameter, arg ] = args
      const value = parseInt(arg, 10)
      switch (parameter) {
      case 'スライド横':
      case 'slide-x':
        return [{ type: 'slideX', value }, true]
      }
      return [{ type: 'slideX', value: 0 }, false]
    }

    public static parseSlideYParameter (...args: string[]): [ITachieSlideYParameter, boolean] {
      const [ parameter, arg ] = args
      const value = parseInt(arg, 10)
      switch (parameter) {
      case 'スライド縦':
      case 'slide-y':
        return [{ type: 'slideY', value }, true]
      }
      return [{ type: 'slideY', value: 0 }, false]
    }

    public static parseDurationParameter (...args: string[]): [ITachieDurationParameter, boolean] {
      const [ parameter ] = args
      const matched = parameter.match(/^(\d+)フレーム$/)
      if (matched) {
        return [{ type: 'duration', value: parseInt(matched[1], 10) }, true]
      }
      return [{ type: 'duration', value: 0 }, false]
    }

    public static parseWaitParameter (...args: string[]): [ITachieWaitParameter, boolean] {
      const [ parameter ] = args
      if (parameter === 'ウェイトあり') {
        return [{ type: 'wait', value: true }, true]
      } else if (parameter === 'ウェイトなし') {
        return [{ type: 'wait', value: false }, true]
      }
      return [{ type: 'wait', value: false }, false]
    }

    public static parseShowCommandParameters (parameters: ITachieCommandParameter[]) {
      const parameterObject: IShowTachieCommandParameters = {
        expression: '',
        position: 'center',
        distance: 'middle',
        offsetX: 0,
        offsetY: 0,
        slideX: 0,
        slideY: 0,
        duration: 0,
        wait: false,
      }
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
      parsers.forEach((parser) => {
        const parameter = parameters.slice(-index)[0]
        const [{ type, value }, consumed] = parser(parameter.value, parameter.option)
        if (consumed) {
          index++
        }
        parameterObject[type] = value
      })
      const [ expression ] = index === 1 ? parameters : parameters.slice(0, -index + 1)
      if (expression) {
        parameterObject.expression = expression.value
      }
      return parameterObject
    }

    public static parseChangeCommandParameters (parameters: ITachieCommandParameter[]) {
      const parameterObject: IChangeTachieCommandParameters = {
        name: '',
        expression: '',
        duration: 0,
        wait: false,
      }
      const parsers = [
        this.parseWaitParameter,
        this.parseDurationParameter,
      ]
      let index = 1
      parsers.forEach((parser) => {
        const parameter = parameters.slice(-index)[0]
        const [{ type, value }, consumed] = parser(parameter.value, parameter.option)
        if (consumed) {
          index++
        }
        parameterObject[type] = value
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

    public static parseMoveCommandParameters (parameters: ITachieCommandParameter[]) {
      const parameterObject: IMoveTachieCommandParameters = {
        position: 'center',
        offsetX: 0,
        offsetY: 0,
        duration: 0,
        wait: false,
      }
      const parsers = [
        this.parseWaitParameter,
        this.parseDurationParameter,
        this.parseOffsetYParameter,
        this.parseOffsetXParameter,
        this.parsePositionParameter,
      ]
      let index = 1
      parsers.forEach((parser) => {
        const parameter = parameters.slice(-index)[0]
        const [{ type, value }, consumed] = parser(parameter.value, parameter.option)
        if (consumed) {
          index++
        }
        parameterObject[type] = value
      })
      return parameterObject
    }

    public static parseEraseCommandParameters (parameters: ITachieCommandParameter[]) {
      const parameterObject: IEraseTachieCommandParameters = {
        slideX: 0,
        slideY: 0,
        duration: 0,
        wait: false,
      }
      const parsers = [
        this.parseWaitParameter,
        this.parseDurationParameter,
        this.parseSlideYParameter,
        this.parseSlideXParameter,
      ]
      let index = 1
      parsers.forEach((parser) => {
        const parameter = parameters.slice(-index)[0]
        const [{ type, value }, consumed] = parser(parameter.value, parameter.option)
        if (consumed) {
          index++
        }
        parameterObject[type] = value
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
        near: height * 2 + 96,
        middle: height * 2 - 80,
        far: height * 2 - 256,
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

    public picturePosition (position: CharacterPosition, distance: CharacterDistance) {
      return {
        x: this.xByPosition[position],
        y: this.yByDistance[distance],
      }
    }

    public pictureNumber (position: CharacterPosition, distance: CharacterDistance) {
      return this.pictureNumberForDistance[distance] + this.pictureNumberForPosition[position]
    }
  }

  class TachieManager {
    private static _data: ICharacterData[]
    private static _characters: ICharacter[] = []
    private static _config: Tachie_Config

    public static get data () {
      return this._data
    }

    public static get characters () {
      return this._characters
    }

    public static set characters (characters: ICharacter[]) {
      this._characters = characters
    }

    public static get config () {
      return this._config
    }

    public static isTachieCommand (command: string) {
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

    public static addCharacter (character: ICharacter) {
      this._characters.push(character)
    }

    public static removeCharacter (character: ICharacter) {
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

    public processShowCommand (name: string, ...args: ITachieCommandParameter[]) {
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

    public processChangeCommand (target: string, ...args: ITachieCommandParameter[]) {
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

    public processMoveCommand (name: string, ...args: ITachieCommandParameter[]) {
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

    public processEraseCommand (name: string, ...args: ITachieCommandParameter[]) {
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
        this._movePicture(pictureId, chara.x + slideX, chara.y + slideX, chara.scale, chara.scale, 0, duration)
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

    public static filenameWithExpression (chara: ICharacterData, expression: string) {
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
})()

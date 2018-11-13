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
// [Twitter]: https://twitter.com/lunatlazur/
// [GitHub] : https://github.com/Lunatlazur/
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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
(function () {
    var pluginName = 'Lunatlazur_Tachie';
    var _DataManager_createGameObjects = DataManager.createGameObjects;
    DataManager.createGameObjects = function () {
        _DataManager_createGameObjects.call(this);
        TachieManager.characters = [];
    };
    var _DataManager_makeSaveContents = DataManager.makeSaveContents;
    DataManager.makeSaveContents = function () {
        var contents = _DataManager_makeSaveContents.call(this);
        contents.tachieCharacters = TachieManager.characters;
        return contents;
    };
    var _DataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function (contents) {
        _DataManager_extractSaveContents.apply(this, arguments);
        TachieManager.characters = contents.tachieCharacters || [];
    };
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        if (TachieManager.isTachieCommand(command)) {
            var commandProcessor = new Tachie_CommandProcessor(this);
            if (commandProcessor.processPluginCommand(command, args)) {
                return;
            }
        }
        _Game_Interpreter_pluginCommand.apply(this, arguments);
    };
    var _Sprite_Picture_updateOrigin = Sprite_Picture.prototype.updateOrigin;
    Sprite_Picture.prototype.updateOrigin = function () {
        if (this.picture().origin() === 2) {
            this.anchor.x = TachieManager.config.anchorX;
            this.anchor.y = TachieManager.config.anchorY;
        }
        else {
            _Sprite_Picture_updateOrigin.call(this);
        }
    };
    var _Game_Picture_updateMove = Game_Picture.prototype.updateMove;
    Game_Picture.prototype.updateMove = function () {
        _Game_Picture_updateMove.call(this);
        if (this._onMoveCompleted && this._duration === 0) {
            this._onMoveCompleted();
            this._onMoveCompleted = null;
        }
    };
    var _Scene_Boot_create = Scene_Boot.prototype.create;
    Scene_Boot.prototype.create = function () {
        _Scene_Boot_create.call(this);
        TachieManager.loadDataFile();
    };
    function find(items, predicate) {
        var found;
        items.forEach(function (item) {
            if (predicate(item)) {
                found = item;
            }
        });
        return found;
    }
    var TachieCommandParser = /** @class */ (function () {
        function TachieCommandParser() {
        }
        TachieCommandParser.parsePositionParameter = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var parameter = args[0], arg = args[1];
            var option = parseInt(arg, 10);
            switch (parameter) {
                case '左':
                case 'left':
                    return [{ type: 'position', value: 'left' }, true];
                case '右':
                case 'right':
                    return [{ type: 'position', value: 'right' }, true];
                case '中':
                case 'center':
                    return [{ type: 'position', value: 'center' }, true];
            }
            return [{ type: 'position', value: 'center' }, false];
        };
        TachieCommandParser.parseDistanceParameter = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var parameter = args[0];
            switch (parameter) {
                case '遠':
                case 'far':
                    return [{ type: 'distance', value: 'far' }, true];
                case '近':
                case 'near':
                    return [{ type: 'distance', value: 'near' }, true];
                case '中':
                case 'middle':
                    return [{ type: 'distance', value: 'middle' }, true];
            }
            return [{ type: 'distance', value: 'middle' }, false];
        };
        TachieCommandParser.parseOffsetXParameter = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var parameter = args[0], arg = args[1];
            var value = parseInt(arg, 10);
            switch (parameter) {
                case '横':
                case '横位置調整':
                case 'x':
                    return [{ type: 'offsetX', value: value }, true];
            }
            return [{ type: 'offsetX', value: 0 }, false];
        };
        TachieCommandParser.parseOffsetYParameter = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var parameter = args[0], arg = args[1];
            var value = parseInt(arg, 10);
            switch (parameter) {
                case '縦':
                case '縦位置調整':
                case 'y':
                    return [{ type: 'offsetY', value: value }, true];
            }
            return [{ type: 'offsetY', value: 0 }, false];
        };
        TachieCommandParser.parseSlideXParameter = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var parameter = args[0], arg = args[1];
            var value = parseInt(arg, 10);
            switch (parameter) {
                case 'スライド横':
                case 'slide-x':
                    return [{ type: 'slideX', value: value }, true];
            }
            return [{ type: 'slideX', value: 0 }, false];
        };
        TachieCommandParser.parseSlideYParameter = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var parameter = args[0], arg = args[1];
            var value = parseInt(arg, 10);
            switch (parameter) {
                case 'スライド縦':
                case 'slide-y':
                    return [{ type: 'slideY', value: value }, true];
            }
            return [{ type: 'slideY', value: 0 }, false];
        };
        TachieCommandParser.parseDurationParameter = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var parameter = args[0];
            var matched = parameter.match(/^(\d+)フレーム$/);
            if (matched) {
                return [{ type: 'duration', value: parseInt(matched[1], 10) }, true];
            }
            return [{ type: 'duration', value: 0 }, false];
        };
        TachieCommandParser.parseWaitParameter = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var parameter = args[0];
            if (parameter === 'ウェイトあり') {
                return [{ type: 'wait', value: true }, true];
            }
            else if (parameter === 'ウェイトなし') {
                return [{ type: 'wait', value: false }, true];
            }
            return [{ type: 'wait', value: false }, false];
        };
        TachieCommandParser.parseShowCommandParameters = function (parameters) {
            var parameterObject = {
                expression: '',
                position: 'center',
                distance: 'middle',
                offsetX: 0,
                offsetY: 0,
                slideX: 0,
                slideY: 0,
                duration: 0,
                wait: false,
            };
            var parsers = [
                this.parseWaitParameter,
                this.parseDurationParameter,
                this.parseSlideYParameter,
                this.parseSlideXParameter,
                this.parseOffsetYParameter,
                this.parseOffsetXParameter,
                this.parseDistanceParameter,
                this.parsePositionParameter,
            ];
            var index = 1;
            parsers.forEach(function (parser) {
                var parameter = parameters.slice(-index)[0];
                var _a = parser(parameter.value, parameter.option), _b = _a[0], type = _b.type, value = _b.value, consumed = _a[1];
                if (consumed) {
                    index++;
                }
                parameterObject[type] = value;
            });
            var expression = (index === 1 ? parameters : parameters.slice(0, -index + 1))[0];
            if (expression) {
                parameterObject.expression = expression.value;
            }
            return parameterObject;
        };
        TachieCommandParser.parseChangeCommandParameters = function (parameters) {
            var parameterObject = {
                name: '',
                expression: '',
                duration: 0,
                wait: false,
            };
            var parsers = [
                this.parseWaitParameter,
                this.parseDurationParameter,
            ];
            var index = 1;
            parsers.forEach(function (parser) {
                var parameter = parameters.slice(-index)[0];
                var _a = parser(parameter.value, parameter.option), _b = _a[0], type = _b.type, value = _b.value, consumed = _a[1];
                if (consumed) {
                    index++;
                }
                parameterObject[type] = value;
            });
            var _a = index === 1 ? parameters : parameters.slice(0, -index + 1), nameOrExpression = _a[0], expression = _a[1];
            if (expression) {
                parameterObject.name = nameOrExpression.value;
                parameterObject.expression = expression.value;
            }
            else if (nameOrExpression) {
                var chara = TachieManager.findCharacterData(nameOrExpression.value);
                if (chara) {
                    parameterObject.name = nameOrExpression.value;
                }
                else {
                    parameterObject.expression = nameOrExpression.value;
                }
            }
            return parameterObject;
        };
        TachieCommandParser.parseMoveCommandParameters = function (parameters) {
            var parameterObject = {
                position: 'center',
                offsetX: 0,
                offsetY: 0,
                duration: 0,
                wait: false,
            };
            var parsers = [
                this.parseWaitParameter,
                this.parseDurationParameter,
                this.parseOffsetYParameter,
                this.parseOffsetXParameter,
                this.parsePositionParameter,
            ];
            var index = 1;
            parsers.forEach(function (parser) {
                var parameter = parameters.slice(-index)[0];
                var _a = parser(parameter.value, parameter.option), _b = _a[0], type = _b.type, value = _b.value, consumed = _a[1];
                if (consumed) {
                    index++;
                }
                parameterObject[type] = value;
            });
            return parameterObject;
        };
        TachieCommandParser.parseEraseCommandParameters = function (parameters) {
            var parameterObject = {
                slideX: 0,
                slideY: 0,
                duration: 0,
                wait: false,
            };
            var parsers = [
                this.parseWaitParameter,
                this.parseDurationParameter,
                this.parseSlideYParameter,
                this.parseSlideXParameter,
            ];
            var index = 1;
            parsers.forEach(function (parser) {
                var parameter = parameters.slice(-index)[0];
                var _a = parser(parameter.value, parameter.option), _b = _a[0], type = _b.type, value = _b.value, consumed = _a[1];
                if (consumed) {
                    index++;
                }
                parameterObject[type] = value;
            });
            return parameterObject;
        };
        return TachieCommandParser;
    }());
    var TachieDataLoader = /** @class */ (function () {
        function TachieDataLoader() {
        }
        TachieDataLoader.load = function () {
            var _this = this;
            var xhr = new XMLHttpRequest();
            var url = 'data/Tachie.csv';
            xhr.open('GET', url);
            xhr.onload = (function () {
                if (xhr.status < 400) {
                    TachieManager.onDataLoaded(xhr.responseText);
                }
            });
            xhr.onerror = (function () {
                _this._errorUrl = _this._errorUrl || url;
            });
            xhr.send();
        };
        return TachieDataLoader;
    }());
    var Tachie_Config = /** @class */ (function () {
        function Tachie_Config(width, height) {
            this.anchorX = 0.5;
            this.anchorY = 1.0;
            this.xByPosition = {
                left: width / 5 * 1,
                center: width / 2,
                right: width / 5 * 4,
            };
            this.yByDistance = {
                near: height / 3 * 4,
                middle: height / 6 * 7,
                far: height,
            };
            this.scaleByDistance = {
                near: 100,
                middle: 80,
                far: 60,
            };
            this.pictureNumberForDistance = {
                near: 30,
                middle: 20,
                far: 10,
            };
            this.pictureNumberForPosition = {
                left: 8,
                right: 6,
                center: 0,
            };
        }
        Tachie_Config.prototype.picturePosition = function (position, distance) {
            return {
                x: this.xByPosition[position],
                y: this.yByDistance[distance],
            };
        };
        Tachie_Config.prototype.pictureNumber = function (position, distance) {
            return this.pictureNumberForDistance[distance] + this.pictureNumberForPosition[position];
        };
        return Tachie_Config;
    }());
    var TachieManager = /** @class */ (function () {
        function TachieManager() {
        }
        Object.defineProperty(TachieManager, "data", {
            get: function () {
                return this._data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TachieManager, "characters", {
            get: function () {
                return this._characters;
            },
            set: function (characters) {
                this._characters = characters;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TachieManager, "config", {
            get: function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        TachieManager.isTachieCommand = function (command) {
            switch ((command || '').toUpperCase()) {
                case 'SHOW_TACHIE':
                case '立ち絵表示':
                case 'CHANGE_TACHIE':
                case '立ち絵変更':
                case 'MOVE_TACHIE':
                case '立ち絵移動':
                case 'ERASE_TACHIE':
                case '立ち絵消去':
                    return true;
            }
            return false;
        };
        TachieManager.loadDataFile = function () {
            TachieDataLoader.load();
        };
        TachieManager.onDataLoaded = function (response) {
            this._data = response.trim().split("\n").map(function (row) {
                var _a = row.split(',').map(function (column) {
                    return column.trim();
                }), filename = _a[0], name = _a[1], expressions = _a.slice(2);
                return {
                    filename: filename,
                    name: name,
                    expressions: expressions,
                };
            });
            this.setup();
        };
        TachieManager.setup = function () {
            this._config = new Tachie_Config(Graphics.width, Graphics.height);
        };
        TachieManager.findCharacterData = function (name) {
            return find(this.data, function (chara) { return chara.name === name; });
        };
        TachieManager.findCharacter = function (name) {
            return find(this.characters, function (chara) { return chara.name === name; });
        };
        TachieManager.addCharacter = function (character) {
            this._characters.push(character);
        };
        TachieManager.removeCharacter = function (character) {
            this._characters.splice(this._characters.indexOf(character), 1);
        };
        TachieManager._characters = [];
        return TachieManager;
    }());
    var Tachie_CommandProcessor = /** @class */ (function () {
        function Tachie_CommandProcessor(interpreter) {
            this._interpreter = interpreter;
        }
        Tachie_CommandProcessor.normalizeParameters = function (parameters) {
            return parameters.join(' ').trim().replace(/\s+/g, ' ').replace(/: /g, ':').split(' ');
        };
        Tachie_CommandProcessor.transformParameters = function (parameters) {
            return parameters.map(function (parameter) {
                var _a = parameter.split(':'), value = _a[0], option = _a[1];
                return { value: value, option: option };
            });
        };
        Tachie_CommandProcessor.prototype.processPluginCommand = function (command, args) {
            var name = args[0], rawParameters = args.slice(1);
            var parameters = Tachie_CommandProcessor.transformParameters(Tachie_CommandProcessor.normalizeParameters(rawParameters));
            switch ((command || '').toUpperCase()) {
                case 'SHOW_TACHIE':
                case '立ち絵表示':
                    this.processShowCommand.apply(this, [name].concat(parameters));
                    break;
                case 'CHANGE_TACHIE':
                case '立ち絵変更':
                    this.processChangeCommand.apply(this, [name].concat(parameters));
                    break;
                case 'MOVE_TACHIE':
                case '立ち絵移動':
                    this.processMoveCommand.apply(this, [name].concat(parameters));
                    break;
                case 'ERASE_TACHIE':
                case '立ち絵消去':
                    this.processEraseCommand.apply(this, [name].concat(parameters));
                    break;
                default:
                    return false;
            }
            return true;
        };
        Tachie_CommandProcessor.prototype.processShowCommand = function (name) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var charaData = TachieManager.findCharacterData(name);
            if (!charaData) {
                return;
            }
            var _a = TachieCommandParser.parseShowCommandParameters(args), expression = _a.expression, position = _a.position, offsetX = _a.offsetX, offsetY = _a.offsetY, slideX = _a.slideX, slideY = _a.slideY, distance = _a.distance, duration = _a.duration, wait = _a.wait;
            var chara = __assign({ id: TachieManager.config.pictureNumber(position, distance), name: name,
                expression: expression, filename: Tachie_CommandProcessor.filenameWithExpression(charaData, expression) }, TachieManager.config.picturePosition(position, distance), { scale: TachieManager.config.scaleByDistance[distance], position: position,
                distance: distance });
            chara.x += offsetX;
            chara.y += offsetY;
            TachieManager.addCharacter(chara);
            if (duration > 0) {
                this._showPicture(chara.id, chara.filename, chara.x - slideX, chara.y - slideY, chara.scale, chara.scale, 0);
                this._movePicture(chara.id, chara.x, chara.y, chara.scale, chara.scale, 255, duration);
                if (wait) {
                    this._wait(duration);
                }
            }
            else {
                this._showPicture(chara.id, chara.filename, chara.x, chara.y, chara.scale, chara.scale, 255);
            }
        };
        Tachie_CommandProcessor.prototype.processChangeCommand = function (target) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var chara = TachieManager.findCharacter(target);
            if (!chara) {
                return;
            }
            var _a = TachieCommandParser.parseChangeCommandParameters(args), name = _a.name, expression = _a.expression, duration = _a.duration, wait = _a.wait;
            var charaData = name !== '' ? TachieManager.findCharacterData(name) : TachieManager.findCharacterData(chara.name);
            var filename = Tachie_CommandProcessor.filenameWithExpression(charaData, expression);
            var pictureId = chara.id;
            if (duration > 0) {
                this._showPicture(pictureId + 1, filename, chara.x, chara.y, chara.scale, chara.scale, 0);
                this._movePicture(pictureId + 1, chara.x, chara.y, chara.scale, chara.scale, 255, duration);
                this._movePicture(pictureId, chara.x, chara.y, chara.scale, chara.scale, 0, duration);
                if (wait) {
                    this._wait(duration);
                }
            }
            else {
                this._showPicture(pictureId + 1, filename, chara.x, chara.y, chara.scale, chara.scale, 255);
                this._movePicture(pictureId + 1, chara.x, chara.y, chara.scale, chara.scale, 255, 1);
            }
            this._setHandlerForPictureMoveCompleted(pictureId + 1, function () {
                _this._showPicture(pictureId, filename, chara.x, chara.y, chara.scale, chara.scale, 255);
                _this._erasePicture(pictureId + 1);
            });
            if (name !== '') {
                chara.name = name;
            }
        };
        Tachie_CommandProcessor.prototype.processMoveCommand = function (name) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var chara = TachieManager.findCharacter(name);
            if (!chara) {
                return;
            }
            var _a = TachieCommandParser.parseMoveCommandParameters(args), position = _a.position, offsetX = _a.offsetX, offsetY = _a.offsetY, duration = _a.duration, wait = _a.wait;
            if (chara.position !== position) {
                var oldId_1 = chara.id;
                chara.id = TachieManager.config.pictureNumber(position, chara.distance);
                var pictureId_1 = chara.id;
                var _b = TachieManager.config.picturePosition(position, chara.distance), x = _b.x, y = _b.y;
                chara.x = x + offsetX;
                chara.y = y + offsetY;
                chara.position = position;
                if (duration > 0) {
                    this._movePicture(oldId_1, chara.x, chara.y, chara.scale, chara.scale, 255, duration);
                    this._setHandlerForPictureMoveCompleted(oldId_1, function () {
                        _this._showPicture(pictureId_1, chara.filename, chara.x, chara.y, chara.scale, chara.scale, 255);
                        _this._erasePicture(oldId_1);
                    });
                    if (wait) {
                        this._wait(duration);
                    }
                }
                else {
                    this._showPicture(pictureId_1, chara.filename, chara.x, chara.y, chara.scale, chara.scale, 255);
                    this._erasePicture(oldId_1);
                }
            }
            else {
                var pictureId = chara.id;
                chara.x += offsetX;
                chara.y += offsetY;
                this._movePicture(pictureId, chara.x, chara.y, chara.scale, chara.scale, 255, duration);
                if (duration > 0 && wait) {
                    this._wait(duration);
                }
            }
        };
        Tachie_CommandProcessor.prototype.processEraseCommand = function (name) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var chara = TachieManager.findCharacter(name);
            if (!chara) {
                return;
            }
            var _a = TachieCommandParser.parseEraseCommandParameters(args), slideX = _a.slideX, slideY = _a.slideY, duration = _a.duration, wait = _a.wait;
            var pictureId = chara.id;
            TachieManager.removeCharacter(chara);
            if (duration > 0) {
                this._movePicture(pictureId, chara.x + slideX, chara.y + slideX, chara.scale, chara.scale, 0, duration);
                this._setHandlerForPictureMoveCompleted(pictureId, function () {
                    _this._erasePicture(pictureId);
                });
                if (wait) {
                    this._wait(duration);
                }
            }
            else {
                this._erasePicture(pictureId);
            }
        };
        Tachie_CommandProcessor.prototype._wait = function (duration) {
            this._interpreter.wait(duration);
        };
        Tachie_CommandProcessor.prototype._showPicture = function (id, name, x, y, scaleX, scaleY, opacity) {
            $gameScreen.showPicture(id, name, 2, x, y, scaleX, scaleX, opacity, 0);
        };
        Tachie_CommandProcessor.prototype._movePicture = function (id, x, y, scaleX, scaleY, opacity, duration) {
            $gameScreen.movePicture(id, 2, x, y, scaleX, scaleX, opacity, 0, duration);
        };
        Tachie_CommandProcessor.prototype._erasePicture = function (id) {
            $gameScreen.erasePicture(id);
        };
        Tachie_CommandProcessor.filenameWithExpression = function (chara, expression) {
            var expressionId = chara.expressions.indexOf(expression);
            return "" + chara.filename + (expressionId + 2);
        };
        Tachie_CommandProcessor.prototype._setHandlerForPictureMoveCompleted = function (pictureId, handler) {
            var picture = $gameScreen.picture(pictureId);
            if (picture) {
                picture._onMoveCompleted = handler;
            }
        };
        return Tachie_CommandProcessor;
    }());
    var Game_Interpreter_requestImages = Game_Interpreter.requestImages;
    Game_Interpreter.requestImages = function (list, commonList) {
        if (!list) {
            return;
        }
        list.filter(function (_a) {
            var code = _a.code;
            return code === 356;
        }).forEach(function (_a) {
            var parameters = _a.parameters;
            var args = parameters[0].split(' ');
            var command = args.shift().toUpperCase();
            if (command === 'SHOW_TACHIE' ||
                command === '立ち絵表示' ||
                command === 'CHANGE_TACHIE' ||
                command === '立ち絵変更') {
                var filename = null;
                var charaName = args[0], rawParameters = args.slice(1);
                var parameters_1 = Tachie_CommandProcessor.transformParameters(Tachie_CommandProcessor.normalizeParameters(rawParameters));
                if (command === 'SHOW_TACHIE' || command === '立ち絵表示') {
                    var expression = TachieCommandParser.parseShowCommandParameters(parameters_1).expression;
                    var character = TachieManager.findCharacterData(charaName);
                    if (character) {
                        filename = Tachie_CommandProcessor.filenameWithExpression(character, expression);
                    }
                }
                else {
                    var _b = TachieCommandParser.parseChangeCommandParameters(parameters_1), name_1 = _b.name, expression = _b.expression;
                    var character = name_1 ? TachieManager.findCharacterData(name_1) : TachieManager.findCharacterData(charaName);
                    if (character) {
                        filename = Tachie_CommandProcessor.filenameWithExpression(character, expression);
                    }
                }
                if (filename) {
                    ImageManager.requestPicture(filename, 0);
                }
            }
        });
        Game_Interpreter_requestImages.apply(this, arguments);
    };
})();

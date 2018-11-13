//=============================================================================
// Lunatlazur_Transition.js
// ----------------------------------------------------------------------------
// Copyright (c) 2018 Taku Aoi
// This plugin is released under the zlib/libpng License.
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
 * @plugindesc Fade-in / fade-out with transition
 * @author Taku Aoi
 * @help This plugin makes it possible to set the transition
 * at fade-in / fade-out.
 */
/*:ja
 * @plugindesc トランジションつきフェードイン／フェードアウトプラグイン
 * @author あおいたく
 * @help このプラグインはフェードイン／フェードアウトの際にトランジションを
 * 設定できるようにします。
 * 白画面でのフェードイン／フェードアウトや、フェード時間の指定に対応しているため、
 * トランジションを使わずにカスタムフェード機能として使うこともできます。
 *
 * トランジション画像は img/transitions フォルダに配置してください。
 *
 * 【プラグインコマンド一覧】
 *
 * 【フェードイン】
 * フェードイン [色] [トランジション画像名] [フェードにかける時間]
 *
 * 　フェードインを行います。
 *
 * 　色 白|黒
 * 　　フェードインするときの色
 * 　　白を指定すると白画面からフェードイン、
 * 　　黒を指定する黒画面からフェードインします
 * 　トランジション画像名 文字列
 * 　　img/transitions フォルダ内の画像ファイル名
 * 　フェードにかける時間 nフレーム
 * 　　フェードにかける時間をフレーム数で指定する
 *
 * 【フェードアウト】
 * フェードアウト [色] [トランジション画像名] [フェードにかける時間]
 *
 * 　フェードアウトを行います。
 *
 * 　色 白|黒
 * 　　フェードアウトするときの色
 * 　　白を指定すると白画面からフェードアウト、
 * 　　黒を指定する黒画面からフェードアウトします
 * 　トランジション画像名 文字列
 * 　　img/transitions フォルダ内の画像ファイル名
 * 　フェードにかける時間 nフレーム
 * 　　フェードにかける時間をフレーム数で指定する
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PIXI;
(function (PIXI) {
    var filters;
    (function (filters) {
        var ColorThresholdFilter = /** @class */ (function (_super) {
            __extends(ColorThresholdFilter, _super);
            function ColorThresholdFilter() {
                var _this = this;
                var fragmentSrc = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float threshold;\nuniform bool white;\nuniform bool fadingIn;\nvoid main(void) {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float v = 0.298912 * color.r + 0.586611 * color.g + 0.114478 * color.b;\n    if (white) {\n        if (fadingIn) {\n            gl_FragColor = vec4(vec3(threshold - v), 0.0);\n        } else {\n            gl_FragColor = vec4(vec3(1.0 - (v - threshold)), 0.0);\n        }\n    } else {\n        if (fadingIn) {\n            gl_FragColor = vec4(vec3(0.0), threshold - v);\n        } else {\n            gl_FragColor = vec4(vec3(0.0), 1.0 - (v - threshold));\n        }\n    }\n}";
                var uniforms = {
                    threshold: { type: '1f', value: 0.5 },
                    white: { type: 'b', value: false },
                    fadingIn: { type: 'b', value: false },
                };
                _this = _super.call(this, null, fragmentSrc, uniforms) || this;
                return _this;
            }
            return ColorThresholdFilter;
        }(PIXI.Filter));
        filters.ColorThresholdFilter = ColorThresholdFilter;
    })(filters = PIXI.filters || (PIXI.filters = {}));
})(PIXI || (PIXI = {}));
(function () {
    var pluginName = 'Lunatlazur_Transition';
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        switch (command) {
            case 'fadein':
            case 'フェードイン':
            case 'fadeout':
            case 'フェードアウト':
                _Game_Interpreter_processTransitionCommand.call(this, command === 'fadein' || command === 'フェードイン', args);
                break;
        }
    };
    function _Game_Interpreter_processTransitionCommand(isFadingIn, args) {
        var _a = _Game_Interpreter_parseTransitionParameters.call(this, args), isFilledWhite = _a.isFilledWhite, name = _a.name, duration = _a.duration;
        var spriteset = SceneManager._scene._spriteset;
        if (spriteset) {
            if (isFilledWhite) {
                spriteset._fadeSprite.setWhite();
            }
            else {
                spriteset._fadeSprite.setBlack();
            }
        }
        if (name) {
            if (isFadingIn) {
                $gameScreen._brightness = 255;
            }
            $gameScreen.startTransition(isFadingIn, isFilledWhite, name, duration);
            this.wait(duration);
        }
        else {
            _Game_Interpreter_fadeEx.call(this, isFadingIn, isFilledWhite, duration);
        }
    }
    function _Game_Interpreter_parseTransitionParameters(args) {
        var fillOrNameOrDurationOrNone = args[0], nameOrDurationOrNone = args[1], durationOrNone = args[2];
        var parameters = {
            isFilledWhite: false,
            duration: _Game_Interpreter_defaultFadeSpeed.call(this),
        };
        var fill = fillOrNameOrDurationOrNone;
        if (fill === '白' || fill === 'white') {
            parameters.isFilledWhite = true;
        }
        else if (fill !== '黒' && fill === 'black') {
            nameOrDurationOrNone = fillOrNameOrDurationOrNone;
            fillOrNameOrDurationOrNone = null;
        }
        var duration = durationOrNone || nameOrDurationOrNone;
        var matched = duration.match(/(\d+)(?:フレーム)?/);
        if (matched) {
            parameters.duration = parseInt(matched[1], 10);
            if (durationOrNone) {
                if (nameOrDurationOrNone) {
                    parameters.name = nameOrDurationOrNone;
                }
            }
        }
        else {
            if (!durationOrNone) {
                if (nameOrDurationOrNone) {
                    parameters.name = nameOrDurationOrNone;
                }
            }
        }
        return parameters;
    }
    function _Game_Interpreter_fadeEx(isFadingIn, isFilledWhite, duration) {
        if (isFadingIn) {
            TransitionManager.fadeSpeed = duration;
            if (!$gameMessage.isBusy()) {
                $gameScreen.startFadeIn(this.fadeSpeed());
                this.wait(this.fadeSpeed());
            }
            TransitionManager.fadeSpeed = null;
        }
        else {
            TransitionManager.fadeSpeed = duration;
            if (!$gameMessage.isBusy()) {
                $gameScreen.startFadeOut(this.fadeSpeed());
                this.wait(this.fadeSpeed());
            }
            TransitionManager.fadeSpeed = null;
        }
    }
    var _Game_Interpreter_defaultFadeSpeed = Game_Interpreter.prototype.fadeSpeed;
    Game_Interpreter.prototype.fadeSpeed = function () {
        if (TransitionManager.fadeSpeed !== null) {
            return TransitionManager.fadeSpeed;
        }
        return _Game_Interpreter_defaultFadeSpeed.call(this);
    };
    Game_Screen.prototype.startTransition = function (isFadingIn, isFilledWhite, name, duration) {
        TransitionManager.setTransition(isFadingIn, isFilledWhite, name, duration);
    };
    var _Spriteset_Base_createUpperLayer = Spriteset_Base.prototype.createUpperLayer;
    Spriteset_Base.prototype.createUpperLayer = function () {
        _Spriteset_Base_createUpperLayer.call(this);
        this._transitionSprite = new Sprite_Transition();
        this.addChild(this._transitionSprite);
    };
    var TransitionManager = /** @class */ (function () {
        function TransitionManager() {
        }
        TransitionManager.transition = function () {
            return this._transition;
        };
        TransitionManager.setTransition = function (isFadingIn, isFilledWhite, name, duration) {
            this._transition = new Game_Transition(isFadingIn, isFilledWhite, name, duration);
        };
        TransitionManager.clearTransition = function () {
            this._transition = null;
        };
        TransitionManager.load = function (filename, hue) {
            return ImageManager.loadBitmap('img/transitions/', filename, hue, true);
        };
        TransitionManager.fadeSpeed = null;
        return TransitionManager;
    }());
    var Game_Transition = /** @class */ (function () {
        function Game_Transition(isFadingIn, isFilledWhite, name, duration) {
            this.isFadingIn = isFadingIn;
            this.isFilledWhite = isFilledWhite;
            this.name = name;
            this.duration = duration;
            this.durationRest = duration;
        }
        Game_Transition.prototype.update = function () {
            if (this.durationRest > 0) {
                this.durationRest -= 1;
            }
        };
        return Game_Transition;
    }());
    var Sprite_Transition = /** @class */ (function (_super) {
        __extends(Sprite_Transition, _super);
        function Sprite_Transition() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Sprite_Transition.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            this._duration = 0;
            this._durationRest = 0;
            this._transitionName = '';
            this._isFadingIn = false;
            this._isFilledWhite = false;
            this.z = 4;
            this._thresholdFilter = new PIXI.filters.ColorThresholdFilter();
            this._thresholdFilter.uniforms.threshold = this._isFadingIn ? 0.0 : 1.0;
            this._thresholdFilter.uniforms.white = this._isFilledWhite;
            this._thresholdFilter.uniforms.fadingIn = this._isFadingIn;
            this._filters = [this._thresholdFilter];
        };
        Sprite_Transition.prototype.transition = function () {
            return TransitionManager.transition();
        };
        Sprite_Transition.prototype.update = function () {
            _super.prototype.update.call(this);
            this.updateBitmap();
            if (this.visible) {
                this.updateTransition();
                this.updateFilter();
            }
        };
        Sprite_Transition.prototype.updateBitmap = function () {
            var transition = this.transition();
            if (transition) {
                var transitionName = transition.name;
                if (this._transitionName !== transitionName) {
                    this._transitionName = transitionName;
                    this.loadBitmap();
                }
                this.visible = true;
            }
            else {
                this._transitionName = '';
                this.bitmap = null;
                this.visible = false;
            }
        };
        Sprite_Transition.prototype.updateTransition = function () {
            var transition = this.transition();
            if (transition) {
                transition.update();
                this._duration = transition.duration;
                this._durationRest = transition.durationRest;
                this._isFadingIn = transition.isFadingIn;
                this._isFilledWhite = transition.isFilledWhite;
                this._thresholdFilter.uniforms.white = this._isFilledWhite;
                this._thresholdFilter.uniforms.fadingIn = this._isFadingIn;
                if (this._durationRest <= 0) {
                    if (!this._isFadingIn) {
                        $gameScreen._brightness = 0;
                    }
                    TransitionManager.clearTransition();
                }
            }
        };
        Sprite_Transition.prototype.updateFilter = function () {
            if (this._durationRest > 0) {
                var threshold = (this._durationRest * 2) / this._duration;
                this._thresholdFilter.uniforms.threshold = (this._isFadingIn ? threshold : 1.0 - threshold);
            }
        };
        Sprite_Transition.prototype.loadBitmap = function () {
            this.bitmap = TransitionManager.load(this._transitionName);
        };
        return Sprite_Transition;
    }(Sprite_Base));
    var Game_Interpreter_requestImages = Game_Interpreter.requestImages;
    Game_Interpreter.requestImages = function (list, commonList) {
        var _this = this;
        if (!list) {
            return;
        }
        list.filter(function (_a) {
            var code = _a.code;
            return code === 356;
        }).forEach(function (_a) {
            var parameters = _a.parameters;
            var args = parameters[0].split(' ');
            var command = args.shift();
            if (command === 'fadein' ||
                command === 'フェードイン' ||
                command === 'fadeout' ||
                command === 'フェードアウト') {
                var _b = _Game_Interpreter_parseTransitionParameters.call(_this, args), isFilledWhite = _b.isFilledWhite, name_1 = _b.name, duration = _b.duration;
                if (name_1) {
                    console.log("preload " + name_1);
                    ImageManager.requestBitmap('img/transitions/', name_1, 0, true);
                }
            }
        });
        Game_Interpreter_requestImages.apply(this, arguments);
    };
})();

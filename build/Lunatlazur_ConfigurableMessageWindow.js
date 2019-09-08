//=============================================================================
// Lunatlazur_ConfigurableMessageWindow.js
// ----------------------------------------------------------------------------
// Copyright (c) 2018 Taku Aoi
// This plugin is released under the zlib/libpng License.
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
 * @plugindesc Configure message window settings.
 * @author Taku Aoi
 * @help This plugin makes the message window configurable.
 *
 * @param Number of message rows
 * @desc number of message rows.
 * @default 4
 * @type number
 *
 * @param Custom message font
 * @desc Additional message fonts.
 * @type string[]
 */
/*:ja
 * @plugindesc メッセージウィンドウカスタムプラグイン
 * @author あおいたく
 * @help このプラグインはメッセージ行数やフォントを変更できるようにします。
 *
 * @param メッセージ行数
 * @desc メッセージの行数です。
 * @default 4
 * @type number
 *
 * @param メッセージウェイト
 * @desc メッセージの文字送りにかかるウェイトです。
 * @default 1
 * @type number
 *
 * @param フォント
 * @desc 追加のフォントを指定できます。先頭にあるものが優先して読み込まれます。
 * @default ["UD デジタル 教科書体 NP-R", "Klee"]
 * @type string[]
 */
(function () {
    var pluginName = 'Lunatlazur_ConfigurableMessageWindow';
    function getValue(params) {
        var names = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            names[_i - 1] = arguments[_i];
        }
        var found = null;
        names.forEach(function (name) {
            if (!!params[name]) {
                found = params[name];
            }
        });
        return found;
    }
    var asString = getValue;
    function asNumber(params) {
        var names = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            names[_i - 1] = arguments[_i];
        }
        return parseInt(getValue.apply(void 0, [params].concat(names)), 10);
    }
    function asBoolean(params) {
        var names = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            names[_i - 1] = arguments[_i];
        }
        var value = getValue.apply(void 0, [params].concat(names)).toLowerCase();
        return value === 'true' || value === 'on';
    }
    var parameters = PluginManager.parameters(pluginName);
    var params = {
        numberOfMessageRows: asNumber(parameters, 'メッセージ行数', 'Number of message rows'),
        customMessageFont: JSON.parse(asString(parameters, 'フォント', 'Custom message font')),
        customMessageWait: asNumber(parameters, 'メッセージウェイト', 'Message wait'),
    };
    var _Window_Base_standardFontFace = Window_Base.prototype.standardFontFace;
    Window_Message.prototype.standardFontFace = function () {
        var fontfaces = params.customMessageFont.concat([
            _Window_Base_standardFontFace.call(this),
        ]).join(',');
        return fontfaces;
    };
    var _Window_Message_updateMessage = Window_Message.prototype.updateMessage;
    Window_Message.prototype.updateMessage = function () {
        var speed = _Window_Message_getMessageSpeed();
        if (this._textState && !this._lineShowFast && !this._showFast) {
            if (speed <= 0) {
                this._showFast = true;
            }
            else {
                this._waitCount = speed - 1;
            }
        }
        return _Window_Message_updateMessage.apply(this, arguments);
    };
    var _Window_Message_getMessageSpeed = function () {
        return params.customMessageWait || 1;
    };
    var _Window_Message_numVisibleRows = Window_Message.prototype.numVisibleRows;
    Window_Message.prototype.numVisibleRows = function () {
        return params.numberOfMessageRows || _Window_Message_numVisibleRows.call(this);
    };
})();

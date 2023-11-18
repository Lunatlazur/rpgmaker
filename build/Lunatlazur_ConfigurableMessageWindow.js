//=============================================================================
// Lunatlazur_ConfigurableMessageWindow.js
// ----------------------------------------------------------------------------
// Copyright (c) 2018 Taku Aoi
// This plugin is released under the zlib License.
// https://zlib.net/zlib_license.html
// ----------------------------------------------------------------------------
// Version
// 1.1.0 2019-09-09
// ----------------------------------------------------------------------------
// [Web]    : https://lunatlazur.com
// [Twitter]: https://twitter.com/aoitaku
// [GitHub] : https://github.com/lunatlazur
//=============================================================================
/*:
 * @plugindesc Configure message window settings
 * @author Taku Aoi
 * @help This plugin allows you to change the number of message lines,
 * fonts, etc.
 *
 * Usage
 * =====
 *
 * This plugin has no plugin command.
 *
 *
 * Changelog
 * =========
 *
 * 1.1.0 2019-09-09
 * ----------------
 * - Added option for applying custom message font to choice.
 *
 * 1.0.0 2018-04-01
 * ----------------
 * - Published.
 *
 *
 * @param Number of message rows
 * @desc Number of message rows.
 * @type number
 * @default 4
 *
 * @param Custom Message wait
 * @desc Change wait time during character feed.
 * @type number
 * @default 1
 *
 * @param Custom message font
 * @desc Additional message fonts.
 * @type string[]
 * @default ["Calibri","Geneva"]
 *
 * @param Apply custom message font to choice
 * @desc Apply custom message font to choice if true.
 * @type boolean
 * @default true
 */
/*:ja
 * @plugindesc メッセージウィンドウカスタムプラグイン
 * @author あおいたく
 * @help このプラグインはメッセージ行数やフォントを変更できるようにします。
 *
 * 使い方
 * ======
 *
 * このプラグインにプラグインコマンドはありません。
 *
 *
 * 変更履歴
 * ========
 *
 * 1.1.0 2019-09-09
 * ----------------
 * - 選択肢に追加のフォント指定を反映するかどうか設定できるように
 *
 * 1.0.0 2018-04-01
 * ----------------
 * - 公開
 *
 *
 * @param メッセージ行数
 * @desc メッセージの行数です。
 * @type number
 * @default 4
 *
 * @param メッセージウェイト
 * @desc メッセージの文字送りにかかるウェイトです。
 * @type number
 * @default 1
 *
 * @param フォント
 * @desc 追加のフォントを指定できます。先頭にあるものが優先して読み込まれます。
 * @type string[]
 * @default ["UD デジタル 教科書体 NP-R","Klee"]
 *
 * @param 選択肢に追加のフォント指定を反映
 * @desc 有効にすると選択肢に追加のフォント指定を反映します。
 * @type boolean
 * @default true
 */
(function () {
    'use strict';

    const pluginName = 'Lunatlazur_ConfigurableMessageWindow';
    function getValue(params, ...names) {
        let found = null;
        names.forEach((name) => {
            if (!!params[name]) {
                found = params[name];
            }
        });
        return found;
    }
    const asString = getValue;
    function asNumber(params, ...names) {
        return parseInt(getValue(params, ...names), 10);
    }
    function asBoolean(params, ...names) {
        const value = getValue(params, ...names).toLowerCase();
        return value === 'true' || value === 'on';
    }
    const parameters = PluginManager.parameters(pluginName);
    const params = {
        numberOfMessageRows: asNumber(parameters, 'メッセージ行数', 'Number of message rows'),
        customMessageWait: asNumber(parameters, 'メッセージウェイト', 'Custom Message wait'),
        customMessageFont: JSON.parse(asString(parameters, 'フォント', 'Custom message font')),
        applyCustomMessageFontToChoice: asBoolean(parameters, '選択肢に追加のフォント指定を反映', 'Apply custom message font to choice'),
    };
    const _Window_Base_standardFontFace = Window_Base.prototype.standardFontFace;
    Window_Message.prototype.standardFontFace = function () {
        const fontfaces = [
            ...params.customMessageFont,
            _Window_Base_standardFontFace.call(this),
        ].join(',');
        return fontfaces;
    };
    Window_ChoiceList.prototype.standardFontFace = function () {
        const fontfaces = [
            ...params.customMessageFont,
            _Window_Base_standardFontFace.call(this),
        ].join(',');
        return fontfaces;
    };
    const _Window_Message_updateMessage = Window_Message.prototype.updateMessage;
    Window_Message.prototype.updateMessage = function () {
        const speed = _Window_Message_getMessageSpeed();
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
    const _Window_Message_getMessageSpeed = function () {
        return params.customMessageWait || 1;
    };
    const _Window_Message_numVisibleRows = Window_Message.prototype.numVisibleRows;
    Window_Message.prototype.numVisibleRows = function () {
        return params.numberOfMessageRows ||
            _Window_Message_numVisibleRows.call(this);
    };

}());

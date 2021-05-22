//=============================================================================
// Lunatlazur_VariableObserver.js
// ----------------------------------------------------------------------------
// Copyright (c) 2018 Taku Aoi
// This plugin is released under the zlib License.
// https://zlib.net/zlib_license.html
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2018-10-14
// ----------------------------------------------------------------------------
// [Web]    : https://lunatlazur.com
// [Twitter]: https://twitter.com/aoitaku
// [GitHub] : https://github.com/lunatlazur
//=============================================================================
/*:
 * @plugindesc Monitor variable changes
 * @author Taku Aoi
 * @help This plugin provides the feature to perform the specified action
 * when the value of a variable changes.
 *
 * Usage
 * =====
 *
 * Plug-in command list
 * ====================
 *
 * ACTIVATE_VARIABLE_OBSERVER
 * --------------------------
 *
 *     ACTIVATE_VARIABLE_OBSERVER <target variable number> <common event id>
 *
 * Start monitoring variables.
 *
 *     <target variable number>
 *
 *
 * Specifies the number of the variable to be monitored.
 *
 *
 *     <common event id>
 *
 * Specifies the ID of the common event that will be executed when the variable
 * changes.
 *
 *
 * DEACTIVATE_VARIABLE_OBSERVER
 * --------------------------
 *
 *     DEACTIVATE_VARIABLE_OBSERVER <target variable number>
 *
 * Stop monitoring variables.
 *
 *
 *     <target variable number>
 *
 * Specifies the number of the variable to stop monitoring.
 *
 *
 * Changelog
 * =========
 *
 * 1.0.0 2018-10-14
 * ----------------
 * - Published.
 *
 */
/*:ja
 * @plugindesc 変数監視プラグイン
 * @author あおいたく
 * @help このプラグインは任意の変数を監視して、値の変更時に行う処理を設定できるようにします。
 *
 * 使い方
 * ======
 *
 * プラグインコマンド一覧
 * ======================
 *
 * 変数監視開始
 * ----------
 *
 *     変数監視開始 <監視する変数番号> <コモンイベントID>
 *
 * 変数の監視を開始します。
 *
 *
 *     <監視する変数番号>
 *
 * 監視する変数の番号を指定します。
 *
 *
 *     <コモンイベントID>
 *
 * 変数に変更があったときに実行されるコモンイベントのIDを指定します。
 *
 *
 * 変数監視停止
 * ----------
 *
 *     変数監視停止 <監視を停止する変数番号>
 *
 * 変数の監視を停止します。
 *
 *
 *     <監視を停止する変数番号>
 *
 * 監視を停止する変数の番号を指定します。
 *
 *
 * 変更履歴
 * ========
 *
 * 1.0.0 2018-10-14
 * ----------------
 * - 公開
 *
 */
(function () {
    'use strict';

    const observedVariables = {};
    function execCommonEvent(commonEventId) {
        const commonEvent = $dataCommonEvents[commonEventId];
        if (!commonEvent) {
            return;
        }
        const interpreter = new Game_Interpreter;
        interpreter.setup(commonEvent.list, 0);
        interpreter.update();
    }
    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.apply(this, arguments);
        switch ((command || '').toUpperCase()) {
            case 'ACTIVATE_VARIABLE_OBSERVER':
            case '変数監視開始':
                const [activateTarget, commonEventId] = args;
                activateObserver(parseInt(activateTarget), parseInt(commonEventId));
                break;
            case 'DEACTIVATE_VARIABLE_OBSERVER':
            case '変数監視停止':
                const [deactivateTarget] = args;
                deactivateObserver(parseInt(deactivateTarget));
                break;
        }
    };
    function activateObserver(variable, commonEventId) {
        observedVariables[variable] = {
            previousValue: $gameVariables.value(variable),
            commonEventId,
        };
    }
    function deactivateObserver(variable) {
        delete observedVariables[variable];
    }
    const _Game_Map_updateInterpreter = Game_Map.prototype.updateInterpreter;
    Game_Map.prototype.updateInterpreter = function () {
        _Game_Map_updateInterpreter.call(this);
        Object.keys(observedVariables).map((key) => {
            const index = parseInt(key, 10);
            return [index, observedVariables[index]];
        }).filter(([key, observer]) => observer.previousValue !== $gameVariables.value(key))
            .forEach(([_, observer]) => execCommonEvent(observer.commonEventId));
    };

}());

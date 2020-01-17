//=============================================================================
// Lunatlazur_VariableObserver.js
// ----------------------------------------------------------------------------
// Copyright (c) 2018 Taku Aoi
// This plugin is released under the zlib/libpng License.
// http://zlib.net/zlib_license.html
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2018/10/14
// ----------------------------------------------------------------------------
// [Web]    : https://lunatlazur.com/
// [Twitter]: https://twitter.com/aoitaku/
// [GitHub] : https://github.com/aoitaku/
//=============================================================================
/*:ja
 * @plugindesc 変数監視プラグイン
 * @author あおいたく
 * @help このプラグインは任意の変数を監視して、値の変更時に行う処理を設定できるようにします。
 */
(function () {
    var pluginName = 'Lunatlazur_VariableObserver';
    var observedVariables = {};
    function execCommonEvent(commonEventId) {
        var commonEvent = $dataCommonEvents[commonEventId];
        if (!commonEvent) {
            return;
        }
        var interpreter = new Game_Interpreter;
        interpreter.setup(commonEvent.list, 0);
        interpreter.update();
    }
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.apply(this, arguments);
        switch ((command || '').toUpperCase()) {
            case 'ACTIVATE_VARIABLE_OBSERVER':
            case '変数監視開始':
                var activateTarget = args[0], commonEventId = args[1];
                activateObserver(parseInt(activateTarget), parseInt(commonEventId));
                break;
            case 'DEACTIVATE_VARIABLE_OBSERVER':
            case '変数監視停止':
                var deactivateTarget = args[0];
                deactivateObserver(parseInt(deactivateTarget));
                break;
        }
    };
    function activateObserver(variable, commonEventId) {
        observedVariables[variable] = {
            previousValue: $gameVariables.value(variable),
            commonEventId: commonEventId,
        };
    }
    function deactivateObserver(variable) {
        delete observedVariables[variable];
    }
    var _Game_Map_updateInterpreter = Game_Map.prototype.updateInterpreter;
    Game_Map.prototype.updateInterpreter = function () {
        _Game_Map_updateInterpreter.call(this);
        Object.keys(observedVariables).map(function (key) {
            var index = parseInt(key, 10);
            return [index, observedVariables[index]];
        }).filter(function (_a) {
            var key = _a[0], observer = _a[1];
            return observer.previousValue !== $gameVariables.value(key);
        })
            .forEach(function (_a) {
            var _ = _a[0], observer = _a[1];
            return execCommonEvent(observer.commonEventId);
        });
    };
})();

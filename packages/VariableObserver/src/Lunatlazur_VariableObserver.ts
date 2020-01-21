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
 * 
 * 変更履歴
 * ********
 * 
 * 1.0.0 2020/01/22:
 *   - 公開
 * 
 */

(function () {
  const pluginName = 'Lunatlazur_VariableObserver'

  const observedVariables: { [key: number]: { previousValue: number, commonEventId: number } }  = {}
  function execCommonEvent (commonEventId: number) {
    const commonEvent = $dataCommonEvents[commonEventId]
    if (!commonEvent) {
      return
    }
    const interpreter = new Game_Interpreter
    interpreter.setup(commonEvent.list, 0)
    interpreter.update()
  }

  const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.apply(this, arguments)
    switch ((command || '').toUpperCase()) {
    case 'ACTIVATE_VARIABLE_OBSERVER':
    case '変数監視開始':
      const [activateTarget, commonEventId] = args
      activateObserver(parseInt(activateTarget), parseInt(commonEventId))
      break
    case 'DEACTIVATE_VARIABLE_OBSERVER':
    case '変数監視停止':
      const [deactivateTarget] = args
      deactivateObserver(parseInt(deactivateTarget))
      break
    }
  }

  function activateObserver (variable: number, commonEventId: number) {
    observedVariables[variable] = {
      previousValue: $gameVariables.value(variable),
      commonEventId,
    }
  }

  function deactivateObserver (variable: number) {
    delete observedVariables[variable]
  }

  const _Game_Map_updateInterpreter  = Game_Map.prototype.updateInterpreter
  Game_Map.prototype.updateInterpreter = function() {
    _Game_Map_updateInterpreter.call(this)
    Object.keys(observedVariables).map((key): [number, { previousValue: number, commonEventId: number }] => {
      const index = parseInt(key, 10)
      return [index, observedVariables[index]]
    }).filter(([key, observer]) => observer.previousValue !== $gameVariables.value(key))
      .forEach(([_, observer]) => execCommonEvent(observer.commonEventId))
  }
})()

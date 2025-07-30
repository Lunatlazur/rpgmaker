/**
 * RPG Maker MV - Module Types Test
 * モジュール型が正しくimportできることをテストします
 */

// 個別モジュールのimportテスト
import { RPGMakerMV as WindowTypes } from '../modules/windows';
import { RPGMakerMV as ObjectTypes } from '../modules/objects';
import { RPGMakerMV as ManagerTypes } from '../modules/managers';
import { RPGMakerMV as SceneTypes } from '../modules/scenes';
import { RPGMakerMV as SpriteTypes } from '../modules/sprites';
import { RPGMakerMV as DataTypes } from '../modules/data';

// 統合名前空間のimportテスト
import { RPGMakerMV } from '../modules';

// 型チェックテスト関数
function testWindowTypes() {
  // Window_Messageの型テスト
  const message: WindowTypes.Window_Message = {} as WindowTypes.Window_Message;
  const textState: WindowTypes.TextState = {} as WindowTypes.TextState;

  // カテゴリ別名前空間でのテスト
  const messageNS: RPGMakerMV.Window_Message = {} as RPGMakerMV.Window_Message;

  console.log('Window types test passed');
}

function testObjectTypes() {
  // Game_Actorの型テスト
  const actor: ObjectTypes.Game_Actor = {} as ObjectTypes.Game_Actor;
  const battler: ObjectTypes.Game_Battler = {} as ObjectTypes.Game_Battler;

  // カテゴリ別名前空間でのテスト
  const actorNS: RPGMakerMV.Game_Actor = {} as RPGMakerMV.Game_Actor;

  console.log('Object types test passed');
}

function testManagerTypes() {
  // DataManagerの型テスト
  const dataManager: ManagerTypes.DataManager = {} as ManagerTypes.DataManager;
  const plugin: ManagerTypes.Plugin = {} as ManagerTypes.Plugin;

  // カテゴリ別名前空間でのテスト
  const dataManagerNS: RPGMakerMV.DataManager = {} as RPGMakerMV.DataManager;

  console.log('Manager types test passed');
}

// テスト実行
testWindowTypes();
testObjectTypes();
testManagerTypes();

console.log('All module type tests passed!');

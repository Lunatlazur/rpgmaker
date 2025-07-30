/**
 * RPG Maker MZ - Module Types Test
 * モジュール型が正しくimportできることをテストします
 */

// 個別モジュールのimportテスト
import { RPGMakerMZ as WindowTypes } from '../modules/windows';
import { RPGMakerMZ as ObjectTypes } from '../modules/objects';
import { RPGMakerMZ as ManagerTypes } from '../modules/managers';
import { RPGMakerMZ as SceneTypes } from '../modules/scenes';
import { RPGMakerMZ as SpriteTypes } from '../modules/sprites';
import { RPGMakerMZ as DataTypes } from '../modules/data';

// 統合名前空間のimportテスト
import { RPGMakerMZ } from '../modules';

// 型チェックテスト関数
function testWindowTypes() {
  // Window_Messageの型テスト
  const message: WindowTypes.Window_Message = {} as WindowTypes.Window_Message;
  const base: WindowTypes.Window_Base = {} as WindowTypes.Window_Base;
  
  // 統合名前空間でのテスト
  const messageNS: RPGMakerMZ.Window_Message = {} as RPGMakerMZ.Window_Message;
  
  console.log('Window types test passed');
}

function testObjectTypes() {
  // Game_Actorの型テスト  
  const actor: ObjectTypes.Game_Actor = {} as ObjectTypes.Game_Actor;
  const battler: ObjectTypes.Game_Battler = {} as ObjectTypes.Game_Battler;
  
  // 統合名前空間でのテスト
  const actorNS: RPGMakerMZ.Game_Actor = {} as RPGMakerMZ.Game_Actor;
  
  console.log('Object types test passed');
}

function testManagerTypes() {
  // DataManagerの型テスト
  const dataManager: ManagerTypes.DataManager = {} as ManagerTypes.DataManager;
  const sceneManager: ManagerTypes.SceneManager = {} as ManagerTypes.SceneManager;
  
  // 統合名前空間でのテスト
  const dataManagerNS: RPGMakerMZ.DataManager = {} as RPGMakerMZ.DataManager;
  
  console.log('Manager types test passed');
}

function testSceneTypes() {
  // Scene_Mapの型テスト
  const sceneMap: SceneTypes.Scene_Map = {} as SceneTypes.Scene_Map;
  const sceneBase: SceneTypes.Scene_Base = {} as SceneTypes.Scene_Base;
  
  // 統合名前空間でのテスト
  const sceneMapNS: RPGMakerMZ.Scene_Map = {} as RPGMakerMZ.Scene_Map;
  
  console.log('Scene types test passed');
}

function testSpriteTypes() {
  // Sprite_Characterの型テスト
  const spriteChar: SpriteTypes.Sprite_Character = {} as SpriteTypes.Sprite_Character;
  const spriteBattler: SpriteTypes.Sprite_Battler = {} as SpriteTypes.Sprite_Battler;
  
  // 統合名前空間でのテスト
  const spriteCharNS: RPGMakerMZ.Sprite_Character = {} as RPGMakerMZ.Sprite_Character;
  
  console.log('Sprite types test passed');
}

function testDataTypes() {
  // DataActorの型テスト
  const dataActor: DataTypes.DataActor = {} as DataTypes.DataActor;
  const dataSystem: DataTypes.DataSystem = {} as DataTypes.DataSystem;
  
  // 統合名前空間でのテスト
  const dataActorNS: RPGMakerMZ.DataActor = {} as RPGMakerMZ.DataActor;
  
  console.log('Data types test passed');
}

// テスト実行
testWindowTypes();
testObjectTypes();
testManagerTypes();
testSceneTypes();
testSpriteTypes();
testDataTypes();

console.log('All MZ module type tests passed!');
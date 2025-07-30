/**
 * RPG Maker MV - Managers Module Types
 * グローバル型定義をRPGMakerMV名前空間としてre-exportします
 */

/// <reference path="../typings/rpg_managers.d.ts" />
/// <reference path="../typings/rpgmakermv.d.ts" />

// RPGMakerMV名前空間として型をエクスポート
export namespace RPGMakerMV {
  // Manager Classes - グローバルオブジェクトとして存在
  export type DataManager = typeof DataManager;
  export type ConfigManager = typeof ConfigManager;
  export type StorageManager = typeof StorageManager;
  export type ImageManager = typeof ImageManager;
  export type AudioManager = typeof AudioManager;
  export type SoundManager = typeof SoundManager;
  export type TextManager = typeof TextManager;
  export type SceneManager = typeof SceneManager;
  export type BattleManager = typeof BattleManager;
  export type PluginManager = typeof PluginManager;

  // 既存のRPGMakerMV名前空間の型も再エクスポート
  export type PluginParameters = globalThis.PluginParameters;
  export type Rewards = globalThis.RPGMakerMV.Rewards;
  export type Plugin = globalThis.RPGMakerMV.Plugin;
  export type SavefileInfo = globalThis.RPGMakerMV.SavefileInfo;
  export type SaveContents = globalThis.RPGMakerMV.SaveContents;
}
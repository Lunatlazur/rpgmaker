/**
 * RPG Maker MZ - Managers Module Types
 * グローバル型定義をRPGMakerMZ名前空間としてre-exportします
 */

/// <reference path="../typings/rmmz_managers.d.ts" />
/// <reference path="../typings/rpgmakermz.d.ts" />

// RPGMakerMZ名前空間として型をエクスポート
export namespace RPGMakerMZ {
  // Manager Classes - グローバルオブジェクトとして存在
  export type DataManager = typeof DataManager;
  export type ConfigManager = typeof ConfigManager;
  export type StorageManager = typeof StorageManager;
  export type FontManager = typeof FontManager;
  export type ImageManager = typeof ImageManager;
  export type EffectManager = typeof EffectManager;
  export type AudioManager = typeof AudioManager;
  export type SoundManager = typeof SoundManager;
  export type TextManager = typeof TextManager;
  export type ColorManager = typeof ColorManager;
  export type SceneManager = typeof SceneManager;
  export type BattleManager = typeof BattleManager;
  export type PluginManager = typeof PluginManager;
  export type SceneConstructor = globalThis.SceneConstructor;
}

/**
 * RPG Maker MV - Scenes Module Types
 * グローバル型定義をRPGMakerMV名前空間としてre-exportします
 */

/// <reference path="../typings/rpg_scenes.d.ts" />
/// <reference path="../typings/rpgmakermv.d.ts" />

// RPGMakerMV名前空間として型をエクスポート
export namespace RPGMakerMV {
  // Scene Classes
  export type Scene_Base = globalThis.Scene_Base;
  export type Scene_Boot = globalThis.Scene_Boot;
  export type Scene_Title = globalThis.Scene_Title;
  export type Scene_Map = globalThis.Scene_Map;
  export type Scene_MenuBase = globalThis.Scene_MenuBase;
  export type Scene_Menu = globalThis.Scene_Menu;
  export type Scene_ItemBase = globalThis.Scene_ItemBase;
  export type Scene_Item = globalThis.Scene_Item;
  export type Scene_Skill = globalThis.Scene_Skill;
  export type Scene_Equip = globalThis.Scene_Equip;
  export type Scene_Status = globalThis.Scene_Status;
  export type Scene_Options = globalThis.Scene_Options;
  export type Scene_File = globalThis.Scene_File;
  export type Scene_Save = globalThis.Scene_Save;
  export type Scene_Load = globalThis.Scene_Load;
  export type Scene_GameEnd = globalThis.Scene_GameEnd;
  export type Scene_Shop = globalThis.Scene_Shop;
  export type Scene_Name = globalThis.Scene_Name;
  export type Scene_Debug = globalThis.Scene_Debug;
  export type Scene_Battle = globalThis.Scene_Battle;
  export type Scene_Gameover = globalThis.Scene_Gameover;
}
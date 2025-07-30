/**
 * RPG Maker MV - Objects Module Types
 * グローバル型定義をRPGMakerMV名前空間としてre-exportします
 */

/// <reference path="../typings/rpg_objects.d.ts" />
/// <reference path="../typings/rpgmakermv.d.ts" />

// RPGMakerMV名前空間として型をエクスポート
export namespace RPGMakerMV {
  // Game Object Classes
  export type Game_Temp = globalThis.Game_Temp;
  export type Game_System = globalThis.Game_System;
  export type Game_Timer = globalThis.Game_Timer;
  export type Game_Message = globalThis.Game_Message;
  export type Game_Switches = globalThis.Game_Switches;
  export type Game_Variables = globalThis.Game_Variables;
  export type Game_SelfSwitches = globalThis.Game_SelfSwitches;
  export type Game_Screen = globalThis.Game_Screen;
  export type Game_Picture = globalThis.Game_Picture;
  export type Game_Item = globalThis.Game_Item;
  export type Game_Action = globalThis.Game_Action;
  export type Game_ActionResult = globalThis.Game_ActionResult;
  export type Game_BattlerBase = globalThis.Game_BattlerBase;
  export type Game_Battler = globalThis.Game_Battler;
  export type Game_Actor = globalThis.Game_Actor;
  export type Game_Enemy = globalThis.Game_Enemy;
  export type Game_Actors = globalThis.Game_Actors;
  export type Game_Unit = globalThis.Game_Unit;
  export type Game_Party = globalThis.Game_Party;
  export type Game_Troop = globalThis.Game_Troop;
  export type Game_Map = globalThis.Game_Map;
  export type Game_CommonEvent = globalThis.Game_CommonEvent;
  export type Game_CharacterBase = globalThis.Game_CharacterBase;
  export type Game_Character = globalThis.Game_Character;
  export type Game_Player = globalThis.Game_Player;
  export type Game_Follower = globalThis.Game_Follower;
  export type Game_Followers = globalThis.Game_Followers;
  export type Game_Vehicle = globalThis.Game_Vehicle;
  export type Game_Event = globalThis.Game_Event;
  export type Game_Interpreter = globalThis.Game_Interpreter;

  // 既存のRPGMakerMV名前空間の型も再エクスポート
  export type ActorIteratorCallback = globalThis.RPGMakerMV.ActorIteratorCallback;
  export type EnemyIteratorCallback = globalThis.RPGMakerMV.EnemyIteratorCallback;
  export type DefaultLetterTableHalf = globalThis.RPGMakerMV.DefaultLetterTableHalf;
  export type DefaultLetterTableFull = globalThis.RPGMakerMV.DefaultLetterTableFull;
  export type BattlerAnimation = globalThis.RPGMakerMV.BattlerAnimation;
}
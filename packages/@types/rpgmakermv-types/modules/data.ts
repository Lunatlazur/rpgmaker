/**
 * RPG Maker MV - Data Module Types
 * グローバル型定義をRPGMakerMV名前空間としてre-exportします
 */

/// <reference path="../typings/data.d.ts" />
/// <reference path="../typings/rpgmakermv.d.ts" />

// RPGMakerMV名前空間として型をエクスポート
export namespace RPGMakerMV {
  // Base Interfaces
  export type Identifiable = globalThis.RPGMakerMV.Identifiable;
  export type Annotatable = globalThis.RPGMakerMV.Annotatable;

  // Data Types
  export type DataSystem = globalThis.RPGMakerMV.DataSystem;
  export type DataActor = globalThis.RPGMakerMV.DataActor;
  export type DataClass = globalThis.RPGMakerMV.DataClass;
  export type DataSkill = globalThis.RPGMakerMV.DataSkill;
  export type DataItem = globalThis.RPGMakerMV.DataItem;
  export type DataWeapon = globalThis.RPGMakerMV.DataWeapon;
  export type DataArmor = globalThis.RPGMakerMV.DataArmor;
  export type DataEnemy = globalThis.RPGMakerMV.DataEnemy;
  export type DataTroop = globalThis.RPGMakerMV.DataTroop;
  export type DataState = globalThis.RPGMakerMV.DataState;
  export type DataAnimation = globalThis.RPGMakerMV.DataAnimation;
  export type DataTileset = globalThis.RPGMakerMV.DataTileset;
  export type DataCommonEvent = globalThis.RPGMakerMV.DataCommonEvent;
  export type DataMapInfo = globalThis.RPGMakerMV.DataMapInfo;
  export type DataMap = globalThis.RPGMakerMV.DataMap;

  // Base Types
  export type DataBasicItem = globalThis.RPGMakerMV.DataBasicItem;
  export type DataEquip = globalThis.RPGMakerMV.DataEquip;
  export type DataAnyItem = globalThis.RPGMakerMV.DataAnyItem;

  // Additional Types - コンパイルテストで確認された存在する型のみ
  export type Meta = globalThis.RPGMakerMV.Meta;
  export type AudioObject = globalThis.RPGMakerMV.AudioObject;
  export type Effect = globalThis.RPGMakerMV.Effect;
  export type Trait = globalThis.RPGMakerMV.Trait;
  export type AnimationTiming = globalThis.RPGMakerMV.AnimationTiming;
  export type EventCommand = globalThis.RPGMakerMV.EventCommand;
  export type MoveRoute = globalThis.RPGMakerMV.MoveRoute;
  export type MoveCommand = globalThis.RPGMakerMV.MoveCommand;
  export type MapEvent = globalThis.RPGMakerMV.MapEvent;
  export type MapEventPage = globalThis.RPGMakerMV.MapEventPage;
}
/**
 * RPG Maker MZ - Data Module Types
 * グローバル型定義をRPGMakerMZ名前空間としてre-exportします
 */

/// <reference path="../typings/data.d.ts" />
/// <reference path="../typings/rpgmakermz.d.ts" />

// RPGMakerMZ名前空間として型をエクスポート
export namespace RPGMakerMZ {
  // Base Interfaces
  export type Identifiable = globalThis.RPGMakerMZ.Identifiable;
  export type HasMetadata = globalThis.RPGMakerMZ.HasMetadata;
  export type HasTraits = globalThis.RPGMakerMZ.HasTraits;
  export type DataObject = globalThis.RPGMakerMZ.DataObject;
  export type HasEffects = globalThis.RPGMakerMZ.HasEffects;
  export type HasIcon = globalThis.RPGMakerMZ.HasIcon;
  export type HasAnimation = globalThis.RPGMakerMZ.HasAnimation;
  export type HasParams = globalThis.RPGMakerMZ.HasParams;
  export type Invokable = globalThis.RPGMakerMZ.Invokable;

  // Data Types
  export type DataSystem = globalThis.RPGMakerMZ.DataSystem;
  export type DataActor = globalThis.RPGMakerMZ.DataActor;
  export type DataClass = globalThis.RPGMakerMZ.DataClass;
  export type DataSkill = globalThis.RPGMakerMZ.DataSkill;
  export type DataItem = globalThis.RPGMakerMZ.DataItem;
  export type DataWeapon = globalThis.RPGMakerMZ.DataWeapon;
  export type DataArmor = globalThis.RPGMakerMZ.DataArmor;
  export type DataEnemy = globalThis.RPGMakerMZ.DataEnemy;
  export type DataTroop = globalThis.RPGMakerMZ.DataTroop;
  export type DataState = globalThis.RPGMakerMZ.DataState;
  export type DataAnimation = globalThis.RPGMakerMZ.DataAnimation;
  export type DataTileset = globalThis.RPGMakerMZ.DataTileset;
  export type DataCommonEvent = globalThis.RPGMakerMZ.DataCommonEvent;
  export type DataMapInfo = globalThis.RPGMakerMZ.DataMapInfo;
  export type DataMap = globalThis.RPGMakerMZ.DataMap;
}

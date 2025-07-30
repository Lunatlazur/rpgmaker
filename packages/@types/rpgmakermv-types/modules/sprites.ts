/**
 * RPG Maker MV - Sprites Module Types
 * グローバル型定義をRPGMakerMV名前空間としてre-exportします
 */

/// <reference path="../typings/rpg_sprites.d.ts" />
/// <reference path="../typings/rpgmakermv.d.ts" />

// RPGMakerMV名前空間として型をエクスポート
export namespace RPGMakerMV {
  // Sprite Classes
  export type Sprite_Base = globalThis.Sprite_Base;
  export type Sprite_Button = globalThis.Sprite_Button;
  export type Sprite_Character = globalThis.Sprite_Character;
  export type Sprite_Battler = globalThis.Sprite_Battler;
  export type Sprite_Actor = globalThis.Sprite_Actor;
  export type Sprite_Enemy = globalThis.Sprite_Enemy;
  export type Sprite_Picture = globalThis.Sprite_Picture;
  export type Sprite_Timer = globalThis.Sprite_Timer;
  export type Sprite_Destination = globalThis.Sprite_Destination;
  export type Sprite_Animation = globalThis.Sprite_Animation;
  export type Sprite_Damage = globalThis.Sprite_Damage;
  export type Sprite_StateIcon = globalThis.Sprite_StateIcon;
  export type Sprite_StateOverlay = globalThis.Sprite_StateOverlay;
  export type Sprite_Weapon = globalThis.Sprite_Weapon;
  export type Sprite_Balloon = globalThis.Sprite_Balloon;
  export type Spriteset_Base = globalThis.Spriteset_Base;
  export type Spriteset_Map = globalThis.Spriteset_Map;
  export type Spriteset_Battle = globalThis.Spriteset_Battle;

  // Sprite-related Types
  export type Motion = globalThis.RPGMakerMV.Motion;
}
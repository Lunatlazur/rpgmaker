/**
 * RPG Maker MZ - Windows Module Types
 * グローバル型定義をRPGMakerMZ名前空間としてre-exportします
 */

/// <reference path="../typings/rmmz_windows.d.ts" />
/// <reference path="../typings/rpgmakermz.d.ts" />

// RPGMakerMZ名前空間として型をエクスポート
export namespace RPGMakerMZ {
  // Window Base Classes
  export type Window_Base = globalThis.Window_Base;
  export type Window_Scrollable = globalThis.Window_Scrollable;
  export type Window_Selectable = globalThis.Window_Selectable;
  export type Window_Command<T> = globalThis.Window_Command<T>;
  export type Window_HorzCommand<T> = globalThis.Window_HorzCommand<T>;
  export type Window_Help = globalThis.Window_Help;
  export type Window_Gold = globalThis.Window_Gold;
  export type Window_StatusBase = globalThis.Window_StatusBase;
  export type Window_MenuCommand<T> = globalThis.Window_MenuCommand<T>;
  export type Window_MenuStatus = globalThis.Window_MenuStatus;
  export type Window_MenuActor = globalThis.Window_MenuActor;
  export type Window_ItemCategory<T> = globalThis.Window_ItemCategory<T>;
  export type Window_ItemList = globalThis.Window_ItemList;
  export type Window_SkillType = globalThis.Window_SkillType;
  export type Window_SkillStatus = globalThis.Window_SkillStatus;
  export type Window_SkillList = globalThis.Window_SkillList;
  export type Window_EquipStatus = globalThis.Window_EquipStatus;
  export type Window_EquipCommand<T> = globalThis.Window_EquipCommand<T>;
  export type Window_EquipSlot = globalThis.Window_EquipSlot;
  export type Window_EquipItem = globalThis.Window_EquipItem;
  export type Window_Status = globalThis.Window_Status;
  export type Window_StatusParams = globalThis.Window_StatusParams;
  export type Window_StatusEquip = globalThis.Window_StatusEquip;
  export type Window_Options<T> = globalThis.Window_Options<T>;
  export type Window_SavefileList = globalThis.Window_SavefileList;
  export type Window_ShopCommand<T> = globalThis.Window_ShopCommand<T>;
  export type Window_ShopBuy = globalThis.Window_ShopBuy;
  export type Window_ShopSell = globalThis.Window_ShopSell;
  export type Window_ShopNumber = globalThis.Window_ShopNumber;
  export type Window_ShopStatus = globalThis.Window_ShopStatus;
  export type Window_NameEdit = globalThis.Window_NameEdit;
  export type Window_NameInput = globalThis.Window_NameInput;
  export type Window_ChoiceList<T> = globalThis.Window_ChoiceList<T>;
  export type Window_NumberInput = globalThis.Window_NumberInput;
  export type Window_EventItem = globalThis.Window_EventItem;
  export type Window_Message = globalThis.Window_Message;
  export type Window_ScrollText = globalThis.Window_ScrollText;
  export type Window_MapName = globalThis.Window_MapName;
  export type Window_BattleLog = globalThis.Window_BattleLog;
  export type Window_PartyCommand<T> = globalThis.Window_PartyCommand<T>;
  export type Window_ActorCommand = globalThis.Window_ActorCommand;
  export type Window_BattleStatus = globalThis.Window_BattleStatus;
  export type Window_BattleActor = globalThis.Window_BattleActor;
  export type Window_BattleEnemy = globalThis.Window_BattleEnemy;
  export type Window_BattleSkill = globalThis.Window_BattleSkill;
  export type Window_BattleItem = globalThis.Window_BattleItem;
  export type Window_TitleCommand<T> = globalThis.Window_TitleCommand<T>;
  export type Window_GameEnd<T> = globalThis.Window_GameEnd<T>;
  export type Window_DebugRange = globalThis.Window_DebugRange;
  export type Window_DebugEdit = globalThis.Window_DebugEdit;
}

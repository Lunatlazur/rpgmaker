/**
 * RPG Maker MZ - Module Types Entry Point
 * 全てのモジュール型をRPGMakerMZ名前空間で提供します
 */

// 各モジュールから型を個別にimport
import { RPGMakerMZ as WindowTypesImport } from './windows';
import { RPGMakerMZ as ObjectTypesImport } from './objects';
import { RPGMakerMZ as ManagerTypesImport } from './managers';
import { RPGMakerMZ as SceneTypesImport } from './scenes';
import { RPGMakerMZ as SpriteTypesImport } from './sprites';
import { RPGMakerMZ as DataTypesImport } from './data';

// 統合RPGMakerMZ名前空間として全ての型をエクスポート
export namespace RPGMakerMZ {
  // Windows
  export import Window_Base = WindowTypesImport.Window_Base;
  export import Window_Scrollable = WindowTypesImport.Window_Scrollable;
  export import Window_Selectable = WindowTypesImport.Window_Selectable;
  export import Window_Command = WindowTypesImport.Window_Command;
  export import Window_HorzCommand = WindowTypesImport.Window_HorzCommand;
  export import Window_Help = WindowTypesImport.Window_Help;
  export import Window_Gold = WindowTypesImport.Window_Gold;
  export import Window_StatusBase = WindowTypesImport.Window_StatusBase;
  export import Window_MenuCommand = WindowTypesImport.Window_MenuCommand;
  export import Window_MenuStatus = WindowTypesImport.Window_MenuStatus;
  export import Window_MenuActor = WindowTypesImport.Window_MenuActor;
  export import Window_ItemCategory = WindowTypesImport.Window_ItemCategory;
  export import Window_ItemList = WindowTypesImport.Window_ItemList;
  export import Window_SkillType = WindowTypesImport.Window_SkillType;
  export import Window_SkillStatus = WindowTypesImport.Window_SkillStatus;
  export import Window_SkillList = WindowTypesImport.Window_SkillList;
  export import Window_EquipStatus = WindowTypesImport.Window_EquipStatus;
  export import Window_EquipCommand = WindowTypesImport.Window_EquipCommand;
  export import Window_EquipSlot = WindowTypesImport.Window_EquipSlot;
  export import Window_EquipItem = WindowTypesImport.Window_EquipItem;
  export import Window_Status = WindowTypesImport.Window_Status;
  export import Window_StatusParams = WindowTypesImport.Window_StatusParams;
  export import Window_StatusEquip = WindowTypesImport.Window_StatusEquip;
  export import Window_Options = WindowTypesImport.Window_Options;
  export import Window_SavefileList = WindowTypesImport.Window_SavefileList;
  export import Window_ShopCommand = WindowTypesImport.Window_ShopCommand;
  export import Window_ShopBuy = WindowTypesImport.Window_ShopBuy;
  export import Window_ShopSell = WindowTypesImport.Window_ShopSell;
  export import Window_ShopNumber = WindowTypesImport.Window_ShopNumber;
  export import Window_ShopStatus = WindowTypesImport.Window_ShopStatus;
  export import Window_NameEdit = WindowTypesImport.Window_NameEdit;
  export import Window_NameInput = WindowTypesImport.Window_NameInput;
  export import Window_ChoiceList = WindowTypesImport.Window_ChoiceList;
  export import Window_NumberInput = WindowTypesImport.Window_NumberInput;
  export import Window_EventItem = WindowTypesImport.Window_EventItem;
  export import Window_Message = WindowTypesImport.Window_Message;
  export import Window_ScrollText = WindowTypesImport.Window_ScrollText;
  export import Window_MapName = WindowTypesImport.Window_MapName;
  export import Window_BattleLog = WindowTypesImport.Window_BattleLog;
  export import Window_PartyCommand = WindowTypesImport.Window_PartyCommand;
  export import Window_ActorCommand = WindowTypesImport.Window_ActorCommand;
  export import Window_BattleStatus = WindowTypesImport.Window_BattleStatus;
  export import Window_BattleActor = WindowTypesImport.Window_BattleActor;
  export import Window_BattleEnemy = WindowTypesImport.Window_BattleEnemy;
  export import Window_BattleSkill = WindowTypesImport.Window_BattleSkill;
  export import Window_BattleItem = WindowTypesImport.Window_BattleItem;
  export import Window_TitleCommand = WindowTypesImport.Window_TitleCommand;
  export import Window_GameEnd = WindowTypesImport.Window_GameEnd;
  export import Window_DebugRange = WindowTypesImport.Window_DebugRange;
  export import Window_DebugEdit = WindowTypesImport.Window_DebugEdit;

  // Objects
  export import Game_Temp = ObjectTypesImport.Game_Temp;
  export import Game_System = ObjectTypesImport.Game_System;
  export import Game_Timer = ObjectTypesImport.Game_Timer;
  export import Game_Message = ObjectTypesImport.Game_Message;
  export import Game_Switches = ObjectTypesImport.Game_Switches;
  export import Game_Variables = ObjectTypesImport.Game_Variables;
  export import Game_SelfSwitches = ObjectTypesImport.Game_SelfSwitches;
  export import Game_Screen = ObjectTypesImport.Game_Screen;
  export import Game_Picture = ObjectTypesImport.Game_Picture;
  export import Game_Item = ObjectTypesImport.Game_Item;
  export import Game_Action = ObjectTypesImport.Game_Action;
  export import Game_ActionResult = ObjectTypesImport.Game_ActionResult;
  export import Game_BattlerBase = ObjectTypesImport.Game_BattlerBase;
  export import Game_Battler = ObjectTypesImport.Game_Battler;
  export import Game_Actor = ObjectTypesImport.Game_Actor;
  export import Game_Enemy = ObjectTypesImport.Game_Enemy;
  export import Game_Actors = ObjectTypesImport.Game_Actors;
  export import Game_Unit = ObjectTypesImport.Game_Unit;
  export import Game_Party = ObjectTypesImport.Game_Party;
  export import Game_Troop = ObjectTypesImport.Game_Troop;
  export import Game_Map = ObjectTypesImport.Game_Map;
  export import Game_CommonEvent = ObjectTypesImport.Game_CommonEvent;
  export import Game_CharacterBase = ObjectTypesImport.Game_CharacterBase;
  export import Game_Character = ObjectTypesImport.Game_Character;
  export import Game_Player = ObjectTypesImport.Game_Player;
  export import Game_Follower = ObjectTypesImport.Game_Follower;
  export import Game_Followers = ObjectTypesImport.Game_Followers;
  export import Game_Vehicle = ObjectTypesImport.Game_Vehicle;
  export import Game_Event = ObjectTypesImport.Game_Event;
  export import Game_Interpreter = ObjectTypesImport.Game_Interpreter;

  // Managers
  export import DataManager = ManagerTypesImport.DataManager;
  export import ConfigManager = ManagerTypesImport.ConfigManager;
  export import StorageManager = ManagerTypesImport.StorageManager;
  export import FontManager = ManagerTypesImport.FontManager;
  export import ImageManager = ManagerTypesImport.ImageManager;
  export import EffectManager = ManagerTypesImport.EffectManager;
  export import AudioManager = ManagerTypesImport.AudioManager;
  export import SoundManager = ManagerTypesImport.SoundManager;
  export import TextManager = ManagerTypesImport.TextManager;
  export import ColorManager = ManagerTypesImport.ColorManager;
  export import SceneManager = ManagerTypesImport.SceneManager;
  export import BattleManager = ManagerTypesImport.BattleManager;
  export import PluginManager = ManagerTypesImport.PluginManager;
  export import SceneConstructor = ManagerTypesImport.SceneConstructor;

  // Scenes
  export import Scene_Base = SceneTypesImport.Scene_Base;
  export import Scene_Battle = SceneTypesImport.Scene_Battle;
  export import Scene_Boot = SceneTypesImport.Scene_Boot;
  export import Scene_Equip = SceneTypesImport.Scene_Equip;
  export import Scene_File = SceneTypesImport.Scene_File;
  export import Scene_GameEnd = SceneTypesImport.Scene_GameEnd;
  export import Scene_Gameover = SceneTypesImport.Scene_Gameover;
  export import Scene_Item = SceneTypesImport.Scene_Item;
  export import Scene_ItemBase = SceneTypesImport.Scene_ItemBase;
  export import Scene_Load = SceneTypesImport.Scene_Load;
  export import Scene_Map = SceneTypesImport.Scene_Map;
  export import Scene_Menu = SceneTypesImport.Scene_Menu;
  export import Scene_MenuBase = SceneTypesImport.Scene_MenuBase;
  export import Scene_Message = SceneTypesImport.Scene_Message;
  export import Scene_Options = SceneTypesImport.Scene_Options;
  export import Scene_Save = SceneTypesImport.Scene_Save;
  export import Scene_Skill = SceneTypesImport.Scene_Skill;
  export import Scene_Status = SceneTypesImport.Scene_Status;
  export import Scene_Title = SceneTypesImport.Scene_Title;
  export import Scene_Shop = SceneTypesImport.Scene_Shop;
  export import Scene_Name = SceneTypesImport.Scene_Name;
  export import Scene_Debug = SceneTypesImport.Scene_Debug;

  // Sprites
  export import Sprite_Animation = SpriteTypesImport.Sprite_Animation;
  export import Sprite_AnimationMV = SpriteTypesImport.Sprite_AnimationMV;
  export import Sprite_Balloon = SpriteTypesImport.Sprite_Balloon;
  export import Sprite_Battler = SpriteTypesImport.Sprite_Battler;
  export import Sprite_Button = SpriteTypesImport.Sprite_Button;
  export import Sprite_Character = SpriteTypesImport.Sprite_Character;
  export import Sprite_Damage = SpriteTypesImport.Sprite_Damage;
  export import Sprite_Destination = SpriteTypesImport.Sprite_Destination;
  export import Sprite_Timer = SpriteTypesImport.Sprite_Timer;
  export import Spriteset_Base = SpriteTypesImport.Spriteset_Base;
  export import Spriteset_Battle = SpriteTypesImport.Spriteset_Battle;
  export import Spriteset_Map = SpriteTypesImport.Spriteset_Map;
  export import Sprite_Actor = SpriteTypesImport.Sprite_Actor;
  export import Sprite_Enemy = SpriteTypesImport.Sprite_Enemy;
  export import Sprite_Battleback = SpriteTypesImport.Sprite_Battleback;
  export import Sprite_Gauge = SpriteTypesImport.Sprite_Gauge;
  export import Sprite_Name = SpriteTypesImport.Sprite_Name;
  export import Sprite_StateIcon = SpriteTypesImport.Sprite_StateIcon;
  export import Sprite_StateOverlay = SpriteTypesImport.Sprite_StateOverlay;
  export import Sprite_Weapon = SpriteTypesImport.Sprite_Weapon;
  export import Sprite_Picture = SpriteTypesImport.Sprite_Picture;

  // Data
  export import Identifiable = DataTypesImport.Identifiable;
  export import HasMetadata = DataTypesImport.HasMetadata;
  export import HasTraits = DataTypesImport.HasTraits;
  export import DataObject = DataTypesImport.DataObject;
  export import HasEffects = DataTypesImport.HasEffects;
  export import HasIcon = DataTypesImport.HasIcon;
  export import HasAnimation = DataTypesImport.HasAnimation;
  export import HasParams = DataTypesImport.HasParams;
  export import Invokable = DataTypesImport.Invokable;
  export import DataSystem = DataTypesImport.DataSystem;
  export import DataActor = DataTypesImport.DataActor;
  export import DataClass = DataTypesImport.DataClass;
  export import DataSkill = DataTypesImport.DataSkill;
  export import DataItem = DataTypesImport.DataItem;
  export import DataWeapon = DataTypesImport.DataWeapon;
  export import DataArmor = DataTypesImport.DataArmor;
  export import DataEnemy = DataTypesImport.DataEnemy;
  export import DataTroop = DataTypesImport.DataTroop;
  export import DataState = DataTypesImport.DataState;
  export import DataAnimation = DataTypesImport.DataAnimation;
  export import DataTileset = DataTypesImport.DataTileset;
  export import DataCommonEvent = DataTypesImport.DataCommonEvent;
  export import DataMapInfo = DataTypesImport.DataMapInfo;
  export import DataMap = DataTypesImport.DataMap;
}

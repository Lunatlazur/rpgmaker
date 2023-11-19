declare namespace Game_Temp {
  type LastActionData = [
    skill: number,
    item: number,
    subjectActor: number,
    subjectEnemy: number,
    targetActor: number,
    targetEnemy: number,
  ]

  type AnimationRequest = {
    targets: Game_Character[],
    animationId: number,
    mirror: boolean
  }

  type BalloonRequest = {
    target: Game_Character
    balloonId: number
  }
}

declare class Game_Temp {
  _isPlaytest: boolean
  _destinationX: number
  _destinationY: number
  _touchTarget: Game_Battler
  _touchState: string
  _needBattleRefresh: boolean
  _commonEventQueue: unknown[]
  _animationQueue: unknown[]
  _balloonQueue: unknown[]
  _lastActionData: Game_Temp.LastActionData
  constructor()
  initialize(): void
  isPlayTest(): boolean
  setDestination(x: number, y: number): void
  clearDestination(): void
  isDestinationValid(): boolean
  destinationX(): number
  destinationY(): number
  setTouchState(target: Game_Battler, state: string): void
  clearTouchState(): void
  touchTarget(): Game_Battler
  touchState(): string
  requestBattleRefresh(): void
  clearBattleRefreshRequest(): void
  isBattleRefreshRequested(): boolean
  reserveCommonEvent(commonEventId: number): void
  retrieveCommonEvent(): RPGMakerMZ.DataCommonEvent
  isCommonEventReserved(): boolean
  requestAnimation(targets: Game_Character[], animationId: number, mirror?: boolean): void
  retrieveAnimation(): Game_Temp.AnimationRequest
  requestBalloon(target: Game_Character, balloonId: number): void
  retrieveBalloon(): Game_Temp.BalloonRequest
  lastActionData(type: number): number
  setLastActionData(type: number, value: number): void
  setLastUsedSkillId(skillID: number): void
  setLastUsedItemId(itemID: number): void
  setLastSubjectActorId(actorID: number): void
  setLastSubjectEnemyIndex(enemyIndex: number): void
  setLastTargetActorId(actorID: number): void
  setLastTargetEnemyIndex(enemyIndex: number): void
}

declare class Game_System {
  _saveEnabled: boolean
  _menuEnabled: boolean
  _encounterEnabled: boolean
  _formationEnabled: boolean
  _battleCount: number
  _winCount: number
  _escapeCount: number
  _saveCount: number
  _versionId: number
  _savefileId: number
  _framesOnSave: number
  _bgmOnSave: RPGMakerMZ.Audio.Resumable
  _bgsOnSave: RPGMakerMZ.Audio.Resumable
  _windowTone: RPGMakerMZ.Color.Tone
  _battleBgm: RPGMakerMZ.Audio.Resumable
  _victoryMe: RPGMakerMZ.Audio.Resumable
  _defeatMe: RPGMakerMZ.Audio.Resumable
  _savedBgm: RPGMakerMZ.Audio.Resumable
  _walkingBgm: RPGMakerMZ.Audio.Resumable
  constructor()
  initialize(): void
  isJapanese(): boolean
  isChinese(): boolean
  isKorean(): boolean
  isCJK(): boolean
  isRussian(): boolean
  isSideView(): boolean
  isAutosaveEnabled(): boolean
  isSaveEnabled(): boolean
  disableSave(): void
  enableSave(): void
  isMenuEnabled(): boolean
  disableMenu(): void
  enableMenu(): void
  isEncounterEnabled(): boolean
  disableEncounter(): void
  enableEncounter(): void
  isFormationEnabled(): boolean
  disableFormation(): void
  enableFormation(): void
  battleCount(): number
  winCount(): number
  escapeCount(): number
  saveCount(): number
  versionId(): number
  savefileId(): number
  setSavefileId(savefileId: number): void
  windowTone(): RPGMakerMZ.Color.Tone
  setWindowTone(value: RPGMakerMZ.Color.Tone): void
  battleBgm(): RPGMakerMZ.Audio.Resumable
  setBattleBgm(value: RPGMakerMZ.Audio.Resumable): void
  victoryMe(): RPGMakerMZ.Audio.Resumable
  setVictoryMe(value: RPGMakerMZ.Audio.Resumable): void
  defeatMe(): RPGMakerMZ.Audio.Resumable
  setDefeatMe(value: RPGMakerMZ.Audio.Resumable): void
  onBattleStart(): void
  onBattleWin(): void
  onBattleEscape(): void
  onBeforeSave(): void
  onAfterLoad(): void
  playTime(): number
  playTimeText(): string
  saveBgm(): void
  replayBgm(): void
  saveWalkingBgm(): void
  replayWalkingBgm(): void
  saveWalkingBgm2(): void
  mainFontFace(): string
  numberFontFace(): string
  mainFontSize(): number
  windowPadding(): number
}

declare class Game_Timer {
  _frames: number
  _working: boolean
  constructor()
  initialize(): void
  update(sceneActive: boolean): void
  start(count: number): void
  stop(): void
  isWorking(): boolean
  seconds(): number
  onExpire(): void
}

declare namespace Game_Message {
  type ChoiceCallback = (index: number) => void
}

declare class Game_Message {
  _texts: string[]
  _choices: string[]
  _speakerName: string
  _faceName: string
  _faceIndex: number
  _background: number
  _positionType: number
  _choiceDefaultType: number
  _choiceCancelType: number
  _choiceBackground: number
  _choicePositionType: number
  _numInputVariableId: number
  _numInputMaxDigits: number
  _itemChoiceVariableId: number
  _itemChoiceItypeId: number
  _scrollMode: boolean
  _scrollSpeed: number
  _scrollNoFast: boolean
  _choiceCallback: Game_Message.ChoiceCallback | null
  constructor()
  initialize(): void
  clear(): void
  choices(): string[]
  speakerName(): string
  faceName(): string
  faceIndex(): number
  background(): number
  positionType(): number
  choiceDefaultType(): number
  choiceCancelType(): number
  choiceBackground(): number
  choicePositionType(): number
  numInputVariableId(): number
  numInputMaxDigits(): number
  itemChoiceVariableId(): number
  itemChoiceItypeId(): number
  scrollMode(): boolean
  scrollSpeed(): number
  scrollNoFast(): boolean
  add(text: string): void
  setSpeakerName(speakerName: string): void
  setFaceImage(faceName: string, faceIndex: number): void
  setBackground(background: number): number
  setPositionType(positionType: number): number
  setChoices(choices: string[], defaultType: number, cancelType: number): void
  setChoiceBackground(background: number): void
  setChoicePositionType(positionType: number): void
  setNumberInput(variableId: number, maxDigits: number): void
  setItemChoice(variableId: number, itemType: number): void
  setScroll(speed: number, noFast: boolean): void
  setChoiceCallback(callback: Game_Message.ChoiceCallback | null): void
  onChoice(n: number): void
  hasText(): boolean
  isChoice(): boolean
  isNumberInput(): boolean
  isItemChoice(): boolean
  isBusy(): boolean
  newPage(): void
  allText(): string
  isRTL(): boolean
}

declare class Game_Switches {
  _data: boolean[]
  constructor()
  initialize(): void
  clear(): void
  value(switchId: number): boolean
  setValue(switchId: number, value: boolean): void
  onChange(): void
}

declare class Game_Variables {
  _data: number[]
  constructor()
  initialize(): void
  clear(): void
  value(variableId: number): number
  setValue(variableId: number, value: number | string): void
  onChange(): void
}

declare namespace Game_SelfSwitches {
  type Data = {
    [key: string]: boolean
  }
}
declare class Game_SelfSwitches {
  _data: Game_SelfSwitches.Data
  constructor()
  initialize(): void
  clear(): void
  value(key: Stringifiable): boolean
  setValue(key: Stringifiable, value: boolean): void
  onChange(): void
}

declare namespace Game_Screen {
  type WeatherType = 'none' | 'rain' | 'snow' | 'storm'
}

declare class Game_Screen {
  _brightness: number
  _fadeOutDuration: number
  _fadeInDuration: number
  _tone: RPGMakerMZ.Color.Tone
  _toneTarget: RPGMakerMZ.Color.Tone
  _toneDuration: number
  _flashColor: RPGMakerMZ.Color.Rgba
  _flashDuration: number
  _shake: number
  _shakePower: number
  _shakeSpeed: number
  _shakeDuration: number
  _shakeDirection: number
  _zoomX: number
  _zoomY: number
  _zoomScale: number
  _zoomScaleTarget: number
  _zoomDuration: number
  _weatherType: Game_Screen.WeatherType
  _weatherPower: number
  _weatherPowerTarget: number
  _weatherDuration: number
  _pictures: Game_Picture[]
  constructor()
  initialize(): void
  clear(): void
  onBattleStart(): void
  brightness(): number
  tone(): RPGMakerMZ.Color.Tone
  flashColor(): RPGMakerMZ.Color.Rgba
  shake(): number
  zoomX(): number
  zoomY(): number
  zoomScale(): number
  weatherType(): string
  weatherPower(): number
  picture(pictureId: number): Game_Picture
  realPictureId(pictureId: number): Game_Picture
  clearFade(): void
  clearTone(): void
  clearFlash(): void
  clearShake(): void
  clearZoom(): void
  clearWeather(): void
  clearPictures(): void
  eraseBattlePictures(): void
  maxPictures(): number
  startFadeOut(duration: number): void
  startFadeIn(duration: number): void
  startTint(tone: RPGMakerMZ.Color.Tone, duration: number): void
  startFlash(color: RPGMakerMZ.Color.Rgba, duration: number): void
  startShake(power: number, speed: number, duration: number): void
  startZoom(x: number, y: number, scale: number, duration: number): void
  setZoom(x: number, y: number, scale: number): void
  changeWeather(type: Game_Screen.WeatherType, power: number, duration: number): void
  update(): void
  updateFadeOut(): void
  updateFadeIn(): void
  updateTone(): void
  updateFlash(): void
  updateShake(): void
  updateZoom(): void
  updateWeather(): void
  updatePictures(): void
  startFlashForDamage(): void
  showPicture(pictureId: number, name: string, origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number): void
  movePicture(pictureId: number, origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number, duration: number, easingType: number): void
  rotatePicture(pictureId: number, speed: number): void
  tintPicture(pictureId: number, tone: RPGMakerMZ.Color.Tone, duration: number): void
  erasePicture(pictureId: number): void
}


declare class Game_Picture {
  _name: string
  _origin: number
  _x: number
  _y: number
  _scaleX: number
  _scaleY: number
  _opacity: number
  _blendMode: number
  _tone: number[]
  _angle: number
  _targetScaleX: number
  _targetScaleY: number
  _targetOpacity: number
  _wholeDuration: number
  _easingType: number
  _easingExponent: number
  _toneTarget: number[]
  _toneDuration: number
  _rotationSpeed: number
  constructor()
  initialize(): void
  name(): string
  origin(): number
  x(): number
  y(): number
  scaleX(): number
  scaleY(): number
  opacity(): number
  blendMode(): number
  tone(): number
  angle(): number
  initBasic(): void
  initTarget(): void
  initTone(): void
  initRotation(): void
  show(name: string, origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number): void
  move(origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number, duration: number, easingType: number): void
  rotate(speed: number): void
  tint(tone: RPGMakerMZ.Color.Tone, duration: number): void
  update(): void
  updateMove(): void
  updateTone(): void
  updateRotation(): void
  applyEasing(current: number, target: number): void
  calcEasing(t: number): number
  easeIn(t: number, exponent: number): number
  easeOut(t: number, exponent: number): number
  easeOut(t: number, exponent: number): number
  easeInOut(t: number, exponent: number): number
}

declare class Game_Item {
  _dataClass: string
  _itemId: number
  constructor(item?: RPGMakerMZ.DataItemlike)
  initialize(item?: RPGMakerMZ.DataItemlike): void
  isSkill(): string
  isItem(): string
  isUsableItem(): boolean
  isWeapon(): string
  isArmor(): string
  isEquipItem(): boolean
  isNull(): string
  itemId(): number
  object(): RPGMakerMZ.DataItemlike
  setObject(item: RPGMakerMZ.DataItemlike): void
  setEquip(isWeapon: boolean, itemId: number): void
}

declare class Game_Action {
  static EFFECT_RECOVER_HP: number
  static EFFECT_RECOVER_MP: number
  static EFFECT_GAIN_TP: number
  static EFFECT_ADD_STATE: number
  static EFFECT_REMOVE_STATE: number
  static EFFECT_ADD_BUFF: number
  static EFFECT_ADD_DEBUFF: number
  static EFFECT_REMOVE_BUFF: number
  static EFFECT_REMOVE_DEBUFF: number
  static EFFECT_SPECIAL: number
  static EFFECT_GROW: number
  static EFFECT_LEARN_SKILL: number
  static EFFECT_COMMON_EVENT: number
  static SPECIAL_EFFECT_ESCAPE: number
  static HITTYPE_CERTAIN: number
  static HITTYPE_PHYSICAL: number
  static HITTYPE_MAGICAL: number
  _subjectActorId: number
  _subjectEnemyIndex: number
  _forcing: boolean
  _item: Game_Item
  _targetIndex: number
  _reflectionTarget: Game_Battler | undefined
  constructor(subject: Game_Battler, forcing?: boolean)
  initialize(subject: Game_Battler, forcing: boolean): void
  clear(): void
  setSubject(subject: Game_Battler): void
  subject(): Game_Battler
  friendsUnit(): Game_Unit<Game_Battler>
  opponentsUnit(): Game_Unit<Game_Battler>
  setEnemyAction(action: unknown): void
  setAttack(): void
  setGuard(): void
  setSkill(skillId: number): void
  setItem(itemId: number): void
  setItemObject(object: RPGMakerMZ.DataItemlike): void
  setTarget(targetIndex: number): void
  item(): RPGMakerMZ.DataItemlike
  isSkill(): boolean
  isItem(): boolean
  numRepeats(): number
  checkItemScope(list: number[]): boolean
  isForOpponent(): boolean
  isForFriend(): boolean
  isForEveryone(): boolean
  isForAliveFriend(): boolean
  isForDeadFriend(): boolean
  isForUser(): boolean
  isForOne(): boolean
  isForRandom(): boolean
  isForAll(): boolean
  needsSelection(): boolean
  numTargets(): boolean
  checkDamageType(list: number[]): boolean
  isHpEffect(): boolean
  isMpEffect(): boolean
  isDamage(): boolean
  isRecover(): boolean
  isDrain(): boolean
  isHpRecover(): boolean
  isMpRecover(): boolean
  isCertainHit(): boolean
  isPhysical(): boolean
  isMagical(): boolean
  isAttack(): boolean
  isGuard(): boolean
  isMagicSkill(): boolean
  decideRandomTarget(): void
  setConfusion(): void
  prepare(): void
  isValid(): boolean
  speed(): number
  makeTargets(): Game_Battler[]
  repeatTargets(targets: number[]): Game_Battler[]
  confusionTarget(): boolean
  targetsForEveryone(): Game_Battler[]
  targetsForOpponents(): unknown
  targetsForFriends(): unknown
  randomTargets(unit: Game_Unit<Game_Battler>): Game_Battler[]
  apply(target: Game_Battler): void
  testApply(target: Game_Battler): boolean
  itemHit(target: Game_Battler): number
  itemEva(target: Game_Battler): number
  itemCri(target: Game_Battler): number
  makeDamageValue(target: Game_Battler, critical: boolean): number
  executeHpDamage(target: Game_Battler, value: number): void
  executeMpDamage(target: Game_Battler, value: number): void
  gainDrainedHp(value: number): void
  gainDrainedMp(value: number): void
  applyItemEffect(target: Game_Battler, effect: RPGMakerMZ.Data.Effect): void
  applyItemUserEffect(target?: Game_Battler): void
  updateLastTarget(target?: Game_Battler): void
  applyGlobal(): void
  makeSuccess(target: Game_Battler): void
  lukEffectRate(target: Game_Battler): number
  itemEffectRecoverHp(target: Game_Battler, effect: RPGMakerMZ.Data.Effect): void
  itemEffectRecoverMp(target: Game_Battler, effect: RPGMakerMZ.Data.Effect): void
  itemEffectGainTp(target: Game_Battler, effect: RPGMakerMZ.Data.Effect): void
  itemEffectAddState(target: Game_Battler, effect: RPGMakerMZ.Data.Effect): void
  itemEffectAddAttackState(target: Game_Battler, effect: RPGMakerMZ.Data.Effect): void
  itemEffectAddNormalState(target: Game_Battler, effect: RPGMakerMZ.Data.Effect): void
  itemEffectRemoveState(target: Game_Battler, effect: RPGMakerMZ.Data.Effect): void
  itemEffectAddBuff(target: Game_Battler, effect: RPGMakerMZ.Data.Effect): void
  itemEffectAddDebuff(target: Game_Battler, effect: RPGMakerMZ.Data.Effect): void
  itemEffectRemoveBuff(target: Game_Battler, effect: RPGMakerMZ.Data.Effect): void
  itemEffectRemoveDebuff(target: Game_Battler, effect: RPGMakerMZ.Data.Effect): void
  itemEffectSpecial(target: Game_Battler, effect: RPGMakerMZ.Data.Effect): void
  itemEffectGrow(target: Game_Battler, effect: RPGMakerMZ.Data.Effect): void
  itemEffectLearnSkill(target: Game_Battler, effect: RPGMakerMZ.Data.Effect): void
  itemEffectCommonEvent(target: Game_Battler, effect: RPGMakerMZ.Data.Effect): void
  itemCnt(target: Game_Battler): number
  itemMrf(target: Game_Battler): number
  itemHit(target?: Game_Battler): number
  itemEva(target: Game_Battler): number
  itemCri(target: Game_Battler): number
}

declare class Game_ActionResult {
  used: boolean
  missed: boolean
  evaded: boolean
  physical: boolean
  drain: boolean
  critical: boolean
  success: boolean
  hpAffected: boolean
  hpDamage: number
  mpDamage: number
  tpDamage: number
  addedStates: number[]
  removedStates: number[]
  addedBuffs: number[]
  addedDebuffs: number[]
  removedBuffs: number[]
  constructor()
  initialize(): void
  clear(): void
  addedStateObjects(): RPGMakerMZ.DataState[]
  removedStateObjects(): RPGMakerMZ.DataState[]
  isStatusAffected(): boolean
  isHit(): boolean
  isStateAdded(stateId: number): boolean
  pushAddedState(stateId: number): void
  isStateRemoved(stateId: number): boolean
  pushRemovedState(stateId: number): void
  isBuffAdded(paramId: number): boolean
  pushAddedBuff(paramId: number): void
  isDebuffAdded(paramId: number): boolean
  pushAddedDebuff(paramId: number): void
  isBuffRemoved(paramId: number): boolean
  pushRemovedBuff(paramId: number): void
}

declare namespace Game_BattlerBase {
  namespace Traits {
    type ELEMENT_RATE = 11
    type DEBUFF_RATE = 12
    type STATE_RATE = 13
    type STATE_RESIST = 14
    type PARAM = 21
    type XPARAM = 22
    type SPARAM = 23
    type ATTACK_ELEMENT = 31
    type ATTACK_STATE = 32
    type ATTACK_SPEED = 33
    type ATTACK_TIMES = 34
    type ATTACK_SKILL = 35
    type STYPE_ADD = 41
    type STYPE_SEAL = 42
    type SKILL_ADD = 43
    type SKILL_SEAL = 44
    type EQUIP_WTYPE = 51
    type EQUIP_ATYPE = 52
    type EQUIP_LOCK = 53
    type EQUIP_SEAL = 54
    type SLOT_TYPE = 55
    type ACTION_PLUS = 61
    type SPECIAL_FLAG = 62
    type COLLAPSE_TYPE = 63
    type PARTY_ABILITY = 64
  }
  type Traits = Traits.ELEMENT_RATE
    | Traits.DEBUFF_RATE
    | Traits.STATE_RATE
    | Traits.STATE_RESIST
    | Traits.PARAM
    | Traits.XPARAM
    | Traits.SPARAM
    | Traits.ATTACK_ELEMENT
    | Traits.ATTACK_STATE
    | Traits.ATTACK_SPEED
    | Traits.ATTACK_TIMES
    | Traits.ATTACK_SKILL
    | Traits.STYPE_ADD
    | Traits.STYPE_SEAL
    | Traits.SKILL_ADD
    | Traits.SKILL_SEAL
    | Traits.EQUIP_WTYPE
    | Traits.EQUIP_ATYPE
    | Traits.EQUIP_LOCK
    | Traits.EQUIP_SEAL
    | Traits.SLOT_TYPE
    | Traits.ACTION_PLUS
    | Traits.SPECIAL_FLAG
    | Traits.COLLAPSE_TYPE
    | Traits.PARTY_ABILITY
  namespace FlagIds {
    type AUTO_BATTLE = 0
    type GUARD = 1
    type SUBSTITUTE = 2
    type PRESERVE_TP = 3
  }
  type FlagIds = FlagIds.AUTO_BATTLE
    | FlagIds.GUARD
    | FlagIds.PRESERVE_TP
    | FlagIds.SUBSTITUTE
  namespace Params {
    /** Maximum Hit Points */
    type MHP = 0
    /** Maximum Magic Points */
    type MMP = 1
    /** ATtacK power */
    type ATK = 2
    /** DEFense power */
    type DEF = 3
    /** Magic ATtack power */
    type MAT = 4
    /** Magic DeFense power */
    type MDF = 5
    /** AGIlity */
    type AGI = 6
    /** LUcK */
    type LUK = 7
  }
  type Params = Params.MHP
    | Params.MMP
    | Params.ATK
    | Params.DEF
    | Params.MDF
    | Params.AGI
    | Params.LUK
  namespace ExtraParams {
    /** HIT rate */
    type HIT = 0
    /** EVAsion rate */
    type EVA = 1
    /** CRItical rate */
    type CRI = 2
    /** Critical EVasion rate */
    type CEV = 3
    /** Magic EVasion rate */
    type MEV = 4
    /** Magic ReFlection rate */
    type MRF = 5
    /** CouNTer attack rate */
    type CNT = 6
    /** Hp ReGeneration rate */
    type HRG = 7
    /** Mp ReGeneration rate */
    type MRG = 8
    /** Tp ReGeneration rate */
    type TRG = 9
  }
  type ExtraParams = ExtraParams.HIT
    | ExtraParams.EVA
    | ExtraParams.CRI
    | ExtraParams.CEV
    | ExtraParams.MEV
    | ExtraParams.MRF
    | ExtraParams.CNT
    | ExtraParams.HRG
    | ExtraParams.MRG
    | ExtraParams.TRG
  namespace SpecialParams {
    /** TarGet Rate */
    type TGR = 0
    /** GuaRD effect rate */
    type GRD = 1
    /** RECovery effect rate */
    type REC = 2
    /** PHArmacology */
    type PHA = 3
    /** Mp Cost Rate */
    type MCR = 4
    /** Tp Charge Rate */
    type TCR = 5
    /** Physical Damage Rate */
    type PDR = 6
    /** Magic Damage Rate */
    type MDR = 7
    /** Floor Damage Rate */
    type FDR = 8
    /** EXperience Rate */
    type EXR = 9
  }
  type SpecialParams = SpecialParams.TGR
    | SpecialParams.GRD
    | SpecialParams.REC
    | SpecialParams.PHA
    | SpecialParams.MCR
    | SpecialParams.TCR
    | SpecialParams.PDR
    | SpecialParams.MDR
    | SpecialParams.FDR
    | SpecialParams.EXR
  namespace CollapseType {
    type DEFAULT = 0
    type BOSS = 1
    type INSTANT = 2
  }
  type CollapseType = CollapseType.DEFAULT
    | CollapseType.BOSS
    | CollapseType.INSTANT
}

declare class Game_BattlerBase {
  static TRAIT_ELEMENT_RATE: Game_BattlerBase.Traits.ELEMENT_RATE
  static TRAIT_DEBUFF_RATE: Game_BattlerBase.Traits.DEBUFF_RATE
  static TRAIT_STATE_RATE: Game_BattlerBase.Traits.STATE_RATE
  static TRAIT_STATE_RESIST: Game_BattlerBase.Traits.STATE_RESIST
  static TRAIT_PARAM: Game_BattlerBase.Traits.PARAM
  static TRAIT_XPARAM: Game_BattlerBase.Traits.XPARAM
  static TRAIT_SPARAM: Game_BattlerBase.Traits.SPARAM
  static TRAIT_ATTACK_ELEMENT: Game_BattlerBase.Traits.ATTACK_ELEMENT
  static TRAIT_ATTACK_STATE: Game_BattlerBase.Traits.ATTACK_STATE
  static TRAIT_ATTACK_SPEED: Game_BattlerBase.Traits.ATTACK_SPEED
  static TRAIT_ATTACK_TIMES: Game_BattlerBase.Traits.ATTACK_TIMES
  static TRAIT_ATTACK_SKILL: Game_BattlerBase.Traits.ATTACK_SKILL
  static TRAIT_STYPE_ADD: Game_BattlerBase.Traits.STYPE_ADD
  static TRAIT_STYPE_SEAL: Game_BattlerBase.Traits.STYPE_SEAL
  static TRAIT_SKILL_ADD: Game_BattlerBase.Traits.SKILL_ADD
  static TRAIT_SKILL_SEAL: Game_BattlerBase.Traits.SKILL_SEAL
  static TRAIT_EQUIP_WTYPE: Game_BattlerBase.Traits.EQUIP_WTYPE
  static TRAIT_EQUIP_ATYPE: Game_BattlerBase.Traits.EQUIP_ATYPE
  static TRAIT_EQUIP_LOCK: Game_BattlerBase.Traits.EQUIP_LOCK
  static TRAIT_EQUIP_SEAL: Game_BattlerBase.Traits.EQUIP_SEAL
  static TRAIT_SLOT_TYPE: Game_BattlerBase.Traits.SLOT_TYPE
  static TRAIT_ACTION_PLUS: Game_BattlerBase.Traits.ACTION_PLUS
  static TRAIT_SPECIAL_FLAG: Game_BattlerBase.Traits.SPECIAL_FLAG
  static TRAIT_COLLAPSE_TYPE: Game_BattlerBase.Traits.COLLAPSE_TYPE
  static TRAIT_PARTY_ABILITY: Game_BattlerBase.Traits.PARTY_ABILITY
  static FLAG_ID_AUTO_BATTLE: Game_BattlerBase.FlagIds.AUTO_BATTLE
  static FLAG_ID_GUARD: Game_BattlerBase.FlagIds.GUARD
  static FLAG_ID_SUBSTITUTE: Game_BattlerBase.FlagIds.SUBSTITUTE
  static FLAG_ID_PRESERVE_TP: Game_BattlerBase.FlagIds.PRESERVE_TP
  static ICON_BUFF_START: 32
  static ICON_DEBUFF_START: 48
  constructor()
  _hp: number
  _mp: number
  _tp: number
  _hidden: boolean
  _paramPlus: number[]
  _states: number[]
  _stateTurns: { [k: number]: number }
  _buffs: number[]
  _buffTurns: number[]
  hp: number
  mp: number
  tp: number
  mhp: number
  mmp: number
  atk: number
  def: number
  mat: number
  mdf: number
  agi: number
  luk: number
  hit: number
  eva: number
  cri: number
  cev: number
  mev: number
  mrf: number
  cnt: number
  hrg: number
  mrg: number
  trg: number
  tgr: number
  grd: number
  rec: number
  pha: number
  mcr: number
  tcr: number
  pdr: number
  mdr: number
  fdr: number
  exr: number
  initMembers(): void
  clearParamPlus(): void
  clearStates(): void
  eraseState(stateId: number): void
  isStateAffected(stateId: number): boolean
  isDeathStateAffected(): boolean
  deathStateId(): number
  resetStateCounts(stateId: number): void
  isStateExpired(stateId: number): boolean
  updateStateTurns(): void
  clearBuffs(): void
  eraseBuff(paramId: Game_BattlerBase.Params): void
  buffLength(): number
  buff(paramId: Game_BattlerBase.Params): number
  isBuffAffected(paramId: Game_BattlerBase.Params): boolean
  isDebuffAffected(paramId: Game_BattlerBase.Params): boolean
  isBuffOrDebuffAffected(paramId: Game_BattlerBase.Params): boolean
  isMaxBuffAffected(paramId: Game_BattlerBase.Params): boolean
  isMaxDebuffAffected(paramId: Game_BattlerBase.Params): boolean
  increaseBuff(paramId: Game_BattlerBase.Params): void
  decreaseBuff(paramId: Game_BattlerBase.Params): void
  overwriteBuffTurns(paramId: Game_BattlerBase.Params, turns: number): void
  isBuffExpired(paramId: Game_BattlerBase.Params): boolean
  updateBuffTurns(): void
  die(): void
  revive(): void
  states(): RPGMakerMZ.DataState[]
  stateIcons(): number[]
  buffIcons(): number[]
  buffIconIndex(buffLevel: number, paramId: Game_BattlerBase.Params): number
  allIcons(): number[]
  traitObjects(): { traits: RPGMakerMZ.Data.Trait[] }[]
  allTraits(): RPGMakerMZ.Data.Trait[]
  traits(code: Game_BattlerBase.Traits): RPGMakerMZ.Data.Trait[]
  traitsWithId(code: Game_BattlerBase.Traits, id: number): RPGMakerMZ.Data.Trait[]
  traitsPi(code: Game_BattlerBase.Traits, id: number): number
  traitsSum(code: Game_BattlerBase.Traits, id: number): number
  traitsSumAll(code: Game_BattlerBase.Traits): number
  traitsSet(code: Game_BattlerBase.Traits): number[]
  paramBase(paramId: Game_BattlerBase.Params): number
  paramPlus(paramId: Game_BattlerBase.Params): number
  paramBasePlus(paramId: Game_BattlerBase.Params): number
  paramMin(paramId: Game_BattlerBase.Params): number
  paramMax(paramId: Game_BattlerBase.Params): number
  paramRate(paramId: Game_BattlerBase.Params): number
  paramBuffRate(paramId: Game_BattlerBase.Params): number
  param(paramId: Game_BattlerBase.Params): number
  xparam(paramId: Game_BattlerBase.ExtraParams): number
  sparam(paramId: Game_BattlerBase.SpecialParams): number
  elementRate(elementId: number): number
  debuffRate(paramId: Game_BattlerBase.Params): number
  stateRate(stateId: number): number
  stateResistSet(): number[]
  isStateResist(stateId: number): boolean
  attackElements(): number[]
  attackStates(): number[]
  attackStatesRate(stateId: number): number
  attackSpeed(): number
  attackTimesAdd(): number
  attackSkillId(): number
  attackSkillTypes(): number[]
  addedSkillTypes(): number[]
  isSkillTypeSealed(stypeId: number): boolean
  addedSkills(): number[]
  isSkillSealed(skillId: number): boolean
  isEquipWtypeOk(wtypeId: number): boolean
  isEquipAtypeOk(atypeId: number): boolean
  isEquipTypeLocked(etypeId: number): boolean
  isEquipTypeSealed(etypeId: number): boolean
  slotType(): number
  isDualWield(): boolean
  actionPlusSet(): number[]
  specialFlag(flagId: Game_BattlerBase.FlagIds): boolean
  collapseType(): Game_BattlerBase.CollapseType
  partyAbility(abilityId: number): boolean
  isAutoBattle(): boolean
  isGuard(): boolean
  isSubstitute(): boolean
  isPreserveTp(): boolean
  addParam(paramId: Game_BattlerBase.Params, value: number): void
  setHp(hp: number): void
  setMp(mp: number): void
  setTp(tp: number): void
  maxTp(): number
  refresh(): void
  recoverAll(): void
  hpRate(): number
  mpRate(): number
  tpRate(): number
  hide(): void
  appear(): void
  isHidden(): boolean
  isAppeared(): boolean
  isDead(): boolean
  isAlive(): boolean
  isDying(): boolean
  isRestricted(): boolean
  canInput(): boolean
  canMove(): boolean
  isConfused(): boolean
  confusionLevel(): number
  isActor(): this is Game_Actor
  isEnemy(): this is Game_Enemy
  sortStates(): void
  restriction(): number
  addNewState(stateId: number): void
  onRestrict(): void
  mostImportantStateText(): string
  stateMotionIndex(): number
  stateOverlayIndex(): number
  isSkillWtypeOk(skill: RPGMakerMZ.DataSkill): boolean
  skillMpCost(skill: RPGMakerMZ.DataSkill): number
  skillTpCost(skill: RPGMakerMZ.DataSkill): number
  canPaySkillCost(skill: RPGMakerMZ.DataSkill): boolean
  paySkillCost(skill: RPGMakerMZ.DataSkill): void
  isOccasionOk(item: RPGMakerMZ.DataUsable): boolean
  meetsUsableItemConditions(item: RPGMakerMZ.DataUsable): boolean
  meetsSkillConditions(skill: RPGMakerMZ.DataSkill): boolean
  meetsItemConditions(item: RPGMakerMZ.DataItem): boolean
  canUse(item?: RPGMakerMZ.DataUsable): boolean
  canEquip(item?: RPGMakerMZ.DataEquipable): boolean
  canEquipWeapon(item: RPGMakerMZ.DataWeapon): boolean
  canEquipArmor(item: RPGMakerMZ.DataArmor): boolean
  guardSkillId(): number
  canAttack(): boolean
  canGuard(): boolean
}

declare namespace Game_Battler {
  type EffectType = 'appear'
    | 'disappear'
    | 'whiten'
    | 'blink'
    | 'collapse'
    | 'bossCollapse'
    | 'instantCollapse'
  type MotionType = 'walk'
    | 'wait'
    | 'chant'
    | 'guard'
    | 'damage'
    | 'evade'
    | 'thrust'
    | 'swing'
    | 'missile'
    | 'skill'
    | 'spell'
    | 'item'
    | 'escape'
    | 'victory'
    | 'dying'
    | 'abnormal'
    | 'sleep'
    | 'dead'
  type ActionState = 'undecided'
    | 'inputting'
    | 'waiting'
    | 'acting'
}

declare class Game_Battler extends Game_BattlerBase {
  _actions: Game_Action[]
  _speed: number
  _result: Game_ActionResult
  _actionState: string
  _lastTargetIndex: number
  _damagePopup: boolean
  _effectType: Game_Battler.EffectType
  _motionType: Game_Battler.MotionType
  _weaponImageId: number
  _motionRefresh: boolean
  _selected: boolean
  _tpbState: string
  _tpbChargeTime: number
  _tpbCastTime: number
  _tpbIdleTime: number
  _tpbTurnCount: number
  _tpbTurnEnd: boolean
  constructor()
  clearDamagePopup(): void
  clearWeaponAnimation(): void
  clearEffect(): void
  clearMotion(): void
  requestEffect(effectType: Game_Battler.EffectType): void
  requestMotion(motionType: Game_Battler.MotionType): void
  requestMotionRefresh(): void
  select(): void
  deselect(): void
  isDamagePopupRequested(): boolean
  isEffectRequested(): boolean
  isMotionRequested(): boolean
  isWeaponAnimationRequested(): boolean
  isMotionRefreshRequested(): boolean
  isSelected(): boolean
  effectType(): Game_Battler.EffectType
  motionType(): Game_Battler.MotionType
  weaponImageId(): number
  startDamagePopup(): void
  shouldPopupDamage(): boolean
  startWeaponAnimation(weaponImageId: number): void
  action(index: number): Game_Action
  setAction(index: number, action: Game_Action): void
  numActions(): number
  clearActions(): void
  result(): Game_ActionResult
  clearResult(): void
  clearResult(): void
  clearTpbChargeTime(): void
  applyTpbPenalty(): void
  initTpbChargeTime(advantageous: boolean): void
  tbpChargeTime(): number
  startTpbCasting(): void
  startTpbAction(): void
  isTpbCharged(): boolean
  isTpbReady(): boolean
  isTpbTimeout(): boolean
  updateTpb(): void
  updateTpbChargeTime(): void
  updateTpbCastTime(): void
  updateTpbAutoBattle(): void
  updateTpbIdleTime(): void
  tpbAcceleration(): number
  tpbRelativeSpeed(): number
  tpbSpeed(): number
  tpbBaseSpeed(): number
  tpbRequiredCastTime(): number
  onTpbCharged(): void
  shouldDelayTpbCharge(): boolean
  finishTpbCharge(): void
  isTpbTurnEnd(): boolean
  initTpbTurn(): void
  startTpbTurn(): void
  makeTpbActions(): void
  onTpbTimeout(): void
  turnCount(): number
  canInput(): boolean
  refresh(): void
  addState(stateId: number): void
  isStateAddable(stateId: number): boolean
  isStateRestrict(stateId: number): boolean
  onRestrict(): void
  removeState(stateId: number): void
  escape(): void
  addBuff(paramId: Game_BattlerBase.Params, turns: number): void
  addDebuff(paramId: Game_BattlerBase.Params, turns: number): void
  removeBuff(paramId: Game_BattlerBase.Params): void
  removeBattleStates(): void
  removeAllBuffs(): void
  removeStatesAuto(timing: number): void
  removeBuffsAuto(): void
  removeStatesByDamage(): void
  makeActionTimes(): number
  makeActions(): void
  speed(): number
  makeSpeed(): void
  currentAction(): Game_Action
  removeCurrentAction(): void
  setLastTarget(target: Game_Battler): void
  forceAction(skillId: number, targetIndex: number): void
  useItem(item: RPGMakerMZ.DataUsable): void
  consumeItem(item: RPGMakerMZ.DataItem): void
  gainHp(value: number): void
  gainMp(value: number): void
  gainTp(value: number): void
  gainSilentTp(value: number): void
  initTp(): void
  clearTp(): void
  chargeTpByDamage(damageRate: number): void
  regenerateHp(): void
  maxSlipDamage(): number
  regenerateMp(): void
  regenerateTp(): void
  regenerateAll(): void
  onBattleStart(advantageous: boolean): void
  onAllActionsEnd(): void
  onTurnEnd(): void
  onBattleEnd(): void
  onDamage(value: number): void
  setActionState(actionState: Game_Battler.ActionState): void
  isUndecided(): boolean
  isInputting(): boolean
  isWaiting(): boolean
  isActing(): boolean
  isChanting(): boolean
  isGuardWaiting(): boolean
  performActionStart(action: Game_Action): void
  performAction(action: Game_Action): void
  performActionEnd(): void
  performDamage(): void
  performMiss(): void
  performRecovery(): void
  performEvasion(): void
  performMagicEvasion(): void
  performCounter(): void
  performReflection(): void
  performSubstitute(target: Game_Battler): void
  performCollapse(): void
  name(): string
  index(): number
  isSpriteVisible(): boolean
  friendsUnit(): Game_Unit<Game_Battler>
  opponentsUnit(): Game_Unit<Game_Battler>
  isBattleMember(): boolean
  battlerName(): string
}

declare class Game_Actor extends Game_Battler {
  _actorId: number
  _name: string
  _nickname: string
  _profile: string
  _classId: number
  _level: number
  _characterName: string
  _characterIndex: number
  _faceName: string
  _faceIndex: number
  _battlerName: string
  _exp: { [k: number]: number }
  _skills: number[]
  _equips: Game_Item[]
  _actionInputIndex: number
  _lastMenuSkill: Game_Item
  _lastBattleSkill: Game_Item
  _lastCommandSymbol: string
  level: number
  constructor(actorId: number)
  setup(actorId: number): void
  actorId(): number
  actor(): RPGMakerMZ.DataActor
  name(): string
  setName(name: string): void
  nickname(): string
  setNickname(name: string): void
  profile(): string
  setProfile(name: string): void
  characterName(): string
  characterIndex(): number
  faceName(): string
  faceIndex(): number
  battlerName(): string
  initImages(): void
  expForLevel(level: number): number
  initExp(): void
  currentExp(): number
  currentLevelExp(): number
  nextLevelExp(): number
  nextRequiredExp(): number
  maxLevel(): number
  isMaxLevel(): boolean
  initSkills(): void
  initEquips(equips: number[]): void
  equipSlots(): number[]
  equips(): (RPGMakerMZ.DataWeapon | RPGMakerMZ.DataArmor)[]
  weapons(): RPGMakerMZ.DataWeapon
  armors(): RPGMakerMZ.DataArmor
  hasWeapon(weapon: RPGMakerMZ.DataWeapon): boolean
  hasArmor(armor: RPGMakerMZ.DataArmor): boolean
  isEquipChangeOk(slotId: number): boolean
  changeEquip(slotId: number, item: RPGMakerMZ.DataEquipable): void
  forceChangeEquip(slotId: number, item: RPGMakerMZ.DataEquipable): void
  tradeItemWithParty(newItem: RPGMakerMZ.DataEquipable, oldItem: RPGMakerMZ.DataEquipable): boolean
  changeEquipById(etypeId: number, itemId: number): void
  isEquipped(item: RPGMakerMZ.DataEquipable): boolean
  discardEquip(item: RPGMakerMZ.DataEquipable): void
  releaseUnequippableItems(forcing: boolean): void
  clearEquipments(): void
  optimizeEquipments(): void
  bestEquipItem(slotId: number): RPGMakerMZ.DataEquipable
  calcEquipItemPerformance(item: RPGMakerMZ.DataEquipable): number
  isSkillWtypeOk(skill: RPGMakerMZ.DataSkill): boolean
  isWtypeEquipped(wtypeId: number): boolean
  isActor(): true
  friendsUnit(): Game_Party
  opponentsUnit(): Game_Troop
  index(): number
  isBattleMember(): boolean
  isFormationChangeOk(): boolean
  currentClass(): RPGMakerMZ.DataClass
  isClass(gameClass?: RPGMakerMZ.DataClass): boolean
  skillTypes(): number[]
  skills(): RPGMakerMZ.DataSkill[]
  usableSkills(): RPGMakerMZ.DataSkill[]
  hasNoWeapons(): boolean
  bareHandsElementId(): number
  attackAnimationId1(): number
  attackAnimationId2(): number
  bareHandsAnimationId(): number
  changeExp(exp: number, show: boolean): void
  levelUp(): void
  levelDown(): void
  findNewSkills(lastSkills: RPGMakerMZ.DataSkill[]): RPGMakerMZ.DataSkill[]
  displayLevelUp(newSkills: RPGMakerMZ.DataSkill[]): void
  gainExp(exp: number): void
  finalExpRate(): number
  benchMembersExpRate(): number
  shouldDisplayLevelUp(): boolean
  changeLevel(level: number, show: boolean): void
  learnSkill(skillId: number): void
  forgetSkill(skillId: number): void
  isLearnedSkill(skillId: number): boolean
  hasSkill(skillId: number): boolean
  changeClass(classId: number, keepExp: boolean): void
  setCharacterImage(characterName: string, characterIndex: number): void
  setFaceImage(faceName: string, faceIndex: number): void
  setBattlerImage(battlerName: string): void
  isSpriteVisible(): boolean
  performAttack(): void
  performVictory(): void
  performEscape(): void
  makeActionList(): Game_Action[]
  makeAutoBattleActions(): void
  makeConfusionActions(): void
  onPlayerWalk(): void
  updateStateSteps(state: RPGMakerMZ.DataState): void
  showAddedStates(): void
  showRemovedStates(): void
  stepsForTurn(): number
  turnEndOnMap(): void
  checkFloorEffect(): void
  executeFloorDamage(): void
  basicFloorDamage(): number
  maxFloorDamage(): number
  performMapDamage(): void
  inputtingAction(): Game_Action
  selectNextCommand(): boolean
  selectNextCommand(): boolean
  lastSkill(): RPGMakerMZ.DataSkill
  lastMenuSkill(): RPGMakerMZ.DataSkill
  setLastMenuSkill(skill: RPGMakerMZ.DataSkill): void
  lastBattleSkill(): RPGMakerMZ.DataSkill
  setLastBattleSkill(skill: RPGMakerMZ.DataSkill): void
  lastCommandSymbol(): string
  setLastCommandSymbol(symbol: string): void
  testEscape(item: RPGMakerMZ.DataUsable): boolean
  onEscapeFailure(): boolean
}

declare namespace Game_Enemy {
  export enum ItemKind {
    Item = 1,
    Weapon = 2,
    Armor = 3
  }
}

declare class Game_Enemy extends Game_Battler {
  constructor(enemyId: number, x: number, y: number)
  setup(enemyId: number, x: number, y: number): void
  isEnemy(): true
  friendsUnit(): Game_Troop
  opponentsUnit(): Game_Party
  index(): number
  isBattleMember(): boolean
  enemyId(): number
  enemy(): RPGMakerMZ.DataEnemy
  exp(): number
  gold(): number
  makeDropItems(): RPGMakerMZ.DataItemlike[]
  dropItemRate(): number
  itemObject(kind: Game_Enemy.ItemKind, dataId: number): RPGMakerMZ.DataItemlike
  isSpriteVisible(): boolean
  screenX(): number
  screenY(): number
  battlerName(): string
  battlerHue(): number
  originalName(): string
  name(): string
  isLetterEmpty(): boolean
  setLetter(letter: string): void
  setPlural(plural: boolean): void
  transform(enemyId: number): void
  meetsCondition(action: Game_Action): boolean
  meetsTurnCondition(param1: number, param2: number): boolean
  meetsHpCondition(param1: number, param2: number): boolean
  meetsMpCondition(param1: number, param2: number): boolean
  meetsStateCondition(param1: number, param2: number): boolean
  meetsPartyLevelCondition(param1: number, param2: number): boolean
  meetsSwitchCondition(param1: number, param2: number): boolean
  isActionValid(action: Game_Action): boolean
  selectAction(actionList: Game_Action[], ratingZero: number): Game_Action | null
  selectAllActions(actionList: Game_Action[]): void
}

declare class Game_Actors {
  _data: Game_Actor[]
  constructor()
  initialize(): void
  actor(actorId: number): Game_Actor | null
}


declare class Game_Unit<T extends Game_Battler> {
  _inBattle: boolean
  constructor()
  inBattle(): boolean
  members(): T[]
  aliveMembers(): T[]
  deadMembers(): T[]
  movableMembers(): T[]
  clearActions(): void
  agility(): number
  tgrSum(): number
  randomTarget(): T
  randomDeadTarget(): T
  smoothTarget(): T
  smoothDeadTarget(): T
  clearResults(): void
  onBattleStart(advantageous: boolean): void
  onBattleEnd(): void
  makeActions(): void
  select(activeMember: T): void
  isAllDead(): boolean
  substituteBattler(): T
  tpbBaseSpeed(): number
  tpbReferenceTime(): number
  updateTpb(): void
}

declare class Game_Party extends Game_Unit<Game_Actor> {
  _gold: number
  _steps: number
  _lastItem: Game_Item
  _menuActorId: number
  _targetActorId: number
  _actors: number[]
  _items: { [id: number]: number }
  _weapons: { [id: number]: number }
  _armors: { [id: number]: number }
  constructor()
  static ABILITY_ENCOUNTER_HALF: number
  static ABILITY_ENCOUNTER_NONE: number
  static ABILITY_CANCEL_SURPRISE: number
  static ABILITY_RAISE_PREEMPTIVE: number
  static ABILITY_GOLD_DOUBLE: number
  static ABILITY_DROP_ITEM_DOUBLE: number
  initAllItems(): void
  exists(): boolean
  size(): number
  isEmpty(): boolean
  allMembers(): Game_Actor[]
  battleMembers(): Game_Actor[]
  maxBattleMembers(): number
  leader(): Game_Actor
  removeInvalidMembers(): void
  reviveBattleMembers(): void
  items(): RPGMakerMZ.DataItem[]
  weapons(): RPGMakerMZ.DataWeapon[]
  armors(): RPGMakerMZ.DataArmor[]
  equipItems(): RPGMakerMZ.DataEquipable[]
  allItems(): RPGMakerMZ.DataPriceable[]
  itemContainer(item: RPGMakerMZ.DataPriceable): Record<number, number> | null
  setupStartingMembers(): void
  name(): string
  setupBattleTest(): void
  setupBattleTestMembers(): void
  setupBattleTestItems(): void
  highestLevel(): number
  addActor(actorId: number): void
  removeActor(actorId: number): void
  gold(): number
  gainGold(amount: number): void
  loseGold(amount: number): void
  maxGold(): number
  steps(): number
  increaseSteps(): void
  numItems(item: RPGMakerMZ.DataPriceable): number
  maxItems(item: RPGMakerMZ.DataPriceable): number
  hasMaxItems(item: RPGMakerMZ.DataPriceable): boolean
  hasItem(item: RPGMakerMZ.DataPriceable, includeEquip?: boolean): boolean
  isAnyMemberEquipped(item: RPGMakerMZ.DataEquipable): boolean
  gainItem(item: RPGMakerMZ.DataPriceable, amount: number, includeEquip?: boolean): void
  discardMembersEquip(item: RPGMakerMZ.DataEquipable, amount: number): void
  loseItem(item: RPGMakerMZ.DataPriceable, amount: number, includeEquip?: boolean): void
  consumeItem(item: RPGMakerMZ.DataItem): void
  canUse(item: RPGMakerMZ.DataItem): boolean
  canInput(): boolean
  onPlayerWalk(): void
  menuActor(): Game_Actor
  setMenuActor(actor: Game_Actor): void
  makeMenuActorNext(): void
  makeMenuActorPrevious(): void
  targetActor(): Game_Actor
  setTargetActor(actor: Game_Actor): void
  lastItem(): RPGMakerMZ.DataItem
  setLastItem(item: RPGMakerMZ.DataItem): void
  swapOrder(index1: number, index2: number): void
  charactersForSavefile(): [string, number][]
  facesForSavefile(): [string, number][]
  partyAbility(abilityId: number): boolean
  hasEncounterHalf(): boolean
  hasEncounterNone(): boolean
  hasCancelSurprise(): boolean
  hasRaisePreemptive(): boolean
  hasGoldDouble(): boolean
  hasDropItemDouble(): boolean
  ratePreemptive(troopAgi: number): number
  rateSurprise(troopAgi: number): number
  performVictory(): void
  performEscape(): void
  removeBattleStates(): void
  requestMotionRefresh(): void
  onEscapeFailure(): void
}

declare class Game_Troop extends Game_Unit<Game_Enemy> {
  _interpreter: Game_Interpreter
  _troopId: number
  _eventFlags: { [page: number]: boolean }
  _enemies: Game_Enemy[]
  _turnCount: number
  _namesCount: { [name: string]: number }
  static LETTER_TABLE_HALF: string[]
  static LETTER_TABLE_FULL: string[]
  constructor()
  isEventRunning(): boolean
  updateInterpreter(): void
  turnCount(): number
  clear(): void
  troop(): RPGMakerMZ.DataTroop
  setup(troopId: number): void
  makeUniqueNames(): void
  updatePluralFlags(): void
  letterTable(): string[]
  enemyNames(): string[]
  meetsConditions(page: RPGMakerMZ.DataBattleEvent.Page): boolean
  setupBattleEvent(): void
  increaseTurn(): void
  expTotal(): number
  goldTotal(): number
  goldRate(): number
  makeDropItems(): RPGMakerMZ.DataItemlike[]
  isTpbTurnEnd(): boolean
}

declare class Game_Map {
  _interpreter: Game_Interpreter
  _mapId: number
  _tilesetId: number
  _events: Game_Event[]
  _commonEvents: Game_CommonEvent[]
  _vehicles: Game_Vehicle[]
  _displayX: number
  _displayY: number
  _nameDisplay: boolean
  _scrollDirection: number
  _scrollRest: number
  _scrollSpeed: number
  _parallaxName: string
  _parallaxZero: boolean
  _parallaxLoopX: boolean
  _parallaxLoopY: boolean
  _parallaxSx: number
  _parallaxSy: number
  _parallaxX: number
  _parallaxY: number
  _battleback1Name: string | null
  _battleback2Name: string | null
  _needsRefresh: boolean
  _tileEvents: Game_Event[] | undefined
  constructor()
  initialize(): void
  setup(mapId: number): void
  isEventRunning(): boolean
  tileWidth(): number
  tileHeight(): number
  bushDepth(): number
  mapId(): number
  tilesetId(): number
  displayX(): number
  displayY(): number
  parallaxName(): string
  battleback1Name(): string
  battleback2Name(): string
  requestRefresh(): void
  isNameDisplayEnabled(): boolean
  disableNameDisplay(): void
  enableNameDisplay(): void
  createVehicles(): void
  refereshVehicles(): void
  vehicles(): Game_Vehicle[]
  vehicle(type: string): Game_Vehicle | null
  boat(): Game_Vehicle
  ship(): Game_Vehicle
  airship(): Game_Vehicle
  setupEvents(): void
  events(): Game_Event[]
  event(eventId: number): Game_Event
  eraseEvent(eventId: number): void
  autorunCommonEvents(): RPGMakerMZ.DataCommonEvent[]
  parallelCommonEvents(): RPGMakerMZ.DataCommonEvent[]
  setupScroll(): void
  setupParallax(): void
  setupBattleback(): void
  setDisplayPos(x: number, y: number): void
  parallaxOx(): number
  parallaxOy(): number
  tileset(): RPGMakerMZ.DataTileset
  tilesetFlags(): number[]
  displayName(): string
  width(): number
  height(): number
  data(): number[]
  isLoopHorizontal(): boolean
  isLoopVertical(): boolean
  isDashDisabled(): boolean
  encounterList(): RPGMakerMZ.DataMap.Encounter[]
  encounterStep(): number
  isOverworld(): boolean
  screenTileX(): number
  screenTileY(): number
  adjustX(x: number): number
  adjustY(y: number): number
  roundX(x: number): number
  roundY(y: number): number
  xWithDirection(x: number, d: number): number
  yWithDirection(y: number, d: number): number
  roundXWithDirection(x: number, d: number): number
  roundYWithDirection(y: number, d: number): number
  deltaX(x1: number, x2: number): number
  deltaY(y1: number, y2: number): number
  distance(x1: number, y1: number, x2: number, y2: number): number
  canvasToMapX(x: number): number
  canvasToMapY(y: number): number
  autoplay(): void
  refreshIfNeeded(): void
  refresh(): void
  refreshTileEvents(): void
  eventsXy(x: number, y: number): Game_Event[]
  eventsXyNt(x: number, y: number): Game_Event[]
  tileEventsXy(x: number, y: number): Game_Event[]
  eventIdXy(x: number, y: number): number
  scrollDown(distance: number): void
  scrollLeft(distance: number): void
  scrollRight(distance: number): void
  scrollUp(distance: number): void
  isValid(x: number, y: number): boolean
  checkPassage(x: number, y: number, bit: number): boolean
  tileId(x: number, y: number, z: number): number
  layeredTiles(x: number, y: number): number[]
  allTiles(x: number, y: number): number[]
  autotileType(x: number, y: number, z: number): number
  isPassable(x: number, y: number, d: number): boolean
  isBoatPassable(x: number, y: number): boolean
  isShipPassable(x: number, y: number): boolean
  isAirshipLandOk(x: number, y: number): boolean
  checkLayeredTilesFlags(x: number, y: number, bit: number): boolean
  isLadder(x: number, y: number): boolean
  isBush(x: number, y: number): boolean
  isCounter(x: number, y: number): boolean
  isDamageFloor(x: number, y: number): boolean
  terrainTag(x: number, y: number): number
  regionId(x: number, y: number): number
  startScroll(direction: number, distance: number, speed: number): void
  isScrolling(): boolean
  update(sceneActive: boolean): void
  updateScroll(): void
  scrollDistance(): number
  doScroll(direction: number, distance: number): void
  updateEvents(): void
  updateVehicles(): void
  updateParallax(): void
  changeTileset(tilesetId: number): void
  changeBattleback(battleback1Name: string, battleback2Name: string): void
  changeParallax(name: string, loopX: boolean, loopY: boolean, sx: number, sy: number): void
  updateInterpreter(): void
  unlockEvent(eventId: number): void
  setupStartingEvent(): boolean
  setupTestEvent(): boolean
  setupStartingMapEvent(): boolean
  setupAutorunCommonEvent(): boolean
  isAnyEventStarting(): boolean
}

declare class Game_CommonEvent {
  constructor()
  initialize(commonEventId: number): void
  _commonEventId: number
  _interpreter: Game_Interpreter | null
  event(): RPGMakerMZ.DataCommonEvent
  list(): RPGMakerMZ.DataEvent.Command[]
  refresh(): void
  isActive(): boolean
  update(): void
}

declare class Game_CharacterBase {
  _x: number
  _y: number
  _realX: number
  _realY: number
  _moveSpeed: number
  _moveFrequency: number
  _opacity: number
  _blendMode: number
  _direction: number
  _pattern: number
  _priorityType: number
  _tileId: number
  _characterName: string
  _characterIndex: number
  _isObjectCharacter: boolean
  _walkAnime: boolean
  _stepAnime: boolean
  _directionFix: boolean
  _through: boolean
  _transparent: boolean
  _bushDepth: number
  _animationId: number
  _balloonId: number
  _animationPlaying: boolean
  _balloonPlaying: boolean
  _animationCount: number
  _stopCount: number
  _jumpCount: number
  _jumpPeak: number
  _movementSuccess: boolean
  x: number
  y: number
  constructor()
  initialize(): void
  initMembers(): void
  pos(x: number, y: number): boolean
  posNt(x: number, y: number): boolean
  moveSpeed(): number
  setMoveSpeed(moveSpeed: number): void
  moveFrequency(): number
  setMoveFrequency(moveFrequency: number): void
  opacity(): number
  setOpacity(opacity: number): void
  blendMode(): number
  setBlendMode(blendMode: number): void
  isNormalPriority(): boolean
  setPriorityType(priorityType: number): void
  isMoving(): boolean
  isJumping(): boolean
  jumpHeight(): number
  isStopping(): boolean
  checkStop(threshold: number): boolean
  resetStopCount(): void
  realMoveSpeed(): number
  distancePerFrame(): number
  isDashing(): boolean
  isDebugThrough(): boolean
  straighten(): void
  reverseDir(d: number): number
  canPass(x: number, y: number, d: number): boolean
  canPassDiagonally(x: number, y: number, horz: number, vert: number): boolean
  isMapPassable(x: number, y: number, d: number): boolean
  isCollidedWithCharacters(x: number, y: number): boolean
  isCollidedWithEvents(x: number, y: number): boolean
  isCollidedWithVehicles(x: number, y: number): boolean
  setPosition(x: number, y: number): void
  copyPosition(character: Game_CharacterBase): void
  locate(x: number, y: number): void
  direction(): number
  setDirection(d: number): void
  isTile(): boolean
  isObjectCharacter(): boolean
  shiftY(): number
  scrolledX(): number
  scrolledY(): number
  screenX(): number
  screenY(): number
  screenZ(): number
  isNearTheScreen(): boolean
  update(sceneActive?: boolean): void
  updateStop(): void
  updateJump(): void
  updateMove(): void
  updateAnimation(): void
  animationWait(): number
  updateAnimationCount(): void
  updatePattern(): void
  maxPattern(): number
  pattern(): number
  setPattern(pattern: number): void
  isOriginalPattern(): boolean
  resetPattern(): void
  refreshBushDepth(): void
  isOnLadder(): boolean
  isOnBush(): boolean
  terrainTag(): number
  regionId(): number
  increaseSteps(): void
  tileId(): number
  characterName(): string
  characterIndex(): number
  setImage(characterName: string, characterIndex: number): void
  setTileImage(tileId: number): void
  checkEventTriggerTouchFront(d: number): void
  checkEventTriggerTouch(x?: number, y?: number): void
  isMovementSucceeded(x?: number, y?: number): boolean
  setMovementSuccess(success: boolean): void
  moveStraight(d: number): void
  moveDiagonally(horz: number, vert: number): void
  jump(xPlus: number, yPlus: number): void
  hasWalkAnime(): boolean
  setWalkAnime(walkAnime: boolean): void
  hasStepAnime(): boolean
  setStepAnime(stepAnime: boolean): void
  isDirectionFixed(): boolean
  setDirectionFix(directionFix: boolean): void
  isThrough(): boolean
  setThrough(through: boolean): void
  isTransparent(): boolean
  bushDepth(): number
  setTransparent(transparent: boolean): void
  startAnimation(): void
  startBalloon(): void
  isAnimationPlaying(): boolean
  isBalloonPlaying(): boolean
  endAnimation(): void
  endBalloon(): void
}

declare class Game_Character extends Game_CharacterBase {
  static ROUTE_END: number
  static ROUTE_MOVE_DOWN: number
  static ROUTE_MOVE_LEFT: number
  static ROUTE_MOVE_RIGHT: number
  static ROUTE_MOVE_UP: number
  static ROUTE_MOVE_LOWER_L: number
  static ROUTE_MOVE_LOWER_R: number
  static ROUTE_MOVE_UPPER_L: number
  static ROUTE_MOVE_UPPER_R: number
  static ROUTE_MOVE_RANDOM: number
  static ROUTE_MOVE_TOWARD: number
  static ROUTE_MOVE_AWAY: number
  static ROUTE_MOVE_FORWARD: number
  static ROUTE_MOVE_BACKWARD: number
  static ROUTE_JUMP: number
  static ROUTE_WAIT: number
  static ROUTE_TURN_DOWN: number
  static ROUTE_TURN_LEFT: number
  static ROUTE_TURN_RIGHT: number
  static ROUTE_TURN_UP: number
  static ROUTE_TURN_90D_R: number
  static ROUTE_TURN_90D_L: number
  static ROUTE_TURN_180D: number
  static ROUTE_TURN_90D_R_L: number
  static ROUTE_TURN_RANDOM: number
  static ROUTE_TURN_TOWARD: number
  static ROUTE_TURN_AWAY: number
  static ROUTE_SWITCH_ON: number
  static ROUTE_SWITCH_OFF: number
  static ROUTE_CHANGE_SPEED: number
  static ROUTE_CHANGE_FREQ: number
  static ROUTE_WALK_ANIME_ON: number
  static ROUTE_WALK_ANIME_OFF: number
  static ROUTE_STEP_ANIME_ON: number
  static ROUTE_STEP_ANIME_OFF: number
  static ROUTE_DIR_FIX_ON: number
  static ROUTE_DIR_FIX_OFF: number
  static ROUTE_THROUGH_ON: number
  static ROUTE_THROUGH_OFF: number
  static ROUTE_TRANSPARENT_ON: number
  static ROUTE_TRANSPARENT_OFF: number
  static ROUTE_CHANGE_IMAGE: number
  static ROUTE_CHANGE_OPACITY: number
  static ROUTE_CHANGE_BLEND_MODE: number
  static ROUTE_PLAY_SE: number
  static ROUTE_SCRIPT: number
  _moveRouteForcing: boolean
  _moveRoute: RPGMakerMZ.DataMapEvent.MoveRoute | null
  _moveRouteIndex: number
  _originalMoveRoute: RPGMakerMZ.DataMapEvent.MoveRoute | null
  _originalMoveRouteIndex: number
  _waitCount: number
  constructor()
  initialize(...arguments: any[]): void
  initMembers(): void
  memorizeMoveRoute(): void
  restoreMoveRoute(): void
  isMoveRouteForcing(): boolean
  setMoveRoute(moveRoute: RPGMakerMZ.DataMapEvent.MoveRoute): void
  forceMoveRoute(moveRoute: RPGMakerMZ.DataMapEvent.MoveRoute): void
  updateStop(): void
  updateRoutineMove(): void
  processMoveCommand(command: RPGMakerMZ.DataEvent.Command): void
  deltaXFrom(x: number): number
  deltaYFrom(y: number): number
  moveRandom(): void
  moveTowardCharacter(character: Game_CharacterBase): void
  moveAwayFromCharacter(character: Game_CharacterBase): void
  turnTowardCharacter(character: Game_CharacterBase): void
  turnAwayFromCharacter(character: Game_CharacterBase): void
  turnTowardPlayer(): void
  turnAwayFromPlayer(): void
  moveTowardPlayer(): void
  moveAwayFromPlayer(): void
  moveForward(): void
  moveBackward(): void
  processRouteEnd(): void
  advanceMoveRouteIndex(): void
  turnRight90(): void
  turnLeft90(): void
  turn180(): void
  turnRightOrLeft90(): void
  turnRandom(): void
  swap(character: Game_CharacterBase): void
  findDirectionTo(goalX: number, goalY: number): number
  searchLimit(): number
}


declare class Game_Player extends Game_Character {
  _vehicleType: string
  _vehicleGettingOn: boolean
  _vehicleGettingOff: boolean
  _dashing: boolean
  _needsMapReload: boolean
  _transferring: boolean
  _newMapId: number
  _newX: number
  _newY: number
  _newDirection: number
  _fadeType: number
  _followers: Game_Followers
  _encounterCount: number
  constructor()
  initialize(): void
  initMembers(): void
  clearTransferInfo(): void
  followers(): Game_Followers
  refresh(): void
  isStopping(): boolean
  reserveTransfer(mapId: number, x: number, y: number, d: number, fadeType: number): void
  setupForNewGame(): void
  requestMapReload(): void
  isTransferring(): boolean
  newMapId(): number
  fadeType(): number
  performTransfer(): void
  isMapPassable(x: number, y: number, d: number): boolean
  vehicle(): Game_Vehicle | null
  isInBoat(): boolean
  isInShip(): boolean
  isInAirship(): boolean
  isInVehicle(): boolean
  isNormal(): boolean
  isDashing(): boolean
  isDebugThrough(): boolean
  isCollided(x: number, y: number): boolean
  centerX(): number
  centerY(): number
  center(x: number, y: number): void
  locate(x: number, y: number): void
  increaseSteps(): void
  makeEncounterCount(): void
  makeEncounterTroopId(): number
  meetsEncounterConditions(encounter: RPGMakerMZ.DataMap.Encounter): boolean
  executeEncounter(): boolean
  startMapEvent(x: number, y: number, triggers: number[], normal: boolean): void
  moveByInput(): void
  canMove(): boolean
  getInputDirection(): number
  executeMove(direction: number): void
  update(sceneActive: boolean): void
  updateDashing(): void
  isDashButtonPressed(): boolean
  updateScroll(lastScrolledX: number, lastScrolledY: number): void
  updateVehicle(): void
  updateVehicleGetOn(): void
  updateVehicleGetOff(): void
  updateNonmoving(wasMoving: boolean, sceneActive: boolean): void
  triggerAction(): boolean
  triggerButtonAction(): boolean
  triggerTouchAction(): boolean
  triggerTouchActionD1(x1: number, y1: number): boolean
  triggerTouchActionD2(x2: number, y2: number): boolean
  triggerTouchActionD3(x2: number, y2: number): boolean
  updateEncounterCount(): void
  canEncounter(): boolean
  encounterProgressValue(): number
  checkEventTriggerHere(triggers: number[]): void
  checkEventTriggerThere(triggers: number[]): void
  checkEventTriggerTouch(x: number, y: number): void
  canStartLocalEvents(): boolean
  getOnOffVehicle(): boolean
  getOnVehicle(): boolean
  getOffVehicle(): boolean
  forceMoveForward(): void
  isOnDamageFloor(): boolean
  moveStraight(d: number): void
  moveDiagonally(horz: number, vert: number): void
  jump(xPlus: number, yPlus: number): void
  showFollowers(): void
  hideFollowers(): void
  gatherFollowers(): void
  areFollowersGathering(): boolean
  areFollowersGathered(): boolean
}

declare class Game_Follower {
  initialize(memberIndex: number): void
  refresh(): void
  actor(): Game_Actor
  isVisible(): boolean
  isGathered(): boolean
  update(): void
  chaseCharacter(character: Game_Player | Game_Follower): void
}

declare class Game_Followers {
  initialize(): void
  _visible: boolean
  _gathering: boolean
  _data: Game_Follower[]
  setup(): void
  isVisible(): boolean
  show(): void
  hide(): void
  data(): Game_Follower[]
  reverseData(): Game_Follower[]
  follower(): Game_Follower
  refresh(): void
  update(): void
  updateMove(): void
  jumpAll(): void
  synchronize(): void
  gather(): void
  areGathering(): boolean
  visibleFollowers(): Game_Follower[]
  areMoving(): boolean
  areGathered(): boolean
  isSomeoneCollided(): boolean
}


declare class Game_Vehicle extends Game_Character {
  _type: string
  _mapId: number
  _altitude: number
  _driving: boolean
  _bgm: RPGMakerMZ.Audio | null
  constructor()
  initialize(type: string): void
  initMembers(): void
  isBoat(): boolean
  isShip(): boolean
  isAirship(): boolean
  resetDirection(): void
  initMoveSpeed(): void
  vehicle(): RPGMakerMZ.DataSystem.Vehicle | null
  loadSystemSettings(): void
  refresh(): void
  setLocation(mapId: number, x: number, y: number): void
  pos(x: number, y: number): boolean
  isMapPassable(x: number, y: number, d: number): boolean
  getOn(): void
  getOff(): void
  setBgm(bgm: RPGMakerMZ.Audio | null): void
  playBgm(): void
  syncWithPlayer(): void
  screenY(): number
  shadowX(): number
  shadowY(): number
  shadowOpacity(): number
  canMove(): boolean
  update(): void
  updateAirship(): void
  updateAirshipAltitude(): void
  maxAltitude(): number
  isLowest(): boolean
  isHighest(): boolean
  isTakeoffOk(): boolean
  isLandOk(x: number, y: number, d: number): boolean
}

declare class Game_Event extends Game_Character {
  _mapId: number
  _eventId: number
  _moveType: number
  _trigger: number | null
  _starting: boolean
  _erased: boolean
  _pageIndex: number
  _originalPattern: number
  _originalDirection: number
  _prelockDirection: number
  _locked: boolean
  _interpreter: Game_Interpreter | null
  constructor(mapId: number, eventId: number)
  initialize(mapId: number, eventId: number): void
  initMembers(): void
  eventId(): number
  event(): RPGMakerMZ.DataMapEvent
  page(): RPGMakerMZ.DataMapEvent.Page
  list(): RPGMakerMZ.DataEvent.Command
  isCollidedWithCharacters(x: number, y: number): boolean
  isCollidedWithEvents(x: number, y: number): boolean
  isCollidedWithPlayerCharacters(x: number, y: number): boolean
  lock(): void
  unlock(): void
  updateStop(): void
  updateSelfMovement(): void
  stopCountThreshold(): number
  moveTypeRandom(): void
  moveTypeTowardPlayer(): void
  isNearThePlayer(): boolean
  moveTypeCustom(): void
  isStarting(): boolean
  clearStartingFlag(): void
  isTriggerIn(triggers: number[]): boolean
  start(): void
  erase(): void
  refresh(): void
  findProperPageIndex(): number
  meetsConditions(page: RPGMakerMZ.DataMapEvent.Page): boolean
  setupPage(): void
  clearPageSettings(): void
  setupPageSettings(): void
  isOriginalPattern(): boolean
  resetPattern(): void
  checkEventTriggerTouch(x: number, y: number): void
  checkEventTriggerAuto(): void
  update(): void
  updateParallel(): void
  locate(x: number, y: number): void
  forceMoveRoute(moveRoute: RPGMakerMZ.DataMapEvent.MoveRoute): void
}

declare class Game_Interpreter {
  initialize(depth: number): void
  checkOverflow(): boolean
  clear(): void
  setup(list: RPGMakerMZ.DataEvent.Command[], eventId: number): void
  loadImages(): void
  eventId(): number
  isOnCurrentMap(): boolean
  setupReservedCommonEvent(): boolean
  isRunning(): boolean
  update(): void
  updateChild(): boolean
  updateWait(): boolean
  updateWaitCount(): boolean
  updateWaitMode(): boolean
  setWaitMode(waitMode: string): void
  wait(duration: number): void
  fadeSpeed(): number
  executeCommand(): boolean
  checkFreeze(): boolean
  terminate(): void
  skipBranch(): void
  currentCommand(): RPGMakerMZ.DataEvent.Command
  nextEventCode(): number
  iterateActorId(param: number, callback: (actor: Game_Actor) => void): void
  iterateActorEx(param1: number, param2: number, callback: (actor: Game_Actor) => void): void
  iterateActorIndex(param: number, callback: (actor: Game_Actor) => void): void
  iterateEnemyIndex(param: number, callback: (actor: Game_Enemy) => void): void
  iterateBattler(param1: number, param2: number, callback: (actor: Game_Actor | Game_Enemy) => void): void
  character(param: number): boolean
  operateValue(operation: number, operandType: number, operand: number): number
  changeHp(target: Game_Actor | Game_Enemy, value: number, allowDeath: boolean): void
  command101(params: [string, number, 0 | 1 | 2, 0 | 1 | 2, string]): boolean
  command102(params: [string[], number, number, 0 | 1 | 2, 0 | 1 | 2]): boolean
  setupChoices(params: [string[], number, number, 0 | 1 | 2, 0 | 1 | 2]): boolean
  command402(params: [number, string]): boolean
  command403(): boolean
  command103(params: [number, number]): boolean
  setupNumInput(params: [number, number]): boolean
  command104(params: [number, 1 | 2 | 3 | 4]): boolean
  setupItemChoice(params: [number, 1 | 2 | 3 | 4]): boolean
  command105(params: [number, boolean]): boolean
  command108(params: [string]): boolean
  command109(): boolean
  command111(params: [0, number, 0 | 1]
    | [1, number, 0 | 1, number, 0 | 1 | 2 | 3 | 4 | 5]
    | [2, 'A' | 'B' | 'C' | 'D', 0 | 1]
    | [3, number, 0 | 1]
    | [4, number, 0]
    | [4, number, 1, string]
    | [4, number, 2 | 3 | 4 | 5 | 6, number]
    | [5, number, 0]
    | [5, number, 1, number]
    | [6, number, 2 | 4 | 6 | 8]
    | [7, number, 0 | 1 | 2]
    | [8, number]
    | [9 | 10, number, boolean]
    | [11, 'ok' | 'cancel' | 'shift' | 'down' | 'left' | 'right' | 'up' | 'pageup' | 'pagedown', 0 | 1 | 2]
    | [12, string]
    | [13, 0 | 1 | 2]
  ): boolean
  command411(): boolean
  command112(): boolean
  command413(): boolean
  command113(): boolean
  command115(): boolean
  command117(params: [number]): boolean
  setupChild(list: RPGMakerMZ.DataEvent.Command, eventId: number): boolean
  command118(): boolean
  command119(params: [string]): boolean
  jumpTo(index: number): boolean
  command121(params: [number, number, 0 | 1]): boolean
  command122(params: [number, number, 0 | 1 | 2 | 3 | 4 | 5, 0 | 1, number]
    | [number, number, 0 | 1 | 2 | 3 | 4 | 5, 2, number, number]
    | [number, number, 0 | 1 | 2 | 3 | 4 | 5, 3, type: 0 | 1 | 2, params1: number, params2: 0]
    | [number, number, 0 | 1 | 2 | 3 | 4 | 5, 3, type: 3, params1: number, params2: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12]
    | [number, number, 0 | 1 | 2 | 3 | 4 | 5, 3, type: 4, params1: number, params2: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10]
    | [number, number, 0 | 1 | 2 | 3 | 4 | 5, 3, type: 5, params1: number, params2: 0 | 1]
    | [number, number, 0 | 1 | 2 | 3 | 4 | 5, 3, type: 6, params1: number, params2: 0]
    | [number, number, 0 | 1 | 2 | 3 | 4 | 5, 3, type: 7, params1: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9, params2: 0]
    | [number, number, 0 | 1 | 2 | 3 | 4 | 5, 3, type: 8, params1: 0 | 1 | 2 | 3 | 4 | 5, params2: number]
    | [number, number, 0 | 1 | 2 | 3 | 4 | 5, 4, string]
  ): boolean
  gameDataOperand(type: 0 | 1 | 2, params1: number, params2: 0): boolean
  gameDataOperand(type: 3, params1: number, params2: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12): boolean
  gameDataOperand(type: 4, params1: number, params2: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10): boolean
  gameDataOperand(type: 5, params1: number, params2: 0 | 1): boolean
  gameDataOperand(type: 6, params1: number, params2: 0): boolean
  gameDataOperand(type: 7, params1: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9, params2: 0): boolean
  gameDataOperand(type: 8, params1: 0 | 1 | 2 | 3 | 4 | 5, params2: number): boolean
  operateVariable: boolean
  command123(params: ['A' | 'B' | 'C' | 'D', 0 | 1]): boolean
  command124(params: [0 | 1, number]): boolean
  command125(params: [0 | 1, 0 | 1, number]): boolean
  command126(params: [number, 0 | 1, 0 | 1, number]): boolean
  command127(params: [number, 0 | 1, 0 | 1, number, boolean]): boolean
  command128(params: [number, 0 | 1, 0 | 1, number, boolean]): boolean
  command129(params: [number, 0 | 1, boolean]): boolean
  command132(params: [RPGMakerMZ.Audio]): boolean
  command133(params: [RPGMakerMZ.Audio]): boolean
  command134(params: [0 | 1]): boolean
  command135(params: [0 | 1]): boolean
  command136(params: [0 | 1]): boolean
  command137(params: [0 | 1]): boolean
  command138(params: [0 | 1]): boolean
  command139(params: [RPGMakerMZ.Audio]): boolean
  command140(params: [0 | 1 | 2, RPGMakerMZ.Audio]): boolean
  command201(params: [0 | 1, number, number, number, 0 | 2 | 4 | 6 | 8]): boolean
  command202(params: [0 | 1 | 2, 0 | 1, number, number, number]): boolean
  command203(params: [number, 0 | 1, number, number, 0 | 2 | 4 | 6 | 8]
    | [number, 2, number, null, 0 | 2 | 4 | 6 | 8]
  ): boolean
  command204(params: [2 | 4 | 6 | 8, number, 1 | 2 | 3 | 4 | 5 | 6]): boolean
  command205(params: [number, RPGMakerMZ.DataMapEvent.MoveRoute[]]): boolean
  command206(): boolean
  command211(params: [0 | 1]): boolean
  command212(params: [number, number, boolean]): boolean
  command213(params: [number, number, boolean]): boolean
  command214(): boolean
  command216(params: [0 | 1]): boolean
  command217(): boolean
  command221(): boolean
  command222(): boolean
  command223(params: [RPGMakerMZ.Color.Tone, number, boolean]): boolean
  command224(params: [RPGMakerMZ.Color.Rgba, number, boolean]): boolean
  command225(params: [number, number, number, boolean]): boolean
  command230(params: [number]): boolean
  command231(params: [number, string, 0 | 1, 0 | 1, number, number, number, number, number, 0 | 1 | 2 | 3]): boolean
  command232(params: [number, null, 0 | 1, 0 | 1, number, number, number, number, number, 0 | 1 | 2 | 3, number, boolean, 0 | 1 | 2 | 3]): boolean
  picturePoint(params: [number, string, 0 | 1, 0 | 1, number, number]): boolean
  command233(params: [number, number]): boolean
  command234(params: [number, RPGMakerMZ.Color.Tone, number, boolean]): boolean
  command235(params: [number]): boolean
  command236(params: ['none' | 'rain' | 'snow' | 'storm', number, number, boolean]): boolean
  command241(params: [RPGMakerMZ.Audio]): boolean
  command242(params: [number]): boolean
  command243(): boolean
  command244(): boolean
  command245(params: [RPGMakerMZ.Audio]): boolean
  command246(params: [number]): boolean
  command249(params: [RPGMakerMZ.Audio]): boolean
  command250(params: [RPGMakerMZ.Audio]): boolean
  command251(): boolean
  command261(params: [string]): boolean
  videoFileExt(): boolean
  command281(params: [0 | 1]): boolean
  command282(params: [number]): boolean
  command283(params: [string, string]): boolean
  command284(params: [string, boolean, boolean, number, number]): boolean
  command285(params: [number, 0 | 1 | 2 | 3 | 4 | 5 | 6, 0 | 1, number, number]
    | [number, 0 | 1 | 2 | 3 | 4 | 5 | 6, 2, number, null]
  ): boolean
  command301(params: [0 | 1 | 2, number, boolean, boolean]): boolean
  command601(): boolean
  command602(): boolean
  command603(): boolean
  command302(params: [0 | 1 | 2, number, 0 | 1, number, boolean]): boolean
  command303(params: [number, number]): boolean
  command311(params: [0 | 1, number, 0 | 1, 0 | 1, number, boolean]): boolean
  command312(params: [0 | 1, number, 0 | 1, 0 | 1, number]): boolean
  command326(params: [0 | 1, number, 0 | 1, 0 | 1, number]): boolean
  command313(params: [0 | 1, number, 0 | 1, number]): boolean
  command314(params: [0 | 1, number]): boolean
  command315(params: [0 | 1, number, 0 | 1, 0 | 1, number, boolean]): boolean
  command316(params: [0 | 1, number, 0 | 1, 0 | 1, number, boolean]): boolean
  command317(params: [0 | 1, number, 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, 0 | 1, 0 | 1, number]): boolean
  command318(params: [0 | 1, number, 0 | 1, number]): boolean
  command319(params: [number, number, number]): boolean
  command320(params: [number, string]): boolean
  command321(params: [number, number, boolean]): boolean
  command322(params: [number, string, number, string, number, string]): boolean
  command323(params: [0 | 1 | 2, string, number]): boolean
  command324(params: [number, string]): boolean
  command325(params: [number, string]): boolean
  command331(params: [number, 0 | 1, 0 | 1, number, boolean]): boolean
  command332(params: [number, 0 | 1, 0 | 1, number]): boolean
  command342(params: [number, 0 | 1, 0 | 1, number]): boolean
  command333(params: [number, 0 | 1, number]): boolean
  command334(params: [number]): boolean
  command335(params: [number]): boolean
  command336(params: [number, number]): boolean
  command337(params: [number, number]): boolean
  command339(params: [0 | 1, number, number, number]): boolean
  command340(): boolean
  command351(): boolean
  command352(): boolean
  command353(): boolean
  command354(): boolean
  command355(): boolean
  command356(params: [string, string, string, { [key: string]: string }]): boolean
  pluginCommand(): boolean
  command357(params: [string]): boolean
}

declare class Scene_Base extends Stage {
  _started: boolean
  _active: boolean
  _fadeSign: number
  _fadeDuration: number
  _fadeWhite: number
  _fadeOpacity: number
  _windowLayer: WindowLayer
  _colorFilter: ColorFilter
  constructor()
  initialize(): void
  create(): void
  isActive(): boolean
  isReady(): boolean
  start(): void
  update(): void
  stop(): void
  isStarted(): boolean
  isBusy(): boolean
  isFading(): boolean
  terminate(): void
  createWindowLayer(): void
  addWindow(window: Window): void
  startFadeIn(duration: number, white?: boolean): void
  startFadeOut(duration: number, white?: boolean): void
  createColorFilter(): void
  updateColorFilter(): void
  updateFade(): void
  updateChildren(): void
  popScene(): void
  checkGameover(): void
  fadeOutAll(): void
  fadeSpeed(): number
  slowFadeSpeed(): number
  scaleSprite(): void
  centerSprite(sprite: Sprite): void
  isBottomHelpMode(): boolean
  isBottomButtonMode(): boolean
  isRightInputMode(): boolean
  mainCommandWidth(): number
  buttonAreaTop(): number
  buttonAreaBottom(): number
  buttonAreaHeight(): number
  buttonY(): number
  calcWindowHeight(numLines: number, selectable: boolean): number
  requestAutosave(): void
  isAutosaveEnabled(): boolean
  executeAutosave(): void
  onAutosaveSuccess(): void
  onAutosaveFailure(): void
}

declare class Scene_Battle extends Scene_Base {
  constructor()
  actorCommandWindowRect(): Rectangle
  actorWindowRect(): Rectangle
  buttonAreaTop(): number
  changeInputWindow(): void
  closeCommandWindows(): void
  commandAttack(): void
  commandCancel(): void
  commandEscape(): void
  commandFight(): void
  commandGuard(): void
  commandItem(): void
  commandSkill(): void
  create(): void
  createActorCommandWindow(): void
  createActorWindow(): void
  createAllWindows(): void
  createButtons(): void
  createCancelButton(): void
  createDisplayObjects(): void
  createEnemyWindow(): void
  createHelpWindow(): void
  createItemWindow(): void
  createLogWindow(): void
  createPartyCommandWindow(): void
  createSkillWindow(): void
  createSpriteset(): void
  createStatusWindow(): void
  endCommandSelection(): void
  enemyWindowRect(): Rectangle
  helpAreaBottom(): number
  helpAreaHeight(): number
  helpAreaTop(): number
  helpWindowRect(): Rectangle
  hideSubInputWindows(): void
  initialize(): void
  isAnyInputWindowActive(): boolean
  isTimeActive(): boolean
  itemWindowRect(): Rectangle
  logWindowRect(): Rectangle
  needsInputWindowChange(): boolean
  needsSlowFadeOut(): boolean
  onActorCancel(): void
  onActorOk(): void
  onEnemyCancel(): void
  onEnemyOk(): void
  onItemCancel(): void
  onItemOk(): void
  onSelectAction(): void
  onSkillCancel(): void
  onSkillOk(): void
  partyCommandWindowRect(): Rectangle
  selectNextCommand(): void
  selectPreviousCommand(): void
  shouldAutosave(): boolean
  shouldOpenStatusWindow(): boolean
  skillWindowRect(): Rectangle
  start(): void
  startActorCommandSelection(): void
  startActorSelection(): void
  startEnemySelection(): void
  startPartyCommandSelection(): void
  statusWindowRect(): Rectangle
  statusWindowX(): number
  stop(): void
  terminate(): void
  update(): void
  updateBattleProcess(): void
  updateCancelButton(): void
  updateInputWindowVisibility(): void
  updateLogWindowVisibility(): void
  updateStatusWindowPosition(): void
  updateStatusWindowVisibility(): void
  updateVisibility(): void
  windowAreaHeight(): number
}

declare class Scene_Boot extends Scene_Base {
  _databaseLoaded: boolean
  constructor(...arguments: never[])
  initialize(): void
  create(): void
  isReady(): boolean
  onDatabaseLoaded(): void
  setEncryptionInfo(): void
  loadSystemImages(): void
  loadPlayerData(): void
  loadGameFonts(): void
  isPlayerDataLoaded(): void
  start(): void
  startNormalGame(): void
  resizeScreen(): void
  adjustBoxSize(): void
  adjustWindow(): void
  updateDocumentTitle(): void
  checkPlayerLocation(): void
}

declare class Scene_Equip extends Scene_MenuBase {
  _statusWindow: Window_EquipStatus
  _commandWindow: Window_EquipCommand<any>
  _slotWindow: Window_EquipSlot
  _itemWindow: Window_EquipItem
  constructor()
  initialize(): void
  create(): void
  createStatusWindow(): void
  statusWindowRect(): Rectangle
  createCommandWindow(): void
  commandWindowRect(): Rectangle
  createSlotWindow(): void
  slotWindowRect(): Rectangle
  createItemWindow(): void
  itemWindowRect(): Rectangle
  statusWidth(): number
  needsPageButtons(): boolean
  arePageButtonsEnabled(): boolean
  refreshActor(): void
  commandEquip(): void
  commandOptimize(): void
  commandClear(): void
  onSlotOk(): void
  onSlotCancel(): void
  onItemOk(): void
  executeEquipChange(): void
  onItemCancel(): void
  onActorChange(): void
  hideItemWindow(): void
}

declare class Scene_File extends Scene_MenuBase {
  _helpWindow: Window_Help
  _listWindow: Window_SavefileList
  constructor()
  initialize(): void
  create(): void
  helpAreaHeight(): number
  start(): void
  savefileId(): number
  isSavefileEnabled(savefileId: number): boolean
  createHelpWindow(): void
  helpWindowRect(): Rectangle
  createListWindow(): void
  listWindowRect(): Rectangle
  mode(): string
  needsAutosave(): boolean
  activateListWindow(): void
  helpWindowText(): string
  firstSavefileId(): number
  onSavefileOk(): void
}

declare class Scene_GameEnd extends Scene_MenuBase {
  _commandWindow: Window_GameEnd<any>
  constructor()
  initialize(): void
  create(): void
  stop(): void
  createBackground(): void
  createCommandWindow(): void
  commandWindowRect(): Rectangle
  commandToTitle(): void
}

declare class Scene_Gameover extends Scene_Base {
  constructor()
  initialize(): void
  create(): void
  start(): void
  update(): void
  stop(): void
  terminate(): void
  playGameoverMusic(): void
  createBackground(): void
  adjustBackground(): void
  isTriggered(): boolean
  gotoTitle(): void
}

declare class Scene_Item extends Scene_ItemBase {
  _categoryWindow: Window_ItemCategory<any>
  _itemWindow: Window_ItemList
  constructor()
  initialize(): void
  create(): void
  createCategoryWindow(): void
  categoryWindowRect(): Rectangle
  createItemWindow(): void
  itemWindowRect(): Rectangle
  user(): Game_Actor
  user(): Game_Actor[]
  onCategoryOk(): void
  onItemOk(): void
  onItemCancel(): void
  playSeForItem(): void
  useItem(): void
}
declare namespace Scene_ItemBase {
  type ItemlikeListWindow = Window_ItemList | Window_SkillList | Window_EquipItem | Window_BattleItem
}
declare class Scene_ItemBase extends Scene_MenuBase {
  _actorWindow: Window_MenuActor
  _itemWindow: Scene_ItemBase.ItemlikeListWindow
  constructor(...arguments: never[])
  initialize(): void
  create(): void
  createActorWindow(): void
  actorWindowRect(): Rectangle
  item(): RPGMakerMZ.DataItemlike | null
  user(): Game_Actor | null
  isCursorLeft(): boolean
  showActorWindow(): void
  hideActorWindow(): void
  isActorWindowActive(): boolean
  onActorOk(): void
  onActorCancel(): void
  determineItem(): void
  useItem(): void
  activateItemWindow(): void
  itemTargetActors(): Game_Actor[]
  canUse(): boolean
  isItemEffectsValid(): boolean
  applyItem(): void
  checkCommonEvent(): void
}

declare class Scene_Load extends Scene_File {
  _loadSuccess: boolean
  constructor()
  initialize(): void
  terminate(): void
  mode(): string
  helpWindowText(): string
  firstSavefileId(): number
  onSavefileOk(): void
  executeLoad(savefileId: number): void
  onLoadSuccess(): void
  onLoadFailure(): void
  reloadMapIfUpdated(): void
}

declare class Scene_Map extends Scene_Message {
  _waitCount: number
  _encounterEffectDuration: number
  _mapLoaded: boolean
  _touchCount: number
  _menuEnabled: boolean
  _transfer: boolean
  _lasMapWasNull: boolean
  _spriteset: Spriteset_Map
  _mapNameWindow: Window_MapName
  _menuButton: Sprite_Button
  menuCalling: boolean
  constructor(...arguments: never[])
  initialize(): void
  create(): void
  isReady(): boolean
  onMapLoaded(): void
  onTransfer(): void
  start(): void
  onTransferEnd(): void
  shouldAutosave(): boolean
  update(): void
  updateMainMultiply(): void
  updateMain(): void
  isPlayerActive(): boolean
  isFastForward(): boolean
  stop(): void
  isBusy(): boolean
  terminate(): void
  needsFadeIn(): boolean
  needsSlowFadeOut(): boolean
  updateWaitCount(): boolean
  updateDestination(): void
  updateMenuButton(): void
  hideMenuButton(): void
  updateMapNameWindow(): void
  isMenuEnabled(): boolean
  isMapTouchOk(): boolean
  processMapTouch(): void
  isAnyButtonPressed(): boolean
  onMapTouch(): void
  isSceneChangeOk(): boolean
  updateScene(): void
  createDisplayObjects(): void
  createSpriteset(): void
  createAllWindows(): void
  createMapNameWindow(): void
  mapNameWindowRect(): Rectangle
  createButtons(): void
  createMenuButton(): void
  updateTransferPlayer(): void
  updateEncounter(): void
  updateCallMenu(): void
  isMenuCalled(): boolean
  callMenu(): void
  updateCallDebug(): void
  isDebugCalled(): boolean
  fadeInForTransfer(): void
  fadeOutForTransfer(): void
  launchBattle(): void
  stopAudioOnBattleStart(): void
  startEncounterEffect(): void
  updateEncounterEffect(): void
  snapForBattleBackground(): void
  startFlashForEncounter(duration: number): void
  encounterEffectSpeed(): number
}

declare class Scene_Menu extends Scene_MenuBase {
  _commandWindow: Window_MenuCommand<any>; // TODO: fix the typing?
  _goldWindow: Window_Gold
  _statusWindow: Window_MenuStatus
  constructor()
  initialize(): void
  create(): void
  start(): void
  helpAreaHeight(): number
  createCommandWindow(): void
  commandWindowRect(): Rectangle
  createGoldWindow(): void
  goldWindowRect(): Rectangle
  createStatusWindow(): void
  statusWindowRect(): Rectangle
  commandItem(): void
  commandPersonal(): void
  commandFormation(): void
  commandFormation(): void
  commandOptions(): void
  commandSave(): void
  commandGameEnd(): void
  onPersonalOk(): void
  onPersonalCancel(): void
  onFormationOk(): void
  onFormationCancel(): void
}

declare class Scene_MenuBase extends Scene_Base {
  _actor: Game_Actor
  _backgroundFilter: PIXI.filters.BlurFilter
  _backgroundSprite: Sprite
  _helpWindow: Window_Help
  _cancelButton: Sprite_Button
  _pageupButton: Sprite_Button
  _pagedownButton: Sprite_Button
  constructor()
  initialize(): void
  create(): void
  update(): void
  helpAreaTop(): number
  helpAreaBottom(): number
  helpAreaHeight(): number
  mainAreaTop(): number
  mainAreaBottom(): number
  mainAreaHeight(): number
  actor(): Game_Actor
  updateActor(): void
  createBackground(): void
  setBackgroundOpacity(opacity: number): void
  createHelpWindow(): void
  helpWindowRect(): Rectangle
  createButtons(): void
  needsCancelButton(): boolean
  createCancelButton(): void
  needsPageButtons(): boolean
  createPageButtons(): void
  updatePageButtons(): void
  arePageButtonsEnabled(): boolean
  nextActor(): void
  previousActor(): void
  onActorChange(): void
}

declare class Scene_Message extends Scene_Base {
  _messageWindow: Window_Message
  _scrollTextWindow: Window_ScrollText
  _goldWindow: Window_Gold
  _nameBoxWindow: Window_NameBox
  _choiceListWindow: Window_ChoiceList<any>
  _numberInputWindow: Window_NumberInput
  _eventItemWindow: Window_EventItem
  constructor(...arguments: never[])
  initialize(): void
  isMessageWindowClosing(): boolean
  createAllWindows(): void
  createMessageWindow(): void
  messageWindowRect(): Rectangle
  createScrollTextWindow(): void
  scrollTextWindowRect(): Rectangle
  createGoldWindow(): void
  goldWindowRect(): Rectangle
  createNameBoxWindow(): void
  createChoiceListWindow(): void
  createNumberInputWindow(): void
  createEventItemWindow(): void
  eventItemWindowRect(): Rectangle
  associateWindows(): void
}

declare class Scene_Options extends Scene_MenuBase {
  _optionsWindow: Window_Options<any>
  constructor()
  initialize(): void
  create(): void
  terminate(): void
  createOptionsWindow(): void
  optionsWindowRect(): Rectangle
  maxCommands(): number
  maxVisibleCommands(): number
}

declare class Scene_Save extends Scene_File {
  constructor()
  initialize(): void
  mode(): string
  helpWindowText(): string
  firstSavefileId(): number
  onSavefileOk(): void
  executeSave(savefileId: number): void
  onSaveSuccess(): void
  onSaveFailure(): void
}

declare class Scene_Skill extends Scene_ItemBase {
  _skillTypeWindow: Window_SkillType
  _statusWindow: Window_SkillStatus
  _itemWindow: Window_SkillList
  constructor()
  initialize(): void
  create(): void
  start(): void
  createSkillTypeWindow(): void
  skillTypeWindowRect(): Rectangle
  createStatusWindow(): void
  statusWindowRect(): Rectangle
  createItemWindow(): void
  itemWindowRect(): Rectangle
  needsPageButtons(): boolean
  arePageButtonsEnabled(): boolean
  refreshActor(): void
  user(): Game_Actor
  commandSkill(): void
  onItemOk(): void
  onItemCancel(): void
  playSeForItem(): void
  useItem(): void
  onActorChange(): void
}

declare class Scene_Status extends Scene_MenuBase {
  _profileWindow: Window_Help
  _statusWindow: Window_Status
  _statusParamsWindow: Window_StatusParams
  _statusEquipWindow: Window_StatusParams
  constructor()
  initialize(): void
  create(): void
  helpAreaHeight(): number
  createProfileWindow(): void
  profileWindowRect(): Rectangle
  createStatusWindow(): void
  statusWindowRect(): Rectangle
  createStatusParamsWindow(): void
  statusParamsWindowRect(): Rectangle
  createStatusEquipWindow(): void
  statusEquipWindowRect(): Rectangle
  statusParamsWidth(): number
  statusParamsHeight(): number
  profileHeight(): number
  start(): void
  needsPageButtons(): boolean
  refreshActor(): void
  onActorChange(): void
}

declare class Scene_Title extends Scene_Base {
  _commandWindow: Window_TitleCommand<any>
  _gameTitleSprite: Sprite
  _backSprite1: Sprite
  _backSprite2: Sprite
  constructor(...arguments: any[])
  initialize(): void
  create(): void
  start(): void
  update(): void
  isBusy(): boolean
  terminate(): void
  createBackground(): void
  createForeground(): void
  drawGameTitle(): void
  adjustBackground(): void
  createCommandWindow(): void
  commandWindowRect(): Rectangle
  commandNewGame(): void
  commandContinue(): void
  commandOptions(): void
  playTitleMusic(): void
}

declare class Scene_Shop extends Scene_MenuBase {
  activateBuyWindow(): void
  activateSellWindow(): void
  buyWindowRect(): Rectangle
  buyingPrice(): number
  categoryWindowRect(): Rectangle
  commandBuy(): void
  commandSell(): void
  commandWindowRect(): Rectangle
  create(): void
  createBuyWindow(): void
  createCategoryWindow(): void
  createCommandWindow(): void
  createDummyWindow(): void
  createGoldWindow(): void
  createNumberWindow(): void
  createSellWindow(): void
  createStatusWindow(): void
  currencyUnit(): string
  doBuy(number: number): void
  doSell(number: number): void
  dummyWindowRect(): Rectangle
  endNumberInput(): void
  goldWindowRect(): Rectangle
  initialize(): void
  maxBuy(): number
  maxSell(): number
  money(): number
  numberWindowRect(): Rectangle
  onBuyCancel(): void
  onBuyOk(): void
  onCategoryCancel(): void
  onCategoryOk(): void
  onNumberCancel(): void
  onNumberOk(): void
  onSellCancel(): void
  onSellOk(): void
  prepare(goods: any[], purchaseOnly: boolean): void
  sellWindowRect(): Rectangle
  sellingPrice(): number
  statusWidth(): number
  statusWindowRect(): Rectangle
}

declare class Scene_Name extends Scene_MenuBase {
  create(): void
  createEditWindow(): void
  createInputWindow(): void
  editWindowRect(): Rectangle
  initialize(): void
  inputWindowRect(): Rectangle
  onInputOk(): void
  prepare(actorId: number, maxLength: number): void
  start(): void
}

declare class Scene_Debug extends Scene_MenuBase {
  create(): void
  createDebugHelpWindow(): void
  createEditWindow(): void
  createRangeWindow(): void
  debugHelpWindowRect(): Rectangle
  editWindowRect(): Rectangle
  helpText(): string
  initialize(): void
  needsCancelButton(): boolean
  onEditCancel(): void
  onRangeOk(): void
  rangeWindowRect(): Rectangle
  refreshHelpWindow(): void
}

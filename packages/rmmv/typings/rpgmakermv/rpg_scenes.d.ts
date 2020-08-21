declare class Scene_Base extends Stage {
    constructor();
    initialize(): void;
    _active: boolean;
    _fadeSign: number;
    _fadeDuration: number;
    _fadeSprite: ScreenSprite;
    _imageReservationId: number;

    attachReservation(): void;
    detachReservation(): void;

    create(): void;
    isActive(): boolean;
    isReady(): boolean;
    start(): void;
    update(): void;
    stop(): void;
    isBusy(): boolean;
    terminate(): void;
    createWindowLayer(): void;
    _windowLayer: WindowLayer;
    addWindow(window: Window_Base): void;
    startFadeIn(duration?: number, white?: boolean): void;
    startFadeOut(duration?: number, white?: boolean): void;
    createFadeSprite(white?: boolean): void;
    updateFade(): void;
    updateChildren(): void;
    popScene(): void;
    checkGameover(): void;
    fadeOutAll(): void;
    fadeSpeed(): number;
    slowFadeSpeed(): number;
}

declare class Scene_Boot extends Scene_Base {
    constructor();
    initialize(): void;
    _startDate: number;
    create(): void;
    static loadSystemImages(): void;
    loadSystemWindowImage(): void;
    isReady(): boolean;
    isGameFontLoaded(): boolean;
    start(): void;
    updateDocumentTitle(): void;
    checkPlayerLocation(): void;
}

declare class Scene_Title extends Scene_Base {
    constructor();
    initialize(): void;

    create(): void;
    start(): void;
    update(): void;
    _commandWindow: Window_TitleCommand;
    isBusy(): boolean;
    terminate(): void;
    createBackground(): void;
    _backSprite1: Sprite;
    _backSprite2: Sprite;
    createForeground(): void;
    _gameTitleSprite: Sprite;
    drawGameTitle(): void;
    centerSprite(sprite: Sprite_Base): void;
    createCommandWindow(): void;
    commandNewGame(): void;
    commandContinue(): void;
    commandOptions(): void;
    playTitleMusic(): void;
}

declare class Scene_Map extends Scene_Base {
    constructor();
    initialize(): void;
    _waitCount: number;
    _encounterEffectDuration: number;
    _mapLoaded: boolean;
    _touchCount: number;

    create(): void;
    _transfer: boolean;

    isReady(): boolean;
    onMapLoaded(): void;
    start(): void;
    menuCalling: boolean;
    update(): void;
    updateMainMultiply(): void;
    updateMain(): void;
    isFastForward(): boolean;
    stop(): void;
    isBusy(): boolean;
    terminate(): void;
    needsFadeIn(): boolean;
    needsSlowFadeOut(): boolean;
    updateWaitCount(): boolean;
    updateDestination(): void;
    isMapTouchOk(): boolean;
    processMapTouch(): void;
    isSceneChangeOk(): boolean;
    updateScene(): void;
    createDisplayObjects(): void;
    createSpriteset(): void;
    _spriteset: Spriteset_Map;
    createAllWindows(): void;
    createMapNameWindow(): void;
    _mapNameWindow: Window_MapName;
    createMessageWindow(): void;
    _messageWindow: Window_Message;
    createScrollTextWindow(): void;
    _scrollTextWindow: Window_ScrollText;
    updateTransferPlayer(): void;
    updateEncounter(): void;
    updateCallMenu(): void;
    isMenuEnabled(): boolean;
    isMenuCalled(): boolean;
    callMenu(): void;
    updateCallDebug(): void;
    isDebugCalled(): boolean;
    fadeInForTransfer(): void;
    fadeOutForTransfer(): void;
    launchBattle(): void;
    stopAudioOnBattleStart(): void;
    startEncounterEffect(): void;
    updateEncounterEffect(): void;
    snapForBattleBackground(): void;
    startFlashForEncounter(duration: number): void;
    encounterEffectSpeed(): number;
}

declare class Scene_MenuBase extends Scene_Base {
    constructor();
    initialize(): void;

    create(): void;
    actor(): Game_Actor;
    _actor: Game_Actor;
    updateActor(): void;
    createBackground(): void;
    _backgroundSprite: Sprite;
    setBackgroundOpacity(opacity: number): void;
    createHelpWindow(): void;
    _helpWindow: Window_Help;
    nextActor(): void;
    previousActor(): void;
    onActorChange(): void;
}

declare class Scene_Menu extends Scene_MenuBase {
    constructor();
    initialize(): void;

    create(): void;
    start(): void;
    _statusWindow: Window_MenuStatus;
    createCommandWindow(): void;
    _commandWindow: Window_MenuCommand;
    createGoldWindow(): void;
    _goldWindow: Window_Gold;
    createStatusWindow(): void;
    commandItem(): void;
    commandPersonal(): void;
    commandFormation(): void;
    commandOptions(): void;
    commandSave(): void;
    commandGameEnd(): void;
    onPersonalOk(): void;
    onPersonalCancel(): void;
    onFormationOk(): void;
    onFormationCancel(): void;
}

declare class Scene_ItemBase extends Scene_MenuBase {
    constructor();
    initialize(): void;

    create(): void;
    createActorWindow(): void;
    _actorWindow: Window_MenuActor;
    item(): RPGMakerMV.DataAnyItem | RPGMakerMV.DataSkill;
    user(): Game_Actor;
    isCursorLeft(): boolean;
    showSubWindow(window: Window_Base): void;
    hideSubWindow(window: Window_Base): void;
    onActorOk(): void;
    onActorCancel(): void;
    determineItem(): void;
    useItem(): void;
    activateItemWindow(): void;
    itemTargetActors(): void;
    canUse(): boolean;
    isItemEffectsValid(): boolean;
    applyItem(): void;
    checkCommonEvent(): void;

    _itemWindow: Window_Selectable;
}

declare class Scene_Item extends Scene_ItemBase {
    constructor();
    initialize(): void;
    create(): void;
    createCategoryWindow(): void;
    _categoryWindow: Window_ItemCategory;
    createItemWindow(): void;
    _itemWindow: Window_ItemList;
    user(): Game_Actor;
    onCategoryOk(): void;
    onItemOk(): void;
    onItemCancel(): void;
    playSeForItem(): void;
    useItem(): void;
}

declare class Scene_Skill extends Scene_ItemBase {
    constructor();
    initialize(): void;
    create(): void;
    start(): void;
    createSkillTypeWindow(): void;
    _skillTypeWindow: Window_SkillType;
    createStatusWindow(): void;
    _statusWindow: Window_SkillStatus;
    createItemWindow(): void;
    _itemWindow: Window_SkillList;
    refreshActor(): void;
    user(): Game_Actor;
    commandSkill(): void;
    onItemOk(): void;
    onItemCancel(): void;
    playSeForItem(): void;
    useItem(): void;
    onActorChange(): void;
}

declare class Scene_Equip extends Scene_MenuBase {
    constructor();
    initialize(): void;
    create(): void;
    createStatusWindow(): void;
    _statusWindow: Window_EquipStatus;
    createCommandWindow(): void;
    _commandWindow: Window_EquipCommand;
    createSlotWindow(): void;
    _slotWindow: Window_EquipSlot;
    createItemWindow(): void;
    _itemWindow: Window_EquipItem;
    refreshActor(): void;
    commandEquip(): void;
    commandOptimize(): void;
    commandClear(): void;
    onSlotOk(): void;
    onSlotCancel(): void;
    onItemOk(): void;
    onItemCancel(): void;
    onActorChange(): void;
}

declare class Scene_Status extends Scene_MenuBase {
    constructor();
    initialize(): void;
    create(): void;
    _statusWindow: Window_Status;
    refreshActor(): void;
    onActorChange(): void;
}

declare class Scene_Options extends Scene_MenuBase {
    constructor();
    initialize(): void;
    create(): void;
    terminate(): void;
    createOptionsWindow(): void;
    _optionsWindow: Window_Options;
}

declare class Scene_File extends Scene_MenuBase {
    constructor();
    initialize(): void;
    create(): void;
    start(): void;
    savefileId(): number;
    createHelpWindow(): void;
    _helpWindow: Window_Help;
    createListWindow(): void;
    _listWindow: Window_SavefileList;
    mode(): string;
    activateListWindow(): void;
    helpWindowText(): string;
    firstSavefileIndex(): number;
    onSavefileOk(): void;
}

declare class Scene_Save extends Scene_File {
    constructor();
    initialize(): void;
    mode(): string;
    helpWindowText(): string;
    firstSavefileIndex(): number;
    onSavefileOk(): void;
    onSaveSuccess(): void;
    onSaveFailure(): void;
}

declare class Scene_Load extends Scene_File {
    constructor();
    initialize(): void;
    _loadSuccess: boolean;

    terminate(): void;
    mode(): string;
    helpWindowText(): string;
    firstSavefileIndex(): number;
    onSavefileOk(): void;
    onSaveSuccess(): void;
    onSaveFailure(): void;
    reloadMapIfUpdated(): void;
}

declare class Scene_GameEnd extends Scene_MenuBase {
    constructor();
    initialize(): void;
    create(): void;
    stop(): void;
    createBackground(): void;
    createCommandWindow(): void;
    _commandWindow: Window_GameEnd;

    commandToTitle(): void;
}

declare class Scene_Shop extends Scene_MenuBase {
    constructor();
    initialize(): void;
    prepare(goods: any[][], purchaseOnly: boolean): void;
    _goods: any[][];
    _purchaseOnly: boolean;
    _item: RPGMakerMV.DataAnyItem;
    create(): void;
    createGoldWindow(): void;
    _goldWindow: Window_Gold;
    createCommandWindow(): void;
    _commandWindow: Window_ShopCommand;
    createDummyWindow(): void;
    _dummyWindow: Window_Base;
    createNumberWindow(): void;
    _numberWindow: Window_ShopNumber;
    createStatusWindow(): void;
    _statusWindow: Window_ShopStatus;
    createBuyWindow(): void;
    _buyWindow: Window_ShopBuy;
    createCategoryWindow(): void;
    _categoryWindow: Window_ItemCategory;
    createSellWindow(): void;
    _sellWindow: Window_ShopSell;

    activateBuyWindow(): void;
    activateSellWindow(): void;
    commandBuy(): void;
    commandSell(): void;
    onBuyOk(): void;
    onBuyCancel(): void;
    onCategoryOk(): void;
    onCategoryCancel(): void;
    onSellOk(): void;
    onSellCancel(): void;
    onNumberOk(): void;
    onNumberCancel(): void;
    doBuy(number: number): void;
    doSell(number: number): void;
    endNumberInput(): void;
    maxBuy(): number;
    maxSell(): number;
    money(): number;
    currencyUnit(): string;
    buyingPrice(): number;
    sellingPrice(): number;
}

declare class Scene_Name extends Scene_MenuBase {
    constructor();
    initialize(): void;
    prepare(actorId: number, maxLength: number): void;
    _actorId: number;
    _maxLength: number;
    create(): void;
    _actor: Game_Actor;
    start(): void;
    createEditWindow(): void;
    _editWindow: Window_NameEdit;
    createInputWindow(): void;
    _inputWindow: Window_NameInput;
    onInputOk(): void;
}

declare class Scene_Debug extends Scene_MenuBase {
    constructor();
    initialize(): void;
    create(): void;
    createRangeWindow(): void;
    _rangeWindow: Window_DebugRange;
    createEditWindow(): void;
    _editWindow: Window_DebugEdit;
    createDebugHelpWindow(): void;
    _debugHelpWindow: Window_Base;

    onRangeOk(): void;
    onEditCancel(): void;
    refreshHelpWindow(): void;
    helpText(): string;
}

declare class Scene_Battle extends Scene_Base {
    constructor();
    initialize(): void;

    create(): void;
    start(): void;
    update(): void;
    updateBattleProcess(): void;
    isAnyInputWindowActive(): boolean;
    changeInputWindow(): void;
    stop(): void;
    terminate(): void;
    needsSlowFadeOut(): boolean;
    updateStatusWindow(): void;
    updateWindowPositions(): void;
    createDisplayObjects(): void;
    createSpriteset(): void;
    _spriteset: Spriteset_Battle;
    createAllWindows(): void;
    createLogWindow(): void;
    _logWindow: Window_BattleLog;
    createStatusWindow(): void;
    _statusWindow: Window_BattleStatus;
    createPartyCommandWindow(): void;
    _partyCommandWindow: Window_PartyCommand;
    createActorCommandWindow(): void;
    _actorCommandWindow: Window_ActorCommand;
    createHelpWindow(): void;
    _helpWindow: Window_Help;
    createSkillWindow(): void;
    _skillWindow: Window_BattleSkill;
    createItemWindow(): void;
    _itemWindow: Window_BattleItem;
    createActorWindow(): void;
    _actorWindow: Window_BattleActor;
    createEnemyWindow(): void;
    _enemyWindow: Window_BattleEnemy;
    createMessageWindow(): void;
    _messageWindow: Window_Message;
    createScrollTextWindow(): void;
    _scrollTextWindow: Window_ScrollText;
    refreshStatus(): void;
    startPartyCommandSelection(): void;
    commandFight(): void;
    commandEscape(): void;
    startActorCommandSelection(): void;
    commandAttack(): void;
    commandSkill(): void;
    commandGuard(): void;
    commandItem(): void;
    selectNextCommand(): void;
    selectPreviousCommand(): void;
    selectActorSelection(): void;
    onActorOk(): void;
    onActorCancel(): void;
    selectEnemySelection(): void;
    onEnemyOk(): void;
    onEnemyCancel(): void;
    onSkillOk(): void;
    onSkillCancel(): void;
    onItemOk(): void;
    onItemCancel(): void;
    onSelectAction(): void;
    endCommandSelection(): void;
}

declare class Scene_Gameover extends Scene_Base {
    constructor();
    initialize(): void;
    create(): void;
    start(): void;
    update(): void;
    stop(): void;
    terminate(): void;
    playGameoverMusic(): void;
    createBackground(): void;
    _backSprite: Sprite;
    isTriggered(): boolean;
    gotoTitle(): void;
}

declare namespace RPGMakerMV {
    interface TextState {
        index?: number;
        x?: number;
        y?: number;
        left?: number;
        text?: string;
        height?: number;
    }

    interface DataCommand {
        name: string;
        symbol: string;
        enabled: boolean;
        ext: number;
    }

    type NameInputLatin1 = [
        'A','B','C','D','E',  'a','b','c','d','e',
        'F','G','H','I','J',  'f','g','h','i','j',
        'K','L','M','N','O',  'k','l','m','n','o',
        'P','Q','R','S','T',  'p','q','r','s','t',
        'U','V','W','X','Y',  'u','v','w','x','y',
        'Z','[',']','^','_',  'z','{','}','|','~',
        '0','1','2','3','4',  '!','#','$','%','&',
        '5','6','7','8','9',  '(',')','*','+','-',
        '/','=','@','<','>',  ':',';',' ','Page','OK',
    ];
    type NameInputLatin2 = [
        'Á','É','Í','Ó','Ú',  'á','é','í','ó','ú',
        'À','È','Ì','Ò','Ù',  'à','è','ì','ò','ù',
        'Â','Ê','Î','Ô','Û',  'â','ê','î','ô','û',
        'Ä','Ë','Ï','Ö','Ü',  'ä','ë','ï','ö','ü',
        'Ā','Ē','Ī','Ō','Ū',  'ā','ē','ī','ō','ū',
        'Ã','Å','Æ','Ç','Ð',  'ã','å','æ','ç','ð',
        'Ñ','Õ','Ø','Š','Ŵ',  'ñ','õ','ø','š','ŵ',
        'Ý','Ŷ','Ÿ','Ž','Þ',  'ý','ÿ','ŷ','ž','þ',
        'Ĳ','Œ','ĳ','œ','ß',  '«','»',' ','Page','OK',
    ];
    type NameInputCyrillic = [
        'А','Б','В','Г','Д',  'а','б','в','г','д',
        'Е','Ё','Ж','З','И',  'е','ё','ж','з','и',
        'Й','К','Л','М','Н',  'й','к','л','м','н',
        'О','П','Р','С','Т',  'о','п','р','с','т',
        'У','Ф','Х','Ц','Ч',  'у','ф','х','ц','ч',
        'Ш','Щ','Ъ','Ы','Ь',  'ш','щ','ъ','ы','ь',
        'Э','Ю','Я','^','_',  'э','ю','я','%','&',
        '0','1','2','3','4',  '(',')','*','+','-',
        '5','6','7','8','9',  ':',';',' ','','OK',
    ];
    type NameInputHiragana = [
        'あ','い','う','え','お',  'が','ぎ','ぐ','げ','ご',
        'か','き','く','け','こ',  'ざ','じ','ず','ぜ','ぞ',
        'さ','し','す','せ','そ',  'だ','ぢ','づ','で','ど',
        'た','ち','つ','て','と',  'ば','び','ぶ','べ','ぼ',
        'な','に','ぬ','ね','の',  'ぱ','ぴ','ぷ','ぺ','ぽ',
        'は','ひ','ふ','へ','ほ',  'ぁ','ぃ','ぅ','ぇ','ぉ',
        'ま','み','む','め','も',  'っ','ゃ','ゅ','ょ','ゎ',
        'や','ゆ','よ','わ','ん',  'ー','～','・','＝','☆',
        'ら','り','る','れ','ろ',  'ゔ','を','　','カナ','決定',
    ];
    type NameInputKatakana = [
        'ア','イ','ウ','エ','オ',  'ガ','ギ','グ','ゲ','ゴ',
        'カ','キ','ク','ケ','コ',  'ザ','ジ','ズ','ゼ','ゾ',
        'サ','シ','ス','セ','ソ',  'ダ','ヂ','ヅ','デ','ド',
        'タ','チ','ツ','テ','ト',  'バ','ビ','ブ','ベ','ボ',
        'ナ','ニ','ヌ','ネ','ノ',  'パ','ピ','プ','ペ','ポ',
        'ハ','ヒ','フ','ヘ','ホ',  'ァ','ィ','ゥ','ェ','ォ',
        'マ','ミ','ム','メ','モ',  'ッ','ャ','ュ','ョ','ヮ',
        'ヤ','ユ','ヨ','ワ','ン',  'ー','～','・','＝','☆',
        'ラ','リ','ル','レ','ロ',  'ヴ','ヲ','　','英数','決定',
    ];
    type NameInputFullwidthLatin = [
        'Ａ','Ｂ','Ｃ','Ｄ','Ｅ',  'ａ','ｂ','ｃ','ｄ','ｅ',
        'Ｆ','Ｇ','Ｈ','Ｉ','Ｊ',  'ｆ','ｇ','ｈ','ｉ','ｊ',
        'Ｋ','Ｌ','Ｍ','Ｎ','Ｏ',  'ｋ','ｌ','ｍ','ｎ','ｏ',
        'Ｐ','Ｑ','Ｒ','Ｓ','Ｔ',  'ｐ','ｑ','ｒ','ｓ','ｔ',
        'Ｕ','Ｖ','Ｗ','Ｘ','Ｙ',  'ｕ','ｖ','ｗ','ｘ','ｙ',
        'Ｚ','［','］','＾','＿',  'ｚ','｛','｝','｜','～',
        '０','１','２','３','４',  '！','＃','＄','％','＆',
        '５','６','７','８','９',  '（','）','＊','＋','－',
        '／','＝','＠','＜','＞',  '：','；','　','かな','決定',
    ];
}

declare class Window_Base extends Window {
    constructor(x?: number, y?: number, width?: number, height?: number);
    initialize(): void;
    initialize(x?: number, y?: number, width?: number, height?: number): void;
    _opening: boolean;
    _closing: boolean;
    _dimmerSprite: Sprite;

    static _iconWidth: number;
    static _iconHeight: number;
    static _faceWidth: number;
    static _faceHeight: number;

    lineHeight(): number;
    standardFontFace(): string;
    standardFontSize(): number;
    standardPadding(): number;
    textPadding(): number;
    standardBackOpacity(): number;
    loadWindowskin(): void;
    updatePadding(): void;
    updateBackOpacity(): void;
    contentsWidth(): number;
    contentsHeight(): number;
    fittingHeight(numLines: number): number;
    updateTone(): void;
    createContents(): void;
    resetFontSettings(): void;
    resetTextColor(): void;
    update(): void;
    updateOpen(): void;
    updateClose(): void;
    open(): void;
    close(): void;
    isOpening(): boolean;
    isClosing(): boolean;
    show(): void;
    hide(): void;
    activate(): void;
    deactivate(): void;
    textColor(n: number): string;
    normalColor(): string;
    systemColor(): string;
    crisisColor(): string;
    deathColor(): string;
    gaugeBackColor(): string;
    hpGaugeColor1(): string;
    hpGaugeColor2(): string;
    mpGaugeColor1(): string;
    mpGaugeColor2(): string;
    mpCostColor(): string;
    powerUpColor(): string;
    powerDownColor(): string;
    tpGaugeColor1(): string;
    tpGaugeColor2(): string;
    tpCostColor(): string;
    pendingColor(): string;
    translucentOpacity(): number;
    changeTextColor(color: string): void;
    changePaintOpacity(enabled: boolean): void;
    drawText(text: string, x: number, y: number, maxWidth?: number, align?: string): void;
    textWidth(text: string): number;
    drawTextEx(text: string, x: number, y: number): number;
    convertEscapeCharacters(text: string): string;
    actorName(n: number): string;
    partyMemberName(n: number): string;
    processCharacter(textState: RPGMakerMV.TextState): void;
    processNormalCharacter(textState: RPGMakerMV.TextState): void;
    processNewLine(textState: RPGMakerMV.TextState): void;
    processNewPage(textState: RPGMakerMV.TextState): void;
    obtainEscapeCode(textState: RPGMakerMV.TextState): string;
    obtainEscapeParam(textState: RPGMakerMV.TextState): string;
    processEscapeCharacter(code: string, textState: RPGMakerMV.TextState): void;
    processDrawIcon(iconIndex: number, textState: RPGMakerMV.TextState): void;
    makeFontBigger(): void;
    makeFontSmaller(): void;
    calcTextHeight(textState: RPGMakerMV.TextState, all: boolean): number;
    drawIcon(iconIndex: number, x: number, y: number): void;
    drawFace(faceName: string, faceIndex: number, x: number, y: number, width?: number, height?: number): void;
    drawCharacter(characterName: string, characterIndex: number, x: number, y: number): void;
    drawGauge(x: number, y: number, width: number, rate: number, color1: string, color2: string): void;
    hpColor(actor: Game_Battler): string;
    mpColor(actor: Game_Battler): string;
    tpColor(actor: Game_Battler): string;
    drawActorCharacter(actor: Game_Actor, x: number, y: number): void;
    drawActorFace(actor: Game_Actor, x: number, y: number, width?: number, height?: number): void;
    drawActorName(actor: Game_Actor, x: number, y: number, width?: number): void;
    drawActorClass(actor: Game_Actor, x: number, y: number, width?: number): void;
    drawActorNickname(actor: Game_Actor, x: number, y: number, width?: number): void;
    drawActorLevel(actor: Game_Actor, x: number, y: number): void;
    drawActorIcons(actor: Game_Actor, x: number, y: number, width?: number): void;
    drawCurrentAndMax(current: number, max: number, x: number, y: number, width: number, color1: string, color2: string): void;
    drawActorHp(actor: Game_Actor, x: number, y: number, width?: number): void;
    drawActorMp(actor: Game_Actor, x: number, y: number, width?: number): void;
    drawActorTp(actor: Game_Actor, x: number, y: number, width?: number): void;
    drawActorSimpleStatus(actor: Game_Actor, x: number, y: number, width: number): void;
    drawItemName(item: RPGMakerMV.DataAnyItem | RPGMakerMV.DataSkill, x: number, y: number, width?: number): void;
    drawCurrencyValue(value: number, unit: string, x: number, y: number, width: number): void;
    paramchangeTextColor(change: number): string;
    setBackgroundType(type: number): void;
    showBackgroundDimmer(): void;
    hideBackgroundDimmer(): void;
    updateBackgroundDimmer(): void;
    refreshDimmerBitmap(): void;
    dimColor1(): string;
    dimColor2(): string;
    canvasToLocalX(x: number): number;
    canvasToLocalY(y: number): number;
    reserveFaceImages(): void;
}

declare class Window_Selectable extends Window_Base {
    constructor(x?: number, y?: number, width?: number, height?: number);
    initialize(): void;
    initialize(x?: number, y?: number, width?: number, height?: number): void;

    _index: number;
    _cursorFixed: boolean;
    _cursorAll: boolean;
    _stayCount: number;
    _helpWindow: Window_Help;
    _handlers: { [key: string]: Function };
    _touching: boolean;
    _scrollX: number;
    _scrollY: number;

    index(): number;
    cursorFixed(): boolean;
    setCursorFixed(cursorFixed: boolean): void;
    cursorAll(): boolean;
    setCursorAll(cursorAll: boolean): void;
    maxCols(): number;
    maxItems(): number;
    spacing(): number;
    itemWidth(): number;
    itemHeight(): number;
    maxRows(): number;
    activate(): void;
    deactivate(): void;
    select(index: number): void;
    deselect(): void;
    reselect(): void;
    row(): number;
    topRow(): number;
    maxTopRow(): number;
    setTopRow(row: number): void;
    resetScroll(): void;
    maxPageRows(): number;
    maxPageItems(): number;
    isHorizontal(): boolean;
    bottomRow(): number;
    setBottomRow(row: number): void;
    topIndex(): number;
    itemRect(index: number): Rectangle;
    itemRectForText(index: number): Rectangle;
    setHelpWindow(helpWindow: Window_Help): void;
    showHelpWindow(): void;
    hideHelpWindow(): void;
    setHandler(symbol: string, method: Function): void;
    isHandled(symbol: string): boolean;
    callHandler(symbol: string): void;
    isOpenAndActive(): boolean;
    isCursorMovable(): boolean;
    cursorDown(wrap: boolean): void;
    cursorUp(wrap: boolean): void;
    cursorRight(wrap: boolean): void;
    cursorLeft(wrap: boolean): void;
    cursorPagedown(): void;
    cursorPageup(): void;
    scrollDown(): void;
    scrollUp(): void;
    update(): void;
    updateArrows(): void;
    processCursorMove(): void;
    processHandling(): void;
    processWheel(): void;
    processTouch(): void;
    isTouchedInsideFrame(): boolean;
    onTouch(triggered: boolean): void;
    hitTest(x: number, y: number): number;
    isContentsArea(x: number, y: number): boolean;
    isTouchOkEnabled(): boolean;
    isOkEnabled(): boolean;
    isCancelEnabled(): boolean;
    isOkTriggered(): boolean;
    isCancelTriggered(): boolean;
    processOk(): void;
    playOkSound(): void;
    playBuzzerSound(): void;
    callOkHandler(): void;
    processCancel(): void;
    callCancelHandler(): void;
    processPageup(): void;
    processPagedown(): void;
    updateInputData(): void;
    updateCursor(): void;
    isCursorVisible(): boolean;
    ensureCursorVisible(): void;
    callUpdateHelp(): void;
    updateHelp(): void;
    setHelpWindowItem(item: RPGMakerMV.DataAnyItem | RPGMakerMV.DataSkill): void;
    isCurrentItemEnabled(): boolean;
    drawAllItems(): void;
    drawItem(index: number): void;
    clearItem(index: number): void;
    redrawItem(index: number): void;
    redrawCurrentItem(): void;
    refresh(): void;
}


declare class Window_Command extends Window_Selectable {
    constructor(x?: number, y?: number);
    initialize(): void;
    initialize(x?: number, y?: number): void;

    windowWidth(): number;
    windowHeight(): number;
    numVisibleRows(): number;
    maxItems(): number;
    clearCommandList(): void;
    _list: RPGMakerMV.DataCommand[];
    makeCommandList(): void;
    addCommand(name: string, symbol: string, enabled?: boolean, ext?: number): void;
    commandName(index: number): string;
    commandSymbol(index: number): string;
    isCommandEnabled(index: number): boolean;
    currentData(): RPGMakerMV.DataCommand;
    isCurrentItemEnabled(): boolean;
    currentSymbol(): string;
    currentExt(): number;
    findSymbol(symbol: string): number;
    selectSymbol(symbol: string): void;
    findExt(ext: number): number;
    selectExt(ext: number): void;
    drawItem(index: number): void;
    itemTextAlign(): string;
    isOkEnabled(): boolean;
    callOkHandler(): void;
    refresh(): void;
}

declare class Window_HorzCommand extends Window_Command {
    constructor(x?: number, y?: number);
    initialize(): void;
    initialize(x?: number, y?: number): void;
    numVisibleRows(): number;
    maxCols(): number;
    itemTextAlign(): string;
}

declare class Window_Help extends Window_Base {
    constructor(numLines?: number);
    initialize(): void;
    initialize(numLines?: number): void;
    _text: string;
    setText(text: string): void;
    clear(): void;
    setItem(item: RPGMakerMV.DataAnyItem | RPGMakerMV.DataSkill): void;
    refresh(): void;
}

declare class Window_Gold extends Window_Base {
    constructor(x?: number, y?: number);
    initialize(): void;
    initialize(x?: number, y?: number): void;
    windowWidth(): number;
    windowHeight(): number;
    refresh(): void;
    value(): number;
    currencyUnit(): string;
    open(): void;
}

declare class Window_MenuCommand extends Window_Command {
    constructor(x?: number, y?: number);
    initialize(): void;
    initialize(x?: number, y?: number): void;

    static _lastCommandSymbol: string;
    static initCommandPosition(): void;

    windowWidth(): number;
    numVisibleRows(): number;
    makeCommandList(): void;
    addMainCommands(): void;
    addFormationCommand(): void;
    addOriginalCommands(): void;
    addOptionsCommand(): void;
    addSaveCommand(): void;
    addGameEndCommand(): void;
    needsCommand(name: string): boolean;
    areMainCommandsEnabled(): boolean;
    isFormationEnabled(): boolean;
    isOptionsEnabled(): boolean;
    isSaveEnabled(): boolean;
    isGameEndEnabled(): boolean;
    processOk(): void;
    selectLast(): void;
}

declare class Window_MenuStatus extends Window_Selectable {
    constructor(x?: number, y?: number);
    initialize(): void;
    initialize(x?: number, y?: number): void;

    _formationMode: boolean;
    _pendingIndex: number;

    windowWidth(): number;
    windowHeight(): number;
    maxItems(): number;
    itemHeight(): number;
    numVisibleRows(): number;
    loadImages(): void;
    drawItem(index: number): void;
    drawItemBackground(index: number): void;
    drawItemImage(index: number): void;
    drawItemStatus(index: number): void;
    processOk(): void;
    isCurrentItemEnabled(): boolean;
    selectLast(): void;
    formationMode(): boolean;
    setFormationMode(formationMode: boolean): void;
    pendingIndex(): number;
    setPendingIndex(index: number): void;
}

declare class Window_MenuActor extends Window_MenuStatus {
    constructor();
    initialize(): void;
    processOk(): void;
    selectLast(): void;
    selectForItem(item: RPGMakerMV.DataAnyItem | RPGMakerMV.DataSkill): void;
}

declare class Window_ItemCategory extends Window_HorzCommand {
    constructor();
    initialize(): void;
    _itemWindow: Window_ItemList;

    windowWidth(): number;
    maxCols(): number;
    update(): void;
    makeCommandList(): void;
    setItemWindow(itemWindow: Window_ItemList): void;
}

declare class Window_ItemList extends Window_Selectable {
    constructor(x?: number, y?: number, width?: number, height?: number);
    initialize(): void;
    initialize(x?: number, y?: number, width?: number, height?: number): void;
    _category: string;
    _data: RPGMakerMV.DataAnyItem[];

    setCategory(category: string): void;
    spacing(): number;
    maxItems(): number;
    item(): RPGMakerMV.DataAnyItem;
    isCurrentItemEnabled(): boolean;
    includes(item: RPGMakerMV.DataAnyItem): boolean;
    needsNumber(): number;
    isEnabled(item: RPGMakerMV.DataAnyItem): boolean;
    makeItemList(): void;
    selectLast(): void;
    drawItem(index: number): void;
    numberWidth(): number;
    drawItemNumber(item: RPGMakerMV.DataAnyItem, x: number, y: number, width: number): void;
    updateHelp(): void;
    refresh(): void;
}

declare class Window_SkillType extends Window_Command {
    constructor(x?: number, y?: number);
    initialize(): void;
    initialize(x?: number, y?: number): void;
    _actor: Game_Actor;
    _skillWindow: Window_SkillList;

    windowWidth(): number;
    setActor(actor: Game_Actor): void;
    numVisibleRows(): number;
    makeCommandList(): void;
    update(): void;
    setSkillWindow(skillWindow: Window_SkillList): void;
    selectLast(): void;
}

declare class Window_SkillStatus extends Window_Base {
    constructor(x?: number, y?: number, width?: number, height?: number);
    initialize(): void;
    initialize(x?: number, y?: number, width?: number, height?: number): void;
    _actor: Game_Actor;

    setActor(actor: Game_Actor): void;
    refresh(): void;
}

declare class Window_SkillList extends Window_Selectable {
    constructor(x?: number, y?: number, width?: number, height?: number);
    initialize(): void;
    initialize(x?: number, y?: number, width?: number, height?: number): void;
    _actor: Game_Actor;
    _stypeId: number;
    _data: RPGMakerMV.DataSkill[];

    setActor(actor: Game_Actor): void;
    setStypeId(stypeId: number): void;
    maxCols(): number;
    spacing(): number;
    maxItems(): number;
    item(): RPGMakerMV.DataSkill;
    isCurrentItemEnabled(): boolean;
    includes(item: RPGMakerMV.DataSkill): boolean;
    isEnabled(item: RPGMakerMV.DataSkill): boolean;
    makeItemList(): void;
    selectLast(): void;
    drawItem(index: number): void;
    costWidth(): number;
    drawSkillCost(skill: RPGMakerMV.DataSkill, x: number, y: number, width: number): void;
    updateHelp(): void;
    refresh(): void;
}

declare class Window_EquipStatus extends Window_Base {
    constructor(x?: number, y?: number);
    initialize(): void;
    initialize(x?: number, y?: number): void;
    _actor: Game_Actor;
    _tempActor: Game_Actor;

    windowWidth(): number;
    windowHeight(): number;
    numVisibleRows(): number;
    setActor(actor: Game_Actor): void;
    refresh(): void;
    setTempActor(tempActor: Game_Actor): void;
    drawItem(x: number, y: number, paramId: number): void;
    drawParamName(x: number, y: number, paramId: number): void;
    drawCurrentParam(x: number, y: number, paramId: number): void;
    drawRightArrow(x: number, y: number): void;
    drawNewParam(x: number, y: number, paramId: number): void;
}

declare class Window_EquipCommand extends Window_HorzCommand {
    constructor(x?: number, y?: number, width?: number);
    initialize(): void;
    initialize(x?: number, y?: number, width?: number): void;
    _windowWidth: number;

    windowWidth(): number;
    maxCols(): number;
    makeCommandList(): void;
}

declare class Window_EquipSlot extends Window_Selectable {
    constructor(x?: number, y?: number, width?: number, height?: number);
    initialize(): void;
    initialize(x?: number, y?: number, width?: number, height?: number): void;
    _actor: Game_Actor;

    setActor(actor: Game_Actor): void;
    update(): void;
    maxItems(): number;
    item(): RPGMakerMV.DataSkill;
    drawItem(index: number): void;
    slotName(index: number): string;
    isEnabled(index: number): boolean;
    isCurrentItemEnabled(): boolean;
    setStatusWindow(statusWindow: Window_EquipStatus): void;
    _statusWindow: Window_EquipStatus;
    setItemWindow(itemWindow: Window_EquipItem): void;
    _itemWindow: Window_EquipItem;
    updateHelp(): void;
}

declare class Window_EquipItem extends Window_ItemList {
    constructor(x?: number, y?: number, width?: number, height?: number);
    initialize(): void;
    initialize(x?: number, y?: number, width?: number, height?: number): void;
    _actor: Game_Actor;
    _slotId: number;

    setActor(actor: Game_Actor): void;
    setSlotId(slotId: number): void;
    includes(item: RPGMakerMV.DataAnyItem): boolean;
    isEnabled(item: RPGMakerMV.DataAnyItem): boolean;
    selectLast(): void;
    setStatusWindow(statusWindow: Window_EquipStatus): void;
    _statusWindow: Window_EquipStatus;
    updateHelp(): void;
    playOkSound(): void;
}

declare class Window_Status extends Window_Selectable {
    constructor();
    initialize(): void;
    _actor: Game_Actor;
    setActor(actor: Game_Actor): void;
    refresh(): void;
    drawBlock1(y: number): void;
    drawBlock2(y: number): void;
    drawBlock3(y: number): void;
    drawBlock4(y: number): void;
    drawHorzLine(y: number): void;
    lineColor(): string;
    drawBasicInfo(x: number, y: number): void;
    drawParameters(x: number, y: number): void;
    drawExpInfo(x: number, y: number): void;
    drawEquipments(x: number, y: number): void;
    drawProfile(x: number, y: number): void;
    maxEquipmentLines(): number;
}

declare class Window_Options extends Window_Command {
    constructor();
    initialize(): void;
    windowWidth(): number;
    windowHeight(): number;
    updatePlacement(): void;
    makeCommandList(): void;
    addGeneralOptions(): void;
    addVolumeOptions(): void;
    drawItem(index: number): void;
    statusWidth(): number;
    statusText(index: number): string;
    isVolumeSymbol(symbol: string): boolean;
    booleanStatusText(value: number): string;
    volumeStatusText(value: number): string;
    processOk(): void;
    cursorRight(wrap: boolean): void;
    cursorLeft(wrap: boolean): void;
    volumeOffset(): number;
    changeValue(symbol: string, value: number): void;
    getConfigValue(symbol: string): number | boolean;
    setConfigValue(symbol: string, volume: number | boolean): void;
}

declare class Window_SavefileList extends Window_Selectable {
    constructor(x?: number, y?: number, width?: number, height?: number);
    initialize(): void;
    initialize(x?: number, y?: number, width?: number, height?: number): void;
    _mode: string;
    setMode(mode: string): void;
    maxItems(): number;
    maxVisibleItems(): number;
    itemHeight(): number;
    drawItem(index: number): void;
    drawFileId(id: number, x: number, y: number): void;
    drawContents(info: RPGMakerMV.SavefileInfo, rect: Rectangle, valid: boolean): void;
    drawGameTitle(info: RPGMakerMV.SavefileInfo, x: number, y: number, width: number): void;
    drawPartyCharacters(info: RPGMakerMV.SavefileInfo, x: number, y: number): void;
    drawPlaytime(info: RPGMakerMV.SavefileInfo, x: number, y: number, width: number): void;
    playOkSound(): void;
}

declare class Window_ShopCommand extends Window_HorzCommand {
    constructor(width?: number, purchaseOnly?: boolean);
    initialize(): void;
    initialize(width?: number, purchaseOnly?: boolean): void;
    _windowWidth: number;
    _purchaseOnly: boolean;
    windowWidth(): number;
    maxCols(): number;
    makeCommandList(): void;
}

declare class Window_ShopBuy extends Window_Selectable {
    constructor(x?: number, y?: number, height?: number, shopGoods?: any[][]);
    initialize(): void;
    initialize(x?: number, y?: number, height?: number, shopGoods?: any[][]): void;
    _shopGoods: any[][];
    _money: number;
    windowWidth(): number;
    maxItems(): number;
    item(): RPGMakerMV.DataAnyItem;
    setMoney(money: number): void;
    isCurrentItemEnabled(): boolean;
    price(item: RPGMakerMV.DataAnyItem): number;
    isEnabled(item: RPGMakerMV.DataAnyItem): boolean;
    refresh(): void;
    makeItemList(): void;
    _data: RPGMakerMV.DataAnyItem[];
    _price: number[];
    drawItem(index: number): void;
    setStatusWindow(statusWindow: Window_EquipStatus): void;
    _statusWindow: Window_EquipStatus;
    updateHelp(): void;
}

declare class Window_ShopSell extends Window_ItemList {
    constructor(x?: number, y?: number, width?: number, height?: number);
    initialize(): void;
    initialize(x?: number, y?: number, width?: number, height?: number): void;
    isEnabled(item: RPGMakerMV.DataAnyItem): boolean;
}

declare class Window_ShopNumber extends Window_Selectable {
    constructor(x?: number, y?: number, height?: number);
    initialize(): void;
    initialize(x?: number, y?: number, height?: number): void;
    _item: RPGMakerMV.DataAnyItem;
    _max: number;
    _price: number;
    _number: number;
    _currencyUnit: string;
    windowWidth(): number;
    number(): number;
    setup(item: RPGMakerMV.DataAnyItem, max: number, price: number): void;
    setCurrencyUnit(currencyUnit: string): void;
    createButtons(): void;
    _buttons: Sprite_Button[];
    placeButtons(): void;
    updateButtonsVisiblity(): void;
    showButtons(): void;
    hideButtons(): void;
    refresh(): void;
    drawMultiplicationSign(): void;
    drawNumber(): void;
    drawTotalPrice(): void;
    itemY(): number;
    priceY(): number;
    buttonY(): number;
    cursorWidth(): number;
    cursorX(): number;
    maxDigits(): number;
    update(): void;
    isOkTriggered(): boolean;
    playOkSound(): void;
    processNumberChange(): void;
    changeNumber(amount: number): void;
    updateCursor(): void;
    onButtonUp(): void;
    onButtonUp2(): void;
    onButtonDown(): void;
    onButtonDown2(): void;
    onButtonOk(): void;
}

declare class Window_ShopStatus extends Window_Base {
    constructor(x?: number, y?: number, width?: number, height?: number);
    initialize(): void;
    initialize(x?: number, y?: number, width?: number, height?: number): void;
    _item: RPGMakerMV.DataAnyItem;
    _pageIndex: number;
    refresh(): void;
    setItem(item: RPGMakerMV.DataAnyItem): void;
    isEquipItem(): boolean;
    drawPossession(x: number, y: number): void;
    drawEquipInfo(x: number, y: number): void;
    statusMembers(): Game_Actor[];
    pageSize(): number;
    maxPages(): number;
    drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void;
    drawActorParamChange(x: number, y: number, actor: Game_Actor, item1: RPGMakerMV.DataAnyItem): void;
    currentEquippedItem(actor: Game_Actor, etypeId: number): RPGMakerMV.DataAnyItem;
    update(): void;
    updatePage(): void;
    isPageChangeEnabled(): boolean;
    isPageChangeRequested(): boolean;
    isTouchedInsideFrame(): boolean;
    changePage(): void;
}

declare class Window_NameEdit extends Window_Base {
    constructor(actor?: Game_Actor, maxLength?: number);
    initialize(): void;
    initialize(actor?: Game_Actor, maxLength?: number): void;
    _actor: Game_Actor;
    _name: string;
    _index: number;
    _maxLength: number;
    _defaultName: string;
    windowWidth(): number;
    windowHeight(): number;
    restoreDefault(): boolean;
    add(ch: string): boolean;
    back(): boolean;
    faceWidth(): number;
    charWidth(): number;
    left(): number;
    itemRect(index: number): { x: number, y: number, width: number, height: number };
    underlineRect(index: number): { x: number, y: number, width: number, height: number };
    underlineColor(): void;
    drawUnderline(index: number): void;
    drawChar(index: number): void;
    refresh(): void;
}

declare class Window_NameInput extends Window_Selectable {
    constructor(editWindow?: Window_NameEdit);

    static LATIN1: RPGMakerMV.NameInputLatin1;
    static LATIN2: RPGMakerMV.NameInputLatin2;
    static RUSSIA: RPGMakerMV.NameInputCyrillic;
    static JAPAN1: RPGMakerMV.NameInputHiragana;
    static JAPAN2: RPGMakerMV.NameInputKatakana;
    static JAPAN3: RPGMakerMV.NameInputFullwidthLatin;

    initialize(): void;
    initialize(editWindow?: Window_NameEdit): void;
    _editWindow: Window_NameEdit;
    _page: number;
    _index: number;

    windowHeight(): number;
    table(): string[][];
    maxCols(): number;
    maxItems(): number;
    character(): string;
    isPageChange(): boolean;
    isOk(): boolean;
    itemRect(index: number): Rectangle;
    itemRect(index: number): { x: number, y: number, width: number, height: number };
    refresh(): void;
    updateCursor(): void;
    isCursorMovable(): boolean;
    cursorDown(wrap: boolean): void;
    cursorUp(wrap: boolean): void;
    cursorRight(wrap: boolean): void;
    cursorLeft(wrap: boolean): void;
    cursorPagedown(): void;
    cursorPageup(): void;
    processCursorMove(): void;
    processHandling(): void;
    isCancelEnabled(): boolean;
    processCancel(): void;
    processJump(): void;
    processBack(): void;
    processOk(): void;
    onNameAdd(): void;
    onNameOk(): void;
}

declare class Window_ChoiceList extends Window_Command {
    constructor(messageWindow?: Window_Message);
    initialize(): void;
    initialize(messageWindow?: Window_Message): void;
    _messageWindow: Window_Message;
    _background: number;

    start(): void;
    selectDefault(): void;
    updatePlacement(): void;
    updateBackground(): void;
    windowWidth(): number;
    numVisibleRows(): number;
    maxChoiceWidth(): number;
    textWidthEx(text: string): number;
    contentsHeight(): number;
    makeCommandList(): void;
    drawItem(index: number): void;
    isCancelEnabled(): boolean;
    isOkTriggered(): boolean;
    callOkHandler(): void;
    callCancelHandler(): void;
}

declare class Window_NumberInput extends Window_Selectable {
    constructor(messageWindow?: Window_Message);
    initialize(): void;
    initialize(messageWindow?: Window_Message): void;
    _messageWindow: Window_Message;
    _number: number;
    _maxDigits: number;
    _buttons: Sprite_Button[];

    start(): void;
    updatePlacement(): void;
    windowWidth(): number;
    windowHeight(): number;
    maxCols(): number;
    maxItems(): number;
    spacing(): number;
    itemWidth(): number;
    createButtons(): void;
    placeButtons(): void;
    updateButtonsVisiblity(): void;
    showButtons(): void;
    hideButtons(): void;
    buttonY(): number;
    update(): void;
    processDigitChange(): void;
    changeDigit(up: boolean): void;
    isTouchOkEnabled(): boolean;
    isOkEnabled(): boolean;
    isCancelEnabled(): boolean;
    isOkTriggered(): boolean;
    processOk(): void;
    drawItem(index: number): void;
    onButtonUp(): void;
    onButtonDown(): void;
    onButtonOk(): void;
}

declare class Window_EventItem extends Window_ItemList {
    constructor(messageWindow?: Window_Message);
    initialize(): void;
    initialize(messageWindow?: Window_Message): void;
    _messageWindow: Window_Message;

    windowHeight(): number;
    numVisibleRows(): number;
    start(): void;
    updatePlacement(): void;
    includes(item: RPGMakerMV.DataAnyItem): boolean;
    isEnabled(item: RPGMakerMV.DataAnyItem): boolean;
    onOk(): void;
    onCancel(): void;
}

declare class Window_Message extends Window_Base {
    constructor();
    initialize(): void;
    initMembers(): void;
    _background: number;
    _positionType: number;
    _waitCount: number;
    _faceBitmap: Bitmap;
    _textState: RPGMakerMV.TextState;

    subWindows(): Window_Base[];
    createSubWindows(): void;
    _goldWindow: Window_Gold;
    _choiceWindow: Window_ChoiceList;
    _numberWindow: Window_NumberInput;
    _itemWindow: Window_EventItem;
    windowWidth(): number;
    windowHeight(): number;
    clearFlags(): void;
    _showFast: boolean;
    _lineShowFast: boolean;
    _pauseSkip: boolean;
    numVisibleRows(): number;
    update(): void;
    checkToNotClose(): void;
    canStart(): boolean;
    startMessage(): void;
    updatePlacement(): void;
    updateBackground(): void;
    terminateMessage(): void;
    updateWait(): void;
    updateLoading(): void;
    updateInput(): void;
    isAnySubWindowActive(): boolean;
    updateMessage(): boolean;
    onEndOfText(): void;
    startInput(): boolean;
    isTriggered(): boolean;
    doesContinue(): boolean;
    areSettingsChanged(): boolean;
    updateShowFast(): void;
    newPage(textState: RPGMakerMV.TextState): void;
    loadMessageFace(): void;
    drawMessageFace(): void;
    newLineX(): number;
    processNewLine(textState: RPGMakerMV.TextState): void;
    processNewPage(textState: RPGMakerMV.TextState): void;
    isEndOfText(textState: RPGMakerMV.TextState): boolean;
    needsNewPage(textState: RPGMakerMV.TextState): boolean;
    processEscapeCharacter(code: string, textState: RPGMakerMV.TextState): void;
    startWait(count: number): void;
    startPause(): void;
}

declare class Window_ScrollText extends Window_Base {
    constructor();
    initialize(): void;
    _text: string;
    _allTextHeight: number;

    update(): void;
    startMessage(): void;
    refresh(): void;
    contentsHeight(): number;
    updateMessage(): void;
    scrollSpeed(): number;
    isFastForward(): boolean;
    fastForwardRate(): number;
    terminateMessage(): void;
}

declare class Window_MapName extends Window_Base {
    constructor();
    initialize(): void;
    _showCount: number;

    windowWidth(): number;
    windowHeight(): number;
    update(): void;
    updateFadeIn(): void;
    updateFadeOut(): void;
    open(): void;
    close(): void;
    refresh(): void;
    drawBackground(x: number, y: number, width: number, height: number): void;
}

declare class Window_BattleLog extends Window_Selectable {
    constructor();
    initialize(): void;
    _lines: string[];
    _methods: { name: string, params: any[] }[];
    _waitCount: number;
    _waitMode: string;
    _baseLineStack: number[];
    _spriteset: Spriteset_Battle;

    setSpriteset(spriteset: Spriteset_Battle): void;
    windowWidth(): number;
    windowHeight(): number;
    maxLines(): number;
    createBackBitmap(): void;
    _backBitmap: Bitmap;
    createBackSprite(): void;
    _backSprite: Sprite;
    numLines(): number;
    messageSpeed(): number;
    isBusy(): boolean;
    update(): void;
    updateWait(): number;
    updateWaitCount(): number;
    updateWaitMode(): number;
    setWaitMode(waitMode: string): void;
    callNextMethod(): void;
    isFastForward(): boolean;
    push(methodName: string, ...args: any[]): void;
    clear(): void;
    wait(): void;
    waitForEffect(): void;
    waitForMovement(): void;
    addText(text: string): void;
    pushBaseLine(): void;
    popBaseLine(): void;
    waitForNewLine(): void;
    popupDamage(target: Game_Battler): void;
    performActionStart(subject: Game_Battler, action: Game_Action): void;
    performAction(subject: Game_Battler, action: Game_Action): void;
    performActionEnd(subject: Game_Battler): void;
    performDamage(target: Game_Battler): void;
    performMiss(target: Game_Battler): void;
    performRecovery(target: Game_Battler): void;
    performEvasion(target: Game_Battler): void;
    performMagicEvasion(target: Game_Battler): void;
    performCounter(target: Game_Battler): void;
    performReflection(target: Game_Battler): void;
    performSubstitute(substitute: Game_Battler, target: Game_Battler): void;
    performCollapse(target: Game_Battler): void;
    showAnimation(subject: Game_Battler, targets: Game_Battler[], animationId: number): void;
    showAttackAnimation(subject: Game_Battler, targets: Game_Battler[]): void;
    showActorAttackAnimation(subject: Game_Battler, targets: Game_Battler[]): void;
    showEnemyAttackAnimation(subject: Game_Battler, targets: Game_Battler[]): void;
    showNormalAnimation(targets: Game_Battler[], animationId: number, mirror: boolean): void;
    animationBaseDelay(): number;
    animationNextDelay(): number;
    refresh(): void;
    drawBackground(): void;
    backRect(): { x: number, y: number, width: number, height: number };
    backColor(): string;
    backPaintOpacity(): number;
    drawLineText(index: number): void;
    startTurn(): void;
    startAction(subject: Game_Battler, action: Game_Action, targets: Game_Battler[]): void;
    endAction(subject: Game_Battler): void;
    displayCurrentState(subject: Game_Battler): void;
    displayRegeneration(subject: Game_Battler): void;
    displayAction(subject: Game_Battler, item: RPGMakerMV.DataAnyItem | RPGMakerMV.DataSkill): void;
    displayCounter(target: Game_Battler): void;
    displayReflection(target: Game_Battler): void;
    displaySubstitute(substitute: Game_Battler, target: Game_Battler): void;
    displayActionResults(substitute: Game_Battler, target: Game_Battler): void;
    displayFailure(target: Game_Battler): void;
    displayCritical(target: Game_Battler): void;
    displayDamage(target: Game_Battler): void;
    displayMiss(target: Game_Battler): void;
    displayEvasion(target: Game_Battler): void;
    displayHpDamage(target: Game_Battler): void;
    displayMpDamage(target: Game_Battler): void;
    displayTpDamage(target: Game_Battler): void;
    displayAffectedStatus(target: Game_Battler): void;
    displayAutoAffectedStatus(target: Game_Battler): void;
    displayChangedStates(target: Game_Battler): void;
    displayAddedStates(target: Game_Battler): void;
    displayRemovedStates(target: Game_Battler): void;
    displayChangedBuffs(target: Game_Battler): void;
    displayBuffs(target: Game_Battler, buffs: number[], fmt: string): void;
    makeHpDamageText(target: Game_Battler): void;
    makeMpDamageText(target: Game_Battler): void;
    makeTpDamageText(target: Game_Battler): void;
}

declare class Window_PartyCommand extends Window_Command {
    constructor();
    initialize(): void;
    windowWidth(): number;
    numVisibleRows(): number;
    makeCommandList(): void;
    setup(): void;
}

declare class Window_ActorCommand extends Window_Command {
    constructor();
    initialize(): void;
    _actor: Game_Actor;

    windowWidth(): number;
    numVisibleRows(): number;
    makeCommandList(): void;
    addAttackCommand(): void;
    addSkillCommands(): void;
    addGuardCommand(): void;
    addItemCommand(): void;
    setup(actor: Game_Actor): void;
    processOk(): void;
    selectLast(): void;
}

declare class Window_BattleStatus extends Window_Selectable {
    constructor();
    initialize(): void;
    windowWidth(): number;
    windowHeight(): number;
    numVisibleRows(): number;
    maxItems(): number;
    refresh(): void;
    drawItem(index: number): void;
    basicAreaRect(index: number): void;
    gaugeAreaRect(index: number): void;
    gaugeAreaWidth(): number;
    drawBasicArea(rect: { x: number, y: number, width: number, height: number }, actor: Game_Actor): void;
    drawGaugeArea(rect: { x: number, y: number, width: number, height: number }, actor: Game_Actor): void;
    drawGaugeAreaWithTp(rect: { x: number, y: number, width: number, height: number }, actor: Game_Actor): void;
    drawGaugeAreaWithoutTp(rect: { x: number, y: number, width: number, height: number }, actor: Game_Actor): void;
}

declare class Window_BattleActor extends Window_BattleStatus {
    constructor(x?: number, y?: number);
    initialize(): void;
    initialize(x?: number, y?: number): void;
    show(): void;
    hide(): void;
    select(index: number): void;
    actor(): Game_Actor;
}

declare class Window_BattleEnemy extends Window_Selectable {
    constructor(x?: number, y?: number);
    initialize(): void;
    initialize(x?: number, y?: number): void;
    _enemies: Game_Enemy[];

    windowWidth(): number;
    windowHeight(): number;
    numVisibleRows(): number;
    maxCols(): number;
    maxItems(): number;
    enemy(): Game_Enemy;
    enemyIndex(): number;
    drawItem(index: number): void;
    show(): void;
    hide(): void;
    refresh(): void;
    select(index: number): void;
}

declare class Window_BattleSkill extends Window_SkillList {
    constructor(x?: number, y?: number, width?: number, height?: number);
    initialize(): void;
    initialize(x?: number, y?: number, width?: number, height?: number): void;
    show(): void;
    hide(): void;
}

declare class Window_BattleItem extends Window_ItemList {
    constructor(x?: number, y?: number, width?: number, height?: number);
    initialize(): void;
    initialize(x?: number, y?: number, width?: number, height?: number): void;
    includes(item: RPGMakerMV.DataAnyItem): boolean;
    show(): void;
    hide(): void;
}

declare class Window_TitleCommand extends Window_Command {
    constructor();
    initialize(): void;

    static _lastCommandSymbol: string;
    static initCommandPosition(): void;

    windowWidth(): number;
    updatePlacement(): void;
    makeCommandList(): void;
    isContinueEnabled(): boolean;
    processOk(): void;
    selectLast(): void;
}

declare class Window_GameEnd extends Window_Command {
    constructor();
    initialize(): void;
    windowWidth(): number;
    updatePlacement(): void;
    makeCommandList(): void;
}

declare class Window_DebugRange extends Window_Selectable {
    constructor(x?: number, y?: number);
    initialize(): void;
    initialize(x?: number, y?: number): void;
    _maxSwitches: number;
    _maxVariables: number;

    windowWidth(): number;
    windowHeight(): number;
    maxItems(): number;
    update(): void;
    mode(): string;
    topId(): number;
    refresh(): void;
    drawItem(index: number): void;
    isCancelTriggered(): boolean;
    processCancel(): void;
    setEditWindow(editWindow: Window_DebugEdit): void;
    _editWindow: Window_DebugEdit;
}

declare class Window_DebugEdit extends Window_Selectable {
    constructor(x?: number, y?: number, width?: number);
    initialize(): void;
    initialize(x?: number, y?: number, width?: number): void;
    _mode: string;
    _topId: number;
    maxItems(): number;
    refresh(): void;
    drawItem(index: number): void;
    itemName(dataId: number): string;
    itemStatus(dataId: number): void;
    setMode(mode: string): void;
    setTopId(id: number): void;
    currentId(): number;
    update(): void;
    updateSwitch(): void;
    updateVariable(): void;
}

//-----------------------------------------------------------------------------
// Window_Base
declare namespace Window_Base {
  type DrawableItem = {
    iconIndex: number
    name: string
    description: string
  }

  type TextState = {
    text: string
    index: number
    x: number
    y: number
    width: number
    height: number
    startX: number
    startY: number
    rtl: boolean
    buffer: string
    drawing: boolean
    outputWidth: number
    outputHeight: number
  }
}
declare class Window_Base extends Window{
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  _opening: boolean
  _closing: boolean
  _dimmerSprite: Sprite | null

  destroy(options?: {
    children?: boolean
    texture?: boolean
    baseTexture?: boolean
  }): void
  checkRectObject(rect: Rectangle): void
  lineHeight(): number
  itemWidth(): number
  itemHeight(): number
  itemPadding(): number
  baseTextRect(): Rectangle
  loadWindowskin(): void
  updatePadding(): void
  updateBackOpacity(): void
  fittingHeight(numLines: number): number
  updateTone(): void
  createContents(): void
  destroyContents(): void
  contentsWidth(): number
  contentsHeight(): number
  resetFontSettings(): void
  resetTextColor(): void
  update(): void
  updateOpen(): void
  updateClose(): void
  open(): void
  close(): void
  isOpening(): boolean
  isClosing(): boolean
  show(): void
  hide(): void
  activate(): void
  deactivate(): void
  systemColor(): string
  translucentOpacity(): number
  changeTextColor(color: string): void
  changeOutlineColor(color: string): void
  changePaintOpacity(enabled: boolean): void
  drawRect(x: number, y: number, width: number, height: number): void
  drawText(text: Stringifiable, x: number, y: number, maxWidth: number, align: string): void
  textWidth(text: string): number
  drawTextEx(text: string, x: number, y: number, width: number): number
  textSizeEx(text: string): { width: number, height: number }
  createTextState(text: string, x: number, y: number, width: number): Window_Base.TextState
  processAllText(textState: Window_Base.TextState): void
  flushTextState(textState: Window_Base.TextState): void
  createTextBuffer(rtl: boolean): string
  convertEscapeCharacters(text: string): string
  actorName(n: number): string
  partyMemberName(n: number): string
  processCharacter(textState: Window_Base.TextState): void
  processControlCharacter(textState: Window_Base.TextState, c: string): void
  processNewLine(textState: Window_Base.TextState): void
  obtainEscapeCode(textState: Window_Base.TextState): void
  obtainEscapeParam(textState: Window_Base.TextState): number | string
  processEscapeCharacter(code: string, textState: Window_Base.TextState): void
  processColorChange(colorIndex: number): void
  processDrawIcon(iconIndex: number, textState: Window_Base.TextState): void
  makeFontBigger(): void
  makeFontSmaller(): void
  calcTextHeight(textState: Window_Base.TextState): number
  maxFontSizeInLine(line: string): number
  drawIcon(iconIndex: number, x: number, y: number): void
  drawFace(faceName: string, faceIndex: number, x: number, y: number, width: number, height: number): void
  drawCharacter(characterName: string, characterIndex: number, x: number, y: number): void
  drawItemName(
    item: Window_Base.DrawableItem,
    x: number,
    y: number,
    width: number,
  ): void
  drawCurrencyValue(value: Stringifiable, unit: string, x: number, y: number, width: number): void
  setBackgroundType(type: number): void
  showBackgroundDimmer(): void
  createDimmerSprite(): void
  hideBackgroundDimmer(): void
  updateBackgroundDimmer(): void
  refreshDimmerBitmap(): void
  playCursorSound(): void
  playOkSound(): void
  playBuzzerSound(): void
}

//-----------------------------------------------------------------------------
// Window_Scrollable
declare class Window_Scrollable extends Window_Base{
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  _scrollX: number
  _scrollY: number
  _scrollBaseX: number
  _scrollBaseY: number
  clearScrollStatus(): void
  _scrollTargetX: number
  _scrollTargetY: number
  _scrollDuration: number
  _scrollAccelX: number
  _scrollAccelY: number
  _scrollTouching: boolean
  _scrollLastTouchX: number
  _scrollLastTouchY: number
  _scrollLastCursorVisible: boolean
  scrollX(): number
  scrollY(): number
  scrollBaseX(): number
  scrollBaseY(): number
  scrollTo(x: number, y: number): void
  scrollBy(x: number, y: number): void
  smoothScrollTo(x: number, y: number): void
  smoothScrollBy(x: number, y: number): void
  setScrollAccel(x: number, y: number): void
  overallWidth(): number
  overallHeight(): number
  maxScrollX(): number
  maxScrollY(): number
  scrollBlockWidth(): number
  scrollBlockHeight(): number
  smoothScrollDown(n: number): void
  smoothScrollUp(n: number): void
  update(): void
  processWheelScroll(): void
  processTouchScroll(): void
  isWheelScrollEnabled(): boolean
  isTouchScrollEnabled(): boolean
  isScrollEnabled(): boolean
  isTouchedInsideFrame(): boolean
  onTouchScrollStart(): void
  onTouchScroll(): void
  onTouchScrollEnd(): void
  updateSmoothScroll(): void
  updateScrollAccel(): void
  updateArrows(): void
  updateOrigin(): void
  updateScrollBase(baseX: number, baseY: number): void
  paint(): void
}

//-----------------------------------------------------------------------------
// Window_Selectable
declare class Window_Selectable extends Window_Scrollable{
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  _index: number
  _cursorFixed: boolean
  _cursorAll: boolean
  _helpWindow: Window_Help
  _handlers: { [key: string]: VoidFunction }
  _doubleTouch: boolean
  _canRepeat: boolean
  index(): number
  cursorFixed(): boolean
  setCursorFixed(cursorFixed: boolean): void
  cursorAll(): boolean
  setCursorAll(cursorAll: boolean): void
  maxCols(): number
  maxItems(): number
  colSpacing(): number
  rowSpacing(): number
  itemWidth(): number
  itemHeight(): number
  contentsHeight(): number
  maxRows(): number
  overallHeight(): number
  activate(): void
  deactivate(): void
  select(index: number): void
  forceSelect(index: number): void
  smoothSelect(index: number): void
  deselect(): void
  reselect(): void
  row(): number
  topRow(): number
  maxTopRow(): number
  setTopRow(row: number): void
  maxPageRows(): number
  maxPageItems(): number
  maxVisibleItems(): number
  isHorizontal(): boolean
  topIndex(): number
  itemRect(index: number): Rectangle
  itemRectWithPadding(index: number): Rectangle
  itemLineRect(index: number): Rectangle
  setHelpWindow(helpWindow: Window_Help): void
  showHelpWindow(): void
  hideHelpWindow(): void
  setHandler(symbol: string, method: VoidFunction): void
  isHandled(symbol: string): boolean
  callHandler(symbol: string): void
  isOpenAndActive(): boolean
  isCursorMovable(): boolean
  cursorDown(wrap: boolean): void
  cursorUp(wrap: boolean): void
  cursorRight(wrap: boolean): void
  cursorLeft(wrap: boolean): void
  cursorPagedown(): void
  cursorPageup(): void
  isScrollEnabled(): boolean
  update(): void
  processCursorMove(): void
  processHandling(): void
  processTouch(): void
  isHoverEnabled(): boolean
  onTouchSelect(trigger: boolean): void
  onTouchOk(): void
  onTouchCancel(): void
  hitIndex(): number
  hitTest(x: number, y: number): number
  isTouchOkEnabled(): boolean
  isOkEnabled(): boolean
  isCancelEnabled(): boolean
  isOkTriggered(): boolean
  isCancelTriggered(): boolean
  processOk(): void
  callOkHandler(): void
  processCancel(): void
  callCancelHandler(): void
  processPageup(): void
  processPagedown(): void
  updateInputData(): void
  ensureCursorVisible(smooth: boolean): void
  callUpdateHelp(): void
  updateHelp(): void
  setHelpWindowItem(item: Window_Base.DrawableItem): void
  isCurrentItemEnabled(): boolean
  drawAllItems(): void
  drawItem(index: number): void
  clearItem(index: number): void
  drawItemBackground(index: number): void
  drawBackgroundRect(rect: Rectangle): void
  redrawItem(index: number): void
  redrawCurrentItem(): void
  refresh(): void
  paint(): void
  refreshCursor(): void
  refreshCursorForAll(): void
}

//-----------------------------------------------------------------------------
// Window_Command
declare namespace Window_Command {
  type Command<T = null> = {
    name: string
    symbol: string
    enabled: boolean
    ext: T
  }
}
declare class Window_Command<T> extends Window_Selectable {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  maxItems(): number
  clearCommandList(): void
  _list: Window_Command.Command<T>[]
  makeCommandList(): void
  addCommand(name: string, symbol: string, enabled?: boolean, ext?: T): void
  commandName(index: number): string
  commandSymbol(index: number): string
  isCommandEnabled(index: number): boolean
  currentData(): Window_Command.Command<T>
  isCurrentItemEnabled(): boolean
  currentSymbol(): string
  currentExt(): T
  findSymbol(symbol: string): number
  selectSymbol(symbol: string): void
  findExt(ext: T): number
  selectExt(ext: T): void
  drawItem(index: number): void
  itemTextAlign(): string
  isOkEnabled(): boolean
  callOkHandler(): void
  refresh(): void
}

//-----------------------------------------------------------------------------
// Window_HorzCommand
declare class Window_HorzCommand<T> extends Window_Command<T> {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  maxCols(): number
  itemTextAlign(): string
}

//-----------------------------------------------------------------------------
// Window_Help
declare class Window_Help extends Window_Base{
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  setText(text: string): void
  clear(): void

  setItem(item: Window_Base.DrawableItem): void
  refresh (): void
}

//-----------------------------------------------------------------------------
// Window_Gold
declare class Window_Gold extends Window_Selectable {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  colSpacing(): number
  refresh(): void
  value(): number
  currencyUnit(): string
  open(): void
}

//-----------------------------------------------------------------------------
// Window_StatusBase
declare class Window_StatusBase extends Window_Selectable {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  loadFaceImages(): void
  refresh(): void
  hideAdditionalSprites(): void
  placeActorName(actor: Game_Actor, x: number, y: number): void
  placeStateIcon(actor: Game_Actor, x: number, y: number): void
  placeGauge(actor: Game_Actor, type: string, x: number, y: number): void
  createInnerSprite(key: string, spriteClass: new () => Sprite): Sprite
  placeTimeGauge(actor: Game_Actor, x: number, y: number): void
  placeBasicGauges(actor: Game_Actor, x: number, y: number): void
  gaugeLineHeight(): number
  drawActorCharacter(actor: Game_Actor, x: number, y: number): void
  drawActorFace(actor: Game_Actor, x: number, y: number, width: number, height: number): void
  drawActorName(actor: Game_Actor, x: number, y: number, width: number): void
  drawActorClass(actor: Game_Actor, x: number, y: number, width: number): void
  drawActorNickname(actor: Game_Actor, x: number, y: number, width: number): void
  drawActorLevel(actor: Game_Actor, x: number, y: number): void
  drawActorIcons(actor: Game_Actor, x: number, y: number, width: number): void
  drawActorSimpleStatus(actor: Game_Actor, x: number, y: number): void
  actorSlotName(actor: Game_Actor, index: number): string
}

//-----------------------------------------------------------------------------
// Window_MenuCommand
declare class Window_MenuCommand<T> extends Window_Command<T>{
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  static initCommandPosition(): void

  makeCommandList(): void
  addMainCommands(): void
  addFormationCommand(): void
  addOriginalCommands(): void
  addOptionsCommand(): void
  addSaveCommand(): void
  addGameEndCommand(): void
  needsCommand(name: string): boolean
  areMainCommandsEnabled(): boolean
  isFormationEnabled(): boolean
  isOptionsEnabled(): boolean
  isSaveEnabled(): boolean
  isGameEndEnabled(): boolean
  processOk(): void
  selectLast(): void
}

//-----------------------------------------------------------------------------
// Window_MenuStatus
declare class Window_MenuStatus extends Window_StatusBase {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  maxItems(): number
  numVisibleRows(): number
  itemHeight(): number
  actor(index: number): Game_Actor
  drawItem(index: number): void
  drawPendingItemBackground(index: number): void
  drawItemImage(index: number): void
  drawItemStatus(index: number): void
  processOk(): void
  isCurrentItemEnabled(): boolean
  selectLast(): void
  formationMode(): boolean
  setFormationMode(formationMode: boolean): void
  pendingIndex(): number
  setPendingIndex(index: number): void
}

//-----------------------------------------------------------------------------
// Window_MenuActor
declare class Window_MenuActor extends Window_MenuStatus {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  processOk(): void
  selectLast(): void
  selectForItem(item: Record<string, any>): void
}

//-----------------------------------------------------------------------------
// Window_ItemCategory
declare class Window_ItemCategory<T> extends Window_HorzCommand<T> {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  maxCols(): number
  update(): void
  makeCommandList(): void
  needsCommand(name: string): boolean
  setItemWindow(itemWindow: Window_ItemList): void
  needsSelection(): boolean
}

//-----------------------------------------------------------------------------
// Window_ItemList
declare class Window_ItemList extends Window_Selectable {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  setCategory(category: string): void
  maxCols(): number
  colSpacing(): number
  maxItems(): number
  item(): Record<string, any>
  itemAt(index: number): Record<string, any>
  isCurrentItemEnabled(): boolean
  includes(item: Record<string, any>): boolean
  needsNumber(): boolean
  isEnabled(item: Record<string, any>): boolean
  makeItemList(): void
  selectLast(): void
  drawItem(index: number): void
  numberWidth(): number
  drawItemNumber(item: Record<string, any>, x: number, y: number, width: number): void
  updateHelp(): void
  refresh(): void
}

//-----------------------------------------------------------------------------
// Window_SkillType
declare class Window_SkillType extends Window_Command<number> {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  setActor(actor: Game_Actor): void
  makeCommandList(): void
  update(): void
  setSkillWindow(skillWindow: Window_SkillList): void
  selectLast(): void
}

//-----------------------------------------------------------------------------
// Window_SkillStatus
declare class Window_SkillStatus extends Window_StatusBase {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  setActor(actor: Game_Actor): void
  refresh(): void
}

//-----------------------------------------------------------------------------
// Window_SkillList
declare class Window_SkillList extends Window_Selectable {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  setActor(actor: Game_Actor): void
  setStypeId(stypeId: number): void
  maxCols(): number
  colSpacing(): number
  maxItems(): number
  item(): Record<string, any>
  itemAt(index: number): Record<string, any>
  isCurrentItemEnabled(): boolean
  includes(item: Record<string, any>): boolean
  isEnabled(item: Record<string, any>): boolean
  makeItemList(): void
  selectLast(): void
  drawItem(index: number): void
  costWidth(): number
  drawSkillCost(skill: Record<string, any>, x: number, y: number, width: number): void
  updateHelp(): void
  refresh(): void
}

//-----------------------------------------------------------------------------
// Window_EquipStatus
declare class Window_EquipStatus extends Window_StatusBase {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  setActor(actor: Game_Actor): void
  colSpacing(): number
  refresh(): void
  setTempActor(tempActor: Game_Actor): void
  drawAllParams(): void

  drawItem(index: number): never
  override drawItem(x: number, y: number, paramId: number): void

  drawParamName(x: number, y: number, paramId: number): void
  drawCurrentParam(x: number, y: number, paramId: number): void
  drawRightArrow(x: number, y: number): void
  drawNewParam(x: number, y: number, paramId: number): void
  rightArrowWidth(): number
  paramWidth(): number
  paramX(): number
  paramY(index: number): number
}

//-----------------------------------------------------------------------------
// Window_EquipCommand
declare class Window_EquipCommand<T> extends Window_HorzCommand<T> {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  maxCols(): number
  makeCommandList(): void
}

//-----------------------------------------------------------------------------
// Window_EquipSlot
declare class Window_EquipSlot extends Window_StatusBase {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  setActor(actor: Game_Actor): void
  update(): void
  maxItems(): number
  item(): Record<string, any>
  itemAt(index: number): Record<string, any>
  drawItem(index: number): void
  slotNameWidth(): number
  isEnabled(index: number): boolean
  isCurrentItemEnabled(): boolean
  setStatusWindow(statusWindow: Window_EquipStatus): void
  setItemWindow(itemWindow: Window_EquipItem): void
  updateHelp(): void
}

//-----------------------------------------------------------------------------
// Window_EquipItem
declare class Window_EquipItem extends Window_ItemList {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  maxCols(): number
  colSpacing(): number
  setActor(actor: Game_Actor): void
  setSlotId(slotId: number): void
  includes(item: Record<string, any>): boolean
  etypeId(): number
  isEnabled(/*item*/): boolean
  selectLast(): void
  setStatusWindow(statusWindow: Window_EquipStatus): void
  updateHelp(): void
  playOkSound(): void
}

//-----------------------------------------------------------------------------
// Window_Status
declare class Window_Status extends Window_StatusBase {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  setActor(actor: Game_Actor): void
  refresh(): void
  drawBlock1(): void
  block1Y(): number
  drawBlock2(): void
  block2Y(): number
  drawBasicInfo(x: number, y: number): void
  drawExpInfo(x: number, y: number): void
  expTotalValue(): number | string
  expNextValue(): number | string
}

//-----------------------------------------------------------------------------
// Window_StatusParams
declare class Window_StatusParams extends Window_StatusBase {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  setActor(actor: Game_Actor): void
  maxItems(): number
  itemHeight(): number
  drawItem(index: number): void
  drawItemBackground(/*index*/): void
}

//-----------------------------------------------------------------------------
// Window_StatusEquip
declare class Window_StatusEquip extends Window_StatusBase {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  setActor(actor: Game_Actor): void
  maxItems(): number
  itemHeight(): number
  drawItem(index: number): void
  drawItemBackground(/*index*/): void
}

//-----------------------------------------------------------------------------
// Window_Options
declare class Window_Options<T> extends Window_Command<T> {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  makeCommandList(): void
  addGeneralOptions(): void
  addVolumeOptions(): void
  drawItem(index: number): void
  statusWidth(): number
  statusText(index: number): string
  isVolumeSymbol(symbol: string): boolean
  booleanStatusText(value: boolean): string
  volumeStatusText(value: number): string
  processOk(): void
  cursorRight(): void
  cursorLeft(): void
  changeVolume(symbol: string, forward: boolean, wrap: boolean): void
  volumeOffset(): number
  changeValue(symbol: string, value: unknown): void
  getConfigValue(symbol: string): unknown
  setConfigValue(symbol: string, volume: unknown): void
}

//-----------------------------------------------------------------------------
// Window_SavefileList
declare class Window_SavefileList extends Window_Selectable {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  setMode(mode: string, autosave: boolean): void
  maxItems(): number
  numVisibleRows(): number
  itemHeight(): number
  drawItem(index: number): void
  indexToSavefileId(index: number): number
  savefileIdToIndex(savefileId: number): number
  isEnabled(savefileId: number): boolean
  savefileId(): number
  selectSavefile(savefileId: number): void
  drawTitle(savefileId: number, x: number, y: number): void
  drawContents(info: DataManager.SavefileInfo, rect: Rectangle): void
  drawPartyCharacters(info: DataManager.SavefileInfo, x: number, y: number): void
  drawPlaytime(info: DataManager.SavefileInfo, x: number, y: number, width: number): void
  playOkSound(): void
}

//-----------------------------------------------------------------------------
// Window_ShopCommand
declare class Window_ShopCommand<T> extends Window_HorzCommand<T> {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  setPurchaseOnly(purchaseOnly: boolean): void
  maxCols(): number
  makeCommandList(): void
}

//-----------------------------------------------------------------------------
// Window_ShopBuy
declare class Window_ShopBuy extends Window_Selectable {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  setupGoods(shopGoods: number[][]): void
  maxItems(): number
  item(): Record<string, any>
  itemAt(index: number): Record<string, any>
  setMoney(money: number): void
  isCurrentItemEnabled(): boolean
  price(item: Record<string, any>): number
  isEnabled(item: Record<string, any>): boolean
  refresh(): void
  makeItemList(): void
  goodsToItem(goods: number[]): Record<string, any>
  drawItem(index: number): void
  priceWidth(): void
  setStatusWindow(statusWindow: Window_ShopStatus): void
  updateHelp(): void
}

//-----------------------------------------------------------------------------
// Window_ShopSell
declare class Window_ShopSell extends Window_ItemList {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  isEnabled(item: Record<string, any>): boolean
}

//-----------------------------------------------------------------------------
// Window_ShopNumber
declare class Window_ShopNumber extends Window_Selectable {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  isScrollEnabled(): boolean
  number(): number
  setup(item: Record<string, any>, max: number, price: number): void
  setCurrencyUnit(currencyUnit: string): void
  createButtons(): void
  placeButtons(): void
  totalButtonWidth(): number
  buttonSpacing(): number
  refresh(): void
  drawCurrentItemName(): void
  drawMultiplicationSign(): void
  multiplicationSign(): string
  multiplicationSignX(): number
  drawNumber(): void
  drawHorzLine(): void
  drawTotalPrice(): void
  itemNameY(): number
  totalPriceY(): number
  buttonY(): number
  cursorWidth(): number
  cursorX(): number
  maxDigits(): number
  update(): void
  playOkSound(): void
  processNumberChange(): void
  changeNumber(amount: number): void
  itemRect(): Rectangle
  isTouchOkEnabled(): boolean
  onButtonUp(): void
  onButtonUp2(): void
  onButtonDown(): void
  onButtonDown2(): void
  onButtonOk(): void
}

//-----------------------------------------------------------------------------
// Window_ShopStatus
declare class Window_ShopStatus extends Window_StatusBase {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  refresh(): void
  setItem(item: Record<string, any>): void
  isEquipItem(): boolean
  drawPossession(x: number, y: number): void
  drawEquipInfo(x: number, y: number): void
  statusMembers(): Game_Actor[]
  pageSize(): number
  maxPages(): number
  drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void
  drawActorParamChange(x: number, y: number, actor: Game_Actor, item1: Game_Item): void
  paramId(): number
  currentEquippedItem(actor: Game_Actor, etypeId: number): Game_Item
  update(): void
  updatePage(): void
  isPageChangeEnabled(): boolean
  isPageChangeRequested(): boolean
  changePage(): void
}

//-----------------------------------------------------------------------------
// Window_NameEdit
declare interface Window_NameEdit extends Omit<Window_StatusBase, 'name'> {}
declare class Window_NameEdit {
  constructor(rect: Rectangle)
  initialize(): void
  initialize(rect: Rectangle): void
  setup(actor: Game_Actor, maxLength: number): void
  name(): string
  restoreDefault(): boolean
  add(ch: string): boolean
  back(): boolean
  faceWidth(): number
  charWidth(): number
  left(): number
  itemRect(index: number): Rectangle
  underlineRect(index: number): Rectangle
  underlineColor(): string
  drawUnderline(index: number): void
  drawChar(index: number): void
  refresh(): void
}

//-----------------------------------------------------------------------------
// Window_NameInput
declare class Window_NameInput extends Window_Selectable {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  static LATIN1: string[]
  static LATIN2: string[]
  static RUSSIA: string[]
  static JAPAN1: string[]
  static JAPAN2: string[]
  static JAPAN3: string[]

  setEditWindow(editWindow: Window_NameEdit): void
  table(): string[]
  maxCols(): number
  maxItems(): number
  itemWidth(): number
  groupSpacing(): number
  character(): string
  isPageChange(): boolean
  isOk(): boolean
  itemRect(index: number): Rectangle
  drawItem(index: number): void
  updateCursor(): void
  isCursorMovable(): boolean
  cursorDown(wrap: boolean): void
  cursorUp(wrap: boolean): void
  cursorRight(wrap: boolean): void
  cursorLeft(wrap: boolean): void
  cursorPagedown(): void
  cursorPageup(): void
  processCursorMove(): void
  processHandling(): void
  isCancelEnabled(): boolean
  processCancel(): void
  processJump(): void
  processBack(): void
  processOk(): void
  onNameAdd(): void
  onNameOk(): void
}

//-----------------------------------------------------------------------------
// Window_NameBox
declare class Window_NameBox extends Window_Base {
  constructor()
  initialize(): void
  override initialize(rect: Rectangle): void
  setMessageWindow(messageWindow: Window_Message): void
  setName(name: string): void
  clear(): void
  start(): void
  updatePlacement(): void
  updateBackground(): void
  windowWidth(): number
  windowHeight(): number
  refresh(): void
}

//-----------------------------------------------------------------------------
// Window_ChoiceList
declare class Window_ChoiceList<T> extends Window_Command<T> {
  constructor()
  initialize(): void
  override initialize(rect: Rectangle): void
  setMessageWindow(messageWindow: Window_Message): void
  createCancelButton(): void
  start(): void
  update(): void
  updateCancelButton(): void
  selectDefault(): void
  updatePlacement(): void
  updateBackground(): void
  placeCancelButton(): void
  windowX(): number
  windowY(): number
  windowWidth(): number
  windowHeight(): number
  numVisibleRows(): number
  maxLines(): number
  maxChoiceWidth(): number
  makeCommandList(): void
  drawItem(index: number): void
  isCancelEnabled(): boolean
  needsCancelButton(): boolean
  callOkHandler(): void
  callCancelHandler(): void
}

//-----------------------------------------------------------------------------
// Window_NumberInput
declare class Window_NumberInput extends Window_Selectable {
  constructor()
  initialize(): void
  override initialize(rect: Rectangle): void
  setMessageWindow(messageWindow: Window_Message): void
  start(): void
  updatePlacement(): void
  windowWidth(): number
  windowHeight(): number
  maxCols(): number
  maxItems(): number
  itemWidth(): number
  itemRect(index: number): Rectangle
  isScrollEnabled(): boolean
  isHoverEnabled(): boolean
  createButtons(): void
  placeButtons(): void
  totalButtonWidth(): number
  buttonSpacing(): number
  buttonY(): number
  update(): void
  processDigitChange(): void
  changeDigit(up: boolean): void
  isTouchOkEnabled(): boolean
  isOkEnabled(): boolean
  isCancelEnabled(): boolean
  processOk(): void
  drawItem(index: number): void
  onButtonUp(): void
  onButtonDown(): void
  onButtonOk(): void
}

//-----------------------------------------------------------------------------
// Window_EventItem
declare class Window_EventItem extends Window_ItemList {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  setMessageWindow(messageWindow: Window_Message): void
  createCancelButton(): void
  start(): void
  update(): void
  updateCancelButton(): void
  updatePlacement(): void
  placeCancelButton(): void
  includes(item: Record<string, any>): boolean
  needsNumber(): boolean
  isEnabled(/*item*/): boolean
  onOk(): void
  onCancel(): void
}

//-----------------------------------------------------------------------------
// Window_Message
declare class Window_Message extends Window_Base {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  initMembers(): void
  setGoldWindow(goldWindow: Window_Gold): void
  setNameBoxWindow(nameBoxWindow: Window_NameBox): void
  setChoiceListWindow<T>(choiceListWindow: Window_ChoiceList<T>): void
  setNumberInputWindow(numberInputWindow: Window_NumberInput): void
  setEventItemWindow(eventItemWindow: Window_EventItem): void
  clearFlags(): void
  update(): void
  checkToNotClose(): void
  synchronizeNameBox(): void
  canStart(): boolean
  startMessage(): void
  newLineX(textState: Window_Base.TextState): number
  updatePlacement(): void
  updateBackground(): void
  terminateMessage(): void
  updateWait(): boolean
  updateLoading(): boolean
  updateInput(): boolean
  isAnySubWindowActive(): boolean
  updateMessage(): boolean
  shouldBreakHere(textState: Window_Base.TextState): boolean
  canBreakHere(textState: Window_Base.TextState): boolean
  onEndOfText(): void
  startInput(): boolean
  isTriggered(): boolean
  doesContinue(): boolean
  areSettingsChanged(): boolean
  updateShowFast(): void
  newPage(textState: Window_Base.TextState): void
  updateSpeakerName(): void
  loadMessageFace(): void
  drawMessageFace(): void
  processControlCharacter(textState: Window_Base.TextState, c: string): void
  processNewLine(textState: Window_Base.TextState): void
  processNewPage(textState: Window_Base.TextState): void
  isEndOfText(textState: Window_Base.TextState): boolean
  needsNewPage(textState: Window_Base.TextState): boolean
  processEscapeCharacter(code: string, textState: Window_Base.TextState): void
  startWait(count: number): void
  startPause(): void
  isWaiting(): boolean
}

//-----------------------------------------------------------------------------
// Window_ScrollText
declare class Window_ScrollText extends Window_Base {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  update(): void
  startMessage(): void
  refresh(): void
  updatePlacement(): void
  contentsHeight(): number
  updateMessage(): void
  scrollSpeed(): number
  isFastForward(): boolean
  fastForwardRate(): number
  terminateMessage(): void
}

//-----------------------------------------------------------------------------
// Window_MapName
declare class Window_MapName extends Window_Base {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  update(): void
  updateFadeIn(): void
  updateFadeOut(): void
  open(): void
  close(): void
  refresh(): void
  drawBackground(x: number, y: number, width: number, height: number): void
}

//-----------------------------------------------------------------------------
// Window_BattleLog
declare class Window_BattleLog extends Window_Base {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  setSpriteset(spriteset: Spriteset_Battle): void
  maxLines(): number
  numLines(): number
  messageSpeed(): number
  isBusy(): boolean

  update(): void
  updateWait(): boolean
  updateWaitCount(): boolean
  updateWaitMode(): boolean

  setWaitMode(waitMode: string): void
  callNextMethod(): void
  isFastForward(): boolean

  push<K extends keyof this, F extends (...args: unknown[]) => unknown>(
    methodName: K,
    ...args: this[K] extends F ? Parameters<this[K]> : never,
  ): this[K] extends F ? void : never

  clear(): void

  wait(): void
  waitForEffect(): void
  waitForMovement(): void

  addText(text: string): void
  pushBaseLine(): void
  popBaseLine(): void

  waitForNewLine(): void

  popupDamage(target: Game_Battler): void

  performActionStart(subject: Game_Battler, action: Game_Action): void
  performAction(subject: Game_Battler, action: Game_Action): void
  performActionEnd(subject: Game_Battler): void
  performDamage(target: Game_Battler): void
  performMiss(target: Game_Battler): void
  performRecovery(target: Game_Battler): void
  performEvasion(target: Game_Battler): void
  performMagicEvasion(target: Game_Battler): void
  performCounter(target: Game_Battler): void
  performReflection(target: Game_Battler): void
  performSubstitute(substitute: Game_Battler, target: Game_Battler): void
  performCollapse(target: Game_Battler): void

  showAnimation(subject: Game_BattlerBase, targets: Game_BattlerBase[], animationId: number): void
  showAttackAnimation(subject: Game_BattlerBase, targets: Game_BattlerBase[]): void
  showActorAttackAnimation(subject: Game_Actor, targets: Game_BattlerBase[]): void
  showEnemyAttackAnimation(/* subject, targets */): void
  showNormalAnimation(targets: Game_BattlerBase[], animationId: number, mirror: boolean): void

  refresh(): void

  drawBackground(): void
  backRect(): Rectangle
  lineRect(index: number): Rectangle
  backColor(): string
  backPaintOpacity(): number
  drawLineText(index: number): void
  startTurn(): void
  startAction(subject: Game_Battler, action: Game_Action, targets: Game_BattlerBase[]): void
  endAction(subject: Game_Battler): void

  displayCurrentState(subject: Game_Actor | Game_Enemy): void
  displayRegeneration(subject: Game_Battler): void
  displayAction(subject: Game_Actor | Game_Enemy, item: Record<string, any>): void
  displayItemMessage(fmt: string, subject: Game_Actor | Game_Enemy, item: Record<string, any>): void
  displayCounter(target: Game_Battler): void
  displayReflection(target: Game_Battler): void
  displaySubstitute(substitute: Game_Battler, target: Game_Battler): void
  displayActionResults(subject: Game_Battler, target: Game_BattlerBase): void
  displayFailure(target: Game_BattlerBase): void
  displayCritical(target: Game_BattlerBase): void
  displayDamage(target: Game_BattlerBase): void
  displayMiss(target: Game_BattlerBase): void
  displayEvasion(target: Game_BattlerBase): void
  displayHpDamage(target: Game_BattlerBase): void
  displayMpDamage(target: Game_BattlerBase): void
  displayTpDamage(target: Game_BattlerBase): void
  displayAffectedStatus(target: Game_BattlerBase): void
  displayAutoAffectedStatus(target: Game_BattlerBase): void
  displayChangedStates(target: Game_BattlerBase): void
  displayAddedStates(target: Game_BattlerBase): void
  displayRemovedStates(target: Game_BattlerBase): void
  displayChangedBuffs(target: Game_BattlerBase): void
  displayBuffs(target: Game_BattlerBase, buffs: number[], fmt: string): void

  makeHpDamageText(target: Game_Actor | Game_Enemy): string
  makeMpDamageText(target: Game_Actor | Game_Enemy): string
  makeTpDamageText(target: Game_Actor | Game_Enemy): string
}

//-----------------------------------------------------------------------------
// Window_PartyCommand
declare class Window_PartyCommand<T> extends Window_Command<T> {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  makeCommandList(): void
  setup(): void
}

//-----------------------------------------------------------------------------
// Window_ActorCommand
declare class Window_ActorCommand extends Window_Command<number> {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  makeCommandList(): void
  addAttackCommand(): void
  addSkillCommands(): void
  addGuardCommand(): void
  addItemCommand(): void
  setup(actor: Game_Actor): void
  actor(): Game_Actor
  processOk(): void
  selectLast(): void
}

//-----------------------------------------------------------------------------
// Window_BattleStatus
declare class Window_BattleStatus extends Window_StatusBase {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  extraHeight(): number
  maxCols(): number
  itemHeight(): number
  maxItems(): number
  rowSpacing(): number
  updatePadding(): void
  actor(index: number): Game_Actor
  selectActor(actor: Game_Actor): void
  update(): void
  preparePartyRefresh(): void
  performPartyRefresh(): void
  drawItem(index: number): void
  drawItemImage(index: number): void
  drawItemStatus(index: number): void
  faceRect(index: number): Rectangle
  nameX(rect: Rectangle): number
  nameY(rect: Rectangle): number
  stateIconX(rect: Rectangle): number
  stateIconY(rect: Rectangle): number
  basicGaugesX(rect: Rectangle): number
  basicGaugesY(rect: Rectangle): number
}

//-----------------------------------------------------------------------------
// Window_BattleActor
declare class Window_BattleActor extends Window_BattleStatus {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  show(): void
  hide(): void
  select(index: number): void
  processTouch(): void
}

//-----------------------------------------------------------------------------
// Window_BattleEnemy
declare class Window_BattleEnemy extends Window_Selectable {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  maxCols(): number
  maxItems(): number
  enemy(): Game_Actor
  enemyIndex(): number
  drawItem(index: number): void
  show(): void
  hide(): void
  refresh(): void
  select(index: number): void
  processTouch(): void
}

//-----------------------------------------------------------------------------
// Window_BattleSkill
declare class Window_BattleSkill extends Window_SkillList {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  show(): void
  hide(): void
}

//-----------------------------------------------------------------------------
// Window_BattleItem
declare class Window_BattleItem extends Window_ItemList {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  includes(item: Record<string, any>): boolean
  show(): void
  hide(): void
}

//-----------------------------------------------------------------------------
// Window_TitleCommand
declare class Window_TitleCommand<T> extends Window_Command<T> {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  static initCommandPosition(): void
  makeCommandList(): void
  isContinueEnabled(): boolean
  processOk(): void
  selectLast(): void
}

//-----------------------------------------------------------------------------
// Window_GameEnd
declare class Window_GameEnd<T> extends Window_Command<T> {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  makeCommandList(): void
}

//-----------------------------------------------------------------------------
// Window_DebugRange
declare class Window_DebugRange extends Window_Selectable {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void

  static lastTopRow: number
  static lastIndex: number

  maxItems(): number
  update(): void
  mode(index: number): string
  topId(index: number): number
  isSwitchMode(index: number): boolean
  drawItem(index: number): void
  isCancelTriggered(): boolean
  processCancel(): void
  setEditWindow(editWindow: Window_DebugEdit): void
}

//-----------------------------------------------------------------------------
// Window_DebugEdit
declare class Window_DebugEdit extends Window_Selectable {
  constructor(rect: Rectangle)
  initialize(): void
  override initialize(rect: Rectangle): void
  maxItems(): number
  drawItem(index: number): void
  itemName(dataId: string): string
  itemStatus(dataId: string): string
  setMode(mode: string): void
  setTopId(id: number): void
  currentId(): number
  update(): void
  updateSwitch(): void
  updateVariable(): void
  deltaForVariable(): number
}

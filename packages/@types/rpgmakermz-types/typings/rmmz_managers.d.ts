// グローバル変数の型定義（基本：nullable）
declare var $dataActors: RPGMakerMZ.DataActor[] | null
declare var $dataClasses: RPGMakerMZ.DataClass[] | null
declare var $dataSkills: RPGMakerMZ.DataSkill[] | null
declare var $dataItems: RPGMakerMZ.DataItem[] | null
declare var $dataWeapons: RPGMakerMZ.DataWeapon[] | null
declare var $dataArmors: RPGMakerMZ.DataArmor[] | null
declare var $dataEnemies: RPGMakerMZ.DataEnemy[] | null
declare var $dataTroops: RPGMakerMZ.DataTroop[] | null
declare var $dataStates: RPGMakerMZ.DataState[] | null
declare var $dataAnimations: RPGMakerMZ.DataAnimation[] | null
declare var $dataTilesets: RPGMakerMZ.DataTileset[] | null
declare var $dataCommonEvents: RPGMakerMZ.DataCommonEvent[] | null
declare var $dataSystem: RPGMakerMZ.DataSystem | null
declare var $dataMapInfos: RPGMakerMZ.DataMapInfo[] | null
declare var $dataMap: RPGMakerMZ.DataMap[] | null
declare var $gameTemp: Game_Temp | null
declare var $gameSystem: Game_System | null
declare var $gameScreen: Game_Screen | null
declare var $gameTimer: Game_Timer | null
declare var $gameMessage: Game_Message | null
declare var $gameSwitches: Game_Switches | null
declare var $gameVariables: Game_Variables | null
declare var $gameSelfSwitches: Game_SelfSwitches | null
declare var $gameActors: Game_Actor[] | null
declare var $gameParty: Game_Party | null
declare var $gameTroop: Game_Troop | null
declare var $gameMap: Game_Map | null
declare var $gamePlayer: Game_Player | null
declare var $testEvent: RPGMakerMZ.DataEvent.Command[] | null

declare namespace DataManager {
  type SavefileInfo = {
    title: string
    characters: CharacterInfo[]
    faces: FaceInfo[]
    playtime: string
    timestamp: number
  }
  type CharacterInfo = [
    characterName: string,
    characterIndex: string,
  ]
  type FaceInfo = [
    faceName: string,
    faceIndex: string,
  ]

  type SavefileContent = {
    system: Game_System
    screen: Game_Screen
    timer: Game_Timer
    switches: Game_Switches
    variables: Game_Variables
    selfSwitches: Game_SelfSwitches
    actors: Game_Actors
    party: Game_Party
    map: Game_Map
    player: Game_Player
  }
}

declare class DataManager {
  _globalInfo: DataManager.SavefileInfo[] | null
  _errors: Array<{ name: string, src: string, url: string }>
  _databaseFiles: Array<{ name: string, src: string }>
  static loadGlobalInfo(): void
  static removeInvalidGlobalInfo(): void
  static saveGlobalInfo(): void
  static isGlobalInfoLoaded(): boolean
  static loadDatabase(): void
  static isDatabaseLoaded(): boolean
  static loadDataFile(name: string, src: string): void
  static onXhrLoad(xhr: XMLHttpRequest, name: string, src: string, url: string): void
  static onXhrError(name: string, src: string, url: string): void
  static onLoad(object: unknown): void
  static makeEmptyMap(): void
  static loadMapData(mapId: number): void
  static isMapLoaded(): boolean
  static isMapObject(object: unknown): object is RPGMakerMZ.DataMap
  static extractArrayMetadata(array: unknown[]): void
  static extractMetadata(data: unknown): void
  static checkError(): void
  static setupBattleTest(): void
  static isBattleTest(): boolean
  static setupEventTest(): void
  static isEventTest(): boolean
  static isSkill(item: unknown): item is RPGMakerMZ.DataSkill
  static isItem(item: unknown): item is RPGMakerMZ.DataItem
  static isWeapon(item: unknown): item is RPGMakerMZ.DataWeapon
  static isArmor(item: unknown): item is RPGMakerMZ.DataArmor
  static setupNewGame(): void
  static createGameObjects(): void
  static isAnySavefileExists(): boolean
  static savefileExists(savefileId: number): boolean
  static latestSavefileId(): number
  static earliestSavefileId(): number
  static emptySavefileId(): number
  static loadAllSavefileImages(): void
  static loadSavefileImages(info: DataManager.SavefileInfo): void
  static maxSavefiles(): number
  static savefileInfo(savefileId: number): DataManager.SavefileInfo
  static saveGame(savefileId: number): Promise<number>
  static makeSavename(savefileId: number): string
  static selectSavefileForNewGame(): void
  static makeSavefileInfo(): DataManager.SavefileInfo
  static makeSaveContents(): DataManager.SavefileContent
  static loadGame(savefileId: number): Promise<number>
  static extractSaveContents(contents: DataManager.SavefileContent): void
  static correctDataErrors(): void
}

declare namespace ConfigManager {
  type ConfigData = {
    alwaysDash: boolean
    commandRemember: boolean
    touchUI: boolean
    bgmVolume: number
    bgsVolume: number
    meVolume: number
    seVolume: number
  }
}

declare class ConfigManager {
  static _isLoaded: boolean
  static alwaysDash: boolean
  static commandRemember: boolean
  static touchUI: boolean
  static bgmVolume: number
  static bgsVolume: number
  static meVolume: number
  static seVolume: number
  static load(): void
  static save(): void
  static isLoaded(): boolean
  static makeData(): ConfigManager.ConfigData
  static applyData(config: ConfigManager.ConfigData): void
  static readFlag(config: ConfigManager.ConfigData, name: string, defaultValue: ConfigManager.ConfigData): ConfigManager.ConfigData
  static readVolume(config: ConfigManager.ConfigData, name: string): number
}

declare class StorageManager {
  static _forageKeys: string[]
  static _forageKeysUpdated: boolean
  static isLocalMode(): boolean
  static saveObject<T>(saveName: string, object: T): Promise<void>
  static loadObject<T>(saveName: string): T
  static objectToJson(object: unknown): Promise<string>
  static jsonToObject<T>(json: string): Promise<T>
  static jsonToZip(json: pako.Data): Promise<string>
  static zipToJson(zip: pako.Inflate): Promise<string>
  static saveZip(saveName: string, zip: pako.Inflate): Promise<void>
  static loadZip(saveName: string): pako.Inflate
  static exists(saveName: string): boolean
  static remove(saveName: string): Promise<void> | void
  static saveToLocalFile(saveName: string, zip: string): Promise<void>
  static loadFromLocalFile(saveName: string): Promise<string>
  static localFileExists(saveName: string): boolean
  static removeLocalFile(saveName: string): void
  static saveToForage(saveName: string, zip: string): Promise<string>
  static loadFromForage(saveName: string): Promise<string>
  static forageExists(saveName: string): boolean
  static removeForage(saveName: string): Promise<void>
  static updateForageKeys(): Promise<number>
  static forageKeysUpdated(): boolean
  static fsMkdir(path: string): void
  static fsRename(oldPath: string, newPath: string): void
  static fsUnlink(path: string): void
  static fsReadFile(path: string): string
  static fsWriteFile(path: string, data: string): void
  static fileDirectoryPath(): string
  static filePath(saveName: string): string
  static forageKey(saveName: string): string
  static forageTestKey(): string
}

declare class FontManager {
  static _urls: { [key: string]: string }
  static _states: { [key: string]: string }
  static load(family: string, filename: string): void
  static isReady(): boolean
  static startLoading(family: string, url: string): void
  static throwLoadError(familly: string): void
  static makeUrl(filename: string): string
}

declare class ImageManager {
  static iconWidth: number
  static iconHeight: number
  static faceWidth: number
  static faceHeight: number
  static _cache: { [key: string]: Bitmap }
  static _system: { [key: string]: Bitmap }
  static _emptyBitmap: Bitmap
  static loadAnimation(filename: string): Bitmap
  static loadBattleback1(filename: string): Bitmap
  static loadBattleback2(filename: string): Bitmap
  static loadEnemy(filename: string): Bitmap
  static loadCharacter(filename: string): Bitmap
  static loadFace(filename: string): Bitmap
  static loadParallax(filename: string): Bitmap
  static loadPicture(filename: string): Bitmap
  static loadSvActor(filename: string): Bitmap
  static loadSvEnemy(filename: string): Bitmap
  static loadSystem(filename: string): Bitmap
  static loadTileset(filename: string): Bitmap
  static loadTitle1(filename: string): Bitmap
  static loadTitle2(filename: string): Bitmap
  static loadBitmap(folder: string, filename: string): Bitmap
  static loadBitmapFromUrl(url: string): Bitmap
  static clear(): void
  static isReady(): boolean
  static throwLoadError(bitmap: Bitmap): void
  static isObjectCharacter(filename: string): boolean
  static isBigCharacter(filename: string): boolean
  static isZeroParallax(filename: string): boolean
}


declare class EffectManager {
  static _cache: { [key: string]: effekseer.EffekseerEffect }
  static _errorUrls: string[]
  static load(filename: string): effekseer.EffekseerEffect
  static startLoading(url: string): effekseer.EffekseerEffect
  static clear(): void
  static onLoad(): void
  static onError(url: string): void
  static makeUrl(filename: string): string
  static checkErrors(): void
  static throwLoadError(url: string): void
  static isReady(): boolean
}

declare class AudioManager {
  static bgmVolume: number
  static bgsVolume: number
  static meVolume: number
  static seVolume: number
  static playBgm(bgm: RPGMakerMZ.Audio.Resumable, pos: number): void
  static replayBgm(bgm: RPGMakerMZ.Audio.Resumable): void
  static isCurrentBgm(bgm: RPGMakerMZ.Audio.Resumable): boolean
  static updateBgmParameters(bgm: RPGMakerMZ.Audio.Resumable): void
  static updateCurrentBgm(bgm: RPGMakerMZ.Audio.Resumable, pos: number): void
  static stopBgm(): void
  static fadeOutBgm(duration: number): void
  static fadeInBgm(duration: number): void
  static playBgs(bgs: RPGMakerMZ.Audio.Resumable, pos: number): void
  static replayBgs(bgs: RPGMakerMZ.Audio.Resumable): void
  static isCurrentBgs(bgs: RPGMakerMZ.Audio.Resumable): boolean
  static updateBgsParameters(bgs: RPGMakerMZ.Audio.Resumable): void
  static updateCurrentBgs(): void
  static stopBgs(): void
  static fadeOutBgs(duration: number): void
  static fadeInBgs(duration: number): void
  static playMe(me: RPGMakerMZ.Audio.Resumable): void
  static updateMeParameters(me: RPGMakerMZ.Audio.Resumable): void
  static fadeOutMe(duration: number): void
  static stopMe(): void
  static playSe(se: RPGMakerMZ.Audio.Resumable): void
  static updateSeParameters(buffer: WebAudio, se: RPGMakerMZ.Audio.Resumable): void
  static cleanupSe(): void
  static stopSe(): void
  static playStaticSe(se: RPGMakerMZ.Audio.Resumable): void
  static loadStaticSe(se: RPGMakerMZ.Audio.Resumable): void
  static isStaticSe(se: RPGMakerMZ.Audio.Resumable): boolean
  static stopAll(): void
  static saveBgm(): RPGMakerMZ.Audio.Resumable
  static saveBgs(): RPGMakerMZ.Audio.Resumable
  static makeEmptyAudioObject(): RPGMakerMZ.Audio.Resumable
  static createBuffer(folder: string, name: string): WebAudio
  static updateBufferParameters(buffer: WebAudio, configVolume: number, audio: RPGMakerMZ.Audio.Resumable): void
  static audioFileExt(): string
  static checkErrors(): void
  static throwLoadError(webAudio: WebAudio): void
}

declare class SoundManager {
  static preloadImportantSounds(): void
  static loadSystemSound(n: number): void
  static playSystemSound(n: number): void
  static playCursor(): void
  static playOk(): void
  static playCancel(): void
  static playBuzzer(): void
  static playEquip(): void
  static playSave(): void
  static playLoad(): void
  static playBattleStart(): void
  static playEscape(): void
  static playEnemyAttack(): void
  static playEnemyCollapse(): void
  static playBossCollapse1(): void
  static playBossCollapse2(): void
  static playActorDamage(): void
  static playActorCollapse(): void
  static playRecovery(): void
  static playMiss(): void
  static playEvasion(): void
  static playMagicEvasion(): void
  static playReflection(): void
  static playShop(): void
  static playUseSkill(): void
  static playEnemyDamage(): void
  static playUseItem(): void
}

declare class TextManager {
  static basic(basicId: number): string
  static param(paramId: number): string
  static command(commandId: number): string
  static message(messageId: number): string
  static getter(method: 'basic' | 'command', param: number): () => string
  static getter(method: 'message', param: string): () => string
  static get currencyUnit(): string
  static level: string
  static levelA: string
  static hp: string
  static hpA: string
  static mp: string
  static mpA: string
  static tp: string
  static tpA: string
  static exp: string
  static expA: string
  static fight: string
  static escape: string
  static attack: string
  static guard: string
  static item: string
  static skill: string
  static equip: string
  static status: string
  static formation: string
  static save: string
  static gameEnd: string
  static options: string
  static weapon: string
  static armor: string
  static keyItem: string
  static equip2: string
  static optimize: string
  static clear: string
  static newGame: string
  static continue_: string
  static toTitle: string
  static cancel: string
  static buy: string
  static sell: string
  static alwaysDash: string
  static commandRemember: string
  static touchUI: string
  static bgmVolume: string
  static bgsVolume: string
  static meVolume: string
  static seVolume: string
  static possession: string
  static expTotal: string
  static expNext: string
  static saveMessage: string
  static loadMessage: string
  static file: string
  static autosave: string
  static partyName: string
  static emerge: string
  static preemptive: string
  static surprise: string
  static escapeStart: string
  static escapeFailure: string
  static victory: string
  static defeat: string
  static obtainExp: string
  static obtainGold: string
  static obtainItem: string
  static levelUp: string
  static obtainSkill: string
  static useItem: string
  static criticalToEnemy: string
  static criticalToActor: string
  static actorDamage: string
  static actorRecovery: string
  static actorGain: string
  static actorLoss: string
  static actorDrain: string
  static actorNoDamage: string
  static actorNoHit: string
  static enemyDamage: string
  static enemyRecovery: string
  static enemyGain: string
  static enemyLoss: string
  static enemyDrain: string
  static enemyNoDamage: string
  static enemyNoHit: string
  static evasion: string
  static magicEvasion: string
  static magicReflection: string
  static counterAttack: string
  static substitute: string
  static buffAdd: string
  static debuffAdd: string
  static buffRemove: string
  static actionFailure: string
}

declare class ColorManager {
  _windowskin?: Bitmap
  static loadWindowskin(): void
  static textColor(n: number): string
  static normalColor(): string
  static systemColor(): string
  static crisisColor(): string
  static deathColor(): string
  static gaugeBackColor(): string
  static hpGaugeColor1(): string
  static hpGaugeColor2(): string
  static mpGaugeColor1(): string
  static mpGaugeColor2(): string
  static mpCostColor(): string
  static powerUpColor(): string
  static powerDownColor(): string
  static ctGaugeColor1(): string
  static ctGaugeColor2(): string
  static tpGaugeColor1(): string
  static tpGaugeColor2(): string
  static tpCostColor(): string
  static pendingColor(): string
  static hpColor(actor: Game_Actor): string
  static mpColor(): string
  static tpColor(): string
  static paramchangeTextColor(change: number): string
  static damageColor(colorType: number): string
  static outlineColor(): string
  static dimColor1(): string
  static dimColor2(): string
  static itemBackColor1(): string
  static itemBackColor2(): string
}

declare type SceneConstructor = new () => Stage
declare class SceneManager {
  static _scene: Scene_Base
  static _nextScene: Scene_Base | null
  static _stack: SceneConstructor[]
  static _exiting: boolean
  static _previousScene: Scene_Base | null
  static _previousClass: SceneConstructor | null
  static _backgroundBitmap: Bitmap | null
  static _smoothDeltaTime: number
  static _elapsedTime: number
  static run(sceneClass: SceneConstructor): void
  static initialize(): void
  static checkBrowser(): void
  static checkPluginErrors(): void
  static initGraphics(): void
  static initAudio(): void
  static initVideo(): void
  static initInput(): void
  static setupEventHandlers(): void
  static update(): void
  static updateFrameCount(): void
  static determineRepeatNumber(deltaTime: number): number
  static terminate(): void
  static onError(event: ErrorEvent): void
  static onReject(event: PromiseRejectionEvent): void
  static onUnload(): void
  static onKeyDown(event: KeyboardEvent): void
  static reloadGame(): void
  static showDevTools(): void
  static catchException(e: Error): void
  static catchNormalError(e: Error): void
  static catchLoadError(e: ['LoadError', string, () => void]): void
  static catchUnknownError(e: unknown): void
  static updateMain(): void
  static updateInputData(): void
  static updateEffekseer(): void
  static changeScene(): void
  static updateScene(): void
  static isGameActive(): boolean
  static onSceneTerminate(): void
  static onSceneCreate(): void
  static onBeforeSceneStart(): void
  static onSceneStart(): void
  static isSceneChanging(): boolean
  static isCurrentSceneBusy(): boolean
  static isNextScene(sceneClass: SceneConstructor): boolean
  static isPreviousScene(sceneClass: SceneConstructor): boolean
  static goto(sceneClass: SceneConstructor): void
  static push(sceneClass: SceneConstructor): void
  static pop(): void
  static exit(): void
  static clearStack(): void
  static stop(): void
  static prepareNextScene(): void
  static snap(): void
  static snapForBackground(): void
  static backgroundBitmap(): Bitmap
  static resume(): void
}

declare namespace BattleManager {
  type EventCallback = (result: Result) => void
  namespace Result {
    type Victory = 0
    type Abort = 1
    type Defeat = 2
  }
  type Result = Result.Victory | Result.Abort | Result.Defeat
  type Rewards = {
    gold: number
    exp: number
    items: RPGMakerMZ.DataItemlike[]
  }
}

declare class BattleManager {
  static _phase: string
  static _inputting: boolean
  static _canEscape: boolean
  static _canLose: boolean
  static _battleTest: boolean
  static _eventCallback: BattleManager.EventCallback | undefined
  static _preemptive: boolean
  static _surprise: boolean
  static _currentActor: Game_Actor | null
  static _actionForcedBattler: Game_Battler | null
  static _mapBgm: RPGMakerMZ.Audio.Resumable | null
  static _mapBgs: RPGMakerMZ.Audio.Resumable | null
  static _actionBattlers: Game_Battler[]
  static _subject: Game_Battler | null
  static _action: Game_Action | null
  static _targets: Game_Battler[]
  static _logWindow: Window_BattleLog | null
  static _spriteset: Spriteset_Battle
  static _escapeRatio: number
  static _escaped: boolean
  static _rewards: BattleManager.Rewards
  static _tpbNeedsPartyCommand: boolean
  static setup(troopId: number, canEscape: boolean, canLose: boolean): void
  static initMembers(): void
  static isTpb(): boolean
  static isActiveTpb(): boolean
  static isBattleTest(): boolean
  static setBattleTest(battleTest: boolean): void
  static setEventCallback(callback: (result: BattleManager.Result) => void): void
  static setLogWindow(logWindow: Window_BattleLog): void
  static setSpriteset(spriteset: Spriteset_Battle): void
  static onEncounter(): void
  static ratePreemptive(): number
  static rateSurprise(): number
  static saveBgmAndBgs(): void
  static playBattleBgm(): void
  static playVictoryMe(): void
  static playDefeatMe(): void
  static replayBgmAndBgs(): void
  static makeEscapeRatio(): void
  static update(timeActive: number): void
  static updatePhase(timeActive: number): void
  static updateEvent(): void
  static updateEventMain(): boolean
  static isBusy(): boolean
  static updateTpbInput(): void
  static checkTpbInputClose(): void
  static checkTpbInputOpen(): void
  static isPartyTpbInputtable(): boolean
  static needsActorInputCancel(): boolean
  static isTpbMainPhase(): boolean
  static isInputting(): boolean
  static isInTurn(): boolean
  static isTurnEnd(): boolean
  static isAborting(): boolean
  static isBattleEnd(): boolean
  static canEscape(): boolean
  static canLose(): boolean
  static isEscaped(): boolean
  static actor(): Game_Actor
  static startBattle(): void
  static displayStartMessages(): void
  static startInput(): void
  static inputtingAction(): Game_Action
  static selectNextCommand(): void
  static selectNextActor(): void
  static selectPreviousCommand(): void
  static selectPreviousActor(): void
  static changeCurrentActor(forward: boolean): void
  static startActorInput(): void
  static finishActorInput(): void
  static cancelActorInput(): void
  static updateStart(): void
  static startTurn(): void
  static updateTurn(timeActive: boolean): void
  static updateTpb(): void
  static updateAllTpbBattlers(): void
  static updateTpbBattler(battler: Game_Battler): void
  static checkTpbTurnEnd(): void
  static processTurn(): void
  static endBattlerActions(battler: Game_Battler): void
  static endTurn(): void
  static endAllBattlersTurn(): void
  static displayBattlerStatus(battler: Game_Battler, current: boolean): void
  static updateTurnEnd(): void
  static getNextSubject(): Game_Battler | null
  static allBattleMembers(): Game_Battler[]
  static makeActionOrders(): void
  static startAction(): void
  static updateAction(): void
  static endAction(): void
  static invokeAction(subject: Game_Battler, target: Game_Battler): void
  static invokeNormalAction(subject: Game_Battler, target: Game_Battler): void
  static invokeCounterAttack(subject: Game_Battler, target: Game_Battler): void
  static invokeMagicReflection(subject: Game_Battler, target: Game_Battler): void
  static applySubstitute(target: Game_Battler): Game_Battler
  static checkSubstitute(target: Game_Battler): boolean
  static isActionForced(): boolean
  static forceAction(battler: Game_Battler): void
  static processForcedAction(): void
  static abort(): void
  static checkBattleEnd(): boolean
  static checkAbort(): boolean
  static processVictory(): void
  static processEscape(): boolean
  static onEscapeSuccess(): void
  static onEscapeFailure(): void
  static processPartyEscape(): void
  static processAbort(): void
  static processDefeat(): void
  static endBattle(result: BattleManager.Result): void
  static updateBattleEnd(): void
  static makeRewards(): void
  static displayVictoryMessage(): void
  static displayDefeatMessage(): void
  static displayEscapeSuccessMessage(): void
  static displayEscapeFailureMessage(): void
  static displayRewards(): void
  static displayExp(): void
  static displayGold(): void
  static displayDropItems(): void
  static gainRewards(): void
  static gainExp(): void
  static gainGold(): void
  static gainDropItems(): void
}

declare class PluginManager {
  static setup(plugins: RPGMakerMZ.PluginConfig[]): void
  static parameters(name: string): RPGMakerMZ.PluginParams
  static setParameters(name: string, parameters: string): void
  static loadScript(filename: string): void
  static onError(e: Event): void
  static makeUrl(filename: string): string
  static checkErrors(): void
  static throwLoadError(url: string): void
  static registerCommand(pluginName: string, commandName: string, func: RPGMakerMZ.PluginCommand): void
  static callCommand(self: unknown, pluginName: string, commandName: string, args: RPGMakerMZ.PluginParams): void
}

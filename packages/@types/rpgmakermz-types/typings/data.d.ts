declare namespace RPGMakerMZ {
  namespace Audio {
    interface Resumable extends Audio {
      pos: number
    }
  }

  interface Audio {
    name: string
    volume: number
    pitch: number
    pan: number
  }

  interface Identifiable {
    id: number
    name: string
  }

  interface HasMetadata {
    note: string
    meta: { [key: string]: string | true }
  }

  interface HasTraits {
    traits: Data.Trait[]
  }

  type DataObject = Identifiable & HasTraits

  interface HasEffects {
    effects: Data.Effect[]
  }

  interface HasIcon {
    iconId: number
  }

  interface HasAnimation {
    animationId: number
  }

  interface HasParams {
    params: Data.Params
  }

  interface Invokable {
    scope: number
    occasion: number
    speed: number
    successRate: number
    repeats: number
    tpGain: number
    hitType: number
    damage: Data.Damage
  }

  namespace Data {
    type Trait = {
      code: number
      dataId: number
      value: number
    }

    type Damage = {
      critical: boolean
      elementId: number
      formula: string
      type: number
      variance: number
    }

    type Effect = {
      code: number
      dataId: number
      value1: number
      value2: number
    }

    type Params = [
      mhp: number,
      mmp: number,
      atk: number,
      def: number,
      mat: number,
      mdf: number,
      agi: number,
      luk: number,
    ]
  }

  interface DataActor extends Identifiable, HasMetadata, HasTraits {
    nickname: string
    classId: number
    initialLevel: number
    maxLevel: number
    profile: string
    faceName: string
    faceIndex: number
    characterName: string
    characterIndex: number
    battlerName: string
    equips: number[]
  }

  namespace DataClass {
    type Learning = {
      level: number
      note: string
      skillId: number
    }
    type Params = [
      mhp: number[],
      mmp: number[],
      atk: number[],
      def: number[],
      mat: number[],
      mdf: number[],
      agi: number[],
      luk: number[],
    ]
  }

  interface DataClass extends Identifiable, HasMetadata, HasTraits {
    expParams: [
      basis: number,
      extra: number,
      accretionA: number,
      accretionB: number,
    ]
    params: DataClass.Params
    learnings: DataClass.Learning[]
  }

  interface DataSkill extends Identifiable, HasMetadata, HasIcon, Invokable, HasEffects, HasAnimation {
    description: string
    stypeId: number
    mpCost: number
    tpCost: number
    message1: string
    message2: string
    messageType: number
    requiredWtypeId1: number
    requiredWtypeId2: number
  }

  namespace DataItem {
  }

  interface DataItem extends Identifiable, HasMetadata, HasIcon, Invokable, HasEffects, HasAnimation {
    description: string
    itypeId: number
    price: number
    consumable: boolean
  }

  interface DataWeapon extends Identifiable, HasMetadata, HasIcon, HasParams, HasAnimation {
    description: string
    wtypeId: number
    etypeId: 1
    price: number
  }

  interface DataArmor extends Identifiable, HasMetadata, HasIcon, HasParams {
    description: string
    atypeId: number
    etypeId: number
    price: number
  }

  type DataUsable = DataSkill | DataItem
  type DataEquipable = DataWeapon | DataArmor
  type DataPriceable = DataItem | DataEquipable
  type DataItemlike = DataSkill | DataPriceable

  namespace DataEnemy {
    type Action = {
      conditionParam1: number
      conditionParam2: number
      conditionType: number
      rating: number
      skillId: number
    }

    type DropItem = {
      kind: number
      dataId: number
      denominator: number
    }
  }

  interface DataEnemy extends Identifiable, HasMetadata, HasTraits, HasParams {
    actions: DataEnemy.Action[]
    battlerHue: number
    battlerName: string
    exp: number
    gold: number
    dropItems: DataEnemy.DropItem[]
    note: string
  }

  namespace DataTroop {
    type Member = {
      enemyId: number
      x: number
      y: number
      hidden: boolean
    }
  }

  namespace DataBattleEvent {
    type Page = {
      conditions: Conditions
      list: DataEvent.Command
    }

    type Conditions = {
      actorHp: number
      actorId: number
      actorValid: boolean
      enemyHp: number
      enemyIndex: number
      enemyValid: boolean
      switchId: number
      switchValid: boolean
      turnA: number
      turnB: number
      turnEnding: boolean
      turnValid: boolean
    }
  }

  interface DataTroop extends Identifiable {
    members: DataTroop.Member[]
    pages: DataBattleEvent.Page[]
  }

  interface DataState extends Identifiable, HasMetadata, HasIcon, HasTraits {
    restriction: number
    priority: number
    motion: number
    overlay: number
    removeAtBattleEnd: boolean
    removeByRestriction: boolean
    autoRemovalTiming: number
    minTurns: number
    maxTurns: number
    removeByDamage: boolean
    chanceByDamage: number
    removeByWalking: boolean
    stepsToRemove: number
    message1: string
    message2: string
    message3: string
    message4: string
    messageType: number
    /**
     * @deprecated
     */
    releaseByDamage?: boolean
  }

  namespace DataAnimation {
    type FlashTiming = {
      frame: number
      duration: number
      color: number[]
    }
    type Rotation = {
      x: number
      y: number
      z: number
    }
    type SoundTiming = {
      frame: number
      se: Audio
    }
  }

  interface DataAnimation extends Identifiable {
    displayType: number
    effectName: string
    flashTimings: DataAnimation.FlashTiming[]
    offsetX: number
    offsetY: number
    rotation: DataAnimation.Rotation
    scale: number
    soundTimings: DataAnimation.SoundTiming[]
    speed: number
  }

  namespace DataAnimationMV {
    type Cell = [
      pattern: number,
      x: number,
      y: number,
      scale: number,
      rotation: number,
      mirror: boolean,
      opacity: number,
      blendMode: number,
    ]

    type Frame = Cell[]

    type Timing = {
      frame: number
      flashDuration: number
      flashScope: 1 | 2 | 3
      flashColor: Color.Rgba
      se: Audio
    }
  }

  interface DataAnimationMV extends Identifiable {
    frames: DataAnimationMV.Frame[]
    animation1Name: string
    animation2Name: string
    animation1Hue: number
    animation2Hue: number
    position: number
    timings: DataAnimationMV.Timing[]
  }

  interface DataTileset extends Identifiable, HasMetadata {
    mode: number
    tilesetNames: string[]
    flags: number[]
  }

  interface DataCommonEvent extends Identifiable {
    trigger: number
    switchId: number
    list: DataEvent.Command[]
  }

  interface DataMapInfo {
    id: number
    expanded: boolean
    name: string
    order: number
    parentId: number
    scrollX: number
    scrollY: number
  }

  namespace DataMap {
    type Encounter = {
      troopId: number
      weight: number
      regionSets: [number, number, number] | []
    }
  }

  namespace DataMapEvent {
    type Page = {
      conditions: Conditions
      directionFix: boolean
      image: Image
      list: DataEvent.Command[]
      moveFrequency: number
      moveRoute: MoveRoute
      moveSpeed: number
      moveType: number
      priorityType: number
      stepAnime: boolean
      through: boolean
      trigger: number
      walkAnime: boolean
    }

    type Conditions = {
      actorId: number
      actorValid: boolean
      itemId: number
      itemValid: boolean
      selfSwitchCh: string
      selfSwitchValid: boolean
      switch1Id: number
      switch1Valid: boolean
      switch2Id: number
      switch2Valid: boolean
      variableId: number
      variableValid: boolean
      variableValue: number
    }

    type Image = {
      tileId: number
      characterName: string
      direction: number
      pattern: number
      characterIndex: number
    }

    namespace MoveRoute {
      type Command = {
        code: number
        parameters: Array<Array<number | string> | boolean | ParameterClass | number | string>
      }
    }

    type MoveRoute = {
      list: MoveRoute.Command[]
      repeat: boolean
      skippable: boolean
      wait: boolean
    }

    type ParameterClass = {
      name?: string
      volume?: number
      pitch?: number
      pan?: number
      list?: ParameterList[]
      repeat?: boolean
      skippable?: boolean
      wait?: boolean
      code?: number
      parameters?: Array<number | string>
      indent?: null
    }

    type ParameterList = {
      code: number
      parameters?: Array<number | string>
      indent?: null
    }

  }

  interface DataMapEvent extends Identifiable, HasMetadata {
    pages: DataMapEvent.Page[]
    x: number
    y: number
  }

  interface DataMap extends HasMetadata {
    autoplayBgm: boolean
    autoplayBgs: boolean
    battleback1Name: string
    battleback2Name: string
    bgm: Audio
    bgs: Audio
    disableDashing: boolean
    displayName: string
    encounterList: DataMap.Encounter[]
    encounterStep: number
    height: number
    parallaxLoopX: boolean
    parallaxLoopY: boolean
    parallaxName: string
    parallaxShow: boolean
    parallaxSx: number
    parallaxSy: number
    scrollType: number
    specifyBattleback: boolean
    tilesetId: number
    width: number
    data: number[]
    events: Array<DataMapEvent | null>
  }

  namespace DataSystem {
    type Advanced = {
      gameId: number
      screenWidth: number
      screenHeight: number
      uiAreaWidth: number
      uiAreaHeight: number
      numberFontFilename: string
      fallbackFonts: string
      fontSize: number
      mainFontFilename: string
    }

    type Vehicle = {
      bgm: Audio
      characterIndex: number
      characterName: string
      startMapId: number
      startX: number
      startY: number
    }

    type AttackMotion = {
      type: number
      weaponImageId: number
    }

    type Terms = {
      basic: string[]
      commands: Array<null | string>
      params: string[]
      messages: { [key: string]: string }
    }

    type TestBattler = {
      actorId: number
      level: number
      equips: number[]
    }

    type TitleCommandWindow = {
      offsetX: number
      offsetY: number
      background: number
    }
  }

  interface DataSystem {
    advanced: DataSystem.Advanced
    airship: DataSystem.Vehicle
    armorTypes: string[]
    attackMotions: DataSystem.AttackMotion[]
    battleBgm: Audio
    battleback1Name: string
    battleback2Name: string
    battlerHue: number
    battlerName: string
    battleSystem: number
    boat: DataSystem.Vehicle
    currencyUnit: string
    defeatMe: Audio
    editMapId: number
    elements: string[]
    equipTypes: string[]
    gameTitle: string
    gameoverMe: Audio
    itemCategories: boolean[]
    locale: string
    magicSkills: number[]
    menuCommands: boolean[]
    optAutosave: boolean
    optDisplayTp: boolean
    optDrawTitle: boolean
    optExtraExp: boolean
    optFloorDeath: boolean
    optFollowers: boolean
    optKeyItemsNumber: boolean
    optSideView: boolean
    optSlipDeath: boolean
    optTransparent: boolean
    partyMembers: number[]
    ship: DataSystem.Vehicle
    skillTypes: string[]
    sounds: Audio[]
    startMapId: number
    startX: number
    startY: number
    switches: string[]
    terms: DataSystem.Terms
    testBattlers: DataSystem.TestBattler[]
    testTroopId: number
    title1Name: string
    title2Name: string
    titleBgm: Audio
    titleCommandWindow: DataSystem.TitleCommandWindow
    variables: string[]
    versionId: number
    victoryMe: Audio
    weaponTypes: string[]
    windowTone: number[]
  }
}

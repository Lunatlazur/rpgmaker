declare namespace RPGMakerMV {
  type Tagged<T, N extends string> = T & { '@Tag'?: N }

  // code: [101]
  // parameters: showTextParameters
  type WindowBackgroundTypes = {
    Window: 0
    Darken: 1
    Transparent: 2
  }
  type WindowBackgroundType = WindowBackgroundTypes[keyof WindowBackgroundTypes]
  type WindowPositionTypes = {
    Top: 0
    Center: 1
    Bottom: 2
  }
  type WindowPositionType = WindowPositionTypes[keyof WindowPositionTypes]
  type ShowTextCommandParameters = [
    string, number, WindowBackgroundType, WindowPositionType,
  ]
  interface EventCommandCode101 {
    code: 101
    parameters: ShowTextCommandParameters
  }

  // code: [102]
  // parameters: showChoicesParameters
  type ShowTextCommand = EventCommandCode101
  type ShowChoicesCommandParameters = [
    string[], number, number, WindowBackgroundType, WindowPositionType,
  ]
  interface EventCommandCode102 {
    code: 102
    parameters: ShowChoicesCommandParameters
  }
  type ShowChoicesCommand = EventCommandCode102

  // code: [103]
  // parameters: inputNumberParameters
  type InputNumberCommandParameters = [
    number, number,
  ]
  interface EventCommandCode103 {
    code: 103
    parameters: InputNumberCommandParameters
  }
  type InputNumberCommand = EventCommandCode103

  // code: [104]
  // parameters: selectItemParameters
  type SelectItemTypes = {
    UsualItem: 1
    KeyItem: 2
    HiddenItemA: 3
    HiddenItemB: 4
  }
  type SelectItemType = SelectItemTypes[keyof SelectItemTypes]
  type SelectItemCommandParameters = [
    number, SelectItemType,
  ]
  interface EventCommandCode104 {
    code: 104
    parameters: SelectItemCommandParameters
  }
  type SelectItemCommand = EventCommandCode104

  // code: [402]
  // parameters: caseParameters
  // code: [403]
  // parameters: whenCanceledParameters

  // code: [105]
  // parameters: showScrollTextParameters
  type ShowScrollTextCommandParameters = [
    number, boolean,
  ]
  interface EventCommandCode105 {
    code: 105
    parameters: ShowScrollTextCommandParameters
  }
  type ShowScrollTextCommand = EventCommandCode105

  // code: [108]
  interface EventCommandCode108 {
    code: 108
    parameters: [ string ]
  }
  type CommentCommandCommand = EventCommandCode108

  // code: [111]
  // parameters: conditionalBranchParameters
  type ConditionalBranchCommandTypes = {
    Switch: Tagged<0, 'ConditionalBranchCommandType'>
    Variable: Tagged<1, 'ConditionalBranchCommandType'>
    SelfSwitch: Tagged<2, 'ConditionalBranchCommandType'>
    Timer: Tagged<3, 'ConditionalBranchCommandType'>
    Actor: Tagged<4, 'ConditionalBranchCommandType'>
    Enemy: Tagged<5, 'ConditionalBranchCommandType'>
    CharacterDirection: Tagged<6, 'ConditionalBranchCommandType'>
    Gold: Tagged<7, 'ConditionalBranchCommandType'>
    Item: Tagged<8, 'ConditionalBranchCommandType'>
    Weapon: Tagged<9, 'ConditionalBranchCommandType'>
    Armor: Tagged<10, 'ConditionalBranchCommandType'>
    InputTrigger: Tagged<11, 'ConditionalBranchCommandType'>
    Script: Tagged<12, 'ConditionalBranchCommandType'>
    Vehicle: Tagged<13, 'ConditionalBranchCommandType'>
  }
  type SwitchValueTypes = {
    On: Tagged<0, 'SwitchValueType'>
    Off: Tagged<1, 'SwitchValueType'>
  }
  type SwitchValueType = SwitchValueTypes[keyof SwitchValueTypes]
  type VariableOperandTypes = {
    Const: Tagged<0, 'VariableOperandType'>
    Variable: Tagged<1, 'VariableOperandType'>
  }
  type VariableOperandType = VariableOperandTypes[keyof VariableOperandTypes]
  type VariableOperatorTypes = {
    Equal: Tagged<0, 'VariableOperatorType'>
    GreaterThanEqual: Tagged<1, 'VariableOperatorType'>
    LessThanEqual: Tagged<2, 'VariableOperatorType'>
    GreaterThan: Tagged<3, 'VariableOperatorType'>
    LessThan: Tagged<4, 'VariableOperatorType'>
    NotEqual: Tagged<5, 'VariableOperatorType'>
  }
  type VariableOperatorType = VariableOperatorTypes[keyof VariableOperatorTypes]
  type SelfSwitchId = 'A' | 'B' | 'C' | 'D'
  type InputTriggerType = 'ok' | 'cancel' | 'shift' | 'down' | 'left' | 'right' | 'up' | 'pageup' | 'pagedown'
  type TimerOperatorTypes = {
    GreaterThanEqual: Tagged<0, 'TimerOperatorType'>
    LessThanEqual: Tagged<1, 'TimerOperatorType'>
  }
  type TimerOperatorType = TimerOperatorTypes[keyof TimerOperatorTypes]
  type ActorConditionTypes = {
    InParty: Tagged<0, 'ActorConditionType'>
    Name: Tagged<1, 'ActorConditionType'>
    ClassId: Tagged<2, 'ActorConditionType'>
    SkillId: Tagged<3, 'ActorConditionType'>
    WeaponId: Tagged<4, 'ActorConditionType'>
    ArmorId: Tagged<5, 'ActorConditionType'>
    StateId: Tagged<6, 'ActorConditionType'>
  }
  type ActorConditionTypeExceptInPartyAndName = ActorConditionTypes[keyof Omit<ActorConditionTypes, 'InParty' | 'Name'>]
  type EnemyConditionTypes = {
    Appear: Tagged<0, 'EnemyConditionType'>
    StateId: Tagged<1, 'EnemyConditionType'>
  }
  type CharacterDirectionTypes = {
    Down: Tagged<2, 'CharacterDirectionType'>
    Left: Tagged<4, 'CharacterDirectionType'>
    Right: Tagged<6, 'CharacterDirectionType'>
    Up: Tagged<8, 'CharacterDirectionType'>
  }
  type CharacterDirectionType = CharacterDirectionTypes[keyof CharacterDirectionTypes]
  type GoldOperatorTypes = {
    GreaterThanEqual: Tagged<0, 'GoldOperatorType'>
    LessThanEqual: Tagged<1, 'GoldOperatorType'>
    LessThan: Tagged<2, 'GoldOperatorType'>
  }
  type GoldOperatorType = GoldOperatorTypes[keyof GoldOperatorTypes]
  type VehicleTypes = {
    Boat: Tagged<0, 'VehicleType'>
    Ship: Tagged<1, 'VehicleType'>
    Airship: Tagged<2, 'VehicleType'>
  }
  type VehicleType = VehicleTypes[keyof VehicleTypes]
  type ConditionalBranchCommandParameters
    = [ ConditionalBranchCommandTypes['Switch'], number, SwitchValueType ]
    | [ ConditionalBranchCommandTypes['Variable'], number, VariableOperandTypes, number, VariableOperatorType ]
    | [ ConditionalBranchCommandTypes['SelfSwitch'], SelfSwitchId, SwitchValueType ]
    | [ ConditionalBranchCommandTypes['Timer'], number, TimerOperatorType ]
    | [ ConditionalBranchCommandTypes['Actor'], number, ActorConditionTypes['InParty'] ]
    | [ ConditionalBranchCommandTypes['Actor'], number, ActorConditionTypes['Name'], string ]
    | [ ConditionalBranchCommandTypes['Actor'], number, ActorConditionTypeExceptInPartyAndName, number ]
    | [ ConditionalBranchCommandTypes['Enemy'], number, EnemyConditionTypes['Appear'] ]
    | [ ConditionalBranchCommandTypes['Enemy'], number, EnemyConditionTypes['StateId'], number ]
    | [ ConditionalBranchCommandTypes['CharacterDirection'], number, CharacterDirectionType ]
    | [ ConditionalBranchCommandTypes['Gold'], number, GoldOperatorType ]
    | [ ConditionalBranchCommandTypes['Item'], number, ]
    | [ ConditionalBranchCommandTypes['Weapon'], number, boolean ]
    | [ ConditionalBranchCommandTypes['Armor'], number, boolean ]
    | [ ConditionalBranchCommandTypes['InputTrigger'], InputTriggerType ]
    | [ ConditionalBranchCommandTypes['Script'], string, ]
    | [ ConditionalBranchCommandTypes['Vehicle'], VehicleType ]
  interface EventCommandCode111 {
    code: 111
    parameters: ConditionalBranchCommandParameters
  }
  type ConditionalBranchCommand = EventCommandCode111

  // code: [411]
  // parameters: emptyParameter
  // code: [422]
  // parameters: emptyParameter
  // code: [112]
  // parameters: emptyParameter
  // code: [413]
  // parameters: emptyParameter
  // code: [113]
  // parameters: emptyParameter
  // code: [115]
  // parameters: emptyParameter

  // code: [121]
  // parameters: controlSwitchParameters
  type ControlSwitchCommandParameters = [
    number, number, SwitchValueType
  ]
  type EventCommandCode121 = {
    code: 121
    parameters: ControlSwitchCommandParameters
  }
  type ControlSwitchCommand = EventCommandCode121

  // code: [122]
  // parameters: controlVariableParameters
  // TODO: define parameters
  type ControlVariableOperationTypes = {
    Assign: Tagged<0, 'ControlVariableOperationType'>
    Add: Tagged<1, 'ControlVariableOperationType'>
    Subtract: Tagged<2, 'ControlVariableOperationType'>
    Mulitply: Tagged<3, 'ControlVariableOperationType'>
    Divide: Tagged<4, 'ControlVariableOperationType'>
    Modulo: Tagged<5, 'ControlVariableOperationType'>
  }
  type ControlVariableOperandTypes = {
    Constant: Tagged<0, 'ControlVariableOperandType'>
    Variable: Tagged<1, 'ControlVariableOperandType'>
    Random: Tagged<2, 'ControlVariableOperandType'>
    Data: Tagged<3, 'ControlVariableOperandType'>
    Script: Tagged<4, 'ControlVariableOperandType'>
  }
  type ControlVariableDataTypes = {
    Item: Tagged<0, 'ControlVariableDataType'>
    Weapon: Tagged<1, 'ControlVariableDataType'>
    Armor: Tagged<2, 'ControlVariableDataType'>
    Actor: Tagged<3, 'ControlVariableDataType'>
    Enemy: Tagged<4, 'ControlVariableDataType'>
    CharacterPosition: Tagged<5, 'ControlVariableDataType'>
    Party: Tagged<6, 'ControlVariableDataType'>
    Other: Tagged<7, 'ControlVariableDataType'>
  }
  type ControlVariableCommandParameters
    = [ number, number, ControlVariableOperationTypes, ControlVariableOperandTypes['Constant'], number ]
    | [ number, number, ControlVariableOperationTypes, ControlVariableOperandTypes['Variable'], number ]
    | [ number, number, ControlVariableOperationTypes, ControlVariableOperandTypes['Random'], number, number ]
    | [ number, number, ControlVariableOperationTypes, ControlVariableOperandTypes['Data'] ]
    | [ number, number, ControlVariableOperationTypes, ControlVariableOperandTypes['Script'] ]

  type EventCommandCode122 = {
    code: 122
    parameters: ControlVariableCommandParameters
  }
  type ControlVariableCommand = EventCommandCode122

  // code: [123]
  // parameters: controlSelfSwitchParameters
  type ControlSelfSwitchCommandParameters = [
    SelfSwitchId, SwitchValueType
  ]
  type EventCommandCode123 = {
    code: 123
    parameters: ControlSelfSwitchCommandParameters
  }
  type ControlSelfSwitchCommand = EventCommandCode123

  // code: [124]
  // parameters: controlTimerParameters
  type ControlTimerTypes = {
    Start: Tagged<0, 'ControlTimerType'>
    Stop: Tagged<1, 'ControlTimerType'>
  }
  type ControlTimerType = ControlTimerTypes[keyof ControlTimerTypes]
  type ControlTimerCommandParameters = [
    ControlTimerType, number
  ]
  type EventCommandCode124 = {
    code: 124
    parameters: ControlTimerCommandParameters
  }
  type ControlTimerCommand = EventCommandCode124

  // code: [125]
  // parameters: changeGoldParameters
  type ChangeAmountTypes = {
    Increase: Tagged<0, 'ChangeAmountType'>
    Decrease: Tagged<1, 'ChangeAmountType'>
  }
  type ChangeAmountType = ChangeAmountTypes[keyof ChangeAmountTypes]
  type ChangeGoldCommandParameters = [
    ChangeAmountType, VariableOperandType, number
  ]
  type EventCommandCode125 = {
    code: 125
    parameters: ChangeGoldCommandParameters
  }
  type ChangeGoldCommand = EventCommandCode125

  // code: [126]
  // parameters: changeItemsParameters
  // TODO: define parameters
  type ChangeItemsCommandParameters = []
  type EventCommandCode126 = {
    code: 126
    parameters: ChangeItemsCommandParameters
  }
  type ChangeItemsCommand = EventCommandCode126

  // code: [127]
  // parameters: changeWeaponsParameters
  // TODO: define parameters
  type ChangeWeaponsCommandParameters = []
  type EventCommandCode127 = {
    code: 127
    parameters: ChangeWeaponsCommandParameters
  }
  type ChangeWeaponsCommand = EventCommandCode127

  // code: [128]
  // parameters: changeArmorsParameters
  // TODO: define parameters
  type ChangeArmorsCommandParameters = []
  type EventCommandCode128 = {
    code: 128
    parameters: ChangeArmorsCommandParameters
  }
  type ChangeArmorsCommand = EventCommandCode128

  // code: [129]
  // parameters: changePartyMemberParameters
  // TODO: define parameters
  type ChangePartyMemberCommandParameters = []
  type EventCommandCode129 = {
    code: 129
    parameters: ChangePartyMemberCommandParameters
  }
  type ChangePartyMemberCommand = EventCommandCode129

  // code: [132]
  // parameters: changeBattleBGMParameters
  // TODO: define parameters
  type ChangeBattleBGMCommandParameters = []
  type EventCommandCode132 = {
    code: 132
    parameters: ChangeBattleBGMCommandParameters
  }
  type ChangeBattleBGMCommand = EventCommandCode132

  // code: [133]
  // parameters: changeVictoryMEParameters
  // TODO: define parameters
  type ChangeVictoryMECommandParameters = []
  type EventCommandCode133 = {
    code: 133
    parameters: ChangeVictoryMECommandParameters
  }
  type ChangeVictoryMECommand = EventCommandCode133

  // code: [134]
  // parameters: changeSaveAccessParameters
  // TODO: define parameters
  type ChangeSaveAccessCommandParameters = []
  type EventCommandCode134 = {
    code: 134
    parameters: ChangeSaveAccessCommandParameters
  }
  type ChangeSaveAccessCommand = EventCommandCode134

  // code: [135]
  // parameters: changeMenuAccessParameters
  // TODO: define parameters
  type ChangeMenuAccessCommandParameters = []
  type EventCommandCode135 = {
    code: 135
    parameters: ChangeMenuAccessCommandParameters
  }
  type ChangeMenuAccessCommand = EventCommandCode135

  // code: [136]
  // parameters: changeEncounterParameters
  // TODO: define parameters
  type ChangeEncounterCommandParameters = []
  type EventCommandCode136 = {
    code: 136
    parameters: ChangeEncounterCommandParameters
  }
  type ChangeEncounterCommand = EventCommandCode136

  // code: [137]
  // parameters: changeFormationAccessParameters
  // TODO: define parameters
  type ChangeFormationAccessCommandParameters = []
  type EventCommandCode137 = {
    code: 137
    parameters: ChangeFormationAccessCommandParameters
  }
  type ChangeFormationAccessCommand = EventCommandCode137

  // code: [138]
  // parameters: changeWindowColorParameters
  // TODO: define parameters
  type ChangeWindowColorCommandParameters = []
  type EventCommandCode138 = {
    code: 138
    parameters: ChangeWindowColorCommandParameters
  }
  type ChangeWindowColorCommand = EventCommandCode138

  // code: [139]
  // parameters: changeDefeatMEParameters
  // TODO: define parameters
  type ChangeDefeatMECommandParameters = []
  type EventCommandCode139 = {
    code: 139
    parameters: ChangeDefeatMECommandParameters
  }
  type ChangeDefeatMECommand = EventCommandCode139

  // code: [140]
  // parameters: changeVehicleParameters
  // TODO: define parameters
  type ChangeVehicleCommandParameters = []
  type EventCommandCode140 = {
    code: 140
    parameters: ChangeVehicleCommandParameters
  }
  type ChangeVehicleCommand = EventCommandCode140

  // code: [201]
  // parameters: transferPlayerParameters
  // TODO: define parameters
  type TransferPlayerCommandParameters = []
  type EventCommandCode201 = {
    code: 201
    parameters: TransferPlayerCommandParameters
  }
  type TransferPlayerCommand = EventCommandCode201

  // code: [202]
  // parameters: setVehicleLocationParameters
  // TODO: define parameters
  type SetVehicleLocationCommandParameters = []
  type EventCommandCode202 = {
    code: 202
    parameters: SetVehicleLocationCommandParameters
  }
  type SetVehicleLocationCommand = EventCommandCode202

  // code: [203]
  // parameters: setEventLocationParameters
  // TODO: define parameters
  type SetEventLocationCommandParameters = []
  type EventCommandCode203 = {
    code: 203
    parameters: SetEventLocationCommandParameters
  }
  type SetEventLocationCommand = EventCommandCode203

  // code: [204]
  // parameters: scrollMapParameters
  // TODO: define parameters
  type ScrollMapCommandParameters = []
  type EventCommandCode204 = {
    code: 204
    parameters: ScrollMapCommandParameters
  }
  type ScrollMapCommand = EventCommandCode204

  // code: [205]
  // parameters: setMovementRouteParameters
  // TODO: define parameters
  type SetMovementRouteCommandParameters = []
  type EventCommandCode205 = {
    code: 205
    parameters: SetMovementRouteCommandParameters
  }
  type SetMovementRouteCommand = EventCommandCode205

  // code: [206]
  // parameters: toggleRideParameters
  // TODO: define parameters
  type ToggleRideCommandParameters = []
  type EventCommandCode206 = {
    code: 206
    parameters: ToggleRideCommandParameters
  }
  type ToggleRideCommand = EventCommandCode206

  // code: [211]
  // parameters: changeTransparencyParameters
  // TODO: define parameters
  type ChangeTransparencyCommandParameters = []
  type EventCommandCode211 = {
    code: 211
    parameters: ChangeTransparencyCommandParameters
  }
  type ChangeTransparencyCommand = EventCommandCode211

  // code: [212]
  // parameters: showAnimationParameters
  // TODO: define parameters
  type ShowAnimationCommandParameters = []
  type EventCommandCode212 = {
    code: 212
    parameters: ShowAnimationCommandParameters
  }
  type ShowAnimationCommand = EventCommandCode212

  // code: [213]
  // parameters: showBalloonIconParameters
  // TODO: define parameters
  type ShowBalloonIconCommandParameters = []
  type EventCommandCode213 = {
    code: 213
    parameters: ShowBalloonIconCommandParameters
  }
  type ShowBalloonIconCommand = EventCommandCode213

  // code: [214]
  // parameters: emptyParameter

  // code: [216]
  // parameters: changePlayerFollowersParameters
  // TODO: define parameters
  type ChangePlayerFollowersCommandParameters = []
  type EventCommandCode216 = {
    code: 216
    parameters: ChangePlayerFollowersCommandParameters
  }
  type ChangePlayerFollowersCommand = EventCommandCode216

  // code: [217]
  // parameters: emptyParameter

  // code: [221]
  // parameters: emptyParameter

  // code: [222]
  // parameters: emptyParameter

  // code: [223]
  // parameters: tintScreenParameters
  // TODO: define parameters
  type TintScreenCommandParameters = []
  type EventCommandCode223 = {
    code: 223
    parameters: TintScreenCommandParameters
  }
  type TintScreenCommand = EventCommandCode223

  // code: [224]
  // parameters: flashScreenParameters
  // TODO: define parameters
  type FlashScreenCommandParameters = []
  type EventCommandCode224 = {
    code: 224
    parameters: FlashScreenCommandParameters
  }
  type FlashScreenCommand = EventCommandCode224

  // code: [225]
  // parameters: shakeScreenParameters
  // TODO: define parameters
  type ShakeScreenCommandParameters = []
  type EventCommandCode225 = {
    code: 225
    parameters: ShakeScreenCommandParameters
  }
  type ShakeScreenCommand = EventCommandCode225

  // code: [231]
  // parameters: showPictureParameters
  // TODO: define parameters
  type ShowPictureCommandParameters = []
  type EventCommandCode231 = {
    code: 231
    parameters: ShowPictureCommandParameters
  }
  type ShowPictureCommand = EventCommandCode231

  // code: [232]
  // parameters: movePictureParameters
  // TODO: define parameters
  type MovePictureCommandParameters = []
  type EventCommandCode232 = {
    code: 232
    parameters: MovePictureCommandParameters
  }
  type MovePictureCommand = EventCommandCode232

  // code: [233]
  // parameters: rotatePictureParameters
  // TODO: define parameters
  type RotatePictureCommandParameters = []
  type EventCommandCode233 = {
    code: 233
    parameters: RotatePictureCommandParameters
  }
  type RotatePictureCommand = EventCommandCode233

  // code: [234]
  // parameters: tintPictureParameters
  // TODO: define parameters
  type TintPictureCommandParameters = []
  type EventCommandCode234 = {
    code: 234
    parameters: TintPictureCommandParameters
  }
  type TintPictureCommand = EventCommandCode234

  // code: [236]
  // parameters: weatherParameters
  // TODO: define parameters
  type WeatherCommandParameters = []
  type EventCommandCode236 = {
    code: 236
    parameters: WeatherCommandParameters
  }
  type WeatherCommand = EventCommandCode236

  // code: [241]
  // parameters: playBGMParameters
  // TODO: define parameters
  type PlayBGMCommandParameters = []
  type EventCommandCode241 = {
    code: 241
    parameters: PlayBGMCommandParameters
  }
  type PlayBGMCommand = EventCommandCode241

  // code: [242]
  // parameters: fedeoutBGMParameters
  // TODO: define parameters
  type FedeoutBGMCommandParameters = []
  type EventCommandCode242 = {
    code: 242
    parameters: FedeoutBGMCommandParameters
  }
  type FedeoutBGMCommand = EventCommandCode242

  // code: [243]
  // parameters: emptyParameter

  // code: [244]
  // parameters: emptyParameter

  // code: [245]
  // parameters: playBGSParameters
  // TODO: define parameters
  type PlayBGSCommandParameters = []
  type EventCommandCode245 = {
    code: 245
    parameters: PlayBGSCommandParameters
  }
  type PlayBGSCommand = EventCommandCode245

  // code: [246]
  // parameters: fadeoutBGSParameters
  // TODO: define parameters
  type FadeoutBGSCommandParameters = []
  type EventCommandCode246 = {
    code: 246
    parameters: FadeoutBGSCommandParameters
  }
  type FadeoutBGSCommand = EventCommandCode246

  // code: [249]
  // parameters: playMEParameters
  // TODO: define parameters
  type PlayMECommandParameters = []
  type EventCommandCode249 = {
    code: 249
    parameters: PlayMECommandParameters
  }
  type PlayMECommand = EventCommandCode249

  // code: [251]
  // parameters: emptyParameter

  // code: [261]
  // parameters: playMovieParameters
  // TODO: define parameters
  type PlayMovieCommandParameters = []
  type EventCommandCode261 = {
    code: 261
    parameters: PlayMovieCommandParameters
  }
  type PlayMovieCommand = EventCommandCode261

  // code: [281]
  // parameters: changeMapNameDisplayParameters
  // TODO: define parameters
  type ChangeMapNameDisplayCommandParameters = []
  type EventCommandCode281 = {
    code: 281
    parameters: ChangeMapNameDisplayCommandParameters
  }
  type ChangeMapNameDisplayCommand = EventCommandCode281

  // code: [283]
  // parameters: changeBattleBackParameters
  // TODO: define parameters
  type ChangeBattleBackCommandParameters = []
  type EventCommandCode283 = {
    code: 283
    parameters: ChangeBattleBackCommandParameters
  }
  type ChangeBattleBackCommand = EventCommandCode283

  // code: [284]
  // parameters: changeParalaxParameters
  // TODO: define parameters
  type ChangeParalaxCommandParameters = []
  type EventCommandCode284 = {
    code: 284
    parameters: ChangeParalaxCommandParameters
  }
  type ChangeParalaxCommand = EventCommandCode284

  // code: [285]
  // parameters: getLocationInfoParameters
  // TODO: define parameters
  type GetLocationInfoCommandParameters = []
  type EventCommandCode285 = {
    code: 285
    parameters: GetLocationInfoCommandParameters
  }
  type GetLocationInfoCommand = EventCommandCode285

  // code: [301]
  // parameters: battleProcessingParameters
  // TODO: define parameters
  type BattleProcessingCommandParameters = []
  type EventCommandCode301 = {
    code: 301
    parameters: BattleProcessingCommandParameters
  }
  type BattleProcessingCommand = EventCommandCode301

  // code: [601]
  // parameters: emptyParameter

  // code: [602]
  // parameters: emptyParameter

  // code: [603]
  // parameters: emptyParameter

  // code: [302]
  // parameters: shopParameters
  // TODO: define parameters
  type ShopCommandParameters = []
  type EventCommandCode302 = {
    code: 302
    parameters: ShopCommandParameters
  }
  type ShopCommand = EventCommandCode302

  // code: [605]
  // parameters: shopFollowingParameters
  // TODO: define parameters
  type ShopFollowingCommandParameters = []
  type EventCommandCode605 = {
    code: 605
    parameters: ShopFollowingCommandParameters
  }
  type ShopFollowingCommand = EventCommandCode605

  // code: [303]
  // parameters: InputNameParameters
  // TODO: define parameters
  type InputNameCommandParameters = []
  type EventCommandCode303 = {
    code: 303
    parameters: InputNameCommandParameters
  }
  type InputNameCommand = EventCommandCode303

  // code: [311]
  // parameters: changeHPParameters
  // TODO: define parameters
  type ChangeHPCommandParameters = []
  type EventCommandCode311 = {
    code: 311
    parameters: ChangeHPCommandParameters
  }
  type ChangeHPCommand = EventCommandCode311

  // code: [312]
  // parameters: changeMPParameters
  // TODO: define parameters
  type ChangeMPCommandParameters = []
  type EventCommandCode312 = {
    code: 312
    parameters: ChangeMPCommandParameters
  }
  type ChangeMPCommand = EventCommandCode312

  // code: [313]
  // parameters: changeStateParameters
  // TODO: define parameters
  type ChangeStateCommandParameters = []
  type EventCommandCode313 = {
    code: 313
    parameters: ChangeStateCommandParameters
  }
  type ChangeStateCommand = EventCommandCode313

  // code: [314]
  // parameters: recoverAllParameters
  // TODO: define parameters
  type RecoverAllCommandParameters = []
  type EventCommandCode314 = {
    code: 314
    parameters: RecoverAllCommandParameters
  }
  type RecoverAllCommand = EventCommandCode314

  // code: [315]
  // parameters: changeEXPParameters
  // TODO: define parameters
  type ChangeEXPCommandParameters = []
  type EventCommandCode315 = {
    code: 315
    parameters: ChangeEXPCommandParameters
  }
  type ChangeEXPCommand = EventCommandCode315

  // code: [316]
  // parameters: changeLevelParameters
  // TODO: define parameters
  type ChangeLevelCommandParameters = []
  type EventCommandCode316 = {
    code: 316
    parameters: ChangeLevelCommandParameters
  }
  type ChangeLevelCommand = EventCommandCode316

  // code: [317]
  // parameters: changeParameterParameters
  // TODO: define parameters
  type ChangeParameterCommandParameters = []
  type EventCommandCode317 = {
    code: 317
    parameters: ChangeParameterCommandParameters
  }
  type ChangeParameterCommand = EventCommandCode317

  // code: [318]
  // parameters: changeSkillParameters
  // TODO: define parameters
  type ChangeSkillCommandParameters = []
  type EventCommandCode318 = {
    code: 318
    parameters: ChangeSkillCommandParameters
  }
  type ChangeSkillCommand = EventCommandCode318

  // code: [319]
  // parameters: changeEquipmentParameters
  // TODO: define parameters
  type ChangeEquipmentCommandParameters = []
  type EventCommandCode319 = {
    code: 319
    parameters: ChangeEquipmentCommandParameters
  }
  type ChangeEquipmentCommand = EventCommandCode319

  // code: [320]
  // parameters: changeNameParameters
  // TODO: define parameters
  type ChangeNameCommandParameters = []
  type EventCommandCode320 = {
    code: 320
    parameters: ChangeNameCommandParameters
  }
  type ChangeNameCommand = EventCommandCode320

  // code: [321]
  // parameters: changeClassParameters
  // TODO: define parameters
  type ChangeClassCommandParameters = []
  type EventCommandCode321 = {
    code: 321
    parameters: ChangeClassCommandParameters
  }
  type ChangeClassCommand = EventCommandCode321

  // code: [322]
  // parameters: changeActorImageParameters
  // TODO: define parameters
  type ChangeActorImageCommandParameters = []
  type EventCommandCode322 = {
    code: 322
    parameters: ChangeActorImageCommandParameters
  }
  type ChangeActorImageCommand = EventCommandCode322

  // code: [323]
  // parameters: changeVehicleImageParameters
  // TODO: define parameters
  type ChangeVehicleImageCommandParameters = []
  type EventCommandCode323 = {
    code: 323
    parameters: ChangeVehicleCommandParameters
  }
  type ChangeVehicleImageCommand = EventCommandCode323

  // code: [324]
  // parameters: changeNicknameParameters
  // TODO: define parameters
  type ChangeNicknameCommandParameters = []
  type EventCommandCode324 = {
    code: 324
    parameters: ChangeNicknameCommandParameters
  }
  type ChangeNicknameCommand = EventCommandCode324

  // code: [325]
  // parameters: changeProfileParameters
  // TODO: define parameters
  type ChangeProfileCommandParameters = []
  type EventCommandCode325 = {
    code: 325
    parameters: ChangeProfileCommandParameters
  }
  type ChangeProfileCommand = EventCommandCode325

  // code: [331]
  // parameters: changeEnemyHPParameters
  // TODO: define parameters
  type ChangeEnemyHPCommandParameters = []
  type EventCommandCode331 = {
    code: 331
    parameters: ChangeEnemyHPCommandParameters
  }
  type ChangeEnemyHPCommand = EventCommandCode331

  // code: [332]
  // parameters: changeEnemyMPParameters
  // TODO: define parameters
  type ChangeEnemyMPCommandParameters = []
  type EventCommandCode332 = {
    code: 332
    parameters: ChangeEnemyMPCommandParameters
  }
  type ChangeEnemyMPCommand = EventCommandCode332

  // code: [342]
  // parameters: changeEnemyTPParameters
  // TODO: define parameters
  type ChangeEnemyTPCommandParameters = []
  type EventCommandCode342 = {
    code: 342
    parameters: ChangeEnemyTPCommandParameters
  }
  type ChangeEnemyTPCommand = EventCommandCode342

  // code: [333]
  // parameters: changeEnemyStateParameters
  // TODO: define parameters
  type ChangeEnemyStateCommandParameters = []
  type EventCommandCode333 = {
    code: 333
    parameters: ChangeEnemyStateCommandParameters
  }
  type ChangeEnemyStateCommand = EventCommandCode333

  // code: [334]
  // parameters: recoverEnemyParameters
  // TODO: define parameters
  type RecoverEnemyCommandParameters = []
  type EventCommandCode334 = {
    code: 334
    parameters: RecoverEnemyCommandParameters
  }
  type RecoverEnemyCommand = EventCommandCode334

  // code: [335]
  // parameters: enemyAppearParameters
  // TODO: define parameters
  type EnemyAppearCommandParameters = []
  type EventCommandCode335 = {
    code: 335
    parameters: EnemyAppearCommandParameters
  }
  type EnemyAppearCommand = EventCommandCode335

  // code: [336]
  // parameters: transformEnemyParameters
  // TODO: define parameters
  type TransformEnemyCommandParameters = []
  type EventCommandCode336 = {
    code: 336
    parameters: TransformEnemyCommandParameters
  }
  type TransformEnemyCommand = EventCommandCode336

  // code: [337]
  // parameters: showBattleAnimationParameters
  // TODO: define parameters
  type ShowBattleAnimationCommandParameters = []
  type EventCommandCode337 = {
    code: 337
    parameters: ShowBattleAnimationCommandParameters
  }
  type ShowBattleAnimationCommand = EventCommandCode337

  // code: [339]
  // parameters: forceActionParameters
  // TODO: define parameters
  type ForceActionCommandParameters = []
  type EventCommandCode339 = {
    code: 339
    parameters: ForceActionCommandParameters
  }
  type ForceActionCommand = EventCommandCode339

  // code: [340]
  // parameters: emptyParameter

  // code: [351]
  // parameters: emptyParameter

  // code: [352]
  // parameters: emptyParameter

  // code: [353]
  // parameters: emptyParameter

  // code: [354]
  // parameters: emptyParameter
}

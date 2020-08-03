declare namespace RPGMakerMV {
    interface Motion {
        index: number;
        loop: boolean;
    }
}

declare class Sprite_Base extends Sprite {
    constructor();
    initialize(): void;
    _animationSprites: Sprite_Animation[];
    _effectTarget: Sprite_Base;
    _hiding: boolean;

    update(): void;
    hide(): void;
    show(): void;
    updateVisibility(): void;
    updateAnimationSprites(): void;
    startAnimation(animation: RPGMakerMV.DataAnimation, mirror: boolean, delay: number): void;
    isAnimationPlaying(): boolean;
}

declare class Sprite_Button extends Sprite {
    constructor();
    initialize(): void;
    _touching: boolean;
    _coldFrame: Rectangle;
    _hotFrame: Rectangle;
    _clickHandler: Function;

    update(): void;
    updateFrame(): void;
    setColdFrame(x: number, y: number, width: number, height: number): void;
    setHotFrame(x: number, y: number, width: number, height: number): void;
    setClickHandler(method: Function): void;
    callClickHandler(): void;
    processTouch(): void;
    isActive(): boolean;
    isButtonTouched(): boolean;
    canvasToLocalX(x: number): number;
    canvasToLocalY(y: number): number;
    reserveFaceImages(): void;
}

declare class Sprite_Character extends Sprite_Base {
    constructor(character?: Game_CharacterBase);
    initialize(character?: Game_CharacterBase): void;
    _character: Game_Character;
    _balloonSprite: Sprite_Balloon;
    _balloonDuration: number;
    _tilesetId: number;
    _upperBody: Sprite;
    _lowerBody: Sprite;

    initMembers(): void;
    setCharacter(character: Game_CharacterBase): void;
    update(): void;
    updateVisibility(): void;
    isTile(): boolean;
    tilesetBitmap(tileId: number): Bitmap;
    updateBitmap(): void;
    _tileId: number;
    _characterName: string;
    _characterIndex: number;
    isImageChanged(): boolean;
    setTileBitmap(): void;
    setCharacterBitmap(): void;
    _isBigCharacter: boolean;
    updateFrame(): void;
    updateTileFrame(): void;
    updateCharacterFrame(): void;
    characterBlockX(): number;
    characterBlockY(): number;
    characterPatternX(): number;
    characterPatternY(): number;
    patternWidth(): number;
    patternHeight(): number;
    updateHalfBodySprites(): void;
    createHalfBodySprites(): void;
    updatePosition(): void;
    updateAnimation(): void;
    updateOther(): void;
    _bushDepth: number;
    setupAnimation(): void;
    setupBalloon(): void;
    startBalloon(): void;
    updateBalloon(): void;
    endBalloon(): void;
    isBalloonPlaying(): boolean;
}

declare class Sprite_Battler extends Sprite_Base {
    constructor();
    initialize(battler?: Game_Battler): void;
    _battler: Game_Battler;
    _damages: Sprite_Damage[];
    _homeX: number;
    _homeY: number;
    _offsetX: number;
    _offsetY: number;
    _targetOffsetX: number;
    _targetOffsetY: number;
    _movementDuration: number;
    _selectionEffectCount: number;

    initMembers(): void;
    setBattler(battler: Game_Battler): void;
    setHome(x: number, y: number): void;
    update(): void;
    updateVisibility(): void;
    updateMain(): void;
    updateBitmap(): void;
    updateFrame(): void;
    updateMove(): void;
    updatePosition(): void;
    updateAnimation(): void;
    updateDamagePopup(): void;
    updateSelectionEffect(): void;
    setupAnimation(): void;
    setupDamagePopup(): void;
    damageOffsetX(): number;
    damageOffsetY(): number;
    startMove(x: number, y: number, duration: number): void;
    onMoveEnd(): void;
    isEffecting(): boolean;
    isMoving(): boolean;
    inHomePosition(): boolean;
}

declare class Sprite_Actor extends Sprite_Battler {
    constructor();

    static MOTIONS: {
        walk:     { index: 0,  loop: true  },
        wait:     { index: 1,  loop: true  },
        chant:    { index: 2,  loop: true  },
        guard:    { index: 3,  loop: true  },
        damage:   { index: 4,  loop: false },
        evade:    { index: 5,  loop: false },
        thrust:   { index: 6,  loop: false },
        swing:    { index: 7,  loop: false },
        missile:  { index: 8,  loop: false },
        skill:    { index: 9,  loop: false },
        spell:    { index: 10, loop: false },
        item:     { index: 11, loop: false },
        escape:   { index: 12, loop: true  },
        victory:  { index: 13, loop: true  },
        dying:    { index: 14, loop: true  },
        abnormal: { index: 15, loop: true  },
        sleep:    { index: 16, loop: true  },
        dead:     { index: 17, loop: true  }
    } & { [key: string]: RPGMakerMV.Motion };

    initialize(battler?: Game_Actor): void;
    initMembers(): void;
    _battlerName: string;
    _motion: RPGMakerMV.Motion;
    _motionCount: number;
    _pattern: number;

    createMainSprite(): void;
    _mainSprite: Sprite_Base;
    _effectTarget: Sprite_Base;
    createShadowSprite(): void;
    _shadowSprite: Sprite;
    createWeaponSprite(): void;
    _weaponSprite: Sprite_Weapon;
    createStateSprite(): void;
    _stateSprite: Sprite_StateOverlay;
    setBattler(battler: Game_Actor): void;
    moveToStartPosition(): void;
    setActorHome(index: number): void;
    update(): void;
    updateShadow(): void;
    updateMain(): void;
    setupMotion(): void;
    setupWeaponAnimation(): void;
    startMotion(motionType: string): void;
    updateTargetPosition(): void;
    updateBitmap(): void;
    updateFrame(): void;
    updateMove(): void;
    updateMotion(): void;
    updateMotionCount(): void;
    motionSpeed(): number;
    refreshMotion(): void;
    startEntryMotion(): void;
    stepForward(): void;
    stepBack(): void;
    retreat(): void;
    onMoveEnd(): void;
    damageOffsetX(): number;
    damageOffsetY(): number;
}

declare class Sprite_Enemy extends Sprite_Battler {
    constructor();
    initialize(battler?: Game_Enemy): void;
    initMembers(): void;
    _enemy: Game_Enemy;
    _appeared: boolean;
    _battlerName: string;
    _battlerHue: number;
    _effectType: string;
    _effectDuration: number;
    _shake: number;
    createStateIconSprite(): void;
    _stateIconSprite: Sprite_StateIcon;
    setBattler(battler: Game_Enemy): void;
    update(): void;
    updateBitmap(): void;
    loadBitmap(name: string, hue: number): void;
    updateFrame(): void;
    updatePosition(): void;
    updateStateSprite(): void;
    initVisibility(): void;
    setupEffect(): void;
    startEffect(effectType: string): void;
    startAppear(): void;
    startDisappear(): void;
    startWhiten(): void;
    startBlink(): void;
    startCollapse(): void;
    startBossCollapse(): void;
    startInstantCollapse(): void;
    updateEffect(): void;
    isEffecting(): boolean;
    revertToNormal(): void;
    updateWhiten(): void;
    updateBlink(): void;
    updateAppear(): void;
    updateDisappear(): void;
    updateCollapse(): void;
    updateBossCollapse(): void;
    updateInstantCollapse(): void;
    damageOffsetX(): number;
    damageOffsetY(): number;
}

declare class Sprite_Animation extends Sprite {
    constructor();
    initialize(): void;
    initMembers(): void;
    _reduceArtifacts: boolean;
    _target: Sprite_Base;
    _animation: RPGMakerMV.DataAnimation;
    _mirror: boolean;
    _delay: number;
    _rate: number;
    _duration: number;
    _flashColor: number[];
    _flashDuration: number;
    _screenFlashDuration: number;
    _hidingDuration: number;
    _bitmap1: Bitmap;
    _bitmap2: Bitmap;
    _cellSprites: Sprite[];
    _screenFlashSprite: ScreenSprite;
    _duplicated: boolean;

    setup(target: Sprite_Base, animation: RPGMakerMV.DataAnimation, mirror: boolean, delay: number): void;
    remove(): void;
    setupRate(): void;
    setupDuration(): void;
    update(): void;
    updateFlash(): void;
    updateScreenFlash(): void;
    absoluteX(): number;
    absoluteY(): number;
    updateHiding(): void;
    isPlaying(): boolean;
    loadBitmaps(): void;
    isReady(): boolean;
    createSprites(): void;
    createCellSprites(): void;
    createScreenFlashSprite(): void;
    updateMain(): void;
    updatePosition(): void;
    updateFrame(): void;
    currentFrameIndex(): void;
    updateAllCellSprites(frame: number[][]): void;
    updateCellSprite(sprite: Sprite, cell: number[]): void;
    processTimingData(timing: RPGMakerMV.AnimationTiming): void;
    startFlash(color: number[], duration: number): void;
    startScreenFlash(color: number[], duration: number): void;
    startHiding(duration: number): void;
}

declare class Sprite_Damage extends Sprite {
    constructor();
    initialize(): void;
    _duration: number;
    _flashColor: number[];
    _flashDuration: number;
    _damageBitmap: Bitmap;

    setup(target: Game_Battler): void;
    digitWidth(): number;
    digitHeight(): number;
    createMiss(): void;
    createDigits(baseRow: number, value: number): void;
    createChildSprite(): Sprite;
    update(): void;
    updateChild(sprite: Sprite): void;
    updateFlash(): void;
    updateOpacity(): void;
    isPlaying(): boolean;
}

declare class Sprite_StateIcon extends Sprite {
    constructor();
    initialize(): void;
    static _iconWidth: number;
    static _iconHeight: number;

    initMembers(): void;
    _battler: Game_Battler;
    _iconIndex: number;
    _animationCount: number;
    _animationIndex: number;

    setup(battler: Game_Battler): void;
    update(): void;
    animationWait(): number;
    updateIcon(): void;
    updateFrame(): void;
}

declare class Sprite_StateOverlay extends Sprite_Base {
    constructor();
    initialize(): void;
    initMembers(): void;
    _battler: Game_Battler;
    _overlayIndex: number;
    _animationCount: number;
    _pattern: number;

    loadBitmap(): void;
    setup(battler: Game_Battler): void;
    update(): void;
    animationWait(): number;
    updatePattern(): void;
    updateFrame(): void;
}

declare class Sprite_Weapon extends Sprite_Base {
    constructor();
    initialize(): void;
    initMembers(): void;
    _weaponImageId: number;
    _animationCount: number;
    _pattern: number;

    setup(weaponImageId: number): void;
    update(): void;
    animationWait(): number;
    updatePattern(): void;
    loadBitmap(): void;
    updateFrame(): void;
    isPlaying(): boolean;
}

declare class Sprite_Balloon extends Sprite_Base {
    constructor();
    initialize(): void;
    initMembers(): void;
    _balloonId: number;
    _duration: number;

    loadBitmap(): void;
    setup(balloonId: number): void;
    update(): void;
    updateFrame(): void;
    speed(): number;
    waitTime(): number;
    frameIndex(): number;
    isPlaying(): boolean;
}

declare class Sprite_Picture extends Sprite {
    constructor(pictureId: number);
    initialize(): void;
    initialize(pictureId: number): void;
    _pictureId: number;
    _pictureName: string;
    _isPicture: boolean;

    picture(): Game_Picture;
    update(): void;
    updateBitmap(): void;
    updateOrigin(): void;
    updatePosition(): void;
    updateScale(): void;
    updateTone(): void;
    updateOther(): void;
    loadBitmap(): void;
}

declare class Sprite_Timer extends Sprite {
    constructor();
    initialize(): void;
    _seconds: number;

    createBitmap(): void;
    update(): void;
    updateBitmap(): void;
    redraw(): void;
    timerText(): string;
    updatePosition(): void;
    updateVisibility(): void;
}

declare class Sprite_Destination extends Sprite {
    constructor();
    initialize(): void;
    _frameCount: number;

    update(): void;
    createBitmap(): void;
    updatePosition(): void;
    updateAnimation(): void;
}

declare class Spriteset_Base extends Sprite {
    constructor();
    initialize(): void;
    _tone: number[];
    opaque: boolean;

    createLowerLayer(): void;
    createUpperLayer(): void;
    update(): void;
    createBaseSprite(): void;
    _baseSprite: Sprite;
    _blackScreen: ScreenSprite;
    createToneChanger(): void;
    createWebGLToneChanger(): void;
     _toneFilter: ToneFilter;
    createCanvasToneChanger(): void;
    _toneSprite: ToneSprite;
    createPictures(): void;
    _pictureContainer: Sprite;
    createTimer(): void;
    _timerSprite: Sprite_Timer;
    createScreenSprites(): void;
    _flashSprite: ScreenSprite;
    _fadeSprite: ScreenSprite;
    updateScreenSprites(): void;
    updateToneChanger(): void;
    updateWebGLToneChanger(): void;
    updateCanvasToneChanger(): void;
    updatePosition(): void;
}

declare class Spriteset_Map extends Spriteset_Base {
    constructor();
    initialize(): void;

    createLowerLayer(): void;
    update(): void;
    hideCharacters(): void;
    createParallax(): void;
    _parallax: TilingSprite;
    createTilemap(): void;
    _tilemap: Tilemap;
    loadTileset(): void;
    _tileset: RPGMakerMV.DataTileset;
    createCharacters(): void;
    _characterSprites: Sprite_Character[];
    createShadow(): void;
    _shadowSprite: Sprite;
    createDestination(): void;
    _destinationSprite: Sprite_Destination;
    createWeather(): void;
    _weather: Weather;
    updateTileset(): void;

    _canvasReAddParallax(): void;

    updateParallax(): void;
    _parallaxName: string;
    updateTilemap(): void;
    updateShadow(): void;
    updateWeather(): void;
}

declare class Spriteset_Battle extends Spriteset_Base {
    constructor();
    initialize(): void;
    _battlebackLocated: boolean;

    createLowerLayer(): void;
    createBackground(): void;
    _backgroundSprite: Sprite;
    update(): void;
    createBattleField(): void;
    _battleField: Sprite;
    createBattleback(): void;
    _back1Sprite: TilingSprite;
    _back2Sprite: TilingSprite;
    updateBattleback(): void;
    locateBattleback(): void;
    battleback1Bitmap(): Bitmap;
    battleback2Bitmap(): Bitmap;
    battleback1Name(): string;
    battleback2Name(): string;
    overworldBattleback1Name(): string;
    overworldBattleback2Name(): string;
    normalBattleback1Name(): string;
    normalBattleback2Name(): string;
    terrainBattleback1Name(type: number): string;
    terrainBattleback2Name(type: number): string;
    defaultBattleback1Name(): string;
    defaultBattleback2Name(): string;
    shipBattleback1Name(): string;
    shipBattleback2Name(): string;
    autotileType(z: number): number;
    createEnemies(): void;
    _enemySprites: Sprite_Enemy[];
    compareEnemySprite(a: Sprite_Enemy, b: Sprite_Enemy): number;
    createActors(): void;
    _actorSprites: Sprite_Actor[];
    updateActors(): void;
    battlerSprites(): Sprite_Battler[];
    isAnimationPlaying(): boolean;
    isEffecting(): boolean;
    isAnyoneMoving(): boolean;
    isBusy(): boolean;
}

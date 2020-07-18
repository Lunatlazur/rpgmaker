/**
 * jsonで保存されている段階のデータ型
 *
 * metaキーを除いたものになります。
 *
 * @example
 * type IJsonDataState = JsonDataOf<IDataState>;
 */
// declare type JsonDataOf<T> = Pick<T, ({ [P in keyof T]: P } & { [P in "meta"]: never })[keyof T]>;

declare namespace RPGMakerMV {

    /**
     * @description `id` をもつデータ
     */
    interface Identifiable {
        /** ID */
        id: number;
    }

    /**
     * @description `note` をもつデータ
     */
    interface Annotatable {
        /** メモ */
        note: string;
        /** メタ情報 */
        meta: Meta;
    }

    /**
     * @description メタ情報
     *
     * @memberof Annotatable
     * */
    interface Meta {
        [name: string]: string | true;
    }

    /**
     * @memberof AnimationTiming
     * @memberof Vehicle
     * @memberof DataSystem
     * @memberof DataMap
     */
    interface Sound {
        name: string;
        pan: number;
        pitch: number;
        volume: number;
    }

    /**
     * @memberof DataActor
     * @memberof DataClass
     * @memberof DataEquipItem
     * @memberof DataEnemy
     * @memberof DataState
     */
    interface Trait {
        code: number;
        dataId: number;
        value: number;
    }

    /**
     * @description 使用効果
     *
     * @memberof DataActor
     * @memberof DataClass
     * @memberof DataEquipItem
     * @memberof DataEnemy
     * @memberof DataState
     */
    interface Effect {
        code: number;
        dataId: number;
        value1: number;
        value2: number;
    }

    /**
     * @memberof DataEnemy
     */
    interface Action {
        conditionParam1: number;
        conditionParam2: number;
        conditionType: number;
        rating: number;
        skillId: number;
    }

    /**
     * @description イベントコマンド
     *
     * @memberof BattleEventPage
     * @memberof DataCommonEvent
     * @memberof MapEventPage
     */
    interface EventCommand {
        code: number;
        indent: number;
        parameters: Array<number | string>;
    }

    interface MoveCommand {
        code: number;
        parameters: number[];
    }

    interface MoveRoute {
        list: MoveCommand[];
        repeat: boolean;
        skippable: boolean;
        wait: boolean;
    }

    /**
     * @description アクター
     */
    interface DataActor extends Identifiable, Annotatable {
        battlerName: string;
        characterIndex: number;
        characterName: string;
        classId: number;
        equips: number[];
        faceIndex: number;
        faceName: string;
        traits: Trait[];
        initialLevel: number;
        maxLevel: number;
        name: string;
        nickname: string;
        profile: string;
    }

    /**
     * @description 職業
     */
    interface DataClass extends Identifiable, Annotatable {
        expParams: number[];
        traits: Trait[];
        learnings: {
            level: number;
            note: string;
            skillId: number;
        }[];
        name: string;
        params: number[][];
    }

    /**
     * @description スキル
     */
    interface DataSkill extends Identifiable, Annotatable {
        /** アニメーション */
        animationId: number;
        /** ダメージ */
        damage: {
            /** 会心 */
            critical: boolean;
            /** 属性 */
            elementId: number;
            /** 計算式 */
            formula: string;
            /** タイプ */
            type: number;
            /** 分散度 */
            variance: number;
        }
        /** 説明 */
        description: string;
        /** 使用効果 */
        effects: Effect[];
        /** 命中タイプ */
        hitType: number;
        /** アイコン */
        iconIndex: number;
        /** メッセージ (使用者の名前)～ */
        message1: string;
        /** メッセージ */
        message2: string;
        /** 消費MP */
        mpCost: number;
        /** 名前 */
        name: string;
        /** 使用可能時 */
        occasion: number;
        /** 連続回数 */
        repeats: number;
        /** 武器タイプ1 */
        requiredWtypeId1: number;
        /** 武器タイプ2 */
        requiredWtypeId2: number;
        /** 範囲 */
        scope: number;
        /** 速度補正 */
        speed: number;
        /** スキルタイプ */
        stypeId: number;
        /** 成功率 */
        successRate: number;
        /** 消費TP */
        tpCost: number;
        /** 得TP */
        tpGain: number;
    }

    /**
     * @description 全アイテム共通
     */
    interface DataBasicItem extends Identifiable, Annotatable {
        description: string;
        name: string;
        iconIndex: number;
        price: number;
    }

    type DataAnyItem = RPGMakerMV.DataItem | RPGMakerMV.DataWeapon | RPGMakerMV.DataArmor

    /**
     * @description アイテム
     */
    interface DataItem extends DataBasicItem {
        animationId: number;
        consumable: boolean;
        damage: {
            critical: boolean;
            elementId: number;
            formula: string;
            type: number;
            variance: number;
        }
        effects: Effect[];
        hitType: number;
        itypeId: number;
        occasion: number;
        repeats: number;
        scope: number;
        speed: number;
        successRate: number;
        tpGain: number;
    }

    /**
     * @description 装備アイテム
     */
    interface DataEquip extends DataBasicItem {
        etypeId: number;
        traits: Trait[];
        params: number[];
    }

    /**
     * @description 武器
     */
    interface DataWeapon extends DataEquip {
        animationId: number;
        wtypeId: number;
    }

    /**
     * @description 防具
     */
    interface DataArmor extends DataEquip {
        atypeId: number;
    }

    /**
     * @description ドロップアイテム
     *
     * @memberof DataEnemy
     */
    interface DropItem {
        kind: number;
        dataId: number;
        denominator: number;
    }

    /**
     * @description 敵
     */
    interface DataEnemy extends Identifiable, Annotatable {
        actions: Action[];
        battlerHue: number;
        battlerName: string;
        dropItems: DropItem[];
        exp: number;
        traits: Trait[];
        gold: number;
        name: string;
        params: number[];
    }

    /**
     * @memberof DataTroop
     */
    interface BattleEventPage {
        conditions: {
            actorHP: number;
            actorId: number;
            actorValid: boolean;
            enemyHp: number;
            enemyIndex: number;
            enemyValid: boolean;
            switchId: number;
            switchValid: boolean;
            turnA: number;
            turnB: number;
            turnEnding: boolean;
            turnValid: boolean;
        };
        list: EventCommand[];
        span: number;
    }

    /**
     * @description 敵グループ
     */
    interface DataTroop extends Identifiable {
        members: {
            enemyId: number;
            x: number;
            y: number;
            hidden: boolean;
        }[];
        name: string;
        pages: BattleEventPage[];
    }

    /**
     * @description ステート
     */
    interface DataState extends Identifiable, Annotatable {
        autoRemovalTiming: number;
        chanceByDamage: number;
        iconIndex: number;
        maxTurns: number;
        message1: string;
        message2: string;
        message3: string;
        message4: string;
        minTurns: number;
        motion: number;
        name: string;
        overlay: number;
        priority: number;
        releaseByDamage: boolean;
        removeAtBattleEnd: boolean;
        removeByDamage: boolean;
        removeByRestriction: boolean;
        removeByWalking: boolean;
        restriction: number;
        stepsToRemove: number;
        traits: Trait[];
    }

    /**
     * @memberof DataAnimation
     */
    interface AnimationTiming {
        flashColor: number[];
        flashDuration: number;
        flashScope: number;
        frame: number;
        se: Sound;
    }

    /**
     * @description アニメーション
     */
    interface DataAnimation extends Identifiable {
        animation1Hue: number;
        animation1Name: string;
        animation2Hue: number;
        animation2Name: string;
        frames: number[][][];
        name: string;
        position: number;
        timings: AnimationTiming[];
    }

    /**
     * @description タイルセット
     */
    interface DataTileset extends Identifiable, Annotatable {
        flags: number[];
        mode: number;
        name: string;
        tilesetNames: string[];
    }

    /**
     * @description コモンイベント
     */
    interface DataCommonEvent extends Identifiable {
        list: EventCommand[];
        name: string;
        switchId: number;
        trigger: number;
    }

    /**
     * @description 乗り物
     */
    interface Vehicle {
        bgm: Sound;
        characterIndex: number;
        characterName: string;
        startMapId: number;
        startX: number;
        startY: number;
    }

    /**
     * @description システム
     */
    interface DataSystem {
        airship: Vehicle;
        armorTypes: string[];
        attackMotions: {
            type: number;
            weaponImageId: number;
        }[];
        battleBgm: Sound;
        battleback1Name: string;
        battleback2Name: string;
        battlerHue: number;
        battlerName: string;
        boat: Vehicle;
        currencyUnit: string;
        defeatMe: Sound;
        editMapId: number;
        elements: string[];
        equipTypes: string[];
        gameTitle: string;
        gameoverMe: Sound;
        locale: string;
        magicSkills: number[];
        menuCommands: boolean[];
        optDisplayTp: boolean;
        optDrawTitle: boolean;
        optExtraExp: boolean;
        optFloorDeath: boolean;
        optFollowers: boolean;
        optSideView: boolean;
        optSlipDeath: boolean;
        optTransparent: boolean;
        partyMembers: number[];
        ship: Vehicle;
        skillTypes: string[];
        sounds: Sound[];
        startMapId: number;
        startX: number;
        startY: number;
        switches: string[];
        terms: {
            basic: string[];
            commands: string[];
            params: string[];
            messages: {
                possession: string;
                expTotal: string;
                expNext: string;
                saveMessage: string;
                loadMessage: string;
                file: string;
                partyName: string;
                emerge: string;
                preemptive: string;
                surprise: string;
                escapeStart: string;
                escapeFailure: string;
                victory: string;
                defeat: string;
                obtainExp: string;
                obtainGold: string;
                obtainItem: string;
                levelUp: string;
                obtainSkill: string;
                useItem: string;
                criticalToEnemy: string;
                criticalToActor: string;
                actorDamage: string;
                actorRecovery: string;
                actorGain: string;
                actorLoss: string;
                actorDrain: string;
                actorNoDamage: string;
                actorNoHit: string;
                enemyDamage: string;
                enemyRecovery: string;
                enemyGain: string;
                enemyLoss: string;
                enemyDrain: string;
                enemyNoDamage: string;
                enemyNoHit: string;
                evasion: string;
                magicEvasion: string;
                magicReflection: string;
                counterAttack: string;
                substitute: string;
                buffAdd: string;
                debuffAdd: string;
                buffRemove: string;
                actionFailure: string;
                bgmVolume: string;
                bgsVolume: string;
                meVolume: string;
                seVolume: string;
                alwaysDash: string;
                commandRemember: string;
            };
        };
        testBattlers: {
            actorId: number;
            equips: number[];
            level: number;
        }[];
        testTroopId: number;
        title1Name: string;
        title2Name: string;
        titleBgm: Sound;
        variables: string[];
        versionId: number;
        victoryMe: Sound;
        weaponTypes: string;
        windowTone: number[];
    }

    /**
     * @description マップ情報
     */
    interface DataMapInfo extends Identifiable {
        expanded: boolean;
        name: string;
        order: number;
        parentId: number;
        scrollX: number;
        scrollY: number;
    }

    /**
     * @memberof DataMap
     */
    interface Encounter {
        regionSet: number[];
        troopId: number;
        weight: number;
    }

    /**
     * @memberof MapEvent
     */
    interface MapEventPage {
        conditions: {
            actorId: number;
            actorValid: boolean;
            itemId: number;
            itemValid: boolean;
            selfSwitchCh: string;
            selfSwitchValid: boolean;
            switch1Id: number;
            switch1Valid: boolean;
            switch2Id: number;
            switch2Valid: boolean;
            variableId: number;
            variableValid: boolean;
            variableValue: number;
        };
        directionFix: boolean;
        image: {
            tileId: number;
            characterName: string;
            direction: number;
            pattern: number;
            characterIndex: number;
        }
        list: EventCommand[];
        moveFrequency: number;
        moveRoute: {
            list: {
                code: number;
                parameters: number[];
            }[];
            repeat: boolean;
            skippable: boolean;
            wait: boolean;
        };
        moveSpeed: number;
        moveType: number;
        priorityType: number;
        stepAnime: boolean;
        through: boolean;
        trigger: number;
        walkAnime: boolean;
    }

    /**
     * @memberof DataMap
     */
    interface MapEvent extends Identifiable, Annotatable {
        name: string;
        pages: MapEventPage[];
    }

    /** マップ */
    interface DataMap extends Annotatable {
        autoplayBgm: boolean;
        autoplayBgs: boolean;
        battleback1Name: string;
        battleback2Name: string;
        bgm: Sound;
        bgs: Sound;
        disableDashing: boolean;
        displayName: string;
        encounterList: Encounter[];
        encounterStep: number;
        height: number;
        parallaxLoopX: boolean;
        parallaxLoopY: boolean;
        parallaxName: string;
        parallaxShow: boolean;
        parallaxSx: number;
        parallaxSy: number;
        scrollType: number;
        specifyBattleback: boolean;
        tilesetId: number;
        width: number;
        data: number[];
        events: MapEvent[];
    }
}

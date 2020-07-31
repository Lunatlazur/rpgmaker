//=============================================================================
// AltMenuScreen.js
//=============================================================================
/*:
 * @plugindesc Alternative menu screen layout.
 * @author Yoji Ojima
 *
 * @help This plugin does not provide plugin commands.
 */
/*:ja
 * @plugindesc メニュー画面のレイアウトを変更します。
 * @author Yoji Ojima
 *
 * @help このプラグインには、プラグインコマンドはありません。
 */
{
    const _Scene_Menu_create = Scene_Menu.prototype.create;
    Scene_Menu.prototype.create = function(this: Scene_Menu): void {
        _Scene_Menu_create.call(this);

        this._statusWindow.x = 0;
        this._statusWindow.y = this._commandWindow.height;
        this._goldWindow.x = Graphics.boxWidth - this._goldWindow.width;
    };

    Window_MenuCommand.prototype.windowWidth = function(): number {
        return Graphics.boxWidth;
    };

    Window_MenuCommand.prototype.maxCols = function(): number {
        return 4;
    };

    Window_MenuCommand.prototype.numVisibleRows = function(): number {
        return 2;
    };

    Window_MenuStatus.prototype.windowWidth = function(): number {
        return Graphics.boxWidth;
    };

    Window_MenuStatus.prototype.windowHeight = function(): number {
        const h1: number = this.fittingHeight(1);
        const h2: number = this.fittingHeight(2);
        return Graphics.boxHeight - h1 - h2;
    };

    Window_MenuStatus.prototype.maxCols = function(): number {
        return 4;
    };

    Window_MenuStatus.prototype.numVisibleRows = function(): number {
        return 1;
    };

    Window_MenuStatus.prototype.drawItemImage = function(this: Window_MenuStatus, index: number): void {
        const actor: Game_Actor = $gameParty.members()[index];
        const rect: Rectangle = this.itemRectForText(index);
        const w: number = Math.min(rect.width, 144);
        const h: number = Math.min(rect.height, 144);
        const lineHeight: number = this.lineHeight();
        this.changePaintOpacity(actor.isBattleMember());
        this.drawActorFace(actor, rect.x, rect.y + lineHeight * 2.5, w, h);
        this.changePaintOpacity(true);
    };

    Window_MenuStatus.prototype.drawItemStatus = function(this: Window_MenuStatus, index: number): void {
        const actor: Game_Actor = $gameParty.members()[index];
        const rect: Rectangle = this.itemRectForText(index);
        const x: number = rect.x;
        const y: number = rect.y;
        const width: number = rect.width;
        const bottom: number = y + rect.height;
        const lineHeight: number = this.lineHeight();

        this.drawActorName(actor, x, y + lineHeight * 0, width);
        this.drawActorLevel(actor, x, y + lineHeight * 1);
        this.drawActorClass(actor, x, bottom - lineHeight * 4, width);
        this.drawActorHp(actor, x, bottom - lineHeight * 3, width);
        this.drawActorMp(actor, x, bottom - lineHeight * 2, width);
        this.drawActorIcons(actor, x, bottom - lineHeight * 1, width);
    };

    const _Window_MenuActor_initialize = Window_MenuActor.prototype.initialize;
    Window_MenuActor.prototype.initialize = function(this: Window_MenuActor): void {
        _Window_MenuActor_initialize.call(this);
        this.y = this.fittingHeight(2);
    };
}

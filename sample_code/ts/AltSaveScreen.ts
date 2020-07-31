//=============================================================================
// AltSaveScreen.js
//=============================================================================
/*:
 * @plugindesc Alternative save/load screen layout.
 * @author Yoji Ojima
 *
 * @help This plugin does not provide plugin commands.
 */
/*:ja
 * @plugindesc セーブ／ロード画面のレイアウトを変更します。
 * @author Yoji Ojima
 *
 * @help このプラグインには、プラグインコマンドはありません。
 */

interface Window_SavefileList {
    statusWindow: Window_SavefileStatus
}

class Window_SavefileStatus extends Window_Base {
    protected _id: number
    protected _mode: string

    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height)
    }

    public initialize(this: Window_SavefileStatus, x?: number, y?: number, width?: number, height?: number): void {
        super.initialize(x, y, width, height)
        this._id = 1
    }

    public setMode(this: Window_SavefileStatus, mode: string): void {
        this._mode = mode
    }

    public setId(this: Window_SavefileStatus, id: number): void {
        this._id = id
        this.refresh()
    }

    public refresh(this: Window_SavefileStatus): void {
        this.contents.clear()
        const id: number = this._id
        const valid: boolean = DataManager.isThisGameFile(id)
        const info: ISavefileInfo = DataManager.loadSavefileInfo(id)
        const rect: Rectangle = this.contents.rect
        this.resetTextColor()
        if (this._mode === "load") {
            this.changePaintOpacity(valid)
        }
        this.drawFileId(id, rect.x, rect.y)
        if (info) {
            this.changePaintOpacity(valid)
            this.drawContents(info, rect, valid)
            this.changePaintOpacity(true)
        }
    }

    public drawFileId(this: Window_SavefileStatus, id: number, x: number, y: number): void {
        this.drawText(TextManager.file + " " + id, x, y, 180)
    }

    public drawContents(this: Window_SavefileStatus, info: ISavefileInfo, rect: Rectangle, valid: boolean): void {
        const bottom = rect.y + rect.height
        const playtimeY: number = bottom - this.lineHeight()
        this.drawText(info.title, rect.x + 192, rect.y, rect.width - 192)
        if (valid) {
            this.drawPartyfaces(info, rect.x, bottom - 144)
        }
        this.drawText(info.playtime, rect.x, playtimeY, rect.width, "right")
    }

    public drawPartyfaces(this: Window_SavefileStatus, info: ISavefileInfo, x: number, y: number): void {
        if (info && info.faces) {
            for (let i = 0; i < info.faces.length; i++) {
                const data: [string, number] = info.faces[i]
                this.drawFace(data[0], data[1], x + i * 150, y)
            }
        }
    }
}

(function() {
    const _Scene_File_create = Scene_File.prototype.create
    Scene_File.prototype.create = function(this: Scene_File): void {
        _Scene_File_create.call(this)
        this._listWindow.height = this._listWindow.fittingHeight(8)

        const x = 0
        const y = this._listWindow.y + this._listWindow.height
        const width: number = Graphics.boxWidth
        const height: number = Graphics.boxHeight - y

        const statusWindow: Window_SavefileStatus = new Window_SavefileStatus(x, y, width, height)
        statusWindow.setMode(this.mode())
        this._listWindow.statusWindow = statusWindow
        this._listWindow.callUpdateHelp()
        this.addWindow(statusWindow)
    }

    const _Scene_File_start = Scene_File.prototype.start
    Scene_File.prototype.start = function(this: Scene_File): void {
        _Scene_File_start.call(this)
        this._listWindow.ensureCursorVisible()
        this._listWindow.callUpdateHelp()
    }

    Window_SavefileList.prototype.spacing = function(): number {
        return 8
    }

    Window_SavefileList.prototype.maxCols = function(): number {
        return 4
    }

    Window_SavefileList.prototype.itemHeight = function(): number {
        return this.lineHeight() * 2
    }

    const _Window_SavefileList_callUpdateHelp = Window_SavefileList.prototype.callUpdateHelp
    Window_SavefileList.prototype.callUpdateHelp = function(this: Window_SavefileList): void {
        _Window_SavefileList_callUpdateHelp.call(this)

        if (this.active && this.statusWindow) {
            this.statusWindow.setId(this.index() + 1)
        }
    }
})()

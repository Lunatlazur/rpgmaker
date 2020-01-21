//=============================================================================
// Lunatlazur_BackLog.js
// ----------------------------------------------------------------------------
// Copyright (c) 2018 Taku Aoi
// This plugin is released under the zlib License.
// http://zlib.net/zlib_license.html
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2019/12/21
// ----------------------------------------------------------------------------
// [Web]    : https://lunatlazur.com/
// [Twitter]: https://twitter.com/lunatlazur/
// [GitHub] : https://github.com/Lunatlazur/
//=============================================================================
/*:
 * @plugindesc Show message back log
 * @author Taku Aoi
 * @help This plugin shows message back log.
 */
/*:ja
 * @plugindesc バックログ表示プラグイン
 * @author あおいたく
 * @help このプラグインはバックログを表示できるようにします。
 *
 * 名前ウィンドウ表示プラグイン、メッセージ表示継続プラグインと同時に使う場合は、
 * 本プラグインを上記プラグインよりも下に配置してください。
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var pluginName = 'Lunatlazur_BackLog';
    var maxNumberOfMessages = 100;
    function getValue(params) {
        var names = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            names[_i - 1] = arguments[_i];
        }
        var found = null;
        names.forEach(function (name) {
            if (!!params[name]) {
                found = params[name];
            }
        });
        return found;
    }
    function asNumber(params) {
        var names = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            names[_i - 1] = arguments[_i];
        }
        return parseInt(getValue.apply(void 0, [params].concat(names)), 10);
    }
    var actorNameWindowPlugin = {
        enabled: false,
    };
    if (PluginManager._scripts.indexOf('Lunatlazur_ActorNameWindow') > 0) {
        actorNameWindowPlugin.enabled = true;
        var parameters = PluginManager.parameters('Lunatlazur_ActorNameWindow');
        actorNameWindowPlugin.params = {
            textColor: asNumber(parameters, 'テキストカラー'),
            horizontalOffset: asNumber(parameters, '水平位置'),
        };
    }
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.apply(this, arguments);
        switch ((command || '').toUpperCase()) {
            case 'ENABLE_BACKLOG':
            case 'バックログの有効化':
                BackLogManager.enable();
                break;
            case 'DISABLE_BACKLOG':
            case 'バックログの無効化':
                BackLogManager.disable();
                break;
        }
    };
    var BackLogManager = /** @class */ (function () {
        function BackLogManager() {
        }
        BackLogManager.initialize = function () {
            this._backLog = { rows: [] };
            this._hiddenWindows = [];
            this._enabled = true;
            this._busy = false;
        };
        BackLogManager.makeSaveContents = function () {
            return {
                enabled: this._enabled,
            };
        };
        BackLogManager.extractSaveContents = function (contents) {
            if (contents.backLogState) {
                this._enabled = contents.backLogState.enabled;
            }
        };
        Object.defineProperty(BackLogManager, "numberOfRows", {
            get: function () {
                return this._backLog.rows.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BackLogManager, "hiddenWindows", {
            get: function () {
                return this._hiddenWindows;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BackLogManager, "disabled", {
            get: function () {
                return !this._enabled;
            },
            enumerable: true,
            configurable: true
        });
        BackLogManager.enable = function () {
            this._enabled = true;
        };
        BackLogManager.disable = function () {
            this._enabled = false;
        };
        BackLogManager.pushRow = function (text, actorName) {
            if (maxNumberOfMessages <= this.numberOfRows) {
                this._backLog.rows.shift();
            }
            this._backLog.rows.push({ text: text, actorName: actorName });
        };
        BackLogManager.pushHiddenWindow = function () {
            var windows = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                windows[_i] = arguments[_i];
            }
            var _a;
            (_a = this._hiddenWindows).push.apply(_a, windows);
        };
        BackLogManager.clearHiddenWindows = function () {
            this._hiddenWindows = [];
        };
        BackLogManager.clearRows = function () {
            this._backLog.rows = [];
        };
        BackLogManager.scrolledContent = function (offset, length) {
            return this._backLog.rows.slice().reverse().slice(offset, offset + length);
        };
        BackLogManager.isBusy = function () {
            return this._busy;
        };
        BackLogManager.setBusy = function (busy) {
            this._busy = busy;
        };
        BackLogManager._backLog = {
            rows: [],
        };
        BackLogManager._hiddenWindows = [];
        BackLogManager._enabled = true;
        BackLogManager._busy = false;
        return BackLogManager;
    }());
    var DataManager_createGameObjects = DataManager.createGameObjects;
    DataManager.createGameObjects = function () {
        DataManager_createGameObjects.apply(this, arguments);
        BackLogManager.initialize();
    };
    var DataManager_makeSaveContents = DataManager.makeSaveContents;
    DataManager.makeSaveContents = function () {
        var contents = DataManager_makeSaveContents.call(this);
        contents.backLogState = BackLogManager.makeSaveContents();
        return contents;
    };
    var DataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function (contents) {
        DataManager_extractSaveContents.apply(this, arguments);
        BackLogManager.extractSaveContents(contents);
    };
    var Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
    Scene_Map.prototype.createDisplayObjects = function () {
        Scene_Map_createDisplayObjects.call(this);
        this._backLogWindow = new Window_BackLog();
        this.addChild(this._backLogWindow);
    };
    var Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function () {
        var threshold = 20;
        if (this._backLogWindow.visible) {
            this._backLogWindow.update();
            return;
        }
        Scene_Map_update.call(this);
        if (BackLogManager.disabled) {
            return;
        }
        if (this._messageWindow.isClosing() || this._messageWindow.isOpening()) {
            return;
        }
        if (this._scrollTextWindow.visible) {
            return;
        }
        if (Input.isTriggered('pageup') || TouchInput.wheelY <= -threshold) {
            if (this._messageWindow.isOpen()) {
                BackLogManager.pushHiddenWindow(this._messageWindow);
                var visibleWindows = this._messageWindow.subWindows().slice().filter(function (window) {
                    return window.visible;
                });
                if (!this._messageWindow._hideMessageManager) {
                    visibleWindows.forEach(function (window) { return window.hide(); });
                    BackLogManager.pushHiddenWindow.apply(BackLogManager, visibleWindows);
                }
                this._messageWindow._showFast = true;
                this._messageWindow.hide();
            }
            if (this._mapNameWindow.isOpen()) {
                BackLogManager.pushHiddenWindow(this._mapNameWindow);
                this._mapNameWindow.hide();
            }
            this._backLogWindow.offset = 0;
            this._backLogWindow.show();
        }
    };
    var Window_Message_startMessage = Window_Message.prototype.startMessage;
    Window_Message.prototype.startMessage = function () {
        var _this = this;
        Window_Message_startMessage.call(this);
        if (BackLogManager.isBusy()) {
            return;
        }
        BackLogManager.setBusy(true);
        var lines = this._textState.text.split('\n');
        var numVisibleRows = this.numVisibleRows();
        lines.reduce(function (prev, _, index) {
            return (index % numVisibleRows ? prev : prev.concat([lines.slice(index, index + numVisibleRows).join('\n')]));
        }, []).forEach(function (row) {
            BackLogManager.pushRow(row, _this._nameWindow && _this._nameWindow.visible && _this._nameWindow._text);
        });
    };
    var Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
    Window_Message.prototype.terminateMessage = function () {
        BackLogManager.setBusy(false);
        Window_Message_terminateMessage.call(this);
    };
    var Window_BackLog = /** @class */ (function (_super) {
        __extends(Window_BackLog, _super);
        function Window_BackLog(_) {
            var _this = _super.call(this) || this;
            _this.initialize.apply(_this, arguments);
            return _this;
        }
        Window_BackLog.prototype.initialize = function (fontSize) {
            _super.prototype.initialize.call(this, 0, 0, Graphics.width, Graphics.height);
            this._fontSize = fontSize || 28;
            this.offset = 0;
            this._stayCount = 0;
            this._touching = false;
            this.deactivate();
            this.hide();
        };
        Window_BackLog.prototype.messageWindow = function () {
            return SceneManager._scene._messageWindow;
        };
        Window_BackLog.prototype.standardPadding = function () {
            return 4;
        };
        Window_BackLog.prototype.standardFontSize = function () {
            return this._fontSize;
        };
        Window_BackLog.prototype.standardFontFace = function () {
            return Window_Message.prototype.standardFontFace.call(this);
        };
        Window_BackLog.prototype.rowHeight = function () {
            var padding = 18;
            /* 2カラムレイアウト
            const rowsPerMessage = this.messageWindow().numVisibleRows()
            */
            //* シングルカラムレイアウト
            var rowsPerMessage = this.messageWindow().numVisibleRows() + (actorNameWindowPlugin.enabled ? 1 : 0);
            //*/
            return this.lineHeight() * rowsPerMessage + padding * 2;
        };
        Window_BackLog.prototype.numVisibleRows = function () {
            return Math.floor(Graphics.height / this.rowHeight());
        };
        Window_BackLog.prototype.update = function () {
            Window_Base.prototype.update.call(this);
            this.updateArrows();
            this.processHandling();
            this.processWheel();
            this.processTouch();
            this._stayCount++;
        };
        Window_BackLog.prototype.updateArrows = function () {
            this.downArrowVisible = this.offset > 0;
            this.upArrowVisible = this.offset < BackLogManager.numberOfRows - 1;
        };
        Window_BackLog.prototype._refreshArrows = function () {
            Window.prototype._refreshArrows.call(this);
            this._downArrowSprite.move(this.width - 16, this._downArrowSprite.y);
            this._upArrowSprite.move(this.width - 16, this._upArrowSprite.y);
        };
        Window_BackLog.prototype.refresh = function () {
            this.createContents();
            this.contents.clear();
            this.resetFontSettings();
            this.updateArrows();
            this.drawRows(this.offset);
            this._stayCount = 0;
        };
        Window_BackLog.prototype.rewind = function () {
            if (this.offset > 0) {
                this.offset -= 1;
                this.refresh();
            }
        };
        Window_BackLog.prototype.forward = function () {
            if (this.offset < BackLogManager.numberOfRows - 1) {
                this.offset += 1;
                this.refresh();
            }
        };
        Window_BackLog.prototype.rewindPage = function () {
            var offset = this.offset;
            this.offset -= this.numVisibleRows();
            if (this.offset < 0) {
                this.offset = 0;
            }
            if (offset !== this.offset) {
                this.refresh();
            }
        };
        Window_BackLog.prototype.forwardPage = function () {
            var offset = this.offset;
            this.offset += this.numVisibleRows();
            if (this.offset >= BackLogManager.numberOfRows) {
                this.offset = BackLogManager.numberOfRows - 1;
            }
            if (offset !== this.offset) {
                this.refresh();
            }
        };
        Window_BackLog.prototype.isCancelTriggered = function () {
            return Input.isRepeated('cancel');
        };
        Window_BackLog.prototype.processHandling = function () {
            if (Input.isRepeated('up')) {
                this.forward();
            }
            if (Input.isRepeated('down')) {
                this.rewind();
            }
            if (this.isCancelTriggered()) {
                this.processCancel();
            }
            else if (Input.isTriggered('pageup')) {
                this.forwardPage();
            }
            else if (Input.isTriggered('pagedown')) {
                this.rewindPage();
            }
        };
        Window_BackLog.prototype.processCancel = function () {
            this.hide();
            BackLogManager.hiddenWindows.forEach(function (window) {
                window.show();
            });
            BackLogManager.clearHiddenWindows();
        };
        Window_BackLog.prototype.processWheel = function () {
            if (this.isOpen()) {
                var threshold = 20;
                if (TouchInput.wheelY >= threshold) {
                    this.rewind();
                }
                if (TouchInput.wheelY <= -threshold) {
                    this.forward();
                }
            }
        };
        Window_BackLog.prototype.isTouchedInsideFrame = function () {
            var x = this.canvasToLocalX(TouchInput.x);
            var y = this.canvasToLocalY(TouchInput.y);
            return x >= 0 && y >= 0 && x < this.width && y < this.height;
        };
        Window_BackLog.prototype.processTouch = function () {
            if (this.isOpen()) {
                if (TouchInput.isTriggered() && this.isTouchedInsideFrame()) {
                    this._touching = true;
                    this.onTouch();
                }
                else if (TouchInput.isCancelled()) {
                    this.processCancel();
                }
                if (this._touching) {
                    if (TouchInput.isPressed()) {
                        this.onTouch();
                    }
                    else {
                        this._touching = false;
                    }
                }
            }
            else {
                this._touching = false;
            }
        };
        Window_BackLog.prototype.onTouch = function () {
            var x = this.canvasToLocalX(TouchInput.x);
            var y = this.canvasToLocalY(TouchInput.y);
            if (this._stayCount > 10 && x >= this.width - 20) {
                if (y < 20) {
                    this.forward();
                }
                else if (y >= this.height - 20) {
                    this.rewind();
                }
            }
        };
        Window_BackLog.prototype.show = function () {
            this.refresh();
            _super.prototype.show.call(this);
        };
        Window_BackLog.prototype.drawRows = function (offset) {
            var _this = this;
            var rows = BackLogManager.scrolledContent(offset, this.numVisibleRows() + 1);
            var x = 14;
            var marginY = (this.lineHeight() - 2) / 2;
            rows.forEach(function (row, index) {
                var y = _this.contentsHeight() - marginY - _this.rowHeight() * (index + 1);
                _this.contents.fillRect(0, y + marginY, _this.contentsWidth(), 2, _this.textColor(8));
                /* 2カラムレイアウト
                if (actorNameWindowPlugin.enabled) {
                  if (row.actorName) {
                    this.changeTextColor(this.textColor(actorNameWindowPlugin.params.textColor))
                    this.drawText(row.actorName, x, y + this.lineHeight())
                  }
                  this.drawTextEx(row.text, x + 168, y + this.lineHeight())
                } else {
                  this.drawTextEx(row.text, x, y + this.lineHeight())
                }
                /*/
                //* シングルカラムレイアウト
                if (actorNameWindowPlugin.enabled && row.actorName) {
                    _this.changeTextColor(_this.textColor(actorNameWindowPlugin.params.textColor));
                    _this.drawText(row.actorName, x, y + _this.lineHeight());
                }
                _this.drawTextEx(row.text, x, y + _this.lineHeight() * (actorNameWindowPlugin.enabled ? 2 : 1));
                //*/
            });
        };
        return Window_BackLog;
    }(Window_Base));
})();

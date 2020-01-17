//=============================================================================
// Lunatlazur_MessageAttachmentButton.js
// ----------------------------------------------------------------------------
// Copyright (c) 2018 Taku Aoi
// This plugin is released under the zlib/libpng License.
// http://zlib.net/zlib_license.html
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2018/04/01
// ----------------------------------------------------------------------------
// [Web]    : https://lunatlazur.com/
// [Twitter]: https://twitter.com/lunatlazur/
// [GitHub] : https://github.com/Lunatlazur/
//=============================================================================
/*:
 * @plugindesc Functional button on message window
 * @author Taku Aoi
 * @help This plugin adds some functional button to the message window.
 *
 * Command parameters
 *
 * In case that the command is 'scene':
 * By passing the "XXX" part of "Scene_XXX" (for example, Save, Load, Menu,
 * Title etc) as parameter, you can make transition to the corresponding scene
 * when button is pressed.
 *
 * In case that the command is 'plugin':
 * By passing the plug-in command name and arguments as parameter, you can
 * execute the corresponding plug-in command when the button is pressed.
 *
 * @param Custom button text font
 * @desc Additional button text fonts.
 * @type string[]
 *
 * @param buttons
 * @desc configure the buttons attached to the message window.
 * @type struct<button>[]
 * @default ["{\"text\":\"save\",\"command\":\"scene\",\"parameters\":\"save\"}","{\"text\":\"load\",\"command\":\"scene\",\"parameters\":\"load\"}"]
 */
/*:ja
 * @plugindesc メッセージウィンドウ拡張ボタンプラグイン
 * @author あおいたく
 * @help このプラグインはメッセージウィンドウに任意の機能を実行するためのボタンを
 * 追加します。
 *
 * コマンドのパラメータについて
 *
 * command が scene のとき：
 * パラメータにScene_XXX の XXX の部分（Save, Load, Menu, Title など）を
 * 指定することで、ボタンを押したときに該当のシーンに遷移させることができます。
 *
 * command が plugin のとき：
 * パラメータにプラグインコマンド名とパラメータを指定することで、ボタンを
 * 押したときに該当のプラグインコマンドを実行することができます。
 * *
 * @param フォント
 * @desc 追加のフォントを指定できます。先頭にあるものが優先して読み込まれます。
 * @default ["UD デジタル 教科書体 NP-R", "Klee"]
 * @type string[]
 *
 * @param ボタン
 * @desc メッセージウィンドウに表示するボタンを設定します。
 * @type struct<button>[]
 * @default ["{\"text\":\"セーブ\",\"command\":\"scene\",\"parameters\":\"save\"}","{\"text\":\"ロード\",\"command\":\"scene\",\"parameters\":\"load\"}"]
 */
/*~struct~button:
 * @param text
 * @desc text for button
 *
 * @param command
 * @desc command to be called when button pressed
 * @type select
 * @option scene
 * @option plugin command
 * @value plugin
 *
 * @param parameters
 * @desc parameters for command. see help for detail.
 */
/*~struct~button:ja
 * @param text
 * @desc ボタンに表示するテキスト。
 *
 * @param command
 * @desc ボタンを押したときに実行するコマンド。
 * @type select
 * @option シーン遷移
 * @value scene
 * @option プラグインコマンド
 * @value plugin
 *
 * @param parameters
 * @desc コマンドのパラメータを指定します。
 * 詳細はプラグインヘルプを参照してください。
 */
(function () {
    var pluginName = 'Lunatlazur_MessageAttachmentButton';
    var attachmentButtonSize = 20;
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
    var asString = getValue;
    function parsePluginParameters() {
        var parameters = PluginManager.parameters(pluginName);
        var buttons = parameters['ボタン'] || parameters.buttons;
        if (!buttons) {
            return [];
        }
        var rawItems = JSON.parse(buttons);
        return rawItems.map(function (rawItem) { return JSON.parse(rawItem); });
    }
    var buttonSettings = parsePluginParameters().map(function (button) {
        switch (button.command) {
            case 'scene':
                var sceneName = button.parameters.charAt(0).toUpperCase() + button.parameters.slice(1).toLowerCase();
                var scene_1 = window["Scene_" + sceneName];
                if (!scene_1) {
                    console.error("Scene_" + sceneName + " \u306F\u5B58\u5728\u3057\u306A\u3044\u30B7\u30FC\u30F3\u3067\u3059");
                    return;
                }
                return {
                    text: button.text,
                    command: function () {
                        SceneManager.push(scene_1);
                    }
                };
            case 'plugin':
                return {
                    text: button.text,
                    command: function (interpreter) {
                        var _a = button.parameters.split(" "), name = _a[0], args = _a.slice(1);
                        interpreter.pluginCommand(name, args);
                    }
                };
        }
    });
    var customButtonTextFont = JSON.parse(asString(PluginManager.parameters(pluginName), 'フォント', 'Custom button text font'));
    var _Window_Message_windowHeight = Window_Message.prototype.windowHeight;
    Window_Message.prototype.windowHeight = function () {
        return _Window_Message_windowHeight.call(this) + attachmentButtonSize;
    };
    var _Window_Message_initMembers = Window_Message.prototype.initMembers;
    Window_Message.prototype.initMembers = function () {
        this._attachmentButtonManager = new AttachmentButtonManager;
        _Window_Message_initMembers.call(this);
    };
    var _Window_Message_show = Window_Message.prototype.show;
    Window_Message.prototype.show = function () {
        _Window_Message_show.call(this);
        this._attachmentButtonManager.handleShow();
    };
    var _Window_Message_hide = Window_Message.prototype.hide;
    Window_Message.prototype.hide = function () {
        _Window_Message_hide.call(this);
        this._attachmentButtonManager.handleHide();
    };
    var _Window_Message_update = Window_Message.prototype.update;
    Window_Message.prototype.update = function () {
        if (this._attachmentButtonManager.isButtonAvailable) {
            this._attachmentButtonManager.handleOpennessChanged(this.isOpen(), this.x, this.y, this.width, this.height);
        }
        _Window_Message_update.call(this);
    };
    TouchInput._onMouseMove = function (event) {
        var x = Graphics.pageToCanvasX(event.pageX);
        var y = Graphics.pageToCanvasY(event.pageY);
        this._onMove(x, y);
    };
    var _Window_Message_updateInput = Window_Message.prototype.updateInput;
    Window_Message.prototype.updateInput = function () {
        if (this._attachmentButtonManager.isButtonAvailable && _Window_Message_isButtonTouched.call(this)) {
            return true;
        }
        _Window_Message_updateMouseMove.call(this);
        return _Window_Message_updateInput.apply(this, arguments);
    };
    function _Window_Message_updateMouseMove() {
        if (TouchInput.isMoved()) {
            this._attachmentButtonManager.handleMouseMove();
        }
    }
    var _Window_Message_updateBackground = Window_Message.prototype.updateBackground;
    Window_Message.prototype.updateBackground = function () {
        _Window_Message_updateBackground.call(this);
        if (this._background === 0) {
            this._attachmentButtonManager.enableButton();
        }
        else {
            this._attachmentButtonManager.disableButton();
        }
    };
    function _Window_Message_isButtonTouched() {
        if (this.isOpen() && this.active && TouchInput.isTriggered()) {
            var button = this._attachmentButtonManager.triggeredButton();
            if (button) {
                button.exec();
                return true;
            }
        }
        return false;
    }
    function find(items, predicate) {
        var found;
        items.forEach(function (item) {
            if (predicate(item)) {
                found = item;
            }
        });
        return found;
    }
    var AttachmentButton = /** @class */ (function () {
        function AttachmentButton(text, size) {
            this._fontSize = size ? size : 28;
            this._text = text;
            var bitmap = new Bitmap(this._fontSize, this._fontSize);
            bitmap.fontFace = customButtonTextFont.concat(['GameFont']).join(',');
            bitmap.fontSize = this._fontSize;
            bitmap.textColor = '#aaaaaa';
            bitmap.resize(bitmap.measureTextWidth(text), bitmap.height);
            bitmap.drawText(this._text, 0, 0, bitmap.width, this._fontSize);
            this._sprite = new Sprite(bitmap);
            this._sprite.x = 0;
            this._sprite.y = 0;
            this._sprite.visible = false;
            SceneManager._scene.addChild(this._sprite);
        }
        Object.defineProperty(AttachmentButton.prototype, "x", {
            get: function () {
                return this._sprite.x;
            },
            set: function (x) {
                this._sprite.x = x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AttachmentButton.prototype, "y", {
            get: function () {
                return this._sprite.y;
            },
            set: function (y) {
                this._sprite.y = y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AttachmentButton.prototype, "width", {
            get: function () {
                return this._sprite.width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AttachmentButton.prototype, "height", {
            get: function () {
                return this._sprite.height;
            },
            enumerable: true,
            configurable: true
        });
        AttachmentButton.prototype.hide = function () {
            this._sprite.visible = false;
        };
        AttachmentButton.prototype.show = function () {
            this._sprite.visible = true;
        };
        AttachmentButton.prototype.setPosition = function (x, y) {
            this.x = x;
            this.y = y;
        };
        AttachmentButton.prototype.isPointInside = function (x, y) {
            return !!(x >= this.x && x < this.x + this.width && y >= this.y && y < this.y + this.height);
        };
        AttachmentButton.prototype.attachFunction = function (func) {
            this._func = func;
        };
        AttachmentButton.prototype.isVisible = function () {
            return !!this._sprite.visible;
        };
        AttachmentButton.prototype.isTouchable = function () {
            return !!(this.isVisible() && this.width > 0);
        };
        AttachmentButton.prototype.exec = function () {
            this._func($gameMap._interpreter);
        };
        AttachmentButton.prototype.onMouseOver = function () {
            this._sprite.bitmap.clear();
            this._sprite.bitmap.textColor = '#ffffff';
            this._sprite.bitmap.drawText(this._text, 0, 0, this._sprite.bitmap.width, this._fontSize);
        };
        AttachmentButton.prototype.onMouseLeave = function () {
            this._sprite.bitmap.clear();
            this._sprite.bitmap.textColor = '#aaaaaa';
            this._sprite.bitmap.drawText(this._text, 0, 0, this._sprite.bitmap.width, this._fontSize);
        };
        return AttachmentButton;
    }());
    var AttachmentButtonManager = /** @class */ (function () {
        function AttachmentButtonManager() {
            this._buttons = buttonSettings.map(function (setting) {
                var button = new AttachmentButton(setting.text, attachmentButtonSize);
                button.attachFunction(setting.command);
                return button;
            });
            this._isOpened = false;
            this._isButtonAvailable = false;
        }
        Object.defineProperty(AttachmentButtonManager.prototype, "isOpened", {
            get: function () {
                return this._isOpened;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AttachmentButtonManager.prototype, "isButtonAvailable", {
            get: function () {
                return this._isButtonAvailable;
            },
            enumerable: true,
            configurable: true
        });
        AttachmentButtonManager.prototype.enableButton = function () {
            this._isButtonAvailable = true;
        };
        AttachmentButtonManager.prototype.disableButton = function () {
            this._isButtonAvailable = false;
        };
        AttachmentButtonManager.prototype.handleMouseMove = function () {
            if (this.isButtonAvailable) {
                var selectedButton = this.selectedButton();
                if (selectedButton) {
                    if (selectedButton !== this._lastSelectedButton) {
                        if (this._lastSelectedButton) {
                            this._lastSelectedButton.onMouseLeave();
                        }
                        selectedButton.onMouseOver();
                        this._lastSelectedButton = selectedButton;
                    }
                }
                else {
                    if (this._lastSelectedButton) {
                        this._lastSelectedButton.onMouseLeave();
                        this._lastSelectedButton = null;
                    }
                }
            }
        };
        AttachmentButtonManager.prototype.handleShow = function () {
            if (this.isButtonAvailable) {
                this._buttons.forEach(function (button) { return button.show(); });
            }
        };
        AttachmentButtonManager.prototype.handleHide = function () {
            if (this.isButtonAvailable) {
                this._buttons.forEach(function (button) { return button.hide(); });
            }
        };
        AttachmentButtonManager.prototype.handleOpennessChanged = function (opened, x, y, width, height) {
            if (!this.isButtonAvailable) {
                return;
            }
            if (opened) {
                if (!this.isOpened) {
                    this.handleOpened(x, y, width, height);
                }
            }
            else {
                if (this.isOpened) {
                    this.handleClosing();
                }
            }
        };
        AttachmentButtonManager.prototype.handleOpened = function (x, y, width, height) {
            this._isOpened = true;
            if (this.isButtonAvailable) {
                var right = width;
                for (var i = this._buttons.length - 1; i >= 0; i--) {
                    var button = this._buttons[i];
                    button.setPosition(right - button.width - 8, y + height - button.height - 8);
                    if (button.isPointInside(TouchInput.x, TouchInput.y)) {
                        this._lastSelectedButton = button;
                        button.onMouseOver();
                    }
                    right -= button.width + 16;
                    button.show();
                }
            }
        };
        AttachmentButtonManager.prototype.handleClosing = function () {
            this._isOpened = false;
            if (this.isButtonAvailable) {
                this._buttons.forEach(function (button) { return button.hide(); });
            }
        };
        AttachmentButtonManager.prototype.triggeredButton = function () {
            if (this.isButtonAvailable) {
                return this.selectedButton();
            }
            return null;
        };
        AttachmentButtonManager.prototype.selectedButton = function () {
            return find(this._buttons, function (button) {
                return button.isTouchable() && button.isPointInside(TouchInput.x, TouchInput.y);
            });
        };
        return AttachmentButtonManager;
    }());
})();

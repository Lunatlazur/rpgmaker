/// <reference path="./libs/lib.dom.d.ts" />
/// <reference path="./libs/pixi.d.ts" />
/// <reference path="./libs/effekseer.d.ts" />
/// <reference path="./libs/localforage.d.ts" />
/// <reference path="./libs/pako.d.ts" />
/// <reference path="./libs/vorbisdecoder.d.ts" />

/// <reference path="./data.d.ts" />
/// <reference path="./event-command.d.ts" />
/// <reference path="./main.d.ts" />
/// <reference path="./rmmz_core.d.ts" />
/// <reference path="./rmmz_managers.d.ts" />
/// <reference path="./rmmz_objects.d.ts" />
/// <reference path="./rmmz_scenes.d.ts" />
/// <reference path="./rmmz_sprites.d.ts" />
/// <reference path="./rmmz_windows.d.ts" />

type Stringifiable = string | number

declare namespace RPGMakerMZ {
  namespace Color {
    type Rgba = [r: number, g: number, b: number, a: number]
    type Tone = [r: number, g: number, b: number, gray: number]
  }
  namespace Tilemap {
    namespace AutoTile {
      type Fragment = [x: number, y: number]
      type Composite = [
        topLeft: Fragment,
        topRight: Fragment,
        bottomLeft: Fragment,
        bottomRight: Fragment,
      ]
    }
    namespace Layer {
      type Element = [
        setNumber: number,
        sx: number,
        sy: number,
        dx: number,
        dy: number,
        w: number,
        h: number,
      ]
    }
  }
  namespace Input {
    interface GamepadMapping {
      0: 'ok' // A
      1: 'cancel' // B
      2: 'shift' // X
      3: 'menu' // Y
      4: 'pageup' // LB
      5: 'pagedown' // RB
      12: 'up' // D-pad up
      13: 'down' // D-pad down
      14: 'left' // D-pad left
      15: 'right' // D-pad right
    }
    type GamepadState = [
      ok: boolean,
      cancel: boolean,
      shift: boolean,
      menu: boolean,
      pageup: boolean,
      pagedown: boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean,
      up: boolean,
      down: boolean,
      left: boolean,
      right: boolean,
      ...boolean[], // vendor buttons
    ]
    interface KeyMapping {
      9: 'tab' // tab
      13: 'ok' // enter
      16: 'shift' // shift
      17: 'control' // control
      18: 'control' // alt
      27: 'escape' // escape
      32: 'ok' // space
      33: 'pageup' // pageup
      34: 'pagedown' // pagedown
      37: 'left' // left arrow
      38: 'up' // up arrow
      39: 'right' // right arrow
      40: 'down' // down arrow
      45: 'escape' // insert
      81: 'pageup' // Q
      87: 'pagedown' // W
      88: 'escape' // X
      90: 'ok' // Z
      96: 'escape' // numpad 0
      98: 'down' // numpad 2
      100: 'left' // numpad 4
      102: 'right' // numpad 6
      104: 'up' // numpad 8
      120: 'debug' // F9
    }
    type KeyName = KeyMapping[keyof KeyMapping]
    type KeyState = {
      [key in KeyName]?: boolean
    }
  }
  namespace TouchInput {
    type State = {
      triggered: boolean
      cancelled: boolean
      moved: boolean
      hovered: boolean
      released: boolean
      wheelX: number
      wheelY: number
    }
  }

  type PluginParams = Record<string, string>
  type PluginConfig = {
    name: string
    status: boolean
    description: string
    parameters: PluginParams
  }
  type PluginCommandParams = Record<string, string>
  type PluginCommand = (args: PluginCommandParams) => void
}

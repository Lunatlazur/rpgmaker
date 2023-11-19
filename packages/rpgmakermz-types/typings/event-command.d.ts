declare namespace RPGMakerMZ {
  interface HasIndent {
    indent: number
  }
  namespace DataEvent {
    namespace Command101 {
      type Params = [
        string,
        number,
        0 | 1 | 2,
        0 | 1 | 2,
        string,
      ]
    }
    type Command101 = [
      code: 101,
      params: Command101.Params,
    ]
    namespace Command102 {
      type Params = [
        string[],
        number,
        number,
        0 | 1 | 2,
        0 | 1 | 2,
      ]
    }
    interface Command102 extends HasIndent {
      code: 102,
      params: Command102.Params,
    }
    namespace Command402 {
      type Params = [
        number,
        string,
      ]
    }
    interface Command402 extends HasIndent {
      code: 402,
      params: Command402.Params,
    }
    interface Command403 extends HasIndent {
      code: 403,
      params: [],
    }
    namespace Command103 {
      type Params = [
        number,
        number,
      ]
    }
    interface Command103 extends HasIndent {
      code: 103,
      params: Command103.Params,
    }
    namespace Command104 {
      type Params = [
        number,
        1 | 2 | 3 | 4,
      ]
    }
    interface Command104 extends HasIndent {
      code: 104,
      params: Command104.Params,
    }
    namespace Command105 {
      type Params = [
        number,
        boolean,
      ]
    }
    interface Command105 extends HasIndent {
      code: 105,
      params: Command105.Params,
    }
    namespace Command108 {
      type Params = [
        string,
      ]
    }
    interface Command108 extends HasIndent {
      code: 108,
      params: Command108.Params,
    }
    interface Command109 extends HasIndent {
      code: 109,
      params: [],
    }
    namespace Command111 {
      type Params = [
        0,
        number,
        0 | 1,
      ] | [
        1,
        number,
        0 | 1,
        number,
        0 | 1 | 2 | 3 | 4 | 5,
      ] | [
        2,
        'A' | 'B' | 'C' | 'D',
        0 | 1,
      ] | [
        3,
        number,
        0 | 1,
      ] | [
        4,
        number,
        0,
      ] | [
        4,
        number,
        1,
        string,
      ] | [
        4,
        number,
        2 | 3 | 4 | 5 | 6,
        number,
      ] | [
        5,
        number,
        0,
      ] | [
        5,
        number,
        1,
        number,
      ] | [
        6,
        number,
        2 | 4 | 6 | 8,
      ] | [
        7,
        number,
        0 | 1 | 2,
      ] | [
        8,
        number,
      ] | [
        9 | 10,
        number,
        boolean,
      ] | [
        11,
        'ok' | 'cancel' | 'shift' | 'down' | 'left' | 'right' | 'up' | 'pageup' | 'pagedown',
        0 | 1 | 2,
      ] | [
        12,
        string,
      ] | [
        13,
        0 | 1 | 2,
      ]
    }
    interface Command111 extends HasIndent {
      code: 111,
      params: Command111.Params
    }
    interface Command411 extends HasIndent {
      code: 411,
      params: [],
    }
    interface Command112 extends HasIndent {
      code: 112,
      params: [],
    }
    interface Command413 extends HasIndent {
      code: 413,
      params: [],
    }
    interface Command113 extends HasIndent {
      code: 113,
      params: [],
    }
    interface Command115 extends HasIndent {
      code: 115,
      params: [],
    }
    namespace Command117 {
      type Params = [
        number,
      ]
    }
    interface Command117 extends HasIndent {
      code: 117,
      params: Command117.Params,
    }
    interface Command118 extends HasIndent {
      code: 118,
      params: [],
    }
    namespace Command119 {
      type Params = [
        string,
      ]
    }
    interface Command119 extends HasIndent {
      code: 119,
      params: Command119.Params,
    }
    namespace Command121 {
      type Params = [
        number,
        number,
        0 | 1,
      ]
    }
    interface Command121 extends HasIndent {
      code: 121,
      params: Command121.Params,
    }
    namespace Command122 {
      type Params = [
        number,
        number,
        0 | 1 | 2 | 3 | 4 | 5,
        0 | 1,
        number,
      ] | [
        number,
        number,
        0 | 1 | 2 | 3 | 4 | 5,
        2,
        number,
        number,
      ] | [
        number,
        number,
        0 | 1 | 2 | 3 | 4 | 5,
        3,
        type: 0 | 1 | 2,
        params1: number,
        params2: 0,
      ] | [
        number,
        number,
        0 | 1 | 2 | 3 | 4 | 5,
        3,
        type: 3,
        params1: number,
        params2: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
      ] | [
        number,
        number,
        0 | 1 | 2 | 3 | 4 | 5,
        3,
        type: 4,
        params1: number,
        params2: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
      ] | [
        number,
        number,
        0 | 1 | 2 | 3 | 4 | 5,
        3,
        type: 5,
        params1: number,
        params2: 0 | 1,
      ] | [
        number,
        number,
        0 | 1 | 2 | 3 | 4 | 5,
        3,
        type: 6,
        params1: number,
        params2: 0,
      ] | [
        number,
        number,
        0 | 1 | 2 | 3 | 4 | 5,
        3,
        type: 7,
        params1: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
        params2: 0,
      ] | [
        number,
        number,
        0 | 1 | 2 | 3 | 4 | 5,
        3,
        type: 8,
        params1: 0 | 1 | 2 | 3 | 4 | 5,
        params2: number,
      ] | [
        number,
        number,
        0 | 1 | 2 | 3 | 4 | 5,
        4,
        string,
      ]
    }
    interface Command122 extends HasIndent {
      code: 122,
      params: Command122.Params
    }
    namespace Command123 {
      type Params = [
        'A' | 'B' | 'C' | 'D',
        0 | 1,
      ]
    }
    interface Command123 extends HasIndent {
      code: 123,
      params: Command123.Params,
    }
    namespace Command124 {
      type Params = [
        0 | 1,
        number,
      ]
    }
    interface Command124 extends HasIndent {
      code: 124,
      params: Command124.Params,
    }
    namespace Command125 {
      type Params = [
        0 | 1,
        0 | 1,
        number,
      ]
    }
    interface Command125 extends HasIndent {
      code: 125,
      params: Command125.Params,
    }
    namespace Command126 {
      type Params = [
        number,
        0 | 1,
        0 | 1,
        number,
      ]
    }
    interface Command126 extends HasIndent {
      code: 126,
      params: Command126.Params,
    }
    namespace Command127 {
      type Params = [
        number,
        0 | 1,
        0 | 1,
        number,
        boolean,
      ]
    }
    interface Command127 extends HasIndent {
      code: 127,
      params: Command127.Params,
    }
    namespace Command128 {
      type Params = [
        number,
        0 | 1,
        0 | 1,
        number,
        boolean,
      ]
    }
    interface Command128 extends HasIndent {
      code: 128,
      params: Command128.Params,
    }
    namespace Command129 {
      type Params = [
        number,
        0 | 1,
        boolean,
      ]
    }
    interface Command129 extends HasIndent {
      code: 129,
      params: Command129.Params,
    }
    namespace Command132 {
      type Params = [
        RPGMakerMZ.Audio,
      ]
    }
    interface Command132 extends HasIndent {
      code: 132,
      params: Command132.Params,
    }
    namespace Command133 {
      type Params = [
        RPGMakerMZ.Audio,
      ]
    }
    interface Command133 extends HasIndent {
      code: 133,
      params: Command133.Params,
    }
    namespace Command134 {
      type Params = [
        0 | 1]
    }
    interface Command134 extends HasIndent {
      code: 134,
      params: Command134.Params,
    }
    namespace Command135 {
      type Params = [
        0 | 1,
      ]
    }
    interface Command135 extends HasIndent {
      code: 135,
      params: Command135.Params,
    }
    namespace Command136 {
      type Params = [
        0 | 1,
      ]
    }
    interface Command136 extends HasIndent {
      code: 136,
      params: Command136.Params,
    }
    namespace Command137 {
      type Params = [
        0 | 1,
      ]
    }
    interface Command137 extends HasIndent {
      code: 137,
      params: Command137.Params,
    }
    namespace Command138 {
      type Params = [
        0 | 1,
      ]
    }
    interface Command138 extends HasIndent {
      code: 138,
      params: Command138.Params,
    }
    namespace Command139 {
      type Params = [
        RPGMakerMZ.Audio,
      ]
    }
    interface Command139 extends HasIndent {
      code: 139,
      params: Command139.Params,
    }
    namespace Command140 {
      type Params = [
        0 | 1 | 2,
        RPGMakerMZ.Audio,
      ]
    }
    interface Command140 extends HasIndent {
      code: 140,
      params: Command140.Params,
    }
    namespace Command201 {
      type Params = [
        0 | 1,
        number,
        number,
        number,
        0 | 2 | 4 | 6 | 8,
      ]
    }
    interface Command201 extends HasIndent {
      code: 201,
      params: Command201.Params,
    }
    namespace Command202 {
      type Params = [
        0 | 1 | 2,
        0 | 1,
        number,
        number,
        number,
      ]
    }
    interface Command202 extends HasIndent {
      code: 202,
      params: Command202.Params,
    }
    namespace Command203 {
      type Params = [
        number,
        0 | 1,
        number,
        number,
        0 | 2 | 4 | 6 | 8
      ] | [
        number,
        2,
        number,
        null,
        0 | 2 | 4 | 6 | 8,
      ]
    }
    interface Command203 extends HasIndent {
      code: 203,
      params: Command203.Params
    }
    namespace Command204 {
      type Params = [
        2 | 4 | 6 | 8,
        number,
        1 | 2 | 3 | 4 | 5 | 6,
      ]
    }
    interface Command204 extends HasIndent {
      code: 204,
      params: Command204.Params,
    }
    namespace Command205 {
      type Params = [
        number,
        RPGMakerMZ.DataMapEvent.MoveRoute[],
      ]
    }
    interface Command205 extends HasIndent {
      code: 205,
      params: Command205.Params,
    }
    interface Command206 extends HasIndent {
      code: 206,
      params: [],
    }
    namespace Command211 {
      type Params = [
        0 | 1,
      ]
    }
    interface Command211 extends HasIndent {
      code: 211,
      params: Command211.Params,
    }
    namespace Command212 {
      type Params = [
        number,
        number,
        boolean,
      ]
    }
    interface Command212 extends HasIndent {
      code: 212,
      params: Command212.Params,
    }
    namespace Command213 {
      type Params = [
        number,
        number,
        boolean,
      ]
    }
    interface Command213 extends HasIndent {
      code: 213,
      params: Command213.Params,
    }
    interface Command214 extends HasIndent {
      code: 214,
      params: [],
    }
    namespace Command216 {
      type Params = [
        0 | 1]
    }
    interface Command216 extends HasIndent {
      code: 216,
      params: Command216.Params,
    }
    interface Command217 extends HasIndent {
      code: 217,
      params: [],
    }
    interface Command221 extends HasIndent {
      code: 221,
      params: [],
    }
    interface Command222 extends HasIndent {
      code: 222,
      params: [],
    }
    namespace Command223 {
      type Params = [
        RPGMakerMZ.Color.Tone,
        number,
        boolean,
      ]
    }
    interface Command223 extends HasIndent {
      code: 223,
      params: Command223.Params,
    }
    namespace Command224 {
      type Params = [
        RPGMakerMZ.Color.Rgba,
        number,
        boolean,
      ]
    }
    interface Command224 extends HasIndent {
      code: 224,
      params: Command224.Params,
    }
    namespace Command225 {
      type Params = [
        number,
        number,
        number,
        boolean,
      ]
    }
    interface Command225 extends HasIndent {
      code: 225,
      params: Command225.Params,
    }
    namespace Command230 {
      type Params = [
        number,
      ]
    }
    interface Command230 extends HasIndent {
      code: 230,
      params: Command230.Params,
    }
    namespace Command231 {
      type Params = [
        number,
        string,
        0 | 1,
        0 | 1,
        number,
        number,
        number,
        number,
        number,
        0 | 1 | 2 | 3,
      ]
    }
    interface Command231 extends HasIndent {
      code: 231,
      params: Command231.Params,
    }
    namespace Command232 {
      type Params = [
        number,
        null,
        0 | 1,
        0 | 1,
        number,
        number,
        number,
        number,
        number,
        0 | 1 | 2 | 3,
        number,
        boolean,
        0 | 1 | 2 | 3,
      ]
    }
    interface Command232 extends HasIndent {
      code: 232,
      params: Command232.Params,
    }
    namespace Command233 {
      type Params = [
        number,
        number,
      ]
    }
    interface Command233 extends HasIndent {
      code: 233,
      params: Command233.Params,
    }
    namespace Command234 {
      type Params = [
        number,
        RPGMakerMZ.Color.Tone,
        number,
        boolean,
      ]
    }
    interface Command234 extends HasIndent {
      code: 234,
      params: Command234.Params,
    }
    namespace Command235 {
      type Params = [
        number,
      ]
    }
    interface Command235 extends HasIndent {
      code: 235,
      params: Command235.Params,
    }
    namespace Command236 {
      type Params = [
        'none' | 'rain' | 'snow' | 'storm',
        number,
        number,
        boolean,
      ]
    }
    interface Command236 extends HasIndent {
      code: 236,
      params: Command236.Params,
    }
    namespace Command241 {
      type Params = [
        RPGMakerMZ.Audio,
      ]
    }
    interface Command241 extends HasIndent {
      code: 241,
      params: Command241.Params,
    }
    namespace Command242 {
      type Params = [
        number,
      ]
    }
    interface Command242 extends HasIndent {
      code: 242,
      params: Command242.Params,
    }
    interface Command243 extends HasIndent {
      code: 243,
      params: [],
    }
    interface Command244 extends HasIndent {
      code: 244,
      params: [],
    }
    namespace Command245 {
      type Params = [
        RPGMakerMZ.Audio,
      ]
    }
    interface Command245 extends HasIndent {
      code: 245,
      params: Command245.Params,
    }
    namespace Command246 {
      type Params = [
        number,
      ]
    }
    interface Command246 extends HasIndent {
      code: 246,
      params: Command246.Params,
    }
    namespace Command249 {
      type Params = [
        RPGMakerMZ.Audio,
      ]
    }
    interface Command249 extends HasIndent {
      code: 249,
      params: Command249.Params,
    }
    namespace Command250 {
      type Params = [
        RPGMakerMZ.Audio,
      ]
    }
    interface Command250 extends HasIndent {
      code: 250,
      params: Command250.Params,
    }
    interface Command251 extends HasIndent {
      code: 251,
      params: [],
    }
    namespace Command261 {
      type Params = [
        string,
      ]
    }
    interface Command261 extends HasIndent {
      code: 261,
      params: Command261.Params,
    }
    namespace Command281 {
      type Params = [
        0 | 1,
      ]
    }
    interface Command281 extends HasIndent {
      code: 281,
      params: Command281.Params,
    }
    namespace Command282 {
      type Params = [
        number,
      ]
    }
    interface Command282 extends HasIndent {
      code: 282,
      params: Command282.Params,
    }
    namespace Command283 {
      type Params = [
        string,
        string,
      ]
    }
    interface Command283 extends HasIndent {
      code: 283,
      params: Command283.Params,
    }
    namespace Command284 {
      type Params = [
        string,
        boolean,
        boolean,
        number,
        number,
      ]
    }
    interface Command284 extends HasIndent {
      code: 284,
      params: Command284.Params,
    }
    namespace Command285 {
      type Params = [
        number,
        0 | 1 | 2 | 3 | 4 | 5 | 6,
        0 | 1,
        number,
        number,
      ] | [
        number,
        0 | 1 | 2 | 3 | 4 | 5 | 6,
        2,
        number,
        null,
      ]
    }
    interface Command285 extends HasIndent {
      code: 285,
      params: Command285.Params
    }
    namespace Command301 {
      type Params = [
        0 | 1 | 2,
        number,
        boolean,
        boolean,
      ]
    }
    interface Command301 extends HasIndent {
      code: 301,
      params: Command301.Params,
    }
    interface Command601 extends HasIndent {
      code: 601,
      params: [],
    }
    interface Command602 extends HasIndent {
      code: 602,
      params: [],
    }
    interface Command603 extends HasIndent {
      code: 603,
      params: [],
    }
    namespace Command302 {
      type Params = [
        0 | 1 | 2,
        number,
        0 | 1,
        number,
        boolean,
      ]
    }
    interface Command302 extends HasIndent {
      code: 302,
      params: Command302.Params,
    }
    namespace Command303 {
      type Params = [
        number,
        number,
      ]
    }
    interface Command303 extends HasIndent {
      code: 303,
      params: Command303.Params,
    }
    namespace Command311 {
      type Params = [
        0 | 1,
        number,
        0 | 1,
        0 | 1,
        number,
        boolean,
      ]
    }
    interface Command311 extends HasIndent {
      code: 311,
      params: Command311.Params,
    }
    namespace Command312 {
      type Params = [
        0 | 1,
        number,
        0 | 1,
        0 | 1,
        number,
      ]
    }
    interface Command312 extends HasIndent {
      code: 312,
      params: Command312.Params,
    }
    namespace Command326 {
      type Params = [
        0 | 1,
        number,
        0 | 1,
        0 | 1,
        number,
      ]
    }
    interface Command326 extends HasIndent {
      code: 326,
      params: Command326.Params,
    }
    namespace Command313 {
      type Params = [
        0 | 1,
        number,
        0 | 1,
        number,
      ]
    }
    interface Command313 extends HasIndent {
      code: 313,
      params: Command313.Params,
    }
    namespace Command314 {
      type Params = [
        0 | 1,
        number,
      ]
    }
    interface Command314 extends HasIndent {
      code: 314,
      params: Command314.Params,
    }
    namespace Command315 {
      type Params = [
        0 | 1,
        number,
        0 | 1,
        0 | 1,
        number,
        boolean,
      ]
    }
    interface Command315 extends HasIndent {
      code: 315,
      params: Command315.Params,
    }
    namespace Command316 {
      type Params = [
        0 | 1,
        number,
        0 | 1,
        0 | 1,
        number,
        boolean,
      ]
    }
    interface Command316 extends HasIndent {
      code: 316,
      params: Command316.Params,
    }
    namespace Command317 {
      type Params = [
        0 | 1,
        number,
        0 | 1 | 2 | 3 | 4 | 5 | 6 | 7,
        0 | 1,
        0 | 1,
        number,
      ]
    }
    interface Command317 extends HasIndent {
      code: 317,
      params: Command317.Params,
    }
    namespace Command318 {
      type Params = [
        0 | 1,
        number,
        0 | 1,
        number,
      ]
    }
    interface Command318 extends HasIndent {
      code: 318,
      params: Command318.Params,
    }
    namespace Command319 {
      type Params = [
        number,
        number,
        number,
      ]
    }
    interface Command319 extends HasIndent {
      code: 319,
      params: Command319.Params,
    }
    namespace Command320 {
      type Params = [
        number,
        string,
      ]
    }
    interface Command320 extends HasIndent {
      code: 320,
      params: Command320.Params,
    }
    namespace Command321 {
      type Params = [
        number,
        number,
        boolean,
      ]
    }
    interface Command321 extends HasIndent {
      code: 321,
      params: Command321.Params,
    }
    namespace Command322 {
      type Params = [
        number,
        string,
        number,
        string,
        number,
        string,
      ]
    }
    interface Command322 extends HasIndent {
      code: 322,
      params: Command322.Params,
    }
    namespace Command323 {
      type Params = [
        0 | 1 | 2,
        string,
        number,
      ]
    }
    interface Command323 extends HasIndent {
      code: 323,
      params: Command323.Params,
    }
    namespace Command324 {
      type Params = [
        number,
        string,
      ]
    }
    interface Command324 extends HasIndent {
      code: 324,
      params: Command324.Params,
    }
    namespace Command325 {
      type Params = [
        number,
        string,
      ]
    }
    interface Command325 extends HasIndent {
      code: 325,
      params: Command325.Params,
    }
    namespace Command331 {
      type Params = [
        number,
        0 | 1,
        0 | 1,
        number,
        boolean,
      ]
    }
    interface Command331 extends HasIndent {
      code: 331,
      params: Command331.Params,
    }
    namespace Command332 {
      type Params = [
        number,
        0 | 1,
        0 | 1,
        number,
      ]
    }
    interface Command332 extends HasIndent {
      code: 332,
      params: Command332.Params,
    }
    namespace Command342 {
      type Params = [
        number,
        0 | 1,
        0 | 1,
        number,
      ]
    }
    interface Command342 extends HasIndent {
      code: 342,
      params: Command342.Params,
    }
    namespace Command333 {
      type Params = [
        number,
        0 | 1,
        number,
      ]
    }
    interface Command333 extends HasIndent {
      code: 333,
      params: Command333.Params,
    }
    namespace Command334 {
      type Params = [
        number,
      ]
    }
    interface Command334 extends HasIndent {
      code: 334,
      params: Command334.Params,
    }
    namespace Command335 {
      type Params = [
        number,
      ]
    }
    interface Command335 extends HasIndent {
      code: 335,
      params: Command335.Params,
    }
    namespace Command336 {
      type Params = [
        number,
        number,
      ]
    }
    interface Command336 extends HasIndent {
      code: 336,
      params: Command336.Params,
    }
    namespace Command337 {
      type Params = [
        number,
        number,
      ]
    }
    interface Command337 extends HasIndent {
      code: 337,
      params: Command337.Params,
    }
    namespace Command339 {
      type Params = [
        0 | 1,
        number,
        number,
        number,
      ]
    }
    interface Command339 extends HasIndent {
      code: 339,
      params: Command339.Params,
    }
    interface Command340 extends HasIndent {
      code: 340,
      params: [],
    }
    interface Command351 extends HasIndent {
      code: 351,
      params: [],
    }
    interface Command352 extends HasIndent {
      code: 352,
      params: [],
    }
    interface Command353 extends HasIndent {
      code: 353,
      params: [],
    }
    interface Command354 extends HasIndent {
      code: 354,
      params: [],
    }
    interface Command355 extends HasIndent {
      code: 355,
      params: [],
    }
    namespace Command356 {
      type Params = [
        string,
        string,
        string,
        { [key: string]: string },
      ]
    }
    interface Command356 extends HasIndent {
      code: 356,
      params: Command356.Params,
    }
    namespace Command357 {
      type Params = [
        string,
      ]
    }
    interface Command357 extends HasIndent {
      code: 357,
      params: Command357.Params,
    }

    type Command = Command101
      | Command102
      | Command402
      | Command403
      | Command103
      | Command104
      | Command105
      | Command108
      | Command109
      | Command111
      | Command411
      | Command112
      | Command413
      | Command113
      | Command115
      | Command117
      | Command118
      | Command119
      | Command121
      | Command122
      | Command123
      | Command124
      | Command125
      | Command126
      | Command127
      | Command128
      | Command129
      | Command132
      | Command133
      | Command134
      | Command135
      | Command136
      | Command137
      | Command138
      | Command139
      | Command140
      | Command201
      | Command202
      | Command203
      | Command204
      | Command205
      | Command206
      | Command211
      | Command212
      | Command213
      | Command214
      | Command216
      | Command217
      | Command221
      | Command222
      | Command223
      | Command224
      | Command225
      | Command230
      | Command231
      | Command232
      | Command233
      | Command234
      | Command235
      | Command236
      | Command241
      | Command242
      | Command243
      | Command244
      | Command245
      | Command246
      | Command249
      | Command250
      | Command251
      | Command261
      | Command281
      | Command282
      | Command283
      | Command284
      | Command285
      | Command301
      | Command601
      | Command602
      | Command603
      | Command302
      | Command303
      | Command311
      | Command312
      | Command326
      | Command313
      | Command314
      | Command315
      | Command316
      | Command317
      | Command318
      | Command319
      | Command320
      | Command321
      | Command322
      | Command323
      | Command324
      | Command325
      | Command331
      | Command332
      | Command342
      | Command333
      | Command334
      | Command335
      | Command336
      | Command337
      | Command339
      | Command340
      | Command351
      | Command352
      | Command353
      | Command354
      | Command355
      | Command356
      | Command357
  }
}

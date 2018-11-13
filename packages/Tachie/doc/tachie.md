このプラグインはキャラクターの立ち絵を表示できるようにします。

スクリーンショットで使われているキャラクター画像、背景画像はプラグインに含まれません。

## 利用方法

1. 以下形式の名前の立ち絵画像ファイルを img/pictures フォルダに配置します。\

    characterA1.png\
    characterA2.png\
    characterA3.png\
    characterA4.png\
    characterA5.png\
    characterB1.png\
    characterB2.png\
    :\
    :

2. Data フォルダに Tachie.csv という名前で以下形式の立ち絵定義ファイルを作成してください。\

    characterA, キャラA, 笑い, 怒り, 呆れ, 不満\
    characterB, キャラB, 笑い, 緊張, 呆れ, 不満\
    :\
    :
    - 一列目は img/pictures フォルダに配置した立ち絵画像ファイル名から拡張子と末尾の数字を取り除いた部分です
    - 二列目はキャラクターの名前です\
      プラグインコマンドから立ち絵画像ファイルを指定するときに、この名前で指定します
    - 三列目以降は、立ち絵画像ファイルの表情の名前です\
      プラグインコマンドから表情を指定するときに、この名前で指定します\
      ※キャラクター名2 以降の表情差分に名前をつけてください\
      （※キャラクター名1 は表情未指定時に使われます）

      上記例では characterA2.png が キャラA の 笑い、characterA3.png が キャラA の 怒り という設定になっています

3. プラグインコマンドに立ち絵表示コマンドを入力して立ち絵を表示を行います。\
    プラグインコマンドの詳細はプラグインヘルプ内のプラグインコマンド一覧を参照してください。

## クレジット（敬称略）

スクリーンショットには下記の素材を利用させていただきました。

### キャラクター画像
- [RPGツクールMV：パッケージキャラクター素材](http://store.tkool.jp/a/rpg-maker-mv-music-sound/cover-art-characters-pack) by KADOKAWA
- RPGツクールMVパッケージキャラクター：フェイス・カットイン素材 by Vibrato（[P3X-774](http://p3x774.web.fc2.com/)）

### 背景画像
- ファンタジー フィールド by [きまぐれアフター](https://k-after.at.webry.info/)

## ライセンス
このプラグインは [zlib ライセンス](https://www.zlib.net/zlib_license.html) のもと配布されます。

Copyright (C) 2018 Taku Aoi

This software is provided 'as-is', without any express or implied
warranty.  In no event will the authors be held liable for any damages
arising from the use of this software.

Permission is granted to anyone to use this software for any purpose,
including commercial applications, and to alter it and redistribute it
freely, subject to the following restrictions:

1. The origin of this software must not be misrepresented; you must not
    claim that you wrote the original software. If you use this software
    in a product, an acknowledgment in the product documentation would be
    appreciated but is not required.
2. Altered source versions must be plainly marked as such, and must not be
    misrepresented as being the original software.
3. This notice may not be removed or altered from any source distribution.

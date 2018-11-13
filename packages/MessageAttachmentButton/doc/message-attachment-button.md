このプラグインはメッセージウィンドウに任意の機能を実行するためのボタンを追加します。

スクリーンショットで使われているキャラクター画像、背景画像はプラグインに含まれません。

## 利用方法

プラグインパラメータに

- ボタンに表示するテキスト
- ボタンを押したときに実行する機能

を、それぞれ指定することでメッセージウィンドウに拡張機能ボタンを追加することができます。

ボタンを押したときに実行する機能には、シーン遷移とプラグインコマンドを設定することができます。

### プラグインパラメータのコマンドの設定内容について

プラグインパラメータの `コマンド` に指定したコマンドの種類によって、設定する内容が異なります。\
それぞれ以下のとおりです。

- `コマンド` が `シーン遷移` のとき：\
  パラメータに Scene_XXX の XXX の部分（Save, Load, Menu, Title など）を指定することで、ボタンを押したときに該当のシーンに遷移させることができます。

- `コマンド` が `プラグインコマンド` のとき：\
  パラメータにプラグインコマンド名とそのパラメータを指定することで、ボタンを押したときに該当のプラグインコマンドを実行させることができます。

## クレジット（敬称略）

スクリーンショットには下記の素材を利用させていただきました。

### キャラクター画像
- [RPGツクールMV：パッケージキャラクター素材](http://store.tkool.jp/a/rpg-maker-mv-music-sound/cover-art-characters-pack) by KADOKAWA
- RPGツクールMVパッケージキャラクター：フェイス・カットイン素材 by Vibrato（[P3X-774](http://p3x774.web.fc2.com/)）

### 背景画像
- 汎用森 by 瀬尾辰也（[TEDDY-PLAZA](http://teddy-plaza.sakura.ne.jp/)）

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

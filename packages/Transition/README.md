# Transition
RPGツクールMV用 トランジションプラグイン

![スクリーンショット](./doc/transition.jpg)\
©KADOKAWA

このプラグインはフェードイン／フェードアウトの際にトランジションを設定できるようにします。\
白画面でのフェードイン／フェードアウトや、フェード時間の指定に対応しているため、トランジションを使わずにカスタムフェード機能として使うこともできます。

# 導入方法
build フォルダ内の Lunatlazur_Transition.js を導入したいRPGツクールMVのプロジェクト内の js/plugins フォルダにコピーしてください。

プラグインの使い方はプラグインヘルプを参照してください。

# 開発者向け情報

このプラグインは TypeScript で書かれています。ビルドするには TypeScript の実行環境が必要です。

このリポジトリを `git clone` して

```
yarn
```

を実行すると TypeScript の実行環境がインストールされます。

ビルドするには

```
yarn build
```

を実行してください。

Visual Studio Code を使用している場合はエディタからビルドタスクの実行を行うことでビルドすることができます。

# ライセンス
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

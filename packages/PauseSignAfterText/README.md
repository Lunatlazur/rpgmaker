# PauseSignAfterText
RPGツクールMV用 メッセージ送りアイコン位置変更プラグイン

![スクリーンショット](./doc/pause-sign-after-text.jpg)\
©KADOKAWA ©Vibrato ©TEDDY-PLAZA

このプラグインはメッセージ送り記号をメッセージの末尾に表示するようにします。

# 導入方法
build フォルダ内の Lunatlazur_PauseSignAfterText.js を導入したいRPGツクールMVのプロジェクト内の js/plugins フォルダにコピーしてください。

このプラグインにはプラグインオプション、プラグインコマンドはありません。\
プラグインを有効化するだけで利用可能です。

スクリーンショットで使われているキャラクター画像、背景画像はプラグインに含まれません。

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
このプラグインは [zlib ライセンス](LISENCE) のもと配布されます。

[LISENCE]: https://github.com/Lunatlazur/rpgmakermv-plugins/blob/develop/packages/PauseSignAfterText/LISENCE

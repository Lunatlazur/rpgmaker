# ActorNameWindow
RPGツクールMV用 会話キャラクター名表示ウィンドウプラグイン

![スクリーンショット](./doc/actor-name-window.jpg)\
©KADOKAWA

このプラグインは名前ウィンドウを表示できるようにします。\
`\N<キャラクター名>` 形式でメッセージ内にキャラクターの名前を記述することでメッセージウィンドウの上部に名前ウィンドウを表示するようになります。\
名前ウィンドウのフォントはメッセージウィンドウのものが使われます。

# 導入方法
build フォルダ内の Lunatlazur_ActorNameWindow.js を導入したいRPGツクールMVのプロジェクト内の js/plugins フォルダにコピーしてください。

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
このプラグインは [zlib ライセンス](LISENCE) のもと配布されます。

[LISENCE]: https://github.com/Lunatlazur/rpgmakermv-plugins/blob/develop/packages/ActorNameWindow/LISENCE

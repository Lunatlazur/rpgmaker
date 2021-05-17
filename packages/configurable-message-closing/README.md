# ConfigurableMessageClosing
RPGツクールMV用 メッセージウィンドウ開閉制御プラグイン

![スクリーンショット](./doc/configurable-message-closing.png)

このプラグインはメッセージの表示後に他のイベントコマンドが実行されてもメッセージウィンドウを自動で閉じずに、表示したままにできるようにします。\
メッセージウィンドウを表示したままピクチャを表示・移動したいときなどに便利です。

# 導入方法
build フォルダ内の Lunatlazur_ConfigurableMessageClosing.js を導入したいRPGツクールMVのプロジェクト内の js/plugins フォルダにコピーしてください。

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

[LISENCE]: https://github.com/Lunatlazur/rpgmakermv-plugins/blob/develop/packages/ConfigurableMessageClosing/LISENCE

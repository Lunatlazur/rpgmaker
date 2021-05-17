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
このプラグインは [zlib ライセンス](LISENCE) のもと配布されます。

[LISENCE]: https://github.com/Lunatlazur/rpgmakermv-plugins/blob/develop/packages/Transition/LISENCE

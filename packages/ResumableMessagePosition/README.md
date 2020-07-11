# ResumableMessagePosition
RPGツクールMV用 イベント内メッセージ位置記憶プラグイン

![スクリーンショット](./doc/resumable-message-posistion.png)

このプラグインは自動ではじまるイベントの途中でセーブを行ったときに、表示中のメッセージ位置を保持し、ロード時にその位置から復帰できるようにします。

# 導入方法
build フォルダ内の Lunatlazur_ResumableMessagePosition.js を導入したいRPGツクールMVのプロジェクト内の js/plugins フォルダにコピーしてください。

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

[LISENCE]: https://github.com/Lunatlazur/rpgmakermv-plugins/blob/develop/packages/ResumableMessagePosition/LISENCE

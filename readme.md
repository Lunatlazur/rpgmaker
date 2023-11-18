# RPGツクールMV用プラグイン

|                               |     |
| ----------------------------- | --- |
| [ActorNameWindow]             | 名前ウィンドウを表示できるようにします。 |
| [BackLog]                     | バックログを表示できるようにします。 |
| [ConfigurableMessageClosing]  | メッセージの表示後に他のイベントコマンドが実行されてもメッセージウィンドウを自動で閉じずに、表示したままにできるようにします。 |
| [ConfigurableMessageWindow]   | メッセージ行数やフォントを変更できるようにします。 |
| [EventCommandSkip]            | イベントコマンドをスキップできるようにします。 |
| [MessageAttachmentButton]     | メッセージウィンドウに任意の機能を実行するためのボタンを追加します。 |
| [PauseSignAfterText]          | メッセージ送り記号をメッセージの末尾に表示するようにします。 |
| [ResumableMessagePosition]    | 自動ではじまるイベントの途中でセーブを行ったときに、表示中のメッセージ位置を保持し、ロード時にその位置から復帰できるようにします。 |
| [Tachie]                      | キャラクターの立ち絵を表示できるようにします。 |
| [ToggleableMessageVisibility] | メッセージウィンドウの表示／非表示を切替できるようにします。 |
| [Transition]                  | フェードイン／フェードアウトの際にトランジションを設定できるようにします。 |
| [VariableObserver]            | 任意の変数を監視して、値の変更時に行う処理を設定できるようにします。 |

# 開発者向け情報

## プラグインを追加する

```
yarn hygen plugin new --name your-brand-new-plugin-name
```

## プラグインをビルドする

```
yarn workspace plugin-name build
```

[ActorNameWindow]: ./packages/actor-name-window/
[BackLog]: ./packages/back-log/
[ConfigurableMessageClosing]: ./packages/configurable-message-closing/
[ConfigurableMessageWindow]: ./packages/configurable-message-window/
[EventCommandSkip]: ./packages/event-command-skip/
[MessageAttachmentButton]: ./packages/message-attachment-button/
[PauseSignAfterText]: ./packages/pause-sign-after-text/
[ResumableMessagePosition]: ./packages/resumable-message-position/
[Tachie]: ./packages/tachie/
[ToggleableMessageVisibility]: ./packages/togglealbe-message-visibility/
[Transition]: ./packages/transition/
[VariableObserver]: ./packages/variable-observer/

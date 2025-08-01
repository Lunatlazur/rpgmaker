# RPGMaker DOM Types

RPGツクールMV/MZ対応DOM型定義ライブラリ - バージョン間差異を吸収した統合DOM型定義を提供

## 概要

このライブラリは、RPGツクールMV/MZ間のDOM型定義の差異を解決し、プラグイン開発を支援します。

### 提供する型定義

1. **MV専用型定義** (`@rpgmaker/dom-types/mv`): RPGツクールMV環境専用
2. **MZ専用型定義** (`@rpgmaker/dom-types/mz`): RPGツクールMZ環境専用  
3. **共通型定義** (`@rpgmaker/dom-types/common`): 両バージョンで同一の型のみ
4. **統合型定義** (`@rpgmaker/dom-types/unified`): バージョン間差異を吸収したユニオン型

### 特徴

- ✅ TypeScript完全対応
- ✅ バージョン間の型安全性を保証
- ✅ 型ガードによるランタイム判定
- ✅ 自動生成による一貫性
- ✅ プラグイン開発における相互運用性

## インストール

```bash
yarn install
yarn run build
```

## 使用方法

### 基本的な使用方法

```bash
# TypeScriptで直接実行
yarn run start -- --mv-lib ./path/to/mv/lib.dom.d.ts --mz-lib ./path/to/mz/lib.dom.d.ts

# ビルド後のJSで実行
node dist/diff-tool.js --mv-lib ./path/to/mv/lib.dom.d.ts --mz-lib ./path/to/mz/lib.dom.d.ts

# ts-nodeで実行
ts-node src/diff-tool.ts --mv-lib ./path/to/mv/lib.dom.d.ts --mz-lib ./path/to/mz/lib.dom.d.ts
```

### オプション

- `--mv-lib <path>` (必須): MV版 lib.dom.d.ts のパス
- `--mz-lib <path>` (必須): MZ版 lib.dom.d.ts のパス
- `-o, --output <path>`: 出力ファイルパス (省略時は標準出力)
- `-v, --verbose`: 詳細ログ出力
- `-f, --format <format>`: 出力形式 (json, yaml, markdown)

### 実行例

```bash
# JSON形式で標準出力
ts-node src/diff-tool.ts --mv-lib ../rpgmakermv-types/typings/lib/lib.dom.d.ts --mz-lib ../rpgmakermz-types/typings/libs/lib.dom.d.ts

# ファイルに出力
ts-node src/diff-tool.ts --mv-lib ./mv/lib.dom.d.ts --mz-lib ./mz/lib.dom.d.ts -o result.json

# 詳細ログ付きでMarkdown形式出力
ts-node src/diff-tool.ts --mv-lib ./mv/lib.dom.d.ts --mz-lib ./mz/lib.dom.d.ts -f markdown -v -o report.md
```

## 出力形式

### JSON形式（デフォルト）

```json
{
  "common": ["Document", "HTMLElement", "Event"],
  "mvOnly": ["WebKitPoint"],
  "mzOnly": ["ResizeObserver", "ReportingObserver"]
}
```

### YAML形式

```yaml
common:
  - Document
  - HTMLElement
  - Event
mvOnly:
  - WebKitPoint
mzOnly:
  - ResizeObserver
  - ReportingObserver
```

### Markdown形式

Markdownレポート形式で、統計情報と型定義リストを含む詳細なレポートを生成します。

## 開発

### スクリプト

- `yarn run build`: TypeScriptをコンパイル
- `yarn run start`: ツールを実行
- `yarn run dev`: 開発モード（ファイル監視）
- `yarn run clean`: ビルド成果物を削除
- `yarn run test`: テスト実行
- `yarn run lint`: ESLintでコード検査

### アーキテクチャ

```
src/
├── diff-tool.ts           # メインCLIツール
├── types/
│   └── index.ts          # 型定義
├── parsers/
│   └── dom-parser.ts     # lib.dom.d.ts専用パーサー
├── comparators/
│   └── dom-comparator.ts # DOM型比較ロジック
└── utils/
    ├── file-utils.ts     # ファイル操作ユーティリティ
    └── logger.ts         # ログ出力
```

## 技術仕様

- **言語**: TypeScript
- **実行環境**: Node.js 18+
- **主要依存**: TypeScript Compiler API
- **出力**: JSON/YAML/Markdown

## ライセンス

MIT

# rpgmakermv_typescript_dts

RPGツクールMVコアスクリプトを TypeScript で扱うための型定義ファイルです。

## 対象バージョン
1.6.1コミュニティ版1.3b

## 利用方法

```
npm install rpgmakermv_typescript_dts
```

or

```
yarn add --dev rpgmakermv_typescript_dts
```

tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "baseUrl": "src",
    "outDir": "build",
    "inlineSourceMap": false,
    "noFallthroughCasesInSwitch": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    "removeComments": false,
    "esModuleInterop": true,
    "lib": [
      "es6",
    ]
  },
  "types": [
    "rpgmakermv_typescript_dts"
  ]
}
```

## License
[MIT License](LICENSE)

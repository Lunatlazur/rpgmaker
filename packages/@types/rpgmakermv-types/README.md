# rpgmakermv-types

RPGツクールMV のコアスクリプトを TypeScript で扱うための型定義ファイルです。

## 対象バージョン
1.6.1コミュニティ版1.3b

## 利用方法

```
npm install https://gitpkg.now.sh/Lunatlazur/rpgmaker/packages/@types/rpgmakermv-types
```

or

```
yarn add --dev https://gitpkg.now.sh/Lunatlazur/rpgmaker/packages/@types/rpgmakermv-types
```

or

```
pnpm add -D https://gitpkg.now.sh/Lunatlazur/rpgmaker/packages/@types/rpgmakermv-types
```


tsconfig.json

RPGツクールMV

```json
{
  "compilerOptions": {
    "target": "es2018",
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
      "es2018",
    ]
  },
  "types": [
    "@lunatlazur/rpgmakermv-types"
  ]
}

RPGツクールMZ

```json
{
  "compilerOptions": {
    "target": "es2020",
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
      "es2020",
    ]
  },
  "types": [
    "rpgmakermz_types"
  ]
}

```

## License
[License](LICENSE) を参照してください

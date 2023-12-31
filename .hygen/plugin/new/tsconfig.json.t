---
to: packages/<%= name %>/tsconfig.json
---
{
  "compilerOptions": {
    "target": "es2019",
    "module": "esnext",
    "baseUrl": "src",
    "outDir": "build",
    "inlineSourceMap": false,
    "newLine": "LF",
    "noFallthroughCasesInSwitch": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    "removeComments": false,
    "lib": [
      "es2019"
    ],
    "types": [
      "@lunatlazur/rpgmakermv-types"
    ]
  },
  "include": [
    "src/**/*",
    "typings/**/*.d.ts"
  ]
}

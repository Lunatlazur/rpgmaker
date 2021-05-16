---
to: packages/<%= name %>/package.json
---
{
  "name": "<%= name %>",
  "private": true,
  "version": "1.0.0",
  "license": "Zlib",
  "description": "% description here %",
  "description:ja": "% ここに日本語の説明 %",
  "author": "<%= h.author() %>",
  "author:ja": "<%= h.author('ja') %>",
  "scripts": {
    "build": "rollup -c"
  },
  "dependencies": {},
  "devDependencies": {
    "rpgmakermv_typescript_dts": "Lunatlazur/rpgmakermv_typescript_dts",
    "@babel/core": "^7.14.2",
    "@babel/preset-env": "^7.14.2",
    "@rollup/plugin-babel": "^5.3.0",
    "@rollup/plugin-commonjs": "^19.0.0",
    "@rollup/plugin-node-resolve": "^13.0.0",
    "@rollup/plugin-typescript": "^8.2.1",
    "@types/node": "^14.0.23",
    "rollup": "^2.47.0",
    "typescript": "^4.2.4"
  }
}

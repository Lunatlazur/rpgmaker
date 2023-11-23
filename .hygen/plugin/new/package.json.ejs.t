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
  "devDependencies": {
    "@lunatlazur/rpgmakermv-types": "workspace:*",
    "@types/node": "20.5.0",
    "@~/configs-ejs": "workspace:*",
    "@~/configs-rollup": "workspace:*",
    "rollup": "^4.5.0"
  }
}

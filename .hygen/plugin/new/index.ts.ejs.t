---
to: packages/<%= name %>/src/index.ts
---
const pluginName = '<%= `${h.namespace()}_${h.changeCase.pascal(name)}` %>'

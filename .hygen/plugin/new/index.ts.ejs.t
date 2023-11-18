---
to: packages/<%= name %>/src/<%= `${h.namespace()}_${h.changeCase.pascal(name)}` %>.ts
---
const pluginName = '<%= `${h.namespace()}_${h.changeCase.pascal(name)}` %>'

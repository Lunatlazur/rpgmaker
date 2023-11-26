---
to: packages/<%= name %>/src/plugin-meta.yml
---
locales: [en, ja]
desc:en:
desc:ja:
changelogs:
  - version: 1.0.0
    date: <%= locals.date || h.today() %>
    changes:en: |-
      - Published.
    changes:ja: |-
      - 公開

import * as fs from 'fs'
import ejs from 'ejs'
import path from 'path'
import yaml from 'js-yaml'
import { pascalCase } from 'pascal-case'
import { format } from 'date-fns'

function ensureIndent(text, size, indent = ' ') {
    return text.replace(/^/gm, indent.repeat(size)).trimStart()
}

function ensureLineBreak(text) {
    return text.replace(/  (\n)/gm, ' \\$1').trimStart()
}

const scriptDir = path.dirname(process.argv[1])
const workspaceRoot = path.resolve(scriptDir, '..', '..', '..', '..')
const templateDir = path.resolve(workspaceRoot, 'config', 'templates')
const projectDir = process.cwd()
const doc = {
    readme: {
        ja: fs.readFileSync(path.resolve(templateDir, 'README.md.ejs'), 'utf-8'),
        en: fs.readFileSync(path.resolve(templateDir, 'README.en.md.ejs'), 'utf-8'),
    },
    changelog: {
        ja: fs.readFileSync(path.resolve(templateDir, 'CHANGELOG.md.ejs'), 'utf-8'),
        en: fs.readFileSync(path.resolve(templateDir, 'CHANGELOG.en.md.ejs'), 'utf-8'),
    },
    usage: {
        ja: fs.readFileSync(path.resolve(templateDir, 'USAGE.md.ejs'), 'utf-8'),
        en: fs.readFileSync(path.resolve(templateDir, 'USAGE.en.md.ejs'), 'utf-8'),
    },
}
const meta = yaml.load(fs.readFileSync(path.resolve(projectDir, 'src/plugin-meta.yml'), 'utf-8'))
const img = yaml.load(fs.readFileSync(path.resolve(projectDir, 'img/img.yml'), 'utf-8'))
const { default: packageJson } = await import(
    path.relative(scriptDir, path.resolve(projectDir, 'package.json')),
    { assert: { type: 'json' } },
)
const data = {
    name: pascalCase(packageJson.name),
    target: 'MV',
    content: {
        'desc:ja': meta['desc:ja'],
        'title:ja': packageJson['description:ja'],
        'desc:en': meta['desc:en'],
        'title:en': packageJson.description,
        screenshots: {
            items: img.screenshots.map((screenshot) => {
                return {
                    ...screenshot,
                    filename: `img/${screenshot.filename}`,
                }
            }),
            copyright: [...new Set(img.credits || []).map((credit) => {
                return credit.copyright
            })].map((copyright) => `©${copyright.name}`).join(' '),
        },
        credits: img.categories.map((category) => {
            return {
                'category:ja': category['name:ja'],
                'category:en': category['name:en'],
                items: img.credits.flatmap((credit) => {
                    return credit.items.filter((item) => item.category === category.id).map((item) => {
                        return {
                            copyright: credit.copyright,
                            'name:en': item['name:en'],
                            'name:ja': item['name:ja'],
                            'url:en': item['url:en'],
                            'url:ja': item['url:ja'],
                        }
                    })
                }),
            }
        }),
    },
    organization: packageJson.organization,
}

const changelogs = meta.changelogs.map((changelog) => {
    return {
        ...changelog,
        date: format(changelog.date, 'yyyy-MM-dd'),
    }
})

const { commands } = yaml.load(fs.readFileSync(path.resolve(projectDir, 'src/plugin-commands.yml'), 'utf-8'))
const helpers = { ensureLineBreak, ensureIndent }

fs.writeFileSync('README.md', ejs.render(doc.readme.ja, data))
fs.writeFileSync('README.en.md', ejs.render(doc.readme.en, data))
fs.writeFileSync('doc/CHANGELOG.md', ejs.render(doc.changelog.ja, { changelogs }))
fs.writeFileSync('doc/CHANGELOG.en.md', ejs.render(doc.changelog.en, { changelogs }))
fs.writeFileSync('doc/USAGE.md', ejs.render(doc.usage.ja, { usage: meta['usage:ja'], commands, helpers }))
fs.writeFileSync('doc/USAGE.en.md', ejs.render(doc.usage.en, { usage: meta['usage:en'], commands, helpers }))

import * as fs from 'fs'
import ejs from 'ejs'
import path from 'path'
import yaml from 'js-yaml'
import { pascalCase } from 'pascal-case'
import { format } from 'date-fns'
import easta from 'easta'
import graphemer from 'graphemer'

const Graphemer = graphemer.default
const splitter = new Graphemer()
function measureTextWidth(text) {
    return splitter.splitGraphemes(text).reduce((length, char) => {
        const eaw = easta(char)
        switch (eaw) {
        case 'F':
        case 'W':
            return length + 2
        case 'Na':
        case 'H':
        case 'A':
        case 'N':
            return length + 1
        }
    }, 0)
}

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
        'description:ja': meta['decs:ja'],
        'title:ja': packageJson['description:ja'],
        'description:en': meta['decs:en'],
        'title:en': packageJson.description,
        screenshots: img.screenshots.map((screenshot) => {
            return {
                ...screenshot,
                filename: `img/${screenshot.filename}`,
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

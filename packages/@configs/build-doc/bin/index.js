import * as fs from 'fs'
import ejs from 'ejs'
import path from 'path'
import yaml from 'js-yaml'
import { pascalCase } from 'pascal-case'
import { format } from 'date-fns'

const scriptDir = path.dirname(process.argv[1])
const workspaceRoot = path.resolve(scriptDir, '..', '..', '..', '..')
const templateDir = path.resolve(workspaceRoot, 'config', 'templates')
const projectDir = process.cwd()
const readme = {
    ja: fs.readFileSync(path.resolve(templateDir, 'README.md.ejs'), 'utf-8'),
    en: fs.readFileSync(path.resolve(templateDir, 'README.en.md.ejs'), 'utf-8'),
}
const changelog = {
    ja: fs.readFileSync(path.resolve(templateDir, 'CHANGELOG.md.ejs'), 'utf-8'),
    en: fs.readFileSync(path.resolve(templateDir, 'CHANGELOG.en.md.ejs'), 'utf-8'),
}
const meta = yaml.load(fs.readFileSync(path.resolve(projectDir, 'src/plugin-meta.yml'), 'utf-8'))
const { screenshots } = yaml.load(fs.readFileSync(path.resolve(projectDir, 'img/screenshots.yml'), 'utf-8'))
const { default: packageJson } = await import(
    path.relative(scriptDir, path.resolve(projectDir, 'package.json')),
    { assert: { type: 'json' } },
)
const data = {
    name: pascalCase(packageJson.name),
    target: 'MV',
    content: {
        'description:ja': meta['description:ja'],
        'title:ja': packageJson['description:ja'],
        'description:en': meta['description:en'],
        'title:en': packageJson.description,
        screenshots: screenshots.map((screenshot) => {
            return {
                ...screenshot,
                filename: `img/${screenshot.filename}`,
            }
        }),
    },
    organization: packageJson.organization,
}

fs.writeFileSync('README.md', ejs.render(readme.ja, data))
fs.writeFileSync('README.en.md', ejs.render(readme.en, data))

const { changelogs } = meta

const changelogSrc = {
    changelogs: changelogs.map((changelog) => {
        return {
            ...changelog,
            date: format(changelog.date, 'yyyy-MM-dd'),
        }
    })
}

fs.writeFileSync('doc/CHANGELOG.md', ejs.render(changelog.ja, changelogSrc))
fs.writeFileSync('doc/CHANGELOG.en.md', ejs.render(changelog.en, changelogSrc))

import * as fs from 'fs'
import ejs from 'ejs'
import path from 'path'
import yaml from 'js-yaml'
import { pascalCase } from 'pascal-case'

const scriptDir = path.dirname(process.argv[1])
const workspaceRoot = path.resolve(scriptDir, '..', '..', '..', '..')
const templateDir = path.resolve(workspaceRoot, 'config', 'templates')
const projectDir = process.cwd()
const readme = {
    ja: fs.readFileSync(path.resolve(templateDir, 'README.md.ejs'), 'utf-8'),
    en: fs.readFileSync(path.resolve(templateDir, 'README.en.md.ejs'), 'utf-8'),
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
        screenshots,
    },
    organization: packageJson.organization,
}
// ejs.render(readme.ja, data)
// fs.writeFileSync()

console.log(ejs.render(readme.ja, data))

import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';
import yaml from 'js-yaml';
import { omitBy } from 'lodash';
import compare from 'semver-compare';
import commenting from 'commenting';
import ejs from 'ejs';

function isObject(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === 'object';
}

function isNumber(obj) {
    return typeof (obj) === 'number' && Number.isFinite(obj);
}

function serializeObject(obj) {
    if (obj != null) {
        if (isObject(obj)) {
            return JSON.stringify(Object.keys(obj).reduce((prev, key) => {
                return { ...prev, [key]: serializeObject(obj[key]) };
            }, {}));
        }
        else if (Array.isArray(obj)) {
            return JSON.stringify(obj.map((item) => {
                return serializeObject(item);
            }));
        }
        else if (isNumber(obj)) {
            return obj.toString();
        }
        else {
            return obj;
        }
    }
    else {
        return null;
    }
}

function processListType(type, options, locales) {
    return options.reduce((prev, option) => {
        return locales.reduce((prev, locale) => {
            return {
                ...prev,
                [locale]: {
                    type,
                    options: [
                        ...(prev[locale] ? prev[locale].options : []),
                        {
                            option: option[`option:${locale}`],
                            value: option.value,
                        },
                    ],
                },
            };
        }, prev);
    }, {});
}
function processBooleanType(type, value, locales) {
    return locales.reduce((prev, locale) => {
        return {
            ...prev,
            [locale]: {
                type,
                on: value[`on:${locale}`],
                off: value[`off:${locale}`],
            },
        };
    }, {});
}
function processType(obj, locales) {
    if (isObject(obj)) {
        if ('select' in obj || 'select[]' in obj || 'combo' in obj || 'combo[]' in obj) {
            const [[type, value]] = Object.entries(obj);
            return processListType(type, value, locales);
        }
        else if ('boolean' in obj || 'boolean[]' in obj) {
            const [[type, value]] = Object.entries(obj);
            return processBooleanType(type, value, locales);
        }
        else if ('file' in obj || 'file[]' in obj || 'number' in obj || 'number[]' in obj) {
            const [[type, value]] = Object.entries(obj);
            return locales.reduce((prev, locale) => {
                return {
                    ...prev,
                    [locale]: {
                        type,
                        ...value,
                    },
                };
            }, {});
        }
    }
    else {
        return locales.reduce((prev, locale) => {
            return { ...prev, [locale]: { type: obj } };
        }, {});
    }
}

function processPluginParams(params, locales) {
    return params.reduce((prev, param) => {
        const type = processType(param.type, locales);
        return locales.reduce((prev, locale) => {
            const paramDefault = param[`default:${locale}`] || param.default;
            return {
                ...prev,
                [locale]: [
                    ...(prev[locale] || []),
                    omitBy({
                        param: param[`param:${locale}`],
                        desc: param[`desc:${locale}`],
                        ...type[locale],
                        default: serializeObject(paramDefault),
                    }, (value) => value == null),
                ],
            };
        }, prev);
    }, {});
}

function processPluginParamStructs(structs, locales) {
    return Object.keys(structs).reduce((prev, name) => {
        return Object.keys(structs[name]).reduce((prev, paramName) => {
            const param = structs[name][paramName];
            const type = processType(param.type, locales);
            return locales.reduce((prev, locale) => {
                const paramDefault = param[`default:${locale}`] || param.default;
                return {
                    ...prev,
                    [locale]: {
                        ...(prev[locale] || {}),
                        [name]: [
                            ...(prev[locale] ? prev[locale][name] : []),
                            omitBy({
                                param: paramName,
                                desc: param[`desc:${locale}`],
                                ...type[locale],
                                default: serializeObject(paramDefault),
                            }, (value) => value == null),
                        ],
                    },
                };
            }, prev);
        }, prev);
    }, {});
}

const readFile = promisify(fs.readFile.bind(fs));
const paths = {
    license: 'LICENSE.md',
    'changelog:en': 'CHANGELOG.en.md',
    'changelog:ja': 'CHANGELOG.md',
    'usage:en': 'USAGE.en.md',
    'usage:ja': 'USAGE.md',
    'readme:en': 'README.en.md',
    'readme:ja': 'README.md',
};
function loadYAML(pluginMeta) {
    return yaml.load(pluginMeta);
}
function isFilesKey(key) {
    return !key.includes(':');
}
async function getStore(packageDir, configDir) {
    const store = {
        files: {
            general: null,
            ja: null,
            en: null,
        },
        pluginName: null,
        packageJson: null,
        headerTemplate: null,
        builderConfig: null,
        pluginParams: {
            ja: null,
            en: null,
        },
        pluginParamStructs: {
            ja: null,
            en: null,
        },
    };
    const files = {
        general: {},
        en: {},
        ja: {},
    };
    await Promise.all([
        ...Object.keys(paths).map(async (key) => {
            const file = await readFile(path.join(packageDir, paths[key]), 'utf-8').catch(() => {
                return '';
            });
            if (isFilesKey(key)) {
                files.general[key] = file.replace(/\r\n/gm, '\n');
            }
            else {
                const [name, locale] = key.split(':');
                files[locale][name] = file.replace(/\r\n/gm, '\n');
            }
        }),
        (async () => {
            store.headerTemplate = await readFile(path.join(configDir, 'templates', 'header.txt.ejs'), 'utf-8');
        })(),
        (async () => {
            const builderConfig = await readFile(path.join(configDir, 'builderconfig.json'), 'utf-8');
            store.builderConfig = JSON.parse(builderConfig || '{}');
        })(),
        (async () => {
            const pluginMeta = await readFile(path.join(packageDir, 'src', 'plugin-meta.yml'), 'utf-8').catch(() => {
                return null;
            });
            const { params, structs, locales } = loadYAML(pluginMeta) || {};
            store.pluginParams = processPluginParams(params || [], locales);
            store.pluginParamStructs = processPluginParamStructs(structs || {}, locales);
        })(),
        (async () => {
            const packageJson = await readFile(path.join(packageDir, 'package.json'), 'utf-8');
            store.packageJson = JSON.parse(packageJson);
        })(),
    ]);
    store.files = files;
    return store;
}

const mdAnchorPattern = /\[([^\]]+)\]\(([^\)]+)\)/;
function processLicense(licenseText) {
    const [license] = licenseText.split('\n');
    const [_, licenseName, licenseUrl] = license.match(mdAnchorPattern) || [null, '', ''];
    return {
        licenseName,
        licenseUrl,
    };
}

function processVersion(changelog) {
    const versionPattern = /\d+\.\d+\.\d+ \d{4}-\d{2}-\d{2}/g;
    const versions = changelog.match(versionPattern).map((matched) => {
        const [version, date] = matched.split(' ');
        return { version, date };
    }).sort((a, b) => compare(a.version, b.version));
    const [first] = versions;
    const [latest] = versions.slice(-1);
    return {
        releasedYear: first ? (new Date(first.date)).getFullYear().toString() : '',
        latestVersion: latest ? latest.version : '',
        lastUpdatedAt: latest ? latest.date : '',
    };
}

function buildHeaderVariables(store) {
    const title = `${store.pluginName}.js`;
    const { author } = store.packageJson;
    return {
        ...store.builderConfig,
        title,
        author,
        ...processLicense(store.files.general.license),
        ...processVersion(store.files.en.changelog),
    };
}

///  <reference path="../../typings/commenting.d.ts" />
const { Style: Style$1 } = commenting;
function buildHeaderTop(headerTemplate, variables) {
    const horizontalRule = '='.repeat(77);
    const style = new Style$1('//', `//${horizontalRule}`, `//${horizontalRule}`);
    return commenting(ejs.render(headerTemplate, variables).trim(), { style, keepIndent: true });
}

function buildPluginParams(params) {
    return params.flatMap((param) => [
        '',
        ...Object.keys(param).flatMap((name) => {
            return `@${name} ${param[name]}`.split('\n');
        }),
    ]);
}

function buildPluginParamStructs(struct) {
    return Object.keys(struct).map((name) => {
        return {
            name,
            struct: struct[name].flatMap((param) => [
                '',
                ...Object.keys(param).flatMap((paramKey) => {
                    if (paramKey === 'options') {
                        return param[paramKey].flatMap((option) => [
                            '',
                            ...Object.keys(option).flatMap((optionKey) => {
                                return `@${optionKey} ${option[optionKey]}`.split('\n');
                            }),
                        ]);
                    }
                    return `@${paramKey} ${param[paramKey]}`.split('\n');
                }),
            ]).slice(1),
        };
    });
}

function processReadme(readmeText) {
    const [_, readme] = readmeText.split(/^---$/m);
    return readme.trim().replace('､', '、').replace('｡', '。').replace(/(?:\\|[ ]{2})$/gm, '');
}

///  <reference path="../../typings/commenting.d.ts" />
const { Style } = commenting;
function buildHeaderBody(store, locale) {
    const description = store.packageJson[locale === 'en' ? 'description' : `description:${locale || 'ja'}`];
    const author = store.packageJson[locale === 'en' ? 'author' : `author:${locale || 'ja'}`];
    const { changelog, usage } = store.files[locale || 'ja'];
    const style = new Style(' *', `/*:${locale === 'en' ? '' : locale}`, ' */');
    const params = buildPluginParams(store.pluginParams[locale] || []);
    const structs = buildPluginParamStructs(store.pluginParamStructs[locale] || {});
    const [help, ...rest] = processReadme(store.files[locale].readme).split('\n');
    return [
        commenting([
            `@plugindesc ${description}`,
            `@author ${author}`,
            `@help ${help}`,
            ...rest,
            '',
            ...usage.split('\n'),
            '',
            ...changelog.split('\n'),
            ...params,
        ], { style, keepIndent: true }),
        ...structs.map(({ name, struct }) => commenting(struct, {
            style: new Style(' *', `/*~struct~${name}:${locale}`, ' */'),
            keepIndent: true,
        })),
    ].join('');
}

function injectHeader(options) {
    return {
        name: 'injectHeader',
        async renderChunk(code, chunk) {
            if (chunk.facadeModuleId) {
                const store = await getStore(options.packageDir, options.configDir);
                store.pluginName = path.basename(chunk.facadeModuleId, '.ts');
                const variables = buildHeaderVariables(store);
                const header = buildHeaderTop(store.headerTemplate, variables);
                const body = ['en', 'ja'].map((locale) => buildHeaderBody(store, locale)).join('');
                const rendered = header + body + code;
                return rendered;
            }
            else {
                return code;
            }
        },
    };
}

export { injectHeader };

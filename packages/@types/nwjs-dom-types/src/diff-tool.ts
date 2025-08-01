#!/usr/bin/env node

/**
 * lib.dom.d.ts差分抽出ツール - メインCLI
 */

import { Command } from 'commander';
import { CliOptions, DomComparisonResult } from './types';
import { Logger } from './utils/logger';
import { FileUtils } from './utils/file-utils';
import { DomParser } from './parsers/dom-parser';
import { DomComparator } from './comparators/dom-comparator';
import * as path from 'path';

const program = new Command();

program
  .name('dom-diff')
  .description('lib.dom.d.ts差分抽出ツール - RPGツクールMV/MZ間のDOM型定義差異を分析')
  .version('1.0.0')
  .requiredOption('--mv-lib <path>', 'MV版 lib.dom.d.ts のパス')
  .requiredOption('--mz-lib <path>', 'MZ版 lib.dom.d.ts のパス')
  .option('-o, --output <path>', '出力ファイルパス (省略時は標準出力)')
  .option('-v, --verbose', '詳細ログ出力', false)
  .option('-f, --format <format>', '出力形式', 'json')
  .action(async (options: CliOptions) => {
    try {
      await main(options);
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : error);
      process.exit(1);
    }
  });

async function main(options: CliOptions): Promise<void> {
  const logger = new Logger(options.verbose);
  
  logger.info('🔍 lib.dom.d.ts差分抽出ツール開始');
  
  // ファイルパスの検証
  logger.progress('Validating input files...');
  
  try {
    FileUtils.validateLibDomPath(options.mvLib);
    FileUtils.validateLibDomPath(options.mzLib);
  } catch (error) {
    logger.error(`File validation failed: ${error}`);
    throw error;
  }
  
  logger.success('Input files validated');
  
  // パーサー初期化
  const parser = new DomParser(logger);
  const comparator = new DomComparator(logger);
  
  // MV版の解析
  logger.info(`📖 Parsing MV lib.dom.d.ts: ${options.mvLib}`);
  const mvFile = await parser.parseLibDomFile(options.mvLib);
  
  // MZ版の解析
  logger.info(`📖 Parsing MZ lib.dom.d.ts: ${options.mzLib}`);
  const mzFile = await parser.parseLibDomFile(options.mzLib);
  
  // 比較実行
  logger.info('⚖️  Comparing type definitions...');
  const result = comparator.compare(mvFile, mzFile);
  
  // 統計情報の生成
  const stats = comparator.generateStats(result, mvFile, mzFile);
  
  // 結果の表示
  displayStats(logger, stats);
  
  // 結果の出力
  await outputResult(options, result, logger);
  
  logger.success('🎉 差分抽出完了');
}

function displayStats(logger: Logger, stats: any): void {
  logger.info('📊 統計情報:');
  logger.info(`  MV型定義数: ${stats.mvTotal}`);
  logger.info(`  MZ型定義数: ${stats.mzTotal}`);
  logger.info(`  共通型定義: ${stats.commonCount} (${stats.commonPercentage.toFixed(1)}%)`);
  logger.info(`  MV独自型定義: ${stats.mvOnlyCount}`);
  logger.info(`  MZ独自型定義: ${stats.mzOnlyCount}`);
  logger.info(`  型定義の衝突: ${stats.conflictCount}`);
  logger.info(`  MV互換性: ${stats.mvCompatibility.toFixed(1)}%`);
  logger.info(`  MZ互換性: ${stats.mzCompatibility.toFixed(1)}%`);
}

async function outputResult(options: CliOptions, result: DomComparisonResult, logger: Logger): Promise<void> {
  const output = formatOutput(result, options.format || 'json');
  
  if (options.output) {
    // ファイル出力
    logger.progress(`Writing result to ${options.output}...`);
    FileUtils.writeFile(options.output, output);
    logger.success(`Result written to ${options.output}`);
  } else {
    // 標準出力
    console.log(output);
  }
}

function formatOutput(result: DomComparisonResult, format: string): string {
  switch (format) {
    case 'json':
      return JSON.stringify(result, null, 2);
      
    case 'yaml':
      // 簡易YAML出力（yamlライブラリを追加する場合は後で実装）
      return `common:\n${result.common.map(t => `  - ${t}`).join('\n')}\n` +
             `mvOnly:\n${result.mvOnly.map(t => `  - ${t}`).join('\n')}\n` +
             `mzOnly:\n${result.mzOnly.map(t => `  - ${t}`).join('\n')}`;
             
    case 'markdown':
      return generateMarkdownReport(result);
      
    default:
      return JSON.stringify(result, null, 2);
  }
}

function generateMarkdownReport(result: DomComparisonResult): string {
  return `# lib.dom.d.ts 差分解析結果

## 統計情報
- 共通型定義: ${result.common.length}個
- MV独自型定義: ${result.mvOnly.length}個  
- MZ独自型定義: ${result.mzOnly.length}個

## 共通型定義
${result.common.map(t => `- ${t}`).join('\n')}

## MV独自型定義
${result.mvOnly.map(t => `- ${t}`).join('\n')}

## MZ独自型定義
${result.mzOnly.map(t => `- ${t}`).join('\n')}
`;
}

// CLIの実行開始
if (require.main === module) {
  program.parse();
}
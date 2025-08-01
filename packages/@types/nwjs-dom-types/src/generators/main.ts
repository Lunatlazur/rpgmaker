#!/usr/bin/env node

/**
 * DOM型定義生成ツール - メインジェネレーター
 * MV/MZ版lib.dom.d.tsから統合型定義を生成
 */

import * as path from 'path';
import { Logger } from '../utils/logger';
import { FileUtils } from '../utils/file-utils';
import { DomParser } from '../parsers/dom-parser';
import { DomComparator } from '../comparators/dom-comparator';
import { TypeGenerator } from './type-generator';

const logger = new Logger(true);

async function main(): Promise<void> {
  logger.info('🏗️  DOM型定義生成ツール開始');
  
  const projectRoot = path.resolve(__dirname, '../../');
  const sourcesDir = path.join(projectRoot, 'src/sources');
  
  const mvLibPath = path.join(sourcesDir, 'mv-lib.dom.d.ts');
  const mzLibPath = path.join(sourcesDir, 'mz-lib.dom.d.ts');
  
  // ソースファイルの検証
  logger.progress('Validating source files...');
  if (!FileUtils.exists(mvLibPath)) {
    throw new Error(`MV source not found: ${mvLibPath}`);
  }
  if (!FileUtils.exists(mzLibPath)) {
    throw new Error(`MZ source not found: ${mzLibPath}`);
  }
  logger.success('Source files validated');
  
  // パーサー初期化
  const parser = new DomParser(logger);
  const comparator = new DomComparator(logger);
  const generator = new TypeGenerator(logger, projectRoot);
  
  // MV版の解析
  logger.info('📖 Parsing MV lib.dom.d.ts...');
  const mvFile = await parser.parseLibDomFile(mvLibPath);
  
  // MZ版の解析
  logger.info('📖 Parsing MZ lib.dom.d.ts...');
  const mzFile = await parser.parseLibDomFile(mzLibPath);
  
  // 比較実行
  logger.info('⚖️  Comparing type definitions...');
  const comparison = comparator.compare(mvFile, mzFile);
  
  // 統計表示
  const stats = comparator.generateStats(comparison, mvFile, mzFile);
  displayStats(logger, stats);
  
  // 型定義ファイル生成
  logger.info('📝 Generating type definition files...');
  
  await generator.generateMvTypes(mvFile);
  await generator.generateMzTypes(mzFile);
  await generator.generateCommonTypes(comparison, mvFile, mzFile);
  await generator.generateUnifiedTypes(comparison, mvFile, mzFile);
  await generator.generateIndexFile();
  
  logger.success('🎉 DOM型定義生成完了');
}

function displayStats(logger: Logger, stats: any): void {
  logger.info('📊 統計情報:');
  logger.info(`  MV型定義数: ${stats.mvTotal}`);
  logger.info(`  MZ型定義数: ${stats.mzTotal}`);
  logger.info(`  共通型定義: ${stats.commonCount} (${stats.commonPercentage.toFixed(1)}%)`);
  logger.info(`  MV独自型定義: ${stats.mvOnlyCount}`);
  logger.info(`  MZ独自型定義: ${stats.mzOnlyCount}`);
  logger.info(`  型定義の衝突: ${stats.conflictCount}`);
}

// 実行
if (require.main === module) {
  main().catch(error => {
    console.error('Error:', error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
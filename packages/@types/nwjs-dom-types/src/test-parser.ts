#!/usr/bin/env node

/**
 * パーサーテスト - 単一lib.dom.d.tsファイルの解析テスト
 */

import * as path from 'path';
import { Logger } from './utils/logger';
import { FileUtils } from './utils/file-utils';
import { DomParser } from './parsers/dom-parser';

async function testParser(): Promise<void> {
  const logger = new Logger(true);
  
  logger.info('🧪 DOM Parser テスト開始');
  
  const projectRoot = path.resolve(__dirname, '../');
  const sourcesDir = path.join(projectRoot, 'src/sources');
  const mvLibPath = path.join(sourcesDir, 'mv-lib.dom.d.ts');
  
  // ファイル存在確認
  logger.progress('Checking source file...');
  if (!FileUtils.exists(mvLibPath)) {
    throw new Error(`Source file not found: ${mvLibPath}`);
  }
  logger.success(`Source file found: ${mvLibPath}`);
  
  // パーサー初期化
  const parser = new DomParser(logger);
  
  try {
    // MV版lib.dom.d.tsを解析
    logger.info('📖 Parsing MV lib.dom.d.ts...');
    const result = await parser.parseLibDomFile(mvLibPath);
    
    // 結果の表示
    logger.success(`Parse completed in ${result.parseTime}ms`);
    logger.info(`Total types found: ${result.types.size}`);
    
    // 型の種類別集計
    const kindCounts = new Map<string, number>();
    for (const type of result.types.values()) {
      const count = kindCounts.get(type.kind) || 0;
      kindCounts.set(type.kind, count + 1);
    }
    
    logger.info('📊 Type distribution:');
    for (const [kind, count] of kindCounts) {
      logger.info(`  ${kind}: ${count}`);
    }
    
    // サンプル型定義を表示（最初の10個）
    logger.info('📝 Sample type definitions:');
    let count = 0;
    for (const [name, type] of result.types) {
      if (count >= 10) break;
      logger.info(`  ${type.kind}: ${name}`);
      if (type.jsDoc) {
        logger.debug(`    JSDoc: ${type.jsDoc.substring(0, 100)}...`);
      }
      count++;
    }
    
    logger.success('🎉 Parser test completed successfully!');
    
  } catch (error) {
    logger.error(`Parser test failed: ${error}`);
    throw error;
  }
}

// 実行
if (require.main === module) {
  testParser().catch(error => {
    console.error('Test failed:', error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
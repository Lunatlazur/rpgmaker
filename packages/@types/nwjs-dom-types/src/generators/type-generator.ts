/**
 * 型定義生成器 - 各種DOM型定義ファイルを生成
 */

import * as path from 'path';
import { Logger } from '../utils/logger';
import { FileUtils } from '../utils/file-utils';
import { DomComparisonResult, ParsedDomFile, DomTypeDefinition } from '../types';

export class TypeGenerator {
  private logger: Logger;
  private projectRoot: string;

  constructor(logger: Logger, projectRoot: string) {
    this.logger = logger;
    this.projectRoot = projectRoot;
  }

  /**
   * MV専用型定義を生成
   */
  async generateMvTypes(mvFile: ParsedDomFile): Promise<void> {
    this.logger.progress('Generating MV types...');
    
    const mvDir = path.join(this.projectRoot, 'mv');
    const content = this.generateVersionSpecificTypes('MV', mvFile.types);
    
    FileUtils.writeFile(path.join(mvDir, 'lib.dom.d.ts'), content);
    this.logger.success('MV types generated');
  }

  /**
   * MZ専用型定義を生成
   */
  async generateMzTypes(mzFile: ParsedDomFile): Promise<void> {
    this.logger.progress('Generating MZ types...');
    
    const mzDir = path.join(this.projectRoot, 'mz');
    const content = this.generateVersionSpecificTypes('MZ', mzFile.types);
    
    FileUtils.writeFile(path.join(mzDir, 'lib.dom.d.ts'), content);
    this.logger.success('MZ types generated');
  }

  /**
   * 共通型定義を生成
   */
  async generateCommonTypes(
    comparison: DomComparisonResult, 
    mvFile: ParsedDomFile, 
    mzFile: ParsedDomFile
  ): Promise<void> {
    this.logger.progress('Generating common types...');
    
    const commonDir = path.join(this.projectRoot, 'common');
    const commonTypes = new Map<string, DomTypeDefinition>();
    
    // 共通型定義を抽出
    for (const typeName of comparison.common) {
      const mvType = mvFile.types.get(typeName);
      if (mvType) {
        commonTypes.set(typeName, mvType);
      }
    }
    
    const content = this.generateVersionSpecificTypes('Common', commonTypes);
    
    FileUtils.writeFile(path.join(commonDir, 'lib.dom.d.ts'), content);
    this.logger.success('Common types generated');
  }

  /**
   * 統合型定義を生成（ユニオン型）
   */
  async generateUnifiedTypes(
    comparison: DomComparisonResult,
    mvFile: ParsedDomFile,
    mzFile: ParsedDomFile
  ): Promise<void> {
    this.logger.progress('Generating unified types...');
    
    const unifiedDir = path.join(this.projectRoot, 'unified');
    const content = this.generateUnifiedTypeDefinitions(comparison, mvFile, mzFile);
    
    FileUtils.writeFile(path.join(unifiedDir, 'lib.dom.d.ts'), content);
    this.logger.success('Unified types generated');
  }

  /**
   * インデックスファイルを生成
   */
  async generateIndexFile(): Promise<void> {
    this.logger.progress('Generating index file...');
    
    const indexContent = `/**
 * @rpgmaker/dom-types - RPGツクールMV/MZ対応DOM型定義ライブラリ
 * 
 * 使用方法:
 * - MV専用: import '@rpgmaker/dom-types/mv'
 * - MZ専用: import '@rpgmaker/dom-types/mz'  
 * - 共通のみ: import '@rpgmaker/dom-types/common'
 * - 統合版: import '@rpgmaker/dom-types/unified'
 */

export * from './types/index';

// バージョン情報
export const VERSION = '1.0.0';
export const SUPPORTED_VERSIONS = {
  MV: '1.6.1',
  MZ: '1.8.0'
} as const;

// 型定義パス
export const TYPE_PATHS = {
  MV: './mv/lib.dom.d.ts',
  MZ: './mz/lib.dom.d.ts',
  COMMON: './common/lib.dom.d.ts',
  UNIFIED: './unified/lib.dom.d.ts'
} as const;
`;

    FileUtils.writeFile(path.join(this.projectRoot, 'dist', 'index.d.ts'), indexContent);
    
    // index.jsファイルも生成（空のファイルでOK）
    const indexJsContent = `// This is an empty file for module compatibility`;
    FileUtils.writeFile(path.join(this.projectRoot, 'dist', 'index.js'), indexJsContent);
    this.logger.success('Index file generated');
  }

  /**
   * バージョン固有の型定義を生成
   */
  private generateVersionSpecificTypes(version: string, types: Map<string, DomTypeDefinition>): string {
    const header = `/**
 * RPGツクール${version}用 DOM型定義
 * 
 * このファイルは自動生成されています。直接編集しないでください。
 * 生成日時: ${new Date().toISOString()}
 */

`;

    const typeDefinitions = Array.from(types.values())
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(type => this.formatTypeDefinition(type))
      .join('\n\n');

    return header + typeDefinitions;
  }

  /**
   * 統合型定義を生成（ユニオン型とバージョン分岐）
   */
  private generateUnifiedTypeDefinitions(
    comparison: DomComparisonResult,
    mvFile: ParsedDomFile,
    mzFile: ParsedDomFile
  ): string {
    const header = `/**
 * RPGツクールMV/MZ統合 DOM型定義
 * 
 * バージョン間の差異を吸収した統合型定義を提供します。
 * 型ガードを使用してランタイムでバージョンを判定できます。
 * 
 * このファイルは自動生成されています。直接編集しないでください。
 * 生成日時: ${new Date().toISOString()}
 */

// バージョン判定用の型ガード
declare global {
  interface Utils {
    RPGMAKER_NAME: 'MV' | 'MZ';
    RPGMAKER_VERSION: string;
  }
}

export function isRPGMakerMV(): boolean {
  return (globalThis as any).Utils?.RPGMAKER_NAME === 'MV';
}

export function isRPGMakerMZ(): boolean {
  return (globalThis as any).Utils?.RPGMAKER_NAME === 'MZ';
}

// バージョン固有の名前空間
declare namespace RPGMakerMV {
${this.generateNamespaceTypes(mvFile.types, '  ')}
}

declare namespace RPGMakerMZ {
${this.generateNamespaceTypes(mzFile.types, '  ')}
}

// 統合型定義（ユニオン型）
${this.generateUnionTypes(comparison, mvFile, mzFile)}

`;

    return header;
  }

  /**
   * 名前空間内の型定義を生成
   */
  private generateNamespaceTypes(types: Map<string, DomTypeDefinition>, indent: string): string {
    return Array.from(types.values())
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(type => {
        const lines = this.formatTypeDefinition(type).split('\n');
        return lines.map(line => indent + line).join('\n');
      })
      .join('\n\n');
  }

  /**
   * ユニオン型定義を生成
   */
  private generateUnionTypes(
    comparison: DomComparisonResult,
    mvFile: ParsedDomFile,
    mzFile: ParsedDomFile
  ): string {
    const unionTypes: string[] = [];

    // 共通型定義（そのまま使用）
    for (const typeName of comparison.common) {
      const type = mvFile.types.get(typeName);
      if (type) {
        unionTypes.push(this.formatTypeDefinition(type));
      }
    }

    // MV独自の型定義
    for (const typeName of comparison.mvOnly) {
      const mvType = mvFile.types.get(typeName);
      const mzType = mzFile.types.get(typeName);

      if (mvType && !mzType) {
        // MV専用型 - 条件付きで利用可能
        unionTypes.push(`type ${typeName} = RPGMakerMV.${typeName};`);
      } else if (mvType && mzType) {
        // 両方に存在するが異なる型
        unionTypes.push(`type ${typeName} = RPGMakerMV.${typeName} | RPGMakerMZ.${typeName};`);
      }
    }

    // MZ独自の型定義
    for (const typeName of comparison.mzOnly) {
      const mvType = mvFile.types.get(typeName);
      const mzType = mzFile.types.get(typeName);

      if (!mvType && mzType) {
        // MZ専用型 - 条件付きで利用可能
        unionTypes.push(`type ${typeName} = RPGMakerMZ.${typeName};`);
      }
      // mvType && mzType の場合は上記MV側の処理で既に対応済み
    }

    return unionTypes.join('\n\n');
  }

  /**
   * 単一の型定義をフォーマット
   */
  private formatTypeDefinition(type: DomTypeDefinition): string {
    // JSDocコメントがある場合は追加
    let result = '';
    if (type.jsDoc) {
      result += type.jsDoc + '\n';
    }
    
    // 型定義本体
    result += type.signature;
    
    return result;
  }
}
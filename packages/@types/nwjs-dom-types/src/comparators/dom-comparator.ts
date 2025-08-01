/**
 * DOM型比較ロジック
 */

import { DomTypeDefinition, DomComparisonResult, ParsedDomFile, TypeConflict } from '../types';
import { Logger } from '../utils/logger';

export class DomComparator {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  compare(mvFile: ParsedDomFile, mzFile: ParsedDomFile): DomComparisonResult {
    this.logger.progress('Comparing DOM type definitions...');

    const mvTypes = mvFile.types;
    const mzTypes = mzFile.types;

    const common: string[] = [];
    const mvOnly: string[] = [];
    const mzOnly: string[] = [];
    const conflicts: TypeConflict[] = [];

    // MV側の型を基準に比較
    for (const [name, mvType] of mvTypes) {
      const mzType = mzTypes.get(name);
      
      if (!mzType) {
        // MZに存在しない型 = MV独自
        mvOnly.push(name);
        this.logger.debug(`MV only: ${name}`);
      } else {
        // 両方に存在する場合、シグネチャを比較
        if (this.areTypesEqual(mvType, mzType)) {
          common.push(name);
          this.logger.debug(`Common: ${name}`);
        } else {
          // 構造が異なる場合は衝突として記録
          const comparison = this.compareTypeStructures(mvType, mzType);
          conflicts.push({
            name,
            mvType,
            mzType,
            differences: comparison.differences
          });
          this.logger.debug(`Type conflict: ${name} - ${comparison.differences.join(', ')}`);
        }
      }
    }

    // MZ独自の型を検出
    for (const [name, mzType] of mzTypes) {
      if (!mvTypes.has(name)) {
        mzOnly.push(name);
        this.logger.debug(`MZ only: ${name}`);
      }
    }

    // 結果をソート
    common.sort();
    mvOnly.sort();
    mzOnly.sort();

    this.logger.success(
      `Comparison complete - Common: ${common.length}, MV Only: ${mvOnly.length}, MZ Only: ${mzOnly.length}, Conflicts: ${conflicts.length}`
    );

    return {
      common,
      mvOnly,
      mzOnly,
      conflicts
    };
  }

  private areTypesEqual(mvType: DomTypeDefinition, mzType: DomTypeDefinition): boolean {
    // 基本的な比較条件
    if (mvType.kind !== mzType.kind) {
      return false;
    }

    // 正規化されたシグネチャで比較
    return mvType.normalizedSignature === mzType.normalizedSignature;
  }

  /**
   * より詳細な型比較（将来的な拡張用）
   */
  private compareTypeStructures(mvType: DomTypeDefinition, mzType: DomTypeDefinition): {
    isEqual: boolean;
    differences: string[];
  } {
    const differences: string[] = [];

    if (mvType.kind !== mzType.kind) {
      differences.push(`Kind differs: ${mvType.kind} vs ${mzType.kind}`);
    }

    if (mvType.normalizedSignature !== mzType.normalizedSignature) {
      differences.push('Signature differs');
    }

    return {
      isEqual: differences.length === 0,
      differences
    };
  }

  /**
   * 統計情報の生成
   */
  generateStats(result: DomComparisonResult, mvFile: ParsedDomFile, mzFile: ParsedDomFile): {
    mvTotal: number;
    mzTotal: number;
    commonCount: number;
    mvOnlyCount: number;
    mzOnlyCount: number;
    conflictCount: number;
    commonPercentage: number;
    mvCompatibility: number;
    mzCompatibility: number;
  } {
    const mvTotal = mvFile.types.size;
    const mzTotal = mzFile.types.size;
    const commonCount = result.common.length;
    const mvOnlyCount = result.mvOnly.length;
    const mzOnlyCount = result.mzOnly.length;
    const conflictCount = result.conflicts?.length || 0;

    const commonPercentage = mvTotal > 0 ? (commonCount / Math.max(mvTotal, mzTotal)) * 100 : 0;
    const mvCompatibility = mvTotal > 0 ? (commonCount / mvTotal) * 100 : 0;
    const mzCompatibility = mzTotal > 0 ? (commonCount / mzTotal) * 100 : 0;

    return {
      mvTotal,
      mzTotal,
      commonCount,
      mvOnlyCount,
      mzOnlyCount,
      conflictCount,
      commonPercentage,
      mvCompatibility,
      mzCompatibility
    };
  }
}
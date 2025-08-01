/**
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

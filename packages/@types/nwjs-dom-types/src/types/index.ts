/**
 * lib.dom.d.ts差分抽出ツール - 基本型定義
 */

export interface CliOptions {
  mvLib: string;      // MV版 lib.dom.d.ts のパス
  mzLib: string;      // MZ版 lib.dom.d.ts のパス
  output?: string;    // 出力ファイルパス (省略時は標準出力)
  verbose?: boolean;  // 詳細ログ出力
  format?: 'json' | 'yaml' | 'markdown';
}

export interface DomTypeDefinition {
  name: string;
  kind: DomTypeKind;
  signature: string;
  normalizedSignature: string;
  location: string;
  jsDoc?: string;
}

export enum DomTypeKind {
  Interface = 'interface',
  Class = 'class', 
  Type = 'type',
  Enum = 'enum',
  Variable = 'variable',
  Function = 'function',
  Namespace = 'namespace'
}

export interface DomComparisonResult {
  common: string[];     // 両バージョンで同一の型
  mvOnly: string[];     // MV独自の型
  mzOnly: string[];     // MZ独自の型
  conflicts?: TypeConflict[];  // 名前は同じだが構造が異なる型
}

export interface TypeConflict {
  name: string;
  mvType: DomTypeDefinition;
  mzType: DomTypeDefinition;
  differences: string[];
}

export interface ComparisonContext {
  mvLibPath: string;
  mzLibPath: string;
  options: CliOptions;
}

export interface ParsedDomFile {
  filePath: string;
  types: Map<string, DomTypeDefinition>;
  parseTime: number;
}
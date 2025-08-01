/**
 * 名前抽出ユーティリティ - TypeScript AST Nodeから安全に名前を取得
 */

import * as ts from 'typescript';

export class NameExtractor {
  static extractName(node: ts.Node & { name?: ts.Node }): string | null {
    if (!node || !node.name) {
      return null;
    }

    try {
      // TypeScript AST nodes with names - direct property access first
      if (ts.isIdentifier(node.name)) {
        const id = node.name as ts.Identifier;
        // Access text property directly (as shown in debug)
        return (id as any).text || (id as any).escapedText?.toString() || null;
      }
      
      if (ts.isStringLiteral(node.name)) {
        const str = node.name as ts.StringLiteral;
        return (str as any).text || null;
      }

      return null;
    } catch (error) {
      // Silent fallback for name extraction
      return null;
    }
  }

  static extractVariableName(node: ts.VariableDeclaration): string | null {
    if (!node.name) {
      return null;
    }

    try {
      // BindingPatternの場合（分割代入等）は処理を省略
      if (ts.isObjectBindingPattern(node.name) || ts.isArrayBindingPattern(node.name)) {
        return null;
      }

      // Identifierの場合は直接プロパティアクセス
      if (ts.isIdentifier(node.name)) {
        const id = node.name as ts.Identifier;
        return (id as any).text || (id as any).escapedText?.toString() || null;
      }

      return null;
    } catch (error) {
      // Silent fallback
      return null;
    }
  }

  static extractModuleName(node: ts.ModuleDeclaration): string | null {
    if (!node.name) {
      return null;
    }

    try {
      // Identifierの場合は直接プロパティアクセス
      if (ts.isIdentifier(node.name)) {
        const id = node.name as ts.Identifier;
        return (id as any).text || (id as any).escapedText?.toString() || null;
      }
      
      // StringLiteralの場合
      if (ts.isStringLiteral(node.name)) {
        const str = node.name as ts.StringLiteral;
        return (str as any).text || null;
      }

      return null;
    } catch (error) {
      // Silent fallback
      return null;
    }
  }
}
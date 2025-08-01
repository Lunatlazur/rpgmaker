/**
 * lib.dom.d.ts専用パーサー - TypeScript Compiler APIを使用
 */

import * as ts from 'typescript';
import { DomTypeDefinition, DomTypeKind, ParsedDomFile } from '../types';
import { Logger } from '../utils/logger';
import { NameExtractor } from './name-extractor';

export class DomParser {
  private logger: Logger;
  private printer: ts.Printer;

  constructor(logger: Logger) {
    this.logger = logger;
    this.printer = ts.createPrinter({
      newLine: ts.NewLineKind.LineFeed,
      omitTrailingSemicolon: false,
      removeComments: false,
    });
  }

  async parseLibDomFile(filePath: string): Promise<ParsedDomFile> {
    const startTime = Date.now();
    this.logger.progress(`Parsing ${filePath}...`);

    try {
      // ファイルを直接読み込んでSourceFileを作成
      const fs = await import('fs');
      const sourceText = fs.readFileSync(filePath, 'utf-8');
      
      const sourceFile = ts.createSourceFile(
        filePath,
        sourceText,
        ts.ScriptTarget.ES2020,
        true // setParentNodes
      );

      if (!sourceFile) {
        throw new Error(`Cannot create source file: ${filePath}`);
      }

      const types = new Map<string, DomTypeDefinition>();
      
      // AST を走査して型定義を抽出
      this.extractTypes(sourceFile, types);

      const parseTime = Date.now() - startTime;
      this.logger.success(`Parsed ${types.size} types from ${filePath} in ${parseTime}ms`);

      return {
        filePath,
        types,
        parseTime
      };
    } catch (error) {
      this.logger.error(`Failed to parse ${filePath}: ${error}`);
      throw error;
    }
  }

  private extractTypes(node: ts.Node, types: Map<string, DomTypeDefinition>): void {
    const visit = (node: ts.Node) => {
      // インターフェース定義
      if (ts.isInterfaceDeclaration(node)) {
        this.extractInterfaceDeclaration(node, types);
      }
      // クラス定義  
      else if (ts.isClassDeclaration(node)) {
        this.extractClassDeclaration(node, types);
      }
      // 型エイリアス
      else if (ts.isTypeAliasDeclaration(node)) {
        this.extractTypeAliasDeclaration(node, types);
      }
      // Enum定義
      else if (ts.isEnumDeclaration(node)) {
        this.extractEnumDeclaration(node, types);
      }
      // 変数宣言
      else if (ts.isVariableDeclaration(node)) {
        this.extractVariableDeclaration(node, types);
      }
      // 関数宣言
      else if (ts.isFunctionDeclaration(node)) {
        this.extractFunctionDeclaration(node, types);
      }
      // 名前空間
      else if (ts.isModuleDeclaration(node)) {
        this.extractNamespaceDeclaration(node, types);
      }

      ts.forEachChild(node, visit);
    };

    visit(node);
  }

  private extractInterfaceDeclaration(node: ts.InterfaceDeclaration, types: Map<string, DomTypeDefinition>): void {
    const name = NameExtractor.extractName(node);
    if (!name) {
      this.logger.debug('Interface declaration without valid name, skipping');
      return;
    }

    const signature = this.getNodeSignature(node);
    const normalizedSignature = this.normalizeSignature(signature);
    const location = this.getNodeLocation(node);
    const jsDoc = this.getJsDocComment(node);

    types.set(name, {
      name,
      kind: DomTypeKind.Interface,
      signature,
      normalizedSignature,
      location,
      jsDoc
    });

    this.logger.debug(`Found interface: ${name}`);
  }

  private extractClassDeclaration(node: ts.ClassDeclaration, types: Map<string, DomTypeDefinition>): void {
    const name = NameExtractor.extractName(node);
    if (!name) {
      this.logger.debug('Class declaration without valid name, skipping');
      return;
    }

    const signature = this.getNodeSignature(node);
    const normalizedSignature = this.normalizeSignature(signature);
    const location = this.getNodeLocation(node);
    const jsDoc = this.getJsDocComment(node);

    types.set(name, {
      name,
      kind: DomTypeKind.Class,
      signature,
      normalizedSignature,
      location,
      jsDoc
    });

    this.logger.debug(`Found class: ${name}`);
  }

  private extractTypeAliasDeclaration(node: ts.TypeAliasDeclaration, types: Map<string, DomTypeDefinition>): void {
    const name = NameExtractor.extractName(node);
    if (!name) {
      this.logger.debug('Type alias declaration without valid name, skipping');
      return;
    }

    const signature = this.getNodeSignature(node);
    const normalizedSignature = this.normalizeSignature(signature);
    const location = this.getNodeLocation(node);
    const jsDoc = this.getJsDocComment(node);

    types.set(name, {
      name,
      kind: DomTypeKind.Type,
      signature,
      normalizedSignature,
      location,
      jsDoc
    });

    this.logger.debug(`Found type alias: ${name}`);
  }

  private extractEnumDeclaration(node: ts.EnumDeclaration, types: Map<string, DomTypeDefinition>): void {
    const name = NameExtractor.extractName(node);
    if (!name) {
      this.logger.debug('Enum declaration without valid name, skipping');
      return;
    }

    const signature = this.getNodeSignature(node);
    const normalizedSignature = this.normalizeSignature(signature);
    const location = this.getNodeLocation(node);
    const jsDoc = this.getJsDocComment(node);

    types.set(name, {
      name,
      kind: DomTypeKind.Enum,
      signature,
      normalizedSignature,
      location,
      jsDoc
    });

    this.logger.debug(`Found enum: ${name}`);
  }

  private extractVariableDeclaration(node: ts.VariableDeclaration, types: Map<string, DomTypeDefinition>): void {
    const name = NameExtractor.extractVariableName(node);
    if (!name) {
      this.logger.debug('Variable declaration without valid name, skipping');
      return;
    }

    const signature = this.getNodeSignature(node);
    const normalizedSignature = this.normalizeSignature(signature);
    const location = this.getNodeLocation(node);
    const jsDoc = this.getJsDocComment(node);

    types.set(name, {
      name,
      kind: DomTypeKind.Variable,
      signature,
      normalizedSignature,
      location,
      jsDoc
    });

    this.logger.debug(`Found variable: ${name}`);
  }

  private extractFunctionDeclaration(node: ts.FunctionDeclaration, types: Map<string, DomTypeDefinition>): void {
    const name = NameExtractor.extractName(node);
    if (!name) {
      this.logger.debug('Function declaration without valid name, skipping');
      return;
    }

    const signature = this.getNodeSignature(node);
    const normalizedSignature = this.normalizeSignature(signature);
    const location = this.getNodeLocation(node);
    const jsDoc = this.getJsDocComment(node);

    types.set(name, {
      name,
      kind: DomTypeKind.Function,
      signature,
      normalizedSignature,
      location,
      jsDoc
    });

    this.logger.debug(`Found function: ${name}`);
  }

  private extractNamespaceDeclaration(node: ts.ModuleDeclaration, types: Map<string, DomTypeDefinition>): void {
    const name = NameExtractor.extractModuleName(node);
    if (!name) {
      this.logger.debug('Namespace declaration without valid name, skipping');
      return;
    }

    const signature = this.getNodeSignature(node);
    const normalizedSignature = this.normalizeSignature(signature);
    const location = this.getNodeLocation(node);
    const jsDoc = this.getJsDocComment(node);

    types.set(name, {
      name,
      kind: DomTypeKind.Namespace,
      signature,
      normalizedSignature,
      location,
      jsDoc
    });

    this.logger.debug(`Found namespace: ${name}`);
  }

  private getNodeSignature(node: ts.Node): string {
    try {
      const sourceFile = node.getSourceFile();
      if (sourceFile && sourceFile.text) {
        // SourceFileのテキストから直接範囲抽出
        const start = node.getStart(sourceFile);
        const end = node.getEnd();
        const text = sourceFile.text.substring(start, end).trim();
        if (text) {
          return text;
        }
      }
      
      // Printerを使用した方法も試す
      try {
        const printed = this.printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
        if (printed && printed.trim()) {
          return printed.trim();
        }
      } catch (printerError) {
        this.logger.debug(`Printer failed: ${printerError}`);
      }
      
      // フォールバック：基本的な型情報のみ返す
      return this.generateBasicSignature(node);
    } catch (error) {
      this.logger.debug(`Unable to extract signature for node: ${error}`);
      return this.generateBasicSignature(node);
    }
  }
  
  private generateBasicSignature(node: ts.Node): string {
    // 基本的な型情報を生成（安全な方法）
    try {
      if (ts.isInterfaceDeclaration(node)) {
        const name = this.safeGetNodeName(node) || 'UnknownInterface';
        return `interface ${name} { /* properties omitted */ }`;
      } else if (ts.isClassDeclaration(node)) {
        const name = this.safeGetNodeName(node) || 'UnknownClass';
        return `declare class ${name} { /* members omitted */ }`;
      } else if (ts.isTypeAliasDeclaration(node)) {
        const name = this.safeGetNodeName(node) || 'UnknownType';
        return `type ${name} = any;`;
      } else if (ts.isEnumDeclaration(node)) {
        const name = this.safeGetNodeName(node) || 'UnknownEnum';
        return `declare enum ${name} { /* values omitted */ }`;
      } else if (ts.isVariableStatement(node)) {
        return `declare var /* variable omitted */;`;
      } else if (ts.isModuleDeclaration(node)) {
        const name = this.safeGetNodeName(node) || 'UnknownNamespace';
        return `declare namespace ${name} { /* contents omitted */ }`;
      }
    } catch (error) {
      // 何かがエラーになっても安全に処理
    }
    
    return `/* type signature not available */`;
  }
  
  private safeGetNodeName(node: ts.Node): string | undefined {
    try {
      if ('name' in node && node.name) {
        const nameNode = node.name as ts.Node;
        return nameNode.getText?.() || undefined;
      }
    } catch (error) {
      // 安全に失敗
    }
    return undefined;
  }

  private normalizeSignature(signature: string): string {
    // 正規化処理：空白の統一、コメント除去など
    return signature
      .replace(/\/\*[\s\S]*?\*\//g, '') // ブロックコメント除去
      .replace(/\/\/.*$/gm, '') // 行コメント除去
      .replace(/\s+/g, ' ') // 連続する空白を1つにまとめる
      .trim();
  }

  private getNodeLocation(node: ts.Node): string {
    try {
      const sourceFile = node.getSourceFile();
      if (!sourceFile) {
        return '<unknown location>';
      }
      const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart());
      return `${sourceFile.fileName}:${line + 1}:${character + 1}`;
    } catch (error) {
      // Silent fallback for location extraction
      return '<unable to extract location>';
    }
  }

  private getJsDocComment(node: ts.Node): string | undefined {
    try {
      const jsDocNodes = (node as any).jsDoc;
      if (jsDocNodes && jsDocNodes.length > 0) {
        return jsDocNodes[0].getFullText().trim();
      }
      return undefined;
    } catch (error) {
      // Silent fallback for JSDoc extraction
      return undefined;
    }
  }
}
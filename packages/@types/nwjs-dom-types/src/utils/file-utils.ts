/**
 * ファイル操作ユーティリティ
 */

import * as fs from 'fs';
import * as path from 'path';

export class FileUtils {
  static exists(filePath: string): boolean {
    try {
      return fs.existsSync(filePath);
    } catch {
      return false;
    }
  }

  static readFile(filePath: string): string {
    if (!this.exists(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }
    return fs.readFileSync(filePath, 'utf-8');
  }

  static writeFile(filePath: string, content: string): void {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  static isLibDomFile(filePath: string): boolean {
    const fileName = path.basename(filePath);
    return fileName.endsWith('.dom.d.ts');
  }

  static validateLibDomPath(filePath: string): void {
    if (!this.exists(filePath)) {
      throw new Error(`DOM type definition file not found: ${filePath}`);
    }
    
    if (!this.isLibDomFile(filePath)) {
      throw new Error(`File is not a DOM type definition (.dom.d.ts): ${filePath}`);
    }
  }
}
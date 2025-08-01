/**
 * ログ出力ユーティリティ
 */

import chalk from 'chalk';

export class Logger {
  private verbose: boolean;

  constructor(verbose: boolean = false) {
    this.verbose = verbose;
  }

  info(message: string): void {
    console.log(chalk.blue('ℹ'), message);
  }

  success(message: string): void {
    console.log(chalk.green('✓'), message);
  }

  warn(message: string): void {
    console.log(chalk.yellow('⚠'), message);
  }

  error(message: string): void {
    console.log(chalk.red('✗'), message);
  }

  debug(message: string): void {
    if (this.verbose) {
      console.log(chalk.gray('🔍'), chalk.gray(message));
    }
  }

  progress(message: string): void {
    if (this.verbose) {
      console.log(chalk.cyan('⏳'), message);
    }
  }
}
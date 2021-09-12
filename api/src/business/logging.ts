import chalk from 'chalk';

import { ILogger } from '@typing';

/**
 * Simple logger to output info.
 */
class Logger implements ILogger {
  public constructor() {
    console.log(chalk.yellow('Logger activated'));
  }

  public log(message: string) {
    this.print(message, '[LOG]', chalk.yellow);
  }

  public err(message: string) {
    this.print(message, '[ERR]', chalk.red);
  }

  private print(message: string, tag: string, color: (text: string) => string) {
    console.log(color(`${tag}: ${message}`));
  }
}

export default new Logger();

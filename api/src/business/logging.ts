import chalk from 'chalk';

import { ILogger } from '@typing';

/**
 * Simple logger class to output info to log file.
 */
class Logger implements ILogger {
  private static readonly loggingEnabled = process.env.LOGGING === 'true';

  public constructor() {
    console.log(chalk.yellow('Logger activated'));
  }

  public log(message: string) {
    if (Logger.loggingEnabled) {
      this.print(message, '[LOG]', chalk.yellow);
    }
  }

  public err(message: string) {
    if (Logger.loggingEnabled) {
      this.print(message, '[ERR]', chalk.red);
    }
  }

  private print(message: string, tag: string, color: (text: string) => string) {
    console.log(color(`${tag}: ${message}`));
  }
}

export default new Logger();

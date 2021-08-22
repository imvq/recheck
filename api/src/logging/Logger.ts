import { appendFile, writeFile } from 'fs';
import chalk from 'chalk';

import * as computed from '@commons/computed';
import utils from '@utils';
import ILogger from './ILogger';

/**
 * Simple logger class to output info to log file.
 */
class Logger implements ILogger {
  private static readonly logfileMode = utils.parseBoolean(process.env.LOGFILE_MODE as string);

  private static readonly loggingEnabled = utils.parseBoolean(process.env.LOGGING as string);

  /**
   * Constructor running at first call of statuc methods of the class.
   * If it the first run then it clears the log file,
   * otherwice the logger will append to it.
   */
  public constructor() {
    if (Logger.logfileMode) {
      writeFile(computed.DEFAULT_LOGS_LOCATION, '', utils.getDummy);
      return;
    }

    console.log(chalk.yellow('Logger activated'));
  }

  /**
   * Log simple message.
   */
  public log(message: string): void {
    if (Logger.loggingEnabled) {
      this.print(message, '[LOG]', chalk.yellow);
    }
  }

  /**
   * Log error message.
   */
  public err(message: string): void {
    if (Logger.loggingEnabled) {
      this.print(message, '[ERR]', chalk.red);
    }
  }

  /**
   * Log message.
   */
  private print(message: string, tag: string, color: (text: string) => string): void {
    if (Logger.logfileMode) {
      appendFile(computed.DEFAULT_LOGS_LOCATION, `${tag}: ${message}\n`, utils.getDummy);
      return;
    }

    console.log(color(`${tag}: ${message}`));
  }
}

export default new Logger();

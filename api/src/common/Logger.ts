import { appendFile, writeFile } from 'fs';
import chalk from 'chalk';

import * as computed from '@common/computed';
import * as utilityTypes from '@typing/utility';
import utils from '@utils';

/**
 * Simple logger class to output info to log file.
 */
export default class Logger {
  private static readonly instance: Logger = new Logger();

  private static readonly logfileMode = utils.parseBoolean(
    process.env.LOGFILE_MODE as string
  );

  /**
   * Constructor running at first call of statuc methods of the class.
   * If it the first run then it clears the log file,
   * otherwice the logger will append to it.
   */
  private constructor() {
    if (Logger.logfileMode) {
      writeFile(computed.DEFAULT_LOGS_LOCATION, '', utils.getDummy);
      return;
    }

    console.log(chalk.yellow('Logger activated'));
  }

  /**
   * Precondition returning the logger instance
   * if the app is running in the development mode.
   */
  public static ifdev(): utilityTypes.Nullable<Logger> {
    return process.env.NODE_ENV === 'development' ? Logger.instance : null;
  }

  /**
   * Log simple message.
   */
  public log(message: string): void {
    this.print(message, '[LOG]', chalk.yellow);
  }

  /**
   * Log error message.
   */
  public err(message: string): void {
    this.print(message, '[ERR]', chalk.red);
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

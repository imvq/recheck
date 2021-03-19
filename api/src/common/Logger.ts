import { appendFile, writeFile } from 'fs';
import chalk from 'chalk';

import Computed from '@common/Computed';
import Types from '@types';
import Utils from '@utils';

/**
 * Simple logger class to output info to log file.
 */
export default class Logger {
  private static readonly instance: Logger = new Logger();

  private static readonly logfileMode = Utils.parseBoolean(
    process.env.LOGFILE_MODE as string
  );

  /**
   * Constructor running at first call of statuc methods of the class.
   * If it the first run then it clears the log file,
   * otherwice the logger will append to it.
   */
  private constructor() {
    if (Logger.logfileMode) {
      writeFile(Computed.DEFAULT_LOGS_LOCATION, '', Utils.getDummy);
    } else {
      console.log(chalk.yellow('Logger activated'));
    }
  }

  /**
   * Precondition returning the logger instance
   * if the app is running in the development mode.
   *
   * @returns {Logger|null} The logger instance or null
   */
  public static ifdev(): Types.Nullable<Logger> {
    return process.env.NODE_ENV === 'development' ? Logger.instance : null;
  }

  /**
   * Log simple message.
   *
   * @param {string} message Message
   */
  public log(message: string): void {
    this.print(message, '[LOG]', chalk.yellow);
  }

  /**
   * Log error message.
   *
   * @param {string} message Message
   */
  public err(message: string): void {
    this.print(message, '[ERR]', chalk.red);
  }

  /**
   * Log message.
   *
   * @param {string} message Message
   * @param {string} tag Message tag
   */
  private print(message: string, tag: string, color: (text: string) => string): void {
    if (Logger.logfileMode) {
      appendFile(Computed.DEFAULT_LOGS_LOCATION, `${tag}: ${message}\n`, Utils.getDummy);
    } else {
      console.log(color(`${tag}: ${message}`));
    }
  }
}

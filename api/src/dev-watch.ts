import 'module-alias/register';
import 'source-map-support/register';

import chalk from 'chalk';
import TscWatchClient from 'tsc-watch/client';
import childProcess, { ChildProcess } from 'child_process';

/**
 * Run watch mode (development-only purposes).
 */
if (require.main === module) {
  const watcher = new TscWatchClient();
  let script: ChildProcess | undefined;

  watcher.on('first_success', () => {
    console.log(chalk.magenta('Watching session started'));
  });

  watcher.on('success', () => {
    if (!script) {
      script = childProcess.fork('dist');
    } else if (script.kill('SIGINT')) {
      console.log(chalk.cyan(
        'Previous Process killed with SIGINT signal. Please, wait until recompiled'
      ));
      script = childProcess.fork('dist');
    } else {
      console.log(chalk.bgRed(
        'Unable to kill the previous process. Force stop. Please, relaunch script'
      ));
      process.exit(1);
    }
  });

  watcher.on('compile_errors', () => {
    console.log(chalk.bgRed('Compilation failed. Please, fix errors'));
  });

  watcher.start('--project', '.');
}

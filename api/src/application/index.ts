import Logger from '@common/Logger';
import App from './App';

/**
 * Start the server.
 */
async function startServer(): Promise<void> {
  const apiServer = new App();
  await apiServer.start();
  const graceful = async () => {
    Logger.ifdev()?.log('Server terminated manually');
    await apiServer.stop();
    process.exit(0);
  };

  process.on('SIGTERM', graceful);
  process.on('SIGINT', graceful);
}

export = startServer;

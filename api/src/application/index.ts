import Logger from '@common/Logger';
import App from './App';

/**
 * Start the server.
 */
export default async function startServer(): Promise<void> {
  const apiServer = new App();

  switch (process.env.NODE_ENV || '') {
    case 'production':
      await apiServer.start();
      break;
    case 'development':
      await apiServer.dev();
      break;
    default:
      Logger.ifdev()?.err('Invalid NODE_ENV provided');
      process.exit(0);
  }

  const graceful = async () => {
    Logger.ifdev()?.log('Server terminated manually');
    await apiServer.stop();
    process.exit(0);
  };

  process.on('SIGTERM', graceful);
  process.on('SIGINT', graceful);
}

import logger from '@logging/Logger';

import BackendApplication from '@application/BackendApplication';

export default class ServerRunner {
  public async startServer() {
    const application = new BackendApplication();

    switch (process.env.NODE_ENV || '') {
      case 'production':
        await application.start();
        break;
      case 'development':
        await application.dev();
        break;
      default:
        logger.err('Invalid NODE_ENV provided');
        process.exit(0);
    }

    async function graceful() {
      logger.log('Server terminated manually');
      await application.stop();
      process.exit(0);
    }

    process.on('SIGTERM', graceful);
    process.on('SIGINT', graceful);
  }
}

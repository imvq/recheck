import { logger } from '@business/preloaded';

import BackendApplication from '@application/BackendApplication';

export default class ServerRunner {
  public async startServer() {
    const apiServer = new BackendApplication();

    apiServer.start();

    const graceful = async () => {
      logger?.log('Server terminated manually');
      await apiServer.stop();
      process.exit(0);
    };

    process.on('SIGTERM', graceful);
    process.on('SIGINT', graceful);
  }
}

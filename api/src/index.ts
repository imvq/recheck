import 'module-alias/register';

if (process.env.NODE_ENV !== 'production') {
  require('source-map-support/register');
}

// Server runner must be imported after source map support.
// eslint-disable-next-line
import ServerRunner from '@application/ServerRunner';

if (require.main === module) new ServerRunner().startServer();

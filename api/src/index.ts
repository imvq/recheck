import 'module-alias/register';
import 'source-map-support/register';

import ServerRunner from '@application/ServerRunner';

if (require.main === module) {
  new ServerRunner().startServer();
}

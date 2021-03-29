// test for nodemon
console.log('start server');

// import configuration for app-server
import config from 'src/config';

import Logger from 'src/loaders/logger';

Logger.info({
  message: 'Hello distributed log files!',
});

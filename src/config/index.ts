import * as dotenv from 'dotenv';

// Set NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env_found = dotenv.config();

if (env_found.error) {
  // this error should crash whole process
  throw new Error("###can't find .env file!###");
}

// environment variables
export default {
  // app-server listening port
  // api configs

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
};

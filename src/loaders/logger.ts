import * as winston from 'winston';
import config from 'src/config';
import 'winston-daily-rotate-file';

const transports = [];

// log will be different by process.env.NODE_ENV
if (process.env.NODE_ENV !== 'production') {
  transports.push(new winston.transports.Console());
} else {
  transports.push(
    new winston.transports.DailyRotateFile({
      filename: 'application-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      dirname: '.',
    })
  );
}

const LoggerInstance = winston.createLogger({
  level: config.logs.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({stack: true}),
    winston.format.splat(),
    winston.format.json()
  ),
  transports,
});

export default LoggerInstance;

import { createLogger, format, transports } from 'winston';
import * as morgan from 'morgan';
const LOG_TYPE = process.env.LOG_TYPE ?? ''

const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

export const logger = createLogger({
  levels: logLevels,
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
    new transports.File({ filename: 'http.log', level: 'http' })
  ],
});

export const apiLogger = morgan(LOG_TYPE, {
  stream: {
    write: (message) => {
      logger.http(message.trim());
    },
  },
});

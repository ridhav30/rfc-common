import { createLogger, format, transports } from 'winston';
import * as morgan from 'morgan';

const logLevels = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
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

export const morganLogger = morgan('combined', {
    stream: {
      write: (message) => {
        logger.http(message.trim());
      },
    },
  });

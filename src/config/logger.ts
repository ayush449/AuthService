import winston from 'winston';
import { config } from '.';

const logger = winston.createLogger({
    level: config.nodeEnv === 'prod' ? 'info' : 'debug',
    defaultMeta: { service: 'auth-service' },
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console({
            format: winston.format.json(),
        }),
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error',
        }),
        new winston.transports.File({
            filename: 'logs/combined.log',
        }),
    ],
});

export { logger };

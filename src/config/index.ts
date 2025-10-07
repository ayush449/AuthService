import dotenv from 'dotenv';

dotenv.config();

export const config = {
    nodeEnv: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3001,
    jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret',
    jwtRefreshSecret:
        process.env.JWT_REFRESH_SECRET || 'default_refresh_secret',
    databaseUrl:
        process.env.DATABASE_URL || 'mongodb://localhost:27017/pizza-auth',
    emailServiceUrl: process.env.EMAIL_SERVICE_URL || 'http://localhost:3002',
};

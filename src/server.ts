import { config } from './config';
import app from './app';
import { logger } from './config/logger';

const startServer = () => {
    const PORT = config.port;

    try {
        app.listen(PORT, () => {
            logger.info(`Server is running ON ${PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
};

startServer();

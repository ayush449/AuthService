import express from 'express';
import createError from 'http-errors';
import { logger } from './config/logger';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to auth service');
});

// 404 handler
app.use((req, res, next) => {
    next(createError(404));
});

// Error handler
app.use(
    (
        err: Error & { status?: number },
        req: express.Request,
        res: express.Response,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _next: express.NextFunction
    ) => {
        logger.error(err.message, { stack: err.stack, url: req.url });
        res.status(err.status || 500).json({
            error: {
                message: err.message,
                status: err.status || 500,
            },
        });
    }
);

export default app;

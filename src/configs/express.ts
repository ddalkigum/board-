import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import logger from './logger';
import route from '../routes';
import { ErrorCode } from '../errors';

const app = express();

// middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// api router
app.use(route);

// error handler
app.use((request: Request, response: Response, next: NextFunction) => {
  const error = new ErrorCode('NotFound');
  next(error);
});

app.use((error: ErrorCode, request: Request, response: Response, next: NextFunction) => {
  response.statusCode = error.statusCode || 500;

  if (response.statusCode < 500) {
    logger.warn(error);
  } else {
    logger.error(error);
  }

  response.status(response.statusCode).json({
    result: null,
    messageCode: error.name,
    message: error.message,
  });
});

export default app;

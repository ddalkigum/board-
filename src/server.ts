import config from './configs/config';
import app from './configs/express';
import logger from './configs/logger';

const start = () => {
  app.listen(config.port, () => {
    logger.info(`Server on ${config.port}, environment: ${process.env.NODE_ENV}`);
  });
};

start();

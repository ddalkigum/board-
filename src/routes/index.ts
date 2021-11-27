import { NextFunction, Request, Response, Router } from 'express';

const route = Router();

route.get('/', async (request: Request, response: Response, next: NextFunction) => {
  try {
    response.status(200).json({
      message: 'hello, world',
    });
  } catch (error) {
    next(error);
  }
});

export default route;

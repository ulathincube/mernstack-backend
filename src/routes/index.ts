import { Router, Response, Request, NextFunction } from 'express';

const router = Router();

router.get('/', (request: Request, response: Response, next: NextFunction) => {
  console.log('get req');
  response.json('Hello, buddy');
  return;
});

router.post('/', (request: Request, response: Response, next: NextFunction) => {
  const data = request.body;
  console.log(data);

  return;
});

export default router;

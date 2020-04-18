import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    name: 'Lucas',
    email: 'Lucas',
    password: '1',
    techs: ['NodeJS', { experience: 100, title: 'Javascript' }],
  });

  return res.json({ message: 'Hello world' });
}

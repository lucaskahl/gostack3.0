import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthtenticateUserService from '@modules/users/services/AuthenticateUserService';

export default class SessionsControllers {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticateUser = container.resolve(AuthtenticateUserService);

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    delete user.password;

    return res.json({ user, token });
  }
}

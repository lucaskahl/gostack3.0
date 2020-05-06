import { Router } from 'express';

import AuthtenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const authenticateUser = new AuthtenticateUserService();

  const { user, token } = await authenticateUser.execute({ email, password });

  delete user.password;

  return res.json({ user, token });
});

export default sessionsRouter;

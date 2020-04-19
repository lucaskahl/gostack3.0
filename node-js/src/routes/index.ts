import { Router } from 'express';

const routes = Router();

routes.post('/users', (req, res) => {
  const { name, email, password } = req.body;

  const user = {
    name,
    email,
    password,
  };

  return res.json(user);
});

export default routes;

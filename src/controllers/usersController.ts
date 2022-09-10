import { Request, Response } from 'express';

import * as userService from '../services/userService.js';

export async function createUser(req: Request, res: Response) {
  const { email, password } = req.body;
  await userService.createUser(email, password);
  res.sendStatus(201);
}

export async function logIn(req: Request, res: Response) {
  const { email, password } = req.body;
  const token = await userService.logIn(email, password);
  res.status(200).send({ token });
}

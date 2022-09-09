import { Request, Response } from 'express';
import client from '../database.js';

import * as userService from '../services/userService.js';

export async function createUser(req: Request, res: Response) {
  const { email, password } = req.body;
  await userService.createUser(email, password);
  res.sendStatus(201);
}

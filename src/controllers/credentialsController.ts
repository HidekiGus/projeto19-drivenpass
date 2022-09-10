import { Request, Response } from 'express';
import * as credentialService from '../services/credentialService.js';

export async function createCredential(req: Request, res: Response) {
  const { url, username, password, title } = req.body;
  const { authorization } = req.headers;
  await credentialService.createCredential(
    url,
    username,
    password,
    title,
    authorization
  );
  res.sendStatus(201);
}

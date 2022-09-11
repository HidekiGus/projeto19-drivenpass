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

export async function getCredentials(req: Request, res: Response) {
  const { authorization } = req.headers;
  const { id } = req.params;
  const data = await credentialService.getCredentials(authorization, id);
  res.status(200).send(data);
}

export async function deleteCredential(req: Request, res: Response) {
  const { authorization } = req.headers;
  const { id } = req.params;
  await credentialService.deleteCredential(authorization, id);
  res.sendStatus(200);
}

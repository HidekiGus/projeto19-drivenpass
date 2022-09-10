import { Request, Response } from 'express';
import * as credentialService from '../services/credentialService.js';
import jwt from 'jsonwebtoken';

export async function createCredential(req: Request, res: Response) {
  const { url, username, password, title, jwtKey } = req.body;
  await credentialService.createCredential(
    url,
    username,
    password,
    title,
    jwtKey
  );
  res.sendStatus(200);
}

export async function jwtTest(req: Request, res: Response) {
  const data = { userId: 2 };
  const chave = process.env.JWT_SECRET;
  const token = jwt.sign(data, chave);
  res.status(200).send(token);
}

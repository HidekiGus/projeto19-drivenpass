import { Request, Response } from 'express';
import * as cardService from '../services/cardService.js';

export async function createCard(req: Request, res: Response) {
  const { title, cardNumber, securityCode, password, isVirtual, type } =
    req.body;
  const { authorization } = req.headers;
  await cardService.createCard(
    title,
    cardNumber,
    securityCode,
    password,
    isVirtual,
    type,
    authorization
  );
  res.sendStatus(201);
}

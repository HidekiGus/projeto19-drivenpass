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

export async function getCards(req: Request, res: Response) {
  const { authorization } = req.headers;
  const { id } = req.params;
  const data = await cardService.getCards(authorization, id);
  res.status(200).send(data);
}

export async function deleteCard(req: Request, res: Response) {
  const { authorization } = req.headers;
  const { id } = req.params;
  await cardService.deleteCard(authorization, id);
  res.sendStatus(200);
}

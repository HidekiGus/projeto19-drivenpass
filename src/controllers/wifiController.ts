import { Request, Response } from 'express';
import * as wifiService from '../services/wifiService.js';

export async function createWifi(req: Request, res: Response) {
  const { title, networkName, password } = req.body;
  const { authorization } = req.headers;
  await wifiService.createWifi(title, networkName, password, authorization);
  res.sendStatus(201);
}

export async function getWifis(req: Request, res: Response) {
  const { authorization } = req.headers;
  const { id } = req.params;
  const data = await wifiService.getWifis(authorization, id);
  res.status(200).send(data);
}

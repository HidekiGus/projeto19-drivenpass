import { Request, Response } from 'express';
import * as wifiService from '../services/wifiService.js';

export async function createWifi(req: Request, res: Response) {
  const { title, networkName, networkPassword } = req.body;
  const { authorization } = req.headers;
  await wifiService.createWifi(
    title,
    networkName,
    networkPassword,
    authorization
  );
  res.sendStatus(201);
}

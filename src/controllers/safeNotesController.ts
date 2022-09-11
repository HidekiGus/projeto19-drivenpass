import { Request, Response } from 'express';
import * as safeNotesService from '../services/safeNoteService.js';

export async function createSafeNote(req: Request, res: Response) {
  const { title, content } = req.body;
  const { authorization } = req.headers;
  await safeNotesService.createSafeNote(title, content, authorization);
  res.sendStatus(201);
}

export async function getSafeNotes(req: Request, res: Response) {
  const { authorization } = req.headers;
  const { id } = req.params;
  const data = await safeNotesService.getSafeNotes(authorization, id);
  res.status(200).send(data);
}

export async function deleteSafeNote(req: Request, res: Response) {
  const { authorization } = req.headers;
  const { id } = req.params;
  await safeNotesService.deleteSafeNote(authorization, id);
  res.sendStatus(200);
}

import { Request, Response } from 'express';
import * as safeNotesService from '../services/safeNoteService.js';

export async function createSafeNote(req: Request, res: Response) {
  const { title, content } = req.body;
  const { authorization } = req.headers;
  await safeNotesService.createSafeNote(title, content, authorization);
  res.sendStatus(201);
}

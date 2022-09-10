import { Router } from 'express';
import { validateSchema } from '../middlewares/validateSchema.js';
import { safeNotesSchema } from '../schemas/safeNoteSchema.js';
import {
  createSafeNote,
  getSafeNotes,
} from '../controllers/safeNotesController.js';

const safeNotesRouter = Router();

safeNotesRouter.post(
  '/safenote/create',
  validateSchema(safeNotesSchema),
  createSafeNote
);
safeNotesRouter.get('/safenote', getSafeNotes);
safeNotesRouter.get('/safenote/:id', getSafeNotes);

export default safeNotesRouter;

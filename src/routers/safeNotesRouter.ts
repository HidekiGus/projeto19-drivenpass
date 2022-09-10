import { Router } from 'express';
import { validateSchema } from '../middlewares/validateSchema.js';
import { safeNotesSchema } from '../schemas/safeNoteSchema.js';
import { createSafeNote } from '../controllers/safeNotesController.js';

const safeNotesRouter = Router();

safeNotesRouter.post(
  '/safenote/create',
  validateSchema(safeNotesSchema),
  createSafeNote
);

export default safeNotesRouter;

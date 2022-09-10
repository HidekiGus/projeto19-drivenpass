import { Router } from 'express';
import userRouter from './usersRouter.js';
import credentialRouter from './credentialRouter.js';
import safeNotesRouter from './safeNotesRouter.js';

const router = Router();

router.use(userRouter);
router.use(credentialRouter);
router.use(safeNotesRouter);

export default router;

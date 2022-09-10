import { Router } from 'express';
import userRouter from './usersRouter.js';
import credentialRouter from './credentialRouter.js';
import safeNotesRouter from './safeNotesRouter.js';
import cardRouter from './cardsRouter.js';
import wifiRouter from './wifiRouter.js';

const router = Router();

router.use(userRouter);
router.use(credentialRouter);
router.use(safeNotesRouter);
router.use(cardRouter);
router.use(wifiRouter);

export default router;

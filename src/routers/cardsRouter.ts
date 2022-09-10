import { Router } from 'express';
import { createCard } from '../controllers/cardsController.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { cardSchema } from '../schemas/cardSchema.js';

const cardRouter = Router();

cardRouter.post('/card/create', validateSchema(cardSchema), createCard);

export default cardRouter;

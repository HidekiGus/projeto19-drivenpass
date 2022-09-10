import { Router } from 'express';
import { createCard, getCards } from '../controllers/cardsController.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { cardSchema } from '../schemas/cardSchema.js';

const cardRouter = Router();

cardRouter.post('/card/create', validateSchema(cardSchema), createCard);
cardRouter.get('/card', getCards);
cardRouter.get('/card/:id', getCards);

export default cardRouter;

import { Router } from 'express';
import { validateSchema } from '../middlewares/validateSchema.js';
import { wifiSchema } from '../schemas/wifiSchema.js';
import { createWifi } from '../controllers/wifiController.js';

const wifiRouter = Router();

wifiRouter.post('/wifi/create', validateSchema(wifiSchema), createWifi);

export default wifiRouter;

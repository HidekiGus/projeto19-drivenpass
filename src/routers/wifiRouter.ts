import { Router } from 'express';
import { validateSchema } from '../middlewares/validateSchema.js';
import { wifiSchema } from '../schemas/wifiSchema.js';
import { createWifi, getWifis } from '../controllers/wifiController.js';

const wifiRouter = Router();

wifiRouter.post('/wifi/create', validateSchema(wifiSchema), createWifi);
wifiRouter.get('/wifi', getWifis);
wifiRouter.get('/wifi/:id', getWifis);

export default wifiRouter;

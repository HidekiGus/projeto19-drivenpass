import { Router } from 'express';
import { createCredential } from '../controllers/credentialsController.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { credentialSchema } from '../schemas/credentialSchema.js';

const credentialRouter = Router();

credentialRouter.post(
  '/credential/create',
  validateSchema(credentialSchema),
  createCredential
);

export default credentialRouter;

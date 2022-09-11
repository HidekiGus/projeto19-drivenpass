import { Router } from 'express';
import {
  createCredential,
  deleteCredential,
  getCredentials,
} from '../controllers/credentialsController.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { credentialSchema } from '../schemas/credentialSchema.js';

const credentialRouter = Router();

credentialRouter.post(
  '/credential/create',
  validateSchema(credentialSchema),
  createCredential
);
credentialRouter.get('/credential', getCredentials);
credentialRouter.get('/credential/:id', getCredentials);
credentialRouter.delete('/credential/:id', deleteCredential);

export default credentialRouter;

import { Router } from 'express';
import {
  createCredential,
  jwtTest,
} from '../controllers/credentialsController.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { credentialSchema } from '../schemas/credentialSchema.js';

const credentialRouter = Router();

credentialRouter.post(
  '/credential/create',
  validateSchema(credentialSchema),
  createCredential
);

credentialRouter.get('/credential', jwtTest);

export default credentialRouter;

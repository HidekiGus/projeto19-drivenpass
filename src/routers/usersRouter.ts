import { Router } from 'express';
import { createUser } from '../controllers/usersController.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { userSchema } from '../schemas/userSchema.js';

const userRouter = Router();

userRouter.post('/user/create', validateSchema(userSchema), createUser);

export default userRouter;

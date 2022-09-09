import { Router } from 'express';
import { createUser, logIn } from '../controllers/usersController.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { userSchema } from '../schemas/userSchema.js';

const userRouter = Router();

userRouter.post('/user/create', validateSchema(userSchema), createUser);
userRouter.post('/signin', validateSchema(userSchema), logIn);

export default userRouter;

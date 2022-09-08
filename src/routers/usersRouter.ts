import { Router } from "express";
import { usersController } from "../controllers/usersController.js";

const userRouter = Router();

userRouter.get("/user", usersController);

export default userRouter;
import { Router } from "express";
import { createUser } from "../controllers/usersController.js";

const userRouter = Router();

userRouter.post("/user/create", createUser);

export default userRouter;
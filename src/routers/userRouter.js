import express from "express";
import logger from "morgan";

import { logout, edit, remove, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/logout", logout);
userRouter.get("/remove", remove);
userRouter.get("/:id", see);

export default userRouter;

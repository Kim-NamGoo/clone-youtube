import express from "express";
import logger from "morgan";
import {
  upload,
  watchVideo,
  edit,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", watchVideo);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/:id(\\d+)/edit", edit);

export default videoRouter;

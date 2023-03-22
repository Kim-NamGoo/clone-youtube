//Express
import express from "express";
import logger from "morgan";

//Router File
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const app = express();

//view 엔진 설정
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

//Router를 app에 적용
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

app.listen(4000, () => console.log("Listening server http://localhost:4000"));

function handler(req, res) {
  console.log(req.url);
  return res.end();
}

function handleEditVideo(req, res, next) {
  res.send("Edit your Video!");
}

videoRouter.get("/edit", handleEditVideo);

app.use(logger("dev"));
app.get("/", handler);

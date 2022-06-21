import express from "express";
import morgan from "morgan";
const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.use(logger);

const globalRouter = express.Router();

globalRouter.get("/", handleHome);

const handleHome = (req, res) => res.send("Home");

const userRouter = express.Router();

userRouter.get("/edit", handleEdituser);

const handleEdituser = (req, res) => res.send("Edit Users");

const videoRouter = express.Router();
videoRouter.get("/video", handleWatchVideo);

const handleWatchVideo = (req, res) => res.send("Watch Video");

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);

import { json } from "body-parser";
import express from "express";
import cors from "cors";

import { loggerMiddleware } from "./middlewares/logger.middleware";
import { errorHandler } from "./errors/errorHandler";

import pictureRoutes from "./pictures";

const createApp = () => {
  const app = express();

  app.use(json());
  app.use(cors());
  app.use(loggerMiddleware);

  app.use("/pictures", pictureRoutes());

  app.use(errorHandler);

  return app;
};

export default createApp;

import { Router } from "express";

import { fetchPictures } from "./pictures.controller";

export default () => {
  const router = Router();

  router.get("/", fetchPictures);

  return router;
};

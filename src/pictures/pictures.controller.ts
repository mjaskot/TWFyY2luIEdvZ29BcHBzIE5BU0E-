import { Request, Response, NextFunction } from "express";
import rateLimiter from "axios-rate-limit";
import axios from "axios";

import { NASAPicturesProvider } from "./providers/NASAPictureProvider";
import { PictureService } from "./pictures.service";
import { validateDates } from "./_helpers/validateDates";
import { Envs, getEnv } from "../core/env";

const httpClient = rateLimiter(axios.create(), {
  maxRPS: parseInt(getEnv(Envs.CONCURRENT_REQUESTS)),
});

const nasaPicturesProvider = new NASAPicturesProvider(httpClient);
const pictureService = new PictureService(nasaPicturesProvider);

export async function fetchPictures(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { from, to } = req.query;
    validateDates(from as string, to as string);

    const fromDate = new Date(from as string);
    const toDate = new Date(to as string);

    const result = await pictureService.fetchPictures(fromDate, toDate);

    return res.status(200).json({ urls: result });
  } catch (err: any) {
    next(err);
  }
}

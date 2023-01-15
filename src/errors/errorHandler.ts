import { Request, Response, NextFunction } from "express";
import chalk from "chalk";

import StatusError from "./statusError";
import { logger } from "../core/logger";

export const errorHandler = (
  err: StatusError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.error(`${req.method} ${req.url} - ${chalk.red(err.status || 500)}`);
  logger.error(err.stack ?? "");
  logger.details(
    "Message:",
    (err.payload && err.payload.logMessage) || err.message || err
  );

  if (Object.keys(req.params).length) {
    logger.details("Params", req.params);
  }

  if (Object.keys(req.query).length) {
    logger.details("Query", req.query);
  }

  if (Object.keys(req.body).length) {
    logger.details("Request body:", req.body);
  }

  if (err.payload && err.payload.data) {
    logger.details("Error Data:", err.payload.data);
  }

  if (err.payload && err.payload.originalError) {
    logger.details("Error:", err.payload.originalError);
  }

  console.log("");

  return res.status(err.status || 500).json({
    message: err instanceof StatusError ? err.message : "INTERNAL_ERROR",
    data: err.payload && err.payload.responseData,
  });
};

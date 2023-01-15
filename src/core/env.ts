import { logger } from "./logger";

export enum Envs {
  PORT = "PORT",
  STAGE = "STAGE",
  API_KEY = "API_KEY",
  API_HOST = "API_HOST",
  API_ENDPOINT = "API_ENDPOINT",
  CONCURRENT_REQUESTS = "CONCURRENT_REQUESTS",
}

import StatusError from "../errors/statusError";

export const getEnv = (env: Envs): string => {
  if (!process.env[env]) {
    const logMessage = `Missing env variable: ${env}`;
    logger.error(logMessage);
    throw new StatusError(500, "INTERNAL_ERROR", { logMessage });
  }

  return process.env[env] as string;
};

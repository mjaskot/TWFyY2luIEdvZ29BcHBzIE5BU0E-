require("dotenv").config();

import createApp from "./app";
import { logger } from "./core/logger";
import { getEnv, Envs } from "./core/env";

const port = getEnv(Envs.PORT);

const bootstrap = async () => {
  const app = createApp();
  try {
    app.listen(port, () =>
      logger.info(`Server is listening on port -> ${port}`)
    );
  } catch (err: any) {
    logger.error(err);
    process.exit(1);
  }
};

bootstrap();

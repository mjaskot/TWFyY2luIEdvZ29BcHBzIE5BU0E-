import chalk from "chalk";

const getTimestamp = () => {
  const date = new Date(Date.now());

  return date.toISOString();
};

const createLogger = () => {
  return {
    info(msg: string) {
      console.log(
        `${chalk.yellowBright(`[${getTimestamp()}]`)}${chalk.blueBright(
          "[INFO]"
        )} ${msg}`
      );
    },

    sucess(msg: string) {
      console.log(
        `${chalk.yellowBright(`[${getTimestamp()}]`)}${chalk.green(
          "[SUCCESS]"
        )} ${msg}`
      );
    },

    warn(msg: string) {
      console.log(
        `${chalk.yellowBright(`[${getTimestamp()}]`)}${chalk.yellow(
          "[WARNING]"
        )} ${msg}`
      );
    },

    error(msg: string) {
      console.log("");
      console.log(
        `${chalk.yellowBright(`[${getTimestamp()}]`)}${chalk.red(
          "[ERROR]"
        )} ${msg}`
      );
    },

    details(msg = "", data: any = "") {
      console.log(`${chalk.gray("\t↳")} ${msg}`, data);
    },
  };
};

export const logger = createLogger();

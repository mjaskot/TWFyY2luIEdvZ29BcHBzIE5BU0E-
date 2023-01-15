import { Request, Response, NextFunction } from "express";
import chalk from "chalk";

function wrapMethodInColor(method: string) {
  switch (method) {
    case "POST":
      return chalk.yellowBright(method);
    case "GET":
      return chalk.greenBright(method);
    case "PUT":
      return chalk.blueBright(method);
    case "DELETE":
      return chalk.redBright(method);
    case "PATCH":
      return chalk.gray(method);
  }
}

export const loggerMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  console.log(
    `[${chalk.bold(wrapMethodInColor(req.method))}] ${req.url} - ${chalk.gray(
      req.ip.slice(7, 17)
    )}`
  );

  if (Object.keys(req.body).length !== 0) {
    console.log(`${chalk.gray("\t↳")} Req Body: ${JSON.stringify(req.body)}`);
  }

  if (Object.keys(req.params).length !== 0) {
    console.log(
      `${chalk.gray("\t↳")} Req Params ${JSON.stringify(req.params, null)}`
    );
  }

  if (Object.keys(req.query).length !== 0) {
    console.log(
      `${chalk.gray("\t↳")} Req Query ${JSON.stringify(req.params, null)}`
    );
  }

  next();
};

import { NextFunction, Request, Response } from "express";

async function handleError(
  error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.type) {
    return res.status(error.code).send(error.message);
  }

  return res.sendStatus(500);
}

export default handleError;

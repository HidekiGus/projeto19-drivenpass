import { Request, Response, NextFunction } from "express";

export default function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
  //res.status(500).send({ message: error.message });

  if (error.type === "alreadyUsed") {
    res.status(422).send(error.message);
  }
  res.sendStatus(500);
}
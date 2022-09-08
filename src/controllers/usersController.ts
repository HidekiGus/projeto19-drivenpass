import { Request, Response } from "express";

export async function usersController(req: Request, res: Response) {
  res.status(201).send("Você está na rota getUsersController")
  
}
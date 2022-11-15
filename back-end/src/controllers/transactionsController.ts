import { Request, Response } from "express";

import transactionsService from "../services/transactionsService.js";

async function getAllTransactions(req: Request, res: Response) {
  const transactions = await transactionsService.findAllTransactions();
  return res.status(200).send(transactions);
}

async function insertTransactionsFile(req: Request, res: Response) {
  const fileName = req.file.filename;
  await transactionsService.insertTransactions(fileName);
  return res.sendStatus(201);
}

const transactionsController = {
  getAllTransactions,
  insertTransactionsFile,
};

export default transactionsController;

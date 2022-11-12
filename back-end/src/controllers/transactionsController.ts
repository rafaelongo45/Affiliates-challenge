import { Request, Response } from "express";

import transactionsService from "../services/transactionsService.js";

async function getAllTransactions(req: Request, res: Response) {
  try {
    const transactions = await transactionsService.findAllTransactions();
    return res.status(200).send(transactions);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
}

async function insertTransactionsFile(req: Request, res: Response) {
  try {
    await transactionsService.insertTransactions();
    return res.sendStatus(200);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
}

const transactionsController = {
  getAllTransactions,
  insertTransactionsFile,
};

export default transactionsController;

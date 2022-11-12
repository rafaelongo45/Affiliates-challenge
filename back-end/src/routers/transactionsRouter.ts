import { Router } from "express";

import fileManager from "../middlewares/fileManager.js";
import transactionsController from "../controllers/transactionsController.js";

const transactionsRouter = Router();

transactionsRouter.get(
  "/transactions",
  transactionsController.getAllTransactions
);

transactionsRouter.post(
  "/transactions",
  fileManager(),
  transactionsController.insertTransactionsFile
);

export default transactionsRouter;

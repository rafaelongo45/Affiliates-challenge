import readFile from "../utils/readFile.js";
import transactionsRepository from "../repositories/transactionsRepository.js";
import { Transactions } from "@prisma/client";

async function findAllTransactions() {
  const transactions = await transactionsRepository.findAll();
  return transactions;
}

async function insertTransactions(fileName: string) {
  const fileData = await readFile(fileName);
  for (let i = 0; i < fileData.length; i++) {
    const transaction = fileData[i];

    const dbTransaction = await transactionsRepository.findOne(transaction);
    checkIfExists(dbTransaction);
    await transactionsRepository.insertOne(transaction);
  }
}

function checkIfExists(dbTransaction: Transactions) {
  if (dbTransaction) {
    throw {
      type: "conflictError",
      message: "At least one transaction already exists in the database",
      code: 409,
    };
  }
}

const transactionsService = {
  findAllTransactions,
  insertTransactions,
};

export default transactionsService;

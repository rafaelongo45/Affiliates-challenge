import { Transactions } from "@prisma/client";

import readFile from "../utils/readFile.js";
import sellersRepository from "../repositories/sellersRepository.js";
import transactionsRepository from "../repositories/transactionsRepository.js";

async function findAllTransactions() {
  const transactions = await sellersRepository.findAll();
  return transactions;
}

async function insertTransactions(fileName: string) {
  const fileData = await readFile.fileReader(fileName);
  for (let i = 0; i < fileData.length; i++) {
    const transaction = fileData[i];

    const dbTransaction = await transactionsRepository.findOne(transaction);
    checkIfExists(dbTransaction);
    const seller = await sellersRepository.findOne(transaction.seller);

    if (seller) {
      await transactionsRepository.insertOne(transaction, seller.id);
    } else {
      const newSeller = await sellersRepository.insertOne(transaction.seller);
      await transactionsRepository.insertOne(transaction, newSeller.id);
    }
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

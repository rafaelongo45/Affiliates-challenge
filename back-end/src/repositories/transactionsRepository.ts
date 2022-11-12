import { Transactions } from "@prisma/client";

import prisma from "../config/db.js";

async function insertOne(transaction: Transactions) {
  await prisma.transactions.create({
    data: transaction,
  });
}

async function findAll() {
  const transactions = await prisma.transactions.findMany();
  return transactions;
}

const transactionsRepository = {
  insertOne,
  findAll,
};

export default transactionsRepository;

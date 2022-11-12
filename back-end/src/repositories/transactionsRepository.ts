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

async function findOne(transaction: Transactions) {
  const dbTransaction = await prisma.transactions.findFirst({
    where: {
      type: transaction.type,
      date: transaction.date,
      seller: transaction.seller,
    },
  });
  return dbTransaction;
}

const transactionsRepository = {
  insertOne,
  findAll,
  findOne,
};

export default transactionsRepository;

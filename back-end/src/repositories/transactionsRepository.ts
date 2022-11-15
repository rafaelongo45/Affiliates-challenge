import prisma from "../config/db.js";
import { TransactionsFile } from "../utils/readFile.js";

async function insertOne(transaction: TransactionsFile, sellerId: number) {
  await prisma.transactions.create({
    data: {
      type: transaction.type,
      value: transaction.value,
      date: transaction.date,
      product: transaction.product,
      sellerId,
    },
  });
}

async function findOne(transaction: TransactionsFile) {
  const dbTransaction = await prisma.transactions.findFirst({
    where: {
      type: transaction.type,
      date: transaction.date,
    },
  });
  return dbTransaction;
}

const transactionsRepository = {
  insertOne,
  findOne,
};

export default transactionsRepository;

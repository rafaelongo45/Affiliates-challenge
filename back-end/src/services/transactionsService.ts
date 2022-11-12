import readFile from "../utils/readFile.js";
import transactionsRepository from "../repositories/transactionsRepository.js";

async function findAllTransactions() {
  const transactions = await transactionsRepository.findAll();
  return transactions;
}

async function insertTransactions() {
  const fileData = await readFile();
  fileData.forEach(async (transaction) => {
    await transactionsRepository.insertOne(transaction);
  });
}

const transactionsService = {
  findAllTransactions,
  insertTransactions,
};

export default transactionsService;

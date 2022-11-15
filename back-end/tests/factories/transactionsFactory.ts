import transactionsRepository from "../../src/repositories/transactionsRepository";

async function insertOneTransaction() {
  const data = {
    id: 1,
    type: 1,
    date: new Date(),
    product: "Desenvolvimento web fullstack",
    value: 53434300,
    seller: "Jonas da Silva",
  };

  await transactionsRepository.insertOne(data);
  return data;
}

async function insertTwoTransactions() {
  const data = [
    {
      id: 1,
      type: 1,
      date: new Date(),
      product: "Desenvolvimento web fullstack",
      value: 53434300,
      seller: "Jonas da Silva",
    },
    {
      id: 2,
      type: 2,
      date: new Date(),
      product: "Desenvolvimento web",
      value: 534343300,
      seller: "Jonas Silveira",
    },
  ];

  await transactionsRepository.insertOne(data[0]);
  await transactionsRepository.insertOne(data[1]);
  return data;
}

const transactionsFactory = {
  insertOneTransaction,
  insertTwoTransactions,
};

export default transactionsFactory;

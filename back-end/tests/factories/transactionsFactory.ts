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

  const seller = {
    id: 1,
    seller: "Jonas da Silva",
  };

  await transactionsRepository.insertOne(data, seller.id);
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

  const sellers = [
    {
      id: 1,
      seller: "Jonas da Silva",
    },
    {
      id: 2,
      seller: "Jonas Silveira",
    },
  ];
  const transaction = await transactionsRepository.findOne(data[0]);
  if (!transaction) {
    await transactionsRepository.insertOne(data[0], sellers[0].id);
    await transactionsRepository.insertOne(data[1], sellers[1].id);
  }
  return data;
}

const transactionsFactory = {
  insertOneTransaction,
  insertTwoTransactions,
};

export default transactionsFactory;

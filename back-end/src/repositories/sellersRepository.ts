import prisma from "../config/db.js";

async function insertOne(seller: string) {
  const sellerDb = await prisma.sellers.create({
    data: {
      seller,
    },
  });

  return sellerDb;
}

async function findOne(seller: string) {
  const sellerDb = await prisma.sellers.findFirst({
    where: {
      seller,
    },
  });

  return sellerDb;
}

async function findAll() {
  const sellers = await prisma.sellers.findMany({
    select: {
      seller: true,
      Transactions: true,
    },
  });

  return sellers;
}

const sellersRepository = {
  insertOne,
  findOne,
  findAll,
};

export default sellersRepository;

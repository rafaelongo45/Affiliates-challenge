import { jest } from "@jest/globals";
import { Transactions } from "@prisma/client";

import prisma from "../../src/config/db.js";
import readFile from "../../src/utils/readFile.js";
import transactionsService from "../../src/services/transactionsService.js";
import transactionsRepository from "../../src/repositories/transactionsRepository.js";
import sellersRepository from "../../src/repositories/sellersRepository.js";

beforeEach(async () => {
  await prisma.transactions.deleteMany();
});

interface SellerWithTransaction {
  seller: string;
  Transaction: Transactions;
}

describe("Transactions unit test suite", () => {
  const transactions: Transactions[] = [
    {
      id: 1,
      type: 1,
      date: new Date(),
      product: "Desenvolvimento web fullstack",
      value: 53434300,
      sellerId: 1,
    },
    {
      id: 2,
      type: 2,
      date: new Date(),
      product: "Killer Queen",
      value: 53434300,
      sellerId: 2,
    },
  ];
  it("Gets transactions from database", async () => {
    const transaction: SellerWithTransaction = {
      seller: "Kira Yoshikage",
      Transaction: {
        id: 1,
        type: 1,
        date: new Date(),
        product: "Desenvolvimento web fullstack",
        value: 53434300,
        sellerId: 1,
      },
    };
    jest.spyOn(sellersRepository, "findAll").mockImplementationOnce((): any => {
      return transaction;
    });

    const promise = await transactionsService.findAllTransactions();
    expect(promise).not.toBeNull();
  });

  it("Inserts transaction successfully", async () => {
    jest.spyOn(readFile, "fileReader").mockImplementationOnce((): any => {
      return transactions;
    });

    jest
      .spyOn(transactionsRepository, "insertOne")
      .mockImplementationOnce((): any => {});

    await transactionsService.insertTransactions("test.txt");

    expect(transactionsRepository.insertOne).toHaveBeenCalledTimes(2);
  });

  it("Fails to insert transaction", async () => {
    jest.spyOn(readFile, "fileReader").mockImplementationOnce((): any => {
      return transactions;
    });

    jest
      .spyOn(transactionsRepository, "findOne")
      .mockImplementationOnce((): any => {
        return transactions[0];
      });

    const transactionError = transactionsService.insertTransactions("test.txt");
    expect(transactionError).rejects.toEqual({
      type: "conflictError",
      message: "At least one transaction already exists in the database",
      code: 409,
    });
  });

  it("Inserts new transaction with new seller", async () => {
    const transactionFile = [
      {
        type: 1,
        date: new Date(),
        product: "Desenvolvimento web fullstack",
        value: 53434300,
        seller: "Kira Yoshikage",
      },
    ];
    jest.spyOn(readFile, "fileReader").mockImplementationOnce((): any => {
      return transactionFile;
    });

    jest
      .spyOn(sellersRepository, "insertOne")
      .mockImplementationOnce((): any => {
        return {
          id: 1,
          seller: transactionFile[0].seller,
        };
      });

    jest
      .spyOn(sellersRepository, "findOne")
      .mockImplementationOnce((): any => {});

    await transactionsService.insertTransactions("test.txt");

    expect(sellersRepository.insertOne).toHaveBeenCalledTimes(1);
  });
});

import { jest } from "@jest/globals";
import { Transactions } from "@prisma/client";

import prisma from "../../src/config/db.js";
import readFile from "../../src/utils/readFile.js";
import transactionsService from "../../src/services/transactionsService.js";
import transactionsRepository from "../../src/repositories/transactionsRepository.js";

beforeEach(async () => {
  await prisma.transactions.deleteMany();
});

describe("Transactions unit test suite", () => {
  const transactions: Transactions[] = [
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
      product: "Killer Queen",
      value: 53434300,
      seller: "Kira Yoshikage",
    },
  ];
  it("Gets transactions from database", async () => {
    const transaction: Transactions = {
      id: 1,
      type: 1,
      date: new Date(),
      product: "Desenvolvimento web fullstack",
      value: 53434300,
      seller: "Jonas da Silva",
    };
    jest
      .spyOn(transactionsRepository, "findAll")
      .mockImplementationOnce((): any => {
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

});

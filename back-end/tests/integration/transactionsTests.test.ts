import supertest from "supertest";

import app from "../../src/app.js";
import prisma from "../../src/config/db.js";
import transactionsFactory from "../factories/transactionsFactory.js";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE "Transactions";`;
});

describe("Transactions tests suite", () => {
  it("Should return all transactions", async () => {
    await transactionsFactory.insertTwoTransactions();
    const promise = await supertest(app).get("/transactions");
    expect(promise.statusCode).toBe(200);
  });

  it("Should insert transactions from file", async () => {
    const promise = await supertest(app)
      .post("/transactions")
      .attach("file", "tests/integration/correctFile.txt");
    expect(promise.statusCode).toBe(201);
  });

  it("Fails to insert transactions from file with wrong value format", async () => {
    const promise = await supertest(app)
      .post("/transactions")
      .attach("file", "tests/integration/badFileValue.txt");
    expect(promise.statusCode).toBe(400);
  });

  it("Fails to insert transactions from file with wrong date format", async () => {
    const promise = await supertest(app)
      .post("/transactions")
      .attach("file", "tests/integration/badFileDate.txt");
    expect(promise.statusCode).toBe(400);
  });

  it("Fails to insert transactions from file with wrong type format", async () => {
    const promise = await supertest(app)
      .post("/transactions")
      .attach("file", "tests/integration/badFileType.txt");
    expect(promise.statusCode).toBe(400);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

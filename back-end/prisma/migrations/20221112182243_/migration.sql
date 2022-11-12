/*
  Warnings:

  - A unique constraint covering the columns `[type,date,seller]` on the table `Transactions` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Transactions_date_seller_key";

-- CreateIndex
CREATE UNIQUE INDEX "Transactions_type_date_seller_key" ON "Transactions"("type", "date", "seller");

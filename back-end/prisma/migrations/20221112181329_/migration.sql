/*
  Warnings:

  - A unique constraint covering the columns `[date,seller]` on the table `Transactions` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Transactions_date_seller_product_key";

-- CreateIndex
CREATE UNIQUE INDEX "Transactions_date_seller_key" ON "Transactions"("date", "seller");

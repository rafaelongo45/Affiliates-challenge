/*
  Warnings:

  - A unique constraint covering the columns `[date,seller,product]` on the table `Transactions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Transactions_date_seller_product_key" ON "Transactions"("date", "seller", "product");

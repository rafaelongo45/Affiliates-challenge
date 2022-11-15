/*
  Warnings:

  - You are about to drop the column `seller` on the `Transactions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[type,date]` on the table `Transactions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sellerId` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Transactions_type_date_seller_key";

-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "seller",
ADD COLUMN     "sellerId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Sellers" (
    "id" SERIAL NOT NULL,
    "seller" TEXT NOT NULL,

    CONSTRAINT "Sellers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transactions_type_date_key" ON "Transactions"("type", "date");

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Sellers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

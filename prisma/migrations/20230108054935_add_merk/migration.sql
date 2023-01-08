/*
  Warnings:

  - Added the required column `merkBarang` to the `DataBarang` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DataBarang" ADD COLUMN     "merkBarang" TEXT NOT NULL;

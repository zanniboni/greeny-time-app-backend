/*
  Warnings:

  - Added the required column `color` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "category" ADD COLUMN     "color" VARCHAR NOT NULL,
ADD COLUMN     "icon" VARCHAR NOT NULL;

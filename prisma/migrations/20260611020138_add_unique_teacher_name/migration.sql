/*
  Warnings:

  - A unique constraint covering the columns `[id,name]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `teacher_name` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Made the column `teacher_id` on table `Reservation` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reservation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "device_id" INTEGER NOT NULL,
    "device_name" TEXT NOT NULL,
    "reservation_quantity" INTEGER NOT NULL,
    "refunded" BOOLEAN NOT NULL DEFAULT false,
    "refundedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    "teacher_name" TEXT NOT NULL,
    CONSTRAINT "Reservation_device_id_device_name_fkey" FOREIGN KEY ("device_id", "device_name") REFERENCES "Device" ("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reservation_teacher_id_teacher_name_fkey" FOREIGN KEY ("teacher_id", "teacher_name") REFERENCES "Teacher" ("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reservation" ("createdAt", "device_id", "device_name", "id", "refunded", "refundedAt", "reservation_quantity", "teacher_id", "updatedAt") SELECT "createdAt", "device_id", "device_name", "id", "refunded", "refundedAt", "reservation_quantity", "teacher_id", "updatedAt" FROM "Reservation";
DROP TABLE "Reservation";
ALTER TABLE "new_Reservation" RENAME TO "Reservation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_id_name_key" ON "Teacher"("id", "name");

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
    "teacher_id" INTEGER,
    CONSTRAINT "Reservation_device_id_device_name_fkey" FOREIGN KEY ("device_id", "device_name") REFERENCES "Device" ("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reservation_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Reservation" ("createdAt", "device_id", "device_name", "id", "refunded", "refundedAt", "reservation_quantity", "teacher_id", "updatedAt") SELECT "createdAt", "device_id", "device_name", "id", "refunded", "refundedAt", "reservation_quantity", "teacher_id", "updatedAt" FROM "Reservation";
DROP TABLE "Reservation";
ALTER TABLE "new_Reservation" RENAME TO "Reservation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

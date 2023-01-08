-- CreateTable
CREATE TABLE "DataBarang" (
    "id" TEXT NOT NULL,
    "slugBarang" TEXT NOT NULL,
    "namaBarang" TEXT NOT NULL,
    "hargaBarang" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "JenisBarang" (
    "id" TEXT NOT NULL,
    "slugJenis" TEXT NOT NULL,
    "namaJenis" TEXT NOT NULL,
    "barangId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DataBarang_id_key" ON "DataBarang"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DataBarang_slugBarang_key" ON "DataBarang"("slugBarang");

-- CreateIndex
CREATE UNIQUE INDEX "JenisBarang_id_key" ON "JenisBarang"("id");

-- CreateIndex
CREATE UNIQUE INDEX "JenisBarang_slugJenis_key" ON "JenisBarang"("slugJenis");

-- AddForeignKey
ALTER TABLE "JenisBarang" ADD CONSTRAINT "JenisBarang_barangId_fkey" FOREIGN KEY ("barangId") REFERENCES "DataBarang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

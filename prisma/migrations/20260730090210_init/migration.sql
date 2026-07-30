Loaded Prisma config from prisma.config.ts.

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "Partner" (
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "notiz" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "Klick" (
    "id" SERIAL NOT NULL,
    "partner_slug" TEXT,
    "pfad" TEXT NOT NULL,
    "referrer" TEXT,
    "user_agent" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Klick_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lead" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefon" TEXT,
    "nachricht" TEXT,
    "partner_slug" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Klick" ADD CONSTRAINT "Klick_partner_slug_fkey" FOREIGN KEY ("partner_slug") REFERENCES "Partner"("slug") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_partner_slug_fkey" FOREIGN KEY ("partner_slug") REFERENCES "Partner"("slug") ON DELETE SET NULL ON UPDATE CASCADE;


-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "event_type" TEXT,
    "start_time" TIMESTAMP(3),
    "partner_slug" TEXT,
    "trigger_event" TEXT,
    "raw_payload" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_partner_slug_fkey" FOREIGN KEY ("partner_slug") REFERENCES "Partner"("slug") ON DELETE SET NULL ON UPDATE CASCADE;

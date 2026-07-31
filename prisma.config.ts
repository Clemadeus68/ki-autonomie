import "dotenv/config";
import { defineConfig } from "prisma/config";

// Migrationen (prisma migrate ...) laufen über die direkte, ungepoolte
// Verbindung (empfohlen für DDL/Migrationen). Die Laufzeit-App nutzt davon
// unabhängig weiterhin die gepoolte DATABASE_URL, siehe lib/prisma.ts.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DIRECT_DATABASE_URL"],
  },
});

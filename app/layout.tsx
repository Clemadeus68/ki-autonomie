import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KI-Souveränität | be nice Managementberatung",
  description:
    "KI-Einführung, die Ihrem Unternehmen gehört, nicht dem Anbieter. Strategische Beratung für den Mittelstand von Clemens Gutmann, be nice Managementberatung.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

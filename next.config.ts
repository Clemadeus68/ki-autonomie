import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Alte Subdomain (ki-autonomie) leitet dauerhaft auf die neue (lotseundmacher)
  // um. Next.js hängt nicht genutzte Query-Parameter automatisch an die
  // Ziel-URL an, d.h. Partner-Links mit ?ref=... funktionieren nach der
  // Umleitung unverändert weiter.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ki-autonomie.nice-network.de" }],
        destination: "https://lotseundmacher.nice-network.de/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

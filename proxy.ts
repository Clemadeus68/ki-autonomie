import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASSWORD;

  if (!user || !pass) {
    return new NextResponse("Admin-Zugang ist nicht konfiguriert (ADMIN_USER/ADMIN_PASSWORD fehlen).", {
      status: 500,
    });
  }

  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = Buffer.from(encoded, "base64").toString("utf-8");
      const sep = decoded.indexOf(":");
      const u = decoded.slice(0, sep);
      const p = decoded.slice(sep + 1);
      if (u === user && p === pass) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Zugang erforderlich.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin", charset="UTF-8"' },
  });
}

export const config = {
  matcher: "/admin/:path*",
};

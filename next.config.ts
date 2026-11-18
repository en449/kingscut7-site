import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // The Planity widget on /termin ships relative links like "/de-DE/privacy-policy" that only
  // exist on planity.com; on this domain they 404. The site has no /de-DE routes of its own.
  async redirects() {
    return [
      { source: "/de-DE/:path*", destination: "https://www.planity.com/de-DE/:path*", permanent: false },
    ];
  },
};

export default nextConfig;

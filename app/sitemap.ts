import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kingscut7.de"

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // /termin is noindex until the Planity key is set — keep it out of the sitemap until then.
    ...(process.env.NEXT_PUBLIC_PLANITY_KEY
      ? [{ url: `${base}/termin`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 }]
      : []),
    {
      url: `${base}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}

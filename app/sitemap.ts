import type { MetadataRoute } from "next";

const baseUrl = "https://portfolio-theta-sage-12.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/hr`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "hr-HR": `${baseUrl}/hr`,
          en: `${baseUrl}/en`,
          de: `${baseUrl}/de`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "hr-HR": `${baseUrl}/hr`,
          en: `${baseUrl}/en`,
          de: `${baseUrl}/de`,
        },
      },
    },
    {
      url: `${baseUrl}/de`,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "hr-HR": `${baseUrl}/hr`,
          en: `${baseUrl}/en`,
          de: `${baseUrl}/de`,
        },
      },
    },
    {
      url: `${baseUrl}/hr/privacy`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/en/privacy`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/de/privacy`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/hr/cookies`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/en/cookies`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/de/cookies`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
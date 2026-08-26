import type { Metadata } from "next";
import { notFound } from "next/navigation";

import HomePage from "../../components/HomePage";
import { hr } from "../../translations/hr";
import { en } from "../../translations/en";
import { de } from "../../translations/de";

const translations = { hr, en, de };

type Language = keyof typeof translations;

const baseUrl = "https://portfolio-theta-sage-12.vercel.app";

const seo = {
  hr: {
    title: "Izrada web stranica | Laura Web Studio",
    description:
      "Moderne, brze i responzivne web stranice za salone, ugostiteljstvo, turistički smještaj i mala poslovanja u Hrvatskoj.",
  },

  en: {
    title: "Web Design & Development | Laura Web Studio",
    description:
      "Modern, fast and responsive websites for salons, hospitality, accommodation and small businesses.",
  },

  de: {
    title: "Webdesign & Webentwicklung | Laura Web Studio",
    description:
      "Moderne, schnelle und responsive Websites für Salons, Gastronomie, Unterkünfte und kleine Unternehmen.",
  },
};

export function generateStaticParams() {
  return [{ lang: "hr" }, { lang: "en" }, { lang: "de" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!(lang in translations)) {
    return {};
  }

  const language = lang as Language;

  return {
    title: seo[language].title,

    description: seo[language].description,

    alternates: {
      canonical: `${baseUrl}/${language}`,

      languages: {
        "hr-HR": `${baseUrl}/hr`,
        "en": `${baseUrl}/en`,
        "de": `${baseUrl}/de`,
        "x-default": `${baseUrl}/hr`,
      },
    },

    openGraph: {
      title: seo[language].title,
      description: seo[language].description,
      url: `${baseUrl}/${language}`,
      siteName: "Laura Web Studio",
      type: "website",
      locale:
        language === "hr"
          ? "hr_HR"
          : language === "de"
            ? "de_DE"
            : "en_US",
    },
  };
}

export default async function LanguagePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!(lang in translations)) {
    notFound();
  }

  const language = lang as Language;

  return <HomePage t={translations[language]} lang={language} />;
}
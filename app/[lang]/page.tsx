import { notFound } from "next/navigation";

import HomePage from "../../components/HomePage";

import { hr } from "../../translations/hr";
import { en } from "../../translations/en";
import { de } from "../../translations/de";

const translations = {
  hr,
  en,
  de,
};

type Language = keyof typeof translations;

export function generateStaticParams() {
  return [
    { lang: "hr" },
    { lang: "en" },
    { lang: "de" },
  ];
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

  return (
    <HomePage
      t={translations[language]}
      lang={language}
    />
  );
}
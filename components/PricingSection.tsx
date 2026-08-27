type Language = "hr" | "en" | "de";

type Props = {
  lang: Language;
};

const content = {
  hr: {
    number: "03",
    label: "INVESTICIJA",
    title1: "Odaberite opseg koji",
    title2: "odgovara vašem poslu.",

    from: "OD",
    popular: "NAJČEŠĆI ODABIR",
    custom: "INDIVIDUALNA PONUDA",

    start: {
      name: "Start",
      price: "390 €",
      description:
        "Za manje poslovanje kojem treba profesionalna i moderna online prisutnost.",
      features: [
        "One-page web stranica",
        "Responzivan dizajn za mobitel, tablet i desktop",
        "Kontakt forma",
        "Osnovna SEO optimizacija",
        "Povezivanje društvenih mreža",
        "2 kruga izmjena",
      ],
    },

    business: {
      name: "Business",
      price: "690 €",
      description:
        "Za poslovanje kojem treba ozbiljnija web stranica s više sadržaja i prostora za rast.",
      features: [
        "Do 5 stranica",
        "Individualni dizajn",
        "Potpuno responzivna izvedba",
        "Kontakt forma i CTA elementi",
        "On-page SEO osnove",
        "Optimizacija brzine i slika",
        "2 kruga izmjena",
      ],
    },

    customPlan: {
      name: "Custom",
      price: "990 €+",
      description:
        "Za projekte kojima trebaju dodatne funkcionalnosti, integracije ili potpuno prilagođeno rješenje.",
      features: [
        "Individualno definirana struktura",
        "Višejezična stranica",
        "Naprednije forme i funkcionalnosti",
        "Integracije s vanjskim servisima",
        "Rezervacije ili posebni zahtjevi",
        "Mogućnost daljnjeg održavanja",
      ],
    },

    cta: "Pošalji upit",
    note:
      "Prikazane cijene su početne. Konačna ponuda ovisi o opsegu projekta i željenim funkcionalnostima. Domena, hosting i eventualne plaćene licence nisu uključeni osim ako se drugačije dogovori.",
  },

  en: {
    number: "03",
    label: "INVESTMENT",
    title1: "Choose the scope that",
    title2: "fits your business.",

    from: "FROM",
    popular: "MOST POPULAR",
    custom: "CUSTOM QUOTE",

    start: {
      name: "Start",
      price: "€390",
      description:
        "For small businesses that need a professional and modern online presence.",
      features: [
        "One-page website",
        "Responsive design for mobile, tablet and desktop",
        "Contact form",
        "Basic SEO setup",
        "Social media links",
        "2 revision rounds",
      ],
    },

    business: {
      name: "Business",
      price: "€690",
      description:
        "For businesses that need a more complete website with more content and room to grow.",
      features: [
        "Up to 5 pages",
        "Custom visual design",
        "Fully responsive development",
        "Contact form and CTA elements",
        "Basic on-page SEO",
        "Image and performance optimisation",
        "2 revision rounds",
      ],
    },

    customPlan: {
      name: "Custom",
      price: "€990+",
      description:
        "For projects that require additional functionality, integrations or a fully tailored solution.",
      features: [
        "Custom project structure",
        "Multilingual website",
        "Advanced forms and functionality",
        "Third-party integrations",
        "Booking or custom requirements",
        "Optional ongoing maintenance",
      ],
    },

    cta: "Send enquiry",
    note:
      "Prices shown are starting prices. The final quote depends on project scope and required functionality. Domain, hosting and paid third-party licences are not included unless agreed otherwise.",
  },

  de: {
    number: "03",
    label: "INVESTITION",
    title1: "Wählen Sie den Umfang,",
    title2: "der zu Ihrem Unternehmen passt.",

    from: "AB",
    popular: "BELIEBTESTE WAHL",
    custom: "INDIVIDUELLES ANGEBOT",

    start: {
      name: "Start",
      price: "390 €",
      description:
        "Für kleine Unternehmen, die einen professionellen und modernen Online-Auftritt benötigen.",
      features: [
        "One-Page-Website",
        "Responsive Design für Smartphone, Tablet und Desktop",
        "Kontaktformular",
        "Grundlegende SEO-Optimierung",
        "Verknüpfung mit sozialen Netzwerken",
        "2 Korrekturrunden",
      ],
    },

    business: {
      name: "Business",
      price: "690 €",
      description:
        "Für Unternehmen, die eine umfangreichere Website mit mehr Inhalten und Wachstumsmöglichkeiten benötigen.",
      features: [
        "Bis zu 5 Seiten",
        "Individuelles Webdesign",
        "Vollständig responsive Umsetzung",
        "Kontaktformular und CTA-Elemente",
        "Grundlegende On-Page-SEO",
        "Bild- und Performance-Optimierung",
        "2 Korrekturrunden",
      ],
    },

    customPlan: {
      name: "Custom",
      price: "990 €+",
      description:
        "Für Projekte mit zusätzlichen Funktionen, Integrationen oder vollständig individuellen Anforderungen.",
      features: [
        "Individuelle Projektstruktur",
        "Mehrsprachige Website",
        "Erweiterte Formulare und Funktionen",
        "Integration externer Dienste",
        "Buchungssysteme oder Sonderwünsche",
        "Optionale laufende Wartung",
      ],
    },

    cta: "Anfrage senden",
    note:
      "Die angegebenen Preise sind Startpreise. Das endgültige Angebot richtet sich nach Projektumfang und gewünschten Funktionen. Domain, Hosting und kostenpflichtige Lizenzen sind nicht enthalten, sofern nichts anderes vereinbart wurde.",
  },
};

export default function PricingSection({ lang }: Props) {
  const t = content[lang];

  const plans = [
    {
      ...t.start,
      tag: t.from,
      className: "pricingCard",
    },
    {
      ...t.business,
      tag: t.popular,
      className: "pricingCard pricingCardFeatured",
    },
    {
      ...t.customPlan,
      tag: t.custom,
      className: "pricingCard",
    },
  ];

  return (
    <section className="section pricingSection" id="pricing">
      <div className="sectionHeader pricingHeader">
        <div>
          <p className="sectionNumber">{t.number}</p>
          <p className="sectionLabel">{t.label}</p>
        </div>

        <h2>
          {t.title1}
          <br />
          <em>{t.title2}</em>
        </h2>
      </div>

      <div className="pricingGrid">
        {plans.map((plan) => (
          <article className={plan.className} key={plan.name}>
            <div className="pricingCardTop">
              <span className="pricingTag">{plan.tag}</span>
              <span className="pricingArrow">↗</span>
            </div>

            <div className="pricingMain">
              <p className="pricingName">{plan.name}</p>
              <p className="pricingPrice">{plan.price}</p>
              <p className="pricingDescription">{plan.description}</p>
            </div>

            <ul className="pricingFeatures">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a href="#contact" className="pricingCta">
              {t.cta}
              <span>↗</span>
            </a>
          </article>
        ))}
      </div>

      <p className="pricingNote">{t.note}</p>
    </section>
  );
}
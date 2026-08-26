import { notFound } from "next/navigation";
import Link from "next/link";

const content = {
  hr: {
    back: "← Natrag na početnu",
    label: "KOLAČIĆI",
    title: "Politika kolačića",
    updated: "Posljednje ažuriranje: kolovoz 2026.",

    intro:
      "Ova Politika kolačića objašnjava koristi li Laura Web Studio kolačiće i slične tehnologije na ovoj web stranici.",

    sections: [
      {
        title: "1. Što su kolačići?",
        text:
          "Kolačići su male tekstualne datoteke koje web stranice mogu pohraniti na vaš uređaj radi omogućavanja određenih funkcija, pamćenja postavki ili prikupljanja informacija o korištenju stranice.",
      },
      {
        title: "2. Koje kolačiće koristimo?",
        text:
          "Laura Web Studio trenutačno nema namjerno implementirane analitičke, marketinške ili oglašivačke kolačiće. Ne koristimo Google Analytics, Meta Pixel niti slične alate za praćenje posjetitelja.",
      },
      {
        title: "3. Nužne tehničke tehnologije",
        text:
          "Hosting i druga tehnička infrastruktura stranice mogu koristiti nužne tehnologije potrebne za sigurnost, isporuku sadržaja i osnovno funkcioniranje web stranice. Takve tehnologije nisu namijenjene praćenju korisnika u marketinške svrhe.",
      },
      {
        title: "4. Kontakt forma",
        text:
          "Kontakt forma koristi se isključivo za slanje podataka koje sami unesete kako bi Laura Web Studio mogla odgovoriti na vaš upit. Kontakt forma trenutačno nije povezana s analitičkim ili marketinškim sustavom praćenja.",
      },
      {
        title: "5. Privola za kolačiće",
        text:
          "Budući da trenutačno ne koristimo neobavezne analitičke ili marketinške kolačiće, na stranici nije prikazan banner za davanje privole za takve kolačiće.",
      },
      {
        title: "6. Buduće promjene",
        text:
          "Ako u budućnosti uvedemo analitičke, marketinške ili druge neobavezne tehnologije koje zahtijevaju privolu, ova Politika kolačića bit će ažurirana, a odgovarajući mehanizam za upravljanje privolom bit će uveden prije njihova korištenja.",
      },
      {
        title: "7. Kontakt",
        text:
          "Za pitanja povezana s ovom Politikom kolačića možete se obratiti na laurawebstudioinfo@gmail.com.",
      },
    ],
  },

  en: {
    back: "← Back to homepage",
    label: "COOKIES",
    title: "Cookie Policy",
    updated: "Last updated: August 2026.",

    intro:
      "This Cookie Policy explains whether Laura Web Studio uses cookies and similar technologies on this website.",

    sections: [
      {
        title: "1. What are cookies?",
        text:
          "Cookies are small text files that websites may store on your device to enable certain functions, remember settings or collect information about how a website is used.",
      },
      {
        title: "2. Which cookies do we use?",
        text:
          "Laura Web Studio currently does not intentionally implement analytics, marketing or advertising cookies. We do not use Google Analytics, Meta Pixel or similar visitor tracking tools.",
      },
      {
        title: "3. Essential technical technologies",
        text:
          "The hosting provider and other technical infrastructure may use technologies that are necessary for security, content delivery and the basic operation of the website. These technologies are not intended to track visitors for marketing purposes.",
      },
      {
        title: "4. Contact form",
        text:
          "The contact form is used only to transmit information that you voluntarily provide so that Laura Web Studio can respond to your enquiry. The contact form is currently not connected to an analytics or marketing tracking system.",
      },
      {
        title: "5. Cookie consent",
        text:
          "Because we currently do not use optional analytics or marketing cookies, the website does not display a consent banner for such cookies.",
      },
      {
        title: "6. Future changes",
        text:
          "If analytics, marketing or other optional technologies requiring consent are introduced in the future, this Cookie Policy will be updated and an appropriate consent mechanism will be implemented before those technologies are used.",
      },
      {
        title: "7. Contact",
        text:
          "For questions regarding this Cookie Policy, you can contact laurawebstudioinfo@gmail.com.",
      },
    ],
  },

  de: {
    back: "← Zurück zur Startseite",
    label: "COOKIES",
    title: "Cookie-Richtlinie",
    updated: "Zuletzt aktualisiert: August 2026.",

    intro:
      "Diese Cookie-Richtlinie erklärt, ob Laura Web Studio Cookies und ähnliche Technologien auf dieser Website verwendet.",

    sections: [
      {
        title: "1. Was sind Cookies?",
        text:
          "Cookies sind kleine Textdateien, die Websites auf Ihrem Gerät speichern können, um bestimmte Funktionen zu ermöglichen, Einstellungen zu speichern oder Informationen über die Nutzung einer Website zu erfassen.",
      },
      {
        title: "2. Welche Cookies verwenden wir?",
        text:
          "Laura Web Studio setzt derzeit bewusst keine Analyse-, Marketing- oder Werbe-Cookies ein. Wir verwenden weder Google Analytics noch Meta Pixel oder vergleichbare Tracking-Werkzeuge.",
      },
      {
        title: "3. Technisch notwendige Technologien",
        text:
          "Der Hostinganbieter und die technische Infrastruktur können Technologien einsetzen, die für Sicherheit, Bereitstellung von Inhalten und die grundlegende Funktion der Website erforderlich sind. Diese Technologien dienen nicht dem Marketing-Tracking von Besuchern.",
      },
      {
        title: "4. Kontaktformular",
        text:
          "Das Kontaktformular dient ausschließlich der Übermittlung der von Ihnen freiwillig eingegebenen Informationen, damit Laura Web Studio Ihre Anfrage beantworten kann. Es ist derzeit nicht mit einem Analyse- oder Marketing-Tracking-System verbunden.",
      },
      {
        title: "5. Cookie-Einwilligung",
        text:
          "Da derzeit keine optionalen Analyse- oder Marketing-Cookies verwendet werden, wird auf der Website kein Einwilligungsbanner für solche Cookies angezeigt.",
      },
      {
        title: "6. Zukünftige Änderungen",
        text:
          "Sollten künftig Analyse-, Marketing- oder andere optionale Technologien eingesetzt werden, für die eine Einwilligung erforderlich ist, wird diese Cookie-Richtlinie aktualisiert und vor deren Verwendung ein entsprechender Einwilligungsmechanismus eingeführt.",
      },
      {
        title: "7. Kontakt",
        text:
          "Bei Fragen zu dieser Cookie-Richtlinie können Sie uns unter laurawebstudioinfo@gmail.com kontaktieren.",
      },
    ],
  },
};

type Language = keyof typeof content;

export function generateStaticParams() {
  return [{ lang: "hr" }, { lang: "en" }, { lang: "de" }];
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!(lang in content)) {
    notFound();
  }

  const language = lang as Language;
  const t = content[language];

  return (
    <main className="legalPage">
      <div className="legalContainer">
        <Link href={`/${language}`} className="legalBack">
          {t.back}
        </Link>

        <header className="legalHeader">
          <p>{t.label}</p>
          <h1>{t.title}</h1>
          <span>{t.updated}</span>
        </header>

        <div className="legalContent">
          <p className="legalIntro">{t.intro}</p>

          {t.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
import Link from "next/link";
import { notFound } from "next/navigation";

const content = {
  hr: {
    back: "← Povratak na početnu",
    title: "Politika kolačića",
    updated: "Posljednje ažuriranje: kolovoz 2026.",
    intro:
      "Ova stranica objašnjava korištenje kolačića i sličnih tehnologija na web stranici Laura Web Studio.",

    whatTitle: "1. Što su kolačići?",
    what:
      "Kolačići su male tekstualne datoteke koje web stranica može pohraniti na uređaj posjetitelja. Mogu služiti za osnovno funkcioniranje stranice, pamćenje postavki, analitiku ili druge svrhe.",

    currentTitle: "2. Kolačići koje trenutno koristimo",
    current:
      "U trenutnoj verziji web stranice Laura Web Studio nisu namjerno implementirani analitički, marketinški ili oglašivački kolačići.",

    necessaryTitle: "3. Nužne tehnologije",
    necessary:
      "Određene tehničke funkcije hostinga ili infrastrukture mogu biti potrebne za sigurno i pravilno funkcioniranje web stranice. Takve tehnologije koriste se samo u opsegu potrebnom za pružanje tražene usluge.",

    futureTitle: "4. Analitika i druge usluge",
    future:
      "Ako u budućnosti uvedemo alate poput web analitike, marketinških tehnologija ili drugih usluga koje zahtijevaju privolu, ova Politika kolačića bit će ažurirana te će, gdje je potrebno, prije njihova aktiviranja biti omogućeno davanje ili odbijanje privole.",

    changesTitle: "5. Promjene",
    changes:
      "Popis korištenih tehnologija može se promijeniti razvojem web stranice. Ova će se politika ažurirati kada se uvedu nove vrste kolačića ili sličnih tehnologija.",

    contactTitle: "6. Kontakt",
    contact:
      "Za pitanja vezana uz kolačiće i privatnost možete se javiti na laurawebstudioinfo@gmail.com.",
  },

  en: {
    back: "← Back to home",
    title: "Cookie Policy",
    updated: "Last updated: August 2026.",
    intro:
      "This page explains the use of cookies and similar technologies on the Laura Web Studio website.",

    whatTitle: "1. What are cookies?",
    what:
      "Cookies are small text files that a website may store on a visitor's device. They can be used for essential website functions, remembering preferences, analytics and other purposes.",

    currentTitle: "2. Cookies currently used",
    current:
      "The current version of the Laura Web Studio website does not intentionally implement analytics, marketing or advertising cookies.",

    necessaryTitle: "3. Essential technologies",
    necessary:
      "Certain technical functions provided by hosting or website infrastructure may be necessary for the secure and proper operation of the website. Such technologies are used only to the extent necessary to provide the requested service.",

    futureTitle: "4. Analytics and other services",
    future:
      "If analytics tools, marketing technologies or other services requiring consent are introduced in the future, this Cookie Policy will be updated and, where required, visitors will be given the opportunity to accept or reject them before they are activated.",

    changesTitle: "5. Changes",
    changes:
      "The technologies used may change as the website develops. This policy will be updated when new types of cookies or similar technologies are introduced.",

    contactTitle: "6. Contact",
    contact:
      "For questions about cookies or privacy, please contact laurawebstudioinfo@gmail.com.",
  },

  de: {
    back: "← Zurück zur Startseite",
    title: "Cookie-Richtlinie",
    updated: "Letzte Aktualisierung: August 2026.",
    intro:
      "Diese Seite erläutert die Verwendung von Cookies und ähnlichen Technologien auf der Website von Laura Web Studio.",

    whatTitle: "1. Was sind Cookies?",
    what:
      "Cookies sind kleine Textdateien, die eine Website auf dem Gerät eines Besuchers speichern kann. Sie können für grundlegende Website-Funktionen, Einstellungen, Analysen oder andere Zwecke verwendet werden.",

    currentTitle: "2. Derzeit verwendete Cookies",
    current:
      "In der aktuellen Version der Website von Laura Web Studio werden bewusst keine Analyse-, Marketing- oder Werbe-Cookies eingesetzt.",

    necessaryTitle: "3. Technisch notwendige Technologien",
    necessary:
      "Bestimmte technische Funktionen des Hostings oder der Website-Infrastruktur können für den sicheren und ordnungsgemäßen Betrieb der Website erforderlich sein. Solche Technologien werden nur in dem Umfang verwendet, der für die Bereitstellung des angeforderten Dienstes notwendig ist.",

    futureTitle: "4. Analyse und weitere Dienste",
    future:
      "Sollten künftig Analyse-Tools, Marketingtechnologien oder andere einwilligungspflichtige Dienste eingesetzt werden, wird diese Cookie-Richtlinie aktualisiert. Soweit erforderlich, können Besucher vor deren Aktivierung ihre Einwilligung erteilen oder ablehnen.",

    changesTitle: "5. Änderungen",
    changes:
      "Die verwendeten Technologien können sich mit der Weiterentwicklung der Website ändern. Diese Richtlinie wird aktualisiert, wenn neue Arten von Cookies oder ähnlichen Technologien eingeführt werden.",

    contactTitle: "6. Kontakt",
    contact:
      "Bei Fragen zu Cookies oder Datenschutz können Sie sich an laurawebstudioinfo@gmail.com wenden.",
  },
};

type Lang = keyof typeof content;

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!(lang in content)) {
    notFound();
  }

  const t = content[lang as Lang];

  return (
    <main className="legalPage">
      <div className="legalContainer">
        <Link href={`/${lang}`} className="legalBack">
          {t.back}
        </Link>

        <header className="legalHeader">
          <p>LAURA WEB STUDIO</p>
          <h1>{t.title}</h1>
          <span>{t.updated}</span>
        </header>

        <div className="legalContent">
          <p className="legalIntro">{t.intro}</p>

          <section>
            <h2>{t.whatTitle}</h2>
            <p>{t.what}</p>
          </section>

          <section>
            <h2>{t.currentTitle}</h2>
            <p>{t.current}</p>
          </section>

          <section>
            <h2>{t.necessaryTitle}</h2>
            <p>{t.necessary}</p>
          </section>

          <section>
            <h2>{t.futureTitle}</h2>
            <p>{t.future}</p>
          </section>

          <section>
            <h2>{t.changesTitle}</h2>
            <p>{t.changes}</p>
          </section>

          <section>
            <h2>{t.contactTitle}</h2>
            <p>{t.contact}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
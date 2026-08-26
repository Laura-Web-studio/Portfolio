import { notFound } from "next/navigation";
import Link from "next/link";

const content = {
  hr: {
    back: "← Natrag na početnu",
    label: "PRIVATNOST",
    title: "Politika privatnosti",
    updated: "Posljednje ažuriranje: kolovoz 2026.",

    intro:
      "Ova Politika privatnosti objašnjava koje osobne podatke Laura Web Studio može prikupljati putem ove web stranice, zašto ih obrađuje i koja prava imate u vezi sa svojim podacima.",

    sections: [
      {
        title: "1. Voditelj obrade",
        text: (
          <>
            Voditelj obrade osobnih podataka je Laura Buzuk, koja djeluje pod
            nazivom Laura Web Studio. Za sva pitanja povezana s privatnošću
            možete se javiti na{" "}
            <a href="mailto:laurawebstudioinfo@gmail.com">
              laurawebstudioinfo@gmail.com
            </a>
            .
          </>
        ),
      },
      {
        title: "2. Koje podatke prikupljamo",
        text: (
          <>
            Putem kontakt forme mogu se prikupljati podaci koje nam sami
            dostavite, uključujući ime, adresu e-pošte, broj telefona ako ga
            navedete, vrstu projekta te sadržaj poruke.
          </>
        ),
      },
      {
        title: "3. Zašto obrađujemo podatke",
        text: (
          <>
            Podaci se koriste kako bismo odgovorili na vaš upit, razgovarali o
            mogućoj suradnji, pripremili ponudu ili poduzeli druge radnje na vaš
            zahtjev prije eventualnog sklapanja poslovnog odnosa.
          </>
        ),
      },
      {
        title: "4. Pravna osnova obrade",
        text: (
          <>
            Ovisno o prirodi komunikacije, obrada se temelji na poduzimanju
            radnji na zahtjev ispitanika prije sklapanja ugovora, izvršavanju
            ugovornog odnosa, ispunjavanju zakonskih obveza ili legitimnom
            interesu za komunikaciju i zaštitu poslovanja.
          </>
        ),
      },
      {
        title: "5. Kontakt forma i Resend",
        text: (
          <>
            Kontakt forma koristi uslugu Resend za tehničku dostavu poruke na
            adresu e-pošte Laura Web Studio. Podaci uneseni u kontakt formu zato
            se mogu obrađivati putem infrastrukture društva Resend. Resend
            navodi da se korisnički podaci, uključujući sadržaj poruka i
            podatke o dostavi, pohranjuju u Sjedinjenim Američkim Državama te
            primjenjuje odgovarajuće mehanizme za međunarodne prijenose
            podataka.
          </>
        ),
      },
      {
        title: "6. Hosting",
        text: (
          <>
            Web stranica je trenutačno hostana putem platforme Vercel. Prilikom
            pristupa stranici pružatelj hostinga može tehnički obrađivati
            podatke potrebne za sigurno i pouzdano prikazivanje stranice, poput
            IP adrese, vremena zahtjeva i tehničkih podataka preglednika ili
            uređaja.
          </>
        ),
      },
      {
        title: "7. Kolačići i analitika",
        text: (
          <>
            Laura Web Studio trenutačno ne koristi Google Analytics, Meta Pixel
            ni druge namjerno uvedene marketinške ili analitičke alate koji
            zahtijevaju privolu. Više informacija dostupno je u Politici
            kolačića.
          </>
        ),
      },
      {
        title: "8. Koliko dugo čuvamo podatke",
        text: (
          <>
            Podaci se čuvaju samo onoliko dugo koliko je potrebno za odgovor na
            upit, vođenje komunikacije, eventualnu suradnju te ispunjavanje
            zakonskih obveza ili zaštitu pravnih zahtjeva.
          </>
        ),
      },
      {
        title: "9. Dijeljenje podataka",
        text: (
          <>
            Osobni podaci ne prodaju se niti daju trećim osobama u marketinške
            svrhe. Podacima mogu pristupati pružatelji tehničkih usluga koji su
            potrebni za funkcioniranje stranice i komunikacije, kao što su
            pružatelj hostinga i usluga slanja e-pošte.
          </>
        ),
      },
      {
        title: "10. Vaša prava",
        text: (
          <>
            U skladu s primjenjivim propisima možete zatražiti pristup svojim
            osobnim podacima, njihov ispravak ili brisanje, ograničenje obrade,
            prenosivost podataka te u određenim slučajevima uložiti prigovor na
            obradu.
          </>
        ),
      },
      {
        title: "11. Pritužba nadzornom tijelu",
        text: (
          <>
            Ako smatrate da se vaši osobni podaci obrađuju protivno propisima,
            imate pravo podnijeti pritužbu Agenciji za zaštitu osobnih podataka
            Republike Hrvatske (AZOP).
          </>
        ),
      },
      {
        title: "12. Izmjene ove politike",
        text: (
          <>
            Ova se Politika privatnosti može povremeno ažurirati radi promjena
            u načinu rada web stranice, korištenim uslugama ili zakonskim
            zahtjevima. Datum posljednje izmjene bit će naveden na ovoj
            stranici.
          </>
        ),
      },
    ],
  },

  en: {
    back: "← Back to homepage",
    label: "PRIVACY",
    title: "Privacy Policy",
    updated: "Last updated: August 2026.",

    intro:
      "This Privacy Policy explains what personal data Laura Web Studio may collect through this website, why it is processed and what rights you have regarding your data.",

    sections: [
      {
        title: "1. Data controller",
        text: (
          <>
            The controller of personal data is Laura Buzuk, operating under the
            name Laura Web Studio. For privacy-related questions, you can
            contact{" "}
            <a href="mailto:laurawebstudioinfo@gmail.com">
              laurawebstudioinfo@gmail.com
            </a>
            .
          </>
        ),
      },
      {
        title: "2. Data we collect",
        text: (
          <>
            Through the contact form, we may collect information that you
            voluntarily provide, including your name, email address, telephone
            number if provided, project type and message content.
          </>
        ),
      },
      {
        title: "3. Why we process data",
        text: (
          <>
            The information is used to respond to your enquiry, discuss a
            potential collaboration, prepare an offer or take other steps at
            your request before entering into a possible business relationship.
          </>
        ),
      },
      {
        title: "4. Legal basis",
        text: (
          <>
            Depending on the nature of the communication, processing may be
            based on steps taken at your request before entering into a
            contract, performance of a contractual relationship, compliance
            with legal obligations or legitimate interests relating to
            communication and protection of the business.
          </>
        ),
      },
      {
        title: "5. Contact form and Resend",
        text: (
          <>
            The contact form uses Resend to technically deliver your message to
            Laura Web Studio. Information submitted through the form may
            therefore be processed through Resend infrastructure. Resend states
            that customer data, including message content and delivery logs, is
            stored in the United States and that appropriate mechanisms are
            used for international data transfers.
          </>
        ),
      },
      {
        title: "6. Hosting",
        text: (
          <>
            This website is currently hosted using Vercel. When you visit the
            website, the hosting provider may technically process data required
            to securely and reliably deliver the website, such as IP address,
            request time and browser or device information.
          </>
        ),
      },
      {
        title: "7. Cookies and analytics",
        text: (
          <>
            Laura Web Studio currently does not use Google Analytics, Meta
            Pixel or other intentionally implemented marketing or analytics
            tools requiring consent. More information is available in the
            Cookie Policy.
          </>
        ),
      },
      {
        title: "8. Retention",
        text: (
          <>
            Personal data is retained only for as long as necessary to respond
            to an enquiry, continue communication, manage a possible
            collaboration, comply with legal obligations or establish,
            exercise or defend legal claims.
          </>
        ),
      },
      {
        title: "9. Sharing of data",
        text: (
          <>
            Personal data is not sold or provided to third parties for their
            own marketing purposes. Technical service providers necessary for
            the operation of the website and communication, such as hosting and
            email delivery providers, may process data where required.
          </>
        ),
      },
      {
        title: "10. Your rights",
        text: (
          <>
            Subject to applicable law, you may request access to your personal
            data, correction or deletion, restriction of processing, data
            portability and, in certain circumstances, object to processing.
          </>
        ),
      },
      {
        title: "11. Supervisory authority",
        text: (
          <>
            If you believe that your personal data has been processed in
            violation of applicable law, you have the right to lodge a
            complaint with the competent data protection supervisory authority.
          </>
        ),
      },
      {
        title: "12. Changes to this policy",
        text: (
          <>
            This Privacy Policy may be updated from time to time to reflect
            changes to the website, services used or applicable legal
            requirements. The latest update date will be shown on this page.
          </>
        ),
      },
    ],
  },

  de: {
    back: "← Zurück zur Startseite",
    label: "DATENSCHUTZ",
    title: "Datenschutzerklärung",
    updated: "Zuletzt aktualisiert: August 2026.",

    intro:
      "Diese Datenschutzerklärung erläutert, welche personenbezogenen Daten Laura Web Studio über diese Website verarbeiten kann, zu welchen Zwecken dies geschieht und welche Rechte Ihnen zustehen.",

    sections: [
      {
        title: "1. Verantwortliche Person",
        text: (
          <>
            Verantwortlich für die Verarbeitung personenbezogener Daten ist
            Laura Buzuk, tätig unter dem Namen Laura Web Studio. Bei Fragen zum
            Datenschutz können Sie uns unter{" "}
            <a href="mailto:laurawebstudioinfo@gmail.com">
              laurawebstudioinfo@gmail.com
            </a>{" "}
            kontaktieren.
          </>
        ),
      },
      {
        title: "2. Welche Daten wir verarbeiten",
        text: (
          <>
            Über das Kontaktformular können die von Ihnen freiwillig
            angegebenen Daten verarbeitet werden, insbesondere Name,
            E-Mail-Adresse, Telefonnummer sofern angegeben, Projektart und
            Inhalt Ihrer Nachricht.
          </>
        ),
      },
      {
        title: "3. Zweck der Verarbeitung",
        text: (
          <>
            Die Daten werden verwendet, um Ihre Anfrage zu beantworten, eine
            mögliche Zusammenarbeit zu besprechen, ein Angebot vorzubereiten
            oder auf Ihren Wunsch weitere vorvertragliche Maßnahmen
            durchzuführen.
          </>
        ),
      },
      {
        title: "4. Rechtsgrundlage",
        text: (
          <>
            Je nach Art der Kommunikation erfolgt die Verarbeitung zur
            Durchführung vorvertraglicher Maßnahmen, zur Vertragserfüllung,
            zur Erfüllung gesetzlicher Verpflichtungen oder auf Grundlage
            berechtigter Interessen an Kommunikation und Schutz des
            Geschäftsbetriebs.
          </>
        ),
      },
      {
        title: "5. Kontaktformular und Resend",
        text: (
          <>
            Für die technische Übermittlung von Nachrichten aus dem
            Kontaktformular wird Resend verwendet. Die eingegebenen Daten
            können daher über die Infrastruktur von Resend verarbeitet werden.
            Resend gibt an, Kundendaten einschließlich Nachrichteninhalten und
            Zustellungsprotokollen in den Vereinigten Staaten zu speichern und
            geeignete Mechanismen für internationale Datenübermittlungen
            einzusetzen.
          </>
        ),
      },
      {
        title: "6. Hosting",
        text: (
          <>
            Diese Website wird derzeit über Vercel gehostet. Beim Besuch der
            Website kann der Hostinganbieter technisch notwendige Daten wie
            IP-Adresse, Zeitpunkt der Anfrage sowie Browser- oder
            Geräteinformationen verarbeiten.
          </>
        ),
      },
      {
        title: "7. Cookies und Analyse",
        text: (
          <>
            Laura Web Studio verwendet derzeit weder Google Analytics noch Meta
            Pixel oder andere bewusst eingesetzte Marketing- oder
            Analysewerkzeuge, die eine Einwilligung erfordern. Weitere
            Informationen finden Sie in der Cookie-Richtlinie.
          </>
        ),
      },
      {
        title: "8. Speicherdauer",
        text: (
          <>
            Personenbezogene Daten werden nur so lange gespeichert, wie dies
            für die Bearbeitung einer Anfrage, weitere Kommunikation, eine
            mögliche Zusammenarbeit, gesetzliche Verpflichtungen oder die
            Geltendmachung und Verteidigung von Rechtsansprüchen erforderlich
            ist.
          </>
        ),
      },
      {
        title: "9. Weitergabe von Daten",
        text: (
          <>
            Personenbezogene Daten werden weder verkauft noch Dritten für deren
            eigene Marketingzwecke überlassen. Technische Dienstleister, die
            für Hosting und E-Mail-Kommunikation erforderlich sind, können
            Daten im notwendigen Umfang verarbeiten.
          </>
        ),
      },
      {
        title: "10. Ihre Rechte",
        text: (
          <>
            Nach Maßgabe der geltenden Datenschutzvorschriften können Sie
            Auskunft, Berichtigung oder Löschung Ihrer Daten, Einschränkung der
            Verarbeitung und Datenübertragbarkeit verlangen sowie in
            bestimmten Fällen Widerspruch gegen die Verarbeitung einlegen.
          </>
        ),
      },
      {
        title: "11. Beschwerderecht",
        text: (
          <>
            Wenn Sie der Ansicht sind, dass Ihre personenbezogenen Daten
            rechtswidrig verarbeitet wurden, haben Sie das Recht, sich bei der
            zuständigen Datenschutzaufsichtsbehörde zu beschweren.
          </>
        ),
      },
      {
        title: "12. Änderungen",
        text: (
          <>
            Diese Datenschutzerklärung kann aktualisiert werden, wenn sich die
            Website, die verwendeten Dienste oder rechtliche Anforderungen
            ändern. Das Datum der letzten Aktualisierung wird auf dieser Seite
            angegeben.
          </>
        ),
      },
    ],
  },
};

type Language = keyof typeof content;

export function generateStaticParams() {
  return [{ lang: "hr" }, { lang: "en" }, { lang: "de" }];
}

export default async function PrivacyPage({
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
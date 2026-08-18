import Link from "next/link";
import { notFound } from "next/navigation";

const content = {
  hr: {
    back: "← Povratak na početnu",
    title: "Politika privatnosti",
    updated: "Posljednje ažuriranje: kolovoz 2026.",
    intro:
      "Ova Politika privatnosti objašnjava kako se osobni podaci obrađuju prilikom kontakta i komunikacije s Laura Web Studiom.",

    controllerTitle: "1. Voditelj obrade",
    controller:
      "Za obradu osobnih podataka odgovorna je Laura Buzuk, koja djeluje pod nazivom Laura Web Studio. Za pitanja vezana uz privatnost možete se javiti na laurawebstudioinfo@gmail.com ili +385 95 743 3292.",

    dataTitle: "2. Koje podatke obrađujem",
    data:
      "Mogu obrađivati podatke koje mi sami dostavite prilikom kontakta, primjerice ime i prezime, naziv poslovanja, adresu e-pošte, telefonski broj te informacije koje navedete u poruci ili upitu.",

    purposeTitle: "3. Svrha obrade",
    purpose:
      "Podaci se koriste radi odgovaranja na upite, komunikacije o mogućoj ili postojećoj suradnji, izrade ponude, dogovora oko projekta te izvršavanja dogovorenih usluga.",

    legalTitle: "4. Pravna osnova",
    legal:
      "Ovisno o okolnostima, obrada se temelji na poduzimanju radnji na vaš zahtjev prije sklapanja poslovnog odnosa, izvršavanju dogovorenog odnosa, ispunjavanju zakonskih obveza ili legitimnom interesu za vođenje poslovne komunikacije i zaštitu pravnih zahtjeva.",

    recipientsTitle: "5. Primatelji podataka",
    recipients:
      "Podaci se ne prodaju niti ustupaju trećim osobama u marketinške svrhe. U mjeri potrebnoj za pružanje tehničkih i komunikacijskih usluga, podatke mogu obrađivati pružatelji usluga koje koristim, primjerice pružatelj usluge e-pošte i hostinga, uz primjenu odgovarajućih mjera zaštite.",

    retentionTitle: "6. Koliko dugo se podaci čuvaju",
    retention:
      "Podaci se čuvaju samo onoliko dugo koliko je potrebno za svrhu zbog koje su prikupljeni, odnosno koliko je potrebno radi ispunjavanja zakonskih obveza ili postavljanja, ostvarivanja i obrane pravnih zahtjeva.",

    rightsTitle: "7. Vaša prava",
    rights:
      "Ovisno o okolnostima, imate pravo zatražiti pristup svojim osobnim podacima, njihov ispravak ili brisanje, ograničenje obrade, prenosivost podataka te uložiti prigovor na obradu. Za ostvarivanje prava možete se javiti na laurawebstudioinfo@gmail.com.",

    complaintTitle: "8. Pravo na pritužbu",
    complaint:
      "Ako smatrate da se vaši osobni podaci obrađuju protivno propisima, imate pravo obratiti se Agenciji za zaštitu osobnih podataka (AZOP), nadležnom nadzornom tijelu u Republici Hrvatskoj.",

    changesTitle: "9. Izmjene Politike privatnosti",
    changes:
      "Ova Politika privatnosti može se povremeno ažurirati radi promjena načina rada, korištenih usluga ili primjenjivih propisa.",
  },

  en: {
    back: "← Back to home",
    title: "Privacy Policy",
    updated: "Last updated: August 2026.",
    intro:
      "This Privacy Policy explains how personal data is processed when you contact and communicate with Laura Web Studio.",

    controllerTitle: "1. Data controller",
    controller:
      "Personal data is processed by Laura, operating under the name Laura Web Studio. For privacy-related questions, you can contact laurawebstudioinfo@gmail.com or +385 95 743 3292.",

    dataTitle: "2. Personal data I process",
    data:
      "I may process information that you voluntarily provide when contacting me, such as your name, business name, email address, telephone number and any information included in your message or enquiry.",

    purposeTitle: "3. Purpose of processing",
    purpose:
      "Personal data is used to respond to enquiries, communicate about potential or existing cooperation, prepare quotations, discuss projects and provide agreed services.",

    legalTitle: "4. Legal basis",
    legal:
      "Depending on the circumstances, processing may be based on taking steps at your request prior to entering into a business relationship, performing an agreed relationship, complying with legal obligations or legitimate interests related to business communication and the protection of legal claims.",

    recipientsTitle: "5. Recipients",
    recipients:
      "Personal data is not sold or shared with third parties for their marketing purposes. Where necessary for technical and communication services, data may be processed by service providers I use, such as email and hosting providers, subject to appropriate safeguards.",

    retentionTitle: "6. Data retention",
    retention:
      "Personal data is kept only for as long as necessary for the purpose for which it was collected and, where applicable, for compliance with legal obligations or the establishment, exercise or defence of legal claims.",

    rightsTitle: "7. Your rights",
    rights:
      "Depending on the circumstances, you may have the right to request access to, correction or deletion of your personal data, restriction of processing, data portability and the right to object. You can submit a request at laurawebstudioinfo@gmail.com.",

    complaintTitle: "8. Right to lodge a complaint",
    complaint:
      "If you believe your personal data is being processed unlawfully, you have the right to lodge a complaint with the Croatian Personal Data Protection Agency (AZOP), the competent supervisory authority in Croatia.",

    changesTitle: "9. Changes to this Privacy Policy",
    changes:
      "This Privacy Policy may be updated from time to time to reflect changes to the services, processing activities or applicable law.",
  },

  de: {
    back: "← Zurück zur Startseite",
    title: "Datenschutzerklärung",
    updated: "Letzte Aktualisierung: August 2026.",
    intro:
      "Diese Datenschutzerklärung erläutert, wie personenbezogene Daten verarbeitet werden, wenn Sie Laura Web Studio kontaktieren oder mit Laura Web Studio kommunizieren.",

    controllerTitle: "1. Verantwortliche Stelle",
    controller:
      "Für die Verarbeitung personenbezogener Daten ist Laura verantwortlich, die unter dem Namen Laura Web Studio tätig ist. Bei Fragen zum Datenschutz können Sie sich an laurawebstudioinfo@gmail.com oder +385 95 743 3292 wenden.",

    dataTitle: "2. Verarbeitete personenbezogene Daten",
    data:
      "Verarbeitet werden können Daten, die Sie bei der Kontaktaufnahme freiwillig mitteilen, beispielsweise Name, Unternehmensname, E-Mail-Adresse, Telefonnummer sowie Informationen aus Ihrer Nachricht oder Anfrage.",

    purposeTitle: "3. Zweck der Verarbeitung",
    purpose:
      "Die Daten werden verwendet, um Anfragen zu beantworten, über eine mögliche oder bestehende Zusammenarbeit zu kommunizieren, Angebote zu erstellen, Projekte abzustimmen und vereinbarte Leistungen zu erbringen.",

    legalTitle: "4. Rechtsgrundlage",
    legal:
      "Je nach Situation erfolgt die Verarbeitung zur Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage, zur Erfüllung einer vereinbarten Zusammenarbeit, zur Erfüllung gesetzlicher Pflichten oder aufgrund berechtigter Interessen an geschäftlicher Kommunikation und dem Schutz rechtlicher Ansprüche.",

    recipientsTitle: "5. Empfänger",
    recipients:
      "Personenbezogene Daten werden nicht verkauft oder für Marketingzwecke an Dritte weitergegeben. Soweit dies für technische oder kommunikative Dienstleistungen erforderlich ist, können von mir eingesetzte Dienstleister, beispielsweise E-Mail- oder Hosting-Anbieter, Daten unter geeigneten Schutzmaßnahmen verarbeiten.",

    retentionTitle: "6. Speicherdauer",
    retention:
      "Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder soweit gesetzliche Pflichten beziehungsweise die Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dies erfordern.",

    rightsTitle: "7. Ihre Rechte",
    rights:
      "Je nach Umständen haben Sie insbesondere das Recht auf Auskunft, Berichtigung oder Löschung personenbezogener Daten, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Anfragen können an laurawebstudioinfo@gmail.com gerichtet werden.",

    complaintTitle: "8. Beschwerderecht",
    complaint:
      "Wenn Sie der Ansicht sind, dass Ihre personenbezogenen Daten rechtswidrig verarbeitet werden, können Sie sich an die kroatische Datenschutzbehörde AZOP als zuständige Aufsichtsbehörde wenden.",

    changesTitle: "9. Änderungen dieser Datenschutzerklärung",
    changes:
      "Diese Datenschutzerklärung kann gelegentlich aktualisiert werden, um Änderungen der Dienstleistungen, Verarbeitungstätigkeiten oder geltenden Vorschriften zu berücksichtigen.",
  },
};

type Lang = keyof typeof content;

export default async function PrivacyPage({
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
            <h2>{t.controllerTitle}</h2>
            <p>{t.controller}</p>
          </section>

          <section>
            <h2>{t.dataTitle}</h2>
            <p>{t.data}</p>
          </section>

          <section>
            <h2>{t.purposeTitle}</h2>
            <p>{t.purpose}</p>
          </section>

          <section>
            <h2>{t.legalTitle}</h2>
            <p>{t.legal}</p>
          </section>

          <section>
            <h2>{t.recipientsTitle}</h2>
            <p>{t.recipients}</p>
          </section>

          <section>
            <h2>{t.retentionTitle}</h2>
            <p>{t.retention}</p>
          </section>

          <section>
            <h2>{t.rightsTitle}</h2>
            <p>{t.rights}</p>
          </section>

          <section>
            <h2>{t.complaintTitle}</h2>
            <p>{t.complaint}</p>
          </section>

          <section>
            <h2>{t.changesTitle}</h2>
            <p>{t.changes}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
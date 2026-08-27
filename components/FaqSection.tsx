type Language = "hr" | "en" | "de";

type Props = {
  lang: Language;
};

const content = {
  hr: {
    number: "06",
    label: "ČESTA PITANJA",
    title1: "Prije nego",
    title2: "krenemo surađivati.",

    items: [
      {
        question: "Koliko traje izrada web stranice?",
        answer:
          "Vrijeme izrade ovisi o opsegu projekta i brzini dostave materijala. Jednostavnija web stranica najčešće može biti gotova kroz nekoliko tjedana, dok kompleksniji projekti zahtijevaju više vremena. Točan okvir definiramo prije početka rada.",
      },
      {
        question: "Što trebam dostaviti prije početka?",
        answer:
          "Najčešće su potrebni tekstovi, logo, fotografije, podaci o poslovanju i osnovna ideja o tome što želite postići web stranicom. Ako nemate sve spremno, zajedno možemo definirati što je potrebno prije početka dizajna.",
      },
      {
        question: "Jesu li domena i hosting uključeni u cijenu?",
        answer:
          "Domena, hosting i eventualne plaćene licence nisu uključeni u početnu cijenu osim ako se drugačije dogovorimo. Mogu vam pomoći pri odabiru, kupnji i povezivanju potrebnih usluga.",
      },
      {
        question: "Možete li redizajnirati postojeću web stranicu?",
        answer:
          "Da. Ako već imate web stranicu, možemo procijeniti postojeće stanje i odlučiti je li bolje napraviti redizajn postojeće stranice ili novu izvedbu.",
      },
      {
        question: "Hoće li stranica dobro raditi na mobitelu?",
        answer:
          "Da. Sve stranice izrađujem responzivno kako bi bile prilagođene mobitelima, tabletima i desktop uređajima.",
      },
      {
        question: "Što se događa nakon završetka projekta?",
        answer:
          "Nakon završetka projekta dobivate funkcionalnu web stranicu spremnu za korištenje. Po potrebi možemo dogovoriti i daljnje održavanje, manje izmjene i tehničku podršku.",
      },
      {
        question: "Kako izgleda plaćanje?",
        answer:
          "Način i dinamika plaćanja definiraju se u ponudi prije početka projekta. Za veće projekte moguće je dogovoriti plaćanje u više faza.",
      },
      {
        question: "Radite li samo s klijentima iz Splita?",
        answer:
          "Ne. Suradnja može biti potpuno online, tako da mogu raditi s klijentima iz cijele Hrvatske.",
      },
    ],
  },

  en: {
    number: "06",
    label: "FAQ",
    title1: "Before we",
    title2: "start working together.",

    items: [
      {
        question: "How long does it take to build a website?",
        answer:
          "The timeline depends on the scope of the project and how quickly the necessary materials are provided. A simpler website can usually be completed within a few weeks, while more complex projects require additional time. A clear timeline is agreed before work begins.",
      },
      {
        question: "What do I need to provide before we start?",
        answer:
          "Usually this includes your text, logo, photographs, business information and a basic idea of what you want the website to achieve. If you do not have everything ready, we can define what is needed before the design process begins.",
      },
      {
        question: "Are domain and hosting included?",
        answer:
          "Domain, hosting and any paid third-party licences are not included in the starting price unless agreed otherwise. I can help you choose, purchase and connect the necessary services.",
      },
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes. If you already have a website, we can review its current condition and decide whether a redesign or a completely new implementation is the better option.",
      },
      {
        question: "Will the website work well on mobile?",
        answer:
          "Yes. Every website is developed responsively and adapted for mobile phones, tablets and desktop devices.",
      },
      {
        question: "What happens after the website is finished?",
        answer:
          "Once the project is completed, you receive a functional website ready for use. Ongoing maintenance, smaller updates and technical support can also be arranged if required.",
      },
      {
        question: "How does payment work?",
        answer:
          "Payment terms and timing are defined in the proposal before the project begins. For larger projects, payment can be divided into several stages.",
      },
      {
        question: "Do you only work with clients in Split?",
        answer:
          "No. The entire collaboration can be handled online, so I can work with clients throughout Croatia and internationally.",
      },
    ],
  },

  de: {
    number: "06",
    label: "HÄUFIGE FRAGEN",
    title1: "Bevor wir",
    title2: "zusammenarbeiten.",

    items: [
      {
        question: "Wie lange dauert die Erstellung einer Website?",
        answer:
          "Die Dauer hängt vom Umfang des Projekts und davon ab, wie schnell die erforderlichen Inhalte bereitgestellt werden. Eine einfachere Website kann häufig innerhalb weniger Wochen fertiggestellt werden, während komplexere Projekte mehr Zeit benötigen. Der genaue Zeitrahmen wird vor Projektbeginn vereinbart.",
      },
      {
        question: "Was muss ich vor Projektbeginn bereitstellen?",
        answer:
          "In der Regel werden Texte, Logo, Fotos, Unternehmensinformationen und eine grundlegende Vorstellung vom Ziel der Website benötigt. Falls noch nicht alles vorhanden ist, können wir gemeinsam festlegen, was vor Beginn des Designs erforderlich ist.",
      },
      {
        question: "Sind Domain und Hosting im Preis enthalten?",
        answer:
          "Domain, Hosting und kostenpflichtige Drittanbieter-Lizenzen sind nicht im Startpreis enthalten, sofern nichts anderes vereinbart wurde. Ich kann Sie bei Auswahl, Kauf und Einrichtung der benötigten Dienste unterstützen.",
      },
      {
        question: "Können Sie eine bestehende Website überarbeiten?",
        answer:
          "Ja. Wenn bereits eine Website vorhanden ist, können wir den aktuellen Zustand prüfen und entscheiden, ob ein Redesign oder eine komplette Neuentwicklung sinnvoller ist.",
      },
      {
        question: "Funktioniert die Website auch auf dem Smartphone?",
        answer:
          "Ja. Jede Website wird responsive umgesetzt und für Smartphones, Tablets und Desktop-Geräte optimiert.",
      },
      {
        question: "Was passiert nach Abschluss des Projekts?",
        answer:
          "Nach Projektabschluss erhalten Sie eine funktionsfähige Website, die einsatzbereit ist. Bei Bedarf können zusätzlich Wartung, kleinere Änderungen und technische Unterstützung vereinbart werden.",
      },
      {
        question: "Wie funktioniert die Bezahlung?",
        answer:
          "Zahlungsbedingungen und Zeitplan werden vor Projektbeginn im Angebot festgelegt. Bei größeren Projekten kann eine Zahlung in mehreren Phasen vereinbart werden.",
      },
      {
        question: "Arbeiten Sie nur mit Kunden aus Split?",
        answer:
          "Nein. Die Zusammenarbeit kann vollständig online erfolgen, sodass ich mit Kunden in ganz Kroatien und auch international arbeiten kann.",
      },
    ],
  },
};

export default function FaqSection({ lang }: Props) {
  const t = content[lang];

  return (
    <section className="section faqSection">
      <div className="sectionHeader faqHeader">
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

      <div className="faqList">
        {t.items.map((item, index) => (
          <details className="faqItem" key={item.question}>
            <summary>
              <span className="faqIndex">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="faqQuestion">{item.question}</span>

              <span className="faqPlus">+</span>
            </summary>

            <div className="faqAnswer">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
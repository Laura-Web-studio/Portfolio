import Image from "next/image";
import ContactForm from "./ContactForm";


type Translation = {
  nav: {
    projects: string;
    services: string;
    process: string;
    about: string;
    quote: string;
  };

  hero: {
    available: string;
    sideText: string;
    title1: string;
    title2: string;
    eyebrow: string;
    description: string;
    startProject: string;
    viewProjects: string;
  };

  audience: {
    label: string;
    title1: string;
    title2: string;
    salonTitle: string;
    salonText: string;
    restaurantTitle: string;
    restaurantText: string;
    apartmentsTitle: string;
    apartmentsText: string;
    smallBusinessTitle: string;
    smallBusinessText: string;
  };

  projects: {
    label: string;
    title1: string;
    title2: string;
    viewProject: string;
    salon: string;
    restaurant: string;
    accommodation: string;
  };

  services: {
    label: string;
    title1: string;
    title2: string;
    webDesign: string;
    webDesignText: string;
    development: string;
    developmentText: string;
    seo: string;
    seoText: string;
    maintenance: string;
    maintenanceText: string;
  };

  statement: {
    small: string;
    title1: string;
    title2: string;
  };

  process: {
    label: string;
    intro: string;
    step1: string;
    step1Text: string;
    step2: string;
    step2Text: string;
    step3: string;
    step3Text: string;
    step4: string;
    step4Text: string;
  };

  about: {
    label: string;
    title1: string;
    title2: string;
    text1: string;
    text2: string;
  };

  contact: {
    label: string;
    title: string;
    intro: string;

    name: string;
    emailAddress: string;
    phoneNumber: string;

    projectType: string;
    newWebsite: string;
    redesign: string;
    other: string;

    message: string;
    messagePlaceholder: string;

    submit: string;

    email: string;
    phone: string;
  };

  footer: {
    description: string;
    startProject: string;
    services: string;
    contact: string;
    language: string;
    privacy: string;
    cookies: string;
    backToTop: string;
  };
};

type Props = {
  t: Translation;
  lang: "hr" | "en" | "de";
};

export default function HomePage({ t, lang }: Props) {
  return (
    <main>
      {/* NAVIGACIJA */}
      <nav className="navbar navbarOverlay">
        <a href={`/${lang}`} className="logo">
          Laura Web Studio
        </a>

        <div className="navLinks">
          <a href="#projects">{t.nav.projects}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#process">{t.nav.process}</a>
          <a href="#about">{t.nav.about}</a>
        </div>

        <a href="#contact" className="navCta">
          {t.nav.quote}
        </a>
      </nav>

      {/* HERO */}
      <section className="hero heroWithBackground">
  <Image
    src="/images/hero.jpg"
    alt=""
    fill
    preload
    sizes="100vw"
    className="heroPhoto"
  />

  <div className="heroOverlay" />
        <div className="heroContent">
          <div className="heroTop heroReveal heroDelay1">
            <div className="availabilityBadge">
              <span className="availabilityDot" />
              {t.hero.available}
            </div>

            <p className="heroSideText">{t.hero.sideText}</p>
          </div>

          <div className="heroBackgroundTitle">
            <div className="heroLineMask">
              <h1 className="heroReveal heroDelay2">
                {t.hero.title1}
              </h1>
            </div>

            <div className="heroLineMask">
              <h1 className="heroReveal heroDelay3">
                <span>{t.hero.title2}</span>
              </h1>
            </div>
          </div>

          <div className="heroBottom heroReveal heroDelay4">
            <div className="heroBottomText">
              <p className="eyebrow">{t.hero.eyebrow}</p>

              <p>{t.hero.description}</p>
            </div>

            <div className="heroActions">
              <a
                href="#contact"
                className="primaryButton heroPrimaryButton"
              >
                {t.hero.startProject}
                <span>↗</span>
              </a>

              <a href="#projects" className="secondaryHeroButton">
                {t.hero.viewProjects}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marqueeSection">
        <div className="marquee">
          <div className="marqueeTrack">
            <span>WEB DESIGN</span>
            <i>✦</i>
            <span>WEB DEVELOPMENT</span>
            <i>✦</i>
            <span>RESPONSIVE</span>
            <i>✦</i>
            <span>SEO</span>
            <i>✦</i>
            <span>MAINTENANCE</span>
            <i>✦</i>

            <span>WEB DESIGN</span>
            <i>✦</i>
            <span>WEB DEVELOPMENT</span>
            <i>✦</i>
            <span>RESPONSIVE</span>
            <i>✦</i>
            <span>SEO</span>
            <i>✦</i>
            <span>MAINTENANCE</span>
            <i>✦</i>
          </div>
        </div>
      </section>

      {/* ZA KOGA RADIM */}
      <section className="section audience">
        <div className="audienceHeader reveal">
          <div>
            <p className="sectionNumber">00</p>
            <p className="sectionLabel">{t.audience.label}</p>
          </div>

          <h2>
            {t.audience.title1}
            <br />
            <em>{t.audience.title2}</em>
          </h2>
        </div>

        <div className="audienceGrid">
          <article className="audienceCard reveal">
            <span>01</span>
            <h3>{t.audience.salonTitle}</h3>
            <p>{t.audience.salonText}</p>
          </article>

          <article className="audienceCard reveal">
            <span>02</span>
            <h3>{t.audience.restaurantTitle}</h3>
            <p>{t.audience.restaurantText}</p>
          </article>

          <article className="audienceCard reveal">
            <span>03</span>
            <h3>{t.audience.apartmentsTitle}</h3>
            <p>{t.audience.apartmentsText}</p>
          </article>

          <article className="audienceCard reveal">
            <span>04</span>
            <h3>{t.audience.smallBusinessTitle}</h3>
            <p>{t.audience.smallBusinessText}</p>
          </article>
        </div>
      </section>

      {/* PROJEKTI */}
      <section className="section projects" id="projects">
        <div className="sectionHeader reveal">
          <div>
            <p className="sectionNumber">01</p>
            <p className="sectionLabel">{t.projects.label}</p>
          </div>

          <h2>
            {t.projects.title1}
            <br />
            <em>{t.projects.title2}</em>
          </h2>
        </div>

        <div className="projectsGrid">
          <article className="project projectLarge reveal">
            <div className="projectVisual projectWithImage">
              <Image
                src="/images/studio-luna.jpg"
                alt="Studio Luna"
                fill
                sizes="(max-width: 650px) 100vw, (max-width: 950px) 100vw, 58vw"
                className="projectPhoto"
              />

              <div className="projectImageTint beautyTint" />

              <div className="projectImageTitle">
                <span>BEAUTY & CARE</span>

                <h3>
                  Studio
                  <br />
                  <em>Luna</em>
                </h3>
              </div>

              <div className="projectOverlay">
                <span>{t.projects.viewProject}</span>
                <span>↗</span>
              </div>
            </div>

            <div className="projectInfo">
              <div>
                <h3>Studio Luna</h3>
                <p>{t.projects.salon}</p>
              </div>

              <span>01 / 03</span>
            </div>
          </article>

          <article className="project reveal">
            <div className="projectVisual projectWithImage">
              <Image
                src="/images/konoba-mare.jpg"
                alt="Konoba Mare"
                fill
                sizes="(max-width: 650px) 100vw, (max-width: 950px) 50vw, 42vw"
                className="projectPhoto"
              />

              <div className="projectImageTint restaurantTint" />

              <div className="projectImageTitle lightTitle">
                <span>MEDITERRANEAN DINING</span>

                <h3>
                  Konoba
                  <br />
                  <em>Mare</em>
                </h3>
              </div>

              <div className="projectOverlay">
                <span>{t.projects.viewProject}</span>
                <span>↗</span>
              </div>
            </div>

            <div className="projectInfo">
              <div>
                <h3>Konoba Mare</h3>
                <p>{t.projects.restaurant}</p>
              </div>

              <span>02 / 03</span>
            </div>
          </article>

          <article className="project reveal">
            <div className="projectVisual projectWithImage">
              <Image
                src="/images/villa-adriatic.jpg"
                alt="Villa Adriatic"
                fill
                sizes="(max-width: 650px) 100vw, (max-width: 950px) 50vw, 42vw"
                className="projectPhoto"
              />

              <div className="projectImageTint villaTint" />

              <div className="projectImageTitle lightTitle">
                <span>STAY · CROATIA</span>

                <h3>
                  Villa
                  <br />
                  <em>Adriatic</em>
                </h3>
              </div>

              <div className="projectOverlay">
                <span>{t.projects.viewProject}</span>
                <span>↗</span>
              </div>
            </div>

            <div className="projectInfo">
              <div>
                <h3>Villa Adriatic</h3>
                <p>{t.projects.accommodation}</p>
              </div>

              <span>03 / 03</span>
            </div>
          </article>
        </div>
      </section>

      {/* USLUGE */}
      <section className="section services" id="services">
        <div className="sectionHeader servicesHeading reveal">
          <div>
            <p className="sectionNumber">02</p>
            <p className="sectionLabel">{t.services.label}</p>
          </div>

          <h2>
            {t.services.title1}
            <br />
            <em>{t.services.title2}</em>
          </h2>
        </div>

        <div className="servicesList">
          <article className="serviceRow reveal">
            <span className="serviceIndex">01</span>
            <h3>{t.services.webDesign}</h3>
            <p>{t.services.webDesignText}</p>
            <span className="serviceArrow">↗</span>
          </article>

          <article className="serviceRow reveal">
            <span className="serviceIndex">02</span>
            <h3>{t.services.development}</h3>
            <p>{t.services.developmentText}</p>
            <span className="serviceArrow">↗</span>
          </article>

          <article className="serviceRow reveal">
            <span className="serviceIndex">03</span>
            <h3>{t.services.seo}</h3>
            <p>{t.services.seoText}</p>
            <span className="serviceArrow">↗</span>
          </article>

          <article className="serviceRow reveal">
            <span className="serviceIndex">04</span>
            <h3>{t.services.maintenance}</h3>
            <p>{t.services.maintenanceText}</p>
            <span className="serviceArrow">↗</span>
          </article>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement">
        <div className="statementInner reveal">
          <p>{t.statement.small}</p>

          <h2>
            {t.statement.title1}
            <br />
            <em>{t.statement.title2}</em>
          </h2>
        </div>
      </section>

      {/* PROCES */}
      <section className="section process" id="process">
        <div className="processIntro reveal">
          <div>
            <p className="sectionNumber">03</p>
            <p className="sectionLabel">{t.process.label}</p>
          </div>

          <p>{t.process.intro}</p>
        </div>

        <div className="processGrid">
          <article className="processCard reveal">
            <span>01</span>
            <h3>{t.process.step1}</h3>
            <p>{t.process.step1Text}</p>
          </article>

          <article className="processCard reveal">
            <span>02</span>
            <h3>{t.process.step2}</h3>
            <p>{t.process.step2Text}</p>
          </article>

          <article className="processCard reveal">
            <span>03</span>
            <h3>{t.process.step3}</h3>
            <p>{t.process.step3Text}</p>
          </article>

          <article className="processCard reveal">
            <span>04</span>
            <h3>{t.process.step4}</h3>
            <p>{t.process.step4Text}</p>
          </article>
        </div>
      </section>

      {/* O MENI */}
      <section className="section about" id="about">
        <div className="aboutLayout">
          <div className="aboutLabel reveal">
            <p className="sectionNumber">04</p>
            <p className="sectionLabel">{t.about.label}</p>
          </div>

          <div className="aboutMain">
            <h2 className="reveal">
              {t.about.title1}
              <em> {t.about.title2}</em>
            </h2>

            <div className="aboutColumns reveal">
              <p>{t.about.text1}</p>
              <p>{t.about.text2}</p>
            </div>

            <div className="aboutSignature reveal">
              <span>Laura Buzuk</span>
              <p>FOUNDER & WEB DEVELOPER</p>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="contact" id="contact">
        <div className="contactInner reveal">
          <p className="sectionLabel">{t.contact.label}</p>

          <h2>
            {t.contact.title}
            <span>↗</span>
          </h2>

          <div className="contactLayout">
            <p className="contactIntro">
              {t.contact.intro}
            </p>

            <ContactForm t={t.contact} lang={lang} />
          </div>

          <div className="contactDetails">
            <a href="mailto:laurawebstudioinfo@gmail.com">
              <span>{t.contact.email}</span>
              laurawebstudioinfo@gmail.com
            </a>

            <a href="tel:+385957433292">
              <span>{t.contact.phone}</span>
              +385 95 743 3292
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="agencyFooter">
        <div className="footerTop">
          <div className="footerBrand">
            <h3>Laura Web Studio</h3>

            <p>{t.footer.description}</p>

            <a href="#contact" className="footerProjectLink">
              {t.footer.startProject} ↗
            </a>
          </div>

          <div className="footerColumn">
            <p className="footerHeading">
              {t.footer.services}
            </p>

            <a href="#services">
              {t.services.webDesign}
            </a>

            <a href="#services">
              {t.services.development}
            </a>

            <a href="#services">
              {t.services.seo}
            </a>

            <a href="#services">
              {t.services.maintenance}
            </a>
          </div>

          <div className="footerColumn">
            <p className="footerHeading">
              {t.footer.contact}
            </p>

            <a href="tel:+385957433292">
              +385 95 743 3292
            </a>

            <a href="mailto:laurawebstudioinfo@gmail.com">
              laurawebstudioinfo@gmail.com
            </a>

            <p>Split, Croatia</p>
          </div>

          <div className="footerColumn">
            <p className="footerHeading">
              {t.footer.language}
            </p>

            <a
              href="/hr"
              className={lang === "hr" ? "activeLanguage" : ""}
            >
              HR — Hrvatski
            </a>

            <a
              href="/en"
              className={lang === "en" ? "activeLanguage" : ""}
            >
              EN — English
            </a>

            <a
              href="/de"
              className={lang === "de" ? "activeLanguage" : ""}
            >
              DE — Deutsch
            </a>
          </div>
        </div>

        <div className="footerBottom">
          <span>
            © 2026 Laura Web Studio
          </span>

          <div className="footerLegal">
            <a href={`/${lang}/privacy`}>
              {t.footer.privacy}
            </a>

            <a href={`/${lang}/cookies`}>
              {t.footer.cookies}
            </a>
          </div>

          <a href="#" className="backToTop">
            {t.footer.backToTop} ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
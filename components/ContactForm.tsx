"use client";

import { FormEvent, useState } from "react";

type ContactTranslation = {
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

type Props = {
  t: ContactTranslation;
  lang: "hr" | "en" | "de";
};

export default function ContactForm({ t, lang }: Props) {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Slanje nije uspjelo.");
      }

      setFormStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div className="formGroup">
        <label htmlFor="name">{t.name}</label>

        <input
          id="name"
          name="name"
          type="text"
          minLength={2}
          maxLength={100}
          autoComplete="name"
          required
        />
      </div>

      <div className="formRow">
        <div className="formGroup">
          <label htmlFor="email">{t.emailAddress}</label>

          <input
            id="email"
            name="email"
            type="email"
            maxLength={150}
            autoComplete="email"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="phone">{t.phoneNumber}</label>

          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={50}
            autoComplete="tel"
          />
        </div>
      </div>

      <fieldset className="projectType">
        <legend>{t.projectType}</legend>

        <div className="projectTypeOptions">
          <label>
            <input
              type="radio"
              name="projectType"
              value="new-website"
              defaultChecked
            />
            <span>{t.newWebsite}</span>
          </label>

          <label>
            <input type="radio" name="projectType" value="redesign" />
            <span>{t.redesign}</span>
          </label>

          <label>
            <input type="radio" name="projectType" value="other" />
            <span>{t.other}</span>
          </label>
        </div>
      </fieldset>

      <div className="formGroup">
        <label htmlFor="message">{t.message}</label>

        <textarea
          id="message"
          name="message"
          rows={6}
          minLength={10}
          maxLength={5000}
          placeholder={t.messagePlaceholder}
          required
        />
      </div>

      <button
        type="submit"
        className="contactSubmit"
        disabled={formStatus === "sending"}
      >
        {formStatus === "sending" ? "..." : t.submit}
        <span>↗</span>
      </button>

      {formStatus === "success" && (
        <p className="formSuccess" role="status">
          {lang === "hr" &&
            "Hvala! Vaš upit je uspješno poslan. Javit ću vam se uskoro."}
          {lang === "en" &&
            "Thank you! Your enquiry has been sent successfully. I'll get back to you soon."}
          {lang === "de" &&
            "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Ich melde mich bald bei Ihnen."}
        </p>
      )}

      {formStatus === "error" && (
        <p className="formError" role="alert">
          {lang === "hr" &&
            "Poruku nije bilo moguće poslati. Pokušajte ponovno ili mi se javite e-mailom."}
          {lang === "en" &&
            "Your message could not be sent. Please try again or contact me by email."}
          {lang === "de" &&
            "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie mich per E-Mail."}
        </p>
      )}
    </form>
  );
}

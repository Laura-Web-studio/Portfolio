import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim() : "";
    const phone =
      typeof body.phone === "string" ? body.phone.trim() : "";
    const projectType =
      typeof body.projectType === "string" ? body.projectType.trim() : "";
    const selectedPackage =
      typeof body.package === "string" ? body.package.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nedostaju obavezna polja." },
        { status: 400 }
      );
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: "Neispravno ime." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email) || email.length > 150) {
      return NextResponse.json(
        { error: "Neispravna e-mail adresa." },
        { status: 400 }
      );
    }

    if (phone.length > 50) {
      return NextResponse.json(
        { error: "Neispravan broj telefona." },
        { status: 400 }
      );
    }

    const allowedProjectTypes = [
      "new-website",
      "redesign",
      "other",
    ];

    if (
      projectType &&
      !allowedProjectTypes.includes(projectType)
    ) {
      return NextResponse.json(
        { error: "Neispravna vrsta projekta." },
        { status: 400 }
      );
    }

    const allowedPackages = [
      "start",
      "business",
      "custom",
    ];

    if (
      selectedPackage &&
      !allowedPackages.includes(selectedPackage)
    ) {
      return NextResponse.json(
        { error: "Neispravan paket." },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        {
          error:
            "Poruka mora imati između 10 i 5000 znakova.",
        },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message).replaceAll(
      "\n",
      "<br />"
    );

    const projectLabels: Record<string, string> = {
      "new-website": "Nova web stranica",
      redesign: "Redizajn postojeće stranice",
      other: "Ostalo",
    };

    const packageLabels: Record<string, string> = {
      start: "Start",
      business: "Business",
      custom: "Custom",
    };

    const readableProjectType =
      projectLabels[projectType] || "Nije navedeno";

    const readablePackage =
      packageLabels[selectedPackage] || "Nije odabran";

    const subjectPackage = selectedPackage
      ? ` — ${readablePackage}`
      : "";

    const { data, error } = await resend.emails.send({
      from: "Laura Web Studio <onboarding@resend.dev>",
      to: ["laurawebstudioinfo@gmail.com"],
      replyTo: email,
      subject: `Novi upit${subjectPackage} — ${name}`,

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          max-width: 650px;
          margin: 0 auto;
          padding: 30px;
          color: #171717;
          line-height: 1.6;
        ">
          <p style="
            font-size: 12px;
            letter-spacing: 1.5px;
            color: #74796d;
            margin-bottom: 8px;
          ">
            LAURA WEB STUDIO
          </p>

          <h1 style="
            font-size: 28px;
            margin-top: 0;
            margin-bottom: 35px;
          ">
            Novi upit s web stranice
          </h1>

          <table style="
            width: 100%;
            border-collapse: collapse;
          ">
            <tr>
              <td style="
                padding: 12px 0;
                color: #6d6d68;
                width: 170px;
                vertical-align: top;
              ">
                Ime / poslovanje
              </td>
              <td style="
                padding: 12px 0;
                font-weight: 600;
              ">
                ${safeName}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 12px 0;
                color: #6d6d68;
                vertical-align: top;
              ">
                E-mail
              </td>
              <td style="padding: 12px 0;">
                ${safeEmail}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 12px 0;
                color: #6d6d68;
                vertical-align: top;
              ">
                Telefon
              </td>
              <td style="padding: 12px 0;">
                ${safePhone || "Nije navedeno"}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 12px 0;
                color: #6d6d68;
                vertical-align: top;
              ">
                Vrsta projekta
              </td>
              <td style="padding: 12px 0;">
                ${readableProjectType}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 12px 0;
                color: #6d6d68;
                vertical-align: top;
              ">
                Paket
              </td>
              <td style="
                padding: 12px 0;
                font-weight: 600;
              ">
                ${readablePackage}
              </td>
            </tr>
          </table>

          <div style="
            border-top: 1px solid #dddddd;
            margin-top: 25px;
            padding-top: 25px;
          ">
            <p style="
              color: #6d6d68;
              margin-bottom: 10px;
            ">
              Poruka
            </p>
            <p style="
              font-size: 16px;
              margin-top: 0;
            ">
              ${safeMessage}
            </p>
          </div>

          <div style="
            border-top: 1px solid #dddddd;
            margin-top: 35px;
            padding-top: 20px;
            font-size: 12px;
            color: #777777;
          ">
            Poruka je poslana putem kontakt obrasca
            na web stranici Laura Web Studio.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Slanje poruke nije uspjelo." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Došlo je do pogreške." },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import ContactForm from "./ContactForm";
import FooterBadges from "./Lightbox";
import { content } from "./content";
import { Boldify } from "@/lib/text";

function sanitizeSlug(raw: string | string[] | undefined): string | null {
  if (typeof raw !== "string") return null;
  const slug = raw.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
  return slug.length > 0 && slug.length <= 40 ? slug : null;
}

async function resolvePartner(slug: string | null) {
  if (!slug) return null;
  const partner = await prisma.partner.upsert({
    where: { slug },
    update: {},
    create: { slug, name: slug },
  });
  return partner;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const partnerSlug = sanitizeSlug(params.ref);
  const partner = await resolvePartner(partnerSlug);

  const hdrs = await headers();
  await prisma.klick.create({
    data: {
      partner_slug: partner?.slug ?? null,
      pfad: "/",
      referrer: hdrs.get("referer"),
      user_agent: hdrs.get("user-agent"),
    },
  });

  return (
    <>
      <header className="site-header pad-64">
        <a href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="be nice" />
        </a>
        <span className="eyebrow-nav">{content.nav.eyebrow}</span>
      </header>

      {partner && (
        <div className="partner-banner">
          <div className="inner">
            {content.partnerBanner.text.split("{partner}")[0]}
            <span className="name">{partner.name}</span>
            {content.partnerBanner.text.split("{partner}")[1]}
          </div>
        </div>
      )}

      <section className="hero pad-64">
        <span className="eyebrow">{content.hero.eyebrow}</span>
        <h1 className="hero-title">
          {content.hero.titleLine1} <span className="accent">{content.hero.titleAccent}</span>
        </h1>
        <div className="hero-sub-grid">
          <p>{content.hero.sub}</p>
          <div className="cta-stack">
            <a className="btn" href="#kontakt">
              {content.hero.ctaLabel}
            </a>
            <span className="cta-meta">{content.hero.ctaMeta}</span>
          </div>
        </div>
      </section>

      <section className="split-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/clemens.png" alt="Clemens Gutmann" />
        <div className="text">
          <span className="photo-tag tag-sie">{content.photoSection.sieLabel}</span>
          <ul className="photo-list list-sie">
            {content.photoSection.sieItems.map((item, i) => (
              <li key={i}>
                <Boldify text={item} />
              </li>
            ))}
          </ul>

          <span className="photo-tag tag-ich">{content.photoSection.ichLabel}</span>
          <ul className="photo-list list-ich">
            {content.photoSection.ichItems.map((item, i) => (
              <li key={i}>
                <Boldify text={item} />
              </li>
            ))}
          </ul>

          <p className="photo-close">{content.photoSection.close}</p>
        </div>
      </section>

      <section className="block block-dark">
        <div className="wrap-1200">
          <h2>
            <span style={{ color: "var(--green)" }}>{content.whereYouStand.headingAccent}</span>{" "}
            {content.whereYouStand.headingRest}
          </h2>
          <div>
            {content.whereYouStand.paragraphs.map((p, i) => (
              <p className="copy" key={i}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="block block-light">
        <div className="wrap-1200">
          <h2>
            <span style={{ color: "var(--teal)" }}>{content.leadership.headingAccent}</span>{" "}
            {content.leadership.headingRest}
          </h2>
          <div>
            {content.leadership.paragraphs.map((p, i) => (
              <p className="copy" key={i}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="block block-dark">
        <div className="wrap-1200">
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ marginBottom: 12 }}>
              <span style={{ color: "var(--green)" }}>{content.benefits.headingAccent}</span>{" "}
              {content.benefits.headingRest}
            </h2>
            <p className="lead">{content.benefits.lead}</p>
          </div>
          <div>
            {content.benefits.rows.map((row) => (
              <div className="row-label" key={row.title}>
                <h3>{row.title}</h3>
                <p className={row.highlight ? "highlight" : undefined}>{row.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block block-light bio-section">
        <div className="wrap-1200">
          <h2>
            <span style={{ color: "var(--teal)" }}>{content.bio.headingAccent}</span> {content.bio.headingRest}
          </h2>
          <div>
            {content.bio.paragraphs.map((p, i) => (
              <p className="copy" key={i}>
                {p}
              </p>
            ))}
            <div className="manifesto-badge">
              <a href={content.bio.manifestoUrl} target="_blank" rel="noopener">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={content.bio.manifestoBadge} alt="Human-First AI Manifesto Unterstützer" />
              </a>
            </div>
          </div>

          <h3 className="subheading">{content.testimonials.heading}</h3>
          <div className="testimonial-grid">
            {content.testimonials.items.map((t) => (
              <div className="testimonial-card" key={t.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.avatar} alt={t.name} />
                <p className="quote">{t.quote}</p>
                <p className="name">{t.name}</p>
                <p className="role">{t.role}</p>
              </div>
            ))}
          </div>

          <h3 className="subheading" style={{ marginBottom: 8 }}>
            {content.clients.heading}
          </h3>
          <p className="clients-sub">{content.clients.sub}</p>
          <div className="logo-grid">
            {content.clients.logos.map((logo) => (
              <a href={logo.url} target="_blank" rel="noopener" key={logo.alt}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-form-section" id="kontakt">
        <div className="cta-form-grid">
          <div>
            <h2>{content.contact.heading}</h2>
            <div className="intro-text">
              <p>{content.contact.intro}</p>
            </div>
            <a className="btn" href={content.contact.calendlyUrl} target="_blank" rel="noopener">
              {content.contact.calendlyLabel}
            </a>
            <div className="contact-line">
              Oder direkt: <a href={content.contact.phoneHref}>{content.contact.phoneLabel}</a> ·{" "}
              <a href={content.contact.linkedinUrl} target="_blank" rel="noopener">
                LinkedIn
              </a>
            </div>
          </div>
          <ContactForm partnerSlug={partner?.slug ?? null} />
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <div className="stack">
            <a href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo-cropped.png" alt="be nice" />
            </a>
            <span>{content.footer.tagline}</span>
          </div>
        </div>
        <FooterBadges />
        <div className="footer-bottom">
          <span>{content.footer.copyright}</span>
          <div className="links">
            <a href="https://www.nice-network.de">nice-network.de</a>
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutzerklärung</a>
          </div>
        </div>
      </footer>
    </>
  );
}

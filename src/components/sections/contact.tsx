"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const telHref = (value: string) => `tel:${value.replace(/[^+\d]/g, "")}`;

type ContactValue = { text: string; href?: string };

export function Contact() {
  const { language } = useLanguage();
  const t = translations.contact;

  const contactDetails: {
    icon: typeof MapPin;
    label: string;
    values: ContactValue[];
  }[] = [
    {
      icon: MapPin,
      label: t.address[language],
      values: [{ text: t.addressValue[language] }],
    },
    {
      icon: Phone,
      label: t.phone[language],
      values: [
        { text: "02-902-7983", href: telHref("02-902-7983") },
        { text: "02-157-0894", href: telHref("02-157-0894") },
      ],
    },
    {
      icon: Printer,
      label: t.fax[language],
      values: [{ text: "02-902-7985" }],
    },
    {
      icon: Mail,
      label: t.email[language],
      values: [
        { text: "lotus_eme@hotmail.com", href: "mailto:lotus_eme@hotmail.com" },
      ],
    },
  ];

  const departmentContacts = [
    { phone: "086-395-5213", department: t.purchasingSystem[language] },
    { phone: "091-887-5147", department: t.pricingSystem[language] },
    { phone: "086-345-5179", department: t.accountingFinanceLotus[language] },
    { phone: "085-505-3284", department: t.hr[language] },
    { phone: "090-981-0464", department: t.marketing[language] },
  ];

  return (
    <section id="contact" className="relative w-full overflow-hidden py-24 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="container relative mx-auto space-y-16 px-4 md:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">{t.title[language]}</span>
          <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
            {t.title[language]}
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            {t.description[language]}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal className="space-y-3 rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4 py-2">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
                  <detail.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{detail.label}</h3>
                  <div className="space-y-1 text-muted-foreground">
                    {detail.values.map((v, index) =>
                      v.href ? (
                        <Link
                          key={index}
                          href={v.href}
                          className="block transition-colors hover:text-accent"
                        >
                          {v.text}
                        </Link>
                      ) : (
                        <p key={index}>{v.text}</p>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal
            delay={120}
            className="space-y-4 rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm"
          >
            <h3 className="font-semibold text-foreground">
              {t.departmentContacts[language]}
            </h3>
            <div className="space-y-1">
              {departmentContacts.map((contact) => (
                <Link
                  key={contact.phone}
                  href={telHref(contact.phone)}
                  className="group flex items-center gap-4 rounded-lg px-3 py-2.5 text-muted-foreground transition-colors hover:bg-accent/5"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <span>{contact.department}: </span>
                    <span className="font-medium text-foreground transition-colors group-hover:text-accent">
                      {contact.phone}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="space-y-6 text-center">
          <h3 className="font-semibold text-foreground">
            {t.locationMap[language]}
          </h3>
          <div className="flex flex-col items-center gap-4">
            <div className="overflow-hidden rounded-2xl border border-white/10 p-2 shadow-glow">
              <Image
                src="https://img2.pic.in.th/1776412099883.jpg"
                alt="Company Location QR Code"
                width={192}
                height={192}
                className="rounded-lg"
              />
            </div>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-accent/30 hover:border-accent hover:bg-accent/10"
            >
              <Link
                href="https://maps.app.goo.gl/WLQtB7eBRMTWpqBEA"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.viewOnMap[language]}
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

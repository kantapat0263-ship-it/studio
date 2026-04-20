"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export function Contact() {
  const { language } = useLanguage();
  const t = translations.contact;

  const contactDetails = [
    {
      icon: MapPin,
      label: t.address[language],
      value: [t.addressValue[language]],
    },
    {
      icon: Phone,
      label: t.phone[language],
      value: ["02-902-7983", "02-157-0894"],
    },
    { icon: Printer, label: t.fax[language], value: ["02-902-7985"] },
    { icon: Mail, label: t.email[language], value: ["lotus_eme@hotmail.com"] },
  ];

  const departmentContacts = [
    { phone: "086-395-5213", department: t.purchasingSystem[language] },
    { phone: "091-887-5147", department: t.pricingSystem[language] },
    { phone: "086-345-5179", department: t.accountingFinanceLotus[language] },
    { phone: "085-505-3284", department: t.hr[language] },
    { phone: "090-981-0464", department: t.marketing[language] },
  ];

  return (
    <section id="contact" className="w-full bg-card py-16 md:py-24">
      <div className="container mx-auto space-y-12 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-accent sm:text-4xl md:text-5xl">
            {t.title[language]}
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            {t.description[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-4">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4">
                <detail.icon className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">
                    {detail.label}
                  </h3>
                  <div className="space-y-1 text-muted-foreground">
                    {detail.value.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">
              {t.departmentContacts[language]}
            </h3>
            <div className="space-y-3">
              {departmentContacts.map((contact) => (
                <div
                  key={contact.phone}
                  className="flex items-center gap-4 text-muted-foreground"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <span>{contact.department}: </span>
                    <span className="font-medium text-foreground">
                      {contact.phone}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4 text-center">
          <h3 className="font-semibold text-foreground">
            {t.locationMap[language]}
          </h3>
          <div className="mt-4 flex flex-col items-center gap-4">
            <Image
              src="https://img2.pic.in.th/1776412099883.jpg"
              alt="Company Location QR Code"
              width={192}
              height={192}
              className="rounded-md"
            />
            <Button asChild variant="outline">
              <Link
                href="https://maps.app.goo.gl/WLQtB7eBRMTWpqBEA"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.viewOnMap[language]}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { translations } from "@/lib/translations";

function SubmitButton() {
  const { pending } = useFormStatus();
  const { language } = useLanguage();
  const t = translations.contact;
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 md:w-auto"
    >
      {pending ? t.sending[language] : t.sendMessage[language]}
    </Button>
  );
}

export function Contact() {
  const { language } = useLanguage();
  const t = translations.contact;
  const initialState: ContactFormState = {
    message: null,
    errors: {},
    success: false,
  };
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

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
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-6">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-accent sm:text-4xl md:text-5xl">
            {t.title[language]}
          </h2>
          <p className="text-muted-foreground md:text-lg">
            {t.description[language]}
          </p>
          <div className="space-y-4">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4">
                <detail.icon className="h-6 w-6 text-primary" />
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

          <div className="space-y-4 pt-4">
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

          <div className="space-y-4 pt-4">
            <h3 className="font-semibold text-foreground">
              {t.locationMap[language]}
            </h3>
            <div className="flex flex-col items-start gap-4">
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
        <form ref={formRef} action={dispatch} className="space-y-4">
          <Input
            name="name"
            placeholder={t.yourName[language]}
            required
            aria-label="Your Name"
          />
          {state.errors?.name && (
            <p className="text-sm text-destructive">
              {state.errors.name.join(", ")}
            </p>
          )}

          <Input
            name="email"
            type="email"
            placeholder={t.yourEmail[language]}
            required
            aria-label="Your Email"
          />
          {state.errors?.email && (
            <p className="text-sm text-destructive">
              {state.errors.email.join(", ")}
            </p>
          )}

          <Input
            name="subject"
            placeholder={t.subject[language]}
            required
            aria-label="Subject"
          />
          {state.errors?.subject && (
            <p className="text-sm text-destructive">
              {state.errors.subject.join(", ")}
            </p>
          )}

          <Textarea
            name="message"
            placeholder={t.yourMessage[language]}
            rows={5}
            required
            aria-label="Your Message"
          />
          {state.errors?.message && (
            <p className="text-sm text-destructive">
              {state.errors.message.join(", ")}
            </p>
          )}

          <SubmitButton />
        </form>
      </div>
    </section>
  );
}

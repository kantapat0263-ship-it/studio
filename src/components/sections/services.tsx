"use client";

import { services } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export function Services() {
  const { language } = useLanguage();
  const t = translations.services;

  return (
    <section id="services" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-accent sm:text-4xl md:text-5xl">
            {t.title[language]}
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            {t.description[language]}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title[language]}
              className="flex flex-col border-primary/20 bg-card transition-all duration-300 hover:border-accent hover:bg-secondary/50"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary p-3">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {service.title[language]}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col pt-0">
                <ul className="space-y-2 text-left text-sm text-muted-foreground">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

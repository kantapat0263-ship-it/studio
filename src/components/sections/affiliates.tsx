"use client";

import { affiliates } from "@/lib/data";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export function Affiliates() {
  const { language } = useLanguage();
  const t = translations.affiliates;
  return (
    <section id="affiliates" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-accent sm:text-4xl md:text-5xl">
            {t.title[language]}
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            {t.description[language]}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {affiliates.map((company) => (
            <div
              key={company.name}
              className="group flex flex-col items-center justify-start rounded-lg border-2 border-primary/20 bg-card p-8 text-center transition-all duration-300 hover:border-accent"
            >
              <h3 className="font-headline text-2xl font-bold tracking-widest text-foreground transition-colors group-hover:text-accent">
                {company.name}
              </h3>
              <ul className="mt-4 space-y-2 text-left text-sm text-muted-foreground">
                {company.description[language].map((detail:string, index:number) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

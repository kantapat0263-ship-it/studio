"use client";

import { affiliates } from "@/lib/data";
import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export function Affiliates() {
  const { language } = useLanguage();
  const t = translations.affiliates;
  return (
    <section id="affiliates" className="w-full bg-card/40 py-24 md:py-36">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">{t.title[language]}</span>
          <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
            {t.title[language]}
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            {t.description[language]}
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {affiliates.map((company, i) => (
            <Reveal key={company.name} delay={i * 120}>
              <div className="group relative flex h-full flex-col items-center justify-start overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow">
                <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-accent/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <h3 className="font-headline text-2xl font-bold tracking-widest text-foreground transition-colors group-hover:text-accent">
                  {company.name}
                </h3>
                <ul className="mt-5 space-y-2.5 text-left text-sm text-muted-foreground">
                  {company.description[language].map(
                    (detail: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-2.5 mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span>{detail}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

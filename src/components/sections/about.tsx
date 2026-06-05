"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export function About() {
  const { language } = useLanguage();
  const t = translations.about;
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-image");

  const stats = [
    { value: "1996", label: { en: "Established", th: "ก่อตั้ง" } },
    { value: "110+", label: { en: "Professionals", th: "บุคลากร" } },
    { value: "3", label: { en: "Core Systems", th: "ระบบหลัก" } },
  ];

  return (
    <section id="about" className="relative w-full overflow-hidden py-24 md:py-36">
      <div className="container mx-auto grid grid-cols-1 items-center gap-16 px-4 md:grid-cols-2 md:px-6">
        <Reveal className="space-y-6">
          <span className="eyebrow">{t.title[language]}</span>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
            {t.title[language]}
          </h2>
          <p className="text-muted-foreground md:text-lg">{t.p1[language]}</p>

          <div className="border-t border-white/5 pt-6">
            <h3 className="text-xl font-semibold text-foreground">
              {t.teamTitle[language]}
            </h3>
            <p className="mt-2 text-muted-foreground">{t.teamDesc[language]}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2">
            {stats.map((stat) => (
              <div key={stat.value}>
                <div className="font-headline text-3xl font-bold text-accent glow-text">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label[language]}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="group relative h-80 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:h-[460px]">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint={aboutImage.imageHint}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-inset ring-accent/0 transition-all duration-500 group-hover:ring-accent/40" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

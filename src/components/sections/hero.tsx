"use client";

import { LotusLogo } from "@/components/lotus-logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export function Hero() {
  const { language } = useLanguage();
  const t = translations.hero;

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background pt-24 pb-12"
    >
      <Image
        src="https://img1.pic.in.th/images/7aa2a4d1-39a3-4e2d-b513-3e14c5314ca8.png"
        alt="Lotus EME Office Background"
        fill
        className="object-cover opacity-40"
        priority
      />
      {/* Layered atmosphere: dark wash, technical grid, and a breathing accent glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,white_5%,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px] animate-glow-pulse" />

      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 text-center">
        <div className="animate-float">
          <LotusLogo priority />
        </div>

        <span className="eyebrow mt-8 animate-fade-in">
          {t.companyNameEn}
        </span>

        <h1 className="mt-6 max-w-4xl font-headline text-3xl font-bold uppercase leading-tight tracking-tight text-gradient glow-text animate-fade-up sm:text-4xl md:text-5xl lg:text-6xl">
          {t.slogan[language]}
        </h1>

        <p className="mt-6 max-w-2xl text-base text-muted-foreground animate-fade-up md:text-lg">
          {t.companyNameTh}
        </p>

        <Button
          asChild
          size="lg"
          className="group mt-12 rounded-full bg-accent px-8 text-accent-foreground shadow-glow transition-all hover:bg-accent/90 hover:shadow-[0_0_60px_-8px_hsl(var(--glow)/0.6)] animate-fade-up"
        >
          <Link href="#contact">
            {translations.contact.title[language]}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      {/* Bottom fade into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

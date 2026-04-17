"use client";

import Image from "next/image";
import { projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export function Projects() {
  const { language } = useLanguage();
  const t = translations.projects;

  return (
    <section id="projects" className="w-full bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-accent sm:text-4xl md:text-5xl">
            {t.title[language]}
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            {t.description[language]}
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mt-12 w-full"
        >
          <CarouselContent>
            {projects.map((project) => {
              const image = PlaceHolderImages.find(
                (p) => p.id === project.imagePlaceholderId
              );
              return (
                <CarouselItem
                  key={project.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="group overflow-hidden">
                      <CardContent className="relative flex aspect-video items-center justify-center p-0">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={project.title[language]}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={image.imageHint}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-4">
                          <h3 className="text-lg font-bold text-white">
                            {project.title[language]}
                          </h3>
                          <p className="text-sm text-white/80">
                            {project.description[language]}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="ml-14" />
          <CarouselNext className="mr-14" />
        </Carousel>
      </div>
    </section>
  );
}

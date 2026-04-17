import { LotusLogo } from "@/components/lotus-logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background pt-24 pb-12"
    >
      <Image
        src="https://img1.pic.in.th/images/7aa2a4d1-39a3-4e2d-b513-3e14c5314ca8.png"
        alt="Lotus EME Office Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]"></div>
      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 text-center">
        <LotusLogo priority />
        <h2 className="mt-6 text-xl font-medium uppercase text-foreground/80 md:text-2xl">
          LOTUS ELECTRICAL MECHANICAL ENGINEERING CO.,LTD.
        </h2>
        <h2 className="mt-2 text-xl font-medium text-foreground/80 md:text-2xl">
          บริษัท โลตัส อีเลคทริคอล แมคคานิคอล เอ็นจิเนียริ่ง จำกัด
        </h2>

        <Button asChild size="lg" className="mt-12 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#contact">Get a Quote</Link>
        </Button>
        
        <h1 className="mt-8 max-w-4xl font-headline text-2xl font-bold uppercase tracking-wider text-foreground/90 md:text-3xl">
          Engineering excellence for society and environment of the world
        </h1>
      </div>
    </section>
  );
}

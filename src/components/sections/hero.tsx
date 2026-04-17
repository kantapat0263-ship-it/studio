import { LotusLogo } from "@/components/lotus-logo";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const contactInfo = [
    { icon: MapPin, text: "34/26 หมู่ 2 ต.คลองสาม, อ.คลองหลวง, จ.ปทุมธานี 12120" },
    { icon: Phone, text: "02-524-1111, 095-251-1111, 095-251-2222" },
    { icon: Mail, text: "lotus.group.engineering@gmail.com" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background pt-24 pb-12"
    >
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]"></div>
      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 text-center">
        <LotusLogo />
        <h1 className="mt-8 max-w-4xl font-headline text-2xl font-medium uppercase tracking-wider text-foreground/90 md:text-3xl">
          Engineering Excellence <br className="md:hidden" />
          for Society and Environment of the World
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                    <item.icon className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
            ))}
        </div>

        <div className="mt-12">
            <p className="text-sm text-muted-foreground">
            เลขประจำตัวผู้เสียภาษี: 0135560024443
            </p>
        </div>
        
        <Button asChild size="lg" className="mt-12 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#contact">Get a Quote</Link>
        </Button>
      </div>
    </section>
  );
}

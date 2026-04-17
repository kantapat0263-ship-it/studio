import Link from "next/link";
import { navLinks } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { LotusLogo } from "@/components/lotus-logo";

export function Footer() {
  return (
    <footer className="bg-card">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <Link href="#home" className="flex justify-center md:justify-start">
              <LotusLogo width={160} height={120} />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Engineering Excellence for Society and Environment of the World
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <Separator className="my-6 bg-border/50" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lotus Group Engineering. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

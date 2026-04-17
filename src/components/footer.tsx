import Link from "next/link";
import { navLinks } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { LotusLogo } from "@/components/lotus-logo";
import { Facebook } from "lucide-react";

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
              Engineering excellence for society and environment of the world
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
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lotus Electrical Mechanical Engineering Co.,Ltd. All Rights Reserved.
          </p>
          <Link
              href="https://www.facebook.com/profile.php?id=100027862286419"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="Facebook Page"
            >
              <Facebook className="h-6 w-6" />
            </Link>
        </div>
      </div>
    </footer>
  );
}

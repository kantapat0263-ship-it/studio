import { cn } from "@/lib/utils";

export function LotusLogo({ className }: { className?: string }) {
  return (
    <div className={cn("text-center font-headline leading-none", className)}>
      <div className="text-3xl font-bold tracking-[0.2em] text-accent md:text-4xl">
        LOTUS
      </div>
      <div className="text-2xl font-bold tracking-[0.3em] text-accent md:text-3xl">
        GROUP
      </div>
      <div className="mt-2 text-sm font-medium tracking-widest text-foreground/80 md:text-base">
        ENGINEERING
      </div>
    </div>
  );
}

import { affiliates } from "@/lib/data";

export function Affiliates() {
  return (
    <section id="affiliates" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-accent sm:text-4xl md:text-5xl">
            Our Group of Companies
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            We are proud to be part of a larger network of specialized companies, working together to deliver integrated solutions.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {affiliates.map((company) => (
            <div
              key={company.name}
              className="group flex flex-col items-center justify-center rounded-lg border-2 border-primary/20 bg-card p-8 text-center transition-all duration-300 hover:border-accent"
            >
              <h3 className="font-headline text-2xl font-bold tracking-widest text-foreground transition-colors group-hover:text-accent">
                {company.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {company.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

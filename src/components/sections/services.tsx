import { services } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-accent sm:text-4xl md:text-5xl">
            Our Services (Scope of Work)
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            We specialize in providing turnkey contracting services for the core engineering systems within a building.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col text-center items-center border-primary/20 bg-card hover:border-accent hover:bg-secondary/50 transition-all duration-300">
              <CardHeader className="flex items-center gap-4">
                 <div className="rounded-full bg-primary p-4">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                 </div>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col">
                <CardTitle className="mb-2 text-xl font-semibold text-foreground">{service.title}</CardTitle>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

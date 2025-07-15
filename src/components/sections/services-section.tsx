import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function ServicesSection() {
  return (
    <section id="services" className="bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Services I Offer</h2>
          <p className="text-lg text-muted-foreground mt-2 font-body">How I can help you build your next project.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center glassmorphism h-full flex flex-col">
              <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-headline">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground font-body">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

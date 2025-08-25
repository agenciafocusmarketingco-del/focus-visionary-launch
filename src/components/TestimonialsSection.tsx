/**
 * TestimonialsSection - Client testimonials and social proof
 * Showcases success stories and builds trust
 */

import { Star, Quote } from 'lucide-react';
const TestimonialsSection = () => {
  const testimonials = [{
    name: 'Carlos Mendes',
    company: 'TechSolutions',
    role: 'CEO',
    content: 'A Focus Marketing transformou nosso negócio. Em 6 meses, triplicamos nossos leads qualificados e o ROAS chegou a 12x. Profissionalismo e resultados excepcionais.',
    rating: 5,
    results: '+300% leads'
  }, {
    name: 'Ana Silva',
    company: 'Clínica Vida',
    role: 'Diretora',
    content: 'As automações criadas pela Focus otimizaram todo nosso processo de captação. Agora temos um fluxo constante de pacientes qualificados sem esforço manual.',
    rating: 5,
    results: '8.5x ROAS'
  }, {
    name: 'Rafael Costa',
    company: 'E-commerce Plus',
    role: 'Fundador',
    content: 'Estratégia de tráfego pago impecável. A equipe entende profundamente o mercado digital e entrega resultados consistentes mês após mês.',
    rating: 5,
    results: 'R$ 2M+ vendas'
  }];
  const metrics = [{
    value: '+500',
    label: 'Leads Gerados',
    icon: '🎯'
  }, {
    value: '8.2x',
    label: 'ROAS Médio',
    icon: '📈'
  }, {
    value: '47+',
    label: 'Empresas',
    icon: '🏢'
  }, {
    value: '95%',
    label: 'Satisfação',
    icon: '⭐'
  }];

  return (
    <section id="testimonials" className="section-container bg-gradient-to-br from-secondary/5 to-primary/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <Star size={16} />
            <span className="text-sm font-medium">Depoimentos</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl focus-heading text-foreground mb-8">
            O Que Nossos <span className="gradient-text">Clientes Dizem</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Resultados reais de empresas que confiaram na Focus Marketing para transformar seus negócios.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{metric.icon}</div>
              <div className="text-3xl md:text-4xl focus-heading text-primary mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-premium p-6">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              
              <Quote size={24} className="text-primary/20 mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
                <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {testimonial.results}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;
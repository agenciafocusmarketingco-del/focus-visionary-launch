/**
 * TestimonialsSection - Client testimonials and social proof
 * Showcases success stories and builds trust
 */

import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Carlos Mendes',
      company: 'TechSolutions',
      role: 'CEO',
      content: 'A Focus Marketing transformou nosso negócio. Em 6 meses, triplicamos nossos leads qualificados e o ROAS chegou a 12x. Profissionalismo e resultados excepcionais.',
      rating: 5,
      results: '+300% leads'
    },
    {
      name: 'Ana Silva',
      company: 'Clínica Vida',
      role: 'Diretora',
      content: 'As automações criadas pela Focus otimizaram todo nosso processo de captação. Agora temos um fluxo constante de pacientes qualificados sem esforço manual.',
      rating: 5,
      results: '8.5x ROAS'
    },
    {
      name: 'Rafael Costa',
      company: 'E-commerce Plus',
      role: 'Fundador',
      content: 'Estratégia de tráfego pago impecável. A equipe entende profundamente o mercado digital e entrega resultados consistentes mês após mês.',
      rating: 5,
      results: 'R$ 2M+ vendas'
    }
  ];

  const metrics = [
    { value: '+500', label: 'Leads Gerados', icon: '🎯' },
    { value: '8.2x', label: 'ROAS Médio', icon: '📈' },
    { value: '47+', label: 'Empresas', icon: '🏢' },
    { value: '95%', label: 'Satisfação', icon: '⭐' }
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="heading-xl text-foreground mb-6">
          O que nossos <span className="gradient-text">clientes dizem</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Resultados reais de empresas que confiaram na Focus Marketing
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="service-card">
            {/* Quote icon */}
            <Quote className="text-primary mb-4" size={32} />
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="text-primary fill-current" size={16} />
              ))}
            </div>
            
            {/* Content */}
            <p className="text-foreground mb-6 leading-relaxed">
              "{testimonial.content}"
            </p>
            
            {/* Results badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
              {testimonial.results}
            </div>
            
            {/* Author */}
            <div className="pt-4 border-t border-border">
              <div className="font-semibold text-foreground">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 glass-effect rounded-2xl">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl mb-2">{metric.icon}</div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{metric.value}</div>
            <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Logos section */}
      <div className="mt-16 text-center">
        <p className="text-muted-foreground mb-8 font-medium">Empresas que confiam na Focus Marketing</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          {/* Placeholder logos */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 bg-muted/20 rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground font-semibold">Cliente {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
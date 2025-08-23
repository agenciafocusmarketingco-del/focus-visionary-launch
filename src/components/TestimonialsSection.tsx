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
    <section id="testimonials" className="section-container bg-secondary/5">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl focus-heading text-foreground mb-6">
          O que nossos <span className="gradient-text">clientes</span> falam
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Histórias reais de transformação e crescimento exponencial
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <Quote size={24} className="text-primary" />
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed italic">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-primary fill-current" />
              ))}
            </div>
            
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                {testimonial.results}
              </span>
            </div>
            
            <div className="border-t border-border pt-4">
              <div className="font-semibold text-foreground">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              <div className="text-sm text-primary">{testimonial.company}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl mb-2">{metric.icon}</div>
            <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
            <div className="text-muted-foreground text-sm">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TestimonialsSection;
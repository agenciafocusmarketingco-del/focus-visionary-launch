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
  return <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de empresas que confiaram na Focus Marketing
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => <div key={index} className="text-center">
              <div className="text-3xl mb-2">{metric.icon}</div>
              <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-muted-foreground">{metric.label}</div>
            </div>)}
        </div>

        {/* Testimonials */}
        
      </div>
    </section>;
};
export default TestimonialsSection;
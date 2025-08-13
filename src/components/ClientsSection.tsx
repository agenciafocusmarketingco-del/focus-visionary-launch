import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const ClientsSection = () => {
  const testimonials = [
    {
      name: 'Carlos Mendes',
      position: 'CEO, TechStart',
      company: 'Startup de Fintech',
      content: 'A Focus transformou completamente nossa estratégia digital. Em 6 meses, nosso faturamento cresceu 400% com as automações implementadas.',
      rating: 5,
      result: '+400% faturamento'
    },
    {
      name: 'Marina Silva',
      position: 'Diretora de Marketing',
      company: 'E-commerce FashionBrand',
      content: 'O trabalho audiovisual da Focus Estúdios elevou nossa marca a outro patamar. As campanhas geraram mais de 10 milhões de visualizações.',
      rating: 5,
      result: '10M+ views'
    },
    {
      name: 'Roberto Santos',
      position: 'Fundador',
      company: 'ConsultBiz',
      content: 'As automações de IA criadas pela Focus otimizaram nossos processos em 80%. Agora focamos 100% no estratégico, não no operacional.',
      rating: 5,
      result: '+80% eficiência'
    }
  ];

  const clientLogos = [
    'TechStart', 'FashionBrand', 'ConsultBiz', 'InnovaCorp', 'DigitalPro', 'GrowthLab'
  ];

  return (
    <section className="section-padding bg-secondary text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary mb-6">
            <Star size={16} />
            <span className="text-sm font-medium">Depoimentos</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl focus-heading text-white mb-8">
            Clientes que <span className="gradient-text">Confiam</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Histórias reais de transformação e crescimento exponencial
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 card-premium">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote size={24} className="text-primary" />
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-primary fill-current" />
                  ))}
                </div>

                {/* Result Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                    {testimonial.result}
                  </span>
                </div>

                {/* Author */}
                <div className="border-t border-white/20 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.position}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-xl focus-subheading text-white mb-8">
            Empresas que já transformaram com a Focus
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">{logo[0]}</span>
                </div>
                <span className="text-gray-400 text-sm">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-300 text-sm">Taxa de Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">5.0</div>
              <div className="text-gray-300 text-sm">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">24h</div>
              <div className="text-gray-300 text-sm">Tempo de Resposta</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">3 Anos</div>
              <div className="text-gray-300 text-sm">Relacionamento Médio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
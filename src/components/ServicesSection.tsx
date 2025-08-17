/**
 * ServicesSection - Core services offered by Focus Marketing
 */

import { Target, Palette, Zap, Globe, BarChart3 } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: 'Marketing & Growth',
      subtitle: 'Estratégia Digital Completa',
      description: 'Gestão estratégica de tráfego pago, análise de métricas, branding, funis de conversão e posicionamento digital.',
      features: ['Gestão de tráfego pago', 'Análise de métricas avançada', 'Branding e posicionamento', 'Funis de conversão'],
      result: 'ROAS médio de 8.2x'
    },
    {
      icon: Palette,
      title: 'Focus Estúdios',
      subtitle: 'Produção Audiovisual',
      description: 'Filmagens cinematográficas, campanhas publicitárias, produção de conteúdo criativo, roteiros e storytelling visual.',
      features: ['Filmagens cinematográficas', 'Campanhas publicitárias', 'Conteúdo criativo', 'Storytelling visual'],
      result: '+200% engajamento'
    },
    {
      icon: Zap,
      title: 'Tecnologia & Automação',
      subtitle: 'Sistemas Inteligentes',
      description: 'Criação de sistemas, CRMs inteligentes, integrações avançadas, automações para vendas e soluções sob medida.',
      features: ['Sistemas sob medida', 'CRMs inteligentes', 'Integrações avançadas', 'Automações de vendas'],
      result: '70% economia operacional'
    },
    {
      icon: Globe,
      title: 'Consultoria Estratégica',
      subtitle: 'Aceleração de Negócios',
      description: 'Planejamento de campanhas, análise de mercado e estratégias para acelerar o crescimento de negócios.',
      features: ['Planejamento estratégico', 'Análise de mercado', 'Aceleração de crescimento', 'Consultoria personalizada'],
      result: '300% crescimento médio'
    }
  ];

  return (
    <section id="services" className="section-container bg-secondary/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl focus-heading text-foreground mb-6">
          Nossos <span className="gradient-text">Serviços</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Soluções completas que integram marketing, tecnologia e criatividade para resultados escaláveis
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card group cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://wa.me/558596598809?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Focus%20Marketing%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20" + encodeURIComponent(service.title), "_blank")}
          >
            <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
              <service.icon className="text-primary" size={32} />
            </div>
            <h3 className="heading-md text-foreground mb-2">{service.title}</h3>
            <p className="text-primary font-semibold mb-4">{service.subtitle}</p>
            <p className="text-muted-foreground mb-6">{service.description}</p>
            <ul className="space-y-3 mb-6">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="text-primary font-semibold text-sm">Resultado:</div>
              <div className="text-foreground font-bold">{service.result}</div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <a
          href="https://wa.me/558596598809?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Focus%20Marketing%20e%20quero%20mais%20informa%C3%A7%C3%B5es."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero inline-flex items-center space-x-2"
        >
          <span>Solicitar Orçamento</span>
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
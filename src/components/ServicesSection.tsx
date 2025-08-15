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
          <div key={index} className="service-card group">
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
    </section>
  );
};

export default ServicesSection;
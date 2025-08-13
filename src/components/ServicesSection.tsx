/**
 * ServicesSection - Core services offered by Focus Marketing
 */

import { Target, Palette, Zap, Globe, BarChart3 } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: 'Tráfego Pago',
      subtitle: 'Meta Ads & Google Ads',
      description: 'Campanhas otimizadas para gerar leads qualificados e vendas com ROI máximo.',
      features: ['Estratégia de campanhas', 'Otimização de conversão', 'Relatórios detalhados'],
      result: 'ROAS médio de 8.2x'
    },
    {
      icon: Palette,
      title: 'Criação & Conteúdo',
      subtitle: 'Design e Copywriting',
      description: 'Conteúdo visual e textual que converte, engaja e fortalece sua marca.',
      features: ['Design de anúncios', 'Copy persuasivo', 'Criativos para redes sociais'],
      result: '+150% engajamento'
    },
    {
      icon: Zap,
      title: 'Automações',
      subtitle: 'n8n, Make & Zapier',
      description: 'Automatize processos, economize tempo e escale sem aumentar custos operacionais.',
      features: ['Fluxos de nutrição', 'CRM integrado', 'Automação de vendas'],
      result: '70% menos trabalho manual'
    }
  ];

  return (
    <section id="servicos" className="section-container bg-secondary/30">
      <div className="text-center mb-16">
        <h2 className="heading-xl text-foreground mb-6">
          Nossos <span className="gradient-text">Serviços</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Soluções completas em marketing digital para acelerar o crescimento da sua empresa
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
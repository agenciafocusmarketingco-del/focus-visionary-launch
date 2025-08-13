/**
 * ProcessSection - 4-step process visualization
 * Shows how Focus Marketing works with clients
 */

import { Search, Target, Rocket, TrendingUp } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: 'Descoberta',
      description: 'Análise profunda do seu negócio, concorrência e oportunidades de mercado.',
      details: ['Auditoria completa', 'Personas definidas', 'Objetivos claros']
    },
    {
      icon: Target,
      title: 'Estratégia',
      description: 'Criação de plano customizado com foco em resultados e ROI máximo.',
      details: ['Funis otimizados', 'Campanhas planejadas', 'KPIs definidos']
    },
    {
      icon: Rocket,
      title: 'Execução',
      description: 'Implementação das campanhas com monitoramento em tempo real.',
      details: ['Lançamento das campanhas', 'Criação de conteúdo', 'Automações ativas']
    },
    {
      icon: TrendingUp,
      title: 'Escala',
      description: 'Otimização contínua para maximizar resultados e expandir alcance.',
      details: ['Análise de performance', 'Otimizações constantes', 'Crescimento sustentável']
    }
  ];

  return (
    <section className="section-container bg-secondary/50">
      <div className="text-center mb-16">
        <h2 className="heading-xl text-foreground mb-6">
          Nosso Processo em <span className="gradient-text">4 Etapas</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Metodologia comprovada que já gerou milhões em receita para nossos clientes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connection line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary to-transparent z-0" />
            )}
            
            <div className="service-card text-center relative z-10">
              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="text-primary" size={32} />
              </div>
              
              {/* Content */}
              <h3 className="heading-md text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground mb-6">{step.description}</p>
              
              {/* Details */}
              <ul className="space-y-2">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-sm text-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="https://wa.me/5585992416184?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20processo%20da%20Focus%20Marketing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero inline-flex items-center space-x-2"
        >
          <span>Quero Conhecer o Processo</span>
        </a>
      </div>
    </section>
  );
};

export default ProcessSection;
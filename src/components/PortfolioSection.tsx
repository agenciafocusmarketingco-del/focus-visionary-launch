/**
 * PortfolioSection - Portfolio showcase
 */

const PortfolioSection = () => {
  const projects = [
    { 
      title: 'E-commerce Fashion', 
      category: 'Marketing & Growth', 
      result: '15x ROAS',
      metrics: '+1.2M em vendas',
      description: 'Campanha completa de tráfego pago com foco em conversão'
    },
    { 
      title: 'Clínica Médica Premium', 
      category: 'Focus Estúdios + Marketing', 
      result: '+400 leads/mês',
      metrics: '85% taxa conversão',
      description: 'Produção audiovisual + landing pages otimizadas'
    },
    { 
      title: 'SaaS B2B Tecnologia', 
      category: 'Automação + Marketing', 
      result: '70% economia',
      metrics: '300% crescimento',
      description: 'Sistema completo de CRM + automações de vendas'
    },
    { 
      title: 'Startup Fintech', 
      category: 'Consultoria Estratégica', 
      result: '500% crescimento',
      metrics: 'Series A em 8 meses',
      description: 'Estratégia completa de go-to-market e positioning'
    },
    { 
      title: 'Rede de Franquias', 
      category: 'Focus Estúdios', 
      result: '+200% brand awareness',
      metrics: '50 campanhas criativas',
      description: 'Campanha nacional com produção audiovisual completa'
    },
    { 
      title: 'E-learning Platform', 
      category: 'Tecnologia & Marketing', 
      result: '1000+ leads/dia',
      metrics: 'R$ 2M+ faturamento',
      description: 'Plataforma custom + estratégia de crescimento escalável'
    }
  ];

  return (
    <section id="portfolio" className="section-container bg-secondary/20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl focus-heading text-foreground mb-6">
          Cases de <span className="gradient-text">Sucesso</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Resultados reais que transformaram negócios e aceleraram o crescimento de nossos clientes
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card group">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
              {/* Visual indicators */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="text-center z-10">
                <div className="text-3xl font-bold text-primary mb-2">{project.result}</div>
                <div className="text-sm text-muted-foreground">{project.metrics}</div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-primary/20 rounded-full opacity-50" />
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-primary/10 rounded-full" />
            </div>
            
            <div className="p-6">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                {project.category}
              </div>
              <h3 className="text-xl focus-subheading text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-lg">{project.result}</span>
                <span className="text-xs text-muted-foreground">{project.metrics}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
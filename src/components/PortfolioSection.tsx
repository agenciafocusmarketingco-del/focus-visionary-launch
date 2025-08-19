/**
 * PortfolioSection - Portfolio showcase
 */

import portfolioEcommerce from '@/assets/portfolio-ecommerce.jpg';
import portfolioMedical from '@/assets/portfolio-medical.jpg';
import portfolioSaas from '@/assets/portfolio-saas.jpg';
import portfolioFintech from '@/assets/portfolio-fintech.jpg';
import portfolioFranchise from '@/assets/portfolio-franchise.jpg';
import portfolioElearning from '@/assets/portfolio-elearning.jpg';

const PortfolioSection = () => {
  const projects = [
    { 
      title: 'E-commerce Fashion', 
      category: 'Marketing & Growth', 
      result: '15x ROAS',
      metrics: '+1.2M em vendas',
      description: 'Campanha completa de tráfego pago com foco em conversão',
      image: portfolioEcommerce
    },
    { 
      title: 'Clínica Médica Premium', 
      category: 'Focus Estúdios + Marketing', 
      result: '+400 leads/mês',
      metrics: '85% taxa conversão',
      description: 'Produção audiovisual + landing pages otimizadas',
      image: portfolioMedical
    },
    { 
      title: 'SaaS B2B Tecnologia', 
      category: 'Automação + Marketing', 
      result: '70% economia',
      metrics: '300% crescimento',
      description: 'Sistema completo de CRM + automações de vendas',
      image: portfolioSaas
    },
    { 
      title: 'Startup Fintech', 
      category: 'Consultoria Estratégica', 
      result: '500% crescimento',
      metrics: 'Series A em 8 meses',
      description: 'Estratégia completa de go-to-market e positioning',
      image: portfolioFintech
    },
    { 
      title: 'Rede de Franquias', 
      category: 'Focus Estúdios', 
      result: '+200% brand awareness',
      metrics: '50 campanhas criativas',
      description: 'Campanha nacional com produção audiovisual completa',
      image: portfolioFranchise
    },
    { 
      title: 'E-learning Platform', 
      category: 'Tecnologia & Marketing', 
      result: '1000+ leads/dia',
      metrics: 'R$ 2M+ faturamento',
      description: 'Plataforma custom + estratégia de crescimento escalável',
      image: portfolioElearning
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
          <div 
            key={index} 
            className="portfolio-card group cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://wa.me/558596598809?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Focus%20Marketing%20e%20quero%20um%20projeto%20como%20" + encodeURIComponent(project.title), "_blank")}
          >
            <div className="aspect-video bg-cover bg-center bg-no-repeat rounded-lg mb-4 relative overflow-hidden" style={{backgroundImage: `url(${project.image})`}}>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10 text-white">
                  <div className="text-3xl font-bold mb-2">{project.result}</div>
                  <div className="text-sm opacity-90">{project.metrics}</div>
                </div>
              </div>
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

      {/* CTA Section */}
      <div className="text-center mt-16">
        <a
          href="https://wa.me/558596598809?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Focus%20Marketing%20e%20quero%20mais%20informa%C3%A7%C3%B5es."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero inline-flex items-center space-x-2"
        >
          <span>Quero Meu Projeto de Sucesso</span>
        </a>
      </div>
    </section>
  );
};

export default PortfolioSection;
/**
 * PortfolioSection - Portfolio showcase
 */

const PortfolioSection = () => {
  const projects = [
    { title: 'E-commerce Fashion', category: 'Tráfego', result: '15x ROAS' },
    { title: 'Clínica Médica', category: 'Landing', result: '+400 leads' },
    { title: 'SaaS B2B', category: 'Automação', result: '70% economia' }
  ];

  return (
    <section id="portfolio" className="section-container">
      <div className="text-center mb-16">
        <h2 className="heading-xl text-foreground mb-6">
          Nosso <span className="gradient-text">Portfólio</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            <div className="aspect-video bg-muted/20 rounded-lg mb-4"></div>
            <div className="p-6">
              <span className="text-primary font-bold">{project.result}</span>
              <h3 className="heading-md text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
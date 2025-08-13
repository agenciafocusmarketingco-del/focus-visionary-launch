/**
 * HeroSection - Full-screen hero with strong typography and CTAs
 * Starlink-inspired design with dark background and orange accents
 */

import { ChevronDown, MessageCircle, Play } from 'lucide-react';

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5585992416184?text=Ol%C3%A1%2C%20quero%20impulsionar%20minha%20empresa%20com%20tr%C3%A1fego%20pago%20%2B%20automa%C3%A7%C3%B5es.";

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 106, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 106, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <span className="text-sm font-medium text-primary">🚀 Agência #1 em Tráfego Pago + Automações</span>
          </div>

          {/* Main Headline */}
          <h1 className="heading-hero text-foreground mb-6">
            Acelere seu crescimento com{' '}
            <span className="gradient-text">tráfego pago</span>{' '}
            e automações inteligentes
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Estratégia, dados e execução para colocar sua marca no topo.<br />
            <span className="text-primary font-semibold">Resultados reais, escaláveis e mensuráveis.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center space-x-3"
            >
              <MessageCircle size={20} />
              <span>Falar no WhatsApp</span>
            </a>
            
            <button
              onClick={scrollToPortfolio}
              className="btn-secondary inline-flex items-center space-x-3"
            >
              <Play size={18} />
              <span>Ver Portfólio</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+500</div>
              <div className="text-muted-foreground font-medium">Leads Gerados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">8.2x</div>
              <div className="text-muted-foreground font-medium">ROAS Médio</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">47+</div>
              <div className="text-muted-foreground font-medium">Empresas Atendidas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
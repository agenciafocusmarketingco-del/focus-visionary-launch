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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium background with sophisticated effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50">
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 119, 0, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 119, 0, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Hero gradient overlay */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{ background: 'var(--gradient-hero)' }}
        />
        
        {/* Floating premium orbs */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-primary/8 rounded-full blur-xl animate-float delay-2000" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Premium badge with glass effect */}
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect mb-12 animate-fade-in">
            <span className="text-sm font-medium text-primary mr-3">🚀</span>
            <span className="text-sm font-medium text-foreground/90">Agência #1 em Tráfego Pago + Automações</span>
          </div>

          {/* Hero headline with premium typography */}
          <h1 className="text-hero text-foreground mb-8 animate-slide-up">
            Acelere seu crescimento com{' '}
            <span className="gradient-text">tráfego pago</span>{' '}
            e automações inteligentes
          </h1>

          {/* Refined subtitle */}
          <div className="space-y-4 mb-16 animate-fade-in delay-200">
            <p className="text-body-lg text-muted-foreground max-w-4xl mx-auto">
              Estratégia, dados e execução para colocar sua marca no topo.
            </p>
            <p className="text-lg font-semibold text-primary">
              Resultados reais, escaláveis e mensuráveis.
            </p>
          </div>

          {/* Premium CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-scale-in delay-300">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center space-x-3 group"
            >
              <MessageCircle size={20} className="transition-transform group-hover:scale-110" />
              <span>Falar no WhatsApp</span>
            </a>
            
            <button
              onClick={scrollToPortfolio}
              className="btn-secondary inline-flex items-center space-x-3 group"
            >
              <Play size={18} className="transition-transform group-hover:scale-110" />
              <span>Ver Portfólio</span>
            </button>
          </div>

          {/* Enhanced stats with better spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in delay-500">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-primary mb-3 transition-transform group-hover:scale-105">
                +500
              </div>
              <div className="text-muted-foreground font-medium tracking-wide">Leads Gerados</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-primary mb-3 transition-transform group-hover:scale-105">
                8.2x
              </div>
              <div className="text-muted-foreground font-medium tracking-wide">ROAS Médio</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-primary mb-3 transition-transform group-hover:scale-105">
                47+
              </div>
              <div className="text-muted-foreground font-medium tracking-wide">Empresas Atendidas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Refined scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="p-2 rounded-full glass-effect">
          <ChevronDown className="text-primary" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(22, 100, 55, 0.3)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/30"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="animate-float absolute top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-60"></div>
        <div className="animate-float absolute top-40 right-20 w-3 h-3 bg-primary-glow rounded-full opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="animate-float absolute bottom-40 left-20 w-1 h-1 bg-primary rounded-full opacity-80" style={{ animationDelay: '2s' }}></div>
        <div className="animate-float absolute bottom-20 right-10 w-2 h-2 bg-primary-glow rounded-full opacity-50" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Inovação • Tecnologia • Criatividade</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl focus-heading text-white mb-6 leading-tight">
            Impulsionando
            <br />
            <span className="gradient-text">Negócios</span>
            <br />
            para o <span className="text-primary">Futuro</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Unimos <strong className="text-primary">IA</strong>, <strong className="text-primary">automações</strong>, 
            <strong className="text-primary"> marketing</strong> e <strong className="text-primary">produção criativa</strong> para 
            transformar ideias em resultados escaláveis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-hero text-lg px-8 py-4 animate-glow">
              Começar Agora
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4"
            >
              Conheça a Focus
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-300">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5x</div>
              <div className="text-gray-300">Crescimento Médio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-300">Automações Ativas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
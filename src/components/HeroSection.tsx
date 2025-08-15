/**
 * HeroSection - Modern, creative and technological hero section for Focus Agency
 * Vibrant orange accents, black contrast, white clarity
 */

import { ChevronDown, Zap, Network, Cpu, Play } from 'lucide-react';
import heroBg from '@/assets/hero-tech-bg.jpg';
const HeroSection = () => {
  const whatsappLink = "https://wa.me/5585992416184?text=Ol%C3%A1%2C%20quero%20impulsionar%20minha%20empresa%20para%20o%20futuro!";
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Futuristic background with dynamic elements */}
      <div className="absolute inset-0">
        {/* Hero background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroBg})`,
        filter: 'brightness(0.4) contrast(1.2)'
      }} />
        
        {/* Tech overlay pattern */}
        <div className="absolute inset-0 opacity-[0.1]" style={{
        backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(255, 119, 0, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 0, 0.2) 0%, transparent 50%),
              linear-gradient(45deg, transparent 49%, rgba(255, 119, 0, 0.1) 50%, transparent 51%)
            `,
        backgroundSize: '100% 100%, 100% 100%, 20px 20px'
      }} />
        
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-orange-900/20" />
        
        {/* Animated geometric elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-orange-500/20 rounded-full animate-spin" style={{
        animationDuration: '20s'
      }} />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-2 border-orange-400/30 transform rotate-45 animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 border border-white/10 animate-bounce" style={{
        animationDuration: '3s'
      }} />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Zap className="absolute top-1/4 left-1/6 text-orange-500/40 animate-pulse" size={24} />
        <Network className="absolute top-1/3 right-1/5 text-white/30 animate-float" size={32} />
        <Cpu className="absolute bottom-1/3 left-1/3 text-orange-400/50 animate-bounce" size={28} />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-7xl mx-auto">
          {/* Innovation badge */}
          

          {/* Main headline - modern and impactful */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tight animate-slide-up">
            Impulsionando{' '}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Negócios
            </span>
            <br />
            para o{' '}
            <span className="bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent">
              Futuro,
            </span>{' '}
            Hoje.
          </h1>

          {/* Subtitle with tech focus */}
          <div className="space-y-6 mb-16 animate-fade-in delay-200">
            <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto font-light leading-relaxed">
              Unimos inteligência artificial, automações, marketing e criatividade para transformar 
              <span className="text-orange-400 font-medium"> ideias em resultados escaláveis</span>.
            </p>
          </div>

          {/* Premium CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-scale-in delay-300">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative px-12 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-xl shadow-2xl shadow-orange-500/25 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center space-x-3">
                <Zap size={20} className="transition-transform group-hover:scale-110" />
                <span>Solicitar Proposta</span>
              </span>
            </a>
            
            <button onClick={scrollToAbout} className="group px-12 py-5 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 shadow-xl">
              <span className="flex items-center space-x-3">
                <Play size={18} className="transition-transform group-hover:scale-110" />
                <span>Conheça a Focus</span>
              </span>
            </button>
          </div>

          {/* Tech stats with animated counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 animate-fade-in delay-500">
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent rounded-2xl"></div>
              <div className="relative p-8">
                <div className="text-6xl md:text-7xl font-black text-orange-500 mb-4 transition-transform group-hover:scale-110 duration-300">
                  500+
                </div>
                <div className="text-gray-400 font-medium tracking-wider text-lg">Projetos Entregues</div>
              </div>
            </div>
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent rounded-2xl"></div>
              <div className="relative p-8">
                <div className="text-6xl md:text-7xl font-black text-orange-500 mb-4 transition-transform group-hover:scale-110 duration-300">
                  AI+
                </div>
                <div className="text-gray-400 font-medium tracking-wider text-lg">Inteligência Artificial</div>
              </div>
            </div>
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent rounded-2xl"></div>
              <div className="relative p-8">
                <div className="text-6xl md:text-7xl font-black text-orange-500 mb-4 transition-transform group-hover:scale-110 duration-300">
                  24/7
                </div>
                <div className="text-gray-400 font-medium tracking-wider text-lg">Suporte Dedicado</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="p-4 rounded-full bg-orange-500/10 border border-orange-500/30 backdrop-blur-sm">
          <ChevronDown className="text-orange-500" size={28} />
        </div>
      </div>
    </section>;
};
export default HeroSection;
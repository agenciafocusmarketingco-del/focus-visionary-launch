/**
 * Navigation - Premium glass navigation with sticky behavior
 * Professional startup-grade design with micro-interactions
 */

import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, User, LogIn } from 'lucide-react';
import { useAuth } from '@/components/auth/AuthProvider';
import { Link } from 'react-router-dom';
import focusLogo from '/lovable-uploads/af57eb56-bc0e-438c-8760-4bdfc781628e.png';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuth();
  const whatsappLink = "https://wa.me/5585996598809?text=Ol%C3%A1%2C%20quero%20impulsionar%20minha%20empresa%20com%20tr%C3%A1fego%20pago%20%2B%20automa%C3%A7%C3%B5es.";
  const appLink = "https://preview--focus-nexus-dash.lovable.app/auth";
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with premium styling */}
          <div className="flex-shrink-0">
            <img src={focusLogo} alt="Focus Marketing - Agência de Marketing Digital" className="h-12 w-auto transition-all duration-300 hover:scale-105" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('#about')} className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"></button>
            <button onClick={() => scrollToSection('#services')} className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('#focus-studios')} className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">
              Focus Estúdios
            </button>
            <button onClick={() => scrollToSection('#portfolio')} className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">
              Cases
            </button>
            <button onClick={() => scrollToSection('#testimonials')} className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('#contact')} className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">
              Contato
            </button>
          </div>

          {/* Profile Icon & Premium CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Ícone de perfil/app sempre visível */}
            <a 
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border/30 bg-background/10 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110 group"
              title="Acessar App Focus"
            >
              <User size={20} className="text-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
            
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-hero inline-flex items-center space-x-2 group">
              <MessageCircle size={18} className="transition-transform group-hover:scale-110" />
              <span>Começar Agora</span>
            </a>
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-foreground hover:text-primary transition-colors duration-200">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-6 space-y-4 glass-effect rounded-2xl mt-4 p-6">
            <button onClick={() => scrollToSection('#about')} className="block w-full text-left text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2">
              Quem Somos
            </button>
            <button onClick={() => scrollToSection('#services')} className="block w-full text-left text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2">
              Serviços
            </button>
            <button onClick={() => scrollToSection('#focus-studios')} className="block w-full text-left text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2">
              Focus Estúdios
            </button>
            <button onClick={() => scrollToSection('#portfolio')} className="block w-full text-left text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2">
              Cases
            </button>
            <button onClick={() => scrollToSection('#testimonials')} className="block w-full text-left text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('#contact')} className="block w-full text-left text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2">
              Contato
            </button>
            <div className="pt-4 border-t border-border/50 space-y-3">
              <a 
                href={appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-outline justify-center inline-flex items-center space-x-2"
              >
                <User size={18} />
                <span>Acessar App</span>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-hero w-full justify-center inline-flex items-center space-x-2">
                <MessageCircle size={18} />
                <span>Começar Agora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;
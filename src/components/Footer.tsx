import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
const Footer = () => {
  const services = ['Marketing Digital', 'Produção Audiovisual', 'Automação & IA', 'CRM Inteligente', 'Growth Hacking', 'Branding'];
  const company = ['Sobre Nós', 'Portfolio', 'Cases de Sucesso', 'Blog', 'Carreiras', 'Contato'];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-3xl font-bold gradient-text">Focus</span>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Impulsionando negócios para o futuro com inovação, 
                tecnologia e criatividade.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-primary p-2"
                asChild
              >
                <a href="https://www.instagram.com/focusmarketing.co/" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-primary p-2"
                asChild
              >
                <a href="https://www.linkedin.com/company/focus-marketing-co/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-primary p-2">
                <Youtube size={20} />
              </Button>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                    {service}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {company.map((item, index) => <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span className="text-gray-400">Agenciafocusmarketing.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span className="text-gray-400">+55 85 9659-8809</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-gray-400">São Paulo, SP</span>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="mt-6">
              <Button size="sm" className="btn-hero">
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Receba insights sobre IA e Marketing
            </h3>
            <p className="text-gray-400 mb-6">
              Estratégias exclusivas, cases reais e tendências do mercado direto no seu e-mail
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Seu melhor e-mail" className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary" />
              <Button className="btn-hero">
                Inscrever
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 Focus Agency. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Termos
            </a>
            
            {/* Back to Top */}
            <Button variant="ghost" size="sm" onClick={scrollToTop} className="text-gray-400 hover:text-primary p-2">
              <ArrowUp size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
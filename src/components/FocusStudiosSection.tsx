/**
 * FocusStudiosSection - Dedicated section for Focus Studios audiovisual production
 */

import { Camera, Play, Film, Palette, Video, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import focusStudiosMainImage from '@/assets/focus-studios-main.jpg';
import studiosPortfolio1 from '@/assets/studios-portfolio-1.jpg';
import studiosPortfolio2 from '@/assets/studios-portfolio-2.jpg';
import studiosPortfolio3 from '@/assets/studios-portfolio-3.jpg';
import digitalCampaignNew from '@/assets/digital-campaign-new.jpg';


const FocusStudiosSection = () => {
  const whatsappLink = "https://wa.me/558596598809?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Focus%20Marketing%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20Focus%20Est%C3%BAdios.";

  const highlights = [
    {
      icon: Film,
      title: 'Filmagens Cinematográficas',
      description: 'Produção com qualidade de cinema para sua marca'
    },
    {
      icon: Video,
      title: 'Campanhas Publicitárias',
      description: 'Vídeos que vendem e conectam com seu público'
    },
    {
      icon: Palette,
      title: 'Conteúdo Criativo',
      description: 'Storytelling visual que marca e converte'
    },
    {
      icon: Award,
      title: 'Experiências de Alto Impacto',
      description: 'Produções que elevam sua marca ao próximo nível'
    }
  ];

  return (
    <section id="focus-studios" className="section-container bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <Camera size={16} />
            <span className="text-sm font-medium">Focus Estúdios</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl focus-heading text-foreground mb-8">
            O Braço <span className="gradient-text">Criativo</span> da Focus
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            O braço criativo da Focus, onde <strong className="text-primary">ideias ganham vida</strong> em filmes, 
            campanhas e experiências visuais de alto impacto que transformam marcas em referência.
          </p>
        </div>

        {/* Video Showcase */}
        <div className="relative mb-16">
          <Card className="card-premium overflow-hidden">
            <div className="relative aspect-video bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${focusStudiosMainImage})`}}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-lg font-semibold">Showreel Focus Estúdios</p>
                  <p className="text-sm opacity-90">Conheça nossos trabalhos mais impactantes</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="card-premium group cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <highlight.icon size={24} className="text-primary" />
                  </div>
                </div>
                
                <h3 className="text-lg focus-subheading text-foreground mb-3">
                  {highlight.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Grid Placeholder */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl focus-subheading text-foreground text-center mb-12">
            Portfólio <span className="gradient-text">Visual</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Filmagem Cinematográfica', subtitle: 'Campanha Premium', image: studiosPortfolio1 },
              { title: 'Campanha Publicitária', subtitle: 'Produção Criativa', image: studiosPortfolio2 },
              { title: 'Conteúdo Criativo', subtitle: 'Storytelling Visual', image: '/lovable-uploads/ea1b1010-ba34-4aec-a32d-c221641700b0.png' },
              { title: 'Branding Visual', subtitle: 'Identidade Única', image: '/lovable-uploads/e51f5861-9342-4600-bfe2-0477994b5555.png' },
              { title: 'Campanha Digital', subtitle: 'Multiplataforma', image: digitalCampaignNew },
              { title: 'Produção Comercial', subtitle: 'Alto Impacto', image: '/lovable-uploads/47bb9fa1-e249-4b5a-98cf-99943fbfc093.png' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="portfolio-card group cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => window.open("https://lovable.dev/projects/2d36f24e-a4c5-4cef-a65c-6f78dde55502", "_blank")}
              >
                <div className="aspect-video bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: `url(${item.image})`}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <Camera size={24} className="mx-auto mb-2" />
                      <p className="text-sm font-medium">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="card-premium bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl focus-heading text-foreground mb-4">
              Sua Próxima Campanha <span className="gradient-text">Começa Aqui</span>
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transforme sua visão em realidade com produções de alta qualidade que geram resultados reais.
            </p>
            
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center space-x-3 group"
            >
              <Camera size={20} className="transition-transform group-hover:scale-110" />
              <span>Solicitar Orçamento</span>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FocusStudiosSection;
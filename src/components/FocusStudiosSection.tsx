/**
 * FocusStudiosSection - Dedicated section for Focus Studios audiovisual production
 */

import { Camera, Play, Film, Palette, Video, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FocusStudiosSection = () => {
  const whatsappLink = "https://wa.me/5585996598809?text=Ol%C3%A1%2C%20quero%20or%C3%A7ar%20uma%20produ%C3%A7%C3%A3o%20audiovisual%20com%20a%20Focus%20Est%C3%BAdios!";

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

        {/* Video Showcase Placeholder */}
        <div className="relative mb-16">
          <Card className="card-premium overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Play size={32} className="text-primary ml-1" />
                </div>
                <p className="text-muted-foreground">Showreel Focus Estúdios</p>
                <p className="text-sm text-muted-foreground/70">Conheça nossos trabalhos mais impactantes</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 border border-primary/20 rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-primary/30 rotate-45" />
              <div className="absolute top-1/2 left-8 w-6 h-6 bg-primary/10 rounded-full animate-float" />
            </div>
          </Card>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="card-premium group cursor-pointer">
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
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={index} className="portfolio-card group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center">
                  <div className="text-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera size={24} className="text-primary mb-2 mx-auto" />
                    <p className="text-sm text-muted-foreground">Projeto {item}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Campanha Exemplo {item}</h4>
                  <p className="text-sm text-muted-foreground">Produção audiovisual</p>
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
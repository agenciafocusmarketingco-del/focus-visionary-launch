import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Video, 
  Bot, 
  BarChart3, 
  Megaphone, 
  Code, 
  Database, 
  Clapperboard,
  ArrowRight 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      category: 'Marketing & Growth',
      icon: TrendingUp,
      color: 'bg-primary',
      services: [
        { icon: Megaphone, title: 'Gestão de Tráfego Pago', description: 'Google Ads, Meta Ads e campanhas otimizadas para conversão máxima' },
        { icon: BarChart3, title: 'Funis de Conversão', description: 'Estratégias de vendas automatizadas e otimização de performance' },
        { icon: TrendingUp, title: 'Growth & Branding', description: 'Posicionamento estratégico e crescimento acelerado de marca' }
      ]
    },
    {
      category: 'Focus Estúdios',
      icon: Video,
      color: 'bg-secondary',
      services: [
        { icon: Clapperboard, title: 'Produção Audiovisual', description: 'Filmagens cinematográficas e conteúdo criativo de alto impacto' },
        { icon: Video, title: 'Campanhas Publicitárias', description: 'Roteiros, direção e produção completa de campanhas visuais' },
        { icon: Megaphone, title: 'Storytelling Visual', description: 'Narrativas que conectam, engajam e convertem audiências' }
      ]
    },
    {
      category: 'Tecnologia & Automação',
      icon: Bot,
      color: 'bg-gradient-to-br from-primary to-secondary',
      services: [
        { icon: Code, title: 'Sistemas Sob Medida', description: 'Desenvolvimento de plataformas e aplicações personalizadas' },
        { icon: Database, title: 'CRMs Inteligentes', description: 'Automações para vendas, marketing e gestão de relacionamento' },
        { icon: Bot, title: 'Integrações Avançadas', description: 'Conectamos seus sistemas para máxima eficiência operacional' }
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary mb-6">
            <Bot size={16} />
            <span className="text-sm font-medium">Nossos Serviços</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl focus-heading text-white mb-8">
            Soluções <span className="gradient-text">Completas</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Três pilares integrados que impulsionam seu negócio para resultados extraordinários
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center shadow-lg`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-3xl focus-subheading text-white">
                  {category.category}
                </h3>
              </div>

              {/* Services Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                          <service.icon size={20} className="text-primary" />
                        </div>
                        <CardTitle className="text-white text-lg">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl focus-subheading text-white mb-6">
            Pronto para revolucionar seu negócio?
          </h3>
          <Button size="lg" className="btn-hero text-lg px-8 py-4">
            Agendar Reunião Estratégica
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
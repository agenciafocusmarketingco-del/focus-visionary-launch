import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, TrendingUp, Users, Zap } from 'lucide-react';
import portfolioImage from '@/assets/portfolio-grid.jpg';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'E-commerce Revolution',
      category: 'Marketing & Tech',
      results: '+300% conversões',
      description: 'Automação completa de vendas com IA personalizada',
      metrics: ['ROI 450%', '50k leads/mês', '24/7 automação'],
      tags: ['IA', 'E-commerce', 'Automação']
    },
    {
      title: 'Campanha Viral TechCorp',
      category: 'Focus Estúdios',
      results: '10M visualizações',
      description: 'Produção audiovisual que conquistou o mercado',
      metrics: ['10M views', '500% engajamento', 'Award Winner'],
      tags: ['Vídeo', 'Viral', 'Branding']
    },
    {
      title: 'Sistema CRM Inteligente',
      category: 'Tecnologia',
      results: '+250% produtividade',
      description: 'CRM com IA que revolucionou vendas B2B',
      metrics: ['80% automação', '3x velocidade', 'API integrada'],
      tags: ['CRM', 'B2B', 'IA']
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '500%', label: 'ROI Médio dos Clientes' },
    { icon: Users, value: '200+', label: 'Projetos Entregues' },
    { icon: Zap, value: '24/7', label: 'Automações Ativas' }
  ];

  return (
    <section id="portfolio" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <TrendingUp size={16} />
            <span className="text-sm font-medium">Cases de Sucesso</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl focus-heading text-secondary mb-8">
            Resultados que <span className="gradient-text">Falam</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Projetos reais, métricas reais, impacto transformador
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="card-premium text-center">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon size={24} className="text-primary" />
                  </div>
                </div>
                <div className="text-3xl focus-heading text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Visual */}
        <div className="mb-16">
          <Card className="card-premium overflow-hidden">
            <div 
              className="h-64 md:h-96 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${portfolioImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-primary/60 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl focus-subheading mb-4">Portfolio Completo</h3>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-secondary">
                    Ver Todos os Projetos
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-premium group">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {project.category}
                    </Badge>
                    <div className="text-sm font-semibold text-primary">{project.results}</div>
                  </div>
                  
                  <h3 className="text-xl focus-subheading text-secondary mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="space-y-2 mb-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-muted-foreground">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl focus-subheading text-secondary mb-6">
            Seu projeto pode ser o próximo case de sucesso
          </h3>
          <Button size="lg" className="btn-hero text-lg px-8 py-4">
            Vamos Conversar Sobre Seu Projeto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
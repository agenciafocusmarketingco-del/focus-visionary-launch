import { Card, CardContent } from '@/components/ui/card';
import { Brain, Zap, Camera, Target } from 'lucide-react';
const AboutSection = () => {
  const pillars = [{
    icon: Target,
    title: 'Marketing Estratégico',
    description: 'Gestão de tráfego pago, funis de conversão e análise de métricas em tempo real para crescimento acelerado.',
    color: 'text-primary'
  }, {
    icon: Camera,
    title: 'Focus Estúdios',
    description: 'Produção de conteúdo criativo, campanhas publicitárias e storytelling visual que conecta e converte.',
    color: 'text-primary'
  }, {
    icon: Brain,
    title: 'Tecnologia & IA',
    description: 'Sistemas sob medida, automações inteligentes e soluções digitais escaláveis para o futuro.',
    color: 'text-primary'
  }];
  return <section id="about" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <Zap size={16} />
            <span className="text-sm font-medium">A Essência Focus</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl focus-heading mb-8 text-gray-50">
            Mais que uma <span className="gradient-text">Agência</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A Focus é um <strong>ecossistema de inovação</strong> que conecta marketing, tecnologia e produção audiovisual 
            para criar experiências que posicionam marcas à frente do seu tempo.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="card-premium mb-16 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl focus-subheading mb-4 text-gray-50">
              Nossa Missão
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed italic">
              "Construir e impulsionar negócios para o futuro e presente, 
              com <span className="text-primary font-semibold">inovação</span>, 
              <span className="text-primary font-semibold">eficiência</span> e 
              <span className="text-primary font-semibold">impacto real</span>."
            </p>
          </CardContent>
        </Card>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => <Card key={index} className="card-premium group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <pillar.icon size={32} className={pillar.color} />
                  </div>
                </div>
                
                <h3 className="text-xl focus-subheading text-secondary mb-4">
                  {pillar.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Utilizamos o poder da <strong className="text-primary">inteligência artificial</strong>, 
            <strong className="text-primary"> automações inteligentes</strong> e 
            <strong className="text-primary"> estratégias criativas</strong> para resultados extraordinários.
          </p>
        </div>
      </div>
    </section>;
};
export default AboutSection;
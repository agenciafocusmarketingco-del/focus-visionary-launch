import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight, Rocket, Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@focus.com.br',
      description: 'Resposta em até 2 horas'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '+55 11 99999-9999',
      description: 'Atendimento 24/7'
    },
    {
      icon: MapPin,
      title: 'Escritório',
      content: 'São Paulo, SP',
      description: 'Atendemos todo Brasil'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <Rocket size={16} />
            <span className="text-sm font-medium">Vamos Conversar</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl focus-heading text-secondary mb-8">
            Sua marca está pronta <br />
            para o <span className="gradient-text">Futuro?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Agende uma reunião estratégica gratuita e descubra como podemos 
            impulsionar seu negócio para o próximo nível
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-premium">
            <CardContent className="p-8">
              <h3 className="text-2xl focus-subheading text-secondary mb-6">
                Agendar Reunião Estratégica
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-secondary">Nome*</Label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome completo"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-secondary">Empresa*</Label>
                    <Input 
                      id="company" 
                      placeholder="Nome da empresa"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-secondary">E-mail*</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="seu@email.com"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-secondary">WhatsApp*</Label>
                    <Input 
                      id="phone" 
                      placeholder="(11) 99999-9999"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget" className="text-secondary">Investimento Mensal</Label>
                  <select 
                    id="budget"
                    className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background"
                  >
                    <option value="">Selecione uma faixa</option>
                    <option value="5k-15k">R$ 5k - R$ 15k</option>
                    <option value="15k-30k">R$ 15k - R$ 30k</option>
                    <option value="30k-50k">R$ 30k - R$ 50k</option>
                    <option value="50k+">R$ 50k+</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-secondary">Conte-nos sobre seu projeto*</Label>
                  <Textarea 
                    id="message"
                    placeholder="Descreva seu desafio atual e objetivos..."
                    className="mt-2 h-32"
                  />
                </div>

                <Button size="lg" className="btn-hero w-full text-lg">
                  Quero Impulsionar Meu Negócio
                  <ArrowRight className="ml-2" size={20} />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Resposta garantida em até 2 horas úteis
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & CTA */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-premium">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <info.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary">{info.title}</h4>
                      <p className="text-lg text-primary font-medium">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick CTA */}
            <Card className="card-premium bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl focus-subheading text-secondary mb-4">
                  Pressa? Fale Conosco Agora
                </h3>
                <p className="text-muted-foreground mb-6">
                  Atendimento direto no WhatsApp para projetos urgentes
                </p>
                <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  WhatsApp Direto
                  <Phone className="ml-2" size={18} />
                </Button>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">2h</div>
                <div className="text-sm text-muted-foreground">Tempo Resposta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Reuniões Gratuitas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
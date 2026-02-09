import { ArrowRight, Star, Shield, Clock, CheckCircle2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/steam-cleaning.jpeg';

const Hero = () => {
  const features = [
    { icon: Shield, text: 'Гарантия качества' },
    { icon: Clock, text: 'Выезд в день заказа' },
    { icon: Star, text: 'Рейтинг 4.9' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Сочи · Адлер · Красная Поляна</span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Чистота,
              <br />
              <span className="text-gradient">
                которая вдохновляет
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Профессиональный клининг для вашего дома и офиса. 
              Используем эко-средства и современное оборудование.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border shadow-sm"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8 shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 hero-gradient" asChild>
                <a href="tel:+79002885255">
                  <Phone className="w-4 h-4 mr-2" />
                  +7 900 288-52-55
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 hover:-translate-y-0.5 transition-transform" asChild>
                <a href="#pricing">
                  Узнать цены
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="relative lg:pl-12">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img 
                src={heroImage} 
                alt="Профессиональная уборка - Империя Блеска" 
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Stats on image */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl p-3 text-center">
                    <span className="block font-heading text-2xl font-bold text-primary">5+</span>
                    <span className="text-xs text-muted-foreground">Лет опыта</span>
                  </div>
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl p-3 text-center">
                    <span className="block font-heading text-2xl font-bold text-secondary">1000+</span>
                    <span className="text-xs text-muted-foreground">Клиентов</span>
                  </div>
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl p-3 text-center">
                    <span className="block font-heading text-2xl font-bold">4.9</span>
                    <span className="text-xs text-muted-foreground">Рейтинг</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-card rounded-xl shadow-lg border border-border animate-float">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Эко-средства</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 lg:left-8 px-4 py-2 bg-card rounded-xl shadow-lg border border-border animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Застрахованы</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

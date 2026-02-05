import { ArrowRight, Star, Shield, Clock, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/steam-cleaning.jpeg';

const Hero = () => {
  const features = [
    { icon: Shield, text: 'Гарантия качества', color: 'bg-primary' },
    { icon: Clock, text: 'Выезд в день заказа', color: 'bg-secondary' },
    { icon: Star, text: 'Рейтинг 4.9', color: 'bg-accent' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Colorful Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Animated Blobs */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-br from-secondary/30 to-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Decorative Elements */}
      <div className="absolute top-40 left-20 w-4 h-4 bg-primary rounded-full animate-bounce" />
      <div className="absolute top-60 right-40 w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-40 left-1/3 w-5 h-5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full hero-gradient text-white shadow-lg glow-effect">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Сочи · Адлер · Красная Поляна</span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-gradient">Чистота,</span>
              <br />
              которая
              <br />
              <span className="text-gradient-warm">
                вдохновляет
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
              Профессиональный клининг для вашего дома и офиса. 
              Используем эко-средства и современное оборудование.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border-2 border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:border-primary/50"
                >
                  <div className={`w-8 h-8 rounded-xl ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full px-10 py-7 text-lg shadow-2xl glow-effect hover:scale-105 transition-all hero-gradient" asChild>
                <a href="tel:+79002885255">
                  <Phone className="w-5 h-5 mr-2" />
                  +7 900 288-52-55
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 py-7 text-lg border-2 hover:bg-secondary hover:text-white hover:border-secondary transition-all" asChild>
                <a href="#pricing">
                  Узнать цены
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="relative lg:pl-8">
            {/* Main Image with colorful border */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl glow-effect">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 hero-gradient rounded-3xl blur-sm" />
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="Профессиональная уборка - Империя Блеска" 
                  className="w-full h-[520px] object-cover"
                />
                {/* Colorful overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-accent/20" />
                
                {/* Stats on image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg">
                      <span className="block font-heading text-3xl font-bold text-primary">5+</span>
                      <span className="text-sm font-medium text-muted-foreground">Лет опыта</span>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg">
                      <span className="block font-heading text-3xl font-bold text-secondary">1000+</span>
                      <span className="text-sm font-medium text-muted-foreground">Клиентов</span>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg">
                      <span className="block font-heading text-3xl font-bold text-accent">4.9</span>
                      <span className="text-sm font-medium text-muted-foreground">Рейтинг</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 px-5 py-3 gradient-cool rounded-2xl shadow-xl text-white animate-float">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold">Эко-средства</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 lg:left-2 px-5 py-3 gradient-warm rounded-2xl shadow-xl text-white animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Застрахованы</span>
              </div>
            </div>

            <div className="absolute top-1/2 -right-4 px-4 py-2 gradient-purple rounded-xl shadow-xl text-white animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span className="text-sm font-semibold">Топ-1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

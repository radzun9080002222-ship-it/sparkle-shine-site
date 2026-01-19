import { ArrowRight, Star, Shield, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const features = [
    { icon: Shield, text: 'Гарантия качества' },
    { icon: Clock, text: 'Выезд за 2 часа' },
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
              <span className="text-sm font-medium text-primary">Работаем с 2010 года</span>
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
              <Button size="lg" className="rounded-full px-8 shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 hero-gradient">
                Рассчитать стоимость
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 hover:-translate-y-0.5 transition-transform">
                Наши работы
              </Button>
            </div>
          </div>

          {/* Right Content - Visual Card */}
          <div className="relative lg:pl-12">
            {/* Main Card */}
            <div className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border overflow-hidden card-elevated">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="space-y-2 p-4 rounded-2xl bg-primary/5">
                  <span className="text-4xl font-heading font-bold text-primary">14+</span>
                  <p className="text-sm text-muted-foreground">Лет опыта</p>
                </div>
                <div className="space-y-2 p-4 rounded-2xl bg-secondary/10">
                  <span className="text-4xl font-heading font-bold text-secondary">5000+</span>
                  <p className="text-sm text-muted-foreground">Довольных клиентов</p>
                </div>
                <div className="space-y-2 p-4 rounded-2xl bg-muted">
                  <span className="text-4xl font-heading font-bold">150+</span>
                  <p className="text-sm text-muted-foreground">Сотрудников</p>
                </div>
                <div className="space-y-2 p-4 rounded-2xl bg-primary/5">
                  <span className="text-4xl font-heading font-bold text-primary">24/7</span>
                  <p className="text-sm text-muted-foreground">Поддержка</p>
                </div>
              </div>

              {/* Bottom section */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-card flex items-center justify-center"
                      >
                        <span className="text-xs font-bold">{['А', 'М', 'Е', 'Д'][i - 1]}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">500+ отзывов</p>
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

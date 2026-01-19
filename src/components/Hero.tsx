import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles, Star, Users } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Star, value: "12+", label: "лет опыта" },
    { icon: CheckCircle, value: "13 000+", label: "уборок" },
    { icon: Users, value: "5 000+", label: "клиентов" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground font-medium text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Профессиональный клининг в Сочи
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6">
              Империя Блеска —
              <span className="text-gradient block">чистота без хлопот</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Ваш надёжный партнер по уборке частной и коммерческой недвижимости. 
              Берём все хлопоты на себя — быстро, качественно, с гарантией результата.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="hero-gradient font-semibold text-lg h-14 px-8">
                Узнать стоимость
              </Button>
              <Button size="lg" variant="outline" className="font-semibold text-lg h-14 px-8">
                Наши услуги
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-2xl">{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 hero-gradient rounded-3xl rotate-3 opacity-20" />
              <div className="relative bg-card rounded-3xl overflow-hidden card-elevated">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop"
                  alt="Профессиональный клининг"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl card-elevated animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-heading font-bold">100%</div>
                    <div className="text-sm text-muted-foreground">Гарантия качества</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

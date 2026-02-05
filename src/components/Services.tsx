import { Home, Building2, Sparkles, Sofa, Wind, Warehouse, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Уборка квартир',
      description: 'Поддерживающая, генеральная и уборка после ремонта',
      price: 'от 2 500 ₽',
      gradient: 'gradient-cool',
      bgGradient: 'from-primary/20 via-primary/10 to-accent/20',
    },
    {
      icon: Building2,
      title: 'Уборка офисов',
      description: 'Ежедневная и периодическая уборка коммерческих помещений',
      price: 'от 80 ₽/м²',
      gradient: 'gradient-warm',
      bgGradient: 'from-secondary/20 via-secondary/10 to-orange-500/20',
    },
    {
      icon: Sparkles,
      title: 'Генеральная уборка',
      description: 'Глубокая очистка всех поверхностей с дезинфекцией',
      price: 'от 4 500 ₽',
      gradient: 'gradient-purple',
      bgGradient: 'from-accent/20 via-purple-500/10 to-pink-500/20',
    },
    {
      icon: Sofa,
      title: 'Химчистка мебели',
      description: 'Профессиональная чистка диванов, кресел и матрасов',
      price: 'от 1 500 ₽',
      gradient: 'gradient-warm',
      bgGradient: 'from-orange-500/20 via-secondary/10 to-red-500/20',
    },
    {
      icon: Wind,
      title: 'Мойка окон',
      description: 'Мытьё окон, витрин и фасадов на любой высоте',
      price: 'от 400 ₽/окно',
      gradient: 'gradient-cool',
      bgGradient: 'from-cyan-500/20 via-primary/10 to-blue-500/20',
    },
    {
      icon: Warehouse,
      title: 'После ремонта',
      description: 'Полная уборка с удалением строительной пыли',
      price: 'от 5 000 ₽',
      gradient: 'gradient-purple',
      bgGradient: 'from-violet-500/20 via-accent/10 to-fuchsia-500/20',
    },
  ];

  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Colorful Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-5 py-2 rounded-full hero-gradient text-white text-sm font-semibold mb-6 shadow-lg">
            Наши услуги
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Полный спектр
            <br />
            <span className="text-gradient">клининговых услуг</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Выберите подходящую услугу или закажите комплексную уборку со скидкой 15%
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl p-8 border-2 border-border hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t-2 border-border group-hover:border-white/30 transition-colors">
                  <span className="font-heading text-xl font-bold text-primary">{service.price}</span>
                  <button className={`w-12 h-12 rounded-2xl bg-muted group-hover:${service.gradient} flex items-center justify-center transition-all group-hover:shadow-lg`}>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="rounded-full px-12 py-7 text-lg shadow-2xl glow-effect hero-gradient hover:scale-105 transition-transform">
            Смотреть все услуги
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

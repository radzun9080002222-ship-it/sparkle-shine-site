import { Home, Building2, Sparkles, Sofa, Wind, Warehouse, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Уборка квартир',
      description: 'Поддерживающая, генеральная и уборка после ремонта',
      price: 'от 2 500 ₽',
      color: 'from-primary/20 to-primary/5',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: Building2,
      title: 'Уборка офисов',
      description: 'Ежедневная и периодическая уборка коммерческих помещений',
      price: 'от 80 ₽/м²',
      color: 'from-secondary/20 to-secondary/5',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary',
    },
    {
      icon: Sparkles,
      title: 'Генеральная уборка',
      description: 'Глубокая очистка всех поверхностей с дезинфекцией',
      price: 'от 4 500 ₽',
      color: 'from-primary/20 to-primary/5',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: Sofa,
      title: 'Химчистка мебели',
      description: 'Профессиональная чистка диванов, кресел и матрасов',
      price: 'от 1 500 ₽',
      color: 'from-secondary/20 to-secondary/5',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary',
    },
    {
      icon: Wind,
      title: 'Мойка окон',
      description: 'Мытьё окон, витрин и фасадов на любой высоте',
      price: 'от 400 ₽/окно',
      color: 'from-primary/20 to-primary/5',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: Warehouse,
      title: 'После ремонта',
      description: 'Полная уборка с удалением строительной пыли',
      price: 'от 5 000 ₽',
      color: 'from-secondary/20 to-secondary/5',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Наши услуги
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Полный спектр
            <span className="text-gradient"> клининговых услуг</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Выберите подходящую услугу или закажите комплексную уборку со скидкой 15%
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-heading text-lg font-bold text-primary">{service.price}</span>
                  <button className="w-10 h-10 rounded-xl bg-muted group-hover:bg-primary flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25 hero-gradient">
            Смотреть все услуги
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: 'Базовая',
      subtitle: 'Поддерживающая уборка',
      price: 'от 3 500',
      unit: '₽',
      period: 'за визит',
      icon: Zap,
      features: [
        'Влажная уборка полов',
        'Протирка пыли с поверхностей',
        'Уборка санузла',
        'Мытьё посуды',
        'Вынос мусора',
      ],
      popular: false,
      buttonVariant: 'outline' as const,
    },
    {
      name: 'Оптимум',
      subtitle: 'Генеральная уборка',
      price: 'от 6 500',
      unit: '₽',
      period: 'за визит',
      icon: Star,
      features: [
        'Всё из тарифа "Базовая"',
        'Мытьё окон изнутри',
        'Чистка кухонной техники',
        'Уборка внутри шкафов',
        'Глажка белья до 10 вещей',
        'Дезинфекция поверхностей',
      ],
      popular: true,
      buttonVariant: 'default' as const,
    },
    {
      name: 'Премиум',
      subtitle: 'All Inclusive',
      price: 'от 10 000',
      unit: '₽',
      period: 'за визит',
      icon: Crown,
      features: [
        'Всё из тарифа "Оптимум"',
        'Химчистка 1 единицы мебели',
        'Мытьё холодильника',
        'Чистка духовки',
        'Организация пространства',
        'Ароматизация помещения',
        'Приоритетный выезд',
      ],
      popular: false,
      buttonVariant: 'outline' as const,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Тарифы
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Прозрачные
            <span className="text-gradient"> цены</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Никаких скрытых платежей. Цена фиксируется до начала работ.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'hero-gradient text-primary-foreground shadow-2xl shadow-primary/30 scale-105 z-10'
                  : 'bg-card border border-border hover:border-primary/30 hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full shadow-lg">
                  Популярный выбор
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                plan.popular ? 'bg-primary-foreground/20' : 'bg-primary/10'
              }`}>
                <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
              </div>

              {/* Plan Info */}
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl lg:text-5xl font-bold">{plan.price}</span>
                  <span className="text-xl">{plan.unit}</span>
                </div>
                <span className={`text-sm ${plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                      plan.popular ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? 'secondary' : plan.buttonVariant}
                className={`w-full rounded-full ${
                  plan.popular 
                    ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg' 
                    : ''
                }`}
              >
                Выбрать тариф
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Нужна индивидуальная оценка?{' '}
            <a href="#contacts" className="text-primary hover:underline font-medium">
              Свяжитесь с нами
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

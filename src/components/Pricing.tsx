import { Check, Star, Zap, Crown, Sparkles } from 'lucide-react';
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
      gradient: 'gradient-cool',
      features: [
        'Влажная уборка полов',
        'Протирка пыли с поверхностей',
        'Уборка санузла',
        'Мытьё посуды',
        'Вынос мусора',
      ],
      popular: false,
    },
    {
      name: 'Оптимум',
      subtitle: 'Генеральная уборка',
      price: 'от 6 500',
      unit: '₽',
      period: 'за визит',
      icon: Star,
      gradient: 'hero-gradient',
      features: [
        'Всё из тарифа "Базовая"',
        'Мытьё окон изнутри',
        'Чистка кухонной техники',
        'Уборка внутри шкафов',
        'Глажка белья до 10 вещей',
        'Дезинфекция поверхностей',
      ],
      popular: true,
    },
    {
      name: 'Премиум',
      subtitle: 'All Inclusive',
      price: 'от 10 000',
      unit: '₽',
      period: 'за визит',
      icon: Crown,
      gradient: 'gradient-warm',
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
    },
  ];

  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      {/* Colorful Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-secondary/20 to-pink-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-5 py-2 rounded-full gradient-purple text-white text-sm font-semibold mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Тарифы
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Прозрачные
            <br />
            <span className="text-gradient-warm">цены</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Никаких скрытых платежей. Цена фиксируется до начала работ.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 ${
                plan.popular
                  ? 'bg-card shadow-2xl scale-105 z-10 border-2 border-transparent'
                  : 'bg-card border-2 border-border hover:border-primary/30 hover:shadow-2xl'
              }`}
            >
              {/* Gradient border for popular */}
              {plan.popular && (
                <div className="absolute -inset-0.5 hero-gradient rounded-3xl -z-10" />
              )}
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 gradient-warm text-white text-sm font-bold rounded-full shadow-xl">
                  ⭐ Популярный выбор
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${plan.gradient} flex items-center justify-center mb-8 shadow-lg`}>
                <plan.icon className="w-8 h-8 text-white" />
              </div>

              {/* Plan Info */}
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className={`font-heading text-5xl font-bold ${plan.popular ? 'text-gradient' : ''}`}>{plan.price}</span>
                  <span className="text-2xl font-bold text-muted-foreground">{plan.unit}</span>
                </div>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full ${plan.gradient} flex items-center justify-center shrink-0`}>
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                size="lg"
                className={`w-full rounded-full py-7 text-lg shadow-xl transition-all hover:scale-105 ${
                  plan.popular 
                    ? 'hero-gradient glow-effect' 
                    : plan.gradient
                }`}
              >
                Выбрать тариф
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-lg">
            Нужна индивидуальная оценка?{' '}
            <a href="#contacts" className="text-gradient font-bold hover:underline">
              Свяжитесь с нами →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

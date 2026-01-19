import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Поддерживающая",
    price: "70-120",
    unit: "₽/м²",
    description: "Регулярная уборка для поддержания чистоты",
    features: [
      "Влажная уборка всех поверхностей",
      "Уборка пыли и паутины",
      "Мытьё полов",
      "Уборка санузлов",
      "Вынос мусора",
    ],
    popular: false,
  },
  {
    name: "Генеральная",
    price: "200",
    unit: "₽/м²",
    description: "Глубокая уборка всего помещения",
    features: [
      "Всё из поддерживающей уборки",
      "Мытьё окон изнутри",
      "Чистка бытовой техники снаружи",
      "Уборка под мебелью",
      "Чистка плинтусов и дверей",
      "Уборка балкона/лоджии",
    ],
    popular: true,
  },
  {
    name: "All Inclusive",
    price: "500",
    unit: "₽/м²",
    description: "Все виды уборки под ключ",
    features: [
      "Всё из генеральной уборки",
      "Химчистка мягкой мебели",
      "Мытьё люстр и светильников",
      "Глубокая чистка холодильника",
      "Чистка духовки внутри",
      "Любые дополнительные работы",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground font-medium text-sm mb-4">
            Тарифы
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Прозрачные цены <span className="text-gradient">без скрытых платежей</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий тариф или закажите индивидуальный расчёт для вашего помещения
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-card rounded-2xl p-6 card-elevated ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-3 py-1 hero-gradient rounded-full text-primary-foreground text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Популярный
                  </div>
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <h3 className="font-heading font-bold text-xl mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">от</span>
                  <span className="font-heading font-bold text-4xl">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.unit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full font-semibold ${plan.popular ? 'hero-gradient' : ''}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                Заказать
              </Button>
            </div>
          ))}
        </div>

        {/* Subscription CTA */}
        <div className="mt-16 bg-card rounded-3xl p-8 md:p-12 card-elevated max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-2">
                Уборка по подписке — <span className="text-gradient">экономия до 25%</span>
              </h3>
              <p className="text-muted-foreground">
                Закажите регулярную уборку и получите выгодную цену + приоритетное обслуживание
              </p>
            </div>
            <Button size="lg" className="hero-gradient font-semibold whitespace-nowrap">
              Узнать подробнее
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

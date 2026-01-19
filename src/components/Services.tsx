import { Home, Building, Sofa, Sparkles, Ship, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Генеральная уборка",
    price: "от 200₽/м²",
    description: "Обновление внешнего вида помещения после длительного использования, подготовка к сдаче или продаже.",
  },
  {
    icon: Wrench,
    title: "Послеремонтная уборка",
    price: "от 300₽/м²",
    description: "Подготовим помещение к торжественной сдаче в эксплуатацию после строительных работ.",
  },
  {
    icon: Sparkles,
    title: "Поддерживающая уборка",
    price: "от 70₽/м²",
    description: "Регулярная безупречная чистота в квартире, коттедже, загородном доме.",
  },
  {
    icon: Sofa,
    title: "Химчистка мебели",
    price: "от 350₽/м²",
    description: "Удаление загрязнений с мягкой мебели, восстановление цвета, выведение пятен.",
  },
  {
    icon: Building,
    title: "Уборка офисов",
    price: "от 50₽/м²",
    description: "Ежедневная уборка офисных помещений любой площади с гибким графиком.",
  },
  {
    icon: Ship,
    title: "Уборка яхт и катеров",
    price: "по запросу",
    description: "Профессиональный клининг маломерных судов с учётом специфики морского транспорта.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground font-medium text-sm mb-4">
            Наши услуги
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Профессиональная уборка <span className="text-gradient">любых помещений</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            От квартир до коммерческих объектов — мы справимся с любой задачей качественно и в срок
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-card rounded-2xl p-6 card-elevated animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="font-heading font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-primary font-semibold mb-3">{service.price}</p>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              
              <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary/80">
                Подробнее →
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="hero-gradient font-semibold">
            Рассчитать стоимость уборки
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

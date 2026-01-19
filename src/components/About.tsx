import { Shield, Clock, Users, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% ответственность",
    description: "Полная материальная ответственность за сохранность вашего имущества",
  },
  {
    icon: Clock,
    title: "Гибкий график",
    description: "Работаем в удобное для вас время, включая выходные и праздники",
  },
  {
    icon: Users,
    title: "Опытная команда",
    description: "Проверенные сотрудники с обучением и регулярной аттестацией",
  },
  {
    icon: Award,
    title: "Гарантия качества",
    description: "Если что-то не устроит — исправим бесплатно в течение 24 часов",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground font-medium text-sm mb-4">
              О компании
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Более 12 лет мы создаём <span className="text-gradient">чистоту и уют</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              «Империя Блеска» — это команда профессионалов, которая с 2012 года помогает 
              жителям Сочи и Адлера поддерживать чистоту в домах и офисах. Мы выполнили 
              более 13 000 уборок и знаем, как сделать ваше пространство идеально чистым.
            </p>
            <p className="text-muted-foreground mb-8">
              Наш подход — это внимание к деталям, использование профессионального 
              оборудования и экологичных средств, а также честные цены без скрытых платежей.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-card rounded-2xl overflow-hidden card-elevated aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=500&fit=crop"
                  alt="Уборка квартиры"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <div className="font-heading font-bold text-4xl text-primary">12+</div>
                <div className="text-muted-foreground">лет на рынке</div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-secondary/10 rounded-2xl p-6 text-center">
                <div className="font-heading font-bold text-4xl text-secondary">25%</div>
                <div className="text-muted-foreground">экономия по подписке</div>
              </div>
              <div className="bg-card rounded-2xl overflow-hidden card-elevated aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop"
                  alt="Чистый дом"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { useState } from 'react';
import { Home, Building2, Store, Sofa, Warehouse, Wrench, ChevronDown } from 'lucide-react';

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Home,
      title: 'Уборка квартир и домов',
      price: 'от 3 500 ₽',
      color: 'from-primary/20 to-primary/5',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
      items: [
        { name: 'Поддерживающая уборка (1-комн.)', price: 'от 3 500 ₽' },
        { name: 'Поддерживающая уборка (2-комн.)', price: 'от 4 500 ₽' },
        { name: 'Поддерживающая уборка (3-комн.)', price: 'от 5 500 ₽' },
        { name: 'Генеральная уборка (1-комн.)', price: 'от 6 500 ₽' },
        { name: 'Генеральная уборка (2-комн.)', price: 'от 8 500 ₽' },
        { name: 'Генеральная уборка (3-комн.)', price: 'от 10 500 ₽' },
      ],
    },
    {
      icon: Building2,
      title: 'Уборка офисов',
      price: 'от 20 ₽/м²',
      color: 'from-secondary/20 to-secondary/5',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary',
      items: [
        { name: 'Ежедневная уборка офиса', price: 'от 20 ₽/м²' },
        { name: 'Генеральная уборка офиса', price: 'от 80 ₽/м²' },
        { name: 'Уборка после мероприятий', price: 'от 50 ₽/м²' },
        { name: 'Мойка окон в офисе', price: 'от 400 ₽/окно' },
      ],
    },
    {
      icon: Store,
      title: 'Коммерческие объекты',
      price: 'по договору',
      color: 'from-primary/20 to-primary/5',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
      items: [
        { name: 'Торговые площади', price: 'от 25 ₽/м²' },
        { name: 'Рестораны и кафе', price: 'от 30 ₽/м²' },
        { name: 'Гостиницы и апартаменты', price: 'от 2 500 ₽' },
        { name: 'Склады и производства', price: 'по договору' },
      ],
    },
    {
      icon: Sofa,
      title: 'Химчистка',
      price: 'от 1 500 ₽',
      color: 'from-secondary/20 to-secondary/5',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary',
      items: [
        { name: 'Химчистка дивана', price: 'от 2 500 ₽' },
        { name: 'Химчистка кресла', price: 'от 1 500 ₽' },
        { name: 'Химчистка матраса', price: 'от 2 000 ₽' },
        { name: 'Химчистка ковра', price: 'от 300 ₽/м²' },
        { name: 'Химчистка штор', price: 'от 500 ₽/м²' },
      ],
    },
    {
      icon: Warehouse,
      title: 'Уборка после ремонта',
      price: 'от 5 000 ₽',
      color: 'from-primary/20 to-primary/5',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
      items: [
        { name: 'Послеремонтная уборка (1-комн.)', price: 'от 5 000 ₽' },
        { name: 'Послеремонтная уборка (2-комн.)', price: 'от 7 000 ₽' },
        { name: 'Послеремонтная уборка (3-комн.)', price: 'от 9 000 ₽' },
        { name: 'Послеремонтная уборка дома', price: 'от 12 000 ₽' },
      ],
    },
    {
      icon: Wrench,
      title: 'Дополнительные услуги',
      price: 'от 400 ₽',
      color: 'from-secondary/20 to-secondary/5',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary',
      items: [
        { name: 'Мытьё окон', price: 'от 400 ₽/окно' },
        { name: 'Мытьё холодильника', price: 'от 1 500 ₽' },
        { name: 'Чистка духовки', price: 'от 1 500 ₽' },
        { name: 'Глажка белья', price: 'от 500 ₽' },
        { name: 'Уборка балкона', price: 'от 1 500 ₽' },
      ],
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
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
            Скидка новому клиенту <span className="text-primary font-bold">10%</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              {/* Clickable Header */}
              <button
                onClick={() => toggle(index)}
                className="relative z-10 w-full p-6 text-left"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <span className="font-heading text-lg font-bold text-primary mt-1 block">{service.price}</span>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 mt-1 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {/* Expandable Price List */}
              <div className={`relative z-10 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <div className="px-6 space-y-2 border-t border-border mx-6 pt-4">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2">
                      <span className="text-sm text-muted-foreground">{item.name}</span>
                      <span className="text-sm font-bold text-primary whitespace-nowrap ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import { CheckCircle2, Users, Award, Leaf, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const advantages = [
    {
      icon: Users,
      title: 'Опытная команда',
      description: 'Более 150 обученных специалистов',
    },
    {
      icon: Leaf,
      title: 'Эко-средства',
      description: 'Безопасно для детей и животных',
    },
    {
      icon: Award,
      title: 'Гарантия качества',
      description: 'Бесплатная переделка в течение 24ч',
    },
    {
      icon: Clock,
      title: 'Работаем быстро',
      description: 'Выезд в день обращения',
    },
  ];

  const checklist = [
    'Фиксированные цены без скрытых доплат',
    'Современное профессиональное оборудование',
    'Страхование ответственности до 1 млн ₽',
    'Контроль качества после каждой уборки',
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -right-32 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            {/* Main Visual Block */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 p-1">
              <div className="bg-card rounded-[22px] p-8 md:p-12">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent">
                    <span className="block font-heading text-5xl md:text-6xl font-bold text-gradient">
                      14
                    </span>
                    <span className="text-muted-foreground text-sm mt-2 block">Лет на рынке</span>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent">
                    <span className="block font-heading text-5xl md:text-6xl font-bold text-foreground">
                      5K+
                    </span>
                    <span className="text-muted-foreground text-sm mt-2 block">Клиентов</span>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-muted to-transparent">
                    <span className="block font-heading text-5xl md:text-6xl font-bold text-foreground">
                      98%
                    </span>
                    <span className="text-muted-foreground text-sm mt-2 block">Рекомендуют</span>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent">
                    <span className="block font-heading text-5xl md:text-6xl font-bold" style={{ background: 'linear-gradient(135deg, hsl(42 85% 55%) 0%, hsl(168 65% 38%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      150
                    </span>
                    <span className="text-muted-foreground text-sm mt-2 block">Специалистов</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-card rounded-2xl shadow-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-heading font-bold">№1 в Москве</p>
                  <p className="text-sm text-muted-foreground">по версии клиентов</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                О компании
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Мы делаем
                <span className="text-gradient"> чистоту </span>
                доступной
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                «Империя Блеска» — это команда профессионалов, которая заботится о чистоте 
                вашего пространства с 2010 года. Мы используем только проверенные методы 
                и экологичные средства.
              </p>
            </div>

            {/* Advantages Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className="space-y-3 pt-4">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25 hero-gradient">
              Узнать больше о нас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

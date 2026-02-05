import { CheckCircle2, Users, Award, Leaf, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import teamImage from '@/assets/team.jpeg';
import windowImage from '@/assets/window-cleaning.jpeg';

const About = () => {
  const advantages = [
    {
      icon: Users,
      title: 'Опытная команда',
      description: 'Обученные специалисты с опытом',
      color: 'gradient-cool',
    },
    {
      icon: Leaf,
      title: 'Эко-средства',
      description: 'Безопасно для детей и животных',
      color: 'gradient-warm',
    },
    {
      icon: Award,
      title: 'Гарантия качества',
      description: 'Бесплатная переделка в течение 24ч',
      color: 'gradient-purple',
    },
    {
      icon: Clock,
      title: 'Работаем быстро',
      description: 'Выезд в день обращения',
      color: 'hero-gradient',
    },
  ];

  const checklist = [
    'Фиксированные цены без скрытых доплат',
    'Современное профессиональное оборудование',
    'Страхование ответственности',
    'Контроль качества после каждой уборки',
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Colorful Decorative Elements */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-64 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-secondary/20 to-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-gradient-to-br from-accent/20 to-pink-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Visual with Photos */}
          <div className="relative">
            {/* Main Photo with gradient border */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl glow-effect">
              <div className="absolute -inset-1 hero-gradient rounded-3xl blur-sm" />
              <div className="relative">
                <img 
                  src={teamImage} 
                  alt="Команда Империя Блеска" 
                  className="w-full h-[450px] object-cover rounded-3xl"
                />
                {/* Colorful overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-accent/30 rounded-3xl" />
              </div>
            </div>
            
            {/* Secondary Photo - overlapping */}
            <div className="absolute -bottom-10 -right-6 w-52 h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden md:block glow-warm">
              <img 
                src={windowImage} 
                alt="Мытье окон" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -left-6 px-6 py-4 gradient-warm rounded-2xl shadow-2xl text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading font-bold text-lg">№1 в Сочи</p>
                  <p className="text-sm opacity-90">по версии клиентов</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-5 py-2 rounded-full gradient-purple text-white text-sm font-semibold mb-6 shadow-lg">
                О компании
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Мы делаем
                <br />
                <span className="text-gradient">чистоту</span>
                <span className="text-gradient-warm"> доступной</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                «Империя Блеска» — это команда профессионалов в Сочи, которая заботится о чистоте 
                вашего пространства. Мы обслуживаем Сочи, Адлер и Красную Поляну, используя 
                только проверенные методы и экологичные средства.
              </p>
            </div>

            {/* Advantages Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-card border-2 border-border hover:border-transparent hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shrink-0 shadow-lg`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className="space-y-4 pt-4">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full gradient-cool flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button size="lg" className="rounded-full px-10 py-7 text-lg shadow-2xl glow-warm gradient-warm hover:scale-105 transition-transform" asChild>
              <a href="#contacts">Связаться с нами</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

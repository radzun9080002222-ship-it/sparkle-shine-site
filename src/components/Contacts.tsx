import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contacts = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Телефон',
      value: '+7 900 288-52-55',
      href: 'tel:+79002885255',
      gradient: 'gradient-cool',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'imperiableska2025@gmail.com',
      href: 'mailto:imperiableska2025@gmail.com',
      gradient: 'gradient-warm',
    },
    {
      icon: MapPin,
      label: 'Адрес',
      value: 'г. Сочи, ул. Донская, 12',
      href: 'https://maps.google.com/?q=Сочи,ул.Донская,12',
      gradient: 'gradient-purple',
    },
    {
      icon: Clock,
      label: 'Зона обслуживания',
      value: 'Сочи, Адлер, Красная Поляна',
      href: null,
      gradient: 'hero-gradient',
    },
  ];

  return (
    <section id="contacts" className="py-28 relative overflow-hidden">
      {/* Colorful Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-secondary/5" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-secondary/20 to-pink-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-5 py-2 rounded-full hero-gradient text-white text-sm font-semibold mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Контакты
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Готовы
            <span className="text-gradient"> помочь?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Свяжитесь с нами любым удобным способом или оставьте заявку
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-3xl bg-card border-2 border-border hover:border-transparent hover:shadow-2xl transition-all hover:-translate-y-1 relative overflow-hidden"
                >
                  {item.href ? (
                    <a href={item.href} className="flex items-start gap-4 relative z-10">
                      <div className={`w-14 h-14 rounded-2xl ${item.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="font-bold text-lg">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 relative z-10">
                      <div className={`w-14 h-14 rounded-2xl ${item.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="font-bold text-lg">{item.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social/Messenger Links */}
            <div className="p-6 rounded-3xl hero-gradient text-white shadow-2xl glow-effect">
              <p className="font-heading font-bold text-lg mb-4">Напишите нам в мессенджер</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">WhatsApp</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  <span className="font-semibold">Telegram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-10 rounded-3xl bg-card border-2 border-border shadow-2xl relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="font-heading text-3xl font-bold mb-2">Оставить заявку</h3>
                <p className="text-muted-foreground text-lg mb-8">
                  Заполните форму и мы свяжемся с вами в течение 15 минут
                </p>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-bold">Имя</label>
                      <Input
                        placeholder="Как к вам обращаться?"
                        className="rounded-2xl h-14 bg-muted/50 border-2 border-border focus:border-primary text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold">Телефон</label>
                      <Input
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        className="rounded-2xl h-14 bg-muted/50 border-2 border-border focus:border-primary text-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold">Email</label>
                    <Input
                      type="email"
                      placeholder="example@mail.ru"
                      className="rounded-2xl h-14 bg-muted/50 border-2 border-border focus:border-primary text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем помещении и пожеланиях..."
                      rows={4}
                      className="rounded-2xl bg-muted/50 border-2 border-border focus:border-primary resize-none text-lg"
                    />
                  </div>

                  <Button size="lg" className="w-full rounded-full py-8 text-lg shadow-2xl glow-effect hero-gradient hover:scale-105 transition-transform">
                    Отправить заявку
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="#" className="text-primary font-semibold hover:underline">политикой конфиденциальности</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contacts = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Телефон',
      value: '+7 (495) 123-45-67',
      href: 'tel:+74951234567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@imperiableska.ru',
      href: 'mailto:info@imperiableska.ru',
    },
    {
      icon: MapPin,
      label: 'Адрес',
      value: 'Москва, ул. Примерная, д. 1',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Режим работы',
      value: 'Пн-Вс: 8:00 - 22:00',
      href: null,
    },
  ];

  return (
    <section id="contacts" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-background" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Контакты
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Готовы
            <span className="text-gradient"> помочь?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Свяжитесь с нами любым удобным способом или оставьте заявку
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  {item.href ? (
                    <a href={item.href} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social/Messenger Links */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <p className="font-heading font-bold mb-3">Напишите нам в мессенджер</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <Send className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Telegram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-3xl bg-card border border-border shadow-xl">
              <h3 className="font-heading text-2xl font-bold mb-2">Оставить заявку</h3>
              <p className="text-muted-foreground mb-6">
                Заполните форму и мы свяжемся с вами в течение 15 минут
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <Input
                      placeholder="Как к вам обращаться?"
                      className="rounded-xl h-12 bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="rounded-xl h-12 bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="example@mail.ru"
                    className="rounded-xl h-12 bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем помещении и пожеланиях..."
                    rows={4}
                    className="rounded-xl bg-muted/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button size="lg" className="w-full rounded-full shadow-lg shadow-primary/25 hero-gradient">
                  Отправить заявку
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

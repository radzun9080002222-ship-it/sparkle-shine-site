import { MapPin, Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contacts = [
  {
    icon: MapPin,
    title: "Адреса",
    lines: ["г. Сочи, ул. Донская, 5", "г. Сочи, ул. Изумрудная, 17"],
  },
  {
    icon: Phone,
    title: "Телефоны",
    lines: ["+7 (988) 123-45-67", "+7 (862) 987-65-43"],
  },
  {
    icon: Clock,
    title: "Время работы",
    lines: ["Пн-Вс: 08:00 - 21:00", "Без выходных"],
  },
];

const Contacts = () => {
  return (
    <section id="contacts" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground font-medium text-sm mb-4">
            Контакты
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Свяжитесь с нами <span className="text-gradient">прямо сейчас</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку или позвоните — мы ответим на все вопросы и рассчитаем стоимость
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-8">
              {contacts.map((contact) => (
                <div key={contact.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">{contact.title}</h3>
                    {contact.lines.map((line) => (
                      <p key={line} className="text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 card-elevated">
            <h3 className="font-heading font-bold text-xl mb-6">Оставить заявку</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Ваше имя" className="h-12" />
                <Input placeholder="Телефон" type="tel" className="h-12" />
              </div>
              <Input placeholder="Email" type="email" className="h-12" />
              <Textarea placeholder="Сообщение или описание задачи" className="min-h-[120px] resize-none" />
              <Button className="w-full h-12 hero-gradient font-semibold">
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

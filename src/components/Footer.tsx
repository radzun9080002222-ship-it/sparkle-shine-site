import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: 'Уборка квартир', href: '#services' },
      { name: 'Уборка офисов', href: '#services' },
      { name: 'Химчистка', href: '#services' },
      { name: 'После ремонта', href: '#services' },
      { name: 'Доп. услуги', href: '#services' },
    ],
    company: [
      { name: 'О компании', href: '#about' },
      { name: 'Наша команда', href: '#about' },
      { name: 'Отзывы клиентов', href: '#reviews' },
    ],
    legal: [
      { name: 'Политика конфиденциальности', href: '#' },
      { name: 'Договор оферты', href: '#' },
      { name: 'Реквизиты', href: '#' },
    ],
  };

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Империя Блеска" className="w-16 h-16 object-contain" />
              <div>
                <span className="font-heading text-2xl font-extrabold">Империя Блеска</span>
                <p className="text-sm font-medium text-background/60">Клининговая компания</p>
              </div>
            </a>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Профессиональный клининг в Сочи, Адлере и Красной Поляне. Ежедневно с 8:00 до 20:00.
            </p>
            <div className="space-y-3">
              <a href="tel:+79002885255" className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +7 900 288-52-55
              </a>
              <a href="mailto:imperiableska2025@gmail.com" className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                imperiableska2025@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4" />
                г. Сочи, ул. Донская, 12
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-6">Услуги</h4>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold mb-6">Компания</h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold mb-6">Документы</h4>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {currentYear} Империя Блеска. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://wa.me/79002885255" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-background/50 hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a href="https://t.me/+79002885255" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-background/50 hover:text-primary transition-colors">
                <Send className="w-4 h-4" />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

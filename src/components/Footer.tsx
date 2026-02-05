import { Sparkles, MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: 'Уборка квартир', href: '#services' },
      { name: 'Уборка офисов', href: '#services' },
      { name: 'Генеральная уборка', href: '#services' },
      { name: 'Химчистка мебели', href: '#services' },
      { name: 'Мойка окон', href: '#services' },
    ],
    company: [
      { name: 'О компании', href: '#about' },
      { name: 'Наша команда', href: '#about' },
      { name: 'Отзывы клиентов', href: '#' },
      { name: 'Вакансии', href: '#' },
    ],
    legal: [
      { name: 'Политика конфиденциальности', href: '#' },
      { name: 'Договор оферты', href: '#' },
      { name: 'Реквизиты', href: '#' },
    ],
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Top Border */}
      <div className="h-1 hero-gradient" />
      
      {/* Main Footer */}
      <div className="bg-foreground text-background relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#" className="flex items-center gap-3 mb-8 group">
                <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="font-heading text-2xl font-bold">Империя Блеска</span>
                  <p className="text-sm text-background/60">Клининговая компания</p>
                </div>
              </a>
              <p className="text-background/70 leading-relaxed mb-8">
                Профессиональный клининг в Сочи, Адлере и Красной Поляне. Делаем чистоту доступной!
              </p>
              <div className="space-y-4">
                <a href="tel:+79002885255" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  +7 900 288-52-55
                </a>
                <a href="mailto:imperiableska2025@gmail.com" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  imperiableska2025@gmail.com
                </a>
                <div className="flex items-center gap-3 text-background/70">
                  <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  г. Сочи, ул. Донская, 12
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-bold text-xl mb-6">Услуги</h4>
              <ul className="space-y-4">
                {links.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading font-bold text-xl mb-6">Компания</h4>
              <ul className="space-y-4">
                {links.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-heading font-bold text-xl mb-6">Документы</h4>
              <ul className="space-y-4">
                {links.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-20 pt-8 border-t border-background/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="flex items-center gap-2 text-background/50">
                © {currentYear} Империя Блеска. Сделано с 
                <Heart className="w-4 h-4 text-secondary fill-secondary" />
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="px-5 py-2.5 rounded-full bg-background/10 text-background/70 hover:bg-primary/20 hover:text-primary transition-all">
                  WhatsApp
                </a>
                <a href="#" className="px-5 py-2.5 rounded-full bg-background/10 text-background/70 hover:bg-primary/20 hover:text-primary transition-all">
                  Telegram
                </a>
                <a href="#" className="px-5 py-2.5 rounded-full bg-background/10 text-background/70 hover:bg-primary/20 hover:text-primary transition-all">
                  VK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

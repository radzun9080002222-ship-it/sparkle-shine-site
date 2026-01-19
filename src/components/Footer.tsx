import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-tight">Империя</span>
              <span className="font-heading font-bold text-lg leading-tight text-primary">Блеска</span>
            </div>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#services" className="text-background/70 hover:text-background transition-colors">
              Услуги
            </a>
            <a href="#about" className="text-background/70 hover:text-background transition-colors">
              О нас
            </a>
            <a href="#pricing" className="text-background/70 hover:text-background transition-colors">
              Цены
            </a>
            <a href="#contacts" className="text-background/70 hover:text-background transition-colors">
              Контакты
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-background/50 text-sm">
            © 2024 Империя Блеска. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

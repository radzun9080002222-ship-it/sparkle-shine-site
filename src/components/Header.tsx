import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Sparkles } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Услуги" },
    { href: "#about", label: "О нас" },
    { href: "#pricing", label: "Цены" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-tight">Империя</span>
              <span className="font-heading font-bold text-lg leading-tight text-gradient">Блеска</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+79881234567" className="flex items-center gap-2 text-foreground font-semibold">
              <Phone className="w-4 h-4 text-primary" />
              +7 (988) 123-45-67
            </a>
            <Button className="hero-gradient font-semibold">
              Заказать уборку
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-up">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:+79881234567" className="flex items-center gap-2 text-foreground font-semibold py-2">
                <Phone className="w-4 h-4 text-primary" />
                +7 (988) 123-45-67
              </a>
              <Button className="hero-gradient font-semibold w-full">
                Заказать уборку
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

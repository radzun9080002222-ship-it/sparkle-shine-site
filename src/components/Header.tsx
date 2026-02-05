import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'О нас', href: '#about' },
    { name: 'Цены', href: '#pricing' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-xl shadow-xl border-b border-primary/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl hero-gradient flex items-center justify-center shadow-lg glow-effect group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-xl font-bold text-gradient">
                Империя Блеска
              </span>
              <p className="text-xs text-muted-foreground -mt-0.5">Клининговая компания</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-5 py-2.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 hero-gradient rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+79002885255" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-colors">
              <Phone className="w-4 h-4" />
              +7 900 288-52-55
            </a>
            <Button className="rounded-full px-8 py-6 shadow-xl glow-effect hover:scale-105 transition-all hero-gradient" asChild>
              <a href="#contacts">Заказать уборку</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-2xl hero-gradient text-white shadow-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-2 pt-4 border-t border-border">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-4 rounded-2xl text-lg font-semibold hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
            <Button className="mt-4 rounded-full py-6 text-lg hero-gradient shadow-xl" asChild>
              <a href="#contacts">Заказать уборку</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

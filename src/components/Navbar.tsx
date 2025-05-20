import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const contactMessage = 'Bună! Aș dori să vă contactez pentru mai multe informații.';
const contactUrl = `https://wa.me/40754472368?text=${encodeURIComponent(contactMessage)}`;

const navLinks = [
  { name: "Acasă", to: "home" },
  { name: "Servicii", to: "services" },
  { name: "Galerie", to: "gallery" },
  { name: "Contact", to: contactUrl, isExternal: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto h-full relative">
        <div className="relative h-full flex items-center justify-between px-4">
          <button 
            onClick={() => scrollToSection('home')}
            className={`flex items-center gap-2 lg:gap-4 transition-opacity duration-300 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="relative overflow-hidden shrink-0">
              <img 
                src="/images/logo.png" 
                alt="LEO Construct logo" 
                className={`transition-all duration-500 rounded object-contain ${
                  scrolled ? 'h-9 w-9 lg:h-12 lg:w-12' : 'h-11 w-11 lg:h-16 lg:w-16'
                }`}
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold transition-all duration-500 tracking-wider whitespace-nowrap ${
                scrolled ? 'text-base lg:text-2xl' : 'text-lg lg:text-3xl'
              } text-white drop-shadow-sm`}>LEO CONSTRUCT</span>
              <span className="hidden sm:block text-orange-400 text-xs lg:text-sm tracking-[0.2em] uppercase whitespace-nowrap drop-shadow-sm">Excelență în Construcții</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              link.isExternal ? (
                <a
                  key={link.to}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden font-medium text-base xl:text-lg tracking-wide px-2 py-1 text-white uppercase transition-all duration-300
                  before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-orange-500 
                  before:-bottom-0 before:left-0 before:origin-left before:scale-x-0 hover:before:scale-x-100
                  after:content-[''] after:absolute after:w-[6px] after:h-[6px] after:bg-orange-500 after:rounded-full
                  after:top-1/2 after:-translate-y-1/2 after:-left-10 after:transition-all after:duration-300
                  hover:after:left-0 hover:text-orange-200"
                >
                  {link.name}
                </a>
              ) : (
                <button 
                  key={link.to}
                  onClick={() => scrollToSection(link.to)}
                  className="relative overflow-hidden font-medium text-base xl:text-lg tracking-wide px-2 py-1 text-white uppercase transition-all duration-300
                  before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-orange-500 
                  before:-bottom-0 before:left-0 before:origin-left before:scale-x-0 hover:before:scale-x-100
                  after:content-[''] after:absolute after:w-[6px] after:h-[6px] after:bg-orange-500 after:rounded-full
                  after:top-1/2 after:-translate-y-1/2 after:-left-10 after:transition-all after:duration-300
                  hover:after:left-0 hover:text-orange-200"
                >
                  {link.name}
                </button>
              )
            ))}
          </div>

          <button
            className="lg:hidden relative z-10 p-2 text-white hover:text-orange-400 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Deschide meniul"
          >
            {open ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-slate-900 shadow-xl transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        style={{ top: '60px' }}
      >
        <div className={`flex flex-col items-center justify-start min-h-[calc(100vh-60px)] transition-all duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}>
          {/* Logo in mobile menu */}
          <div className="w-full flex justify-center py-8">
            <img 
              src="/images/logo.png" 
              alt="LEO Construct logo" 
              className="h-24 w-24 rounded object-contain"
            />
          </div>
          
          {/* Menu items */}
          <div className="w-full max-w-md mx-auto flex flex-col gap-6 px-4">
            {navLinks.map(link => (
              link.isExternal ? (
                <a
                  key={link.to}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full text-center py-7 text-3xl font-medium text-white uppercase tracking-widest transition-all duration-300
                  after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
                  after:w-32 after:h-0.5 after:bg-orange-500/5
                  hover:text-orange-200 after:opacity-0 hover:after:opacity-100 hover:bg-white/5"
                >
                  {link.name}
                </a>
              ) : (
                <button 
                  key={link.to}
                  onClick={() => scrollToSection(link.to)}
                  className="relative w-full text-center py-7 text-3xl font-medium text-white uppercase tracking-widest transition-all duration-300
                  after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
                  after:w-32 after:h-0.5 after:bg-orange-500/5
                  hover:text-orange-200 after:opacity-0 hover:after:opacity-100 hover:bg-white/5"
                >
                  {link.name}
                </button>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

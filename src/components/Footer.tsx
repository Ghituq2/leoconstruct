import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-slate-900 text-white pt-16 pb-8">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 w-full h-0.5 lg:h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600"></div>
      
      {/* Diagonal background */}
      <div className="absolute inset-0 bg-slate-800 [clip-path:polygon(0_15%,100%_0,100%_100%,0_100%)]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img 
                src="/images/logo.png" 
                alt="LEO Construct logo" 
                className="w-12 h-12 rounded"
              />
              <div>
                <h3 className="font-bold text-xl">LEO CONSTRUCT</h3>
                <p className="text-orange-400 text-sm tracking-wider">Excelență în Construcții</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Oferim servicii complete de construcții și renovări, cu focus pe calitate și satisfacția clientului.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-orange-400" />
                <a href="tel:+40771234567" className="hover:text-orange-400 transition-colors">
                  +40 771 234 567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-orange-400" />
                <a href="https://wa.me/40771234567" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-orange-400" />
                <a href="mailto:contact@leoconstruct.ro" className="hover:text-orange-400 transition-colors">
                  contact@leoconstruct.ro
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-orange-400 mt-1" />
                <span>București, România</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-orange-400 transition-colors">
                  Construcții Case
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-orange-400 transition-colors">
                  Renovări
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-orange-400 transition-colors">
                  Amenajări Interioare
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-orange-400 transition-colors">
                  Instalații
                </button>
              </li>
            </ul>
          </div>

          {/* Program */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Program</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Luni - Vineri:</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sâmbătă:</span>
                <span>09:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Duminică:</span>
                <span>Închis</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} LEO Construct. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero.jpg" 
          alt="Construction site background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80"></div>
      </div>

      {/* Diagonal lines pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `repeating-linear-gradient(45deg, rgba(251,146,60,0.05) 0px, rgba(251,146,60,0.05) 1px, transparent 1px, transparent 10px)`,
        backgroundSize: '20px 20px'
      }}></div>

      <div className="container mx-auto px-4 pt-20 lg:pt-32 pb-20 relative z-10">
        <div className="max-w-5xl relative">
          {/* Decorative element */}
          <div className="absolute -left-2 lg:-left-4 top-0 w-1 h-20 lg:h-32 bg-orange-500"></div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight">
            LEO Construct <br className="hidden sm:block" />
            <span className="text-orange-500">Renovări Complete,</span> <br className="hidden sm:block" />
            Finisaje de Excepție
          </h1>
          <div className="pl-4 border-l-2 border-orange-500/30">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-3xl">
              Transformăm spațiul tău! Echipa LEO Construct din Alba oferă soluții complete pentru renovări: tencuieli, zidărie, gresie, faianță, glet, rigips, polistiren și tinci de precizie, pentru confortul și estetica dorite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="relative overflow-hidden group bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 lg:px-10 py-4 lg:py-5 [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)] text-base lg:text-lg font-medium shadow-lg transition-all duration-300">
                <span className="relative z-10 uppercase tracking-wider">Solicită o ofertă</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
              <button className="relative overflow-hidden group bg-white/5 hover:bg-white/10 text-white px-6 sm:px-8 lg:px-10 py-4 lg:py-5 [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)] text-base lg:text-lg font-medium transition-all duration-300">
                <span className="relative z-10 uppercase tracking-wider">Contactează-ne</span>
                <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
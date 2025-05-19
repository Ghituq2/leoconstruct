import React, { useEffect } from 'react';

const Hero = () => {
  const contactMessage = 'Bună! Aș dori să vă contactez pentru mai multe informații.';
  const contactUrl = `https://wa.me/40700000000?text=${encodeURIComponent(contactMessage)}`;

  useEffect(() => {
    // Add MyAlice script
    const script = document.createElement('script');
    script.innerHTML = `!function(){var e,t,n,a;window.MyAliceWebChat||((t=document.createElement("div")).id="myAliceWebChat",(n=document.createElement("script")).type="text/javascript",n.async=!0,n.src="https://widget.myalice.ai/index.js",(a=(e=document.body.getElementsByTagName("script"))[e.length-1]).parentNode.insertBefore(n,a),a.parentNode.insertBefore(t,a),n.addEventListener("load",(function(){MyAliceWebChat.init({selector:"myAliceWebChat",number:"",message:"",color:"#25D366",channel:"wa",boxShadow:"none",text:"Solicită o ofertă gratuită",theme:"light",position:"right",mb:"20px",mx:"20px",radius:"20px"})})))}();`;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
              <div id="myAliceWebChat"></div>
              <a 
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group bg-white/5 hover:bg-white/10 text-white px-6 sm:px-8 lg:px-10 py-4 lg:py-5 [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)] text-base lg:text-lg font-medium transition-all duration-300 inline-block text-center"
              >
                <span className="relative z-10 uppercase tracking-wider">Contactează-ne</span>
                <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
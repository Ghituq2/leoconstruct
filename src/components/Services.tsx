import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "Tencuială",
    description: "Finisaje de înaltă calitate pentru pereți interiori și exteriori, cu materiale premium și tehnologii moderne pentru durabilitate maximă.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ["Finisaje netede", "Rezistență la intemperii", "Aplicare uniformă", "Materiale premium"]
  },
  {
    id: 2,
    title: "Tinci și Glet",
    description: "Obțineți suprafețe perfect netede și pregătite pentru vopsire, cu tehnici avansate de finisare și materiale de cea mai bună calitate.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    features: ["Suprafețe netede", "Pregătire pentru vopsit", "Finisaj impecabil", "Durabilitate crescută"]
  },
  {
    id: 3,
    title: "Rigips",
    description: "Soluții complete pentru compartimentări și tavane false, cu design modern și funcționalitate optimă pentru spațiul dumneavoastră.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    features: ["Izolare fonică", "Design modern", "Montaj rapid", "Rezistență în timp"]
  },
  {
    id: 4,
    title: "Gresie și Faianță",
    description: "Montaj profesional de gresie și faianță, cu atenție la detalii și design personalizat pentru băi, bucătării și alte spații.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    features: ["Montaj precis", "Design personalizat", "Materiale de calitate", "Finisaje perfecte"]
  },
  {
    id: 5,
    title: "Placări Polistiren",
    description: "Izolație termică eficientă pentru fațade, cu sisteme complete de termoizolație și finisaje decorative de înaltă calitate.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    features: ["Eficiență energetică", "Protecție termică", "Aspect modern", "Durabilitate"]
  },
  {
    id: 6,
    title: "Zidărie",
    description: "Construcții și compartimentări de calitate, cu tehnici moderne și materiale durabile pentru rezultate de lungă durată.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    features: ["Structuri solide", "Precizie în execuție", "Materiale certificate", "Rezistență garantată"]
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-500 font-semibold tracking-wider uppercase text-sm"
          >
            Ce oferim
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 mt-2"
          >
            Serviciile Noastre
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-orange-500 mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Oferim soluții complete în construcții, de la proiectare până la execuție,
            cu focus pe calitate și satisfacția clientului.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Service Selector with inline details on mobile */}
          <div className="space-y-4 order-1">
            {services.map((service) => (
              <React.Fragment key={service.id}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: service.id * 0.1 }}
                  onClick={() => setActiveService(service)}
                  className={`cursor-pointer group p-4 rounded-xl transition-all duration-300 ${
                    activeService.id === service.id
                      ? 'bg-orange-500 shadow-lg shadow-orange-500/20'
                      : 'bg-white hover:bg-orange-50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      activeService.id === service.id
                        ? 'bg-white/10 text-white'
                        : 'bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20'
                    }`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg mb-1 ${
                        activeService.id === service.id ? 'text-white' : 'text-slate-900'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm line-clamp-2 ${
                        activeService.id === service.id ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Service Details - Mobile Only */}
                {activeService.id === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden bg-white rounded-xl shadow-lg p-6 mt-2"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/30">
                      Solicită Ofertă
                    </button>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Service Details - Desktop Only */}
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block bg-white rounded-2xl shadow-xl p-8 order-2 lg:sticky lg:top-24"
          >
            <div className="p-4 bg-orange-500/10 rounded-xl mb-6">
              <div className="text-orange-500">{activeService.icon}</div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{activeService.title}</h3>
            <p className="text-gray-600 mb-8">{activeService.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeService.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/30">
              Solicită Ofertă
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services; 
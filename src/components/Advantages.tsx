import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const advantages = [
  {
    id: 1,
    title: "Dedicație Totală",
    description: "Ne dedicăm 100% fiecărui proiect, indiferent de mărime. Fiind la început de drum, acordăm atenție maximă fiecărui detaliu.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Prețuri Corecte",
    description: "Oferim prețuri competitive și transparente, fără costuri ascunse. Credem în construirea unor relații pe termen lung cu clienții noștri.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Comunicare Deschisă",
    description: "Menținem o comunicare constantă și clară pe tot parcursul proiectului. Suntem mereu disponibili pentru întrebări și feedback.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Calitate în Execuție",
    description: "Folosim materiale de calitate și tehnici moderne pentru a asigura rezultate durabile și finisaje impecabile.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    )
  }
];

const gallery = [
  {
    id: 1,
    title: "Proiect 1",
    category: "În Lucru",
    image: "/images/galerie/1.jpg"
  },
  {
    id: 2,
    title: "Proiect 2",
    category: "În Lucru",
    image: "/images/galerie/2.jpg"
  },
  {
    id: 3,
    title: "Proiect 3",
    category: "În Lucru",
    image: "/images/galerie/3.jpg"
  },
  {
    id: 4,
    title: "Proiect 4",
    category: "În Lucru",
    image: "/images/galerie/4.jpg"
  },
  {
    id: 5,
    title: "Proiect 5",
    category: "În Lucru",
    image: "/images/galerie/5.jpg"
  },
  {
    id: 6,
    title: "Proiect 6",
    category: "În Lucru",
    image: "/images/galerie/6.jpg"
  },
  {
    id: 7,
    title: "Proiect 7",
    category: "În Lucru",
    image: "/images/galerie/7.jpg"
  },
  {
    id: 8,
    title: "Proiect 8",
    category: "În Lucru",
    image: "/images/galerie/8.jpg"
  },
  {
    id: 9,
    title: "Proiect 9",
    category: "În Lucru",
    image: "/images/galerie/9.jpg"
  },
  {
    id: 10,
    title: "Proiect 10",
    category: "În Lucru",
    image: "/images/galerie/10.jpg"
  }
];

const Advantages = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-500 font-semibold tracking-wider uppercase text-sm"
          >
            De ce să ne alegi
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 mt-2"
          >
            Construim cu Pasiune
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
            Suntem o echipă tânără și ambițioasă, dedicată să oferim servicii de calitate
            și să construim relații de încredere cu clienții noștri.
          </motion.p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <div className="text-orange-500">
                  {advantage.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-orange-500 font-semibold tracking-wider uppercase text-sm"
            >
              Proiecte în Lucru
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 mt-2"
            >
              Galerie
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-24 h-1 bg-orange-500 mx-auto"
            ></motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-slate-200 cursor-pointer"
                onClick={() => openModal(item.image)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-orange-300 text-sm">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {isModalOpen && selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative bg-white p-2 rounded-lg shadow-xl max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Imagine galerie mărită"
                  className="block max-w-full max-h-[calc(90vh-40px)] object-contain rounded"
                />
                <button
                  onClick={closeModal}
                  className="absolute -top-3 -right-3 bg-orange-500 text-white rounded-full p-1.5 shadow-lg hover:bg-orange-600 transition-colors z-10"
                  aria-label="Închide imaginea"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Advantages; 
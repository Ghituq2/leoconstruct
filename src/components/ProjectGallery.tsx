import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/data/projects'; // Asigură-te că această cale este corectă

type Project = {
  before: string;
  after: string;
  title: string;
  desc?: string;
};

const gallery: Project[] = [
  {
    title: "Casă - renovare fațadă",
    before: "/lovable-uploads/f3e72043-454e-477f-913c-609c965fcb07.png",
    after:  "/lovable-uploads/1603eab0-fbc1-4940-9654-37c896a8db53.png",
    desc: "Termoizolare și tencuială decorativă",
  },
  {
    title: "Montaj gresie și faianță",
    before: "/lovable-uploads/1438311a-dab7-42cb-a1dc-7c5072af5007.png",
    after: "/lovable-uploads/1438311a-dab7-42cb-a1dc-7c5072af5007.png",
    desc: "Pereți înainte și după finisare",
  },
  {
    title: "Fațadă locuință", 
    before: "/lovable-uploads/cf2f523e-9303-4f52-b76d-94522f997ba9.png",
    after:  "/lovable-uploads/803b909b-de2a-449d-a923-26cce96f216a.png",
    desc: "Tencuire și vopsire exterior",
  }
];

const ProjectGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Restore background scrolling
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden group"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={project.afterImage}
                alt={`După - ${project.title}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                onClick={() => openModal(project.afterImage)}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
              <p className="text-sm text-slate-600 mb-1">
                <span className="font-medium">Locație:</span> {project.location}
              </p>
              <p className="text-sm text-slate-600 mb-4">
                <span className="font-medium">Servicii:</span> {project.services.join(', ')}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4" // Increased z-index
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative bg-white p-2 rounded-lg shadow-xl max-w-4xl max-h-[90vh]" // Increased max-w
              onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the image itself
            >
              <img
                src={selectedImage}
                alt="Imagine proiect mărită"
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
    </>
  );
};

export default ProjectGallery;

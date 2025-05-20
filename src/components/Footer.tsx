import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          {/* Logo and Subtitle */}
          <div className="flex items-center gap-4">
            <img 
              src="/images/logo.png" 
              alt="LEO Construct logo" 
              className="h-12 w-12 rounded object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white">LEO CONSTRUCT</span>
              <span className="text-orange-400 text-sm tracking-[0.2em] uppercase">Excelență în Construcții</span>
            </div>
          </div>

          {/* SAL and SOL Logos */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.sal.ro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/images/SAL.png" 
                alt="SAL" 
                className="h-12 w-auto"
              />
            </a>
            <a 
              href="https://www.sol.ro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/images/SOL.png" 
                alt="SOL" 
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>

        {/* Copyright and Made with love */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center gap-2 text-center text-sm text-gray-400">
            <p>© 2025 LEO Construct. Toate drepturile rezervate.</p>
            <p>
              Made with <span className="text-orange-500">♥</span> by{" "}
              <a 
                href="https://andreisoft.ro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors"
              >
                Andreisoft
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
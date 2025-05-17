
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import CTAButton from "./CTAButton";

const navLinks = [
  { name: "Acasă", to: "/" },
  { name: "Servicii", to: "/servicii" },
  { name: "Proiecte", to: "/proiecte" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between py-2 px-2 md:px-0">
        <Link to="/" className="flex items-center gap-2">
          <img src="/lovable-uploads/3e96a9d9-95a5-4845-bfc1-ecd2ad29ba4a.png" alt="LEO Construct logo" className="h-10 w-10 rounded" />
          <span className="font-bold text-lg text-[#222]">LEO Construct</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <NavLink 
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                "font-medium px-2 py-1 rounded transition " + (
                  isActive
                    ? "text-[#F97316] underline underline-offset-8"
                    : "text-gray-700 hover:text-[#0FA0CE] hover:bg-gray-100"
                )
              }
            >{link.name}</NavLink>
          ))}
          <CTAButton className="ml-2" />
        </div>
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Deschide meniul"
        >
          {open ? <X size={26}/> : <Menu size={26}/>}
        </button>
      </div>
      <div className={`md:hidden transition-all bg-white shadow-sm ${open ? "max-h-96 py-2" : "max-h-0 overflow-hidden"}`}>
        <div className="flex flex-col gap-2 px-4">
          {navLinks.map(link => (
            <NavLink 
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                "font-medium px-2 py-2 rounded " + (
                  isActive
                    ? "text-[#F97316] underline"
                    : "text-gray-700 hover:text-[#0FA0CE]"
                )
              }
              onClick={() => setOpen(false)}
            >{link.name}</NavLink>
          ))}
          <CTAButton className="mt-2" fullWidth onClick={() => setOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

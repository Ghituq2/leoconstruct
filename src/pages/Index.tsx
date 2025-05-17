
import Home from "./Home";
import Navbar from "@/components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  // Poate folosi Outlet dacă ruta e nested, dar îl lăsăm aici pentru extensibilitate
  return (
    <div className="min-h-screen bg-[#f3f6fa]">
      <Navbar />
      <main className="container mx-auto pt-8 pb-12 px-2">
        {location.pathname === "/" ? <Home /> : <Outlet />}
      </main>
      <footer className="mt-16 mb-2 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} LEO Construct. Toate drepturile rezervate.
      </footer>
    </div>
  );
};
export default Index;

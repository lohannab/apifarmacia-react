import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isActive = (path: string) => location.pathname === path;
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categorias", path: "/categorias" },
    { name: "Suporte", path: "/suporte" },
  ];
  return (
    <header className="w-full fixed top-0 left-0 z-50 flex justify-center px-4 sm:px-6 py-6 transition-all duration-300">
        
      <div
        className={`w-full max-w-7xl transition-all duration-500 ease-in-out border rounded-4xl sm:rounded-full px-6 sm:px-10 py-3 flex items-center justify-between ${scrolled ? "bg-white/60 backdrop-blur-xl border-white/30 shadow-lg" : "bg-transparent border-transparent"} ${isMenuOpen ? "bg-white/95 backdrop-blur-none" : ""}`}
      >
          
        {/* Logo */}  
        <Link to="/" className="flex items-center z-60">
            
          <div className="flex flex-col leading-none">
              
            <span className="text-[#2D5A4C] font-black text-xl sm:text-2xl tracking-tighter">
                
              Pharma  
            </span>  
            <span className="text-slate-500 text-[9px] uppercase font-bold tracking-widest">
                
              gerenciamento
            </span>  
          </div>  
        </Link>  
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`transition-all duration-300 hover:text-[#F15A29] ${isActive(item.path) ? "text-[#F15A29]" : ""}`}
            >
                
              {item.name}  
            </Link>
          ))}  
        </nav>  
        <div className="hidden md:block">
            
          <Link
            to="/cadastrarcategoria"
            className="bg-[#F15A29] hover:bg-[#2D5A4C] transition-all duration-300 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md active:scale-95"
          >
              
            Criar
          </Link>  
        </div>  
        <button
          className="md:hidden p-2 text-slate-800 z-60"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}  
        </button>  
        <div
          className={`absolute top-0 left-0 w-full bg-white shadow-2xl rounded-4xl p-8 pt-24 flex flex-col gap-6 transition-all duration-300 md:hidden z-50 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
        >
            
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-xl font-bold ${isActive(item.path) ? "text-[#F15A29]" : "text-slate-700"}`}
            >
                
              {item.name}  
            </Link>
          ))}  
          <Link
            to="/cadastrarcategoria"
            onClick={() => setIsMenuOpen(false)}
            className="bg-[#F15A29] text-white text-center py-4 rounded-2xl font-bold shadow-lg"
          >
              
            Nova Categoria  
          </Link>  
        </div>  
      </div>  
    </header>
  );
}
export default Navbar;

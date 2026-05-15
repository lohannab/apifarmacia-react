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
    <header className=" w-full fixed top-0 left-0 z-50 flex justify-center px-4 sm:px-6 py-6 transition-all duration-300 ">
        
      <div
        className={` w-full max-w-7xl transition-all duration-500 ease-in-out border rounded-4xl sm:rounded-full px-6 sm:px-10 py-3 flex items-center justify-between ${scrolled ? ` bg-white/50 backdrop-blur-2xl border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ` : ` bg-white/20 backdrop-blur-xl border-white/10 `} ${isMenuOpen ? "bg-white/90 backdrop-blur-none" : ""} `}
      >
          
        {/* LOGO */}  
        <Link to="/" className="flex items-center z-60">
            
          <div className="flex flex-col leading-none">
              
            <span className=" text-[#111111] font-black text-xl sm:text-2xl tracking-tighter ">
                
              Pharma CIA
            </span>  
            <span className=" text-[#5f6368] text-[9px] uppercase font-black tracking-[0.25em] ">
                
              Gerenciamento
            </span>  
          </div>  
        </Link>  
        {/* DESKTOP NAV */}  
        <nav className=" hidden md:flex items-center gap-8 text-sm font-bold ">
            
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={` transition-all duration-300 ${isActive(item.path) ? "text-[#F36C4F]" : "text-slate-600 hover:text-[#69B7E6]"} `}
            >
                
              {item.name}  
            </Link>
          ))}  
        </nav>  
        {/* CTA */}  
        <div className="hidden md:block">
            
          <Link
            to="/cadastrarcategoria"
            className=" bg-[#69B7E6] hover:bg-[#57a8da] transition-all duration-300 text-white px-6 py-2.5 rounded-full font-black text-sm shadow-md active:scale-95 "
          >
              
            CRIAR  
          </Link>  
        </div>  
        {/* MOBILE BUTTON */}  
        <button
          className=" md:hidden p-2 text-[#111111] z-60 "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}  
        </button>  
        {/* MOBILE MENU */}  
        <div
          className={` absolute top-0 left-0 w-full bg-[#F7F4EF] shadow-2xl rounded-4xl p-8 pt-24 flex flex-col gap-6 transition-all duration-300 md:hidden z-50 ${isMenuOpen ? ` translate-y-0 opacity-100 ` : ` -translate-y-full opacity-0 pointer-events-none `} `}
        >
            
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={` text-xl font-black ${isActive(item.path) ? "text-[#F36C4F]" : "text-slate-700"} `}
            >
                
              {item.name}  
            </Link>
          ))}  
          <Link
            to="/cadastrarcategoria"
            onClick={() => setIsMenuOpen(false)}
            className=" bg-[#69B7E6] text-white text-center py-4 rounded-2xl font-black shadow-lg "
          >
              
            CRIAR  
          </Link>  
        </div>  
      </div>  
    </header>
  );
}
export default Navbar;


import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { Monitor } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white/80 backdrop-blur-md border-t border-slate-100 py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Lado Esquerdo: Nome e Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-[#2D5A4C] font-black text-xl tracking-tight">
            Lohanna B.
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-1">
            API Farmácia &copy; {currentYear} | Todos os direitos reservados.
          </p>
        </div>

        {/* Lado Direito: Links Sociais */}
        <div className="flex items-center gap-6">
          <a
            href="https://lohannab.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-slate-600 hover:text-[#F15A29] transition-all duration-300"
            title="Meu Portfólio"
          >
            <Monitor size={20} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline text-xs font-bold uppercase tracking-widest">Portfolio</span>
          </a>

          <a
            href="https://github.com/lohannab/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-slate-600 hover:text-[#2D5A4C] transition-all duration-300"
            title="GitHub"
          >
            <GithubLogoIcon size={20} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline text-xs font-bold uppercase tracking-widest">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/lohannab"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-slate-600 hover:text-[#4A90E2] transition-all duration-300"
            title="LinkedIn"
          >
            <LinkedinLogoIcon size={20} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline text-xs font-bold uppercase tracking-widest">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
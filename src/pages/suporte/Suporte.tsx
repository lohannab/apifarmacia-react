import { GraduationCap, Code2, Database, Globe, Layers3 } from "lucide-react";
function Suporte() {
  const tecnologias = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Axios",
    "MySQL",
    "API REST",
  ];
  return (
    <section className=" min-h-screen bg-[#F7F4EF] px-6 py-26 md:px-10 ">
      <div className=" max-w-7xl mx-auto ">
        {/* HERO */}
        <div className=" relative overflow-hidden rounded-4xl bg-[#69B7E6] px-8 py-16 md:px-14 md:py-20 mb-10 ">
          {/* FORMAS */}
          <div className=" absolute -top-17.5 -right-15 w-60 h-60 rounded-full bg-[#FFD65A] " />
          <div className=" absolute -bottom-25 left-[15%] w-70 h-70 rounded-full border-36 border-[#F36C4F] " />
          {/* CONTENT */}
          <div className=" relative z-10 max-w-4xl ">
            <span className=" inline-block bg-white/70 backdrop-blur text-[#111111] px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 ">
              Sobre o Projeto
            </span>
            <h1 className=" text-[3.5rem] md:text-[6rem] leading-[0.9] tracking-tighter font-black text-white ">
              Educação, <br /> tecnologia <br /> e experiência.
            </h1>
            <p className=" mt-8 text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl ">
              Plataforma desenvolvida como projeto educacional durante a
              formação JavaScript Full Stack da Generation Brasil.
            </p>
          </div>
        </div>
        {/* GRID */}
        <div className=" grid lg:grid-cols-3 overflow-hidden rounded-4xl ">
          {/* CARD 1 */}
          <div className=" bg-white p-10 min-h-80 flex flex-col justify-between relative overflow-hidden ">
            <div className=" absolute -top-15 -right-15 w-45 h-45 rounded-full bg-[#FFD65A]/50 " />
            <GraduationCap size={42} className="relative z-10 text-[#111111]" />
            <div className="relative z-10">
              <h2 className=" text-4xl font-black text-[#111111] leading-tight mb-4 ">
                Generation Brasil
              </h2>
              <p className=" text-slate-600 text-lg leading-relaxed ">
                Projeto criado com foco educacional, aplicando conceitos de
                desenvolvimento Full Stack modernos.
              </p>
            </div>
          </div>
          {/* CARD 2 */}
          <div className=" bg-[#F36C4F] p-10 min-h-80 flex flex-col justify-between relative overflow-hidden ">
            <div className=" absolute -bottom-17.5 -left-17.5 w-55 h-55 rounded-full border-30 border-white/20 " />
            <Code2 size={42} className="relative z-10 text-white" />
            <div className="relative z-10">
              <h2 className=" text-4xl font-black text-white leading-tight mb-4 ">
                Frontend Moderno
              </h2>
              <p className=" text-white/90 text-lg leading-relaxed ">
                Interface construída com foco em experiência visual,
                responsividade e componentização.
              </p>
            </div>
          </div>
          {/* CARD 3 */}
          <div className=" bg-[#C9F0D8] p-10 min-h-80 flex flex-col justify-between relative overflow-hidden ">
            <div className=" absolute -top-12.5 -right-12.5 w-40 h-40 rounded-full bg-[#69B7E6] " />
            <Database size={42} className="relative z-10 text-[#111111]" />
            <div className="relative z-10">
              <h2 className=" text-4xl font-black text-[#111111] leading-tight mb-4 ">
                Backend & API
              </h2>
              <p className=" text-slate-700 text-lg leading-relaxed ">
                Integração com API REST, persistência de dados e operações CRUD.
              </p>
            </div>
          </div>
        </div>
        {/* TECNOLOGIAS */}
        <div className=" mt-10 bg-white rounded-4xl p-8 md:p-12 relative overflow-hidden ">
          <div className=" absolute -bottom-25 -right-25 w-70 h-70 rounded-full border-40 border-[#69B7E6]/20 " />
          <div className="relative z-10">
            <div className=" flex items-center gap-3 mb-8 ">
              <Layers3 size={32} className="text-[#111111]" />
              <h2 className=" text-4xl font-black text-[#111111] ">
                Tecnologias Utilizadas
              </h2>
            </div>
            <div className=" flex flex-wrap gap-4 ">
              {tecnologias.map((tech) => (
                <div
                  key={tech}
                  className=" bg-[#F7F4EF] px-6 py-4 rounded-full text-sm font-black uppercase tracking-[0.15em] text-[#111111] "
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* PORTFÓLIO */}
        <div className=" mt-10 rounded-4xl bg-[#111111] p-10 md:p-14 relative overflow-hidden ">
          <div className=" absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#FFD65A] " />
          <div className=" relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 ">
            <div>
              <span className=" inline-block bg-white/10 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 ">
                Desenvolvedora Lohanna B.
              </span>
              <h2 className=" text-4xl md:text-5xl font-black text-white leading-tight mb-4 ">
                Veja meu portfólio completo.
              </h2>
              <p className=" text-white/70 text-lg leading-relaxed max-w-xl ">
                Outros projetos, experiências e trabalhos desenvolvidos durante
                minha trajetória.
              </p>
            </div>
            <a
              href="https://lohannab.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className=" flex items-center gap-3 bg-white hover:bg-[#F7F4EF] text-[#111111] px-8 py-5 rounded-3xl font-black text-lg transition-all hover:scale-[1.03] whitespace-nowrap "
            >
              <Globe size={22} /> Acessar Portfólio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Suporte;

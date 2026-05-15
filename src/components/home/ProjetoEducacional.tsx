import { GraduationCap } from "lucide-react";
export function ProjetoEducacional() {
  return (
    <section className=" bg-[#F7F4EF] px-6 py-10 md:px-10 md:py-14 ">
        
      <div className=" max-w-7xl mx-auto ">
          
        <div className=" relative overflow-hidden rounded-4xl bg-white border border-slate-200 px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 ">
            
          {/* FORMAS */}  
          <div className=" absolute -top-15 -right-15 w-45 h-45 rounded-full bg-[#FFD65A]/40 " />  
          <div className=" absolute -bottom-20 left-[20%] w-55 h-55 rounded-full border-28 border-[#69B7E6]/20 " />  
          {/* CONTEÚDO */}  
          <div className=" relative z-10 flex items-start gap-5 max-w-3xl ">
            
            <div>
              <span className=" inline-block text-xs font-black uppercase tracking-[0.2em] text-[#F36C4F] mb-3 ">
                Projeto Educacional  
              </span>  
              
              <p className=" text-slate-600 text-lg leading-relaxed ">
                Projeto desenvolvido durante a formação JavaScript Full Stack da Generation Brasil.  
              </p>  

            </div>  
            
          </div>  
          {/* TAG */}  
          <div className=" relative z-10 flex items-center ">
              
            
          </div>  
        </div>  
      </div>  
    </section>
  );
}

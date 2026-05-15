export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EF]">
        
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          
        <div className=" absolute -top-30 -right-30 w-105 h-105 rounded-full bg-[#FFD65A] " />  
        <div className=" absolute top-[20%] right-[18%] w-45 h-45 rounded-full bg-[#69B7E6] " />  
        <div className=" absolute -bottom-30 left-[10%] w-[320px] h-80 rounded-full border-40 border-[#F36C4F] " />  
      </div>  
      <div className=" relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-24 ">
          
        <div className="max-w-4xl">
            
           
          <h1 className=" text-[4rem] md:text-[7rem] leading-[0.9] tracking-tighter font-black text-[#111111] ">
              
            Organize. <br /> Cuide. <br /> Simplifique.  
          </h1>  
          <p className=" mt-8 text-lg md:text-2xl text-slate-600 leading-relaxed max-w-2xl ">
              
            Sistema moderno para gerenciamento de categorias e operações
            farmacêuticas.  
          </p>  
        </div>  
      </div>  
    </section>
  );
}

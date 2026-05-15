import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import CardCategorias from "../cardcategorias/CardCategorias";
import type Categoria from "../../../models/Categorias";
function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  async function buscarCategorias() {
    await buscar("/categoria", setCategorias);
  }
  useEffect(() => {
    buscarCategorias();
  }, []);
  return (
    <section className="bg-[#F7F4EF] min-h-screen px-6 py-26 md:px-10">
        
      <div className="max-w-7xl mx-auto">
          
        {/* HERO HEADER */}  
        <div className=" relative overflow-hidden rounded-4xl bg-[#69B7E6] px-8 py-16 md:px-14 md:py-20 mb-12 ">
            
          {/* FORMAS */}  
          <div className=" absolute -top-20 -right-15 w-60 h-60 rounded-full bg-[#FFD65A] " />  
          <div className=" absolute -bottom-30 left-[18%] w-75 h-75 rounded-full border-40 border-[#F36C4F] " />  
          <div className="relative z-10 max-w-3xl">
              
            <span className=" inline-block bg-white/70 backdrop-blur text-[#111111] px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 ">
                
              Categorias  
            </span>  
            <h1 className=" text-[3.5rem] md:text-[5.5rem] leading-[0.9] tracking-tighter font-black text-white ">
                
              Organize. <br /> Simplifique. <br /> Gerencie.  
            </h1>  
            <p className=" mt-8 text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl ">
                
              Gerencie categorias farmacêuticas em uma experiência moderna e
              intuitiva.  
            </p>  
          </div>  
        </div>  
        {/* EMPTY STATE */}  
        {categorias.length === 0 ? (
          <div className=" bg-white rounded-[28px] p-14 border border-slate-200 text-center ">
              
            <h2 className=" text-4xl font-black text-[#111111] mb-4 ">
                
              Nenhuma categoria encontrada  
            </h2>  
            <p className=" text-slate-600 text-lg ">
                
              Comece cadastrando sua primeira categoria.  
            </p>  
          </div>
        ) : (
          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-hidden rounded-4xl ">
              
            {categorias.map((categoria, index) => (
              <div
                key={categoria.id}
                className={` relative min-h-85 p-10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:scale-[1.015] hover:z-10 ${index % 6 === 0 ? "bg-[#69B7E6]" : index % 6 === 1 ? "bg-[#F7F4EF]" : index % 6 === 2 ? "bg-[#F36C4F]" : index % 6 === 3 ? "bg-[#FFD65A]" : index % 6 === 4 ? "bg-[#C9F0D8]" : "bg-white"} `}
              >
                  
                {/* FORMAS */}  
                <div className=" absolute -top-17.5 -right-17.5 w-55 h-55 rounded-full bg-white/20 " />  
                <div className=" absolute -bottom-12.5 -left-12.5 w-40 h-40 rounded-full border-24 border-white/20 " />  
                {/* CARD CONTENT */}  
                <div className="relative z-10 h-full flex flex-col justify-between">
                    
                  <CardCategorias categoria={categoria} />  
                </div>  
              </div>
            ))}  
          </div>
        )}  
      </div>  
    </section>
  );
}
export default ListaCategorias;

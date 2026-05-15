import { Pill, Boxes, HeartPulse } from "lucide-react";
export function FeatureGrid() {
  return (
    <section className="bg-[#F7F4EF] px-6 pb-16 md:px-10">
      <div className=" max-w-7xl mx-auto grid md:grid-cols-3 auto-rows-[240px] overflow-hidden rounded-[28px] ">
        <div className=" bg-[#69B7E6] p-8 relative overflow-hidden flex items-end ">
          <div className=" absolute -top-17.5 -right-12.5 w-55 h-55 rounded-full bg-[#FFD65A] " />
          <h2 className=" relative z-10 text-white text-6xl leading-[0.9] font-black ">
            PH <br /> AR <br /> MA
          </h2>
        </div>

        <div className=" bg-[#F7F4EF] p-8 flex flex-col justify-between border-y border-slate-200 ">
          <Pill size={38} className="text-[#111111]" />
          <div>
            <h3 className=" text-3xl font-black text-[#111111] mb-3 ">
              Medicamentos
            </h3>
            <p className=" text-slate-600 leading-relaxed ">
              Organize categorias e produtos de forma mais intuitiva.
            </p>
          </div>
        </div>

        <div className=" bg-[#F36C4F] relative overflow-hidden flex items-center justify-center ">
          <div className=" absolute w-[320px] h-80 rounded-full border-38 border-[#FFD65A] " />
        </div>

        <div className=" bg-[#FFD65A] p-8 flex flex-col justify-between relative overflow-hidden ">
          <div className=" absolute -bottom-25 -right-20 w-60 h-60 rounded-full bg-[#F36C4F] " />
          <Boxes size={38} className="text-[#111111] relative z-10" />
          <div className="relative z-10">
            <h3 className=" text-3xl font-black text-[#111111] mb-3 ">
              Gerenciamento
            </h3>
            <p className=" text-slate-700 leading-relaxed ">
              Mantenha a operação organizada com mais clareza visual.
            </p>
          </div>
        </div>

        <div className=" bg-[#C9F0D8] relative overflow-hidden flex items-center justify-center ">
          <div className=" absolute -top-15 -right-15 w-50 h-50 rounded-full border-28 border-[#F36C4F] " />
          <div className=" absolute -bottom-17.5 -left-17.5 w-60 h-60 rounded-full bg-[#69B7E6] " />
        </div>

        <div className=" bg-[#F7F4EF] p-8 flex flex-col justify-between border-y border-slate-200 ">
          <HeartPulse size={38} className="text-[#111111]" />
          <div>
            <h3 className=" text-3xl font-black text-[#111111] mb-3 ">
              Cuidados
            </h3>
            <p className=" text-slate-600 leading-relaxed ">
              Uma experiência moderna, acessível e humanizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

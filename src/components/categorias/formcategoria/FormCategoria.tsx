import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import type Categoria from "../../../models/Categorias";
function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
  });
  async function buscarPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria);
  }
  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);
  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  }
  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (id !== undefined) {
        await atualizar(`/categoria/${id}`, categoria);
        alert("Categoria atualizada!");
      } else {
        await cadastrar("/categoria", categoria);
        alert("Categoria cadastrada!");
      }
      retornar();
    } catch (error) {
      alert("Erro ao salvar categoria!");
      console.log(error);
    }
  }
  function retornar() {
    navigate("/categorias");
  }
  return (
    <section className=" min-h-screen bg-[#F7F4EF]  ">
        
      <div className=" max-w-7xl mx-auto ">
          
        {/* HERO */}  
        <div className=" relative overflow-hidden  bg-[#F36C4F] px-8 py-16 md:px-14 md:py-20 mb-10 ">
            
          {/* FORMAS */}  
          <div className=" absolute top-[-70px] right-[-60px] w-[240px] h-[240px] rounded-full bg-[#FFD65A] " />  
          <div className=" absolute bottom-[-100px] left-[15%] w-[280px] h-[280px] rounded-full border-[36px] border-[#69B7E6] " />  
          {/* CONTENT */}  
          <div className=" relative z-10 max-w-3xl ">
              
            <span className=" inline-block bg-white/70 backdrop-blur text-[#111111] px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 ">
                
              Categoria  
            </span>  
            <h1 className=" text-[3.5rem] md:text-[5.5rem] leading-[0.9] tracking-tighter font-black text-white ">
                
              {id !== undefined
                ? "Edite com clareza."
                : "Crie uma nova categoria."}  
            </h1>  
            <p className=" mt-8 text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl ">
                
              Organize medicamentos, produtos e operações de forma moderna e
              intuitiva.  
            </p>  
          </div>  
        </div>  
        {/* FORM */}  
        <form
          onSubmit={gerarNovaCategoria}
          className=" grid lg:grid-cols-[1.2fr_0.8fr] rounded-[32px] overflow-hidden "
        >
            
          {/* LADO ESQUERDO */}  
          <div className=" bg-white p-8 md:p-12 flex flex-col gap-8 ">
              
            {/* NOME */}  
            <div className="space-y-3">
                
              <label className=" text-sm font-black uppercase tracking-[0.15em] text-slate-500 ">
                  
                Nome  
              </label>  
              <input
                type="text"
                placeholder="Ex: Medicamentos"
                name="nome"
                value={categoria.nome}
                onChange={atualizarEstado}
                className=" w-full bg-[#F7F4EF] border-0 rounded-[24px] px-6 py-5 text-2xl font-bold text-[#111111] placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#69B7E6] transition-all "
              />  
            </div>  
            {/* DESCRIÇÃO */}  
            <div className="space-y-3">
                
              <label className=" text-sm font-black uppercase tracking-[0.15em] text-slate-500 ">
                  
                Descrição  
              </label>  
              <textarea
                placeholder="Descreva a categoria..."
                name="descricao"
                value={categoria.descricao}
                onChange={atualizarEstado}
                rows={6}
                className=" w-full resize-none bg-[#F7F4EF] border-0 rounded-[24px] px-6 py-5 text-lg text-[#111111] placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#69B7E6] transition-all "
              />  
            </div>  
          </div>  
          {/* LADO DIREITO */}  
          <div className=" relative bg-[#69B7E6] p-8 md:p-12 flex flex-col justify-between overflow-hidden ">
              
            {/* FORMAS */}  
            <div className=" absolute top-[-80px] right-[-80px] w-[240px] h-[240px] rounded-full bg-[#FFD65A] " />  
            <div className=" absolute bottom-[-70px] left-[-70px] w-[220px] h-[220px] rounded-full border-[30px] border-white/30 " />  
            {/* TEXTO */}  
            <div className="relative z-10">
                
              <span className=" inline-block bg-white/70 backdrop-blur text-[#111111] px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 ">
                  
                Vitalis  
              </span>  
              <h2 className=" text-5xl md:text-6xl font-black leading-[0.9] tracking-tight text-white ">
                  
                PH <br /> AR <br /> MA  
              </h2>  
            </div>  
            {/* BUTTON */}  
            <button
              type="submit"
              className=" relative z-10 bg-[#111111] hover:bg-black text-white rounded-[24px] py-5 text-lg font-black transition-all hover:scale-[1.02] "
            >
                
              {id !== undefined
                ? "Atualizar Categoria"
                : "Cadastrar Categoria"}  
            </button>  
          </div>  
        </form>  
      </div>  
    </section>
  );
}
export default FormCategoria;

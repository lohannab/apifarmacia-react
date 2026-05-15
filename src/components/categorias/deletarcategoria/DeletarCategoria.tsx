import { useNavigate, useParams } from "react-router-dom";
import { deletar } from "../../../services/Service";
import { toast, Bounce } from "react-toastify";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  async function deletarCategoria() {
    try {
      await deletar(`/categoria/${id}`);

      toast.success("Categoria deletada!", {
        position: "top-right",
        autoClose: 3000,
        transition: Bounce,

        style: {
          borderRadius: "24px",
          background: "#C9F0D8",
          color: "#111111",
          fontWeight: "700",
        },
      });
    } catch (error) {
      toast.error("Erro ao deletar categoria!", {
        position: "top-right",
        autoClose: 3000,
        transition: Bounce,

        style: {
          borderRadius: "24px",
          background: "#F36C4F",
          color: "#ffffff",
          fontWeight: "700",
        },
      });
    }

    navigate("/categorias");
  }
  return (
    <section className=" min-h-screen bg-[#F7F4EF] px-6 py-26 md:px-10 flex items-center justify-center ">
      <div className=" relative overflow-hidden w-full max-w-3xl rounded-[32px] bg-[#F36C4F] p-8 md:p-14 ">
        {/* FORMAS */}
        <div className=" absolute top-[-70px] right-[-60px] w-[240px] h-[240px] rounded-full bg-[#FFD65A] " />
        <div className=" absolute bottom-[-90px] left-[-60px] w-[220px] h-[220px] rounded-full border-[30px] border-white/30 " />
        {/* CONTENT */}
        <div className=" relative z-10 flex flex-col gap-10 ">
          {/* TEXT */}
          <div>
            <span className=" inline-block bg-white/70 backdrop-blur text-[#111111] px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 ">
              Atenção
            </span>
            <h1 className=" text-[3rem] md:text-[5rem] leading-[0.9] tracking-tighter font-black text-white ">
              Deseja remover esta categoria?
            </h1>
            <p className=" mt-8 text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl ">
              Essa ação não poderá ser desfeita.
            </p>
          </div>
          {/* BUTTONS */}
          <div className=" flex flex-col md:flex-row gap-4 ">
            <button
              onClick={deletarCategoria}
              className=" flex-1 bg-[#111111] hover:bg-black text-white py-5 rounded-[24px] text-lg font-black transition-all hover:scale-[1.02] "
            >
              Sim, deletar
            </button>
            <button
              onClick={() => navigate("/categorias")}
              className=" flex-1 bg-white/70 backdrop-blur border border-white/40 hover:bg-white text-[#111111] py-5 rounded-[24px] text-lg font-black transition-all "
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DeletarCategoria;

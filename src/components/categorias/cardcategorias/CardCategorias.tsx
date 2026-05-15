import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categorias";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {

  return (

    <>

      {/* CONTEÚDO */}

      <div>

        <span className="
          inline-block
          bg-white/70
          backdrop-blur
          px-4
          py-2
          rounded-full
          text-xs
          font-black
          uppercase
          tracking-[0.2em]
          text-[#111111]
          mb-6
        ">

          Categoria #{categoria.id}

        </span>

        <h2 className="
          text-4xl
          font-black
          leading-tight
          tracking-tight
          text-[#111111]
          mb-4
          break-words
        ">

          {categoria.nome}

        </h2>

        <p className="
          text-lg
          leading-relaxed
          text-slate-700
          max-w-md
        ">

          {categoria.descricao}

        </p>

      </div>

      {/* ACTIONS */}

      <div className="flex gap-3 mt-10">

        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="
            flex-1
            bg-[#111111]
            hover:bg-black
            text-white
            py-3
            rounded-2xl
            font-bold
            text-center
            transition-all
          "
        >
          Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="
            flex-1
            bg-white/70
            backdrop-blur
            border
            border-white/40
            hover:bg-white
            text-[#111111]
            py-3
            rounded-2xl
            font-bold
            text-center
            transition-all
          "
        >
          Deletar
        </Link>

      </div>

    </>

  );
}

export default CardCategorias;
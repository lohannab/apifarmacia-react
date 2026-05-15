import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categorias";

interface CardCategoriasProps {
  categoria: Categoria;
}
function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-purple-800 text-white font-bold text-2xl">
        Categoria
      </header>

      <div className="p-6 bg-slate-100 h-full">
        <h2 className="text-3xl font-bold mb-2">{categoria.nome}</h2>

        <p className="text-lg">{categoria.descricao}</p>
      </div>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-slate-100 bg-purple-700 hover:bg-purple-800 flex items-center justify-center py-2"
        >
          Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="text-slate-100 bg-red-700 hover:bg-red-800 w-full flex items-center justify-center py-2"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;

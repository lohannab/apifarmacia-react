import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import CardCategorias from "../cardcategorias/CardCategorias";
import type Categoria from "../../../models/Categorias";

function ListaCategorias() {

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {

    await buscar(
      "/categoria",
      setCategorias
    );

  }

  useEffect(() => {

    buscarCategorias();

  }, [categorias.length]);

  return (

    <div className="container mx-auto">

      <h1 className="text-5xl text-center my-8">
        Categorias
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {categorias.map((categoria) => (

          <CardCategorias
            key={categoria.id}
            categoria={categoria}
          />

        ))}

      </div>

    </div>

  );
}

export default ListaCategorias;
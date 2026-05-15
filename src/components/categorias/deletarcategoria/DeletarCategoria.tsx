import { useNavigate, useParams } from "react-router-dom";

import { deletar } from "../../../services/Service";

function DeletarCategoria() {

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  async function deletarCategoria() {

    try {

      await deletar(`/categoria/${id}`);

      alert("Categoria deletada!");

    } catch (error) {

      alert("Erro ao deletar!");

    }

    navigate("/categoria");

  }

  return (

    <div className="container mx-auto w-1/3">

      <h1 className="text-4xl text-center my-4">
        Deletar Categoria
      </h1>

      <p className="text-center mb-4">
        Deseja apagar essa categoria?
      </p>

      <div className="flex gap-4">

        <button
          className="bg-red-700 hover:bg-red-900 text-white w-full py-2 rounded"
          onClick={deletarCategoria}
        >
          Sim
        </button>

        <button
          className="border w-full py-2 rounded"
          onClick={() => navigate("/categoria")}
        >
          Não
        </button>

      </div>

    </div>

  );
}

export default DeletarCategoria;
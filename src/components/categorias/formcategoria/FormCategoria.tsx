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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
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
    <div className="container flex flex-col items-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Categoria" : "Cadastrar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <input
          type="text"
          placeholder="Nome"
          name="nome"
          className="border-2 border-slate-700 rounded p-2"
          value={categoria.nome}
          onChange={atualizarEstado}
        />

        <input
          type="text"
          placeholder="Descrição"
          name="descricao"
          className="border-2 border-slate-700 rounded p-2"
          value={categoria.descricao}
          onChange={atualizarEstado}
        />

        <button
          type="submit"
          className="rounded bg-purple-800 hover:bg-purple-600 text-white font-bold py-2"
        >
          {id !== undefined ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;

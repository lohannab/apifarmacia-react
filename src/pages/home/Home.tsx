import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="bg-slate-200 flex justify-center min-h-screen">

      <div className="container grid grid-cols-2 text-slate-800">

        <div className="flex flex-col gap-4 items-center justify-center py-4">

          <h2 className="text-5xl font-bold">
            Seja Bem Vinde!
          </h2>

          <p className="text-xl">
            Sua saúde em primeiro lugar 💊
          </p>

          <div className="flex justify-around gap-4">

            <Link
              to="/categorias"
              className="rounded bg-purple-800 hover:bg-purple-600 text-white py-2 px-4"
            >
              Ver Categorias
            </Link>

            <Link
              to="/cadastrarcategoria"
              className="rounded border border-purple-800 text-purple-800 hover:bg-purple-100 py-2 px-4"
            >
              Cadastrar
            </Link>

          </div>

        </div>

        <div className="flex justify-center">

          <img
            src="https://ik.imagekit.io/lohanacode/farmacia.png"
            alt="Imagem Home"
            className="w-2/3"
          />

        </div>

      </div>

    </div>

  );
}

export default Home;
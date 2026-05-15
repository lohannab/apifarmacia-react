import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-violet-900 text-white py-4 flex justify-center">

      <div className="container flex justify-between text-lg">

        <Link to="/" className="font-bold text-2xl">
          Farmácia
        </Link>

        <div className="flex gap-4">

          <Link to="/">Home</Link>

          <Link to="/categorias">
            Categorias
          </Link>

          <Link to="/cadastrarcategoria">
            Cadastrar Categoria
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Navbar;
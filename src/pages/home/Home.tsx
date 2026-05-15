import ListaCategorias from "../../components/categorias/listacategorias/ListaCategorias";
import { FeatureGrid } from "../../components/home/FeatureGrid";
import { Hero } from "../../components/home/Hero"; // ou o caminho que você definiu
import { ProjetoEducacional } from "../../components/home/ProjetoEducacional";

function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <ListaCategorias />
      <ProjetoEducacional />
    </>
  );
}

export default Home;
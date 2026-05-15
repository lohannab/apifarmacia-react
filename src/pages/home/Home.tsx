import ListaCategorias from "../../components/categorias/listacategorias/ListaCategorias";
import { FeatureGrid } from "../../components/home/FeatureGrid";
import { Hero } from "../../components/home/Hero"; // ou o caminho que você definiu

function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <ListaCategorias />
    </>
  );
}

export default Home;
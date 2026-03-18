import Slider from "../components/Slider";
import Products from "./Products";

function Home() {
  return (
    <div>

      {/* SLIDER BELOW NAVBAR */}
      <Slider />

      {/* PRODUCTS */}
      <Products />

    </div>
  );
}

export default Home;
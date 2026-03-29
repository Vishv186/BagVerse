import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<h1>Cart Page</h1>} />
        <Route path="/orders" element={<h1>Orders Page</h1>} />
        <Route
          path="/account"
          element={
            <h1 style={{ color: "black", padding: "40px" }}>Account Page</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

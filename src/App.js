import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import ShowCart from "./Pages/ShowCart/ShowCart";
function App() {
  return (
    <Routes>
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;

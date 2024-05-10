import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ListaCategorias from "./components/categorias/listarCategorias/ListarCategorias";
import FormularioCategoria from "./components/categorias/formCategorias/FormCategorias";
import DeletarCategoria from "./components/categorias/deletarCategorias/DeletarCategorias";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route
              path="/cadastroCategoria"
              element={<FormularioCategoria />}
            />
            <Route
              path="/editarCategoria/:id"
              element={<FormularioCategoria />}
            />
            <Route
              path="/deletarCategoria/:id"
              element={<DeletarCategoria />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

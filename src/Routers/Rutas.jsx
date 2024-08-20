import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioComponent from "../components/FormularioComponent";
import HomePage from "../pages/HomePage";

function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/registrar" element={<FormularioComponent />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas;

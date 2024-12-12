import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nombres from "./components/nombres";
import Modificar from "./components/modificar";
import ListarSeleccionados from "./components/listar-seleccionados";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Nombres />} />
                <Route path="/modificar/:id" element={<Modificar />} />
                <Route path="/listar-seleccionados" element={<ListarSeleccionados />} />
            </Routes>
        </Router>
    );
};

export default App;

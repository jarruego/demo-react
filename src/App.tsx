import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nombres from "./components/nombres";
import Modificar from "./components/modificar";
// ...importar otros componentes...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nombres />} />
        <Route path="/modificar/:id" element={<Modificar />} />
        {/* ...otras rutas... */}
      </Routes>
    </Router>
  );
}

export default App;

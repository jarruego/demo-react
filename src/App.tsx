import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nombres from "./components/nombres";
import Modificar from "./components/modificar";
import ListarSeleccionados from "./components/listar-seleccionados";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<Nombres />} />
                    <Route path="/modificar/:id" element={<Modificar />} />
                    <Route path="/listar-seleccionados" element={<ListarSeleccionados />} />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
};

export default App;

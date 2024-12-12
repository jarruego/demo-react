import { useLocation, useNavigate } from 'react-router-dom';

const ListarSeleccionados = () => {
    const location = useLocation();
    const { selectedUsers } = location.state;
    const navigate = useNavigate();

    return (
        <div>
            <h1>Usuarios Seleccionados</h1>
            <ul>
                {selectedUsers.map((userId: number) => (
                    <li key={userId}>Usuario ID: {userId}</li>
                ))}
            </ul>
            <button onClick={() => navigate('/')}>Volver al Listado Principal</button>
        </div>
    );
};

export default ListarSeleccionados;
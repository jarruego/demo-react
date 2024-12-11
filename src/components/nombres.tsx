import { useAllUsers } from "../hooks/api/use-all-users";
import { useDeleteUser } from "../hooks/api/use-delete-user"; // Importar el hook de eliminación
import { useNavigate } from "react-router-dom"; // Importar el hook de navegación
import { useSelectedUsers } from "../hooks/use-selected-users"; // Importar el nuevo hook

export default function Nombres() {

    const { isLoading, users, refetch } = useAllUsers();
    const { isDeleting, deleteUser } = useDeleteUser(); // Usar el hook de eliminación
    const navigate = useNavigate(); // Usar el hook de navegación
    const { selectedUsers, handleCheckboxChange } = useSelectedUsers(); // Usar el nuevo hook

    const handleListSelected = () => {
        navigate('/listar-seleccionados', { state: { selectedUsers } });
    };

  return (
    <>
        <button onClick={refetch} disabled={isLoading}>Recargar</button>
        {
            isLoading && <p>Cargando...</p>
        }
        <ul>
            {users?.map((user) => (
                <li key={user.id}>
                    <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleCheckboxChange(user.id)}
                    />
                    {user.id} - {user.name}
                    <button onClick={() => deleteUser(user.id, refetch)} disabled={isDeleting}>
                        Borrar
                    </button>
                    <button onClick={() => navigate(`/modificar/${user.id}`)}>
                        Modificar
                    </button>
                </li>
            ))}
        </ul>
        <button onClick={handleListSelected}>Listar Seleccionados</button>
    </>
  );
}

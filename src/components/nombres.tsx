import { useAllUsers } from "../hooks/api/use-all-users";
import { useDeleteUser } from "../hooks/api/use-delete-user"; // Importar el hook de eliminación
import { useNavigate } from "react-router-dom"; // Importar el hook de navegación

export default function Nombres() {

    const { isLoading, users, refetch } = useAllUsers();
    const { isDeleting, deleteUser } = useDeleteUser(); // Usar el hook de eliminación
    const navigate = useNavigate(); // Usar el hook de navegación

  return (
    <>
        <button onClick={refetch} disabled={isLoading}>Recargar</button>
        {
            isLoading && <p>Cargando...</p>
        }
        <ul>
            {users?.map((user) => (
                <li key={user.id}>
                    {user.name}
                    <button onClick={() => deleteUser(user.id, refetch)} disabled={isDeleting}>
                        Borrar
                    </button>
                    <button onClick={() => navigate(`/modificar/${user.id}`)}>
                        Modificar
                    </button>
                </li>
            ))}
        </ul>
    </>
  );
}

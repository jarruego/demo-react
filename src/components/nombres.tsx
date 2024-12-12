import { useAllUsers } from "../hooks/api/use-all-users";
import { useDeleteUser } from "../hooks/api/use-delete-user";
import { useNavigate } from "react-router-dom";
import { useSelectedUsers } from "../hooks/use-selected-users";

const Nombres = () => {
    const { isLoading, users, refetch } = useAllUsers();
    const { isDeleting, deleteUser } = useDeleteUser();
    const navigate = useNavigate();
    const { selectedUsers, handleCheckboxChange } = useSelectedUsers();

    const handleListSelected = () => {
        navigate('/listar-seleccionados', { state: { selectedUsers } });
    };

    return (
        <>
            <button onClick={refetch} disabled={isLoading}>Recargar</button>
            {isLoading && <p>Cargando...</p>}
            <table>
                <thead>
                    <tr>
                        <th>Seleccionar</th>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>ID de Rol</th>
                        <th>Nombre de Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedUsers.includes(user.id)}
                                    onChange={() => handleCheckboxChange(user.id)}
                                />
                            </td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.roleId}</td>
                            <td>{user.roleName}</td>
                            <td>
                                <button onClick={() => navigate(`/modificar/${user.id}`)}>
                                    Modificar Nombre
                                </button>
                                <button onClick={() => deleteUser(user.id, refetch)} disabled={isDeleting}>
                                    Borrar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleListSelected}>Listar Seleccionados</button>
        </>
    );
};

export default Nombres;

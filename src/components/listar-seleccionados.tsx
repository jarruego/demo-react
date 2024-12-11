import { useLocation } from "react-router-dom";
import { useAllUsers } from "../hooks/api/use-all-users";

export default function ListarSeleccionados() {
    const location = useLocation();
    const { selectedUsers } = location.state;
    const { users } = useAllUsers();

    const selectedUserDetails = users?.filter(user => selectedUsers.includes(user.id));

    return (
        <div>
            <h1>Usuarios Seleccionados</h1>
            <ul>
                {selectedUserDetails?.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, FormEvent } from "react"; 
import { useUpdateUser } from "../hooks/api/use-update-user";
import { useFindUserById } from "../hooks/api/use-find-user-by-id"; 

export default function Modificar() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const { isUpdating, updateUser } = useUpdateUser();
  const { data: user, isLoading } = useFindUserById(id); // Usar el nuevo hook
  const [name, setName] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateUser({ id: Number(id), name, roleId: 1 }, () => {
      navigate("/", { replace: true }); // Redirigir al listado después de actualizar sin recargar
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit" disabled={isUpdating || isLoading}>
        Actualizar
      </button>
    </form>
  );
}
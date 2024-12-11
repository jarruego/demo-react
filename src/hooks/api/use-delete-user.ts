import axios from "axios";
import { useState } from "react";

export function useDeleteUser() {
    const [isDeleting, setDeleting] = useState(false);

    const deleteUser = async (id: number, callback: () => void) => {
        setDeleting(true);

        try {
            await axios.delete(`http://localhost:3000/user/${id}`);
            callback(); // Ejecutar el callback después de eliminar
        } catch(e: unknown) {
            console.log(e);
        }

        setDeleting(false);
    }

    return {
        isDeleting,
        deleteUser,
    }
}
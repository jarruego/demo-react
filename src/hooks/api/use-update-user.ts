import axios from "axios";
import { useState } from "react";

export function useUpdateUser() {
    const [isUpdating, setUpdating] = useState(false);

    const updateUser = async (user: { name: string; roleId: number; id?: number; lastName?: string | null; age?: number }, callback: () => void) => {
        setUpdating(true);

        try {
            await axios.put(`http://localhost:3000/user/${user.id}`, user);
            callback(); // Ejecutar el callback después de actualizar
        } catch(e: unknown) {
            console.log(e);
        }

        setUpdating(false);
    }

    return {
        isUpdating,
        updateUser,
    }
}
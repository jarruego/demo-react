import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useDeleteUser = () => {
    return useMutation({
        mutationFn: async (id?: number) => await axios.delete(`http://localhost:3000/user/${id}`),
    });
}
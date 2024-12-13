import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { UserModel } from "../../models/user/user.model";

type User = UserModel & {
    roleName: string;
}

export const useAllUsers = () => {
    return useQuery({
        queryFn: async () => (await axios.get<User[]>('http://localhost:3000/user/all', {headers: {authorization: "Bearer ..."}})).data,
        queryKey: ['users', 'all-users']
    });
}
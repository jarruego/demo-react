import axios from "axios";
import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
}

export function useAllUsers() {
    const [users, setUsers] = useState<User[]>();
    const [isLoading, setLoading] = useState(false);

    const requestApi = async () => {
        setLoading(true);

        try {
            const response = await axios.get<User[]>('http://localhost:3000/user/all');
            setUsers(response.data);
        } catch(e: unknown) {
            console.log(e);
        }

        setLoading(false);
    }

    useEffect(() => {
        requestApi();
    }, []);

    return {
        users,
        isLoading,
        refetch: requestApi,
    }
}
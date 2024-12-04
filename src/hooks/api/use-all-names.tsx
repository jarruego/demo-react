import axios from "axios";
import { useEffect, useState } from "react";

export function useAllNames() {
    const [names, setNames] = useState<string[]>();
    const [isLoading, setLoading] = useState(false);

    const requestApi = async () => {
        setLoading(true);

        try {
            const response = await axios.get<string[]>('http://localhost:3000/user/all-names');
            setNames(response.data);
        } catch(e: unknown) {
            console.log(e);
        }

        setLoading(false);
    }

    useEffect(() => {
        requestApi();
    }, []);

    return {
        names,
        isLoading,
        refetch: requestApi,
    }
}
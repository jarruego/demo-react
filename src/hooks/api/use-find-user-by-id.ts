import { useState, useEffect } from "react";
import axios from "axios";

export function useFindUserById(id?: string) {
  const [data, setData] = useState<{ id: number; name: string; lastName: string; age: number; roleId: number } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        setData(response.data[0]); // Asumimos que el endpoint devuelve un array y tomamos el primer elemento
      } catch (e: unknown) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  return { data, isLoading };
}
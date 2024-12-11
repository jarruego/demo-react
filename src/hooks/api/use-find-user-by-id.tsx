
import { useState, useEffect } from "react";
import axios from "axios";

export function useFindUserById(id: string | undefined) {
  const [data, setData] = useState<{ name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        setData(response.data);
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
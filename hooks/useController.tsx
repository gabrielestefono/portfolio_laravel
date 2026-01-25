import { Category } from "@/interfaces/Estude-comigo";
import Error from "next/error";
import { useState, useEffect, useMemo } from "react";

export default function useController() {
  const [data, setData] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/categories");
        if (!res.ok) {
          throw new Error({ statusCode: res.status });
        }
        const resData: Category[] = await res.json();
        setData(resData);
      } catch (error: Error | any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const memoizedData = useMemo(() => {
    return data;
  }, [data]);

  return { data: memoizedData, loading, error };
}

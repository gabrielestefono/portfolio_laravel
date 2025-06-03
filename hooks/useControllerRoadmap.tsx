import { useState, useEffect, useMemo } from "react";

export default function useControllerRoadmap({slug}: {slug: string}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/roadmaps/${slug}`);
        if (!res.ok) {
          throw new Error("Erro ao coletar dados");
        }
        const resData = await res.json();
        setData(resData);
      } catch (error) {
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

import { useState, useEffect } from "react";
// import { Movie } from "../react-app-env";

export const useFetch = (url: string,) => {
  const [data, setData] = useState<Movie[] | any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e);
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

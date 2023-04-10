import { MoviePost } from "@/typesApp";
import { useState } from "react";


interface UsePostParams {
  url: string;
  headers?: HeadersInit;
}

export default function usePost ({ url, headers }: UsePostParams) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | any | null>('');
  const [data, setData] = useState<MoviePost | null>(null);

  const post = async (body: MoviePost) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: "cors",
        headers: headers || {
          'Content-Type': 'application/json',
          Accept: "application/json",

        },
        body: JSON.stringify(body),
      });
      const responseData = await response.json();
      setData(responseData);
    } catch (e: any) {
          setError(e);
    } finally {
      setLoading(false);
    }
  };

  return { post, loading, error, data };
};

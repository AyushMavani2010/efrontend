import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface UseAxiosProps {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  body?: any;
  options?: AxiosRequestConfig;
}

export const useAxios = ({
  method,
  url,
  body = null,
  options = {},
}: UseAxiosProps) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios({
          method,
          url,
          data: body,
          ...options,
        });
        setResponse(result.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [method, url, body, options]);

  return { response, error, loading };
};

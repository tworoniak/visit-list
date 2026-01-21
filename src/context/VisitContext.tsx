import { createContext, useContext, useState, useEffect } from "react";
import type { Visit } from "../types";

const VisitContext = createContext<{
  visits: Visit[];
  loading: boolean;
  error: string | null;
}>({ visits: [], loading: true, error: null });

export const VisitProvider = ({ children }: { children: React.ReactNode }) => {
  const [visits, setVisits] = useState<Visit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await fetch("http://localhost:4000/initialVisits");
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        const data = await response.json();
        setVisits(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchVisits();
  }, []);

  return (
    <VisitContext.Provider value={{ visits, loading, error }}>
      {children}
    </VisitContext.Provider>
  );
};

export function useVisits() {
  return useContext(VisitContext);
}

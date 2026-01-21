import { createContext, useContext, useState, useEffect } from "react";

const VisitContext = createContext({ visits: [], loading: true, error: null });

export const VisitProvider = ({ children }) => {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setError(error.message);
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

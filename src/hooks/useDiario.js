import { useEffect, useState } from "react";
import { getAllEntries } from "../services/diaryService";

export function useDiario() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllEntries();
        setEntries(data);
      } catch {
        setError("Erro ao carregar dados");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  function addEntry(newEntry) {
    const entryWithId = {
      ...newEntry,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
    };

    setEntries((prev) => [entryWithId, ...prev]);
  }

  return {
    entries,
    loading,
    error,
    addEntry,
  };
}
import { useState, useEffect } from "react";
import { card } from "../service/interface/personaje";

export const usePersonajes = () => {

  const [personajes, setPersonajes] = useState<card[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const hacerFetch = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const json = await respuesta.json();
        setPersonajes(json.data || json); 

      } catch (err) {
        setError(err instanceof Error ? err : new Error("Error desconocido al cargar personajes"));
      } finally {
        setCargando(false);
      }
    };

    hacerFetch();
  }, []); 

  return { personajes, cargando, error };
};
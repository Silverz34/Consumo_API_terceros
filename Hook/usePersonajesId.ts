import { useState, useEffect } from "react";
import { personaje } from "./interface/personaje"; 

export const usePersonajeId = (id: string | string[]) => {
  const [datosPersonaje, setDatosPersonaje] = useState<personaje | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const hacerFetch = async () => {
      setCargando(true);
      setError(null);

      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
        const respuesta = await fetch(`${API_URL}/${id}`);

        if (!respuesta.ok) {
          throw new Error(`Error al buscar el personaje: ${respuesta.status}`);
        }

        const json = await respuesta.json();
        const datos = json.success ? json.data : json;
        const personajeFinal = Array.isArray(datos) ? datos[0] : datos;

        setDatosPersonaje(personajeFinal);

      } catch (err) {
        setError(err instanceof Error ? err : new Error("Error al buscar el detalle del personaje."));
      } finally {
        setCargando(false);
      }
    };
    if (id) {
      hacerFetch();
    }
  }, [id]);

  return { datosPersonaje, cargando, error };
};
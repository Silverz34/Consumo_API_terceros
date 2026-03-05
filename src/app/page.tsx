"use client"; 

import { useState, useEffect } from "react";
import PersonajeCard from "@/components/Card";
import { card } from "../../service/interface/personaje"; 
import { fetch } from "../../service/service";

export default function Home() {
  const [personajes, setPersonajes] = useState<card[]>([]);
  useEffect(() => {
    const cargarPersonajes = async () => {
      const datos = await fetch();
      setPersonajes(datos);
    };
    cargarPersonajes();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-50 p-8 dark:bg-black">
      <div className="grid grid-cols-3 gap-6">
        {personajes.map((personajeActual) => (
          <PersonajeCard 
            key={personajeActual._id} 
            personaje={personajeActual} 
          />
        ))}

      </div>
    </main>
  );
}
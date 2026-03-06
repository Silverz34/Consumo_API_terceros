'use client'
import PersonajeCard from "@/components/Card"; 
import { usePersonajes } from "../../Hook/usePersonaje";
import Loading from "./loading";

export default function Home() {
  const { personajes, cargando, error } = usePersonajes();
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <h1 className="text-2xl text-red-600 font-bold">Error: {error.message}</h1>
      </div>
    );
  }
  if (cargando) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
        <Loading />
      </div>
    );
  }
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
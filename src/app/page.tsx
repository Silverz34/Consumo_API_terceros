import { Suspense } from "react";
import PersonajeCard from "@/components/Card"; 
import { fetch as fetchpersonaje } from "../../service/service";
import Loading from "./loading";

export const dynamic = 'force-dynamic';
export default async function Home() {
  const personajes = await fetchpersonaje();
  return (
    <Suspense fallback={<Loading/>}>
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
    </Suspense>
  );
}
"use client";
import { useParams } from "next/navigation"; 
import Link from "next/link"; 
import Loading from "@/app/loading";
import { usePersonajeId } from "../../../../Hook/usePersonajesId";
import ErrorBoundary from "@/app/error";

export default function DetallePersonaje() {
  const params = useParams();
  const id = params.id as string;
  const { datosPersonaje, cargando, error } = usePersonajeId(id);

  if (error) {
    return (
      <ErrorBoundary 
        error={error} 
        reset={() => window.location.reload()} 
    />
  );}
    
  
  if (cargando || !datosPersonaje) {return(
    <div className="min-h-screen flex items-center justify-center">
      <Loading />
    </div>
  );}

  const imagenPorDefecto = "/descargar.jpeg"; 
  const srcImagen = datosPersonaje.imageUrl && datosPersonaje.imageUrl.trim() !== "" 
    ? datosPersonaje.imageUrl 
    : imagenPorDefecto;

  return (
   <main className="dark:bg-black h-screen w-full flex p-4 flex-col md:flex-row overflow-hidden relative">
      <Link href="/" className="absolute top-6 left-6 z-10 px-5 py-2 backdrop-blur-sm rounded-full text-white font-bold">
        Volver
      </Link>
      <div className="md:w-1/2 h-64 md:h-full flex items-center justify-center">
        <img 
          src={srcImagen} 
          alt={datosPersonaje.name} 
          className="w-full max-h-full object-contain"
        />
      </div>
      <div className="md:w-1/2 h-full p-10 md:p-20 overflow-y-auto ">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">{datosPersonaje.name}</h1>
        <div className="flex flex-col gap-8">
          <div className="p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold border-b pb-3 mb-4">Películas</h3>
            {datosPersonaje.films && datosPersonaje.films.length > 0 ? (
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                {datosPersonaje.films.map((film, index) => (
                  <li key={index}>{film}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 italic">No tiene películas registradas.</p>
            )}
          </div>
          <div className="p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold border-b pb-3 mb-4">Videojuegos</h3>
            {datosPersonaje.videoGames && datosPersonaje.videoGames.length > 0 ? (
              <ul className="list-disc list-inside space-y-1">
                {datosPersonaje.videoGames.map((game, index) => (
                  <li key={index}>{game}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 italic">No aparece en videojuegos.</p>
            )}
          </div>
          <div className="p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold border-b pb-3 mb-4">Shows de TV </h3>
            {datosPersonaje.tvShows && datosPersonaje.tvShows.length > 0 ? (
              <ul className="list-disc list-inside space-y-1">
                {datosPersonaje.tvShows.map((show, index) => (
                  <li key={index}>{show}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 italic">No tiene shows de TV.</p>
            )}
          </div>
          <div className="p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold border-b pb-3 mb-4">parques de atraccion </h3>
            {datosPersonaje.parkAttractions && datosPersonaje.parkAttractions.length > 0 ? (
              <ul className="list-disc list-inside space-y-1">
                {datosPersonaje.parkAttractions.map((show, index) => (
                  <li key={index}>{show}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 italic">No tiene parques de atraccion.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; 
import Link from "next/link"; 
import { personaje } from "../../../../service/interface/personaje"; 
import { getId } from "../../../../service/service";

export default function DetallePersonaje() {
  const params = useParams();
  const id = params.id;
  const [datosPersonaje, setDatosPersonaje] = useState<personaje | null>(null);
    useEffect(() => {
        const cargarDetalle = async () => {
        try {
            const datos = await getId(id as string);
            const personajeFinal = Array.isArray(datos) ? datos[0] : datos;
            setDatosPersonaje(personajeFinal);
        } catch (err) {
            console.error("No se pudo cargar el personaje:", err);
        }
        };
        if (id) {
        cargarDetalle();
        }
    }, [id]);

  if (!datosPersonaje) return null;
  const imagenPorDefecto = "/descargar.jpeg"; 
  const srcImagen = datosPersonaje.imageUrl && datosPersonaje.imageUrl.trim() !== "" 
    ? datosPersonaje.imageUrl 
    : imagenPorDefecto;

  return (
   <main className="dark:bg-black h-screen w-full  flex flex-col md:flex-row overflow-hidden relative">
      <Link href="/" className="absolute top-6 left-6 z-10 px-5 py-2 bg-black backdrop-blur-sm rounded-full text-white font-bold">
        Volver
      </Link>
      <div className="md:w-1/2 h-64 md:h-full">
        <img 
          src={srcImagen} 
          alt={datosPersonaje.name} 
          className="w-full p-20 h-full object-cover"
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
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {datosPersonaje.tvShows.map((show, index) => (
                  <li key={index}>{show}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 italic">No tiene shows de TV.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
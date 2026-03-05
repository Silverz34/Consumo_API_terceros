import { card } from "../../service/interface/personaje";
import Link from "next/link";
interface props{
    personaje : card
}
export default function PersonajeCard({personaje}:props){
    const imagenPorDefecto = "/descargar.jpeg"; 
    const srcImagen = personaje.imageUrl && personaje.imageUrl.trim() !== "" 
        ? personaje.imageUrl 
        : imagenPorDefecto
    return(
        <Link href={`/personaje/${personaje._id}`} className="block">
            <div className="flex flex-col items-center bg-white border border-gray-200
            rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img 
                    src={srcImagen}
                    alt={personaje.name || "Personaje de Disney"}
                    className="w-full h-44 object-cover"
                />
                <div className="p-4 text-center w-full bg-slate-50">
                    <h3 className="text-xl font-blod text-black">
                    {personaje.name}
                    </h3>
                </div>
            </div>
        </Link>
    )
}
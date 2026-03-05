
import { card, personaje } from "./interface/personaje";

export const fetch = async() : Promise<card[]> => {
	const API_URL = process.env.NEXT_PUBLIC_API_URL || ''; 

    try{
        const respuesta = await global.fetch(API_URL);
        if(!respuesta.ok){
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        if(datos.success){
           return datos.data;
        }else{
            throw new Error('la api respondio pero el formato es incorrecto');
        }
        
    }catch(error){
        console.log("fallo en service:", error);
        throw error;
    }
};

export const getId = async (id: string | string[]): Promise<personaje[]> => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || ''; 

    try {
     const respuesta = await global.fetch(`${API_URL}/${id}`);

    if (!respuesta.ok) {
      throw new Error(`Error al buscar el personaje: ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    if (datos.success) {
      return datos.data; 
    } else {
      throw new Error('La API respondió, pero el formato es incorrecto.');
    }

  } catch (error) {
    console.error(`Fallo en disneyService al buscar el ID ${id}:`, error);
    throw error; 
  }
};


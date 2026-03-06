import z from "zod";

export const cardSchema = z.object({
    _id : z.number(),
    name : z.string().optional(),
    imageUrl : z.string().optional(),
    url : z.string()
});


export const personajeSchema = cardSchema.extend({
    films: z.array(z.string()).optional(),
    shortFilms : z.array(z.string()).optional(),
    tvShows : z.array(z.string()).optional(),
    videoGames : z.array(z.string()).optional(),
    parkAttractions : z.array(z.string()).optional(),
})

export type card = z.infer <typeof cardSchema>;
export type personaje = z.infer <typeof personajeSchema>;
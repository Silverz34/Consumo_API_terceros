import z from "zod";

export const cardSchema = z.object({
    _id : z.number(),
    name : z.string().optional(),
    imageUrl : z.string().optional(),
    url : z.string()
});


export const personajeSchema = cardSchema.extend({
    films: z.string(),
    shortFilms : z.string().optional(),
    tvShows : z.string().optional(),
    videoGames : z.string(),
    parkAttractions : z.string().optional(),
})
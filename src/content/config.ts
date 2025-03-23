import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
    })
})



export const collections = {
    'projects': projects,
  };
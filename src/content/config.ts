// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content"
// Define a `type` and `schema` for each collection+

const docSchema = z.object({
    title: z.string(),
    email: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
url: z.string(),
    image: z.object({
        url: z.string(),
        alt: z.string(),
    }).optional(),
    tags: z.array(z.string()),
})

const postsCollection = defineCollection({
    type: 'content',
    schema: docSchema
})
// Export a single `collections` object to register your collection(s)
export const collections = {
  novas: postsCollection,
}
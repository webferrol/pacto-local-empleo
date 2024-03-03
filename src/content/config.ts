// Import utilities from `astro:content`
import { defineCollection } from "astro:content"
// Schemas
import { novasSchema, linasEstratexicasSchema } from "@/schemas"



const postsCollection = defineCollection({
    type: 'content',
    schema: novasSchema
})
const linas = defineCollection({
    type: 'content',
    schema: linasEstratexicasSchema
})
// Export a single `collections` object to register your collection(s)
export const collections = {
  novas: postsCollection,
  'linas-estratexicas': linas
}
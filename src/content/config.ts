// 1. IMPORT UTILITIES FROM ASTRO:CONTENT
import { z, defineCollection } from "astro:content";
import { format } from "date-fns";

// 2. DEFINE YOUR COLLECTIONS
const postsCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    categories: z.array(z.string()),
    date: z
      .string()
      .transform((str: string | number | Date) =>
        format(new Date(str), "MMMM d, yyyy")
      ),
    featured: z.boolean().default(false),
    image: z.string(),
    title: z.string(),
  }),
});

// 3. EXPORT A SINGLE 'COLLECTIONS' OBJECT TO REGISTER YOUR COLLECTION(S)
//    THIS KEY SHOULD MATCH YOUR COLLECTION DIRECTORY NAME IN /src/content
export const collections = {
  posts: postsCollection,
};

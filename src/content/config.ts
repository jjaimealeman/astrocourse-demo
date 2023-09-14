import { defineCollection } from "astro:content";

const postCollection = defineCollection({
  // The path to this collection.
});

export const collections = {
  posts: postCollection,
};

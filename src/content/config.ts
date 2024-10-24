import { defineCollection, z } from "astro:content";

const workCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    img: z.string(),
    img_alt: z.string().optional(),
    link: z.string().optional(),
  }),
});
const portfolioCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    img: z.string(),
    img_alt: z.string().optional(),
    video: z.string(),
    images: z.array(z.string()),
  }),
});
const experienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    company: z.string(),
    publishDate: z.coerce.date(),
    period: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  work: workCollection,
  portfolio: portfolioCollection,
  experience: experienceCollection,
};

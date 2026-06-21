import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    github: z.string().url().optional(),
    pdf: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };

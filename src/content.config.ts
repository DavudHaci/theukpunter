import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

/**
 * "compare" = commercial money pages (top-level URLs, high-intent long-tail keywords)
 * "guides"  = informational articles (/guides/..., low-KD queries, topical authority)
 */
const compare = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/compare' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(165),
    h1: z.string(),
    targetKeyword: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    faq: z.array(faqSchema).default([]),
    order: z.number().default(99),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(165),
    h1: z.string(),
    targetKeyword: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    faq: z.array(faqSchema).default([]),
  }),
});

export const collections = { compare, guides };

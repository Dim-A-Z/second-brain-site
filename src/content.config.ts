import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const link = z.object({
  title: z.string(),
  url: z.string().url(),
});

const places = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/places' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    city: z.string(),
    address: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    period: z.string(),
    architect: z.string(),
    summary: z.string(),
    lookFor: z.string().optional(),
    photography: z.string().optional(),
    access: z.object({
      status: z.enum(['outside', 'open', 'limited']),
      text: z.string(),
      url: z.string().url().optional(),
    }),
    thenNow: z.object({
      status: z.enum(['exact', 'approximate', 'context']),
      text: z.string(),
      repeatInstructions: z.string(),
      historicalSourceUrl: z.string().url().optional(),
      repeatLatitude: z.number().optional(),
      repeatLongitude: z.number().optional(),
    }),
    sources: z.array(link).optional(),
    publications: z.array(link.extend({ type: z.string() })).optional(),
  }),
});

const routes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/routes' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    city: z.string(),
    description: z.string(),
    duration: z.string(),
    distance: z.string(),
    places: z.array(z.string()).min(1),
    interludes: z.array(z.object({
      after: z.string(),
      title: z.string(),
      text: z.string(),
      source: link.optional(),
    })).optional(),
    bonusStops: z.array(z.object({
      title: z.string(),
      address: z.string(),
      text: z.string(),
      latitude: z.number().optional(),
      longitude: z.number().optional(),
      after: z.string().optional(),
    })).optional(),
  }),
});

export const collections = { places, routes };

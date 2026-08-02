## Context

The repository contains only a README and local-only reference research. The first slice must establish a future-proof public content boundary while remaining a small static Astro project.

## Goals / Non-Goals

**Goals:**

- Generate the first route at a stable city/slug URL from validated Markdown.
- Reuse Place entries in ordered Route content.
- Preserve the field-guide experience and provide a progressively enhanced map.
- Keep all source candidates public-safe and statically deployable.

**Non-Goals:**

- Private-note export automation, CMS features, search, accounts, APIs, server rendering, exact walking directions, or a complete site navigation system.

## Decisions

1. Use Astro's current Content Layer API with glob loaders and Zod schemas. This validates public frontmatter and keeps filenames independent from page rendering. Hardcoded page data would make places non-reusable.
2. Resolve ordered place slugs during static path generation. A Route owns ordering while each Place remains the single source of stop details.
3. Render all field-guide text in HTML and treat Leaflet as progressive enhancement. This preserves content when JavaScript or tile loading fails.
4. Load Leaflet from installed package assets bundled by Astro. OpenStreetMap tiles require no key; the map receives only title, address, coordinates, order, and anchor.
5. Draw straight segments between ordered coordinates and label them explicitly as stop order rather than pedestrian routing.
6. Keep `_reference/` ignored and outside `src` and `public`. Only rewritten, reviewed public content enters the build graph.
7. Derive Yandex Maps and Google Maps walking links from the same ordered main Place coordinates supplied to Leaflet. This prevents route drift and adds no API dependency.
8. Store interludes and bonus stops on the Route because they explain transitions and optional detours specific to this walk. Bonus stops may have map coordinates but never enter main numbering or the main polyline.
9. Keep the primary Place history in Markdown while optional structured observation and photography fields support consistent progressive disclosure. Internal content-development prompts remain outside the public repository.
10. Bundle Manrope Variable through a package import so Cyrillic typography remains available without a runtime font CDN.

## Risks / Trade-offs

- [External map tiles require network access in the browser] → Keep every stop and its address in server-rendered HTML.
- [Current access information can become stale] → Preserve authoritative URLs where available and word guidance as something to verify.
- [Straight map segments can be mistaken for directions] → Display a clear note that the line indicates order only.
- [Content references can drift] → Validate Route place slugs while generating paths and fail the build for missing places.
- [External mapping providers may change URL behavior] → Generate documented no-key URLs in one component and retain the embedded Leaflet map.
- [Bonus markers could imply route order] → Use a star marker and exclude bonus coordinates from the numbered polyline.

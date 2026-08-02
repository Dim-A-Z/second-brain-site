## Context

The static Astro site has one published Route and a route-first home page. GitHub Pages already supplies the `/second-brain-site` base, and the existing route page has its own layout but no global site navigation. The change must introduce a broader personal identity without inventing empty content areas or altering the Route and Place content that is already public.

## Goals / Non-Goals

**Goals:**

- Present the accepted site title, description, and public social links from one small source.
- Provide the same useful Home and Travel navigation on the home, Travel, and route pages.
- Use existing Route collection metadata for cards on the home and Travel pages.
- Preserve static output, GitHub Pages base handling, the existing route URL, and the current visual language.

**Non-Goals:**

- New content types, a universal feed model, city taxonomy, filters, search, pagination, empty future sections, route editorial changes, a design system, a UI framework, JavaScript navigation, deployment changes, or private-repository integration.

## Decisions

1. Store only the public site title, exact description, and three social links in a small `site` configuration module. Keeping this metadata outside Markdown avoids pretending it is editorial Route content, while a broader configuration framework would be unnecessary.
2. Add one `SiteHeader` component that builds Home and Travel URLs from `import.meta.env.BASE_URL` and accepts the current page for `aria-current`. The route layout consumes the same header, so navigation behavior cannot drift between page types.
3. Load Route entries directly with Astro's existing content collection on both landing pages. Titles and descriptions remain owned by Route Markdown; the pages add only reader-facing presentation labels and base-aware canonical links.
4. Use a small presentational content-card component for the repeated card UI. It accepts display strings and a URL but creates no new universal content model; future content types can opt into the presentation without changing Route data.
5. Keep the Travel page as a static catalog over Route entries. It has no content collection, taxonomy, filtering, pagination, or alternate route URL.
6. Extend the existing warm-paper CSS with restrained header, landing-page, social-link, and card styles. Route detail components, map styling, fragment navigation, local Manrope loading, and deployment configuration remain unchanged.

## Risks / Trade-offs

- [There is no publication date for a true latest feed] → Feature the sole current Route and defer cross-type ordering until real additional content requires a model.
- [A root-relative link can fail on GitHub Pages] → Construct every new internal URL with `import.meta.env.BASE_URL` and inspect generated HTML.
- [Global styling could unintentionally alter the detailed route] → Add narrowly scoped classes and limit the route layout change to replacing its old home link with the shared header.
- [Site identity could be duplicated] → Import the shared configuration wherever title, description, or social URLs are rendered.

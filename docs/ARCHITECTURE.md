# Architecture

The intended content boundary is:

```text
Private knowledge repository
    -> future explicit public export
    -> this public Astro repository
    -> static public website
```

For the MVP, reviewed public Markdown lives directly in this repository. Its structure preserves a future explicit export boundary: the public site consumes only its own content collections and never reads private notes.

Astro performs static generation. There is no server adapter, database, backend, API, or additional UI framework. Leaflet provides the progressively enhanced route map; all route text remains available without JavaScript.

Responsibilities remain small: content schemas enforce public data shape, Markdown owns content, route pages resolve ordered place references, components render route UI, and the map component receives only the public fields it needs.

Site-wide public identity and social links live in a small presentation configuration module, while a shared header owns base-aware Home and Travel navigation. Travel is a derived landing page over the existing Route collection, not a new content type; Route Markdown remains the source for titles, descriptions, and canonical route URLs.

## Delivery

```text
GitHub repository
    -> GitHub Actions
    -> Astro static build
    -> GitHub Pages
```

GitHub Pages is the initial hosting target and remains replaceable infrastructure. Markdown content and Astro presentation do not depend on GitHub Pages-specific APIs, and a future custom domain must not require content-model changes.

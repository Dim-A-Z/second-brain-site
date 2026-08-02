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

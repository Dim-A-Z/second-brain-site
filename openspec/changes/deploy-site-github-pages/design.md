## Context

The site is already a static Astro project on the `main` branch of `Dim-A-Z/second-brain-site`. GitHub Pages hosts repository project sites below a repository-name path, so both the generated URLs and authored internal navigation must account for `/second-brain-site/`.

## Goals / Non-Goals

**Goals:**

- Deploy approved `main` commits through GitHub Actions to GitHub Pages.
- Generate and navigate the site correctly below `/second-brain-site/`.
- Preserve local development, static output, and hosting portability.

**Non-Goals:**

- A custom domain, preview deployments, deployment tokens, secrets, server rendering, a backend, a database, editorial changes, or changes to `publish-first-arbat-route`.

## Decisions

1. Set Astro `site` to `https://dim-a-z.github.io` and `base` to `/second-brain-site` while retaining `output: 'static'`. These are Astro's standard project-site settings and require no adapter.
2. Use `import.meta.env.BASE_URL` directly for the two authored page-to-page links. This keeps them correct in development and production without introducing a routing abstraction. Fragment-only stop links remain unchanged.
3. Use Astro's maintained GitHub Pages workflow pattern with `actions/checkout@v7`, `withastro/action@v6`, and `actions/deploy-pages@v5`. The Astro action detects the committed npm lockfile, builds the site, and uploads the Pages artifact.
4. Grant only `contents: read`, `pages: write`, and `id-token: write`. Deployment uses GitHub Pages OIDC permissions and requires no repository secrets, environment variables, or tokens.
5. Keep Markdown content and Astro components independent of GitHub Pages APIs. Hosting details remain configuration and workflow concerns so a later hosting change or custom domain does not require content-model changes.

## Risks / Trade-offs

- [A root-relative internal link can bypass the project base] -> Audit every URL construction in `src` and verify generated HTML.
- [Fragment links could be incorrectly prefixed] -> Leave `#stop-*` links unchanged and verify them in output.
- [Action versions can become outdated] -> Start with versions in Astro's current official GitHub Pages documentation and update delivery infrastructure independently of content.
- [Pages must be enabled in repository settings] -> Document the one-time manual selection of GitHub Actions as the Pages source.

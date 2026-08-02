## Why

The reviewed static Astro site is published in GitHub but is not yet delivered as a public website. It needs a minimal, repeatable deployment path that preserves the static architecture and supports the repository project-site URL.

## What Changes

- Configure Astro for the `https://dim-a-z.github.io/second-brain-site/` GitHub Pages project site.
- Make internal navigation aware of the `/second-brain-site/` base path while preserving fragment-only and external links.
- Add the official Astro GitHub Pages workflow for pushes to `main` and manual dispatches.
- Record GitHub Pages as the initial, replaceable hosting target.

## Capabilities

### New Capabilities

- `github-pages-deployment`: Static GitHub Pages delivery with repository-base-path navigation and build verification.

### Modified Capabilities

None.

## Impact

This adds one GitHub Actions workflow and updates Astro delivery configuration, two internal links, and architecture documentation. It changes no editorial content, visual design, content model, backend behavior, or existing OpenSpec change.

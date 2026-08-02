# github-pages-deployment Specification

## Purpose
TBD - created by archiving change deploy-site-github-pages. Update Purpose after archive.
## Requirements
### Requirement: GitHub Pages deployment
The repository SHALL provide a GitHub Actions workflow that builds and deploys the static Astro site when an approved commit is pushed to `main`, and SHALL allow a manual workflow dispatch.

#### Scenario: Main is updated
- **WHEN** an approved commit is pushed to `main`
- **THEN** GitHub Actions builds the committed site and deploys its artifact to the `github-pages` environment

#### Scenario: Deployment is manually requested
- **WHEN** an authorized maintainer invokes the workflow dispatch
- **THEN** the same static build and Pages deployment jobs run

### Requirement: Repository project-site base path
The Astro build SHALL use `https://dim-a-z.github.io` as its site origin and `/second-brain-site` as its base path.

#### Scenario: Project-site configuration is built
- **WHEN** the production build runs
- **THEN** generated site URLs and assets are rooted below `/second-brain-site/`

### Requirement: Base-aware internal navigation
Authored links between site pages SHALL include the configured Astro base path, while external URLs and fragment-only navigation SHALL remain unchanged.

#### Scenario: Visitor opens an internal link
- **WHEN** a visitor selects the route card or the route page's home link on GitHub Pages
- **THEN** navigation remains below `/second-brain-site/`

#### Scenario: Visitor selects a stop fragment
- **WHEN** a visitor selects a stop-navigation or map-popup anchor
- **THEN** the link remains a `#stop-*` fragment on the current route page

#### Scenario: Visitor selects an external link
- **WHEN** a visitor selects a map provider, source, access, historical-material, or publication URL
- **THEN** the original external URL is used without the Astro base path

### Requirement: Route page availability
The production build SHALL emit the Arbat route at `/second-brain-site/routes/moscow/arbat-architecture/`.

#### Scenario: Arbat route is built for Pages
- **WHEN** the production build completes with the repository base path
- **THEN** the route page is present at the project-site route URL

### Requirement: Static deployment architecture
The deployment configuration SHALL retain static Astro output and SHALL NOT add a backend, database, server adapter, runtime server, deployment secret, environment value, or private identifier.

#### Scenario: Deployment configuration is inspected
- **WHEN** the Astro configuration, dependencies, and workflow are reviewed
- **THEN** deployment consists only of a static build and GitHub Pages artifact deployment using repository permissions

### Requirement: Local development compatibility
The existing local development command SHALL continue to run the Astro development server with base-aware navigation.

#### Scenario: Developer runs the site locally
- **WHEN** `npm run dev` is started
- **THEN** the site is served by Astro and its internal navigation uses the configured base

### Requirement: Production build verification
The GitHub Pages configuration SHALL produce a successful local production build before review.

#### Scenario: Production build is checked
- **WHEN** `npm run build` runs with the Pages configuration
- **THEN** it exits successfully and emits the static site below the configured base path

## ADDED Requirements

### Requirement: Public site identity
The site SHALL present `Dim_A_Z log` as its public title and SHALL present the exact accepted public description without rendering the previous placeholder.

#### Scenario: Home identity is rendered
- **WHEN** the home page is built
- **THEN** it displays `Dim_A_Z log` and `Про жизнь, в которой есть работа, путешествия, книги, спорт и интерес к новому. Личный опыт, наблюдения и эксперименты.`

#### Scenario: Placeholder is excluded
- **WHEN** public source and generated pages are inspected
- **THEN** the previous temporary site-name copy is absent

### Requirement: Public social links
The home page SHALL render the accepted Telegram, Дзен, and MAX links as external site-identity links.

#### Scenario: Social destinations are rendered
- **WHEN** a visitor views the home page
- **THEN** Telegram links to `https://t.me/dimazlog`, Дзен links to `https://dzen.ru/dimazlog`, and MAX links to `https://max.ru/join/puvSYkV_S8LxUVX9NIkXmWXMfOYlHn_02uY0StM4j9k`

#### Scenario: Social destination is selected
- **WHEN** a visitor follows a social link
- **THEN** the external URL is used without the Astro base path

### Requirement: Useful global navigation
The home page, Travel page, and Route page SHALL share navigation containing only `Главная` and `Путешествия`, with the site title acting as a Home link.

#### Scenario: Navigation is built for GitHub Pages
- **WHEN** any current public page is generated with the configured Astro base
- **THEN** Home points to `/second-brain-site/` and Travel points to `/second-brain-site/travel/`

#### Scenario: Route page navigation is shown
- **WHEN** a visitor views the existing Arbat route
- **THEN** the visitor can navigate to both Home and Travel without changing any route fragment links

### Requirement: Personal home page
The home page SHALL introduce the personal site, show the public social links, and present the existing Arbat Route as the current latest public material using its Route content metadata.

#### Scenario: Current material is surfaced
- **WHEN** the home page is built with the existing Route collection
- **THEN** a reader-facing route card displays the Route title and description and links to `/second-brain-site/routes/moscow/arbat-architecture/`

#### Scenario: Travel catalog is promoted
- **WHEN** a visitor views the latest-material section
- **THEN** a `Все путешествия →` link points to `/second-brain-site/travel/`

#### Scenario: Future sections have no content
- **WHEN** only the Arbat Route is published
- **THEN** no empty Notes, Projects, Books, Sport, or other speculative section or navigation item is rendered

### Requirement: Travel landing page
The site SHALL generate `/travel/` as a thematic landing page over existing public Route entries without creating a new content type or moving Route URLs.

#### Scenario: Travel page is generated
- **WHEN** the static site builds
- **THEN** `/second-brain-site/travel/` presents `Путешествия` and `Маршруты, места и истории, собранные во время поездок и прогулок.`

#### Scenario: Existing route is listed
- **WHEN** the Travel page loads the Route collection
- **THEN** it presents the existing Arbat Route metadata and links to `/second-brain-site/routes/moscow/arbat-architecture/`

#### Scenario: Additional routes are added later
- **WHEN** another valid Route entry exists
- **THEN** the Travel page can render another route card without adding taxonomy, filters, pagination, or search

### Requirement: Existing route preservation
The personal-site integration SHALL preserve the existing Route and Place content, route URL, map behavior, external actions, and fragment navigation.

#### Scenario: Route integration is reviewed
- **WHEN** implementation and generated output are compared with the deployed commit
- **THEN** only shared layout navigation changes affect the Route page and its editorial Markdown and route-detail components remain unchanged

### Requirement: Static public architecture
The personal-site shell SHALL preserve the configured GitHub Pages site and base, static output, local Manrope font, and public/private boundary without adding a backend, database, server adapter, secret, or private metadata.

#### Scenario: Production site is built
- **WHEN** `npm run build` runs
- **THEN** Home, Travel, and the existing Route are emitted as static pages under the `/second-brain-site` public base

# route-page Specification

## Purpose
TBD - created by archiving change publish-first-arbat-route. Update Purpose after archive.
## Requirements
### Requirement: Route page generation
The site SHALL generate a public static route page from each valid Route Markdown file.

#### Scenario: Route Markdown is built
- **WHEN** the site builds with the Arbat Route Markdown file
- **THEN** `/routes/moscow/arbat-architecture/` is emitted as a static page

### Requirement: Ordered route stops
The route page SHALL render stops in the order declared by the Route content.

#### Scenario: Declared order is displayed
- **WHEN** a Route declares an ordered list of Place slugs
- **THEN** numbered stop sections follow that exact order

### Requirement: Place reuse
The route page SHALL load stop content from Place Markdown files without duplicating full Place content in the Route.

#### Scenario: Place reference is resolved
- **WHEN** a Route references a valid Place slug
- **THEN** the corresponding Place title, metadata, field-guide information, and body are rendered

### Requirement: Interactive map
The route page SHALL provide an interactive map containing every stop with coordinates and SHALL identify the corresponding stop when a marker is selected.

#### Scenario: All coordinate-bearing stops are mapped
- **WHEN** the route contains places with coordinates
- **THEN** the map displays a numbered marker for each place and a polyline in stop order

#### Scenario: Marker identifies a stop
- **WHEN** a visitor selects a marker
- **THEN** its popup shows the place title and address and provides a link to that stop section

### Requirement: External map navigation
The route page SHALL provide Yandex Maps and Google Maps navigation links generated from the ordered coordinates of the main Route places.

#### Scenario: External route links are rendered
- **WHEN** a Route contains ordered places with coordinates
- **THEN** the page displays Yandex Maps and Google Maps actions whose route points follow that order

### Requirement: Field guide information
Each place SHALL support access information and Then/Now information, and optional links SHALL render only when supplied.

#### Scenario: Field-guide cards render
- **WHEN** a Place supplies access and Then/Now data
- **THEN** both are presented with their status, text, and available actions

#### Scenario: Optional field-guide link is absent
- **WHEN** an optional access or historical source URL is not supplied
- **THEN** no empty or nonfunctional link is rendered

#### Scenario: Historical source is not an access action
- **WHEN** a Place has a general historical source but no actionable visitor URL
- **THEN** the source appears only in source or historical-material UI and no visit action is rendered

### Requirement: Route interludes
The route page SHALL render Route-owned editorial interludes after their declared main Place stops.

#### Scenario: Interlude is positioned
- **WHEN** an interlude declares a valid `after` Place slug
- **THEN** its title, narrative, and optional source appear between that stop and the next main stop

### Requirement: Bonus stops
The route page SHALL render Route-owned bonus stops without changing the numbering or order of main Place stops.

#### Scenario: Bonus stop is presented
- **WHEN** a Route supplies a bonus stop
- **THEN** it is visually identified with a star and the main stops remain numbered 1 through 9

#### Scenario: Bonus coordinate is mapped
- **WHEN** a bonus stop supplies coordinates
- **THEN** Leaflet displays a distinct star marker and excludes that coordinate from the main route-order polyline

### Requirement: External publications
A Place SHALL support links to external publications, and the route page SHALL omit the publications section when none exist.

#### Scenario: Publications are supplied
- **WHEN** a Place contains one or more publication links
- **THEN** the page displays their type, title, and URL

#### Scenario: Publications are absent
- **WHEN** a Place has no publication links
- **THEN** no empty publication section is rendered for that stop

### Requirement: Mobile usability
The route page SHALL remain readable and usable on a narrow mobile viewport.

#### Scenario: Narrow viewport
- **WHEN** the page is viewed at 320 CSS pixels wide
- **THEN** content remains within the viewport, controls remain usable, and stop information follows a readable single-column flow

### Requirement: Public safety
Local reference material and internal content-development prompts SHALL be excluded from Git candidates and from the built site.

#### Scenario: Reference material remains local
- **WHEN** Git status and generated output are inspected
- **THEN** `_reference/` is ignored and no `_reference` file is included in the site output

#### Scenario: Editorial planning remains private
- **WHEN** public Place content and generated pages are inspected
- **THEN** no prompts for future notes, articles, podcasts, or reels are stored or rendered

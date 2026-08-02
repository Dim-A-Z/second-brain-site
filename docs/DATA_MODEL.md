# Data Model

Only public-safe fields required by the first route are modeled.

## Place

- `slug`: stable content slug
- `title`: display title
- `city`: city slug
- `address`: street address
- `latitude`, `longitude`: map coordinates
- `period`: construction period text
- `architect`: architect attribution text
- `summary`: short route-context summary
- `lookFor` (optional): what to notice on location
- `photography` (optional): general photographic observation
- `access`
  - `status`: presentation status
  - `text`: current access guidance
  - `url` (optional): actionable official visitor, ticket, booking, or event URL; never a general historical source
- `thenNow`
  - `status`: presentation status
  - `text`: historical comparison guidance
  - `repeatInstructions`: instructions for repeating the view
  - `historicalSourceUrl` (optional): historical material
  - `repeatLatitude`, `repeatLongitude` (optional): repeat viewpoint
- `sources` (optional): labeled source links
- `publications` (optional): external publication links
- Markdown body: history and on-location details

## Route

- `slug`: stable content slug
- `title`: display title
- `city`: city slug
- `description`: short thesis
- `duration`: duration text
- `distance`: distance text
- `places`: ordered Place slug references
- `interludes` (optional): route-specific editorial transitions
  - `after`: Place slug after which the interlude appears
  - `title`: interlude heading
  - `text`: short narrative
  - `source` (optional): labeled source link
- `bonusStops` (optional): route-local optional locations that do not enter main numbering
  - `title`: display title
  - `address`: street address
  - `text`: short context
  - `latitude`, `longitude` (optional): map coordinates
  - `after` (optional): main Place slug after which the bonus appears
- Markdown body: route-level narrative

## External publication

- `type`: publication kind, such as Dzen, podcast, or reel
- `title`: link label
- `url`: destination

No IDs, timestamps, tags, aliases, SEO fields, social metadata, or private/public flags are modeled.

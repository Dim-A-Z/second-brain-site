## Why

The deployed site currently presents one route as if it were the site's entire identity. It needs a small personal-site shell that introduces the author, exposes public channels, and makes the existing travel material discoverable without implying that all future publishing will be travel-only.

## What Changes

- Establish `Dim_A_Z log` and the accepted public description as shared site identity.
- Add restrained, reusable navigation containing only Home and Travel.
- Rework the home page into a personal landing page with public social links and the existing Arbat route as the current latest material.
- Add a `/travel/` landing page that lists the existing Route content without moving or duplicating it.
- Integrate Home and Travel navigation into the existing route layout while preserving the route itself.
- Record the personal-site purpose and derived landing-page structure in repository documentation.

## Capabilities

### New Capabilities

- `personal-site-navigation`: Public site identity, base-aware global navigation, personal home presentation, social links, and a Travel landing page over existing Route content.

### Modified Capabilities

None.

## Impact

This affects the home page, a new Travel page, a small shared site configuration, one reusable header component, the existing route layout, global styling, and minimal product/architecture documentation. It changes no content schema, Route or Place Markdown, deployment workflow, backend behavior, dependency, or existing OpenSpec change.

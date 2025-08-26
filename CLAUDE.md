# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual (English/Russian) website for a clinical psychologist/sexologist built with SvelteKit 2.x and modern web technologies. The site features service descriptions, educational background, certificates gallery, and client consultation forms.

## Development Commands

```bash
# Install dependencies (uses pnpm)
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm check        # Run once
pnpm check:watch  # Watch mode

# Code quality
pnpm lint         # Check code style
pnpm format       # Auto-format code
```

## Tech Stack

- **Framework**: SvelteKit 2.16.1 with Svelte 5 (uses modern runes syntax)
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 (next generation) via PostCSS
- **Internationalization**: Paraglide (inlang) - English (source) and Russian
- **UI Components**: Lucide icons, PhotoSwipe for galleries
- **Deployment**: Netlify static site generation

## Architecture & Key Patterns

### Routing Structure
All routes follow consistent patterns:
- Each route has `+page.svelte` (and optionally `+page.server.ts` for data loading)
- Routes are organized by feature: `/certificates`, `/client`, `/contacts`, `/education`, `/methods`, `/questionnaire`, `/requests`
- Root layout (`src/routes/+layout.svelte`) provides sidebar navigation and Google Analytics

### Component Patterns
- Components use Svelte 5 runes: `$props()` for props, `$state()` for reactive state
- Shared components in `src/lib/`: Gallery, Logo, Sidebar
- Gallery component uses PhotoSwipe for interactive image viewing

### Internationalization
- Configured via Paraglide in `project.inlang/`
- Messages stored in `messages/en.json` and `messages/ru.json`
- Language routing handled by hooks in `src/hooks.ts` and `src/hooks.server.ts`
- Use `import * as m from "$lib/paraglide/messages"` for translations

### Styling
- Global styles in `src/app.css` with Tailwind directives
- Custom theme colors defined: primary, secondary, accent
- Tailwind plugins: forms, typography, aspect-ratio, container-queries

### State Management
- Minimal global state using Svelte stores (`src/lib/stores.ts`)
- Currently only manages sidebar open/closed state

## Important Configuration Details

- **TypeScript**: Strict mode enabled, path aliases configured ($lib, $env)
- **Static Assets**: Images stored in `static/images/` (diplomas, contact icons)
- **Build Output**: Configured for Netlify with prerendering enabled
- **No Testing Framework**: Currently no test setup (no Vitest, Jest, or Playwright)
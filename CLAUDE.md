# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SvelteKit 2.x application built with TypeScript and Tailwind CSS v4. It appears to be a personal/professional website with multilingual support (English and Russian).

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
pnpm check

# Linting and formatting
pnpm lint      # Check code style
pnpm format    # Auto-format code
```

## Architecture

### Tech Stack
- **Framework**: SvelteKit 2.x with Svelte 5
- **Styling**: Tailwind CSS v4 (via PostCSS)
- **Language**: TypeScript
- **Internationalization**: Paraglide (configured in `project.inlang/`)
- **Deployment**: Netlify (using `@sveltejs/adapter-netlify`)

### Key Directories
- `src/routes/` - Page components for different sections (certificates, client, contacts, education, methods, questionnaire, requests)
- `src/lib/` - Shared components (Gallery, Logo, Sidebar) and utilities
- `messages/` - Translation files (en.json, ru.json)
- `static/images/` - Static assets including diplomas and contact icons

### Important Configuration
- Internationalization is handled by Paraglide with source language English and available languages English/Russian
- The app uses client-side rendering with prerendering enabled for static pages
- Tailwind CSS is configured with custom plugins for forms, typography, aspect-ratio, and container queries
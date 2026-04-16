# CLAUDE.md — Relocation Website

## Project Type
Next.js 14 multilingual website. TypeScript + Tailwind CSS + next-intl.

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint

## Architecture
- App Router with `[locale]` dynamic segment
- 4 locales: nl (default), en, de, es
- Translation files in `src/messages/*.json`
- Shared components in `src/components/`
- i18n routing via `src/i18n/routing.ts`

## Content Source
All website content comes from `ai-whisperers/relocation-business` repo business documents. Company name uses placeholder `[NOMBRE DE EMPRESA]` throughout.

## Key Conventions
- Company name: NOT FINALIZED — use placeholder or generic branding
- Primary locale is Dutch (nl), not English
- Brand colors: Navy (#1B2A4A), Gold (#C9A84C), White
- Fonts: Playfair Display (serif headings), Inter (sans body)
- All pricing in USD, advance payment only
- Programs: Paraguay Business (USD 4,400) and Paraguay Investor (USD 6,900)

## When Editing Content
- Changes to text content should be reflected in ALL 4 translation files
- Pricing changes must match source documents in relocation-business repo
- Maintain consistent brand voice: professional but warm, direct but empathetic

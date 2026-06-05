# Lotus EME — Company Website

Marketing website for **Lotus Electrical Mechanical Engineering Co., Ltd.**, a
Thai engineering contractor specializing in electrical, sanitary, fire
protection and air-conditioning systems.

Single-page site with bilingual (Thai / English) content and a minimal,
modern dark theme.

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS** with a small set of **shadcn/ui** components
- Deployed on **Firebase App Hosting** (`apphosting.yaml`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:9002
```

## Scripts

| Script              | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the dev server (Turbopack)     |
| `npm run build`     | Production build (type-checked)      |
| `npm run start`     | Serve the production build           |
| `npm run typecheck` | Run TypeScript with no emit          |

## Configuration

Set the production origin so canonical URLs, the sitemap and Open Graph tags
resolve correctly:

```bash
# .env (or your hosting provider's env settings)
NEXT_PUBLIC_SITE_URL=https://www.lotus-eme.com
```

## Project structure

```
src/
  app/            App Router entry, metadata, sitemap, robots
  components/
    sections/     Page sections (hero, about, services, …)
    ui/           shadcn/ui primitives actually used by the site
  lib/            Site config, i18n, content data, translations
```

Content (services, projects, affiliates, nav) lives in `src/lib/data.ts` and
copy in `src/lib/translations.ts`.

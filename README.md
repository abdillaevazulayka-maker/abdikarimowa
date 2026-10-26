# Ilim Bulagy Madrasa Website

This project is a static Vite + React website for the Kyrgyz madrasa website "Ilim Bulagy".

## Local development

```bash
npm install
npm run dev -- --host 0.0.0.0
```

## Production build

```bash
npm run build
```

## Deployment

The project is configured for Vercel with a Vite preset and a SPA rewrite fallback in `vercel.json`.

## Notes

- The site is primarily in Kyrgyz.
- Content is stored in JSON files under `src/data`.
- Placeholder contact details remain intentionally empty until verified by the administration.

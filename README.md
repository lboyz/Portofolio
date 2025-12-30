# Portfolio Website

Modern single-page portfolio built with React, Vite, TypeScript, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Scripts

- `npm run dev` - start local development server
- `npm run build` - typecheck and build for production
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Netlify Deployment

1. Push this repository to GitHub (or another Git provider supported by Netlify).
2. In Netlify, create a new site and connect the repository.
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. Netlify will handle future builds on every push.

Optional: set a custom domain in Netlify once the first deployment succeeds.

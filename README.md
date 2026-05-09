# Sebastian Larsson — Portfolio

Personal portfolio site built with **React 18 + TypeScript + Vite**. Single-page layout with a hero, about section, project grid, and a clickable modal for each project's case study. Styled with modern hand-written CSS — no framework dependency.

**Live site:** https://sebbe-portfolio.onrender.com

---

## Tech stack

- **React 18** + **TypeScript**
- **Vite 5** for dev server and production build
- Plain CSS with custom properties (no Tailwind / no UI library)
- Project images served from [placehold.co](https://placehold.co/) — easy to swap for real screenshots later

## Project structure

```
SebbePortfolio2/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectModal.tsx
│   │   └── Projects.tsx
│   ├── data/
│   │   └── projects.ts        ← edit this to add / remove projects
│   ├── styles/
│   │   └── global.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── render.yaml                ← Render Blueprint config
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Run locally

Requires Node.js **18+** (Node 20 LTS recommended).

```bash
npm install
npm run dev          # starts dev server on http://localhost:5173
npm run build        # produces a static bundle in ./dist
npm run preview      # serves the built bundle for sanity-checking
```

## Edit content

| What                | Where                              |
| ------------------- | ---------------------------------- |
| Projects list       | `src/data/projects.ts`             |
| Project cover image | `image:` field on each project (`https://placehold.co/...`) |
| Hero / about copy   | `src/components/Hero.tsx`, `About.tsx` |
| Contact links       | `src/components/Contact.tsx`       |
| Colors / fonts      | `:root { ... }` in `src/styles/global.css` |

To add a new project: open `src/data/projects.ts`, copy any existing project object, and fill in the fields. The card and modal will pick it up automatically.

---

## Deploy to Render

This repo ships a [`render.yaml`](./render.yaml) Blueprint, so Render can configure everything automatically. Two options below — Blueprint is the easiest.

### Option A — Blueprint (recommended, 1-click)

1. **Push the repo to GitHub** (Render reads the source from a Git provider).
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-user>/<your-repo>.git
   git push -u origin main
   ```
2. Sign in at <https://dashboard.render.com> and connect your GitHub account if you haven't.
3. Click **New +** → **Blueprint**.
4. Pick the repository you just pushed. Render will detect `render.yaml`.
5. Confirm the service name (`sebbe-portfolio`), then click **Apply**.
6. Wait ~2 minutes for the first build. You'll get a URL like
   `https://sebbe-portfolio.onrender.com`.

That's it — every push to `main` will auto-redeploy. Pull-request previews are enabled in the blueprint.

### Option B — Manual setup (no Blueprint)

If you'd rather click through the UI:

1. Push the repo to GitHub (same as above).
2. In the Render dashboard click **New +** → **Static Site**.
3. Connect the repo.
4. Fill in the build settings:
   - **Branch:** `main`
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
5. Open the **Redirects/Rewrites** tab and add:
   - **Source:** `/*`
   - **Destination:** `/index.html`
   - **Action:** `Rewrite`
   This makes deep-linking work for any client-side routes you add later.
6. Click **Create Static Site**. First deploy takes a couple minutes.

### Custom domain (optional)

In the service's **Settings → Custom Domains** tab, add a domain you own (e.g. `sebbelarsson.dev`). Render gives you a CNAME / A-record to set on your DNS provider. HTTPS certificates are issued automatically.

### Environment variables

The site is fully static and needs **no environment variables**. If you add a contact-form backend or analytics later, set them under **Environment** in the Render dashboard.

### Updating the site

Just push to `main`:

```bash
git add -A
git commit -m "Update projects"
git push
```

Render watches the branch and redeploys on every push.

---

## License

MIT — feel free to fork and use as a starting point for your own portfolio.

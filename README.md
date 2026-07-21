# College Project Showcase

A simple React website to showcase final year college projects. Projects are
shown as cards; clicking a card opens a details view with the full description,
**price in Indian Rupees (₹)** and contact buttons (WhatsApp / Phone / Email).

Built with **React + Vite**. Ready to push to GitHub and deploy on Vercel.

## Run locally

```bash
npm install     # install dependencies (first time only)
npm run dev     # start dev server at http://localhost:5173
```

## Build for production

```bash
npm run build   # output goes to /dist
npm run preview # preview the production build locally
```

## How to customise

| What to change            | Edit this file                   |
| ------------------------- | -------------------------------- |
| Contact details / brand   | `src/data/siteConfig.js`         |
| Projects (add/edit/price) | `src/data/projects.js`           |
| Colours & styling         | `src/index.css` (`:root` at top) |

Each project in `src/data/projects.js` has a `price` field (a plain number in
INR) and fields for title, category, tech tags, description, features and
deliverables. Add a new object to the array to add a new project card.

## Deploy to Vercel

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: college project showcase"
   git branch -M main
   git remote add origin https://github.com/Venkat4655/CollegeProject.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the
   GitHub repo.
3. Vercel auto-detects Vite. Keep the defaults:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Every future `git push` redeploys automatically.

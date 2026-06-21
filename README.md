# elliotchen02.github.io

My personal web portfolio, built with [Astro](https://astro.build/) and hosted on GitHub Pages. Click [here](https://elliotchen02.github.io/) to visit.

## Local development

Requires Node 20+ (this repo uses Node 22 via nvm). All dependencies are installed locally into `node_modules/` — nothing is installed globally.

```bash
npm install        # install dependencies (first time only)
npm run dev        # start dev server at http://localhost:4321
npm run build      # build static site into dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  content/          # markdown content (projects, blog) as content collections
  content.config.ts # collection schemas
  components/       # Header, Footer, ParticlesHero, ProjectCard, FormattedDate
  layouts/          # BaseLayout (shared <head>, nav, footer)
  pages/            # routes: home, /projects, /blog, 404
  styles/           # global.css (dark theme tokens)
  consts.ts         # site metadata + nav links
public/assets/      # images, PDFs (served as-is)
```

## Adding content

- New project: add a markdown file to `src/content/projects/`. Set `featured: true` to surface it on the home page.
- New blog post: add a markdown file to `src/content/blog/`.

Each file needs front matter matching the schema in `src/content.config.ts` (`title`, `date`, `description`, and optional `github`/`pdf` for projects).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. The repository's Pages source must be set to "GitHub Actions" (Settings -> Pages -> Build and deployment -> Source).

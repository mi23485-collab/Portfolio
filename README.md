# Maimuna's portfolio starter

A small site for learning **TypeScript** (the language of the app) and **Playwright** (browser tests).

## What each important file is

| File | Why it exists |
|---|---|
| `src/types.ts` | The `Project` type  the shape of one project card |
| `src/data/projects.ts` | Real project data that must match that type |
| `src/App.tsx` | The page: home, about, projects, contact |
| `src/components/` | Smaller reusable pieces (`Nav`, `ProjectCard`) |
| `tests/portfolio.spec.ts` | Playwright tests that open a browser and check the page |
| `playwright.config.ts` | Tells Playwright to start the site, then run tests |

## Run the site

```bash
cd portfolio
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Run Playwright tests

First time only, install browsers:

```bash
npx playwright install chromium
```

Then:

```bash
npm test
```

`npm run test:ui` opens Playwright's visual test runner.

## How to practice

1. Change your name or email in `src/App.tsx`.
2. Add a fourth project in `src/data/projects.ts`.
3. Add a Playwright test that looks for that new project title.
4. Run `npm test` and watch it pass.

If you leave out a field on a project, TypeScript will complain  that is the point.
# Portfolio
# Portfolio

# AGENTS.md

Repository-specific guide for coding agents working in `ushira.com`.

Precedence: the nearest `AGENTS.md` in the directory tree wins.

## Commands

Run commands from repo root with `pnpm`.

- Install deps: `pnpm install`
- Build (CI-quality compile): `pnpm build` (`astro check && astro build`)
- Preview production build: `pnpm preview`
- Lint: `pnpm lint` (`oxlint`)
- Format: `pnpm format` (`oxfmt`)
- Full check: `pnpm check` (`pnpm format:check && pnpm lint && pnpm build`)

Do not run `pnpm dev` unless the user explicitly asks. The user owns the dev server lifecycle.

## Testing

This repo has no dedicated unit/integration test runner in `package.json`.

- Primary validation path: `pnpm check`
- Fast validation for small edits: `pnpm build`
- After major config/dependency/refactor changes: run `pnpm check`, then ask user to restart their dev server manually

CI status: `confidence: low`

- TODO: verify GitHub Actions or external CI command parity (no `.github/workflows/*` detected)

## Project Structure

- App framework: Astro 6 static site with Vercel adapter
- Main source: `src/`
- Pages/routes: `src/pages/` (`/blog/[...slug]`, `/og/[...route].ts`, `/rss.xml.ts`)
- Content collection: `src/content/blog/*.mdx` with schema in `src/content.config.ts`
- Layout/theme entry: `src/layouts/Layout.astro`
- Shared data: `src/lib/data/` (`structuredData.ts`, `projects.ts`, `work.ts`, `socials.ts`, `wakapi.ts`)
- Static assets: `public/`

## Code Style

Tooling-backed style:

- Oxfmt is canonical (`.oxfmtrc.json`): tabs, `printWidth: 140`, semicolons, double quotes
- Oxlint enforces TS + Astro + a11y rules (`.oxlintrc.json`)
- TypeScript strict config via `astro/tsconfigs/strict` (`tsconfig.json`)

Conventions to preserve:

- Keep Astro pages/components in `.astro`, typed helpers/data in `.ts`
- Keep blog frontmatter aligned with `src/content.config.ts` required fields (`title`, `description`, `date`, `tags`)
- Reuse existing theme tokens and typography setup in `src/layouts/Layout.astro` and `tailwind.config.mjs`

Style example:

```astro
---
import Layout from "../layouts/Layout.astro";
const title = "Page title";
---

<Layout title={title}>
	<h1>{title}</h1>
</Layout>
```

## Git Workflow

- Keep changes scoped to the requested task
- Check state before and after edits: `git status --short` and `git diff`
- Prefer small, reviewable commits with imperative subject lines
- Do not amend existing commits unless the user explicitly asks
- Do not push unless the user explicitly asks

## Boundaries

### Always

- Follow existing Astro + Tailwind + content-collection patterns
- Run the smallest relevant validation command, then escalate to `pnpm check` for broader-impact changes
- Report exactly what was validated and what was not

### Ask first

- Dependency additions or major version upgrades
- Changes to deployment/runtime config (`astro.config.mjs`, Vercel-related behavior, env handling)
- Destructive content changes (bulk delete/move in `src/content/blog/`)

### Never

- Never run or restart `pnpm dev` unless user requests it
- Never use destructive git commands (`reset --hard`, force push) unless user explicitly requests

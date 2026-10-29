# kb — the support knowledge base

**kb** = knowledge base. What the support desk knows about how our products break, written
down where the code can keep it honest.

One desk takes reports for every product we run: `sched-prod` (calendar invites for about
300k people) and the rest. When something
goes wrong, the reports reach the desk first. This kb is how the desk triages them, what each
incident turned out to be, and why we decided what we decided.

## What's here

```
src/routes/kb/      the pages (.svx: Markdown with components)
  triage/           how the desk handles incoming reports
  incidents/        one page per big ticket
  decisions/        numbered decision records
src/lib/kb/         components and the logic they run
src/lib/layouts/    the frame every page shares
src/lib/data/       exports from the ticket system
```

## Conventions

- Words in the page, logic in `src/lib` (imported as `#lib/…`). A number that can be computed belongs in a component.
- Every page starts with frontmatter: `title`, `owner`, `status`, `reviewed`.
- A decision is never edited after it is accepted. A new record replaces it.
- A page you add is signed: its frontmatter carries your `signature` and it ends with `<RenderStamp {signature} />`, so the desk knows who wrote it.

## Owners

Support desk. Decision records: whoever signed them.

---

Exported 2026-10-04 from the `support` repo, `apps/kb/` → `src/`.

## S01E03 review — elnorbiako

- [Current signed outcome page](src/routes/kb/incidents/4471-outcome/+page.svx)
- [Original signed analysis and decision](src/routes/kb/decisions/0002-dedupe-by-cause/+page.svx)
- [Rendered HTML](docs/kb/incidents/4471-outcome/index.html) (serve `docs/` to load its styles and interactions)
- [Rendered screenshot](rendered/4471-review.png)
- [Parser issue](https://github.com/elnorbiako/megadev-s01e03/issues/1)
- [Hint issue](https://github.com/elnorbiako/megadev-s01e03/issues/2)
- [Reproducible report membership and counts](audit.json)
- [GitHub routine for later sessions](.agents/skills/github-course/SKILL.md)

### Build and inspect

Use Node.js 24+ (native TypeScript stripping is used by the audit):

```sh
npm ci --registry=https://registry.npmjs.org
npm test
npm run build
npm run preview -- --port 4173
```

Open http://127.0.0.1:4173/kb/incidents/4471-outcome/.
The 5 October desk update says the parser was fixed (completed), while the
booking-v3 hint will not be fixed because the form was retired (not planned).
The static site is committed under `docs/`; no public web host is required.
The date of review is the session's current date; data remains the 4 October export.
The original accepted decision is unchanged. The new record supersedes its advice.
The rendered stamp is computed by the supplied `RenderStamp` component from the
frontmatter signature. It is not a hand-typed desk reference.

Tests reject duplicate-ID conflicts, assert the two cause counts, preserve the
five anomalous reports with a caveat, check misleading intake labels, exercise
dedupe boundaries, and verify the actual built page's counts and signature.


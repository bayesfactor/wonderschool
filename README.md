# Wonderschool

Static lesson site for a class of four, grades 2–6. No build step, no framework, no dependencies — plain HTML and one stylesheet. Vercel serves it as-is.

---

## Deploying it the first time

The git repository is already initialised and committed. You do the two steps that need your accounts.

**1. Create an empty repo on GitHub** (github.com/new). Name it `wonderschool`. Do **not** let GitHub add a README, .gitignore or licence — the repo already has them.

**2. Push, from Terminal on your Mac:**

```bash
cd ~/"Library/CloudStorage/GoogleDrive-timholme@gmail.com/My Drive/2026-27 sabbatical/wonderschool"
git remote add origin https://github.com/bayesfactor/wonderschool.git
git push -u origin main
```

(The tilde sits outside the quotes on purpose — inside them bash treats it as a literal `~` and the `cd` fails.)

The branch is already `main` and the first commit is already made, so there is nothing to add or commit before you push.

**3. Import it at [vercel.com/new](https://vercel.com/new).** Pick the `wonderschool` repo. Vercel will detect a static site — leave every setting at its default (Framework Preset: Other, no build command, output directory blank). Click Deploy.

You get `wonderschool.vercel.app`, or whatever name Vercel assigns if that one is taken. You can change it later under Project → Settings → Domains.

## After that

Every push to `main` redeploys automatically, usually in under thirty seconds:

```bash
git add -A
git commit -m "Add the Rome lesson"
git push
```

Pull requests get their own preview URL, so a lesson can be checked before it goes live.

---

## What's here

```
index.html              landing page — three grade sections
grade-2/
  index.html            lesson list
  japan/index.html      lesson hub
  japan-passport.html   printable 8-page discovery passport
grade-4/
  index.html
  japan/index.html
  japan-quest.html      the game — 5 zones, 15 challenges
  japan-cards.html      printable 12-country card deck
grade-6/
  index.html
  japan/index.html
  japan-dossier.html    printable 9-page paradox dossier
  japan-data-desk.html  interactive — 10 measures, 12 countries
together/index.html     mixed-age group activity, grades 2–6
assets/site.css         the only stylesheet
vercel.json             headers only; there is nothing to build
robots.txt              search engines are asked to stay out
```

## What is deliberately *not* here

**Teacher plans, answer keys and the combined print pack.** They live in the Drive folder alongside this repo, not on the public web, because the students can reach every URL on this site. If you ever want them online, put them behind a Vercel password (Project → Settings → Deployment Protection) rather than just an unlinked path.

## Adding a lesson

1. Drop the new lesson's HTML into the right `grade-N/` folder.
2. Add a `grade-N/<topic>/index.html` hub page — copy an existing one and edit it.
3. Add a card to `grade-N/index.html` and bump the lesson count on the landing page.
4. Commit and push.

Every page starts with the same `<nav class="site-bar">` block and links `/assets/site.css`. Copy that block from any existing page; the print stylesheets already hide it.

## Conventions this site keeps

- Every statistic shown to a student carries **a source link and a year**. A number without both is treated as a rumour, and several lessons make that point explicitly.
- Pages must print. Each content page carries its own `@media print` rules and has been checked to produce the intended page count on US Letter.
- Everything works offline once loaded — no CDNs, no external scripts, no fonts to fetch.
- Colours are defined once in `:root` in `assets/site.css`, with a dark-mode block. Content documents that need their own palette redeclare it locally.

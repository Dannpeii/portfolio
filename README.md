# DucBH — Portfolio Resume (React + Vite + Tailwind)

A React conversion of the original Flutter Web resume project, rebuilt with:

- **React 19**
- **Vite** (build tool / dev server)
- **Tailwind CSS 4**
- **Framer Motion** (scroll-reveal and hover animations, replacing the Flutter animations)
- **React Icons** (replacing Flutter's `Icons` / `font_awesome_flutter`)

The layout, colors, typography, spacing, and responsive breakpoints match the
original Flutter app (mobile `<600px`, tablet `600–1199px`, desktop `>=1200px`).

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build locally
npm run lint     # lint the project with oxlint
```

## Project structure

```
src/
├── assets/            # images reused from the Flutter assets/ folder
├── components/
│   ├── common/         # Button, SkillCard, ProjectCard
│   ├── layout/          # Header, Footer
│   └── sections/        # Hero, About, Experience
├── constants/          # asset paths, spacing helpers
├── data/               # page copy (hero text, skills, projects, footer)
├── hooks/              # useResponsive (mirrors Flutter's Responsive class)
├── App.jsx
├── main.jsx
└── index.css           # Tailwind import + custom breakpoints/theme tokens
public/
└── DucBH_CV.pdf        # downloadable CV, served from /DucBH_CV.pdf
```

## Notes on the conversion

- `StatelessWidget` / `StatefulWidget` → functional components with hooks
- `Responsive` (Flutter `MediaQuery` breakpoints) → `useResponsive()` hook +
  custom Tailwind breakpoints (`tablet:`, `desktop:`)
- `ScrollController` + `GlobalKey` scroll-to-section → `useRef` +
  `scrollIntoView({ behavior: 'smooth' })`
- `AnimatedContainer` / implicit Flutter animations → Framer Motion
  (`whileInView`, `whileHover`, `AnimatePresence` for the mobile drawer)
- YouTube video (`youtube_player_iframe`) → a plain YouTube `<iframe>` embed
- `url_launcher` → standard `<a href>` links (`mailto:`, external `target="_blank"`)
- CV download (`dart:html` `AnchorElement`) → a plain anchor `download` attribute

Only the image assets actually referenced by the Flutter widgets were carried
over (logo, avatar, FPT logo, project images, backgrounds); a few unused
assets from the original `assets/` folder were left out.

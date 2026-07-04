# Agenciy - Creative Agency Framer Template (copy) — page `/`

Export complet généré par **Obsidian Export** (pipeline v2) le 04/07/2026.

## Structure

- `Page.tsx` — la page assemblée (sections dans l'ordre du canvas)
- `sections/` — une section = un fichier React lisible (19 sections)
- `components/` — les composants Framer compilés (animations et variantes incluses)
- `page.css` — styles par nœud + media queries responsive (Desktop/Tablet/Phone)
- `styles.css` — reset, base Framer, tokens couleur, polices

## Utilisation

```bash
npm install
```

```tsx
import Page from "./Page"

export default function App() {
  return <Page />
}
```

## Sections

- BG
- HeaderSection
- CenterLight
- N3DBall
- Video
- HeroSection
- ServiceSection
- AboutSection
- ProjectSection
- ProcessSection
- AwardsSection
- TeamSection
- PricingSection
- TestimonialSection
- FAQSection
- ContactSection
- SmoothScroll
- BlurGradient
- FooterSection

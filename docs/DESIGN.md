---
name: Cyber-Minimalist Portfolio
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#d1bcff'
  on-secondary: '#3c0090'
  secondary-container: '#7000ff'
  on-secondary-container: '#ddcdff'
  tertiary: '#f7f4ff'
  on-tertiary: '#2f303b'
  tertiary-container: '#d9d8e8'
  on-tertiary-container: '#5d5e6b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d1bcff'
  on-secondary-fixed: '#23005b'
  on-secondary-fixed-variant: '#5700c9'
  tertiary-fixed: '#e2e1f1'
  tertiary-fixed-dim: '#c6c5d4'
  on-tertiary-fixed: '#1a1b26'
  on-tertiary-fixed-variant: '#454652'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies a **Cyber-Minimalist** aesthetic, tailored for a high-end software engineering profile. It balances the raw, technical energy of a developer’s workstation—inspired by the deep blues and cyan glows in the reference images—with the refined precision of professional enterprise software. 

The personality is authoritative yet approachable, evoking a sense of "digital craftsmanship." The style leverages **Minimalism** for layout structure and **Glassmorphism** for interactive elements, creating a sense of depth that mimics a high-resolution terminal or IDE. 

**Key Visual Principles:**
- **Technical Precision:** Use of grid-aligned elements and monospaced accents to signal coding expertise.
- **Atmospheric Depth:** Layered surfaces that feel like they are floating in a dark, digital void.
- **Vibrant Accents:** High-energy colors used sparingly to guide the eye toward key achievements and calls to action.

## Colors
The palette is built on a "Midnight Navy" foundation to ensure maximum readability and reduced eye strain, reflecting a developer's natural habitat.

- **Primary (Cyan):** Represents the "light" from the screens in the reference images. Used for active states, primary buttons, and terminal-style prompts.
- **Secondary (Electric Purple):** Used for hover states, cloud-related tags (AWS), and subtle gradients to add a "high-tech" flair.
- **Base Surfaces:** The deepest shade (`#0A0B10`) is the background, while the tertiary (`#1A1B26`) acts as the surface color for cards and containers.
- **Accents:** Functional colors for success (Emerald), warning (Amber), and error (Rose) should be desaturated to fit the dark theme.

## Typography
The typography system prioritizes legibility and technical character. 

- **Geist** is used for headlines to provide a sharp, modern developer-tool aesthetic.
- **Inter** handles the heavy lifting for body copy, providing a neutral, professional balance.
- **JetBrains Mono** is utilized for "metadata" like dates in the timeline, tech stack chips, and decorative terminal-inspired labels. 

**Scaling Rules:**
Headlines should utilize a tight letter-spacing for a more aggressive, modern look. Body text must maintain a generous line height (1.5x) to ensure long-form project descriptions remain readable against the dark background.

## Layout & Spacing
The layout follows a **Fluid Grid** model with strict 8px increments. 

- **The Hero Section:** Uses a centered or split-screen layout with at least 15% vertical padding to create a "cinematic" entrance.
- **Experience Timeline:** A vertical 2-column layout on desktop, where the left column holds the dates (mono font) and the right column holds the details. On mobile, this reflows into a single vertical stack.
- **Project Cards:** Organized in a 2 or 3-column grid.
- **Safe Areas:** Maintain a minimum margin of 24px on tablet/desktop and 20px on mobile. Use "Section Gaps" of 120px+ to let the portfolio breathe and emphasize content hierarchy.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Backdrop Blurs**, avoiding traditional drop shadows which can feel muddy on dark backgrounds.

- **Level 0 (Background):** Solid deep navy/black.
- **Level 1 (Cards):** Slightly lighter navy with a 1px subtle border (`rgba(255,255,255,0.1)`).
- **Level 2 (Hover/Modals):** Glassmorphism effect. Use a background blur of 12px and a semi-transparent fill (`rgba(26, 27, 38, 0.7)`).
- **Interactions:** When a card is hovered, increase the border brightness rather than adding a shadow. A "glow" effect using a soft outer-glow with the primary primary color is permitted for active states.

## Shapes
This design system uses a **Soft (0.25rem)** roundedness for most UI components to maintain a professional, structured feel. 

- **Cards & Inputs:** 4px (Soft) corner radius.
- **Buttons & Tags:** 8px (Rounded-lg) to make them distinct from structural elements.
- **Project Images:** Should have the same 4px radius as their parent cards to maintain alignment.
- **Profile Avatar:** Use a perfect circle for the personal headshot to provide a focal point against the geometric layout.

## Components

### Buttons
- **Primary:** Solid Cyan fill with dark navy text. No border. Soft-glow on hover.
- **Secondary:** Outline button with 1px Cyan border. Text in Cyan. Fill becomes 10% Cyan on hover.
- **Ghost:** Monospaced font, no background, underline appears on hover.

### Project Cards
- Top-aligned image with a 16:9 aspect ratio.
- Below the image: Title (Headline-sm), a short description (Body-md), and a horizontal row of "Tech Chips."
- Apply a subtle transition on hover that scales the image slightly (1.05x).

### Tech Chips (Tags)
- Small, pill-shaped containers.
- Background: `rgba(255, 255, 255, 0.05)`.
- Text: JetBrains Mono, desaturated neutral color.

### Experience Timeline
- A vertical "track" line (1px width, 20% opacity white).
- "Nodes" on the timeline use the Primary Cyan color.
- Current role node should have a "pulsing" animation effect to denote "Present."

### Input Fields
- Dark background, 1px border. 
- The border changes to Primary Cyan and adds a subtle inner glow when focused.
- Labels use `label-caps` typography above the field.
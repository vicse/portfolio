/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "secondary-fixed-dim": "#d1bcff",
        "tertiary-fixed-dim": "#c6c5d4",
        "secondary": "#d1bcff",
        "secondary-container": "#7000ff",
        "inverse-primary": "#006970",
        "surface-container-lowest": "#010f1f",
        "on-secondary-container": "#ddcdff",
        "outline-variant": "#3b494b",
        "surface-dim": "#051424",
        "surface-container-low": "#0d1c2d",
        "on-secondary-fixed": "#23005b",
        "on-surface": "#d4e4fa",
        "outline": "#849495",
        "on-tertiary-fixed-variant": "#454652",
        "on-tertiary-fixed": "#1a1b26",
        "on-surface-variant": "#b9cacb",
        "primary-fixed": "#7df4ff",
        "on-primary-container": "#006970",
        "on-error-container": "#ffdad6",
        "inverse-on-surface": "#233143",
        "error-container": "#93000a",
        "surface-variant": "#273647",
        "on-error": "#690005",
        "primary-fixed-dim": "#00dbe9",
        "secondary-fixed": "#e9ddff",
        "on-background": "#d4e4fa",
        "surface-container-high": "#1c2b3c",
        "inverse-surface": "#d4e4fa",
        "primary": "#dbfcff",
        "on-tertiary": "#2f303b",
        "tertiary": "#f7f4ff",
        "error": "#ffb4ab",
        "surface": "#051424",
        "surface-tint": "#00dbe9",
        "primary-container": "#00f0ff",
        "on-secondary": "#3c0090",
        "tertiary-container": "#d9d8e8",
        "surface-bright": "#2c3a4c",
        "surface-container": "#122131",
        "on-tertiary-container": "#5d5e6b",
        "background": "#051424",
        "surface-container-highest": "#273647",
        "on-primary-fixed-variant": "#004f54",
        "tertiary-fixed": "#e2e1f1",
        "on-primary-fixed": "#002022",
        "on-secondary-fixed-variant": "#5700c9",
        "on-primary": "#00363a"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "gutter": "24px",
        "section-gap": "120px",
        "base": "8px",
        "margin-mobile": "20px",
        "container-max": "1200px"
      },
      fontFamily: {
        "headline-xl": ["Geist", "sans-serif"],
        "label-caps": ["JetBrains Mono", "monospace"],
        "headline-lg": ["Geist", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "code-sm": ["JetBrains Mono", "monospace"],
        "headline-lg-mobile": ["Geist", "sans-serif"]
      },
      fontSize: {
        "headline-xl": ["64px", { "lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "label-caps": ["14px", { "lineHeight": "18px", "letterSpacing": "0.1em", "fontWeight": "700" }],
        "headline-lg": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "body-md": ["17px", { "lineHeight": "26px", "fontWeight": "400" }],
        "code-sm": ["15px", { "lineHeight": "22px", "fontWeight": "500" }],
        "headline-lg-mobile": ["32px", { "lineHeight": "40px", "fontWeight": "700" }]
      }
    }
  },
  plugins: [],
}

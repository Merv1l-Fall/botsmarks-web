---
name: Forest Industrial
colors:
  surface: '#121412'
  surface-dim: '#121412'
  surface-bright: '#383938'
  surface-container-lowest: '#0d0e0d'
  surface-container-low: '#1b1c1a'
  surface-container: '#1f201e'
  surface-container-high: '#292a29'
  surface-container-highest: '#343533'
  on-surface: '#e3e2e0'
  on-surface-variant: '#c3c8c1'
  inverse-surface: '#e3e2e0'
  inverse-on-surface: '#30312f'
  outline: '#8d928c'
  outline-variant: '#434843'
  surface-tint: '#b4cdb8'
  primary: '#b4cdb8'
  on-primary: '#203527'
  primary-container: '#1b3022'
  on-primary-container: '#819986'
  inverse-primary: '#4d6453'
  secondary: '#accfb1'
  on-secondary: '#183721'
  secondary-container: '#2e4d36'
  on-secondary-container: '#9bbea0'
  tertiary: '#e7bcbf'
  on-tertiary: '#44292c'
  tertiary-container: '#3f2427'
  on-tertiary-container: '#b0898c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d0e9d4'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#c7eccc'
  secondary-fixed-dim: '#accfb1'
  on-secondary-fixed: '#02210e'
  on-secondary-fixed-variant: '#2e4d36'
  tertiary-fixed: '#ffd9dc'
  tertiary-fixed-dim: '#e7bcbf'
  on-tertiary-fixed: '#2d1417'
  on-tertiary-fixed-variant: '#5d3f42'
  background: '#121412'
  on-background: '#e3e2e0'
  surface-variant: '#343533'
  accent-yellow: '#E6B011'
  barrier-red: '#B23B3B'
  bone-white: '#F9F8F2'
  iron-grey: '#212121'
typography:
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
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
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

This design system is built for the Northern Swedish industrial landscape, specifically for Botsmarks Mekaniska. It balances the raw, heavy-duty nature of mechanical engineering with the organic serenity of the Norrland forest. The aesthetic is **Corporate / Modern** with a **Minimalist** focus on utility, ensuring the interface feels as reliable and durable as the physical road barriers the company produces.

The emotional response should be one of "Trygghet" (security) and Swedish quality. High-quality whitespace mimics the vastness of the northern landscape, while bold typography reflects industrial strength. The visual narrative transitions from deep forest depths to the bright, functional clarity of high-visibility safety equipment.

## Colors

The palette is rooted in the "Deep Forest" primary green, providing a sophisticated and stable foundation. We use a dark color mode by default to evoke the feeling of standing within the woods, with "Bone White" text providing high-legibility contrast.

- **Primary Forest Green**: Used for the deepest background layers and primary brand surfaces.
- **Moss Surface**: Used for secondary containers, cards, and section transitions.
- **Accent Yellow**: Reserved for high-priority calls to action (CTAs), mimicking the high-visibility colors of industrial machinery.
- **Barrier Red**: A specialized semantic color used for technical details, status indicators, and specific product highlights related to safety barriers.
- **Iron Grey**: Used for structural elements like dividers, borders, and input backgrounds to provide a mechanical feel.

## Typography

We utilize **Montserrat** across all levels to maintain a clean, industrial, and geometric aesthetic. The bold weights (700) are used for major headlines to convey the "robust" brand personality, while lighter weights (400) ensure readability for technical specifications.

To honor the Northern heritage, use wide tracking on uppercase labels (`label-caps`) for navigation and small headers, creating a sense of openness. Headlines should be tightly tracked to feel like solid blocks of forged steel.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to ensure content remains centered and focused, reflecting the precision of mechanical drawings.

- **Grid**: 12-column system with a 24px gutter.
- **Rhythm**: All spacing is derived from a 8px base unit. 
- **Adaptation**: On mobile, margins reduce to 20px to maximize screen real estate for technical diagrams. On desktop, large 64px margins and generous vertical padding (80px - 120px between sections) allow the design to "breathe" like a vast forest.
- **Reflow**: Content should stack vertically on mobile, but maintain horizontal alignment of icons and labels in specification lists to preserve the industrial "table" look.

## Elevation & Depth

This design system uses **Tonal Layers** rather than heavy shadows to create depth. By stacking different shades of Green (from Primary to Moss), we define hierarchy without breaking the flat, industrial aesthetic.

- **Background**: Primary Green (#1B3022).
- **Cards/Containers**: Moss Green (#2E4D36) with a 1px "Iron Grey" border at 20% opacity.
- **Interactive Elements**: Use a subtle "Ambient Shadow" (10% black, 8px blur) only for primary buttons to lift them slightly from the surface. 
- **Separators**: Use thin, low-contrast lines (Iron Grey) to divide technical content, mimicking mechanical blueprint lines.

## Shapes

The shape language is **Soft (Level 1)**. Elements have a subtle 0.25rem (4px) corner radius. This prevents the UI from feeling dangerously sharp while maintaining a precise, manufactured appearance. Large buttons and image containers should remain disciplined with these small radii to avoid looking "bubbly" or consumer-grade; the goal is an architectural, professional feel.

## Components

### Buttons
- **Primary**: Accent Yellow (#E6B011) background with Iron Grey text. Bold, uppercase labels.
- **Secondary**: Transparent background with a 2px Bone White border.
- **Tertiary**: Text-only with an underline on hover.

### Input Fields
- **Style**: Iron Grey background with a Bone White bottom border (2px). Focused state changes the border to Accent Yellow.
- **Labels**: Use `label-caps` typography above the field.

### Cards
- **Product Cards**: Moss Green background, 4px border radius, with a large, high-contrast image of the mechanical part. Technical specs should be listed below the title using `label-caps`.

### Chips & Badges
- **Status Indicators**: Use Barrier Red for "Locked" or "Danger" and Accent Yellow for "Warning" or "Highlight." Shape should be square with 2px radius.

### Lists
- **Technical Specs**: Use a horizontal layout with "Label" on the left and "Value" on the right, separated by a dotted Iron Grey line to create a clear, engineered look.
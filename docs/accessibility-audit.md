# Accessibility Verification

## Direct Rendered Review

The homepage and customer quote route were inspected in the live preview on 15 July 2026. Both pages expose a single page-level `h1`, followed by section `h2` headings and nested `h3` card headings. The global footer begins at `h2`, preserving a logical hierarchy beneath each page heading.

The live pages expose a visible-on-focus **Skip to main content** link. Keyboard testing confirmed that the first `Tab` press places focus on this link and `Enter` updates the URL to `#main-content`, moving past the repeated global navigation. Navigation links, the Services menu button, quote service labels, native selects, and the Continue button were all exposed as focusable interactive controls by the rendered accessibility tree.

The quote route exposes descriptive names for every service choice, the Service frequency and Property type selects, and its Continue button. The route has one `h1`—“Tell us what the property needs.”—with footer groups at `h2`. Customer and franchise forms use separate progress labels and submission routes.

Rendered image alternatives were checked on the homepage and quote route. Examples include “Fox operator in branded high-visibility uniform trimming a residential hedge”, “A carefully maintained residential lawn and garden”, “Landscaper maintaining the grounds of a contemporary commercial property”, and “Four Fox mowing operators wearing branded high-visibility uniforms”. The supplied logo uses “Fox — The new name in mowing and gardening”.

## CSS and Motion Review

The stylesheet includes a three-pixel `:focus-visible` outline using Fox Lime, a visible skip-link focus state, a 320-pixel minimum layout baseline, mobile breakpoints, and a `prefers-reduced-motion` override for non-essential motion. Native inputs retain labels and do not remove focus indicators.

## Contrast Review

Primary interface pairs are verified by `scripts/check-contrast.mjs`. The required WCAG AA threshold is 4.5:1 for normal text and 3:1 for large text and non-text interface components. Fox Lime is used with Fox Black rather than white for readable branded calls to action.

## Scope

This is a practical pre-launch implementation audit, not a formal third-party accessibility certification. Final production review should be repeated after any brand, copy, image, embedded widget, or regional-content changes.

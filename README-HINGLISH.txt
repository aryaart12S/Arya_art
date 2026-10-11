ARYA ART — DIWALI SKY ANIMATION (Hinglish setup)

Files:
- diwali-animation.css
- diwali-animation.js

This adds lightweight CSS lanterns, twinkling stars and simple fireworks. No images or external libraries needed.

IMPORTANT:
The current homepage hero class visible in your screenshot is `hero-ornament`/`hero-cta` and the page uses `<section class="shop-section">` etc. The JavaScript currently targets `.hero` and `.diwali-hero`. Before installing, change the selector to match your actual homepage hero container. From the screenshots:
- Homepage hero seems to begin around `<section class="hero-ornament"...>` but its enclosing hero wrapper is not fully visible. Verify the nearest outer section.
- Diwali page uses `<section class="diwali-hero">`, so that selector matches.

To install:
1. Upload `diwali-animation.css` and `diwali-animation.js` to the repository root.
2. In index.html, find the existing stylesheet link and add after it:
   <link rel="stylesheet" href="diwali-animation.css">
   Before </body>, add:
   <script src="diwali-animation.js"></script>
3. In diwali.html, add after the existing diwali.css link:
   <link rel="stylesheet" href="diwali-animation.css">
   Before </body>, add:
   <script src="diwali-animation.js"></script>
4. For homepage animation, edit the `hosts` selector in diwali-animation.js to use the actual outer hero element class in index.html. If the homepage hero wrapper is `.hero-ornament`, set `document.querySelector(".hero-ornament")`; if it is a parent section, use that parent class instead.
5. Commit all changes and refresh the site.

The effect is pointer-events:none and aria-hidden. It respects prefers-reduced-motion.

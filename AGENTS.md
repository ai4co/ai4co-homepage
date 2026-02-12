# AI4CO Website

## About Us

We're AI4CO - an **open research community** for Artificial Intelligence and Combinatorial Optimization. Our website is minimalistic and welcoming, emphasizing that we're open to everyone.

## Our Website Structure

```
ai4co-homepage/
├── index.html              # Our homepage - single page, minimalistic design
├── workshop.html           # Workshop landing page
├── main/                   # Main site subpages
│   ├── research.html       # Research projects page
├── workshop/               # Workshop subpages (call-for-papers, schedule, gallery)
├── css/
│   ├── main.css           # Styles for main site pages
│   └── workshop.css       # Styles for workshop pages
├── js/
│   └── nav.js             # Navigation behavior (auto-hide, mobile menu)
├── images/                # Main site images
└── assets/logos/          # Our logos (ai4co-logo-black.png is used in navbar)
```

## Design Principles

- **Minimalistic**: Clean, focused, no clutter
- **Light theme**: Light gray background (`#f8f9fa`), dark text (`#333`)
- **AI4CO red accent**: `#DC3512` for highlights and hover states
- **Welcoming**: Emphasize "open community" and "everyone is welcome"
- **Modern UX**: Auto-hiding navbar on scroll, smooth animations

## Key Pages

### Homepage (index.html)
- Hero section with **background image** (`images/ai4co_main_bg.jpg`)
- Animated AI4CO logo from our GitHub assets
- Tagline: "Open research community in AI for CO"
- Call-to-action buttons: GitHub, Slack, HuggingFace
- Uses custom inline styles for minimalistic design

### Research (main/research.html)
- This describes our projects and showcases our work

### Workshop Pages (workshop.html, workshop/*)
- workshop information
- Keep these unchanged unless specifically requested
- Uses `css/workshop.css`

## Our Navigation System

**Auto-Hide Navbar** - This is a feature, not a bug!
- Navbar hides smoothly when scrolling down (after 100px)
- Reappears when scrolling up
- Controlled by `js/nav.js`
- Works on all pages

**Mobile Menu**
- Click hamburger icon (`.navbar-icon`) to toggle
- Menu closes when clicking outside or on a link

## Making Changes

### Updating Navigation Links
Our navbar structure:
```html
<nav class="navbar">
    <div class="navbar-brand">
        <a href="/"><img src="assets/logos/ai4co-logo-black.png" alt="AI4CO Logo"></a>
    </div>
    <div class="navbar-icon">Menu</div>
    <div class="navbar-menu">
        <a href="workshop.html">Workshop</a>
        <a href="main/research.html">Research</a>
        <a href="https://...">Community</a>
    </div>
</nav>
```

### Adding a New Page
1. Copy structure from a similar page
2. Include CSS: `<link rel="stylesheet" href="css/main.css">` (or `../css/main.css` if in subfolder)
3. Include nav.js: `<script src="js/nav.js"></script>` (or `../js/nav.js` if in subfolder)
4. Use our standard classes: `.navbar`, `.content-section`, `.site-footer`

### Path Rules (Important!)
- **Root pages** (like `index.html`): Use direct paths → `css/main.css`, `images/logo.png`
- **Subpages** (like `main/research.html`): Add `../` → `../css/main.css`, `../images/logo.png`

### Updating Styles
- Main site pages: Edit `css/main.css`
- Workshop pages: Edit `css/workshop.css`
- Our accent color is `#DC3512` (AI4CO red)

## Important Links

- **GitHub**: https://github.com/ai4co
- **Slack Community**: https://join.slack.com/t/ai4co-community/shared_invite/zt-3jsdjs3ec-3KHdV3HwanL884mq_9tyYw
- **HuggingFace**: https://huggingface.co/ai4co
- **Website**: https://ai4co.org

## What NOT to Change

❌ Don't disable the auto-hide navbar (it's our feature!)
❌ Don't change workshop section without being asked
❌ Don't use white logo on light backgrounds (use `ai4co-logo-black.png`)

## Our Messaging

✅ Always emphasize we're an **open community**
✅ Say "we welcome everyone" when appropriate
✅ Encourage people to list their AI-for-CO projects with us
✅ Keep language simple and accessible
✅ Focus on collaboration and visibility

## Quick Design Reference

```css
/* Our colors */
--background: #f8f9fa;
--text: #333;
--text-light: #666;
--accent: #DC3512;

/* Common spacing */
--content-max-width: 1000px;
--section-padding: 60px;
```

## Testing Checklist

When making changes, verify:
- ✅ Navbar auto-hides on scroll down, shows on scroll up
- ✅ Mobile menu works
- ✅ All links work (especially in subpages)
- ✅ Images load correctly
- ✅ Responsive on mobile/tablet/desktop

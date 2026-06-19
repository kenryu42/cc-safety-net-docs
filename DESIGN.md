---
name: CC Safety Net
description: A rail-grid, command-first landing page for a coding-agent safety layer.
colors:
  void-teal: "#091c1e"
  abyss-black: "#070a0a"
  rail-line: "#dfe0c11f"
  rail-line-strong: "#dfe0c13d"
  bone-ink: "#f3f1db"
  body-muted: "#b8b9a1"
  terminal-muted: "#818477"
  panel-teal: "#0d2426"
  card-teal: "#102b2d"
  guard-green: "#34d399"
  guard-green-hover: "#5ee8b5"
  block-red: "#ff6b6b"
  warning-amber: "#dfdfc1"
typography:
  display:
    fontFamily: "Georgia, ui-serif, Cambria, \"Times New Roman\", Times, serif"
    fontSize: "clamp(4rem, 11vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  display-emphasis:
    fontStyle: "italic"
    fontWeight: 300
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Georgia, ui-serif, Cambria, \"Times New Roman\", Times, serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  body:
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.35
  code:
    fontFamily: "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "3px"
  md: "6px"
  lg: "8px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  section: "clamp(72px, 12vw, 136px)"
components:
  button-primary:
    backgroundColor: "{colors.bone-ink}"
    textColor: "{colors.void-teal}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
  button-primary-hover:
    backgroundColor: "{colors.guard-green-hover}"
    textColor: "{colors.void-teal}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.bone-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 10px"
  rail-section:
    backgroundColor: "{colors.void-teal}"
    borderColor: "{colors.rail-line}"
    padding: "{spacing.section} 0"
  terminal-panel:
    backgroundColor: "{colors.panel-teal}"
    textColor: "{colors.terminal-muted}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: "20px"
  integration-cell:
    backgroundColor: "transparent"
    textColor: "{colors.bone-ink}"
    borderColor: "{colors.rail-line}"
    rounded: "{rounded.md}"
    padding: "18px"
---

# Design System: CC Safety Net

## 1. Overview

**Creative North Star: "The Guard Rail Terminal"**

CC Safety Net should borrow the strongest parts of Amp's homepage language without becoming an Amp clone: a deep green-black canvas, visible layout rails, expressive oversized type, compact controls, and sections that feel assembled on a precise technical grid. The page still belongs to CC Safety Net. The proof object is not an agent video or lifestyle narrative; it is the exact command that would have destroyed local work and the hard denial that stops it.

The visual system should feel like a safety interlock installed inside a developer's command path. It is darker and sharper than a SaaS landing page, more editorial than a docs page, and less ornamental than a security brochure.

**Key Characteristics:**
- Deep teal-black page color with pale bone text, inspired by Amp's dark homepage mood.
- Visible vertical rails and section strokes that make the page feel engineered.
- One huge hero statement with an optional italic emphasis word, never gradient text.
- Compact rectangular actions instead of glossy oversized pills.
- Terminal proof panels and install snippets treated as the page's primary media.
- Sparse product-media moments: command output, CLI integration panes, and a chronicle-style update strip.

## 2. Source Adaptation

### What to Adapt from Amp

- **Rail-grid composition:** Use a persistent multi-column grid with faint vertical rail lines and cell padding. Sections align to the same rails so the page feels system-built.
- **Expressive display scale:** Let the hero headline dominate the first viewport. Use a display face or display mode with low line-height and one italic/emphasized phrase when it clarifies the brand idea.
- **Dense section boundaries:** Prefer full-width sections separated by top/bottom strokes over floating cards.
- **Compact navigation:** Keep nav low and utilitarian: logo/wordmark left, links right, small rectangular active states.
- **Product proof as media:** Amp uses videos; CC Safety Net should use terminal sessions, command-blocking transcripts, and install panes as the equivalent media.
- **Chronicle strip:** Use one full-width update or release strip when useful, with image/video optional. For CC Safety Net, this can become "Latest blocked pattern" or "Rules update" rather than a generic blog promo.

### What Not to Copy

- Do not copy Amp's brand mark, exact headline, exact copy, or exact font files.
- Do not use cream as the body background. Pale cream/bone is allowed only for text, rails, and small surfaces on the dark canvas.
- Do not turn CC Safety Net into an agent productivity brand. The story remains command safety and local-work protection.
- Do not use generic videos as decoration. If media appears, it must show the product behavior: command proposed, command inspected, command blocked or allowed.

## 3. Colors

The palette is committed but controlled. The page is drenched in **Void Teal**, with pale **Bone Ink** carrying most text and rails. Status colors retain their semantic jobs: green protects, red blocks, amber warns.

### Primary

- **Void Teal:** Main body background, section background, and brand field. It replaces pure black as the dominant surface so the page has a more distinct Amp-adjacent mood.
- **Bone Ink:** Primary text, selected button fill, and occasional high-contrast rails. It should feel like light reflecting off a dark terminal, not startup paper.

### Secondary

- **Panel Teal:** Terminal panels and install snippets.
- **Card Teal:** Secondary cells, integration tiles, and inline proof modules.
- **Rail Line:** Default grid and section rules.
- **Rail Line Strong:** Hover borders, active nav state, and important dividers.

### Status

- **Guard Green:** Allowed/protected state, focus rings, and the strongest positive status.
- **Block Red:** Blocked or destructive command state only.
- **Warning Amber:** Terminal caution, version notices, and small operational warnings.

### Named Rules

**The Dark Field Rule.** The page canvas is dark teal-black. Do not introduce a light-mode cream homepage unless the product strategy changes.

**The Rail Is Structure Rule.** Rails are part of layout, not decoration. Align content to them and let them disappear on cramped mobile widths when they stop helping.

**The Status-Only Color Rule.** Green, red, and amber must describe product state or action priority. If a color does not answer "allowed, blocked, warning, or primary action," remove it.

## 4. Typography

The Amp influence should show in scale and contrast: big, low-line-height display type over compact product prose. CC Safety Net should not use monospace as costume; mono remains evidence for commands.

### Voice Words

Blunt, mechanical, protective.

### Font Direction

- **Display:** Prefer a distinctive display family if one is added later. It can be lightly literary or machine-cut, but must stay legible at huge sizes. Avoid default startup sans display behavior.
- **Body:** Keep Geist Sans or a similarly clean sans for product prose.
- **Code:** Keep Geist Mono for commands, shell output, config keys, and CLI labels.

### Hierarchy

- **Display:** Hero only. `clamp(4rem, 11vw, 6rem)`, line-height `0.92`, letter-spacing no tighter than `-0.035em`.
- **Display Emphasis:** Optional italic or lighter-weight word inside the hero. Use once per hero, not as a repeated gimmick.
- **Headline:** Section headings. `clamp(2.25rem, 5vw, 4rem)`, line-height `0.98`.
- **Title:** Compact module titles, integration names, nav brand text. `1rem` to `1.25rem`, semibold.
- **Body:** Explanatory copy, capped around 65-75ch.
- **Label:** Buttons, nav, status labels.
- **Code:** Terminal panels, install snippets, command lists.

### Named Rules

**The Display Has a Job Rule.** Large type must carry a blunt product claim. Do not spend hero scale on vague category phrases.

**The Mono Is Evidence Rule.** Use mono only where the content is command-like or machine-readable.

**The No Shouting Rule.** Display headings stop at 6rem. The danger comes from the command example and denial state, not endless type scale.

## 5. Layout

The layout should move from the current centered landing-page stack toward an Amp-style rail system.

### Grid

- Use a full-width grid container with outer margins, four to six content rails on desktop, and faint rail lines that persist through sections.
- Prefer cell padding over isolated card padding. Content should feel snapped to a technical grid.
- On mobile, collapse to one column and keep only horizontal section rules unless vertical rails remain readable.

### Section Cadence

- **Hero:** First viewport signal. One oversized command-safety claim, one short body paragraph, one CTA row, one terminal proof object.
- **Chronicle / Alert Strip:** A full-width, bordered strip for a release note, blocked-pattern update, or direct "what changed" message.
- **Install:** Dense install module with OS tabs or command choices, plus a terminal snippet. This should feel like a product surface, not a marketing card.
- **Blocked Commands:** Use rows or rail cells rather than a uniform feature-card grid. Commands should be scannable and copyable.
- **How It Works:** A real sequence can use numbers because order matters. Keep it terse and mechanical.
- **Integrations:** Compatibility evidence. Logos or names live in rail cells with restrained hover states.

### Named Rules

**The Section Stroke Rule.** Prefer full-width bordered bands and rail-aligned cells over floating cards.

**The One Proof Per Fold Rule.** Every major viewport should contain a concrete artifact: command transcript, install command, integration list, blocked rule, or docs path.

## 6. Elevation

The system stays flat. Amp's feel comes from rail structure, typography, and media placement, not shadows.

### Shadow Vocabulary

- **No card shadows at rest.** Cards and panels use tone and borders.
- **Focus Ring:** Guard Green, 2px, visible against Void Teal.
- **Terminal Glow:** Optional and very restrained, only around an active command caret or status line.

### Named Rules

**The Flat Rail Rule.** If a module needs separation, use section strokes, rail lines, or tonal contrast before elevation.

## 7. Components

### Buttons

Buttons become compact rectangular controls, closer to Amp's small action buttons than the current large SaaS pill style.

- **Shape:** 6px radius by default. Full-pill only for tiny status chips.
- **Primary:** Bone Ink background, Void Teal text, `10px 14px` padding.
- **Primary Hover:** Guard Green Hover background when the action is installation or protection-related.
- **Secondary:** Transparent or low-tint fill with Rail Line Strong border.
- **Focus:** Guard Green outline with enough offset to clear the border.

### Navigation

The nav is a rail-aligned utility row.

- **Style:** Transparent or Void Teal backdrop, bottom border aligned with section rails.
- **Logo / Brand:** Left rail. Mark and wordmark should feel anchored, not centered.
- **Links:** Compact rectangular hit areas, small label type, no large pill cluster.
- **Mobile:** Use a minimal menu trigger or collapse secondary links. Keep GitHub/docs/install reachable.

### Terminal Panel

The terminal panel is CC Safety Net's signature media object.

- **Shell:** Panel Teal surface, Rail Line border, 8px radius.
- **Header:** Minimal window bar. Traffic-light dots are optional; a file/path label may be stronger.
- **Content:** Geist Mono, 14px, relaxed line-height.
- **States:** Blocked lines use Block Red plus explicit text. Allowed lines use Guard Green plus explicit text. Never rely on color alone.
- **Overflow:** Long commands wrap with `overflow-wrap: anywhere`; avoid horizontal page scroll on mobile.

### Install Module

The install module should feel like a working surface.

- **Structure:** Rail-aligned text cell, command cell, and optional platform selector.
- **Copy:** Direct install command first, explanation second.
- **States:** Active platform is indicated by border/fill plus text state, not color alone.

### Chronicle Strip

Use for one timely product note.

- **Shape:** Full-width band, not a card.
- **Content:** Short title, one sentence, one link.
- **Tone:** Operational and specific: "New rule: blocks `git clean -fdx` through shell wrappers."

### Integration Cells

Integration cells show compatibility without becoming a generic card grid.

- **Shape:** Rail cells with subtle borders, 6px radius at most.
- **Default State:** Low-color, text-forward.
- **Hover State:** Border brightens; mark may pick up its native tint.
- **Density:** Compact enough that the full ecosystem is visible without excessive scrolling.

## 8. Motion

Motion should feel like a terminal/session state changing, not page-builder entrance animation.

- Use a short first-load sequence for the hero command transcript: proposed command, inspection line, blocked result.
- Rails and sections should already be visible; do not gate content behind scroll-triggered opacity.
- Hover transitions stay fast: color, border, and slight media contrast changes only.
- Respect `prefers-reduced-motion: reduce` by rendering the final terminal transcript immediately and disabling caret blink.

## 9. Do's and Don'ts

### Do:

- **Do** adapt Amp's rail grid, dark teal field, compact controls, and expressive display scale.
- **Do** keep CC Safety Net's proof concrete: exact commands, exact outcomes, exact supported tools.
- **Do** use terminal panels and install snippets as media objects.
- **Do** keep status colors semantic and paired with text labels.
- **Do** let full-width section strokes create rhythm.
- **Do** keep mobile command examples readable and wrapped.

### Don't:

- **Don't** copy Amp's logo, exact copy, or exact font assets.
- **Don't** use cream or beige as the page background.
- **Don't** use generic SaaS polish, decorative dashboards, or interchangeable feature cards.
- **Don't** hide the destructive command examples behind abstract "AI safety" language.
- **Don't** use gradient text, glassmorphism, decorative side-stripe borders, repeated tiny uppercase eyebrows, or fake numbered section scaffolding.
- **Don't** pair 1px borders with broad soft shadows. Choose structure, tone, or a tight state shadow.

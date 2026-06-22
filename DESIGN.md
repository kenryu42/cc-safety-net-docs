---
name: CC Safety Net
description: A rail-grid, command-first docs and landing surface for a coding-agent safety layer. Dark default with a light reading mode; terminal proof panels stay dark in both.
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
  # Light field (active when .dark is absent; cool teal-tinted paper, not cream)
  paper: "#f5f8f7"
  paper-tint: "#eef4f2"
  ink: "#091c1e"
  ink-body: "#3d4b49"
  ink-soft: "#56635f"
  surface-light: "#ebf2f0"
  surface-light-hover: "#e2ebe8"
  guard-green-deep: "#0f7a4d"
  guard-green-deep-hover: "#0a6340"
  block-red-deep: "#c0392b"
typography:
  display:
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(4rem, 11vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  display-emphasis:
    fontStyle: "italic"
    fontWeight: 300
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
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
    backgroundColor: "{colors.bone-ink} (dark) / {colors.void-teal} (light)"
    textColor: "{colors.void-teal} (dark) / #f5f8f7 (light)"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
  button-primary-hover:
    backgroundColor: "{colors.guard-green-hover} (dark) / {colors.guard-green-deep} (light)"
    textColor: "{colors.void-teal} (dark) / #ffffff (light)"
    rounded: "{rounded.md}"
    padding: "10px 14px"
  button-ghost:
    backgroundColor: "transparent (dark) / {colors.surface-light} 70% (light)"
    textColor: "{colors.bone-ink} (dark) / {colors.ink} (light)"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 10px"
  rail-section:
    backgroundColor: "{colors.void-teal} (dark) / {colors.paper} (light)"
    borderColor: "{colors.rail-line} (dark) / ink-tinted #091c1e1f (light)"
    padding: "{spacing.section} 0"
  terminal-panel:
    backgroundColor: "{colors.panel-teal}"
    textColor: "{colors.terminal-muted}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: "20px"
  integration-cell:
    backgroundColor: "transparent (dark) / {colors.surface-light} (light)"
    textColor: "{colors.bone-ink} (dark) / {colors.ink} (light)"
    borderColor: "{colors.rail-line} (dark) / ink-tinted #091c1e1f (light)"
    rounded: "{rounded.md}"
    padding: "18px"
---

# Design System: CC Safety Net

## 1. Overview

**Creative North Star: "The Guard Rail Terminal"**

CC Safety Net should borrow the strongest parts of Amp's homepage language without becoming an Amp clone: a deep green-black canvas, visible layout rails, expressive oversized type, compact controls, and sections that feel assembled on a precise technical grid. The page still belongs to CC Safety Net. The proof object is not an agent video or lifestyle narrative; it is the exact command that would have destroyed local work and the hard denial that stops it.

The visual system should feel like a safety interlock installed inside a developer's command path. It is darker and sharper than a SaaS landing page, more editorial than a docs page, and less ornamental than a security brochure.

**Key Characteristics:**
- Dark mode is the default and the brand field: deep teal-black page color with pale bone text, inspired by Amp's dark homepage mood. A light reading mode is supported as a toggle; it uses a cool teal-tinted paper (`#f5f8f7`) with deep teal-green ink — never warm cream or beige.
- Terminal proof panels, install snippets, and code blocks stay dark in both modes. They are media objects, not page chrome, so their internal contrast never depends on the page mode.
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
- Do not use warm cream or beige as the body background in either mode. In dark mode, pale Bone is allowed only for text, rails, and small surfaces on the dark canvas; in light mode the field is the cool teal-tinted Paper, not cream.
- Do not turn CC Safety Net into an agent productivity brand. The story remains command safety and local-work protection.
- Do not use generic videos as decoration. If media appears, it must show the product behavior: command proposed, command inspected, command blocked or allowed.

## 3. Colors

The palette is committed but controlled. In dark mode the page is drenched in **Void Teal**, with pale **Bone Ink** carrying most text and rails. In light mode the page is **Paper** (`#f5f8f7`, a cool teal-tinted off-white) with **Ink** (`#091c1e`, the same Void Teal repurposed as text) carrying headings and strong copy. Status colors retain their semantic jobs in both modes: green protects, red blocks, amber warns. The status greens and reds shift to deeper, AA-compliant shades on the light field (`Guard Green Deep` `#0f7a4d`, `Block Red Deep` `#c0392b`) and stay bright on dark terminal panels.

### Primary

- **Void Teal:** Dark-mode body background, section background, and brand field; in light mode it becomes **Ink** (headings, strong text, primary button fill). It replaces pure black as the dominant dark surface so the page has a more distinct Amp-adjacent mood.
- **Bone Ink:** Dark-mode primary text, selected button fill, and high-contrast rails. In light mode it is used only inside always-dark terminal panels.
- **Paper:** Light-mode body background. A cool off-white tinted toward the brand's own teal hue, not warm cream. The light field carries restraint; warmth is not the goal.
- **Ink Body / Ink Soft:** Light-mode body and secondary text. Deep teal-gray, AA-comfortable on Paper (~8:1 and ~6:1).

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

**The Dual-Field Rule.** Dark is the default and the brand field. Light is a supported reading mode, not a second brand: it uses the cool Paper/Ink palette above, never warm cream or beige, and terminal proof panels stay dark in both modes so the proof object keeps its dark-terminal authority. Do not tint the light background toward warmth; warmth is carried by accent and copy, not by the page field.

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
- **Focus Ring:** Guard Green (bright in dark, deep in light), 2px, visible against the page field.
- **Terminal Glow:** Optional and very restrained, only around an active command caret or status line.

### Named Rules

**The Flat Rail Rule.** If a module needs separation, use section strokes, rail lines, or tonal contrast before elevation.

## 7. Components

### Buttons

Buttons become compact rectangular controls, closer to Amp's small action buttons than the current large SaaS pill style.

- **Shape:** 6px radius by default. Full-pill only for tiny status chips.
- **Primary:** Bone Ink background with Void Teal text in dark mode; Void Teal background with Paper text in light mode. `10px 14px` padding.
- **Primary Hover:** Guard Green Hover (bright) in dark; Guard Green Deep in light, when the action is installation or protection-related.
- **Secondary:** Transparent or low-tint fill with Rail Line Strong border; in light mode a faint surface tint with an ink-tinted border.
- **Focus:** Guard Green outline (bright in dark, deep in light) with enough offset to clear the border.

### Navigation

The nav is a rail-aligned utility row.

- **Style:** Transparent or Void Teal backdrop (dark) / Paper backdrop (light), bottom border aligned with section rails.
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
- **Don't** use cream, beige, or warm paper as the page background, in either mode. The light field is the cool teal-tinted Paper; warmth comes from accent and copy, never the page field.
- **Don't** use generic SaaS polish, decorative dashboards, or interchangeable feature cards.
- **Don't** hide the destructive command examples behind abstract "AI safety" language.
- **Don't** use gradient text, glassmorphism, decorative side-stripe borders, repeated tiny uppercase eyebrows, or fake numbered section scaffolding.
- **Don't** pair 1px borders with broad soft shadows. Choose structure, tone, or a tight state shadow.

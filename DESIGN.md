---
name: CC Safety Net
description: A rail-grid design for CC Safety Net documentation and landing pages. Dark mode is the default. Light reading mode is available, but terminal proof panels stay dark in both modes.
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

# CC Safety Net design system

## 1. Overview

**Design direction: "The Guard Rail Terminal"**

CC Safety Net should borrow selected parts of Amp's homepage design without copying it. Use a deep green-black canvas, visible layout rails, oversized type, compact controls, and sections aligned to a technical grid. Keep the page specific to CC Safety Net. Show the exact command that could destroy local work and the denial that stops it, not an agent video or lifestyle story.

The visual system should represent a safety interlock in the developer's command path. Use fewer ornaments than a security brochure and more structure than a standard documentation page.

**Key characteristics**
- Dark mode is the default. It uses a deep teal-black page color with pale bone text, based on Amp's dark homepage. A light reading mode is available as a toggle. It uses cool teal-tinted Paper (`#f5f8f7`) with deep teal-green Ink, never warm cream or beige.
- Terminal proof panels, install snippets, and code blocks stay dark in both modes. They are media objects, not page chrome, so their internal contrast never depends on the page mode.
- Use visible vertical rails and section strokes to define the layout.
- One huge hero statement with an optional italic emphasis word, never gradient text.
- Compact rectangular actions instead of glossy oversized pills.
- Treat terminal proof panels and install snippets as the primary media.
- Use product media sparingly. Examples include command output, CLI integration panes, and a chronicle-style update strip.

## 2. Source adaptation

### What to adapt from Amp

- **Rail-grid composition.** Use a persistent multi-column grid with faint vertical rail lines and cell padding. Align sections to the same rails.
- **Expressive display scale.** Let the hero headline dominate the first viewport. Use a display face or display mode with low line-height and one italic or emphasized phrase when it clarifies the brand idea.
- **Section boundaries.** Prefer full-width sections separated by top and bottom strokes over floating cards.
- **Compact navigation.** Keep navigation low and functional. Put the logo or wordmark on the left and links on the right. Use small rectangular active states.
- **Product proof as media.** Amp uses videos. CC Safety Net should instead use terminal sessions, command-blocking transcripts, and install panes.
- **Chronicle strip.** Use one full-width update or release strip when useful. An image or video is optional. Use a specific subject such as "Latest blocked pattern" or "Rules update", not a generic blog promotion.

### What not to copy

- Do not copy Amp's brand mark, exact headline, exact copy, or exact font files.
- Do not use warm cream or beige as the body background in either mode. In dark mode, pale Bone is allowed only for text, rails, and small surfaces on the dark canvas; in light mode the field is the cool teal-tinted Paper, not cream.
- Do not turn CC Safety Net into an agent productivity brand. The story remains command safety and local-work protection.
- Do not use generic videos as decoration. Media must show product behavior, such as a proposed command, its inspection, and whether CC Safety Net blocks or allows it.

## 3. Colors

In dark mode, **Void Teal** is the page background and pale **Bone Ink** supplies most text and rails. In light mode, **Paper** (`#f5f8f7`, a cool teal-tinted off-white) is the page background. **Ink** (`#091c1e`, the same color as Void Teal) supplies headings and strong text. Status colors keep the same meaning in both modes. Green protects, red blocks, and amber warns. On the light background, green and red use deeper AA-compliant shades: `Guard Green Deep` (`#0f7a4d`) and `Block Red Deep` (`#c0392b`). They stay bright on dark terminal panels.

### Primary

- **Void Teal.** Dark-mode body and section background. In light mode, the same color becomes **Ink** for headings, strong text, and primary button fill. It replaces pure black as the main dark surface.
- **Bone Ink.** Dark-mode primary text, selected button fill, and high-contrast rails. In light mode, use it only inside terminal panels, which always stay dark.
- **Paper.** Light-mode body background. It is a cool off-white with a teal tint, not warm cream.
- **Ink Body / Ink Soft.** Light-mode body and secondary text. These deep teal-gray colors have approximate contrast ratios of 8:1 and 6:1 on Paper.

### Secondary

- **Panel Teal.** Terminal panels and install snippets.
- **Card Teal.** Secondary cells, integration tiles, and inline proof modules.
- **Rail Line.** Default grid and section rules.
- **Rail Line Strong.** Hover borders, active navigation state, and important dividers.

### Status

- **Guard Green.** Allowed/protected state, focus rings, and the strongest positive status.
- **Block Red.** Blocked or destructive command state only.
- **Warning Amber.** Terminal caution, version notices, and small operational warnings.

### Named rules

**The dual-field rule.** Dark is the default brand field. Light is a reading mode, not a second brand. It uses the cool Paper and Ink palette above, never warm cream or beige. Terminal proof panels stay dark in both modes. Do not add a warm tint to the light background. Warmth can come from accents and copy.

**The rail is structure rule.** Rails are part of the layout, not decoration. Align content to them. Remove them on narrow mobile widths when they no longer help.

**The status-only color rule.** Green, red, and amber must describe product state or action priority. If a color does not mean allowed, blocked, warning, or primary action, remove it.

## 4. Typography

Use Amp's scale and contrast through large display type with a low line height and compact product prose. Use monospace only for commands and other machine-readable evidence.

### Voice words

Blunt, mechanical, protective.

### Font direction

- **Display.** If a display family is added later, choose one that stays legible at large sizes. It can have a literary or machine-cut form. Avoid a generic startup sans serif.
- **Body.** Keep Geist Sans or a similarly clean sans for product prose.
- **Code.** Keep Geist Mono for commands, shell output, config keys, and CLI labels.

### Hierarchy

- **Display.** Hero only. `clamp(4rem, 11vw, 6rem)`, line-height `0.92`, letter-spacing no tighter than `-0.035em`.
- **Display Emphasis.** Optional italic or lighter-weight word inside the hero. Use it once per hero.
- **Headline.** Section headings. `clamp(2.25rem, 5vw, 4rem)`, line-height `0.98`.
- **Title.** Compact module titles, integration names, navigation brand text. `1rem` to `1.25rem`, semibold.
- **Body.** Explanatory copy, capped around 65-75ch.
- **Label.** Buttons, navigation, and status labels.
- **Code.** Terminal panels, install snippets, and command lists.

### Named rules

**The display has a job rule.** Large type must carry a direct product claim. Do not use hero scale for vague category phrases.

**The mono is evidence rule.** Use mono only where the content is command-like or machine-readable.

**The no shouting rule.** Display headings stop at 6rem. Show danger through the command example and denial state, not larger type.

## 5. Layout

Move the layout from the current centered landing-page stack to an Amp-style rail system.

### Grid

- Use a full-width grid container with outer margins, four to six content rails on desktop, and faint rail lines that persist through sections.
- Prefer cell padding over isolated card padding. Align content to the technical grid.
- On mobile, collapse to one column and keep only horizontal section rules unless vertical rails remain readable.

### Section order

- **Hero.** In the first viewport, show one oversized command-safety claim, one short body paragraph, one CTA row, and one terminal proof object.
- **Chronicle / Alert Strip.** Use a full-width bordered strip for a release note, blocked-pattern update, or direct "what changed" message.
- **Install.** Use a dense install module with OS tabs or command choices and a terminal snippet. It must work as a product control, not a marketing card.
- **Blocked Commands.** Use rows or rail cells instead of a uniform feature-card grid. Make commands easy to scan and copy.
- **How It Works.** Use numbers only for a sequence where order matters. Keep the text short and mechanical.
- **Integrations.** Put compatibility evidence, such as logos or names, in rail cells with restrained hover states.

### Named rules

**The section stroke rule.** Prefer full-width bordered bands and rail-aligned cells over floating cards.

**The one proof per fold rule.** Every major viewport should contain a command transcript, install command, integration list, blocked rule, or documentation path.

## 6. Elevation

Keep the system flat. Use rail structure, typography, and media placement instead of shadows.

### Shadow use

- **No card shadows at rest.** Cards and panels use tone and borders.
- **Focus Ring.** Guard Green, bright in dark mode and deep in light mode. Use 2px and keep it visible against the page background.
- **Terminal Glow.** Optional. Use it only around an active command caret or status line.

### Named rules

**The flat rail rule.** If a module needs separation, use section strokes, rail lines, or tonal contrast before elevation.

## 7. Components

### Buttons

Use compact rectangular buttons like Amp's small action controls, not large SaaS-style pills.

- **Shape.** 6px radius by default. Full-pill only for tiny status chips.
- **Primary.** Bone Ink background with Void Teal text in dark mode. Void Teal background with Paper text in light mode. `10px 14px` padding.
- **Primary Hover.** Use Guard Green Hover in dark mode and Guard Green Deep in light mode when the action concerns installation or protection.
- **Secondary.** Transparent or low-tint fill with Rail Line Strong border. In light mode, use a faint surface tint with an ink-tinted border.
- **Focus.** Guard Green outline, bright in dark mode and deep in light mode, with enough offset to clear the border.

### Navigation

Align the navigation utility row to the rails.

- **Style.** Transparent or Void Teal backdrop in dark mode and Paper backdrop in light mode. Align the bottom border with section rails.
- **Logo / Brand.** Put the mark and wordmark on the left rail, not in the center.
- **Links.** Compact rectangular hit areas, small label type, no large pill cluster.
- **Mobile.** Use a minimal menu trigger or collapse secondary links. Keep GitHub, documentation, and installation reachable.

### Terminal panel

Use the terminal panel as the main product proof.

- **Shell.** Panel Teal surface, Rail Line border, 8px radius.
- **Header.** Minimal window bar. Traffic-light dots are optional. A file or path label may be clearer.
- **Content.** Geist Mono, 14px, relaxed line-height.
- **States.** Blocked lines use Block Red plus explicit text. Allowed lines use Guard Green plus explicit text. Never rely on color alone.
- **Overflow.** Long commands wrap with `overflow-wrap: anywhere`. Avoid horizontal page scroll on mobile.

### Install module

The install module must work as an interactive control.

- **Structure.** Rail-aligned text cell, command cell, and optional platform selector.
- **Copy.** Direct install command first, explanation second.
- **States.** Indicate the active platform with a border or fill and text, not color alone.

### Chronicle strip

Use for one timely product note.

- **Shape.** Full-width band, not a card.
- **Content.** Short title, one sentence, one link.
- **Tone.** Use specific operational text, such as "New rule: blocks `git clean -fdx` through shell wrappers."

### Integration cells

Integration cells show compatibility without becoming a generic card grid.

- **Shape.** Rail cells with subtle borders, 6px radius at most.
- **Default State.** Use little color and give priority to text.
- **Hover State.** Brighten the border. The mark can use its native tint.
- **Density.** Keep cells compact enough to show all integrations without excessive scrolling.

## 8. Motion

Motion must show a terminal or session state change, not a page-builder entrance effect.

- Use a short first-load sequence for the hero command transcript. Show the proposed command, inspection line, and blocked result.
- Rails and sections should already be visible; do not gate content behind scroll-triggered opacity.
- Hover transitions stay fast: color, border, and slight media contrast changes only.
- Respect `prefers-reduced-motion: reduce` by rendering the final terminal transcript immediately and disabling caret blink.

## 9. Do and do not

### Do

- **Do** adapt Amp's rail grid, dark teal field, compact controls, and expressive display scale.
- **Do** keep CC Safety Net's proof concrete. Show exact commands, outcomes, and supported tools.
- **Do** use terminal panels and install snippets as media objects.
- **Do** keep status colors semantic and paired with text labels.
- **Do** let full-width section strokes create rhythm.
- **Do** keep mobile command examples readable and wrapped.

### Do not

- **Don't** copy Amp's logo, exact copy, or exact font assets.
- **Don't** use cream, beige, or warm paper as the page background, in either mode. The light field is the cool teal-tinted Paper; warmth comes from accent and copy, never the page field.
- **Don't** use generic SaaS polish, decorative dashboards, or interchangeable feature cards.
- **Don't** hide the destructive command examples behind abstract "AI safety" language.
- **Don't** use gradient text, glassmorphism, decorative side-stripe borders, repeated tiny uppercase eyebrows, or fake numbered section scaffolding.
- **Don't** pair 1px borders with broad soft shadows. Choose structure, tone, or a tight state shadow.

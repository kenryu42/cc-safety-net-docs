# Product

## Register

brand

## Users

Developers who use AI coding agents and coding CLIs every day, especially people who let tools like Codex, Claude Code, Copilot CLI, Gemini CLI, Kimi Code, OpenCode, and Pi run shell commands in real repositories. They are technical, skeptical of vague safety promises, and already understand that prompt instructions and AGENTS.md rules are not hard execution boundaries.

## Product purpose

CC Safety Net is a hard command-safety layer for coding agents. It intercepts shell commands before execution. It uses semantic analysis to detect destructive Git and filesystem intent and blocks dangerous operations before they can erase local work or damage a workspace. The site must explain this risk, list the supported CLIs, and direct interested visitors to the documentation, GitHub, and installation instructions.

## Brand personality

Blunt, technical, protective. Use direct language for developers. Show concrete commands and specific failure modes. Do not soften the text with vague "AI safety" language. Build trust by showing that CC Safety Net addresses these mistakes in the command execution path.

## Anti-references

Avoid generic SaaS styling, vague AI-safety marketing, light cream or beige startup themes, decorative dashboards, trust badges, and text that hides the shell commands being blocked. Do not use euphemisms for the main risk. Do not make the interface look like an observability app, an enterprise security brochure, or a generic developer-tool landing page with interchangeable feature cards.

## Design principles

Show the command, then the consequence.

Use concrete CLI examples, blocked and allowed outcomes, and integration details as evidence.

Keep the page sharp and minimal so the dangerous operations and safety decisions remain the visual focus.

Use brand color for status, not decoration. Green means allowed or protected. Red means blocked or destructive. Keep other colors restrained.

Give priority to supported CLIs, install paths, documentation, and GitHub.

## Accessibility and inclusion

Target WCAG AA contrast for all text and interactive states. Do not rely on color alone for blocked and allowed states; pair status colors with labels, symbols, or text. Support reduced-motion preferences for any future animation. Keep command examples readable at small widths and avoid horizontal overflow in terminal-style panels.

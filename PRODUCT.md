# Product

## Register

brand

## Users

Developers who use AI coding agents and coding CLIs every day, especially people who let tools like Codex, Claude Code, Copilot CLI, Gemini CLI, Kimi Code, OpenCode, and Pi run shell commands in real repositories. They are technical, skeptical of vague safety promises, and already understand that prompt instructions and AGENTS.md rules are not hard execution boundaries.

## Product Purpose

CC Safety Net is a hard command-safety layer for coding agents. It intercepts shell commands before execution, semantically analyzes destructive git and filesystem intent, and blocks dangerous operations before they can erase local work or damage a workspace. The site exists to make the risk immediately legible, show that the tool supports the CLIs developers already use, and move qualified visitors toward docs, GitHub, and installation.

## Brand Personality

Blunt, technical, protective. The voice should be direct and developer-native: concrete commands, specific failure modes, and no softened "AI safety" language. The emotional goal is earned trust: the visitor should feel that this project understands the exact class of mistake they are worried about and has a practical guard in the execution path.

## Anti-references

Avoid generic SaaS polish, vague AI-safety marketing, light cream or beige startup themes, decorative dashboards, overproduced trust badges, and copy that abstracts away from the real shell commands being blocked. Do not hide the core pain point behind euphemisms. Do not make the interface look like an observability app, a security-enterprise brochure, or a generic developer-tool landing page with interchangeable feature cards.

## Design Principles

Show the command, then the consequence.

Prefer proof over persuasion: concrete CLI examples, blocked/allowed outcomes, and integration details should carry the argument.

Keep the page sharp and minimal so the dangerous operations and safety decisions remain the visual focus.

Use brand color as a status signal, not decoration: green means allowed/protected, red means blocked/destructive, and the rest should stay restrained.

Meet developers at their current workflow by foregrounding supported CLIs, install paths, docs, and GitHub.

## Accessibility & Inclusion

Target WCAG AA contrast for all text and interactive states. Do not rely on color alone for blocked and allowed states; pair status colors with labels, symbols, or text. Support reduced-motion preferences for any future animation. Keep command examples readable at small widths and avoid horizontal overflow in terminal-style panels.

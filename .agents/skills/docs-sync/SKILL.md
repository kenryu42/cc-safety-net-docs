---
name: docs-sync
description: Sync the docs with the cc-safety-net source repo. Drafts page updates from the source drift, validates them, then advances SOURCE-SYNC.json and commits automatically.
disable-model-invocation: true
---

# Docs sync workflow

`SOURCE-SYNC.json` records the last source commit the docs reflect. Run with no
argument to sync (steps 1-7). Run with feedback text to revise the previous
sync (see Feedback at the end).

## Hard rules

1. `SOURCE-SYNC.json` changes only in step 7, and only to the last handled
   commit. For a partial sync that is the last commit of the handled PREFIX of
   the oldest-first list; never advance past an unread commit.
2. Drafted English prose follows the unslop skill's pattern-removal and
   plain-speech rules (`~/.claude/skills/unslop/SKILL.md`). Its "adding soul"
   section does NOT apply — these are reference docs, not essays.
3. Verify every fact against the source CODE, not against commit messages.
   Read the files the diff touches before you write a sentence about them.
4. Take flag spellings, defaults, error messages, and rule ids verbatim from
   the source. Do not paraphrase machine-checkable strings.
5. A "skip" is a decision. Record it in the step-7 report; never drop a commit
   silently.
6. `make check` needs Node < 25. Run it as:
   `PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH" make check`
7. The docs ship in three languages. Every English page has a Japanese mirror
   under `ja/` and a Simplified Chinese mirror under `zh-Hans/` at the same
   relative path. Never edit an English page without applying the same change,
   translated, to both mirrors in the same draft. Machine-checkable strings
   (flags, defaults, error messages, rule ids, code blocks) stay in English
   inside the translated prose.
8. A mirror is a published page, not a translation artefact. It must read as if
   a native technical writer wrote it — sentence-for-sentence machine
   translation of the English is a defect, even when the meaning is right. The
   standard for each language lives in this skill's `references/` directory:
   - `.claude/skills/docs-sync/references/localization-ja.md`
   - `.claude/skills/docs-sync/references/localization-zh-Hans.md`

   Read the guide for a language before you write or review that language.
   Every translated sentence in a draft passes through the localization review
   in step 5 before the sync is committed.
9. Internal links in a mirror stay inside that mirror's tree (`/ja/…`,
   `/zh-Hans/…`), and a deep link in the English page stays a deep link in both
   mirrors. The anchor resolves against the *translated* heading on the target
   page, so read that page's headings before writing the anchor. Dropping or
   flattening a deep link is a regression, not a simplification.

## Workflow

### Step 1 — Measure the drift

Run `make drift`.

- "Docs are current" → report that and stop.
- Error → report it (source repo path or sha problem) and stop.
- Otherwise the output is the work-list, oldest first.

### Step 2 — Triage every commit

Read each commit with `git -C <path> show <sha>` (take `<path>` from
`SOURCE-SYNC.json`). Put each commit in one bin:

- **Skip** — tests, pure refactors, CI, internal cleanup. No user-visible change.
- **Small** — changes one fact on an existing page.
- **Large** — needs a new section or touches several pages.

Commits marked `!:` are breaking changes: assume an existing docs sentence is
now WRONG and hunt for it (grep the published pages for the old behaviour).

### Step 3 — Group by docs page

Convert the commit list into a page plan. Several commits often form one story
(for example, a rule-catalogue restructure across five commits is ONE rewrite
of one section). Plan in ENGLISH pages; the two mirrors of each planned page
follow automatically (rule 7). Published English pages are the `.mdx` files in
the repo root and in `configuration/`, `reference/`, and `guides/`; their
mirrors live under `ja/` and `zh-Hans/`. `docs/`, `cc-safety-net-wiki/`,
`.agents/`, and `.impeccable/` are not published.

### Step 4 — Draft the edits

Invoke the `unslop` skill (Skill tool) before drafting, so its patterns are in
context while you write (hard rule 2).

Edit the pages directly in the working tree. Each English page and its `ja/`
and `zh-Hans/` mirrors are ONE unit of work: draft the English edit first, then
translate that edit into both mirrors.

- If the plan touches more than ~4 English pages, fan out one subagent per
  page unit (Agent tool). Give each subagent: the commit shas, the source repo
  path, the English page plus its two mirror paths, and hard rules 2-4 and 7-9
  above. Subagents do not inherit the unslop skill — include its path
  (`~/.claude/skills/unslop/SKILL.md`) with an instruction to read it before
  drafting English prose. Page units that share a story go to one subagent.
- Match the plain-language standard of the existing pages, and match the
  established terminology of the existing `ja/` and `zh-Hans/` pages.
- Translate the MEANING of the English edit into each mirror; do not map it
  sentence by sentence. Read that language's guide (hard rule 8) before you
  write the mirror text — writing it well the first time is cheaper than
  repairing it in step 5.
- A NEW English page needs new mirror pages at `ja/<path>` and
  `zh-Hans/<path>`, plus a navigation entry in ALL THREE language trees in
  `docs.json` (a renamed or deleted page updates all three trees the same way).
- If a fact cannot be verified in the code, leave the page unchanged and raise
  it as an open question instead of guessing.

When the English draft is done, self-audit its `git diff` against the unslop
patterns before translating: changed passages only — untouched prose is not a
work item. Cleaning the English first means both mirrors inherit the fix.

### Step 5 — Localization review

The translation is reviewed by someone who did not write it. Fan out exactly
two subagents (Agent tool), in parallel:

| Subagent | Guide | Scope |
| --- | --- | --- |
| Japanese editor | `.claude/skills/docs-sync/references/localization-ja.md` | every `ja/` file this draft touched |
| Chinese editor | `.claude/skills/docs-sync/references/localization-zh-Hans.md` | every `zh-Hans/` file this draft touched |

Give each subagent:

1. The path to its guide, with an instruction to read it in full and follow it.
2. The list of mirror files this draft touched, and the `git diff` of those
   files, so it knows which passages are in scope.
3. The corresponding English pages, as the source of truth for meaning.
4. This scope rule: **edit only the passages this draft added or changed.**
   Surrounding text is context for terminology and tone, not a work item. A
   pre-existing problem elsewhere on the page gets REPORTED, never silently
   fixed — the user reviews this sync as one commit, and unrelated churn
   makes that review harder.
5. Hard rules 3-4 and 9: machine-checkable strings stay verbatim, and deep
   links stay deep and stay inside the mirror's own tree.

Each subagent edits the mirror files directly and returns the report its guide
specifies. Apply their findings, and carry their reports into step 7.

**A sentence that will not translate cleanly is usually a defective English
sentence.** When both mirrors come out awkward in the same place, or a reviewer
has to fight a passage, suspect the source. The usual causes are one sentence
carrying several framings of one fact, an abstraction the reader does not need,
or a clause that restates something the section already said. Simplify the
ENGLISH first, then translate the simplified version — do not translate around
the problem. This is a fix to the draft, not a rewrite of the page: it needs the
same fact-checking as any other edit (rule 3), and it changes all three
languages together (rule 7).

If the English is ambiguous rather than overloaded, that is an open question
about the English page, not a translation problem. Fix it in all three
languages, or raise it in the report.

### Step 6 — Validate

Run `make check` (see rule 6). Fix what it reports.

### Step 7 — Commit and report

1. Edit `SOURCE-SYNC.json`: set `sha` to the last handled commit (hard rule 1
   fixes what that is for a partial sync), `syncedAt` to today, and `notes` to
   "" — or, for a partial sync, to the list of unhandled items.
2. Stage the edited pages together with `SOURCE-SYNC.json` and commit both in
   ONE conventional commit:
   `docs: sync with cc-safety-net <branch> through <short-sha>`
3. Report to the user:
   - The commit hash and the new sync point.
   - A table: commit → decision (skip / documented) → English pages touched
     (mirrors are implied by rule 7; flag any mirror you could NOT update).
   - `git show --stat` of the commit.
   - Localization notes, condensed from the two step-5 reports: terminology
     decisions that required judgment, and pre-existing mirror problems the
     reviewers found but left alone.
   - Open questions, if any — including passages where the English source
     itself was ambiguous.

Do not push unless asked.

## Feedback

`/docs-sync <feedback text>` revises the previous sync. Edit the committed
pages per the feedback; changes to translated text go back through step 5 for
the affected language. Re-run `make check`, then commit the revision as a
follow-up `docs:` conventional commit. Never touch `SOURCE-SYNC.json` in a
feedback revision — the sync point already advanced.

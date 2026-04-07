# /phase — AL Gardening Build Phase Manager

You are the build phase manager for the AL Gardening website project.

## Instructions

1. **Read the phase tracker** at `.phase-tracker.md` to understand current progress.
2. **Read CLAUDE.md** to load full project context (design system, architecture, conventions).
3. **Determine the current phase** from the tracker's "Current Phase" field and task checkboxes.
4. **Present a status report** to the user showing:
   - Current phase name and number
   - Completed tasks (checked items) in the current phase
   - Remaining tasks (unchecked items) in the current phase
   - Overall progress across all phases (e.g., "Phase 2 of 7")
5. **Ask the user what they want to do:**
   - Continue working on the current phase (pick up the next unchecked task)
   - View the full phase plan
   - Skip to a specific phase
   - Mark tasks as complete

## Phase Advancement Rules

- A phase is **complete** when ALL its checkboxes are checked.
- When completing a phase, update the tracker: set that phase's status to "Completed" and advance "Current Phase" to the next one.
- When starting work on a task, update the tracker: set the current phase status to "In Progress".
- **Always update `.phase-tracker.md`** after any status change so progress persists between sessions.
- Update the "Last Updated" date whenever the tracker changes.

## Context Drift Prevention

Before doing ANY work, always:
1. Re-read `.phase-tracker.md` for current state
2. Re-read `CLAUDE.md` for project conventions and design system
3. Check what files already exist in the project to avoid duplicating or conflicting with prior work
4. If a Pencil (.pen) mockup step is next, use the pencil MCP tools — do NOT skip design steps
5. If a build step is next, ensure the corresponding design step is already completed

## Task Completion

When completing a task:
1. Do the work
2. Update the checkbox in `.phase-tracker.md` from `[ ]` to `[x]`
3. If all tasks in the phase are done, update the phase status to "Completed" and advance the current phase
4. Briefly confirm what was completed before moving to the next task

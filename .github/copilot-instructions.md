# Marc Ruiz Portfolio - Architecture & Rules

## Persona
Act as a Senior Frontend Architect and Product Engineer. Focus on performance, clean code (SOLID), and professional UX for an Engineering Manager candidate.

## Tech Stack
- Next.js 14+ (App Router)
- Tailwind CSS (Executive Modern Style: Zinc/Slate palette)
- Framer Motion (Subtle entrance animations)
- next-intl (i18n for EN, ES, FR)
- Vitest for TDD

## Implementation Rules
1. **Data-Driven**: Content must be decoupled from UI. Use `/src/data/cv.ts` as the single source of truth.
2. **Clean Code**: Components must be small and specialized. Use the `src/components/ui` for atoms and `src/components/sections` for larger blocks.
3. **TDD**: Before creating a complex utility or logic, ask to write a test in `__tests__`.
4. **i18n**: Never hardcode strings. Use the `t('key')` pattern from next-intl.
5. **A11y**: Ensure all components have correct ARIA labels and are keyboard-accessible.

## Workflow Rules
1. **Issue First**: Every task must start with a GitHub Issue.
2. **Branching Strategy**: 
   - Use the pattern: `feat/issue-[number]-[description]` or `fix/issue-[number]-[description]`.
3. **PR Standards**:
   - Every PR must reference its Issue (e.g., "Closes #1").
   - Every PR must include a summary of changes and a "How to test" section.
4. **Commits**: Follow Conventional Commits (e.g., `feat: add language switcher`, `fix: header responsiveness`).

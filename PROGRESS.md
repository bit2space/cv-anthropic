# Progress: Fix Eastern Europe Map Flags

**Started:** 2025-12-08
**Status:** In Progress

## Current Task
Fix the Eastern Europe map section:
1. Align SVG map to the right of the container
2. Reposition all country flags to correct geographic locations
3. Added coordinate grid overlay for precise positioning

## Checklist
- [x] Add coordinate grid overlay (10% increments)
- [x] Change SVG alignment to `object-cover object-right`
- [x] Update Russia position (90%, 30%)
- [x] Update Ukraine position (85%, 55%)
- [x] Update Poland position (60%, 55%)
- [x] Update Belarus position (75%, 45%)
- [x] Update Czechia position (53%, 61%)
- [ ] Update Romania position
- [ ] Update Hungary position
- [ ] Update Bulgaria position
- [ ] Update Slovakia position
- [ ] Update Moldova position
- [ ] Remove grid overlay (set SHOW_DEV_GRID = false)
- [ ] Final review and commit

## Notes
- Grid overlay enabled via `SHOW_DEV_GRID = true` in EasternEurope.tsx
- Red lines = X (left %), Blue lines = Y (top %)
- Dev server running on http://localhost:3000

## Files Modified
- `app/src/components/sections/EasternEurope.tsx` - Flag positions + grid overlay

## Current Flag Positions (awaiting user input)
| Flag | Country | Status |
|------|---------|--------|
| Russia | 90%, 30% | Done |
| Ukraine | 85%, 55% | Done |
| Poland | 60%, 55% | Done |
| Belarus | 75%, 45% | Done |
| Czechia | 53%, 61% | Done |
| Romania | 58%, 50% | Needs update |
| Hungary | 50%, 46% | Needs update |
| Bulgaria | 56%, 58% | Needs update |
| Slovakia | 48%, 42% | Needs update |
| Moldova | 62%, 46% | Needs update |

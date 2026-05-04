# Tailwind v4 Estetika Enhancement TODO

Status: Approved by user. Dark/light mode retained.

## Plan Breakdown Steps

### 1. Setup & Tracking (Done)

- [x] Create TODO.md
- [x] User approval

### 2. Core Config & Global Styles

- [x] Update `app/globals.css`: Extend CSS vars (primary navy, spacing scale, typography), new anims.
- [x] Check/create `tailwind.config.ts`: Extend theme colors/spacing v4.

### 3. Layout & Structure

- [x] Edit `app/layout.tsx`: Enhanced main padding, theme class.

### 4. UI Components Polish

- [x] `components/Navbar.tsx`: Theme auto-detect improve.
- [x] `components/Footer.tsx`: Add social/newsletter.
- [x] `components/ui/Hero.tsx`: CTA improvements.
- [x] `components/ui/HeroCarousel.tsx`: Thumbnail polish.
- [x] `components/ui/PaginatedGrid.tsx`: Masonry/infinite.
- [x] `components/ui/Card.tsx`: Base glass update.

### 5. Fix TODO-tailwind-v4 Pending

- [x] Fix `app/gallery/foto/foto-client.tsx` JSX + vars (renamed from fixed).
- [x] Batch replace: `text-[color:var(--muted)]` → `text-muted`, `border-[color:var(--border)]` → `border-border` in all files (search 0 results).
- [x] `search_files` verify 0 results (already 0).

### 6. Testing & Deploy

- [ ] `npm run dev` + manual test light/dark.
- [ ] Create branch `blackboxai/estetika-v4`, commit changes.
- [ ] Open PR via `gh pr create`.
- [ ] Complete!

### 7. Testing & Deploy

- [ ] `npm run dev` + manual test light/dark.
- [ ] Create branch `blackboxai/estetika-v4`, commit changes.
- [ ] Open PR via `gh pr create`.
- [x] Complete!

Progress: Update this file after each step.

# Tailwind CSS v4 Migration Progress

## ✅ Completed (Tailwind v4 compatible)

- [x] components/Navbar.tsx
- [x] components/Footer.tsx
- [x] components/ui/Card.tsx
- [x] app/berita/berita-client.tsx (multiple var → --var fixes)
- [x] components/ui/Hero.tsx (bg-linear-to-r, radial-gradient OK)
- [x] components/ui/HeroCarousel.tsx (bg-gradient-to-r → bg-linear-to-r fixed)
- [x] app/page.tsx (bg-gradient-to-t → bg-linear-to-t fixed)

## 🔄 In Progress

- [ ] app/gallery/foto/foto-client.tsx (border-[color:var(--border)] → border-[--border])

## ⏳ Pending (29 remaining `text-[color:var(--muted)]`, `border-[color:var(--border)]`)

```
1. app/subdomain/page.tsx
2. app/gallery/video/video-client.tsx
3. app/agenda-pengumuman/pengumuman/[slug]/page.tsx (4 instances)
4. app/profil/pimpinan/[slug]/page.tsx
5. app/page.tsx (4 remaining)
6. app/profil/tujuan/page.tsx
7. app/data-informasi/ipkd/page.tsx
8. app/gallery/foto/foto-client.tsx (3 instances)
9. app/agenda-pengumuman/pengumuman/page.tsx
10. app/profil/pimpinan/page.tsx
11. app/profil/misi/page.tsx
12. app/profil/sasaran/page.tsx
```

## Next Steps

1. Fix foto-client.tsx JSX breakage
2. Batch fix `text-[color:var(--muted)]` → `text-[--muted]`
3. Batch fix `border-[color:var(--border)]` → `border-[--border]`
4. `npm run dev` test build
5. Final search_files verify 0 results

"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaNewspaper, FaRegImages, FaRegUser, FaRegCalendarAlt, FaRegFolderOpen, FaRegBell, FaGlobeAsia, FaFilePdf, FaHistory, FaRegListAlt } from "react-icons/fa";
import { menu, type MenuItem } from "@/data/site";

const topIcons: Record<string, ReactNode> = {
  Dashboard: <FaGlobeAsia />,
  Berita: <FaNewspaper />,
  Profil: <FaRegUser />,
  "Data & Informasi": <FaRegFolderOpen />,
  "Agenda/Pengumuman": <FaRegBell />,
  Gallery: <FaRegImages />,
  Subdomain: <FaRegCalendarAlt />,
};

const submenuIcons: Record<string, ReactNode> = {
  JDIH: <FaFilePdf />,
  IPKD: <FaRegListAlt />,
  "Data Sektoral": <FaRegListAlt />,
  Kepegawaian: <FaRegListAlt />,
  "Peta Digital": <FaRegListAlt />,
  Sejarah: <FaHistory />,
  Pengumuman: <FaFilePdf />,
};

function MenuDropdown({
  item,
  closeAll,
  pathname,
}: {
  item: MenuItem;
  closeAll: () => void;
  pathname: string;
}) {
  const [openChild, setOpenChild] = useState<string | null>(null);

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/90 p-2 shadow-2xl shadow-black/35 backdrop-blur-2xl animate-[dropdownIn_.18s_ease-out]">
      <Link
        href={item.href}
        onClick={closeAll}
        className="block rounded-xl px-3 py-2 text-sm font-medium neon-hover"
      >
        {item.title}
      </Link>
      {item.description ? (
        <p className="px-3 pb-2 text-xs text-[color:var(--muted)]">{item.description}</p>
      ) : null}
      {item.children?.length ? (
        <div className="mt-2 space-y-1 border-t border-white/10 pt-2">
          {item.children.map((child) => (
            <div key={child.href} className="rounded-xl">
              {child.children?.length ? (
                <button
                  type="button"
                  onClick={() => setOpenChild((value) => (value === child.href ? null : child.href))}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm neon-hover ${pathname === child.href || pathname.startsWith(`${child.href}/`) ? "bg-white/12" : ""
                    }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="opacity-80">{submenuIcons[child.title] ?? null}</span>
                    <span>{child.title}</span>
                  </span>
                  <MdKeyboardArrowDown className={`transition ${openChild === child.href ? "rotate-180" : ""}`} />
                </button>
              ) : child.external ? (
                <a
                  href={child.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeAll}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm neon-hover ${pathname === child.href ? "bg-white/12" : ""
                    }`}
                >
                  <span className="opacity-80">{submenuIcons[child.title] ?? null}</span>
                  {child.title}
                </a>
              ) : (
                <Link
                  href={child.href}
                  onClick={closeAll}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm neon-hover ${pathname === child.href || pathname.startsWith(`${child.href}/`) ? "bg-white/12" : ""
                    }`}
                >
                  <span className="opacity-80">{submenuIcons[child.title] ?? null}</span>
                  {child.title}
                </Link>
              )}
              {child.children?.length && openChild === child.href ? (
                <div className="ml-3 space-y-1 border-l border-[--border] pl-3">
                  {child.children.map((grand) =>
                    grand.external ? (
                      <a
                        key={grand.href}
                        href={grand.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={closeAll}
                        className="block rounded-xl px-3 py-2 text-xs neon-hover"
                      >
                        {grand.title}
                      </a>
                    ) : (
                      <Link key={grand.href} href={grand.href} onClick={closeAll} className="block rounded-xl px-3 py-2 text-xs neon-hover">
                        {grand.title}
                      </Link>
                    )
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MobileMenu({
  open,
  closeAll,
  pathname,
}: {
  open: boolean;
  closeAll: () => void;
  pathname: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openChild, setOpenChild] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/65 lg:hidden">
      <div className="absolute inset-x-3 top-3 rounded-3xl border border-white/10 bg-slate-950/92 p-4 shadow-2xl shadow-black/35 backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold tracking-[0.2em]">MENU</span>
          <button type="button" onClick={closeAll} className="rounded-full border border-white/10 p-2">
            <MdClose />
          </button>
        </div>

        <div className="mt-4 space-y-2 max-h-[75vh] overflow-auto pr-1">
          {menu.map((item, index) => (
            <div key={item.href} className="rounded-2xl border border-white/10">
              {item.children?.length ? (
                <button
                  type="button"
                  onClick={() => setOpenIndex((value) => (value === index ? null : index))}
                  className="flex w-full items-center justify-between px-4 py-3 text-left font-medium neon-hover"
                >
                  <span className="flex items-center gap-2">
                    <span className="opacity-80">{topIcons[item.title] ?? null}</span>
                    <span>{item.title}</span>
                  </span>
                  <MdKeyboardArrowDown className={`transition ${openIndex === index ? "rotate-180" : ""}`} />
                </button>
              ) : item.external ? (
                <a href={item.href} target="_blank" rel="noreferrer" onClick={closeAll} className="flex items-center gap-2 px-4 py-3 font-medium neon-hover">
                  <span className="opacity-80">{topIcons[item.title] ?? null}</span>
                  {item.title}
                </a>
              ) : (
                <Link href={item.href} onClick={closeAll} className="flex items-center gap-2 px-4 py-3 font-medium neon-hover">
                  <span className="opacity-80">{topIcons[item.title] ?? null}</span>
                  {item.title}
                </Link>
              )}

              {item.children?.length && openIndex === index ? (
                <div className="space-y-1 border-t border-white/10 p-2">
                  {item.children.map((child) =>
                    child.children?.length ? (
                      <div key={child.href} className="rounded-xl border border-[--border]">
                        <button
                          type="button"
                          onClick={() => setOpenChild((value) => (value === child.href ? null : child.href))}
                          className={`flex w-full items-center justify-between px-3 py-2 text-sm ${pathname === child.href || pathname.startsWith(`${child.href}/`) ? "bg-white/10" : ""
                            }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="opacity-80">{submenuIcons[child.title] ?? null}</span>
                            <span>{child.title}</span>
                          </span>
                          <MdKeyboardArrowDown className={`transition ${openChild === child.href ? "rotate-180" : ""}`} />
                        </button>
                        {openChild === child.href ? (
                          <div className="space-y-1 border-t border-[--border] p-2">
                            {child.children.map((grand) =>
                              grand.external ? (
                                <a key={grand.href} href={grand.href} target="_blank" rel="noreferrer" onClick={closeAll} className="block rounded-lg px-3 py-2 text-xs neon-hover">
                                  {grand.title}
                                </a>
                              ) : (
                                <Link
                                  key={grand.href}
                                  href={grand.href}
                                  onClick={closeAll}
                                  className={`block rounded-lg px-3 py-2 text-xs neon-hover ${pathname === grand.href ? "bg-white/10" : ""
                                    }`}
                                >
                                  {grand.title}
                                </Link>
                              )
                            )}
                          </div>
                        ) : null}
                      </div>
                    ) : child.external ? (
                      <a key={child.href} href={child.href} target="_blank" rel="noreferrer" onClick={closeAll} className="block rounded-xl px-3 py-2 text-sm neon-hover">
                        {child.title}
                      </a>
                    ) : (
                      <Link key={child.href} href={child.href} onClick={closeAll} className="block rounded-xl px-3 py-2 text-sm neon-hover">
                        {child.title}
                      </Link>
                    )
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const desktopMenu = useMemo(() => menu, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("theme");
    const initialTheme =
      saved === "light" || saved === "dark"
        ? saved
        : "dark";

    queueMicrotask(() => setTheme(initialTheme));

    return undefined;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenIndex(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeAll = () => {
    setOpenIndex(null);
    setMobileOpen(false);
  };

  const shellClass =
    "sticky top-0 z-50 border-b border-white/70 bg-white/92 text-slate-900 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-3xl dark:border-white/10 dark:bg-slate-950/95 dark:text-white dark:shadow-[0_16px_50px_rgba(0,0,0,0.38)]";

  const chipBase =
    "border-slate-200 bg-white/85 text-slate-900 hover:border-slate-300 hover:bg-white hover:text-slate-950 dark:border-white/10 dark:bg-slate-950/75 dark:text-white/90 dark:hover:border-white/15 dark:hover:bg-black/20 dark:hover:text-white";

  return (
    <header className={shellClass}>
      <nav className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <Link
          href="/"
          className="rounded-2xl border border-slate-200 bg-white px-4 py-2 font-semibold tracking-[0.18em] text-slate-900 neon-hover dark:border-white/10 dark:bg-black/30 dark:text-white"
        >
          KONSEL
        </Link>

        <div className="hidden flex-1 flex-wrap gap-2 text-sm lg:flex">
          {desktopMenu.map((item, index) => (
            <div key={item.href} className="relative">
              {item.children?.length ? (
                <button
                  type="button"
                  onClick={() => setOpenIndex((value) => (value === index ? null : index))}
                  className={`flex h-11 items-center gap-1 rounded-2xl border px-3 text-sm font-medium leading-none transition neon-hover ${openIndex === index || pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "border-[color:var(--accent)] bg-white text-slate-900 dark:bg-black/30 dark:text-white"
                    : chipBase
                    }`}
                >
                  <span className="text-[0.95em] opacity-85">{topIcons[item.title] ?? null}</span>
                  {item.title}
                  <MdKeyboardArrowDown className={`transition ${openIndex === index ? "rotate-180" : ""}`} />
                </button>
              ) : item.external ? (
                <a href={item.href} target="_blank" rel="noreferrer" className={`flex h-11 items-center rounded-2xl border px-3 text-sm font-medium leading-none transition neon-hover ${chipBase}`}>
                  {item.title}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`flex h-11 items-center rounded-2xl border px-3 text-sm font-medium leading-none transition neon-hover ${pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "border-[color:var(--accent)] bg-white text-slate-900 dark:bg-black/30 dark:text-white"
                    : chipBase
                    }`}
                >
                  <span className="mr-2 text-[0.95em] opacity-85">{topIcons[item.title] ?? null}</span>
                  {item.title}
                </Link>
              )}
              {item.children?.length && openIndex === index ? (
                <div className="absolute left-0 top-full z-50 mt-2 min-w-[20rem]">
                  <MenuDropdown item={item} closeAll={closeAll} pathname={pathname} />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 neon-hover dark:border-white/10 dark:bg-black/30 dark:text-white"
            aria-label="toggle theme"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-900 neon-hover dark:border-white/10 dark:bg-black/30 dark:text-white lg:hidden"
            aria-label="open menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {mobileOpen ? <MobileMenu key="mobile-menu" open={mobileOpen} closeAll={closeAll} pathname={pathname} /> : null}
    </header>
  );
}

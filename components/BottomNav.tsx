"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  {
    href: "/",
    label: "Home",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H15.75V15h-7.5v6.75H3.75A.75.75 0 013 21V9.75z" />
      </svg>
    ),
  },
  {
    href: "/menu",
    label: "Menu",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/about",
    label: "About",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5.5M12 7.75v.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21C12 21 4.5 13.5 4.5 9a7.5 7.5 0 1115 0c0 4.5-7.5 12-7.5 12z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sm:hidden sticky bottom-0 z-50 flex border-t border-stone/20 bg-cream/97 backdrop-blur">
      {TABS.map((tab) => {
        const active =
          tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex flex-1 flex-col items-center gap-[3px] border-b-[1.5px] pt-[11px] pb-[9px] eyebrow text-[9px] transition-colors ${
              active
                ? "text-bay-blue border-b-bay-blue"
                : "text-stone border-b-transparent"
            }`}
          >
            {tab.icon}
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Menu, Search, ShieldCheck, X } from "lucide-react";
import { articles, categories } from "@/data/content";
import { Logo } from "@/components/logo";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "8171", href: "/8171/" },
  { label: "Benazir Kafaalat", href: "/benazir-kafaalat/" },
  { label: "Taleemi Wazaif", href: "/taleemi-wazaif/" },
  { label: "News", href: "/news/" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return articles.slice(0, 5);
    return articles.filter((article) =>
      `${article.title} ${article.excerpt} ${article.primaryCategory}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  const closeAll = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  return (
    <>
      <div className="notice-bar">
        <div className="shell notice-inner">
          <span><ShieldCheck size={15} /> Independent public information</span>
          <span className="notice-hide-mobile">We never ask for your CNIC, OTP, or payment.</span>
          <Link href="/disclaimer/">Read our disclaimer</Link>
        </div>
      </div>
      <header className="site-header">
        <div className="shell header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {mainLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
            <div className="nav-dropdown">
              <button type="button">More guides <ChevronDown size={15} /></button>
              <div className="dropdown-panel">
                <Link href="/bisp-registration/">BISP registration</Link>
                <Link href="/payment-check/">Payment check</Link>
                <Link href="/other-schemes/">Other schemes</Link>
                <Link href="/about-us/">About us</Link>
              </div>
            </div>
          </nav>
          <div className="header-actions">
            <button className="icon-button" type="button" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <Search size={21} />
            </button>
            <button className="icon-button mobile-menu-button" type="button" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
              <Menu size={23} />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer-overlay ${menuOpen ? "is-open" : ""}`} onClick={closeAll} aria-hidden="true" />
      <aside className={`mobile-drawer ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="drawer-head">
          <Logo />
          <button className="icon-button" type="button" aria-label="Close menu" onClick={closeAll}><X /></button>
        </div>
        <nav aria-label="Mobile navigation">
          {mainLinks.map((link) => <Link href={link.href} onClick={closeAll} key={link.href}>{link.label}</Link>)}
          {categories.filter((category) => !mainLinks.some((link) => link.href === `/${category.slug}/`)).map((category) => (
            <Link href={`/${category.slug}/`} onClick={closeAll} key={category.slug}>{category.shortName}</Link>
          ))}
          <Link href="/about-us/" onClick={closeAll}>About us</Link>
          <Link href="/contact-us/" onClick={closeAll}>Contact</Link>
        </nav>
        <div className="drawer-safe-note">
          <ShieldCheck size={20} />
          <p><strong>Stay safe.</strong><br />Use official portals for applications and private details.</p>
        </div>
      </aside>

      {searchOpen && (
        <div className="search-modal" role="dialog" aria-modal="true" aria-label="Search Welfare Desk">
          <button className="search-backdrop" type="button" aria-label="Close search" onClick={closeAll} />
          <div className="search-panel">
            <div className="search-panel-head">
              <div><span className="eyebrow">Search the desk</span><h2>What do you need help with?</h2></div>
              <button className="icon-button" type="button" aria-label="Close search" onClick={closeAll}><X /></button>
            </div>
            <label className="search-input-wrap">
              <Search size={20} />
              <span className="sr-only">Search guides</span>
              <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “payment”, “registration”, or “8171”" />
            </label>
            <div className="search-results">
              {results.length ? results.map((article) => (
                <Link href={`/${article.slug}/`} onClick={closeAll} key={article.slug}>
                  <small>{article.primaryCategory}</small>
                  <strong>{article.title}</strong>
                  <span>{article.excerpt}</span>
                </Link>
              )) : <p className="empty-search">No matching guide yet. Try a broader term.</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

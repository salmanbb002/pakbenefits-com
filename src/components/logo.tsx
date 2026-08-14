import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand ${inverse ? "brand-inverse" : ""}`} href="/" aria-label="Live Govt Schemes and Ehsaas Programs home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" role="img">
          <rect x="2" y="2" width="44" height="44" rx="13" fill="currentColor" />
          <path d="M16 12.5h12.4l6.6 6.6v16.4H16v-23Z" fill="white" />
          <path d="M28.4 12.5v6.6H35" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" opacity=".3" />
          <path d="m20.3 27 3.1 3.1 7-7.3" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="36.5" cy="11.5" r="5" fill="#f0bb56" stroke="white" strokeWidth="2" />
        </svg>
      </span>
      <span className="brand-copy">
        <strong>Live Govt Schemes</strong>
        <small>Ehsaas Programs</small>
      </span>
    </Link>
  );
}

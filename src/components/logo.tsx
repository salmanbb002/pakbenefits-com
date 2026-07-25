import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand ${inverse ? "brand-inverse" : ""}`} href="/" aria-label="Welfare Desk Pakistan home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 44 44" role="img">
          <path d="M22 3.5 37.5 9v11.2c0 9.7-6.1 17.2-15.5 20.3C12.6 37.4 6.5 29.9 6.5 20.2V9L22 3.5Z" fill="currentColor" />
          <path d="M14.4 23.2c4.8-1.4 9.6-5 14.9-11.2-1.1 8.7-4.8 15.3-11.5 19.7l-3.4-8.5Z" fill="white" opacity=".98" />
          <circle cx="29.8" cy="13.2" r="2.6" fill="white" />
        </svg>
      </span>
      <span className="brand-copy">
        <strong>Welfare Desk</strong>
        <small>Pakistan</small>
      </span>
    </Link>
  );
}

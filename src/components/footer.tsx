import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { articles } from "@/data/content";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-about">
          <Logo inverse />
          <p>Clear, independent guides to public programmes in Pakistan, with privacy-first advice and direct official links.</p>
          <div className="footer-trust"><ShieldCheck size={18} /> Not a government website</div>
        </div>
        <div>
          <p className="footer-heading" id="footer-explore">Explore</p>
          <nav aria-labelledby="footer-explore">
            <Link href="/8171/">8171 status guides</Link>
            <Link href="/benazir-kafaalat/">Benazir Kafaalat</Link>
            <Link href="/ehsaas-programs/">Ehsaas programmes</Link>
            <Link href="/nser-pmt-score/">NSER & PMT score</Link>
            <Link href="/taleemi-wazaif/">Taleemi Wazaif</Link>
            <Link href="/other-schemes/">Other schemes</Link>
            <Link href="/news/">News desk</Link>
          </nav>
        </div>
        <div>
          <p className="footer-heading" id="footer-important">Important pages</p>
          <nav aria-labelledby="footer-important">
            <Link href="/about-us/">About us</Link>
            <Link href="/contact-us/">Contact</Link>
            <Link href="/privacy-policy/">Privacy policy</Link>
            <Link href="/terms-and-conditions/">Terms & conditions</Link>
            <Link href="/disclaimer/">Disclaimer</Link>
          </nav>
        </div>
        <div>
          <p className="footer-heading" id="footer-latest">Latest guides</p>
          <nav className="footer-latest" aria-labelledby="footer-latest">
            {articles.slice(0, 3).map((article) => (
              <Link href={`/${article.slug}/`} key={article.slug}>{article.title} <ArrowUpRight size={14} /></Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© 2026 Welfare Desk Pakistan. Independent public information.</p>
        <Link href="/contact-us/">Contact and safety policy</Link>
      </div>
    </footer>
  );
}

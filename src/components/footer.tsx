import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { articles } from "@/data/content";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-portal-card">
        <div>
          <span className="footer-portal-label"><ShieldCheck size={16} /> Official destination</span>
          <h2>Ready to check your 8171 status?</h2>
          <p>Continue securely on the official BISP portal. We never ask for your CNIC, OTP, or payment.</p>
        </div>
        <a className="footer-portal-link" href="https://8171.bisp.gov.pk/" target="_blank" rel="noreferrer">
          Open official 8171 <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="shell footer-grid">
        <div className="footer-about">
          <Logo inverse />
          <p>PakBenefits (pakbenefits.com), published as Live Govt Schemes &amp; Ehsaas Programs, provides independent guides to public support across Pakistan.</p>
          <div className="footer-trust"><ShieldCheck size={18} /> Not a government website</div>
        </div>
        <div>
          <p className="footer-heading" id="footer-explore">Programs</p>
          <nav aria-labelledby="footer-explore">
            <Link href="/8171/">8171 status guides</Link>
            <Link href="/benazir-kafaalat/">Benazir Kafaalat</Link>
            <Link href="/ehsaas-programs/">Ehsaas programmes</Link>
            <Link href="/nser-pmt-score/">NSER & PMT score</Link>
            <Link href="/taleemi-wazaif/">Taleemi Wazaif</Link>
            <Link href="/other-schemes/">Other schemes</Link>
            <Link href="/punjab-schemes/">Punjab schemes</Link>
            <Link href="/what-is-bisp/">What is BISP?</Link>
            <Link href="/news/">News desk</Link>
          </nav>
        </div>
        <div>
          <p className="footer-heading" id="footer-important">Help & safety</p>
          <nav aria-labelledby="footer-important">
            <Link href="/about-us/">About us</Link>
            <Link href="/contact-us/">Contact</Link>
            <Link href="/privacy-policy/">Privacy policy</Link>
            <Link href="/terms-and-conditions/">Terms & conditions</Link>
            <Link href="/disclaimer/">Disclaimer</Link>
            <Link href="/cnic-verification-guide/">CNIC verification</Link>
            <Link href="/avoid-bisp-fraud/">Fraud prevention</Link>
          </nav>
        </div>
        <div>
          <p className="footer-heading" id="footer-latest">Latest guides</p>
          <nav className="footer-latest" aria-labelledby="footer-latest">
            {articles.slice(0, 3).map((article) => (
              <Link href={`/${article.slug}/`} key={article.slug}>{article.title} <ArrowRight size={14} /></Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© 2026 Live Govt Schemes &amp; Ehsaas Programs. Independent public information.</p>
        <div className="footer-bottom-links">
          <Link href="/privacy-policy/">Privacy</Link>
          <Link href="/disclaimer/">Disclaimer</Link>
          <Link href="/contact-us/">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

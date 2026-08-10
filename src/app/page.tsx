import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BellRing,
  BookOpenCheck,
  Coins,
  GraduationCap,
  HandCoins,
  Landmark,
  Newspaper,
  ShieldCheck,
  Smartphone,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { articles, categories } from "@/data/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const iconMap = {
  badge: BadgeCheck,
  wallet: WalletCards,
  users: UsersRound,
  landmark: Landmark,
  graduation: GraduationCap,
  newspaper: Newspaper,
  coins: Coins,
  activity: Activity,
};

const faq = [
  ["Is Welfare Desk Pakistan an official government website?", "No. We are an independent information website. We explain public information and link readers to the responsible official organization."],
  ["Can I check my eligibility on this website?", "No. For privacy and accuracy, individual status checks belong only on the official 8171 portal or with the responsible programme office."],
  ["Do you ask for CNIC or bank details?", "Never. Do not send us a CNIC number or image, OTP, password, bank account, card number, or PIN."],
  ["How do you verify an update?", "We look for the responsible department, official portal, public notice, or government press release and link it inside the guide."],
  ["Are the guides free?", "Yes. Reading the site is free, and we do not charge a registration or payment-release fee."],
  ["What if an official process changes?", "The official source always controls. Check the update date and follow the official link before acting."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="live-dot" /> Clear guidance. Official destinations.</div>
            <h1>Government support, explained <em>without the confusion.</em></h1>
            <p>Independent guides to BISP, 8171, education support, youth opportunities, and public-service updates across Pakistan.</p>
            <div className="hero-actions">
              <Link className="button" href="#latest">Explore latest guides <ArrowRight size={17} /></Link>
              <a className="button button-outline" href="https://8171.bisp.gov.pk/" target="_blank" rel="noreferrer">Open official 8171 <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-proof">
              <span><ShieldCheck size={18} /> No CNIC collection</span>
              <span><BadgeCheck size={18} /> Official links included</span>
            </div>
          </div>
          <div className="hero-visual">
            <Image src="/images/hero-support.jpg" alt="A Pakistani mother and daughter receiving public service guidance" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
            <div className="hero-float-card">
              <span>Start here</span>
              <strong>Check the source before you share.</strong>
              <small>Every guide points back to an official portal.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="path-strip" aria-label="How Welfare Desk helps">
        <div className="shell path-grid">
          <div><span>01</span><Smartphone /><p><strong>Find the right guide</strong><small>Search by programme or task.</small></p></div>
          <div><span>02</span><BookOpenCheck /><p><strong>Understand the steps</strong><small>Plain language, short checklists.</small></p></div>
          <div><span>03</span><ShieldCheck /><p><strong>Continue officially</strong><small>Use the linked government portal.</small></p></div>
        </div>
      </section>

      <section className="section topics-section">
        <div className="shell">
          <div className="section-heading centered">
            <span className="eyebrow">Browse by topic</span>
            <h2>One desk for the questions people ask most</h2>
            <p>Choose a topic to find current explainers, safe next steps, and the responsible official source.</p>
          </div>
          <div className="topic-grid">
            {categories.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <Link className="topic-card" href={`/${category.slug}/`} key={category.slug}>
                  <span className="topic-icon"><Icon /></span>
                  <span className="topic-number">0{categories.indexOf(category) + 1}</span>
                  <h3>{category.shortName}</h3>
                  <p>{category.description}</p>
                  <span className="card-link">View guides <ArrowRight size={15} /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section latest-section" id="latest">
        <div className="shell">
          <div className="section-heading row-heading">
            <div><span className="eyebrow">Latest desk updates</span><h2>Useful information, recently reviewed</h2></div>
            <Link className="text-link" href="/news/">Visit the news desk <ArrowUpRight size={16} /></Link>
          </div>
          <div className="lead-stories">
            <ArticleCard article={articles[0]} featured />
            <div className="story-side-grid">
              <ArticleCard article={articles[1]} />
              <ArticleCard article={articles[2]} />
            </div>
          </div>
          <div className="article-grid home-article-grid">
            {articles.slice(3, 6).map((article) => <ArticleCard article={article} key={article.slug} />)}
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="shell trust-grid">
          <div className="trust-image">
            <Image src="/images/registration-guide.jpg" alt="A Pakistani woman checking a registration guide safely" fill sizes="(max-width: 900px) 100vw, 48vw" />
            <div className="trust-image-label"><ShieldCheck /><span><strong>Privacy first</strong>Read without sharing personal data.</span></div>
          </div>
          <div className="trust-copy">
            <span className="eyebrow light">Why this desk exists</span>
            <h2>Public information should feel clear, calm, and safe.</h2>
            <p>People often miss support because a notice is hard to understand—or lose money to someone promising a shortcut. We turn official information into practical guides while keeping the final action where it belongs: on an official portal or at an authorized office.</p>
            <div className="trust-points">
              <div><HandCoins /><span><strong>No release fees</strong><small>We never charge to unlock a payment.</small></span></div>
              <div><BellRing /><span><strong>Scam-aware</strong><small>Red flags are built into relevant guides.</small></span></div>
              <div><Newspaper /><span><strong>Source-led</strong><small>Important claims point to a responsible source.</small></span></div>
            </div>
            <Link className="button button-light" href="/about-us/">How we work <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <span className="eyebrow">Good to know</span>
            <h2>Frequently asked questions</h2>
            <p>Quick answers about this website, privacy, eligibility, and official programme information.</p>
            <Link className="text-link" href="/contact-us/">Still have a question? <ArrowUpRight size={16} /></Link>
          </div>
          <div className="faq-list">
            {faq.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

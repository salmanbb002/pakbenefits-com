import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found shell">
      <span className="eyebrow">404 · Guide not found</span>
      <h1>This page is not at the desk.</h1>
      <p>The link may have changed. Return home or use search to find the right programme guide.</p>
      <Link className="button" href="/"><ArrowLeft size={16} /> Back to homepage</Link>
    </main>
  );
}

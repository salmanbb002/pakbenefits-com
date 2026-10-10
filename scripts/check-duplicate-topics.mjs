import fs from 'fs';
import path from 'path';

/**
 * CLI Automation Guard: Prevent Keyword Cannibalization & Duplicate Topics
 * 
 * Verifies that no incoming article slug, focus keyword, or proposed topic
 * collides with an already consolidated Master Pillar Guide.
 */

// Master topic blocks and their assigned canonical Master Pages
export const CONSOLIDATED_CLUSTERS = [
  {
    name: "Punjab E-Bikes & Electric Scooty Initiatives",
    masterSlug: "cm-punjab-electric-bike-scheme",
    masterUrl: "/cm-punjab-electric-bike-scheme/",
    forbiddenKeywords: [
      "punjab e-bike",
      "punjab e-bikes",
      "punjab electric bike",
      "cm punjab e-bike",
      "cm punjab electric bike",
      "maryam nawaz electric bike",
      "maryam nawaz e-bike",
      "how to apply cm punjab e-bike",
      "e-bike scheme phase 2",
      "e-bikes scheme phase 2",
      "electric bike scheme expansions",
      "bikes.punjab.gov.pk",
      "provincial bike transport"
    ],
    retiredSlugs: [
      "how-to-apply-cm-punjab-e-bike-scheme-2026",
      "cm-punjab-e-bikes-scheme-phase-2",
      "cm-punjab-e-bike-scheme-updates",
      "maryam-nawaz-electric-bike-scheme-2026",
      "electric-bike-scheme-expansions",
      "cm-and-pm-electric-bike-schemes",
      "provincial-bike-transport-schemes",
      "punjab-e-bike-scheme-apply-online"
    ]
  },
  {
    name: "BISP Biometric Verification & Fingerprint Failures",
    masterSlug: "bisp-biometric-verification-failed",
    masterUrl: "/bisp-biometric-verification-failed/",
    forbiddenKeywords: [
      "bisp biometric verification failed",
      "bisp biometric fingerprint solution",
      "bisp fingerprint mismatch",
      "bisp error 93",
      "bisp error 99"
    ],
    retiredSlugs: [
      "bisp-biometric-verification-failed-fingerprint-solution"
    ]
  },
  {
    name: "BISP Balance Check by CNIC & Payment Verification",
    masterSlug: "bisp-balance-check-by-cnic-2026",
    masterUrl: "/bisp-balance-check-by-cnic-2026/",
    forbiddenKeywords: [
      "bisp payment check guide",
      "bisp 8171 payment balance check guide",
      "bisp balance check by cnic"
    ],
    retiredSlugs: [
      "bisp-payment-check-guide",
      "bisp-8171-payment-balance-check-guide"
    ]
  }
];

export function validateTopic({ slug, title = '', focusKeyword = '' }) {
  const normalizedSlug = slug.toLowerCase().trim();
  const normalizedTitle = title.toLowerCase().trim();
  const normalizedKw = focusKeyword.toLowerCase().trim();

  for (const cluster of CONSOLIDATED_CLUSTERS) {
    // If it is the master slug itself, it's allowed for updates
    if (normalizedSlug === cluster.masterSlug) {
      continue;
    }

    // Check retired slugs
    if (cluster.retiredSlugs.includes(normalizedSlug)) {
      return {
        allowed: false,
        reason: `[CANNIBALIZATION BLOCKED] Slug "${slug}" is a retired URL consolidated into "${cluster.masterUrl}". Direct content updates to the Master Page instead of creating a new article.`
      };
    }

    // Check keyword collision
    for (const kw of cluster.forbiddenKeywords) {
      if (
        normalizedSlug.includes(kw.replace(/\s+/g, '-')) ||
        normalizedTitle.includes(kw) ||
        normalizedKw.includes(kw)
      ) {
        return {
          allowed: false,
          reason: `[CANNIBALIZATION BLOCKED] Topic "${slug}" / "${focusKeyword}" overlaps with consolidated master cluster "${cluster.name}". Canonical master is "${cluster.masterUrl}". Google will penalize doorway pages or duplicate variants.`
        };
      }
    }
  }

  return { allowed: true };
}

// Self-test CLI execution
if (process.argv[1]?.endsWith('check-duplicate-topics.mjs')) {
  console.log("=== Checking Content Repository for Cannibalization Collisions ===");
  const content = fs.readFileSync('src/data/content.ts', 'utf8');
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  let match;
  let violations = [];

  while ((match = slugRegex.exec(content)) !== null) {
    const slug = match[1];
    const res = validateTopic({ slug });
    if (!res.allowed) {
      violations.push({ slug, reason: res.reason });
    }
  }

  if (violations.length > 0) {
    console.error(`❌ Cannibalization violations detected (${violations.length}):`);
    violations.forEach(v => console.error(` - ${v.slug}: ${v.reason}`));
    process.exit(1);
  } else {
    console.log("✅ Zero duplicate / cannibalizing topics found in content.ts.");
    console.log("✅ Master cluster locks active: Punjab E-Bikes, BISP Biometric Verification, BISP Balance Check.");
    process.exit(0);
  }
}

# SEO Content Research Notes: State Bank Pasban Scheme (Updated with Competitor Parity)

**Primary Keyword:** State Bank Pasban Scheme  
**Target Niche:** Pakistan Banking, Home Remittances, Personal Finance  
**Page Type:** Informational Guide / Blog Post  
**Date:** October 6, 2026  
**Pipeline Version:** v2 (Semantic / Entity Edition - Deep Competitor Scrape Update)

---

## 1. Intent + SERP Analysis & Competitor Deep-Dives

### Top 4 Competitor URLs Analyzed Live
1. **PasbanRemittance.com:** `https://pasbanremittance.com/`
   - *Key Insights:* Regional quota breakdown (GCC 50%, UK 15%, Europe 15%, NA 10%, Other 10%), 4-step workflow, scam awareness rules, Jan 15 2027 draw timer.
2. **PakEra.pk:** `https://pakera.pk/qualify-for-pasban-remittance-reward/`
   - *Key Insights:* Detailed token slabs (USD 100-149 = 1 token, 150-249 = 2, 250-349 = 3, +$100 = +1 token), currency conversion via SBP daily rate, deceased heir rules, tax deduction at source, dormant account warnings, end of Sohni Dharti scheme.
3. **Bank AL Habib Limited (Official FAQ):** `https://www.bankalhabib.com/files/download/documents/Pasban-Scheme-faq.pdf`
   - *Key Insights:* 2,521 winners breakdown, one-prize-per-account cap, explicit exclusion of COC, RDA, corporate accounts, bank employees.
4. **PKRevenue / SBP Press Release:** `https://pkrevenue.com/sbp-pasban-remittance-reward-scheme-rs16bn/`
   - *Key Insights:* SBP Governor Jameel Ahmad inauguration, 100% banking industry funding, zero exchequer burden, macroeconomic goals (FX reserves vs Hawala/Hundi).

---

## 2. Head-Entity Research

| Entity Name | Entity Type | Canonical Name | sameAs URL | Core Attributes & Relationships |
|---|---|---|---|---|
| State Bank of Pakistan | Central Bank / Org | State Bank of Pakistan | `https://en.wikipedia.org/wiki/State_Bank_of_Pakistan` | Regulatory patron of PRRS; led by Governor Jameel Ahmad; formulates monetary & remittance policies. |
| Pasban Remittance Reward Scheme | Financial Reward Scheme | Pasban Remittance Reward Scheme | *Unlinked Entity* | PKR 16 Billion annual prize pool; PKR 4 Billion quarterly; beneficiary-focused; 100% free automatic entry. |
| Pakistan Banks' Association | Banking Association | Pakistan Banks' Association | `https://en.wikipedia.org/wiki/Pakistan_Banks%27_Association` | Executing industry body representing participating commercial banks funding the scheme. |
| 1LINK (Pvt) Limited | Payment Switch / Org | 1LINK (Pvt) Limited | `https://en.wikipedia.org/wiki/1LINK` | Manages central transaction aggregation, token generation, and computerized lucky draws. |

---

## 3. Competitor Extraction Tables (Step 5)

### Competitor Extraction: PakEra.pk & PasbanRemittance.com

#### Section H3: Token Slab Calculation & Currency Conversion Rules
| term / entity | type | canonical form | kind |
|---|---|---|---|
| USD 100 to 149 | Money | Baseline Token Slab (1 Token) | entity |
| USD 150 to 249 | Money | 2-Token Slab | entity |
| USD 250 to 349 | Money | 3-Token Slab | entity |
| Additional USD 100 | Money | Incremental Token Rule | entity |
| Daily Exchange Rate | Metric | SBP Daily Exchange Rate | term |
| Token Splitting Abuse | Rule | Anti-Splitting Abuse Rule | term |
*Numbers & Stats:* $100-$149 (1 token), $150-$249 (2 tokens), $250-$349 (3 tokens), $1,000 (10 tokens)  
*NLP Shuffled Words:* calculation, conversion, riyal, dirham, pound, daily, rate, abuse, splitting  
*Total Count:* 15

#### Section H3: Regional Corridor Allocations (2nd to 4th Prizes)
| term / entity | type | canonical form | kind |
|---|---|---|---|
| GCC Corridor | Place | GCC Remittance Corridor (50%) | entity |
| UK Corridor | Place | UK Corridor (15%) | entity |
| Europe Corridor | Place | Europe Corridor (15%) | entity |
| North America Corridor | Place | North America Corridor (10%) | entity |
| Other Countries | Place | Other Countries (10%) | entity |
| Top Prize Global | Rule | Open Global First Prize | entity |
*Numbers & Stats:* 50% GCC, 15% UK, 15% Europe, 10% North America, 10% Other  
*NLP Shuffled Words:* regional, quota, fairness, corridor, international, allocation  
*Total Count:* 14

#### Section H3: Deceased Winners, Tax Deductions, and Dormant Account Edge Cases
| term / entity | type | canonical form | kind |
|---|---|---|---|
| Withholding Tax | Money | Income Tax Deducted at Source | term |
| Deceased Customer Heirs | Person | Legal Heirs Inheritance | entity |
| Succession Certificate | Document | Succession Certificate Requirement | term |
| Dormant Account | Status | Dormant Bank Account Re-activation | term |
| Sohni Dharti Scheme | Scheme | Sohni Dharti Scheme Ended | entity |
*Numbers & Stats:* 100% tax compliance, 22 listed banks  
*NLP Shuffled Words:* tax, deduction, succession, heirs, deceased, dormant, activation, uncredited  
*Total Count:* 13

---

## 4. Typed Entity Map & Salience Tiering (Step 6)

| Canonical Name | Entity Type | Aliases | sameAs URL | Kind | Comp Count | In Title/H2 | Tier |
|---|---|---|---|---|---|---|---|
| State Bank of Pakistan | Org | SBP, Central Bank | `https://en.wikipedia.org/wiki/State_Bank_of_Pakistan` | entity | 4 | Yes | Tier 1 |
| Pasban Remittance Reward Scheme | Scheme | PRRS, Pasban Scheme | *Unlinked* | entity | 4 | Yes | Tier 1 |
| Governor Jameel Ahmad | Person | Jameel Ahmed | *Unlinked* | entity | 4 | Yes | Tier 1 |
| Pakistan Banks' Association | Org | PBA | `https://en.wikipedia.org/wiki/Pakistan_Banks%27_Association` | entity | 4 | Yes | Tier 1 |
| 1LINK (Pvt) Limited | Org | 1LINK Switch | `https://en.wikipedia.org/wiki/1LINK` | entity | 4 | Yes | Tier 1 |
| PKR 16 Billion Annual Pool | Money | Rs 16B Pool | *N/A* | entity | 4 | Yes | Tier 1 |
| PKR 4 Billion Quarterly Pool | Money | Rs 4B Draw Pool | *N/A* | entity | 4 | Yes | Tier 1 |
| USD 100 Monthly Threshold | Money | $100 per month | *N/A* | entity | 4 | Yes | Tier 1 |
| 3 Consecutive Months Rule | Rule | Consecutive 3 Months | *N/A* | entity | 4 | Yes | Tier 1 |
| Remittance Beneficiary | Concept | Receiver in Pakistan | *N/A* | entity | 4 | Yes | Tier 1 |
| January 15, 2027 | Date | 1st Draw Date | *N/A* | entity | 4 | Yes | Tier 1 |
| 2,521 Winners | Metric | Quarterly Winners Count | *N/A* | entity | 4 | Yes | Tier 2 |
| PKR 100 Million First Prize | Money | Rs 10 Crore First Prize | *N/A* | entity | 4 | Yes | Tier 2 |
| PKR 25 Million Second Prize | Money | Rs 2.5 Crore Second Prize | *N/A* | entity | 4 | Yes | Tier 2 |
| PKR 10 Million Third Prize | Money | Rs 1 Crore Third Prize | *N/A* | entity | 4 | Yes | Tier 2 |
| PKR 1 Million Fourth Prize | Money | Rs 10 Lakh Fourth Prize | *N/A* | entity | 4 | Yes | Tier 2 |
| Token Slab Formula | Rule | $100-$149 = 1 Token | *N/A* | entity | 4 | Yes | Tier 2 |
| Regional Quota Split | Rule | GCC 50%, UK 15%, EU 15%, NA 10% | *N/A* | entity | 3 | Yes | Tier 2 |
| Cash-Over-Counter Exclusion | Rule | COC Exclusion | *N/A* | entity | 4 | Yes | Tier 2 |
| Roshan Digital Account Exclusion | Rule | RDA Exclusion | *N/A* | entity | 4 | Yes | Tier 2 |
| 8171 SMS Portal Clarification | Concept | 8171 Scam Warning | *N/A* | term | 3 | Yes | Tier 3 |
| Sohni Dharti Scheme Ended | Scheme | Old Points Expired | *N/A* | term | 2 | Yes | Tier 3 |
| Deceased Customer Protocol | Rule | Succession Certificate | *N/A* | term | 2 | No | Tier 3 |

---

## 5. Information-Gain Pass (Step 7)

1. **Competitor Superiority Elements Added:**
   - **Exact Token Calculation Table:** Demonstrating $100-$149 = 1, $150-$249 = 2, $250-$349 = 3, up to $1,000 = 10 tokens.
   - **Regional Quota Allocation Table:** Showing exact prize splits per region (GCC 50%, UK 15%, Europe 15%, North America 10%, Other 10%).
   - **22 Participating Banks List:** Allied Bank, Al Baraka, Askari, Bank Alfalah, Bank AL Habib, Bank Makramah, Bank of Punjab, BankIslami, Citibank, Dubai Islamic Bank, Easypaisa Digital Bank, Faysal Bank, Habib Metropolitan, JS Bank, Mashreq, MCB, Meezan, Samba, Sindh Bank, Soneri, Standard Chartered, Bank of Khyber.
   - **Legal & Technical Edge Cases:** Deceased beneficiary protocol, tax withholding at source, dormant account reactivation, and Sohni Dharti phase-out.

---

## 6. Heading + Keyword + Question Map (Step 8)

| Level | Heading Text | Owned Focus / LSI Keyword | User Question Answered | Target Entity Tiers & Relationships |
|---|---|---|---|---|
| H1 | State Bank Pasban Scheme: Complete Guide to Eligibility, Prizes & Draw Dates | State Bank Pasban Scheme | What is the State Bank Pasban Scheme and how do I participate? | SBP, PRRS, PBA, 1LINK, PKR 16B |
| H2 | What is the State Bank Pasban Remittance Reward Scheme (PRRS)? | Pasban Remittance Reward Scheme | What is the Pasban Remittance Reward Scheme and who runs it? | SBP, Governor Jameel Ahmad, PBA, Commercial Banks |
| H3 | Role of SBP Governor Jameel Ahmad and the Pakistan Banks' Association | SBP Pasban Scheme patronage | Who launched and funds the Pasban Scheme? | Jameel Ahmad, PBA, 100% Industry Funded, Zero Exchequer |
| H2 | What is the PKR 16 Billion Prize Structure for the Pasban Scheme? | Pasban Scheme prize pool | How much money can you win in the Pasban Scheme? | PKR 16B Annual, PKR 4B Quarterly, 2,521 Winners |
| H3 | Breakdown of the 2,521 Cash Prizes Per Quarterly Draw | Pasban Scheme prizes list | What are the specific prize categories per draw? | PKR 100M, PKR 25M, PKR 10M, PKR 1M Tiers |
| H3 | Regional Quota Allocations: How Prizes Are Split by Country | Pasban scheme regional prizes | How are prizes distributed across overseas corridors? | GCC 50%, UK 15%, Europe 15%, NA 10% |
| H2 | Who is Eligible for the SBP Pasban Remittance Reward Scheme? | Pasban scheme eligibility criteria | Who qualifies to enter the SBP remittance draw? | USD 100 Threshold, 3 Consecutive Months, Beneficiary |
| H3 | How Tokens Are Calculated: The USD 100+ Tier Formula | Pasban scheme token calculation | How many digital tokens does each remittance earn? | $100-$149=1, $150-$249=2, $250-$349=3 |
| H3 | Eligible Participating Banks List in Pakistan | Pasban scheme participating banks | Which banks participate in the Pasban scheme? | 22 Listed Banks (BAHL, Meezan, MCB, Easypaisa, etc.) |
| H3 | Account Exclusions: Why Cash-Over-Counter and RDA Are Ineligible | Pasban scheme exclusions | Why are COC and Roshan Digital Accounts excluded? | Cash-Over-Counter Exclusion, RDA Exclusion |
| H2 | How Does Registration and Token Generation Work? | Pasban scheme registration | Do I need to apply or register online for the Pasban scheme? | Automatic Entry, 1LINK Switch, Digital Tokens |
| H3 | Is 8171 SMS Registration Required? (Scam Warning) | Pasban scheme 8171 portal | Is 8171 SMS connected to the SBP Pasban Scheme? | 8171 Clarification, Fraud Alert, No Fee Required |
| H2 | Technical & Legal Edge Cases: Taxes, Deceased Heirs & Dormant Accounts | Pasban scheme tax and deceased rules | What happens if a beneficiary dies or an account is dormant? | Tax Withholding, Legal Heirs, Dormant Account |
| H2 | When Are the Pasban Scheme Draw Dates for 2026-2027? | Pasban scheme draw date 2027 | When is the first draw date for the Pasban Scheme? | Oct 1 - Dec 31 2026, Jan 15 2027 Draw Date |
| H2 | How Does the Pasban Scheme Compare to Other Remittance Channels? | Formal banking channels vs Hawala | Why choose formal bank remittances over Hawala/Hundi? | Formal Channels, Hawala/Hundi, FX Reserves |
| H2 | Frequently Asked Questions (FAQs) | Pasban scheme FAQ | Frequently asked questions about SBP Pasban Scheme | Minimum 12 direct-answer FAQs |

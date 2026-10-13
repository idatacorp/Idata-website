# idata.net Repositioning: Data Control Plane Services for Financial Services

**Status:** Approved, Phase 1 in progress (2026-10-13)
**Repo:** `idata-website` (Astro 6, static, GitHub Pages, Formspree contact form)
**Companion:** small follow-on changes to `datris-website` (section 7)

## 1. Thesis

IData becomes the services company that puts Datris to work inside financial services firms.
Datris stays the open-source software people evaluate and run; IData is the team that
designs, implements, and operates agent-to-data workflows on it, inside the client's own
infrastructure, and takes responsibility for delivery.

Decisions this plan locks in (from the two LLM reviews):

- **Adopt** the packaged services offer. It is a sharper version of what IData already sells.
- **Do not** touch the Datris license as part of this work. AGPL + commercial license stays.
  Relicensing is a separate, later decision with pilot data. The site must not imply it.
- **Sell implementation now, operations carefully.** IData has no SOC 2 report, so the recurring
  offer is framed as operating *inside the client's infrastructure* with the client's access
  controls, not as a hosted or managed service. datris.ai's "no managed service, no
  subprocessors" security claim must remain true after this work.
- **Capacity is the constraint.** Every offer must be built from reusable Datris assets
  (taps, policies, destination patterns, evaluation suites). The site should say so.

## 2. Positioning and language

**One-line:** IData connects AI agents to financial data they can be trusted with.

**Hero direction:** "Your agents need governed access to your data. We build the control plane
that gives it to them." Sub: IData designs, deploys, and operates agent data workflows on Datris,
the open-source data control plane we built, inside your infrastructure.

**Vocabulary (align with datris.ai):**

- Use "data control plane", "governed access", "provenance", "policy", "audit", "lineage".
- Datris sits *beside* the lake and warehouse (Databricks, Snowflake, Iceberg, Postgres),
  loading and governing. Never "replaces your lake". (See datris.ai positioning.)
- Anthropic and OpenAI are equals for chat and generation; name both or neither.
- No version numbers anywhere in marketing copy.
- Retire "AI Agent-Native Data Platform" and "first AI agent-native" from the case study;
  current tagline is "The Data Control Plane for AI Agents".

**Audience:** heads of data platform, heads of AI/innovation, and CTOs at asset managers,
hedge funds, pensions, banks, and GSEs. Secondary: quant and research leads who already have
an agent prototype and no sanctioned path to production data.

## 3. Site architecture changes

| Page | Today | After |
|------|-------|-------|
| Home | Broad AI consulting pitch | Control-plane services pitch, one example workflow, three-stage engagement, Datris proof |
| Services | Six generic offerings | Three packaged offers (Assess, Implement, Operate) + supporting capabilities |
| **Solutions** (new) | n/a | One page per financial-services workflow; launch with 2, slots for more |
| **Datris** (new) | Case study entry only | "The platform behind the work": what it is, why open source, how IData relates, links to datris.ai |
| Case Studies | 3 studies | Keep, rewrite Datris study as a product page pointer, add "Agent integration" tag taxonomy |
| About / Team | Fine | Light edits: add "owns and maintains Datris", fix date inconsistency |
| Blog | 3 posts | Add 3 posts tied to the new offer (section 6) |
| Contact | Generic form | Replace topic dropdown with the new offers, add "Request an assessment" entry point |
| Nav | Home About Team Services Case Studies Blog Contact | Home · Solutions · Services · Datris · Case Studies · Blog · About (Team under About) · Contact |

## 4. Page-by-page content plan

### 4.1 Home (`src/pages/index.astro`, `Hero.astro`)

1. **Hero**: new headline/sub (section 2). Primary CTA "Request an assessment", secondary
   "See how it works" (anchors to the workflow diagram).
2. **Stats row**: keep 17+ years, $200B+, Fortune 500. Add a fourth tied to Datris
   (e.g. "70+ agent tools in the open-source platform we maintain"; take the number from
   datris.ai `site.ts`, not hardcoded twice).
3. **Problem**: replace "drowning in data" quote with the agent problem: the prototype works,
   the data path to production does not (access, validation, audit, who did what).
4. **Three pain points**: Ungoverned access · No evidence trail · Fragile, hand-built feeds.
5. **How we help** becomes **the three-stage engagement** (Assess → Implement → Operate), each
   with duration, deliverables, and what the client gets to keep.
6. **One worked example**: investment research data workflow. Acquire approved external data,
   join with selected internal data, validate, publish to the agent with policy, lineage, and
   audit. Simple diagram (sources → Datris → agent / lake). Links to the Solutions page.
7. **Why IData + Datris**: open-source and inspectable; runs in your infrastructure; built and
   maintained by the people delivering it; reusable taps/policies so engagement two costs less
   than engagement one.
8. Keep tech logos (add Databricks/Unity Catalog, Snowflake, Iceberg, MCP; drop LangChain if not
   used), case study preview, blog preview, CTA.
9. **Client banner (bottom of home, above footer)**: continuously scrolling marquee of client
   names: UBS, Goldman Sachs, Credit Suisse, Bank of America, Deutsche Bank, CPP Investment Board,
   Freddie Mac. CSS-only animation, duplicated track for a seamless loop, pauses on hover,
   respects `prefers-reduced-motion`. Rendered as styled wordmarks (no logo image assets in the
   repo); swap in SVG logos later if licensed artwork is available. Heading: "Trusted by financial
   institutions since 1998".

### 4.2 Services (`src/pages/services.astro`)

Restructure `services[]` into two groups.

**Packaged offers (the headline):**

| Offer | Shape | Deliverables |
|-------|-------|--------------|
| Agent Data Assessment | Paid, 2–3 weeks, fixed fee | One workflow chosen, data rights and access confirmed, current manual effort baselined, acceptance criteria, architecture and policy design, implementation estimate |
| Agent Data Integration | Fixed scope, 6–10 weeks | Agreed sources connected via Datris taps, validation rules, access policy, audit and lineage on, monitoring, runbook, documented handover, acceptance test passed |
| Run With You | Recurring, in the client's infrastructure | Source-change handling, failure response, upgrades, quarterly review against freshness/quality targets, expansion backlog. Client retains all access and credentials. |

**Supporting capabilities (shorter, below):** Data modernization & lakehouse (Databricks, Snowflake,
Iceberg), Data quality & governance, AI application development, Advisory.

Engagement models section: fold into the three offers; remove the generic Advisory/Project/Embedded
cards or keep Embedded as an option under Run With You.

### 4.3 Solutions (new: `src/pages/solutions/index.astro` + `[slug].astro` or a `solutions` content collection)

Launch with two, written to the same template (Who it's for · The problem · What we build ·
What the agent can then do · Controls in place · Timeline):

1. **Investment research data for AI agents** (primary, matches IData's history).
2. **Operations and incident data for AI agents** (matches the OpsChat / U.S. Bank work:
   Datadog, NetBrain, logs into governed retrieval).

Placeholder-free: if a third isn't ready, ship two. Add a content collection so new solutions
are markdown files, same as blog.

### 4.4 Datris (new: `src/pages/datris.astro`)

Short page, not a product site duplicate:

- What Datris is (one paragraph, datris.ai language).
- Why it is open source and why that matters to a regulated buyer (inspect, fork, run inside your
  perimeter, no telemetry).
- Relationship: IData owns and maintains Datris; commercial licenses are sold via datris.ai;
  IData sells the services. Link to datris.ai pricing/licensing, docs, GitHub.
- "Two ways to get there": run it yourself (datris.ai) or have IData implement it (contact).
- Nothing about license changes.

### 4.5 Case Studies

- Rename the Datris entry "Datris: the platform behind our agent integration work", trim the
  architecture inventory, link to the new Datris page. Drop "first", "agent-native".
- Add an **OpsChat → agent data integration** reframe: same study, add a "What this looks like
  on Datris today" paragraph.
- Pension fund and GSE studies: add one closing line each tying the data foundation to agents.
- Tag taxonomy: Agent Integration · Data Platform · Operations.

### 4.6 About / Team

- About: add a paragraph that IData created and maintains Datris, and that the services practice
  is built on it.
- Founding year is **1998** (confirmed 2026-10-13). idata.net currently says "Since 2007" (that is
  the AWS/cloud start date); rewrite as "founded in 1998, building on AWS since 2007". Stats row
  gets a "25+ years" longevity stat.
- Team: no change required. Optional: add "Maintainer, Datris" to Todd's title line.

### 4.7 Contact

- Dropdown values: Agent Data Assessment · Agent Data Integration · Run With You ·
  Data modernization · Other.
- Add a hidden `_subject` field per selection (same pattern as datris.ai proposal form).
- Page header: "Start with an assessment".
- Add a second small form variant used as the CTA target `/contact?offer=assessment` that
  preselects the dropdown.

### 4.8 Layout / SEO

- `Layout.astro`: canonical should be per-page (`Astro.url`), not hardcoded `https://idata.net`.
  Same for `og:url`. Add `og:image` (need a 1200×630 asset).
- Default title/description and keywords updated to the new positioning
  ("AI agent data integration", "data control plane financial services", "Datris implementation").
- Add JSON-LD `Organization` with `sameAs` → datris.ai, LinkedIn, GitHub.

## 5. Visual and structural work

- Keep the existing dark/green system, Inter + JetBrains Mono, animate-on-scroll. No redesign.
- New components: `OfferCard.astro` (offer, shape, deliverables), `WorkflowDiagram.astro`
  (inline SVG, three columns: sources · Datris · agents/lake), `SolutionCard.astro`.
- Solutions content collection in `src/content.config.ts` (`title, description, audience, order, draft`).
- Hero SVG network can stay; recolor center node as the "control plane" and label the three
  clusters if cheap to do.

## 6. Content (blog) to launch with

Three posts, each pointing at an offer. Draft after the pages so terms match.

1. "Your agent prototype works. Here's why it can't touch production data yet." (Assessment)
2. "What a governed agent data feed looks like at an asset manager" (Integration; the research
   workflow walked end to end)
3. "Open-source and regulated: how to run an agent data platform inside your perimeter"
   (Datris page; answers the third-party-risk question without claiming SOC 2)

Cross-post or summarize on datris.ai blog where it fits.

## 7. Companion changes on datris.ai (separate PR in `datris-website`)

- Add a "Have IData implement it" path next to the self-serve path (home and `/deploy`), linking
  to `idata.net/services` and `/contact?offer=assessment`.
- Licensing page already names "a consultancy or managed-service provider running Datris for
  clients" under Hosted. Add one sentence that IData, as the author, delivers implementation and
  operations services separately from licensing, link to idata.net.
- Security page sentence "there is no managed service, and there are no subprocessors" stays
  true and stays. Add nothing that contradicts it.
- Footer already links IData. No change.

## 8. Out of scope (explicitly)

- Any license change or mention of one.
- A hosted or managed Datris service.
- SOC 2 claims. The site may say "we work within your controls", not "we are certified".
- Pricing numbers. Follow datris.ai: no number on the page, request a proposal/assessment.
- Rewriting the three existing blog posts.

## 9. Phasing

| Phase | Scope | Exit |
|-------|-------|------|
| 1. Core | Hero, Home sections 1–7, Services restructure, Contact dropdown, nav, SEO fixes | Site tells the new story end to end on 3 pages |
| 2. Depth | Solutions (2), Datris page, case study edits, About/Team edits | Every nav item resolves to new-positioning content |
| 3. Proof | 3 blog posts, og:image, datris.ai companion PR | Cross-links live in both directions |

Each phase is one PR to `main` (GitHub Pages deploys on push). Verify with `npm run build` and
a local `npm run preview` pass on phone width before merge.

## 10. Decisions (answered 2026-10-13)

1. Founding year: **1998**. AWS since 2007.
2. U.S. Bank work: **not referenced** anywhere on the site yet. The operations Solution page is
   written from the OpsChat case study only, with no client identification.
3. Pricing: **"Request a proposal"** everywhere, no fees published.
4. Recurring offer name: **"Run With You"**.
5. Client banner: scrolling marquee of UBS, Goldman Sachs, Credit Suisse, Bank of America,
   Deutsche Bank, CPP Investment Board, Freddie Mac at the bottom of the home page.

Still open: og:image source (produce a simple one in-repo unless brand assets are supplied).

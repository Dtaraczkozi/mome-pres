const TICKER_ITEMS = [
  "OpenAI Codex ↔ Figma: MCP-powered roundtrip between code and the canvas — OpenAI",
  "Figma MCP: get_design_context from Design, Make & FigJam; generate_figma_design from running UI — Figma",
  "Claude Code to Figma ships editable designs from production code — Figma",
  "Google Labs updates Stitch as an AI-native UI design surface — Google",
  "Former Apple designer Abidur Chowdhury joins Hark on multimodal “personal intelligence” UI — TechCrunch",
];

const HERO = {
  headline:
    "Figma and OpenAI Codex connect agents to the canvas through MCP",
  lede:
    "The Figma MCP server lets Codex pull layout, styles, and component context from Figma Design, Make, or FigJam for code generation—and push live UI back into editable frames so product and UX teams can compare, refine, and hand off without redrawing screens by hand.",
  source: "OpenAI",
  url: "https://openai.com/index/figma-partnership/",
};

type Card = {
  headline: string;
  dek: string;
  source: string;
  url: string;
  note?: string;
  colSpan: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

const CARDS: Card[] = [
  {
    headline: "Building frontend UIs with Codex and Figma",
    dek: "Figma’s product walkthrough: copy a selection link, prompt Codex to implement with get_design_context, then capture running UI back onto the canvas with generate_figma_design—closing the loop for critique and systems work.",
    source: "Figma Blog",
    url: "https://www.figma.com/blog/introducing-codex-to-figma/",
    colSpan: 6,
  },
  {
    headline: "From Claude Code to Figma: production code → editable design",
    dek: "A parallel agent path for teams that start in Claude Code: bring implementation back into Figma for exploration without rebuilding frames from screenshots.",
    source: "Figma Blog",
    url: "https://www.figma.com/blog/introducing-claude-code-to-figma/",
    note: "Feb 17",
    colSpan: 6,
  },
  {
    headline: "Figma MCP server: tools and prompts for agents",
    dek: "Developer reference for MCP tools (including design context and Figma file generation), aimed at anyone wiring LLM clients to files, variables, and handoff.",
    source: "Figma Developers",
    url: "https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/",
    colSpan: 8,
  },
  {
    headline: "Meet the former Apple designer building Hark’s AI interface",
    dek: "Abidur Chowdhury joins Brett Adcock’s lab as Director of Design, working across models, hardware, and real-time multimodal UX—relevant as product teams rethink “agent-native” surfaces.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2026/03/24/meet-the-former-apple-designer-building-a-new-ai-interface-at-hark/",
    colSpan: 4,
  },
  {
    headline: "Design UI with Stitch in Google Labs",
    dek: "Google positions Stitch as an AI-assisted UI workflow from prompts and references—another signal that canvas-and-agent tooling is competing for the same product-design mindshare as Figma’s MCP story.",
    source: "Google",
    url: "https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/",
    colSpan: 6,
  },
  {
    headline: "Who can actually afford AI tools now?",
    dek: "UX Collective piece on credits, tiers, and paywalls—useful context when PMs and designers evaluate rolling Codex, Figma add-ons, and adjacent agents into team budgets.",
    source: "UX Collective",
    url: "https://uxdesign.cc/who-can-actually-afford-ai-tools-now-d72041945c26",
    note: "Mar 2026",
    colSpan: 6,
  },
  {
    headline: "Figma’s 2025 AI report: what builders are planning next",
    dek: "Survey-backed view of how teams expect AI to show up in product development—handy benchmark alongside this month’s agent and MCP releases.",
    source: "Figma Blog",
    url: "https://www.figma.com/blog/figma-2025-ai-report-perspectives/",
    colSpan: 12,
  },
];

/** Short attributed excerpts; link to primary sources. */
const FIELD_NOTES: {
  quote: string;
  byline: string;
  url: string;
}[] = [
  {
    quote:
      "Engineers can iterate visually without leaving their flow, and designers can work closer to real implementation without becoming full-time coders.",
    byline: "Alexander Embiricos, Codex product lead · OpenAI",
    url: "https://openai.com/index/figma-partnership/",
  },
  {
    quote:
      "With this integration, teams can build on their best ideas—not just their first idea—by combining the best of code with the creativity, collaboration, and craft that comes with Figma's infinite canvas.",
    byline: "Loredana Crisan, Chief Design Officer (Figma) · via OpenAI",
    url: "https://openai.com/index/figma-partnership/",
  },
  {
    quote:
      "The MCP server is built to support movement in both directions, bringing working UI onto the canvas and back into code just as easily—so you can build on your best ideas, not just your first.",
    byline: "Figma · Building frontend UIs with Codex and Figma",
    url: "https://www.figma.com/blog/introducing-codex-to-figma/",
  },
  {
    quote:
      "When code and the canvas are connected, you can move fluidly between execution and exploration.",
    byline: "Figma Blog · Codex roundtrip",
    url: "https://www.figma.com/blog/introducing-codex-to-figma/",
  },
];

function spanClass(span: Card["colSpan"]) {
  const map: Record<number, string> = {
    1: "col-span-12 sm:col-span-1",
    2: "col-span-12 sm:col-span-2",
    3: "col-span-12 sm:col-span-3",
    4: "col-span-12 sm:col-span-4",
    5: "col-span-12 sm:col-span-5",
    6: "col-span-12 lg:col-span-6",
    7: "col-span-12 sm:col-span-7",
    8: "col-span-12 lg:col-span-8",
    9: "col-span-12 sm:col-span-9",
    10: "col-span-12 sm:col-span-10",
    11: "col-span-12 sm:col-span-11",
    12: "col-span-12",
  };
  return map[span] ?? "col-span-12";
}

export default function Home() {
  const tickerDup = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ai-dispatch text-ink">
      <div className="border-b border-ink/80 border-double">
        <div className="mx-auto max-w-[1400px] px-4 py-10 text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Extra · Product & UX Edition
          </p>
          <h1 className="font-display mt-3 text-5xl font-bold tracking-tight text-ink sm:text-6xl md:text-7xl">
            The Design Dispatch
          </h1>
          <div className="mx-auto mt-4 h-px max-w-md bg-gradient-to-r from-transparent via-ink to-transparent" />
          <p className="font-display mt-4 text-xl text-ink-muted md:text-2xl">
            Tuesday, March 24, 2026
          </p>
          <p className="mt-2 font-sans text-sm italic text-ink-muted">
            Agents, canvas, and the product craft stack.
          </p>
        </div>
      </div>

      <div
        className="border-b border-rule bg-paper-deep/80"
        role="region"
        aria-label="Design and tooling headlines ticker"
      >
        <div className="ticker-wrap overflow-hidden py-2">
          <div className="ticker-track gap-12 font-sans text-sm font-medium text-ink">
            {tickerDup.map((item, i) => (
              <span key={i} className="flex shrink-0 items-center gap-3">
                <span
                  className="inline-block h-2 w-2 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 py-10 lg:grid lg:grid-cols-12 lg:gap-10 lg:py-14">
        <div className="lg:col-span-8">
          <article className="border-b-4 border-ink pb-10">
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-accent">
              Lead story · {HERO.source}
            </p>
            <h2 className="hero-headline font-display mt-3 text-4xl font-bold leading-[1.05] text-ink sm:text-5xl md:text-6xl">
              {HERO.headline}
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-ink-muted md:text-xl">
              {HERO.lede}
            </p>
            <a
              href={HERO.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent underline decoration-accent/30 underline-offset-4 transition hover:decoration-accent"
            >
              Read full report
              <span aria-hidden>→</span>
            </a>
          </article>

          <div className="mt-10 grid grid-cols-12 gap-4">
            {CARDS.map((card) => (
              <article
                key={card.url}
                className={`news-card group flex flex-col border border-ink/15 bg-paper/90 p-5 shadow-card hover:border-accent/40 hover:shadow-card-hover ${spanClass(
                  card.colSpan
                )}`}
              >
                <h3 className="font-display text-xl font-bold leading-snug text-ink group-hover:text-accent md:text-2xl">
                  {card.headline}
                </h3>
                {card.note ? (
                  <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-wide text-accent">
                    {card.note}
                  </p>
                ) : null}
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-ink-muted md:text-base">
                  {card.dek}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-rule pt-3">
                  <span className="rounded-sm border border-ink/20 bg-paper-deep px-2 py-0.5 font-sans text-xs font-semibold uppercase tracking-wide text-ink">
                    {card.source}
                  </span>
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm font-semibold text-accent underline decoration-accent/30 underline-offset-2 transition hover:decoration-accent"
                  >
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 font-sans text-xs text-ink-muted">
            Install and configure the agent bridge in Figma Help:{" "}
            <a
              href="https://help.figma.com/hc/en-us/articles/32132100833559"
              className="font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guide to the Figma MCP server
            </a>
            .
          </p>
        </div>

        <aside className="mt-12 border-t border-ink/20 pt-10 lg:col-span-4 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div className="sticky top-8">
            <h2 className="font-display text-2xl font-bold text-ink">
              Notebook
            </h2>
            <p className="mt-1 font-sans text-sm text-ink-muted">
              Pull quotes from Figma and OpenAI on the Codex integration—primary
              sources, not commentary.
            </p>
            <div className="mt-6 space-y-6">
              {FIELD_NOTES.map((n) => (
                <figure
                  key={`${n.url}-${n.byline}`}
                  className="border-l-4 border-accent pl-4"
                >
                  <blockquote className="font-display text-base italic leading-snug text-ink md:text-lg">
                    “{n.quote}”
                  </blockquote>
                  <figcaption className="mt-3 font-sans text-xs text-ink-muted">
                    {n.byline}
                  </figcaption>
                  <a
                    href={n.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-sans text-xs font-semibold text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
                  >
                    Read source
                  </a>
                </figure>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <footer className="border-t border-double border-ink/30 bg-paper-deep/50">
        <div className="mx-auto max-w-[1400px] px-4 py-8 text-center font-sans text-xs text-ink-muted">
          <p>
            The Design Dispatch · March 24, 2026 · Static front page · No APIs
            at runtime
          </p>
        </div>
      </footer>
    </div>
  );
}

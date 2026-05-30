// =============================================================================
// VexiraHub — Mock Posts Data
// 26 rich mock posts across all 13 categories.
// Used for all pages in Phase 1 (no backend/CMS).
// =============================================================================

import type { Post } from "@/types";
import { categories } from "./categories";
import { authors } from "./authors";

// Shorthand refs
const [
  tech,
  prog,
  webDev,
  ai,
  startups,
  business,
  finance,
  education,
  career,
  gaming,
  entertainment,
  reviews,
  thoughts,
] = categories;

const [vexira, aryan, priya, rohan, aisha] = authors;

// -----------------------------------------------------------------------------
// Shared tag pool
// -----------------------------------------------------------------------------
const tags = {
  react:        { id: "tag-react",        name: "React",        slug: "react" },
  nextjs:       { id: "tag-nextjs",       name: "Next.js",      slug: "nextjs" },
  typescript:   { id: "tag-typescript",   name: "TypeScript",   slug: "typescript" },
  nodejs:       { id: "tag-nodejs",       name: "Node.js",      slug: "nodejs" },
  python:       { id: "tag-python",       name: "Python",       slug: "python" },
  ai:           { id: "tag-ai",           name: "AI",           slug: "ai" },
  llm:          { id: "tag-llm",          name: "LLM",          slug: "llm" },
  gpt:          { id: "tag-gpt",          name: "GPT",          slug: "gpt" },
  startup:      { id: "tag-startup",      name: "Startup",      slug: "startup" },
  funding:      { id: "tag-funding",      name: "Funding",      slug: "funding" },
  productivity: { id: "tag-productivity", name: "Productivity", slug: "productivity" },
  career:       { id: "tag-career",       name: "Career",       slug: "career" },
  investing:    { id: "tag-investing",    name: "Investing",    slug: "investing" },
  crypto:       { id: "tag-crypto",       name: "Crypto",       slug: "crypto" },
  webdev:       { id: "tag-webdev",       name: "Web Dev",      slug: "webdev" },
  css:          { id: "tag-css",          name: "CSS",          slug: "css" },
  gaming:       { id: "tag-gaming",       name: "Gaming",       slug: "gaming" },
  review:       { id: "tag-review",       name: "Review",       slug: "review" },
  opinion:      { id: "tag-opinion",      name: "Opinion",      slug: "opinion" },
  learning:     { id: "tag-learning",     name: "Learning",     slug: "learning" },
};

// -----------------------------------------------------------------------------
// Posts
// -----------------------------------------------------------------------------
export const posts: Post[] = [
  // ── TECHNOLOGY ──────────────────────────────────────────────────────────────
  {
    id: "post-001",
    slug: "apple-vision-pro-spatial-computing-review-2026",
    title: "Apple Vision Pro in 2026: Is Spatial Computing Finally Ready for Everyone?",
    excerpt:
      "A year after launch, we put Vision Pro through real-world tests — work, creativity, entertainment — to answer the question everyone is asking.",
    content: `
      <p>When Apple announced Vision Pro, the tech world split into two camps: true believers and skeptics. A year on, the picture is clearer — and more nuanced than either side predicted.</p>

      <h2>The Hardware Has Matured</h2>
      <p>The second-generation Vision Pro ships with a redesigned headband, 40% lighter than the original, and a battery that finally lasts a full workday. These aren't minor tweaks — they're the difference between a device you pick up occasionally and one you actually integrate into your workflow.</p>
      <p>The display remains the gold standard. At 4K per eye with a refresh rate that adapts dynamically between 90Hz and 120Hz, content looks genuinely three-dimensional. Text rendering is so sharp that after an hour in the device, standard monitors feel noticeably flat.</p>

      <h2>visionOS 2.0: The Software Catch-Up</h2>
      <p>Hardware aside, visionOS 2.0 is where Apple's vision (pun intended) starts to cohere. Window management finally makes sense. You can pin apps to physical locations in your space — your email client always floats above your desk, Slack hovers by the window — and they stay there across sessions.</p>
      <p>The new Spatial Canvas app is genuinely impressive. Architects, designers, and anyone who works with spatial information will find it transformative. For knowledge workers, the multi-window workflow rivals a high-end multi-monitor setup.</p>

      <h2>The App Ecosystem Problem (Still)</h2>
      <p>The platform's Achilles heel remains third-party apps. While the catalogue has grown, too many are still iPad apps running in a virtual window — technically "spatial," functionally flat. Until developers commit to native visionOS development, the platform punches below its weight.</p>
      <p>Notable exceptions: Fantastical's spatial calendar, the Djay Pro turntable experience, and the genuinely breathtaking National Geographic spatial documentaries justify the price of admission on their own.</p>

      <h2>Who Should Buy It in 2026?</h2>
      <p>Vision Pro is no longer a concept device. If you're a creative professional, a developer building for spatial computing, or someone who consumes a lot of immersive media, the ROI is real. For mainstream users? Wait another generation.</p>
      <p>The future is clearly here. It's just not evenly distributed yet.</p>
    `,
    category: tech,
    tags: [tags.review],
    author: vexira,
    publishedAt: "2026-05-20T08:00:00Z",
    updatedAt: "2026-05-22T10:00:00Z",
    readingTime: 7,
    featuredImage: "",
    featuredImageAlt: "Apple Vision Pro headset on a desk",
    isFeatured: true,
    isTrending: true,
    isThought: false,
    views: 48200,
    likes: 1840,
    seo: {
      metaTitle: "Apple Vision Pro 2026 Review — Is Spatial Computing Ready?",
      metaDescription:
        "A deep-dive review of Apple Vision Pro in 2026: hardware improvements, visionOS 2.0, app ecosystem gaps, and who should actually buy it.",
      keywords: ["apple vision pro", "spatial computing", "visionOS", "xr headset review"],
    },
  },

  {
    id: "post-002",
    slug: "quantum-computing-explained-simply-2026",
    title: "Quantum Computing Explained Simply: What It Means for Software Developers",
    excerpt:
      "Quantum computers are no longer just lab experiments. Here's what every developer needs to understand about the technology that's coming for classical computing.",
    content: `
      <p>The word "quantum" has a habit of making people's eyes glaze over. Superposition, entanglement, qubits — it sounds like science fiction. But as IBM, Google, and a wave of startups push quantum hardware toward practical thresholds, software developers can't afford to treat it as someone else's problem.</p>

      <h2>The Classical vs. Quantum Difference</h2>
      <p>A classical bit is either 0 or 1. A qubit can be 0, 1, or any quantum superposition of both simultaneously. This isn't magic — it's physics. And it means a quantum computer with just 300 qubits can represent more states simultaneously than there are atoms in the observable universe.</p>
      <p>For certain problem types — optimization, cryptography, molecular simulation — this is an extraordinary advantage. For most everyday computing tasks, classical machines remain faster and more practical.</p>

      <h2>What Breaks When Quantum Scales</h2>
      <p>RSA encryption — the backbone of HTTPS, banking, and secure communications — relies on the computational difficulty of factoring large numbers. A sufficiently powerful quantum computer running Shor's algorithm could break it in hours rather than the billions of years it would take classically.</p>
      <p>This is why NIST finalized its post-quantum cryptography standards in 2024, and why major cloud providers are already offering quantum-safe TLS options. The migration window is now — not after quantum computers mature.</p>

      <h2>What Developers Should Actually Learn Today</h2>
      <ul>
        <li>Understand what problem classes quantum excels at (optimization, simulation, search)</li>
        <li>Learn the basics of Qiskit (IBM's open-source quantum SDK) or Cirq (Google)</li>
        <li>Start thinking about post-quantum cryptography in your security designs</li>
        <li>Watch the quantum cloud services: AWS Braket, Azure Quantum, IBM Quantum Platform</li>
      </ul>

      <h2>The Realistic Timeline</h2>
      <p>Fault-tolerant quantum computing at scale is still 5–10 years out for most experts. But hybrid classical-quantum algorithms are already running in production for pharmaceutical research and financial modelling. The developer who understands both worlds will be extremely valuable in the next decade.</p>
    `,
    category: tech,
    tags: [tags.ai, tags.python],
    author: vexira,
    publishedAt: "2026-05-15T09:00:00Z",
    readingTime: 9,
    featuredImage: "",
    featuredImageAlt: "Abstract visualization of quantum computing circuits",
    isFeatured: false,
    isTrending: true,
    isThought: false,
    views: 32100,
    likes: 1120,
  },

  // ── PROGRAMMING ─────────────────────────────────────────────────────────────
  {
    id: "post-003",
    slug: "typescript-5-new-features-complete-guide",
    title: "TypeScript 5: Every New Feature That Actually Matters (With Examples)",
    excerpt:
      "Decorators, const type parameters, variadic tuple improvements, and more. Here's the complete guide to what's new and how to use it in real projects.",
    content: `
      <p>TypeScript 5 shipped as one of the most developer-friendly releases in the language's history. Instead of adding complexity, the team focused on making existing patterns cleaner and more expressive. Here's a practical breakdown of every feature worth your attention.</p>

      <h2>Decorators — Finally Stable</h2>
      <p>After years in proposal limbo, decorators are now stable and aligned with the TC39 Stage 3 proposal. The new decorator API is cleaner than the old experimental implementation.</p>
      <pre><code>function logged(target: any, context: ClassMethodDecoratorContext) {
  return function(...args: any[]) {
    console.log(\`Calling \${String(context.name)}\`);
    return target.apply(this, args);
  };
}

class UserService {
  @logged
  getUser(id: string) { /* ... */ }
}</code></pre>

      <h2>Const Type Parameters</h2>
      <p>This subtle addition prevents TypeScript from widening inferred literal types, which was a constant source of friction when building generic utilities.</p>
      <pre><code>function first&lt;const T extends readonly unknown[]&gt;(arr: T): T[0] {
  return arr[0];
}

const result = first(['a', 'b', 'c']);
// result is 'a', not string</code></pre>

      <h2>Multiple Config File Extends</h2>
      <p>You can now extend multiple tsconfig files — huge for monorepos and shared configs:</p>
      <pre><code>{
  "extends": ["./base.json", "./strict.json", "./paths.json"]
}</code></pre>

      <h2>Verbatim Module Syntax</h2>
      <p>The new <code>--verbatimModuleSyntax</code> flag enforces explicit import/export typing, making it clear to bundlers exactly what's a type import vs a runtime import. Highly recommended for Next.js projects.</p>

      <h2>Resolution Customization Flags</h2>
      <p>New flags like <code>--customConditions</code> give library authors more control over how their packages resolve in different environments. Essential for publishing packages that work seamlessly in both browser and Node.</p>

      <h2>Should You Upgrade Now?</h2>
      <p>Yes. TypeScript 5 has no meaningful breaking changes for most projects. Run <code>npm install typescript@5 --save-dev</code> and enable strict mode if you haven't already. Your future self will thank you.</p>
    `,
    category: prog,
    tags: [tags.typescript, tags.nodejs],
    author: aryan,
    publishedAt: "2026-05-18T10:00:00Z",
    readingTime: 10,
    featuredImage: "",
    featuredImageAlt: "TypeScript code on a dark background monitor",
    isFeatured: false,
    isTrending: true,
    isThought: false,
    views: 41500,
    likes: 2300,
  },

  {
    id: "post-004",
    slug: "how-to-learn-react-in-2026-complete-roadmap",
    title: "How to Learn React in 2026: The Complete Roadmap for Beginners",
    excerpt:
      "React is still the dominant UI library, but the ecosystem has shifted dramatically. Here's the honest, opinionated roadmap for learning React the right way in 2026.",
    content: `
      <p>Learning React in 2026 is simultaneously easier and more confusing than it's ever been. The library itself is stable and mature. The ecosystem around it — frameworks, state management, server components — has never been more in flux. This roadmap cuts through the noise.</p>

      <h2>Phase 1: JavaScript Fundamentals (Don't Skip This)</h2>
      <p>The single biggest mistake React beginners make is jumping in before mastering JavaScript. You need to be comfortable with:</p>
      <ul>
        <li>ES6+ syntax: arrow functions, destructuring, spread, optional chaining</li>
        <li>Async JavaScript: Promises, async/await, fetch</li>
        <li>Array methods: map, filter, reduce, find</li>
        <li>Modules: import/export</li>
      </ul>
      <p>Spend 2–4 weeks here if needed. It pays compound interest.</p>

      <h2>Phase 2: Core React (3–4 Weeks)</h2>
      <p>Start with the official React documentation — it was completely rewritten in 2023 and is genuinely excellent. Focus on:</p>
      <ul>
        <li>Components and JSX</li>
        <li>Props and state</li>
        <li>useEffect and the component lifecycle</li>
        <li>Forms and controlled inputs</li>
        <li>Lists and keys</li>
        <li>Context API</li>
      </ul>

      <h2>Phase 3: Next.js (The Required Framework in 2026)</h2>
      <p>In 2026, learning React without Next.js is like learning JavaScript without understanding the browser. The App Router with Server Components has fundamentally changed how React apps are built. Learn Next.js 15 from the start.</p>

      <h2>Phase 4: State Management (Keep It Simple)</h2>
      <p>Start with useState and useReducer. Graduate to Zustand (not Redux) for complex state. Most apps never need more than this.</p>

      <h2>What to Build</h2>
      <p>Build a blog platform. Seriously. It forces you to learn routing, data fetching, markdown rendering, SEO, and deployment. Everything you need for real-world React development.</p>
    `,
    category: prog,
    tags: [tags.react, tags.nextjs, tags.typescript],
    author: aryan,
    publishedAt: "2026-05-10T08:00:00Z",
    readingTime: 12,
    featuredImage: "",
    featuredImageAlt: "React logo and code on a laptop screen",
    isFeatured: true,
    isTrending: false,
    isThought: false,
    views: 67800,
    likes: 3100,
  },

  // ── WEB DEVELOPMENT ─────────────────────────────────────────────────────────
  {
    id: "post-005",
    slug: "css-container-queries-complete-guide-2026",
    title: "CSS Container Queries: The Feature That Changes How We Think About Components",
    excerpt:
      "Container queries have been supported in all major browsers for over a year. Here's why they matter and how to start using them today.",
    content: `
      <p>For two decades, we built responsive layouts based on the viewport — the browser window. Media queries were brilliant, but they had a fundamental limitation: a component couldn't respond to its own container, only to the page width. Container queries fix this.</p>

      <h2>The Problem Media Queries Can't Solve</h2>
      <p>Imagine a card component. In a three-column grid it should show a compact layout. In a sidebar, it should be even more compact. In a hero slot, it should be large and rich. With media queries, you'd need context-specific CSS for each placement, defeating the purpose of a reusable component.</p>

      <h2>Container Queries to the Rescue</h2>
      <pre><code>.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}

@container card (max-width: 399px) {
  .card {
    display: flex;
    flex-direction: column;
  }
}</code></pre>

      <h2>Container Query Units</h2>
      <p>CSS now also ships container query length units: <code>cqw</code>, <code>cqh</code>, <code>cqi</code>, <code>cqb</code>. These are to containers what vw/vh are to the viewport.</p>
      <pre><code>.card-title {
  font-size: clamp(1rem, 5cqi, 2rem);
}</code></pre>

      <h2>Browser Support</h2>
      <p>Container queries are supported in Chrome 105+, Firefox 110+, and Safari 16+. In 2026, this means 95%+ of users globally. Ship it.</p>

      <h2>Combining with CSS Grid Subgrid</h2>
      <p>The real power comes from combining container queries with CSS Grid Subgrid — you get components that are truly self-contained yet can participate in outer layout grids. This is the future of design systems.</p>
    `,
    category: webDev,
    tags: [tags.css, tags.webdev],
    author: aryan,
    publishedAt: "2026-05-12T09:00:00Z",
    readingTime: 8,
    featuredImage: "",
    featuredImageAlt: "CSS code in a modern code editor with dark theme",
    isFeatured: false,
    isTrending: true,
    isThought: false,
    views: 29400,
    likes: 1560,
  },

  {
    id: "post-006",
    slug: "nextjs-15-app-router-complete-guide",
    title: "Next.js 15 App Router: The Complete Production Guide",
    excerpt:
      "Everything you need to know to build production-grade apps with Next.js 15's App Router — server components, streaming, caching, and deployment.",
    content: `
      <p>Next.js 15 represents the most mature version of the App Router yet. The team has addressed the biggest pain points from earlier releases, and the result is a framework that's genuinely pleasant to build with at scale.</p>

      <h2>Server Components: The Mental Model That Changes Everything</h2>
      <p>The fundamental shift with the App Router is that components are Server Components by default. They render on the server, have zero JavaScript bundle footprint, and can directly access databases, file systems, and environment variables.</p>
      <pre><code>// This runs only on the server
async function PostList() {
  const posts = await db.posts.findMany(); // Direct DB access!
  return (
    &lt;ul&gt;
      {posts.map(post => (
        &lt;li key={post.id}&gt;{post.title}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>

      <h2>When to Use "use client"</h2>
      <p>Add "use client" only when you need: browser APIs, event listeners, useState, useEffect, or third-party libraries that aren't server-compatible. Keep client components small and push them to the leaves of your component tree.</p>

      <h2>Streaming with Suspense</h2>
      <p>Wrap any async Server Component in Suspense to stream its content progressively. Users see a skeleton, then real content — dramatically improving perceived performance.</p>

      <h2>Caching Strategy in Next.js 15</h2>
      <p>Next.js 15 ships with a new, more predictable caching model. Data fetches are no longer cached by default (opt-in instead of opt-out). This was the most requested change from the community and it makes reasoning about data freshness far simpler.</p>

      <h2>Deployment</h2>
      <p>Vercel remains the zero-configuration option, but Next.js 15 ships with improved standalone output that makes Docker deployment and self-hosting genuinely straightforward.</p>
    `,
    category: webDev,
    tags: [tags.nextjs, tags.react, tags.typescript],
    author: vexira,
    publishedAt: "2026-05-08T10:00:00Z",
    readingTime: 14,
    featuredImage: "",
    featuredImageAlt: "Next.js framework code and architecture diagram",
    isFeatured: true,
    isTrending: true,
    isThought: false,
    views: 78300,
    likes: 4200,
  },

  // ── AI ───────────────────────────────────────────────────────────────────────
  {
    id: "post-007",
    slug: "gpt-5-vs-claude-4-vs-gemini-2-which-llm-wins-2026",
    title: "GPT-5 vs Claude 4 vs Gemini 2: Which LLM Actually Wins in 2026?",
    excerpt:
      "We ran every leading LLM through 200+ real-world tasks across coding, writing, reasoning, and multimodal capabilities. Here are the honest results.",
    content: `
      <p>The AI race in 2026 is genuinely exciting — and genuinely confusing. With GPT-5, Claude 4, and Gemini 2 all in market, the battle for LLM supremacy has never been more competitive. We ran a systematic, real-world evaluation across 200+ tasks to give you an honest picture.</p>

      <h2>Methodology</h2>
      <p>We evaluated models across five categories: coding assistance, long-document reasoning, creative writing, factual accuracy, and multimodal understanding. All tests were run with default settings unless specified. No cherry-picking.</p>

      <h2>Coding: Claude 4 Leads</h2>
      <p>Claude 4 shows remarkable ability to understand large codebases, identify bugs in context, and generate code that actually follows project conventions rather than generic patterns. GPT-5 is excellent for greenfield code generation but struggles more with contextual refactoring. Gemini 2 has closed the gap significantly for Python and Go.</p>

      <h2>Reasoning & Analysis: Too Close to Call</h2>
      <p>All three models score within margin of error on complex multi-step reasoning tasks. GPT-5 slightly edges ahead on mathematical reasoning; Claude 4 on logical deduction from long documents; Gemini 2 on tasks requiring real-world grounding.</p>

      <h2>Multimodal: Gemini 2 Wins</h2>
      <p>Google's advantage in training data quality for images, video, and audio shows clearly. Gemini 2's understanding of visual context in complex images and its video reasoning capabilities are a full generation ahead of competitors.</p>

      <h2>The Honest Verdict</h2>
      <ul>
        <li><strong>Best for coding:</strong> Claude 4</li>
        <li><strong>Best for writing:</strong> GPT-5</li>
        <li><strong>Best multimodal:</strong> Gemini 2</li>
        <li><strong>Best value:</strong> Gemini 2 Flash</li>
      </ul>
      <p>The right answer for most people is: use all three. They complement each other more than they compete.</p>
    `,
    category: ai,
    tags: [tags.ai, tags.llm, tags.gpt],
    author: vexira,
    publishedAt: "2026-05-25T08:00:00Z",
    readingTime: 11,
    featuredImage: "",
    featuredImageAlt: "AI model comparison chart visualization",
    isFeatured: true,
    isTrending: true,
    isThought: false,
    views: 94100,
    likes: 5600,
  },

  {
    id: "post-008",
    slug: "building-ai-agents-with-langchain-beginners-guide",
    title: "Building AI Agents with LangChain: A Beginner's Complete Guide",
    excerpt:
      "AI agents are the next wave of software. Here's how to build your first autonomous agent with LangChain — step by step, from scratch.",
    content: `
      <p>AI agents represent a fundamental shift from AI as a tool you query to AI as a system that acts. Instead of asking "what should I do?", an agent decides what to do, takes actions, and iterates toward a goal. Building them is surprisingly accessible with LangChain.</p>

      <h2>What Is an AI Agent?</h2>
      <p>An agent is an LLM combined with a set of tools (web search, code execution, database access, APIs) and a loop that lets it plan, act, observe results, and continue until the task is complete.</p>

      <h2>Setting Up</h2>
      <pre><code>pip install langchain langchain-openai duckduckgo-search

from langchain_openai import ChatOpenAI
from langchain.agents import create_react_agent, AgentExecutor
from langchain_community.tools import DuckDuckGoSearchRun

llm = ChatOpenAI(model="gpt-4o", temperature=0)
tools = [DuckDuckGoSearchRun()]</code></pre>

      <h2>The ReAct Pattern</h2>
      <p>The most reliable agent architecture is ReAct (Reasoning + Acting). The agent explicitly reasons about what to do, takes an action, observes the result, and reasons again. This chain-of-thought approach dramatically improves reliability over naive single-shot prompting.</p>

      <h2>Tool Design Is Everything</h2>
      <p>The quality of your agent is largely determined by the quality of your tools. A well-typed tool with a clear description and reliable error handling will outperform a more sophisticated architecture with poorly designed tools every time.</p>

      <h2>When Not to Use Agents</h2>
      <p>Agents add latency, cost, and complexity. For deterministic tasks with predictable inputs, a direct LLM call or even a simple function is the right tool. Reserve agents for tasks that genuinely require planning, multi-step execution, or handling uncertain input.</p>
    `,
    category: ai,
    tags: [tags.ai, tags.llm, tags.python],
    author: vexira,
    publishedAt: "2026-05-05T09:00:00Z",
    readingTime: 13,
    featuredImage: "",
    featuredImageAlt: "AI agent workflow diagram with connected nodes",
    isFeatured: false,
    isTrending: false,
    isThought: false,
    views: 38900,
    likes: 2100,
  },

  // ── STARTUPS ─────────────────────────────────────────────────────────────────
  {
    id: "post-009",
    slug: "how-to-raise-seed-funding-in-2026-complete-guide",
    title: "How to Raise Seed Funding in 2026: What VCs Actually Want to See",
    excerpt:
      "The funding environment has shifted. Pre-seed and seed rounds look different in 2026 — here's what's working for founders right now.",
    content: `
      <p>Raising seed funding in 2026 requires understanding a market that looks fundamentally different from 2021. The easy money era is over. But that doesn't mean capital has dried up — it means the standards are clearer and, in some ways, more honest.</p>

      <h2>What's Changed Since 2021</h2>
      <p>In 2021, many seed rounds were funded on vision and team alone. In 2026, investors want traction — not necessarily revenue, but evidence that you understand your customer, your market, and that people are using what you've built. The bar for "validation" has risen meaningfully.</p>

      <h2>The Numbers That Matter at Seed Stage</h2>
      <ul>
        <li><strong>MoM growth:</strong> 15–20% month-over-month user growth shows genuine momentum</li>
        <li><strong>Retention:</strong> D7 and D30 retention tells investors more than acquisition numbers</li>
        <li><strong>NPS:</strong> A score above 50 suggests product-market fit is forming</li>
        <li><strong>TAM:</strong> Be realistic. Investors know when you're inflating your market size.</li>
      </ul>

      <h2>The Pitch Deck That Works in 2026</h2>
      <p>Ten slides. No more. Problem, solution, market size, traction, team, business model, competition, go-to-market, financials (18-month forecast), ask. The best pitch decks are embarrassingly simple. They trust the numbers to do the work.</p>

      <h2>Where to Find Seed Investors</h2>
      <p>Y Combinator, Techstars, and Pioneer remain the top accelerators. For direct VC outreach: get warm introductions (cold emails have a sub-2% response rate). Build in public on Twitter/X and LinkedIn — three founders in our network raised their rounds entirely through inbound from their audience.</p>

      <h2>The Most Underrated Advice</h2>
      <p>Don't raise until you have to. The founders who raise from a position of leverage — with growing traction and competing term sheets — get dramatically better terms than those raising out of desperation.</p>
    `,
    category: startups,
    tags: [tags.startup, tags.funding],
    author: priya,
    publishedAt: "2026-05-22T08:00:00Z",
    readingTime: 10,
    featuredImage: "",
    featuredImageAlt: "Startup founder presenting to investors in a modern office",
    isFeatured: false,
    isTrending: true,
    isThought: false,
    views: 52300,
    likes: 2800,
  },

  {
    id: "post-010",
    slug: "10-startups-to-watch-in-2026",
    title: "10 Startups to Watch in 2026: The Next Wave of Category-Defining Companies",
    excerpt:
      "From AI infrastructure to climate tech, these are the startups building the platforms that will matter in the next decade.",
    content: `
      <p>Every year, a cohort of startups emerges that seems, in hindsight, obviously important. In 2026, we're watching ten companies across AI, climate, biotech, and developer tools that we think are on that trajectory.</p>

      <h2>1. Cohere for Enterprise</h2>
      <p>While OpenAI and Anthropic battle for consumer mindshare, Cohere is quietly winning enterprise AI deployments with a privacy-first, on-premise approach that enterprise security teams love.</p>

      <h2>2. Mistral AI</h2>
      <p>The Paris-based lab is building a genuine third pole in foundation models — open-weight, efficient, and increasingly capable. Their recent Mistral Large 3 benchmarks are stunning.</p>

      <h2>3. Cursor (formerly Anysphere)</h2>
      <p>The AI-native code editor has crossed 1M paid users and is redefining what it means to write software. Every major IDE is scrambling to catch up.</p>

      <h2>4. Supabase</h2>
      <p>The open-source Firebase alternative has crossed $100M ARR and is becoming the default backend-as-a-service for startups everywhere. Their Edge Functions and Vector support are best-in-class.</p>

      <h2>5. Replit</h2>
      <p>Replit's bet on browser-based, AI-assisted development is paying off. Their Ghostwriter AI now writes and deploys entire apps from natural language descriptions.</p>

      <p>The other five: Imbue (AI reasoning), Vercel (infrastructure), Linear (project management), Cal.com (scheduling), and Vapi (voice AI).</p>
    `,
    category: startups,
    tags: [tags.startup, tags.ai],
    author: priya,
    publishedAt: "2026-05-01T09:00:00Z",
    readingTime: 8,
    featuredImage: "",
    featuredImageAlt: "Modern startup office with team collaborating",
    isFeatured: false,
    isTrending: false,
    isThought: false,
    views: 31200,
    likes: 1400,
  },

  // ── BUSINESS ─────────────────────────────────────────────────────────────────
  {
    id: "post-011",
    slug: "remote-first-company-culture-how-to-build-it-right",
    title: "Remote-First Company Culture: How to Build It Right (Not Just Remote-Tolerated)",
    excerpt:
      "Most companies that call themselves 'remote-first' are actually 'remote-tolerated.' Here's how the best distributed teams actually operate.",
    content: `
      <p>The pandemic forced remote work on the world. Six years later, the winners have emerged: companies that understood remote-first isn't just "no office" — it's a fundamentally different operating model.</p>

      <h2>Remote-First vs. Remote-Friendly vs. Hybrid</h2>
      <p>Remote-friendly means the office is primary, remote is accommodated. Hybrid is office-primary with flexibility. Remote-first means remote is the default — every process, tool, and meeting structure is designed assuming people aren't co-located. The difference is enormous.</p>

      <h2>Documentation Is Your Culture</h2>
      <p>In remote-first companies, documentation isn't a bureaucratic overhead — it's the primary mechanism of culture transmission. GitLab's public handbook is 2,000 pages. Notion, Linear, and Loom have replaced the hallway conversation. Great remote companies write everything down, then trust their teams to read it.</p>

      <h2>Async First, Sync When Necessary</h2>
      <p>The best remote teams default to asynchronous communication and treat synchronous meetings as an expensive exception. This means writing decisions in Loom videos or detailed Notion docs, not defaulting to Zoom calls for everything.</p>

      <h2>How to Hire for Remote</h2>
      <p>Strong writers make strong remote workers. Look for candidates who communicate with clarity and initiative in your async hiring process — the way someone writes a follow-up email tells you more about their remote readiness than their LinkedIn profile.</p>

      <h2>The Trust Layer</h2>
      <p>Remote work collapses without trust. And trust is built through consistent results, not visibility. The managers who struggle most with remote leadership are those who manage by observation rather than outcomes. The shift to outcomes-based management is the non-negotiable cultural change.</p>
    `,
    category: business,
    tags: [tags.productivity],
    author: priya,
    publishedAt: "2026-04-28T09:00:00Z",
    readingTime: 9,
    featuredImage: "",
    featuredImageAlt: "Person working remotely from a modern home office setup",
    isFeatured: false,
    isTrending: false,
    isThought: false,
    views: 24600,
    likes: 1100,
  },

  // ── FINANCE ──────────────────────────────────────────────────────────────────
  {
    id: "post-012",
    slug: "investing-for-beginners-2026-complete-guide",
    title: "Investing for Beginners in 2026: Where to Start When You Have ₹10,000",
    excerpt:
      "Starting investing feels overwhelming. It doesn't have to be. Here's the clear, no-BS guide to getting started with a small amount of money in 2026.",
    content: `
      <p>The best time to start investing was ten years ago. The second best time is today. If you have ₹10,000 sitting in a savings account earning 3% interest while inflation runs at 6%, you're losing money in real terms every year. Let's fix that.</p>

      <h2>The Foundation: Emergency Fund First</h2>
      <p>Before you invest a single rupee, build an emergency fund of 3–6 months of expenses in a liquid, high-yield savings account. This is your financial seatbelt. Without it, any market downturn will force you to liquidate investments at the worst possible time.</p>

      <h2>The Simplest Portfolio That Actually Works</h2>
      <p>The three-fund portfolio: a total market index fund, an international index fund, and a bond index fund. That's it. Rebalance annually. This portfolio has outperformed the majority of actively managed funds over any 20-year period. Complexity is the enemy of returns for most individual investors.</p>

      <h2>Where to Invest in India in 2026</h2>
      <ul>
        <li><strong>Zerodha Kite / Groww:</strong> Best for stocks and mutual funds</li>
        <li><strong>NPS (National Pension System):</strong> Excellent for long-term retirement with tax benefits</li>
        <li><strong>ELSS Mutual Funds:</strong> Tax savings under Section 80C with market-linked returns</li>
        <li><strong>Digital Gold / Sovereign Gold Bonds:</strong> Better than physical gold, backed by the government</li>
      </ul>

      <h2>The One Rule That Beats Everything</h2>
      <p>Invest consistently, regardless of market conditions. A Systematic Investment Plan (SIP) of ₹5,000/month into a broad index fund, started at 25, compounds to over ₹2 crore by 55 at historical average returns. Time in market beats timing the market, every time.</p>
    `,
    category: finance,
    tags: [tags.investing],
    author: rohan,
    publishedAt: "2026-05-14T10:00:00Z",
    readingTime: 11,
    featuredImage: "",
    featuredImageAlt: "Financial charts and investment growth graph",
    isFeatured: false,
    isTrending: true,
    isThought: false,
    views: 44700,
    likes: 2600,
  },

  {
    id: "post-013",
    slug: "crypto-in-2026-what-survived-what-died",
    title: "Crypto in 2026: What Survived, What Died, and What Actually Has a Future",
    excerpt:
      "After the cycles, the scandals, and the regulation — here's an honest assessment of the crypto landscape in 2026.",
    content: `
      <p>The crypto market has been through more near-death experiences than any other asset class. And yet, in 2026, it persists — smaller, more regulated, and arguably more legitimate than its peak-hype versions. Here's what the landscape actually looks like.</p>

      <h2>What Survived (and Why)</h2>
      <p><strong>Bitcoin:</strong> It did exactly what its design intended — function as a store of value and censorship-resistant money. ETF approval in multiple jurisdictions has brought institutional capital and stability that the early market lacked. Bitcoin is boring now. That's a feature.</p>
      <p><strong>Ethereum:</strong> The shift to Proof-of-Stake and the L2 ecosystem (Arbitrum, Base, Optimism) have addressed the scaling problems that plagued early Ethereum. DeFi and NFT infrastructure survived on Ethereum's rails even as the speculative excess evaporated.</p>

      <h2>What Died (and Should Have)</h2>
      <p>Most memecoins. The majority of DeFi protocols with unsustainable yield models. Every blockchain that claimed to be faster than Ethereum but had three validators. The "crypto will replace banks" narrative in its simplistic form.</p>

      <h2>What Actually Has a Future</h2>
      <ul>
        <li>Stablecoins for payments and remittances — USDC on Base is already cheaper and faster than SWIFT</li>
        <li>Blockchain for supply chain and provenance verification</li>
        <li>Self-sovereign identity and digital credentials</li>
        <li>Tokenization of real-world assets (real estate, private credit)</li>
      </ul>

      <h2>Should You Invest?</h2>
      <p>Bitcoin and Ethereum as a small (1–5%) portfolio allocation: reasonable. Anything else: only if you genuinely understand what you're buying. The "number go up" thesis alone is not an investment strategy.</p>
    `,
    category: finance,
    tags: [tags.crypto, tags.investing],
    author: rohan,
    publishedAt: "2026-05-18T08:00:00Z",
    readingTime: 9,
    featuredImage: "",
    featuredImageAlt: "Cryptocurrency coins and digital finance visualization",
    isFeatured: false,
    isTrending: true,
    isThought: false,
    views: 38200,
    likes: 1900,
  },

  // ── EDUCATION ────────────────────────────────────────────────────────────────
  {
    id: "post-014",
    slug: "best-free-courses-to-learn-programming-2026",
    title: "The 12 Best Free Courses to Learn Programming in 2026 (Vetted by Developers)",
    excerpt:
      "The internet is overflowing with programming courses. These 12 are the ones that actually deliver results, vetted by working developers.",
    content: `
      <p>In 2026, you can learn programming completely free. The bottleneck is no longer access to content — it's knowing which content is worth your time. We surveyed 300 working developers about which free resources genuinely taught them skills they use in production. Here are the clear winners.</p>

      <h2>For Absolute Beginners</h2>
      <p><strong>1. CS50 by Harvard (edX):</strong> Still the gold standard introduction to computer science. David Malan is the best lecturer in online education. Take this before anything else.</p>
      <p><strong>2. The Odin Project:</strong> A structured, project-based curriculum for web development. The community is outstanding and the projects are actually hard — in a good way.</p>
      <p><strong>3. freeCodeCamp:</strong> 3,000+ hours of free curriculum with certifications. Best for structured HTML/CSS/JavaScript learning with immediate feedback.</p>

      <h2>For JavaScript / Web Development</h2>
      <p><strong>4. javascript.info:</strong> The most thorough free JavaScript reference and tutorial on the internet. Read it cover to cover.</p>
      <p><strong>5. Next.js Official Docs Tutorial:</strong> Build a full app while learning Next.js. The 2024 rewrite of the tutorial is excellent.</p>

      <h2>For Python</h2>
      <p><strong>6. Python for Everybody (Coursera/Free):</strong> Dr. Chuck's course has onboarded more Python developers than any other resource.</p>
      <p><strong>7. Automate the Boring Stuff with Python:</strong> Free online book that teaches Python through genuinely useful scripts. Perfect after Python for Everybody.</p>

      <h2>For Computer Science Fundamentals</h2>
      <p><strong>8. MIT OpenCourseWare 6.006:</strong> Algorithms. Hard, but worth it. This is what separates developers from engineers.</p>
      <p><strong>9. Teach Yourself Computer Science (teachyourselfcs.com):</strong> A curated curriculum matching a CS degree in quality and scope.</p>
    `,
    category: education,
    tags: [tags.learning, tags.career],
    author: aisha,
    publishedAt: "2026-05-11T09:00:00Z",
    readingTime: 10,
    featuredImage: "",
    featuredImageAlt: "Student learning programming on a laptop with course material",
    isFeatured: false,
    isTrending: false,
    isThought: false,
    views: 71200,
    likes: 4100,
  },

  // ── CAREER ───────────────────────────────────────────────────────────────────
  {
    id: "post-015",
    slug: "how-to-get-first-developer-job-2026-no-degree",
    title: "How to Get Your First Developer Job in 2026 Without a CS Degree",
    excerpt:
      "The path to a developer job has changed. Here's the honest roadmap for breaking into tech in 2026 as a self-taught or bootcamp developer.",
    content: `
      <p>Getting your first developer job without a traditional CS degree is harder than the bootcamp industry admits and easier than the gatekeepers pretend. Here's the honest picture based on what's actually working in 2026.</p>

      <h2>The Portfolio Is Your Degree</h2>
      <p>Hiring managers are not looking for a diploma — they're looking for evidence you can build things. Three to five well-built, deployed projects that solve real problems will open more doors than a piece of paper. The key word is "well-built": clean code, good documentation, deployed and accessible via URL.</p>

      <h2>What Projects Actually Impress Employers</h2>
      <ul>
        <li>A full-stack app with authentication, a database, and a real use case (not a todo app)</li>
        <li>An open-source contribution to a project with real users</li>
        <li>A tool you built to solve your own problem (personal projects show genuine interest)</li>
        <li>A technical blog where you explain concepts clearly (rare and very impressive)</li>
      </ul>

      <h2>The Job Search Reality in 2026</h2>
      <p>Apply to mid-size companies and startups first — they care less about pedigree and more about practical skills. Enterprise companies and FAANGs are harder to break into without the credential filter. Junior positions are competitive; internships (even unpaid) can be a more accessible entry point.</p>

      <h2>Interview Preparation</h2>
      <p>LeetCode is real. Know your data structures and algorithms. But in 2026, most junior roles are also adding "system design lite" questions — be able to sketch a basic web app architecture. Practice on Pramp and Interviewing.io for mock interviews with real feedback.</p>

      <h2>The Timeline</h2>
      <p>Most self-taught developers land their first role 12–24 months after starting seriously. This isn't discouraging — it's the honest timeline for building the skills that merit a salary. The people who fail are those who underinvest in building versus watching tutorials.</p>
    `,
    category: career,
    tags: [tags.career, tags.learning],
    author: aisha,
    publishedAt: "2026-05-16T09:00:00Z",
    readingTime: 12,
    featuredImage: "",
    featuredImageAlt: "Developer at a job interview in a modern tech office",
    isFeatured: false,
    isTrending: true,
    isThought: false,
    views: 58900,
    likes: 3300,
  },

  // ── GAMING ───────────────────────────────────────────────────────────────────
  {
    id: "post-016",
    slug: "best-pc-games-2026-so-far",
    title: "Best PC Games of 2026 So Far: Our Top 10 Picks Ranked",
    excerpt:
      "2026 has been an exceptional year for PC gaming. From open-world epics to indie darlings, here are the ten games you shouldn't miss.",
    content: `
      <p>We're five months into 2026 and the gaming calendar has already delivered several all-time contenders. Here's our ranked list of the best PC games released so far this year.</p>

      <h2>1. Elden Ring: Nightreign</h2>
      <p>FromSoftware's first live-service experiment takes the Elden Ring combat engine and drops three players into a roguelite co-op structure with procedurally assembled maps. The result is either the best thing they've ever made or a divisive experiment, depending on who you ask. We loved it.</p>

      <h2>2. Grand Theft Auto VI (PC)</h2>
      <p>The PC release arrives 18 months after consoles with a stunning technical showpiece — 4K/144Hz that genuinely pushes the best GPUs, and a DLSS 4 implementation that makes 60fps achievable on midrange hardware. The game itself is everything the hype promised.</p>

      <h2>3. Hollow Knight: Silksong</h2>
      <p>It finally arrived. And it was worth the wait. Team Cherry has expanded every dimension of the original — larger world, deeper combat, a protagonist with more expressive movement than any 2D game character we can think of.</p>

      <h2>4. Civilization VII</h2>
      <p>Firaxis reinvented the Civ formula with the Age system — your civilization literally evolves and shifts its identity over historical periods. The most intellectually stimulating strategy game in years.</p>

      <h2>5–10 Honorable Mentions</h2>
      <p>Split Fiction (co-op platformer), Avowed (Obsidian's RPG), Death Stranding 2 (PC), Balatro sequel (still just Balatro, still perfect), Little Kitty Big City 2 (cozy darling), and S.T.A.L.K.E.R. 2's first major expansion.</p>
    `,
    category: gaming,
    tags: [tags.gaming, tags.review],
    author: vexira,
    publishedAt: "2026-05-26T10:00:00Z",
    readingTime: 8,
    featuredImage: "",
    featuredImageAlt: "Gaming setup with RGB keyboard and multiple monitors",
    isFeatured: false,
    isTrending: true,
    isThought: false,
    views: 43800,
    likes: 2500,
  },

  // ── ENTERTAINMENT ─────────────────────────────────────────────────────────────
  {
    id: "post-017",
    slug: "best-netflix-shows-2026-must-watch",
    title: "Best Netflix Shows of 2026: The Must-Watch List (Updated Monthly)",
    excerpt:
      "Netflix's content quality has surged in 2026. Here's the definitive updated list of shows worth your streaming hours.",
    content: `
      <p>Netflix had a quietly excellent 2026. After years of quantity-over-quality criticism, the content slate has tightened into something that feels more curated. Here are the shows that are genuinely worth your time.</p>

      <h2>Originals: The Standouts</h2>
      <p><strong>The Diplomat (Season 3):</strong> Shonda Rhimes' political thriller hit its stride this season with tighter plotting, a career-best Keri Russell performance, and a cliffhanger that actually delivers.</p>
      <p><strong>3 Body Problem (Season 2):</strong> The showrunners found their footing after a polarizing first season. The scope of the story is now matched by the budget and the cast is extraordinary.</p>
      <p><strong>Adolescence:</strong> The four-episode limited series that had everyone talking. Shot in continuous takes, it's a raw and devastating portrait of radicalisation and family grief. Watch it. It's only four hours and it will stay with you.</p>

      <h2>Acquired/Licensed: Hidden Gems</h2>
      <p>Dark (German, rewatch it), All of Us Strangers (film, on Netflix in some regions), and Severance Season 2 (technically Apple TV+ but worth mentioning the cultural moment it created).</p>

      <h2>The Anime Corner</h2>
      <p>Sakamoto Days adaptation has exceeded expectations. One Piece live-action Season 2 improved on Season 1 in every way that matters. Dandadan is the most visually inventive anime series since Chainsaw Man.</p>

      <h2>Skip These</h2>
      <p>The reality slate remains mostly disposable. Several high-profile licensed film acquisitions underdelivered. The algorithm still surfaces mediocre content aggressively — this list is your filter.</p>
    `,
    category: entertainment,
    tags: [tags.review],
    author: vexira,
    publishedAt: "2026-05-24T10:00:00Z",
    readingTime: 7,
    featuredImage: "",
    featuredImageAlt: "Person watching streaming content on a large smart TV",
    isFeatured: false,
    isTrending: false,
    isThought: false,
    views: 34100,
    likes: 1700,
  },

  // ── REVIEWS ──────────────────────────────────────────────────────────────────
  {
    id: "post-018",
    slug: "macbook-pro-m4-max-review-2026",
    title: "MacBook Pro M4 Max Review: The Best Laptop Ever Made (For Some People)",
    excerpt:
      "The M4 Max chip delivers jaw-dropping performance. But at this price, who actually needs it? An honest review for developers and creators.",
    content: `
      <p>The MacBook Pro with M4 Max is, by measurable benchmarks, the best laptop ever made. It's also ₹3.5 lakhs. Let's talk about whether it makes sense for you.</p>

      <h2>The Chip: M4 Max</h2>
      <p>The M4 Max sports a 14-core CPU (10 performance, 4 efficiency), a 32-core GPU, and up to 128GB of unified memory. In sustained workloads — video rendering, large model training, compiling massive codebases — it delivers performance that requires a desktop workstation to beat on Windows. Cinebench R24 multi-core: 3,600 (reference: the M3 Max hit 2,800). Thermal throttling under sustained load: essentially zero.</p>

      <h2>The Display</h2>
      <p>The 16.2-inch Liquid Retina XDR display at 3456×2234 remains a benchmark reference. 1,600 nits peak brightness, 1,000,000:1 contrast ratio, ProMotion 120Hz. Designers, video editors, and photographers will not find a better screen in any laptop category at any price.</p>

      <h2>Battery Life</h2>
      <p>22 hours of web browsing. 14 hours of video editing in DaVinci Resolve. These aren't marketing claims — we verified them. For professionals who work on planes, trains, and in cafes without outlets, this alone justifies a premium.</p>

      <h2>Should You Buy It?</h2>
      <ul>
        <li><strong>Yes:</strong> Video editors, 3D artists, ML engineers, developers compiling large codebases</li>
        <li><strong>Maybe M4 Pro instead:</strong> Most software developers and content creators</li>
        <li><strong>No:</strong> Web browsing, document work, casual users</li>
      </ul>
      <p>The M4 MacBook Air at ₹1.25 lakhs handles 90% of use cases and is a better value recommendation for most people.</p>
    `,
    category: reviews,
    tags: [tags.review],
    author: vexira,
    publishedAt: "2026-05-19T08:00:00Z",
    readingTime: 10,
    featuredImage: "",
    featuredImageAlt: "MacBook Pro M4 Max open on a minimalist desk",
    isFeatured: false,
    isTrending: true,
    isThought: false,
    views: 61400,
    likes: 3500,
  },

  {
    id: "post-019",
    slug: "cursor-ai-code-editor-review-worth-it",
    title: "Cursor AI Code Editor Review: Is It Worth the Subscription in 2026?",
    excerpt:
      "Cursor has become the most talked-about tool in developer circles. After 3 months of daily use, here's our verdict.",
    content: `
      <p>Cursor went from developer Twitter novelty to production tool for over a million paying users in under 18 months. After 90 days of replacing VS Code entirely with Cursor for all development work, here's a thorough and honest assessment.</p>

      <h2>What Cursor Actually Is</h2>
      <p>Cursor is a fork of VS Code with deep AI integration — not the add-on layer that GitHub Copilot uses. The AI understands your entire codebase, can reference multiple files simultaneously, and can make multi-file edits with a single instruction. This architectural difference is what makes it feel categorically different from Copilot.</p>

      <h2>The Features That Changed How I Work</h2>
      <p><strong>Composer:</strong> Describe a feature in natural language. Cursor reads your codebase, understands your patterns, and generates all the files needed — including tests and documentation. It's genuinely magic for greenfield feature work.</p>
      <p><strong>Codebase Chat:</strong> Ask questions about your own code. "Where is authentication handled?" "What does the UserService do?" "Why is this function called twice?" This saves hours of code archaeology weekly.</p>
      <p><strong>Auto-fix:</strong> Click an error in your terminal. Cursor reads the stacktrace and the relevant code and suggests a fix. Gets it right ~70% of the time on the first try.</p>

      <h2>The Limitations</h2>
      <p>Context window limits mean it struggles with extremely large codebases (1M+ lines). The AI occasionally generates plausible-but-wrong code with confidence — you must review everything it writes. The subscription ($20/month Pro) adds up, and the free tier is now quite limited.</p>

      <h2>Verdict</h2>
      <p>For professional developers: buy it. The productivity gains are real and measurable. For students and hobbyists: the free tier is still useful; wait until you're earning before subscribing.</p>
    `,
    category: reviews,
    tags: [tags.review, tags.ai],
    author: aryan,
    publishedAt: "2026-05-21T09:00:00Z",
    readingTime: 9,
    featuredImage: "",
    featuredImageAlt: "Cursor AI code editor interface on a developer's screen",
    isFeatured: false,
    isTrending: true,
    isThought: false,
    views: 48700,
    likes: 2900,
  },

  // ── THOUGHTS ─────────────────────────────────────────────────────────────────
  {
    id: "post-020",
    slug: "why-i-still-believe-in-the-open-web",
    title: "Why I Still Believe in the Open Web (Despite Everything)",
    excerpt:
      "Walled gardens are winning. But the open web has survived every death sentence it's been handed. Here's why I'm still betting on it.",
    content: `
      <p>Every year, someone writes the obituary of the open web. RSS is dead. Blogs are dead. Search is dying. The algorithm ate everything. And every year, the open web stubbornly persists — battered, fractured, but alive.</p>

      <p>I'm still betting on it. Here's why.</p>

      <h2>The Pendulum Swings</h2>
      <p>We've seen this before. CompuServe and AOL felt inescapable in the 90s. MySpace was where the internet lived in 2006. Facebook was going to eat everything in 2012. Twitter was the last great discovery engine in 2018. Each of these platforms peaked, declined, and either transformed or collapsed. The open web outlasted all of them.</p>

      <p>The current cycle — where algorithmic platforms like TikTok, Instagram, and YouTube dominate attention — feels permanent because we're inside it. It isn't. The attention economy is a pendulum, and it always swings back toward choice, ownership, and directness.</p>

      <h2>The Indie Web Is Growing</h2>
      <p>The number of people running personal blogs, newsletters, and independent publications has grown every year since 2021. Ghost is thriving. Substack is huge. Beehiiv is coming up fast. Bear Blog and Micro.blog are attracting developers who want simplicity. The tools for building on the open web have never been better.</p>

      <p>More importantly: the quality of content on the independent web is often dramatically better than what surfaces through algorithms. When someone writes without chasing engagement metrics, they write differently. More honestly. More usefully.</p>

      <h2>Why It Matters</h2>
      <p>Platforms can remove your content, shadowban your account, change their algorithm, or simply shut down. Your blog, your newsletter, your domain — these are yours in a way that a social media following never can be. The open web is ownership. That's worth fighting for.</p>

      <p>That's why I built this. That's why you're reading this.</p>
    `,
    category: thoughts,
    tags: [tags.opinion],
    author: vexira,
    publishedAt: "2026-05-27T07:00:00Z",
    readingTime: 6,
    featuredImage: "",
    featuredImageAlt: "Person typing on a keyboard with warm lighting",
    isFeatured: false,
    isTrending: false,
    isThought: true,
    views: 18900,
    likes: 1650,
  },

  {
    id: "post-021",
    slug: "the-loneliness-of-building-in-public",
    title: "The Loneliness of Building in Public",
    excerpt:
      "Everyone talks about the wins of building in public. Nobody talks about posting into the void, the silence, and what it takes to keep going anyway.",
    content: `
      <p>Building in public is sold as a growth hack. Post your process, share your failures alongside wins, attract an audience, and watch your startup grow organically. What the evangelists don't tell you is the first six months of posting into a void with eleven followers.</p>

      <p>I posted 47 consecutive days of updates before a single post got more than 3 likes. The silence is a specific kind of loneliness — you're shouting into a space that doesn't echo back. It's different from private failure. Private failure is just failure. Public failure where nobody cares is something stranger.</p>

      <h2>Why It's Worth It Anyway</h2>
      <p>The discipline of building in public makes you sharper. Explaining your decisions — why you chose this architecture, why you pivoted, what didn't work — forces a clarity of thinking that private building doesn't. You become a better builder because you have to be able to explain what you're building.</p>

      <p>And eventually, someone responds. Not a viral post — just one person who says "I've been struggling with exactly this." That one conversation is worth the 46 posts that got nothing.</p>

      <h2>The Advice I Wish I'd Gotten</h2>
      <p>Don't build in public to build an audience. Build in public to build better. The audience, if it comes, is a side effect — not the goal. When the goal is the audience, you optimize for the wrong things and burn out when the metrics don't materialize.</p>

      <p>Ship something. Write about it honestly. Do it again. That's the whole game.</p>
    `,
    category: thoughts,
    tags: [tags.opinion, tags.startup],
    author: vexira,
    publishedAt: "2026-05-13T07:00:00Z",
    readingTime: 5,
    featuredImage: "",
    featuredImageAlt: "Solo developer working late at night with warm desk lamp",
    isFeatured: true,
    isTrending: false,
    isThought: true,
    views: 22300,
    likes: 2100,
  },

  // ── MORE POSTS (ensuring all categories have 2+ posts for variety) ────────────

  {
    id: "post-022",
    slug: "what-is-webassembly-and-why-developers-should-care",
    title: "What Is WebAssembly and Why Every Developer Should Care in 2026",
    excerpt:
      "WebAssembly has quietly escaped the browser and is reshaping server-side computing, edge functions, and cross-platform apps. Here's your primer.",
    content: `
      <p>WebAssembly (Wasm) started as a way to run non-JavaScript code in browsers at near-native speed. In 2026, it's something much larger: a universal binary format that runs in browsers, servers, edge networks, and embedded systems.</p>

      <h2>What It Is</h2>
      <p>Wasm is a low-level binary instruction format designed as a portable compilation target for languages like C, C++, Rust, and Go. It runs in a sandboxed environment, is deterministic, and achieves performance within 10–20% of native code on most workloads.</p>

      <h2>Where It's Being Used</h2>
      <ul>
        <li><strong>Figma:</strong> The main canvas is a Wasm application — that's why it feels like a native app in a browser</li>
        <li><strong>Cloudflare Workers:</strong> Wasm modules run at 300+ edge locations globally with sub-millisecond cold starts</li>
        <li><strong>SQLite in the browser:</strong> The sqlite3 Wasm build enables full local database capabilities without a server</li>
        <li><strong>Plugin systems:</strong> Shopify, Envoy, and others use Wasm for safe, sandboxed plugin execution</li>
      </ul>

      <h2>WASI: The Interface That Makes It Portable</h2>
      <p>The WebAssembly System Interface (WASI) is the standard that lets Wasm modules access system resources (files, network, environment) in a controlled, portable way. It's what makes a single Wasm binary run identically on Windows, Linux, macOS, and in a browser.</p>

      <h2>Should JavaScript Developers Learn Wasm?</h2>
      <p>Not necessarily to write Wasm directly — but to understand what it enables and when to reach for it. If you're building performance-critical browser code, audio/video processing, scientific computing in the browser, or plugin systems: Wasm is your answer.</p>
    `,
    category: webDev,
    tags: [tags.webdev, tags.nodejs],
    author: aryan,
    publishedAt: "2026-05-09T09:00:00Z",
    readingTime: 8,
    featuredImage: "",
    featuredImageAlt: "WebAssembly code and browser performance metrics",
    isFeatured: false,
    isTrending: false,
    isThought: false,
    views: 19800,
    likes: 980,
  },

  {
    id: "post-023",
    slug: "python-vs-javascript-which-to-learn-first-2026",
    title: "Python vs JavaScript: Which Should You Learn First in 2026?",
    excerpt:
      "The two most beginner-friendly programming languages, two very different career paths. Here's how to make the right choice for your goals.",
    content: `
      <p>Python and JavaScript dominate beginner programming recommendations — and for good reason. Both are forgiving, versatile, and have massive communities. Choosing between them isn't about which is "better." It's about which is better for what you want to do.</p>

      <h2>Choose JavaScript If...</h2>
      <ul>
        <li>You want to build websites and web apps</li>
        <li>You want to become a frontend or full-stack developer</li>
        <li>You want the most job opportunities in the shortest time</li>
        <li>You're drawn to building things people interact with visually</li>
      </ul>
      <p>JavaScript is the only language that runs natively in browsers. There is no alternative. If web development is your goal, JavaScript is your language.</p>

      <h2>Choose Python If...</h2>
      <ul>
        <li>You want to work in data science, machine learning, or AI</li>
        <li>You're interested in automation, scripting, and backend development</li>
        <li>You want to do scientific computing or research</li>
        <li>Readability matters more than performance in your work</li>
      </ul>
      <p>Python is arguably easier to read and write for absolute beginners. Its syntax is closer to English. And the data science/AI ecosystem is overwhelmingly Python-first.</p>

      <h2>The Honest Answer</h2>
      <p>Either will make you employable. Both can be learned. Pick the one aligned with what you want to build, commit to it for 6 months, and go. Switching is always possible. Analysis paralysis is a bigger risk than choosing the "wrong" language.</p>
    `,
    category: prog,
    tags: [tags.python, tags.react, tags.learning],
    author: aryan,
    publishedAt: "2026-05-07T09:00:00Z",
    readingTime: 7,
    featuredImage: "",
    featuredImageAlt: "Python and JavaScript logos side by side on a coding background",
    isFeatured: false,
    isTrending: false,
    isThought: false,
    views: 45200,
    likes: 2400,
  },

  {
    id: "post-024",
    slug: "freelancing-developer-guide-2026-how-to-start",
    title: "The Complete Freelancing Guide for Developers in 2026: From Zero to First Client",
    excerpt:
      "Freelancing as a developer has never been more accessible — or more competitive. Here's the step-by-step guide to building a sustainable freelance practice.",
    content: `
      <p>Freelancing in 2026 means competing in a global marketplace where AI tools have raised expectations and compressed certain price points. The developers who thrive are those who solve problems, not just write code. Here's how to build a freelance practice that actually sustains you.</p>

      <h2>Niche Down (Seriously)</h2>
      <p>Generalist developers compete on price. Specialists compete on expertise. "React developer who specialises in SaaS dashboards" beats "full-stack developer" for client matching, referrals, and rates. The riches are in the niches.</p>

      <h2>Where to Find First Clients</h2>
      <ol>
        <li><strong>Warm network first:</strong> Your first client is almost always someone you know or someone they know. Mine your contacts before going to platforms.</li>
        <li><strong>Toptal / Contra / Gun.io:</strong> Vetted platforms with higher rates but rigorous screening</li>
        <li><strong>LinkedIn:</strong> Position yourself as an expert, post valuable content, and clients come to you</li>
        <li><strong>Upwork:</strong> Competitive, but still effective with a strong portfolio and niche positioning</li>
      </ol>

      <h2>Pricing: Stop Undercharging</h2>
      <p>Most new freelancers undercharge by 50–100%. Hourly rates for developers in India in 2026: ₹1,500–2,500/hr for juniors, ₹3,000–6,000/hr for mid-level, ₹7,000–15,000/hr for specialists. Value-based project pricing consistently outperforms hourly for senior developers.</p>

      <h2>The Contract</h2>
      <p>Always use a contract. Always take a 50% deposit. Protect yourself from scope creep with a clear statement of work. The clients who resist contracts are the clients who will cause problems.</p>
    `,
    category: career,
    tags: [tags.career, tags.productivity],
    author: aisha,
    publishedAt: "2026-05-03T09:00:00Z",
    readingTime: 11,
    featuredImage: "",
    featuredImageAlt: "Freelance developer working from a coffee shop with laptop",
    isFeatured: false,
    isTrending: false,
    isThought: false,
    views: 37800,
    likes: 2000,
  },

  {
    id: "post-025",
    slug: "notion-vs-obsidian-which-is-better-for-developers",
    title: "Notion vs Obsidian: Which Knowledge Tool Is Better for Developers in 2026?",
    excerpt:
      "After 6 months switching between both tools, here's an honest comparison of Notion and Obsidian for developer workflows, note-taking, and knowledge management.",
    content: `
      <p>The developer community is split between Notion enthusiasts and Obsidian devotees. Both camps have strong opinions. After spending three months deep in each tool (switching cold turkey both times), here's the real comparison.</p>

      <h2>The Core Philosophy Difference</h2>
      <p><strong>Notion:</strong> Database-first. Everything can be a table, a page, a board. Designed for teams and structured information. Cloud-native, collaborative.</p>
      <p><strong>Obsidian:</strong> Note-first. A graph of linked Markdown files that live locally. Designed for individual thought and knowledge emergence. Plain text, portable, yours forever.</p>

      <h2>For Personal Knowledge Management</h2>
      <p>Obsidian wins. The bidirectional linking, the graph view, and the plugin ecosystem (Dataview, Templater, Excalidraw) create a second brain that genuinely surfaces connections you didn't know existed. Notion's relational databases are powerful but feel like overhead for personal notes.</p>

      <h2>For Team Documentation</h2>
      <p>Notion wins. Its collaborative editing, permission system, and template gallery make it the best tool for shared knowledge bases, project wikis, and team SOPs. Nothing in the Obsidian ecosystem competes with Notion's collaboration features.</p>

      <h2>The Setup Cost</h2>
      <p>Obsidian requires upfront investment — you need to build your vault structure, install plugins, and develop linking habits. Notion is immediately usable. The payoff on Obsidian's investment is real, but it takes 1–2 months before the system starts working for you rather than against you.</p>

      <h2>Recommendation for Developers</h2>
      <p>Use Obsidian for learning notes, research, and personal knowledge. Use Notion for project management and team communication. They're not competitors — they're complements.</p>
    `,
    category: reviews,
    tags: [tags.review, tags.productivity],
    author: vexira,
    publishedAt: "2026-05-04T09:00:00Z",
    readingTime: 9,
    featuredImage: "",
    featuredImageAlt: "Notion and Obsidian apps side by side on a desktop",
    isFeatured: false,
    isTrending: false,
    isThought: false,
    views: 28900,
    likes: 1800,
  },

  {
    id: "post-026",
    slug: "ai-is-not-replacing-developers-its-raising-the-floor",
    title: "AI Is Not Replacing Developers — It's Raising the Floor",
    excerpt:
      "The panic about AI replacing programmers misses the more interesting (and more optimistic) story about what's actually happening to software development.",
    content: `
      <p>Every few months, a new AI coding tool arrives and the discourse cycles through the same prediction: developers are obsolete. The models can write code. Why would anyone hire a human?</p>

      <p>This argument mistakes the nature of software development. Writing code is not the job. Solving problems, understanding systems, managing complexity, communicating with stakeholders, making architectural decisions — these are the job. Code is just the output.</p>

      <h2>What AI Is Actually Doing</h2>
      <p>AI tools are raising the floor. Junior developers can now produce code at a speed that would have required years of experience. Boilerplate — the tedious scaffolding that consumed hours — is gone in seconds. Debugging common patterns is faster. Documentation writes itself.</p>

      <p>The ceiling, however, is moving up at the same rate. The projects that are now viable — because the cost to implement has dropped — are more complex, more ambitious. The systems these projects require need experienced developers more, not less.</p>

      <h2>The Skills That Compound</h2>
      <p>System thinking. Architectural judgement. Understanding tradeoffs. Reading code and understanding intent. Debugging complex distributed systems. These skills are not accelerated by AI — they're developed by doing hard things slowly. The developers who will thrive are those who use AI to remove the tedious work and spend the reclaimed time on the hard work that actually develops expertise.</p>

      <h2>The Honest Risk</h2>
      <p>The junior developer role is changing faster than the senior role. The straightforward entry-level tasks that used to exist as a learning environment are increasingly AI-generated. The path from junior to senior will need to adapt. That's a real challenge — and a responsibility for senior developers and the industry to address.</p>

      <p>But replaced? Not anytime soon. The software that needs building is more complex than ever. And complexity still needs humans.</p>
    `,
    category: thoughts,
    tags: [tags.ai, tags.opinion, tags.career],
    author: vexira,
    publishedAt: "2026-05-29T07:00:00Z",
    readingTime: 7,
    featuredImage: "",
    featuredImageAlt: "Developer and AI working together at a futuristic workstation",
    isFeatured: true,
    isTrending: true,
    isThought: true,
    views: 71500,
    likes: 5200,
  },
];

// =============================================================================
// Query Helpers
// =============================================================================

/** All posts sorted by date (newest first) */
export const allPosts = [...posts].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

/** Featured posts */
export const featuredPosts = allPosts.filter((p) => p.isFeatured);

/** Trending posts (sorted by views) */
export const trendingPosts = [...posts]
  .filter((p) => p.isTrending)
  .sort((a, b) => b.views - a.views);

/** Thoughts posts */
export const thoughtsPosts = allPosts.filter((p) => p.isThought);

/** Get post by slug */
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Get posts by category slug */
export function getPostsByCategory(categorySlug: string): Post[] {
  return allPosts.filter((p) => p.category.slug === categorySlug);
}

/** Get related posts (same category, excluding current) */
export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  return allPosts
    .filter((p) => p.slug !== slug && p.category.id === current.category.id)
    .slice(0, limit);
}

/** Get categories that have at least one post */
export function getActiveCategories() {
  const usedSlugs = new Set(posts.map((p) => p.category.slug));
  return Array.from(usedSlugs);
}

/** Latest posts with optional limit */
export function getLatestPosts(limit = 10): Post[] {
  return allPosts.slice(0, limit);
}

/** Search posts by query string */
export function searchPosts(query: string): Post[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return allPosts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.name.toLowerCase().includes(q) ||
      p.tags.some((t) => t.name.toLowerCase().includes(q)) ||
      p.author.name.toLowerCase().includes(q)
  );
}

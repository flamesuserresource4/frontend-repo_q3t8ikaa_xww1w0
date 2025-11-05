import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const bullets = [
  'Keyword maps that mirror real user intent',
  'On-page briefs with headings, schema, and internal links',
  'Automated audits and instant technical fixes',
  'Insights that explain rankings in plain English',
];

const Showcase = () => {
  return (
    <section className="relative w-full bg-[#0b0b12] py-20 text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">From idea to indexed — in days, not months</h2>
            <p className="mt-4 text-white/70">
              simpify compresses the SEO workflow: research, plan, create, ship, learn. It plugs into your stack and keeps shipping improvements automatically.
            </p>
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-white/80">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#get-started"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Explore onboarding
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="rounded-lg bg-[#0f0f19] p-4">
                <div className="mb-3 flex items-center justify-between text-xs text-white/50">
                  <span>Preview</span>
                  <span>AI Suggestions</span>
                </div>
                <div className="rounded-md border border-white/10 bg-black/30 p-4">
                  <p className="text-sm text-white/80">“Add FAQ schema to capture People Also Ask. Tighten H2s around transactional intent. Link to {"How it works"} from pricing.”</p>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                  <div className="rounded-md border border-white/10 bg-white/5 p-3 text-center">Schema</div>
                  <div className="rounded-md border border-white/10 bg-white/5 p-3 text-center">Headings</div>
                  <div className="rounded-md border border-white/10 bg-white/5 p-3 text-center">Links</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 -z-0 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

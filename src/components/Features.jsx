import React from 'react';
import { Search, Mic, BarChart2, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Semantic SEO at scale',
    desc: 'Cluster topics, map intent, and build internal links with AI-generated blueprints that keep structure clean and crawlable.'
  },
  {
    icon: Mic,
    title: 'Voice-aware content',
    desc: 'Crafts content as if spoken—concise, human, and optimized for featured snippets, voice search, and on-page conversions.'
  },
  {
    icon: BarChart2,
    title: 'Rank faster, learn quicker',
    desc: 'Closed-loop feedback ties rankings, CTR, and engagement back to content changes to continuously improve.'
  },
  {
    icon: ShieldCheck,
    title: 'Technical SEO baked in',
    desc: 'Schema, metadata, sitemaps, and performance budgets come pre-optimized for modern search engines.'
  },
];

const Features = () => {
  return (
    <section id="learn-more" className="relative w-full bg-[#0b0b12] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_20%_10%,rgba(100,64,255,0.12),transparent),radial-gradient(50%_40%_at_80%_10%,rgba(255,110,64,0.08),transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Built for modern search</h2>
          <p className="mt-3 text-white/70">Everything you need to go from zero to authority—without the complexity.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/90">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

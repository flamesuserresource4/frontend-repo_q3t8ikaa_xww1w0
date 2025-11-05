import React from 'react';
import { Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" className="relative w-full bg-[#0b0b12] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Get early access to simpify</h2>
        <p className="mt-3 text-white/70">Be first to try the AI SEO brand that turns search intent into compounding growth.</p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 sm:flex-row"
        >
          <div className="flex w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5">
            <Mail className="h-4 w-4 text-white/60" />
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90 sm:w-auto"
          >
            Request invite
          </button>
        </form>
        <p className="mt-3 text-xs text-white/50">We’ll reach out with private beta details. No spam.</p>
      </div>
    </section>
  );
};

export default CTA;

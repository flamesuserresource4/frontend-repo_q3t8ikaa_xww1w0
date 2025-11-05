import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b12] text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial gradient overlay to enhance contrast */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(62,36,255,0.25),rgba(255,101,47,0.08)_40%,rgba(0,0,0,0.85)_80%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-fuchsia-300" />
          <span>Introducing simpify — the AI SEO brand for 10x growth</span>
        </div>

        <h1 className="max-w-3xl bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Elevate your search presence with an AI voice that understands intent
        </h1>

        <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
          simpify blends AI, voice understanding, and technical SEO to craft content and optimizations that rank faster and convert better.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <Rocket className="h-4 w-4" />
            Get early access
          </a>
          <a
            href="#learn-more"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            See how it works
          </a>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0b12] to-transparent" />
    </section>
  );
};

export default Hero;

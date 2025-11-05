import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12]">
      {/* Simple top nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b12]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-orange-400" />
            <span className="text-sm font-semibold tracking-wide">simpify</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#learn-more" className="hover:text-white">Features</a>
            <a href="#get-started" className="hover:text-white">Get access</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-[#0b0b12] py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} simpify. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

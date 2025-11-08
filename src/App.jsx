import { useState } from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AuthModal from './components/AuthModal';

function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-indigo-50 to-pink-50 text-slate-800">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-800">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-sky-600 text-white">ƒ</span>
            PastelPay
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
            <a href="#pricing" className="hover:text-sky-700">Pricing</a>
            <a href="#blog" className="hover:text-sky-700">Blog</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setAuthOpen(true)} className="rounded-lg border border-sky-200 bg-white px-3 py-2 text-sm font-medium text-sky-700 hover:bg-sky-50">Sign in</button>
            <button onClick={() => setAuthOpen(true)} className="hidden rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700 sm:inline">Get started</button>
          </div>
        </div>
      </header>

      <main>
        <Hero onOpenAuth={() => setAuthOpen(true)} />
        <Pricing />
        <Blog />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-white/60 py-8 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} PastelPay. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-sky-700">Privacy</a>
            <a href="#" className="hover:text-sky-700">Terms</a>
            <a href="#" className="hover:text-sky-700">Status</a>
          </div>
        </div>
      </footer>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}

export default App;

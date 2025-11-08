import Spline from '@splinetool/react-spline';
import { ArrowRight, CreditCard } from 'lucide-react';

export default function Hero({ onOpenAuth }) {
  return (
    <section id="home" className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* soft pastel overlay to improve text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-medium text-sky-700 shadow-sm backdrop-blur">
          <CreditCard className="h-4 w-4" />
          Modern fintech for digital commerce
        </div>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-800 sm:text-5xl md:text-6xl">
          Simple, secure, and elegant payments
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          A minimalist platform for subscriptions, payouts, and card issuing — crafted with a soft pastel aesthetic youll love.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button onClick={onOpenAuth} className="group inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700">
            Get started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <a href="#pricing" className="rounded-lg border border-sky-200 bg-white px-5 py-3 text-sky-700 transition hover:bg-sky-50">See pricing</a>
        </div>
      </div>
    </section>
  );
}

import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    description: 'For trying things out',
    features: ['1 project', 'Basic analytics', 'Email support'],
    highlight: false,
  },
  {
    name: 'Grow',
    price: '$29',
    period: '/mo',
    description: 'For growing startups',
    features: ['Unlimited projects', 'Advanced analytics', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: '$99',
    period: '/mo',
    description: 'For scaling businesses',
    features: ['Everything in Grow', 'SLA + SSO', 'Dedicated manager'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">Fair, simple pricing</h2>
        <p className="mt-3 text-slate-600">Start free and upgrade as you grow. No hidden fees.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border p-6 shadow-sm backdrop-blur ${
              t.highlight
                ? 'border-sky-200 bg-sky-50'
                : 'border-slate-200 bg-white'
            }`}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold text-slate-800">{t.name}</h3>
              {t.highlight && (
                <span className="rounded-full bg-sky-600/10 px-3 py-1 text-xs font-medium text-sky-700">
                  Most popular
                </span>
              )}
            </div>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-extrabold text-slate-900">{t.price}</span>
              <span className="text-slate-500">{t.period}</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{t.description}</p>
            <ul className="mt-6 space-y-2">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-slate-700">
                  <Check className="h-4 w-4 text-emerald-500" /> {f}
                </li>
              ))}
            </ul>
            <button className={`mt-6 w-full rounded-lg px-4 py-2 font-medium shadow-sm transition ${
              t.highlight
                ? 'bg-sky-600 text-white hover:bg-sky-700 shadow-sky-200'
                : 'bg-white text-sky-700 hover:bg-sky-50 border border-sky-200'
            }`}>
              Choose {t.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

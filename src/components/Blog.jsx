import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Designing pastel-first fintech UIs',
    excerpt: 'How soft palettes improve trust and clarity in financial products.',
    date: 'Oct 2025',
  },
  {
    title: 'From subscriptions to issuing in minutes',
    excerpt: 'A practical roadmap to launch payments fast and reliably.',
    date: 'Sep 2025',
  },
  {
    title: 'Security by default: our approach',
    excerpt: 'The simple controls that make a big difference.',
    date: 'Aug 2025',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-slate-600">Insights on design, payments, and growth.</p>
        </div>
        <a href="#" className="hidden items-center gap-2 text-sky-700 hover:underline sm:inline-flex">
          View all <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="text-xs text-slate-500">{p.date}</div>
            <h3 className="mt-2 text-lg font-semibold text-slate-800 group-hover:text-sky-700">{p.title}</h3>
            <p className="mt-2 text-slate-600">{p.excerpt}</p>
            <button className="mt-4 inline-flex items-center gap-2 text-sm text-sky-700">
              Read more <ArrowRight className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <a href="#" className="inline-flex items-center gap-2 text-sky-700 hover:underline">
          View all <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

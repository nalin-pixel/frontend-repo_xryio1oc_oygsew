import { Mail } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    // For this template we just show an alert; can be wired to backend later
    alert(`Thanks ${payload.name}! We'll reach you at ${payload.email}.`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-20">
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-2">
          <Mail className="h-5 w-5 text-sky-600" />
          <h2 className="text-2xl font-semibold text-slate-800">Contact us</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
            <input name="name" required className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-sky-200 focus:ring" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" name="email" required className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-sky-200 focus:ring" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
            <textarea name="message" rows="4" required className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-sky-200 focus:ring" />
          </div>
          <button className="w-full rounded-lg bg-sky-600 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-sky-700">Send message</button>
        </form>
      </div>
    </section>
  );
}

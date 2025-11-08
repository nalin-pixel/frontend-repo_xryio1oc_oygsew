import { useEffect } from 'react';

export default function AuthModal({ open, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/40 p-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="mb-4 text-center">
          <h3 className="text-xl font-semibold text-slate-800">Welcome back</h3>
          <p className="text-sm text-slate-600">Sign in or create an account</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.currentTarget).entries());
            alert(`Signed in as ${data.email}`);
            onClose();
          }}
          className="space-y-3"
        >
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" name="email" required className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-sky-200 focus:ring" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
            <input type="password" name="password" required className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-sky-200 focus:ring" />
          </div>
          <button className="w-full rounded-lg bg-sky-600 px-4 py-2 font-medium text-white transition hover:bg-sky-700">Continue</button>
        </form>
        <button onClick={onClose} className="mt-4 w-full text-sm text-slate-600 underline">Cancel</button>
      </div>
    </div>
  );
}

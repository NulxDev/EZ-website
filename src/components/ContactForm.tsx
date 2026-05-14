import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm({ minimal = false }: { minimal?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${minimal ? '' : 'bg-white p-8 md:p-10 shadow-xl'}`}>
      {!minimal && <h3 className="font-serif text-3xl mb-8">Parlez-nous de votre projet</h3>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Prénom</label>
          <input required type="text" className="w-full bg-zinc-50 border-b border-zinc-300 px-0 py-3 focus:outline-none focus:border-[var(--color-navy)] transition-colors" />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Nom</label>
          <input required type="text" className="w-full bg-zinc-50 border-b border-zinc-300 px-0 py-3 focus:outline-none focus:border-[var(--color-navy)] transition-colors" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Courriel</label>
        <input required type="email" className="w-full bg-zinc-50 border-b border-zinc-300 px-0 py-3 focus:outline-none focus:border-[var(--color-navy)] transition-colors" />
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Téléphone</label>
        <input required type="tel" className="w-full bg-zinc-50 border-b border-zinc-300 px-0 py-3 focus:outline-none focus:border-[var(--color-navy)] transition-colors" />
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Détails du projet</label>
        <textarea required rows={4} className="w-full bg-zinc-50 border-b border-zinc-300 px-0 py-3 focus:outline-none focus:border-[var(--color-navy)] transition-colors resize-none" placeholder="Décrivez brièvement votre projet de construction ou de rénovation..."></textarea>
      </div>

      <button
        type="submit"
        disabled={status !== 'idle'}
        className="w-full bg-[var(--color-navy)] text-white px-8 py-5 text-sm tracking-widest uppercase hover:bg-[var(--color-accent)] transition-colors flex items-center justify-center gap-3 disabled:opacity-70"
      >
        {status === 'idle' && <>Envoyer la demande <Send size={16} /></>}
        {status === 'submitting' && 'Envoi en cours...'}
        {status === 'success' && 'Message envoyé avec succès !'}
      </button>
      
      <p className="text-xs text-zinc-400 text-center mt-4">
        Vos informations resteront confidentielles.
      </p>
    </form>
  );
}

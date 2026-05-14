import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <section className="bg-[var(--color-navy)] text-white py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-texture"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Prêt à bâtir votre avenir ?</h2>
        <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
          Contactez-nous dès aujourd'hui pour discuter de votre projet de construction ou de rénovation. Notre équipe d'experts est prête à concrétiser votre vision.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[var(--color-accent)] text-white px-10 py-5 text-sm tracking-widest uppercase hover:bg-white hover:text-[var(--color-navy)] transition-colors duration-300"
        >
          Obtenir un devis gratuit
        </Link>
      </div>
    </section>
  );
}

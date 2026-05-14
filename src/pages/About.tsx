import { motion } from 'motion/react';
import CtaSection from '../components/CtaSection';
import { Target, Users, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[var(--color-secondary)] pt-24">
      {/* Page Header */}
      <div className="bg-[var(--color-primary)] text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Architectural plans"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl mb-6"
          >
            À Propos de <span className="italic text-[var(--color-accent-light)]">Nous</span>
          </motion.h1>
          <p className="text-zinc-300 max-w-2xl mx-auto tracking-wide">
            Votre partenaire de confiance pour des constructions résidentielles d'exception dans le Sud-Ouest du Québec.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Notre Histoire & Vision</h2>
            <div className="w-12 h-1 bg-[var(--color-accent)] mb-8"></div>
            <div className="space-y-6 text-zinc-600 leading-relaxed">
              <p>
                Basée à Lacolle au Québec, <strong>EZ Select Concept</strong> est née d'une vision simple : élever les standards de la construction résidentielle en combinant design de pointe, matériaux nobles et exécution sans faille.
              </p>
              <p>
                Depuis nos débuts, nous nous sommes spécialisés dans la réalisation de maisons haut de gamme, de rénovations majeures et de projets clés en main. Nous mettons un point d'honneur à offrir une transparence totale à nos clients, du premier coup de crayon jusqu'à la remise des clés.
              </p>
              <p>
                Notre équipe est composée d'artisans passionnés, de gestionnaires de projets rigoureux et de professionnels chevronnés qui partagent tous le même objectif : bâtir la maison de vos rêves, sans compromis sur la qualité.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
              alt="Construction site"
              className="w-full h-auto shadow-2xl rounded-sm"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">Nos Valeurs Fondamentales</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Les piliers sur lesquels repose chacune de nos réalisations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Target size={40} className="text-[var(--color-accent)] mb-6" />,
                title: "Excellence & Rigueur",
                desc: "Nous ne faisons aucun compromis sur la qualité des matériaux et le soin apporté aux finitions. Chaque détail compte."
              },
              {
                icon: <Users size={40} className="text-[var(--color-accent)] mb-6" />,
                title: "Proximité Client",
                desc: "Une communication claire, honnête et régulière. Vous êtes impliqué et informé à chaque étape de votre projet."
              },
              {
                icon: <ShieldCheck size={40} className="text-[var(--color-accent)] mb-6" />,
                title: "Confiance & Garantie",
                desc: "Respect des délais, respect des budgets et accréditations reconnues pour une tranquillité d'esprit absolue."
              }
            ].map((val, idx) => (
              <motion.div
                key={idx}
                className="text-center p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex justify-center">{val.icon}</div>
                <h3 className="font-serif text-2xl mb-4">{val.title}</h3>
                <p className="text-zinc-600">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}

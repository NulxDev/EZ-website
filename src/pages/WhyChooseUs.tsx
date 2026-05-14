import { motion } from 'motion/react';
import CtaSection from '../components/CtaSection';

const steps = [
  {
    num: "01",
    title: "Première Rencontre",
    desc: "Nous discutons de votre vision, de vos besoins, de votre budget et de l'échéancier visé."
  },
  {
    num: "02",
    title: "Élaboration des Plans",
    desc: "Nos architectes et designers travaillent sur des plans préliminaires jusqu'à l'approbation finale."
  },
  {
    num: "03",
    title: "Soumission Détaillée",
    desc: "Vous recevez un devis clair et transparent, sans mauvaises surprises."
  },
  {
    num: "04",
    title: "Construction & Suivi",
    desc: "Notre équipe réalise les travaux avec des mises à jour régulières et un suivi rigoureux sur le chantier."
  },
  {
    num: "05",
    title: "Livraison Finale",
    desc: "Inspection finale ensemble, remise des clés et garantie de qualité sur la réalisation."
  }
];

export default function WhyChooseUs() {
  return (
    <div className="bg-[var(--color-secondary)] pt-24">
      {/* Header */}
      <div className="py-24 px-4 bg-[var(--color-navy)] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-serif text-5xl md:text-6xl mb-6"
          >
            Pourquoi nous <span className="italic text-[var(--color-accent-light)]">choisir ?</span>
          </motion.h1>
          <p className="text-zinc-300">
            Construire ou rénover est un investissement majeur. Voici pourquoi vous pouvez nous faire confiance.
          </p>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl mb-4">Notre Processus Éprouvé</h2>
          <p className="text-zinc-500">Une méthode claire pour des résultats parfaits, à chaque fois.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              className="relative p-6 pt-12 border border-zinc-200 bg-white hover:border-[var(--color-accent)] transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="absolute -top-8 left-6 font-serif text-6xl text-zinc-100 group-hover:text-zinc-200 transition-colors font-bold select-none">{step.num}</span>
              <h3 className="font-serif text-xl mb-4 relative z-10">{step.title}</h3>
              <p className="text-zinc-600 text-sm relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="bg-white py-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl mb-8">La Garantie d'Excellence</h2>
            <div className="w-12 h-1 bg-[var(--color-accent)] mb-8"></div>
            <ul className="space-y-8">
              {[
                { title: "Transparence Budgétaire", desc: "Des soumissions détaillées et aucun frais caché. Si des imprévus surviennent, nous en discutons avant d'agir." },
                { title: "Respect des Délais", desc: "Nous établissons des échéanciers réalistes et mettons tout en œuvre pour les respecter rigoureusement." },
                { title: "Qualité Supérieure", desc: "Nous n'utilisons que des matériaux de premier choix et collaborons avec des sous-traitants fiables et certifiés." },
                { title: "Service Après-Vente", desc: "Notre engagement ne se termine pas à la remise des clés. Nous sommes là pour assurer la pérennité de notre travail." }
              ].map((item, idx) => (
                 <li key={idx}>
                    <h4 className="font-semibold text-lg text-[var(--color-navy)] mb-2">{item.title}</h4>
                    <p className="text-zinc-600">{item.desc}</p>
                 </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
              alt="Quality assurance" 
              className="w-full h-auto shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}

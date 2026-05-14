import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Ruler, Home as HomeIcon, Hammer } from 'lucide-react';
import CtaSection from '../components/CtaSection';

const features = [
  {
    icon: <HomeIcon size={32} className="text-[var(--color-accent)]" />,
    title: 'Construction Neuve',
    desc: 'Des maisons personnalisées conçues pour votre style de vie unique, bâties avec des matériaux de première qualité.',
  },
  {
    icon: <Hammer size={32} className="text-[var(--color-accent)]" />,
    title: 'Rénovation Majeure',
    desc: 'Transformez votre espace de vie actuel avec notre expertise en rénovation haut de gamme et agrandissements.',
  },
  {
    icon: <Ruler size={32} className="text-[var(--color-accent)]" />,
    title: 'Design sur Mesure',
    desc: 'Un accompagnement complet de la conception architecturale à la finition intérieure de votre projet.',
  },
];

export default function Home() {
  return (
    <div className="bg-[var(--color-secondary)]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Maison de luxe"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[var(--color-accent)] font-semibold tracking-[0.3em] uppercase text-sm md:text-base mb-6 block">EZ Select Concept</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8">
              Bâtissons Ensemble<br />Votre <span className="italic font-light">Prestige</span>
            </h1>
            <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
              Constructeur résidentiel haut de gamme dans la région de Lacolle et du Sud-Ouest du Québec. Excellence, durabilité et design.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/services"
                className="bg-[var(--color-accent)] text-white px-10 py-5 text-sm tracking-widest uppercase hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 w-full sm:w-auto"
              >
                Voir nos réalisations
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-10 py-5 text-sm tracking-widest uppercase hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 w-full sm:w-auto"
              >
                Obtenir un devis
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">L'Excellence dans chaque détail de votre <span className="italic text-[var(--color-accent)]">maison</span></h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mb-8"></div>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Fondée sur la passion de la belle ouvrage, <strong>EZ Select Concept</strong> est votre partenaire de confiance pour la construction et la rénovation résidentielle de prestige.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-10">
              Nous croyons que chaque maison doit refléter la personnalité de ses propriétaires tout en respectant les plus hauts standards de l'industrie. Notre approche clé en main vous garantit une tranquillité d'esprit totale.
            </p>
            <Link to="/a-propos" className="inline-flex items-center gap-2 text-[var(--color-navy)] font-semibold tracking-wider uppercase text-sm hover:text-[var(--color-accent)] transition-colors group">
              Découvrir notre histoire
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
              alt="Intérieur moderne"
              className="w-full h-auto rounded-sm shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl max-w-xs hidden md:block border-l-4 border-[var(--color-accent)]">
              <p className="font-serif text-2xl mb-2">15+ Ans</p>
              <p className="text-xs tracking-widest uppercase text-zinc-500">D'expertise en construction</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[var(--color-accent)] font-semibold tracking-[0.2em] uppercase text-sm block mb-4">Notre Expertise</span>
            <h2 className="font-serif text-4xl md:text-5xl">Solutions Sur Mesure</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="p-8 border border-zinc-100 hover:shadow-xl transition-shadow bg-zinc-50/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="font-serif text-2xl mb-4">{feature.title}</h3>
                <p className="text-zinc-600 mb-8 leading-relaxed">{feature.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-semibold text-[var(--color-navy)] group hover:text-[var(--color-accent)] transition-colors">
                  En savoir plus
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 px-4 bg-[var(--color-primary)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-texture"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[var(--color-accent)] font-semibold tracking-[0.2em] uppercase text-sm block mb-12">Témoignages</span>
          <p className="font-serif text-2xl md:text-4xl leading-relaxed italic mb-12">
            "L'équipe d'EZ Select Concept a transformé notre vision en réalité. Leur attention aux détails, leur professionnalisme sur le chantier et la qualité des finitions ont dépassé toutes nos attentes. Une vraie relation de confiance."
          </p>
          <div>
            <p className="uppercase tracking-widest text-sm font-semibold mb-1">Famille Tremblay</p>
            <p className="text-zinc-400 text-xs tracking-wider">Construction Neuve, Lacolle</p>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}

import { motion } from 'motion/react';
import CtaSection from '../components/CtaSection';
import { CheckCircle2 } from 'lucide-react';

const servicesList = [
  {
    title: "Construction Neuve",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    desc: "Bâtissez la maison qui vous ressemble vraiment. De la conception sur plan à l'aménagement final, notre équipe gère chaque étape de la construction de votre nouvelle propriété.",
    features: ["Plans personnalisés", "Gestion de projet complète", "Matériaux haut de gamme", "Respect des normes les plus strictes"]
  },
  {
    title: "Rénovation Majeure",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    desc: "Modernisez votre espace de vie. Que ce soit pour repenser un rez-de-chaussée complet, rénover une cuisine de chef ou transformer votre sous-sol.",
    features: ["Démolition sécuritaire", "Réorganisation de l'espace", "Cuisines et salles de bain", "Mise aux normes"]
  },
  {
    title: "Agrandissement & Ajout d'Étage",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    desc: "Votre famille s'agrandit ? Obtenez plus d'espace sans avoir à déménager. Nous réalisons des extensions latérales, arrière ou des ajouts d'étage qui s'intègrent parfaitement à votre maison.",
    features: ["Extensions sur mesure", "Ajout de garage", "Verrières et solariums", "Intégration architecturale harmonieuse"]
  }
];

export default function Services() {
  return (
    <div className="bg-[var(--color-secondary)] pt-24">
      <div className="bg-white text-[var(--color-primary)] py-24 px-4 text-center border-b border-zinc-200">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-6xl mb-6"
        >
          Nos <span className="italic text-[var(--color-accent)]">Services</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto text-zinc-600">
          Une expertise pointue et polyvalente pour répondre à tous vos besoins en matière d'habitation de prestige.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 space-y-32">
        {servicesList.map((service, index) => (
          <section key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: index % 2 !== 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-[400px] md:h-[500px] object-cover shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl mb-6">{service.title}</h2>
              <div className="w-12 h-1 bg-[var(--color-accent)] mb-6"></div>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[var(--color-accent)] flex-shrink-0" />
                    <span className="font-semibold text-zinc-800 tracking-wide uppercase text-xs">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </section>
        ))}
      </div>

      <CtaSection />
    </div>
  );
}

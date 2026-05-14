import { motion } from 'motion/react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[var(--color-secondary)] pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-24">
        
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl mb-6"
          >
            <span className="italic text-[var(--color-accent)]">Contactez-nous</span>
          </motion.h1>
          <p className="max-w-2xl mx-auto text-zinc-600 text-lg">
            Nous sommes prêts à prendre en charge votre projet. Que ce soit pour une simple question ou pour débuter les plans de votre nouvelle maison, écrivez-nous.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8 bg-white p-8 md:p-10 shadow-xl border-t-4 border-[var(--color-navy)]">
              <h3 className="font-serif text-3xl mb-8">Nos Coordonnées</h3>
              
              <div className="flex items-start gap-4">
                <MapPin className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-zinc-800 mb-1">Siège Social</h4>
                  <p className="text-zinc-600">4 Rue du Parc Industriel<br/>Lacolle, QC J0J 1J0</p>
                  <p className="text-xs text-zinc-400 mt-2">Plus Code: 3JFJ+PV Lacolle</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-zinc-800 mb-1">Téléphone</h4>
                  <p className="text-zinc-600">514-777-6717</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-zinc-800 mb-1">Courriel</h4>
                  <p className="text-zinc-600">contact@ezselectconcept.com</p>
                </div>
              </div>
            </div>

            {/* Google Map Embedded */}
            <div className="w-full h-[400px] shadow-xl bg-zinc-200">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1408.0614532889218!2d-73.3768407!3d45.0805175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9a31db84d7285%3A0xe5a3c2007f30df4!2s4%20Rue%20du%20Parc%20Industriel%2C%20Lacolle%2C%20QC%20J0J%201J0!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

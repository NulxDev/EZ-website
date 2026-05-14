import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-secondary)] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-white flex items-center justify-center text-[var(--color-navy)] rounded font-serif text-xl">
                EZ
              </div>
              <div className="flex flex-col text-white">
                <span className="font-serif font-semibold text-xl tracking-wider uppercase">Select Concept</span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Constructeur résidentiel de maisons haut de gamme dans la région de Lacolle et du Sud-Ouest du Québec. Excellence, confiance et transparence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-[var(--color-accent)] hover:border-transparent transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-[var(--color-accent)] hover:border-transparent transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Liens Rapides</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><Link to="/a-propos" className="hover:text-white transition-colors">À propos de nous</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Nos Services</Link></li>
              <li><Link to="/pourquoi-nous" className="hover:text-white transition-colors">Notre Processus</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contactez-nous</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Nos Services</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li>Construction Neuve</li>
              <li>Rénovation Majeure</li>
              <li>Agrandissement</li>
              <li>Gestion de Projet</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Contact</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                <span>4 Rue du Parc Industriel,<br />Lacolle, QC J0J 1J0</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--color-accent)] flex-shrink-0" />
                <span>514-777-6717</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--color-accent)] flex-shrink-0" />
                <span>contact@ezselectconcept.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} EZ Select Concept. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="hover:text-zinc-300">Politique de confidentialité</Link>
            <Link to="/mentions-legales" className="hover:text-zinc-300">Termes et conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

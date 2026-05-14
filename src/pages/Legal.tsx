export default function Legal() {
  return (
    <div className="bg-[var(--color-secondary)] pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-5xl mb-12">Mentions Légales & Confidentialité</h1>
        
        <div className="bg-white p-8 md:p-12 shadow-xl space-y-12">
          
          <section>
            <h2 className="font-serif text-2xl mb-4 text-[var(--color-navy)]">1. Informations de l'entreprise</h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Le site <strong>ezselectconcept.com</strong> est la propriété de l'entreprise EZ Select Concept, spécialisée dans la construction résidentielle et la rénovation.
            </p>
            <ul className="list-disc list-inside text-zinc-600 space-y-2">
              <li><strong>Nom :</strong> EZ Select Concept</li>
              <li><strong>Adresse :</strong> 4 Rue du Parc Industriel, Lacolle, QC J0J 1J0</li>
              <li><strong>Téléphone :</strong> 514-777-6717</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4 text-[var(--color-navy)]">2. Propriété intellectuelle</h2>
            <p className="text-zinc-600 leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, photographies, logos) est la propriété exclusive de EZ Select Concept, sauf mention contraire. Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4 text-[var(--color-navy)]">3. Politique de confidentialité</h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Nous prenons votre vie privée très au sérieux. Les informations recueillies via nos formulaires de contact sont destinées uniquement à un usage interne pour répondre à vos demandes de devis et gérer le suivi de vos projets.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Nous ne vendons, ni ne louons, ni ne partageons vos informations personnelles à des tiers à des fins de marketing. Vos données sont conservées de manière sécurisée.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4 text-[var(--color-navy)]">4. Cookies</h2>
            <p className="text-zinc-600 leading-relaxed">
              Ce site peut utiliser des cookies à des fins d'analyse de trafic (Google Analytics) dans le but d'améliorer l'expérience utilisateur et à des fins de SEO local (Lacolle, Montérégie, Québec). Vous pouvez configurer votre navigateur pour bloquer ces cookies.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4 text-[var(--color-navy)]">5. Modification des mentions légales</h2>
            <p className="text-zinc-600 leading-relaxed">
              EZ Select Concept se réserve le droit de modifier ces mentions légales à tout moment. Les utilisateurs seront invités à les consulter régulièrement.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

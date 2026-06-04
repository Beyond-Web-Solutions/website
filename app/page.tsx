import { BlogPosts } from "app/components/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Beyond Web Solutions | Maatwerksoftware, SaaS-platformen & Mobiele Apps",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Software die bedrijven vooruit helpt.
      </h1>
      <p className="mb-4">
        Bij Beyond Web Solutions ontwikkelen we maatwerksoftware,
        SaaS-platformen en mobiele applicaties die organisaties helpen slimmer
        te werken, processen te optimaliseren en duurzaam te groeien.
      </p>
      <p className="mb-4">
        Wij geloven dat software een krachtig hulpmiddel moet zijn om
        bedrijfsdoelen te realiseren. Daarom combineren we technische expertise
        met een pragmatische aanpak om oplossingen te bouwen die niet alleen
        vandaag werken, maar ook klaar zijn voor de toekomst. Schaalbaarheid,
        betrouwbaarheid en onderhoudbaarheid staan daarbij altijd centraal.
      </p>
      <p className="mb-4">
        Van interne bedrijfsapplicaties en mobiele apps tot complexe
        SaaS-platformen en digitale producten: we ontwikkelen software die
        aansluit op de unieke behoeften van iedere organisatie. Geen
        standaardoplossingen, maar technologie die is ontworpen om echte
        uitdagingen op te lossen en blijvende waarde te creëren.
      </p>
      <p className="mb-4">
        We werken nauw samen met onze klanten om ideeën te vertalen naar
        concrete oplossingen. Of het nu gaat om het ontwikkelen van een nieuw
        platform, het automatiseren van bedrijfsprocessen of het realiseren van
        innovatieve digitale producten, onze focus ligt altijd op kwaliteit,
        gebruiksvriendelijkheid en een solide technische basis.
      </p>

      <p className="mb-4">
        Bij Beyond Web Solutions bouwen we niet alleen software. We bouwen
        oplossingen die organisaties helpen efficiënter te werken, sneller te
        innoveren en met vertrouwen verder te groeien.
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}

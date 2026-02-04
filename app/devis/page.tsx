import { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
    title: "Demander un devis - KTP Location",
    description: "Obtenez rapidement un devis pour votre location de matériel BTP en Martinique.",
};

interface DevisPageProps {
    searchParams: {
        product?: string;
    };
}

export default function DevisPage({ searchParams }: DevisPageProps) {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Demande de Devis</h1>
            <p className="text-lg text-gray-600">
                Remplissez ce formulaire pour recevoir une estimation précise sous 24h.
                <br />
                Ou contactez-nous directement au <span className="font-bold text-primary">0596 00 00 00</span>.
            </p>
        </div>

        <QuoteForm defaultProductSlug={searchParams.product} />
      </div>
    </div>
  );
}

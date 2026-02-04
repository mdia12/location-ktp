import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight, CheckCircle2, Truck, Clock, ShieldCheck } from "lucide-react";

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="flex flex-col gap-12 pb-12">
      
      {/* Hero Section */}
      <section className="relative bg-secondary py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x800/1F2937/FFF?text=Chantier')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Louez le matériel adapté pour vos chantiers en <span className="text-primary">Martinique</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Plus de 200 références disponibles. Livraison rapide sur toute l'île.
            </p>
          </div>
          
          <div className="flex justify-center">
            <SearchBar />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
             {categories.map(cat => (
                <Link href={`/catalogue?category=${cat}`} key={cat}>
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-secondary transition-colors backdrop-blur-sm border border-white/20 text-sm font-medium">
                        {cat}
                    </span>
                </Link>
             ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Nos matériels phares</h2>
            <Link href="/catalogue">
                <Button variant="link" className="text-primary text-lg">
                    Tout voir <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      {/* Value Apposition */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Pourquoi choisir KTP Location ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                        <Truck className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Livraison sur site</h3>
                    <p className="text-gray-600">Nous livrons votre matériel directement sur vos chantiers, partout en Martinique, dans les meilleurs délais.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                         <ShieldCheck className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Matériel entretenu</h3>
                    <p className="text-gray-600">Parc récent et rigoureusement contrôlé avant chaque départ pour garantir votre sécurité et productivité.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                        <Clock className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Réactivité</h3>
                    <p className="text-gray-600">Une équipe disponible pour vous conseiller et intervenir rapidement en cas de besoin technique.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTO Block */}
      <section className="container mx-auto px-4">
         <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'un devis personnalisé ?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Nos experts sont à votre écoute pour vous proposer la solution la plus adaptée à votre chantier.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/devis">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold w-full sm:w-auto">
                            Demander un devis gratuit
                        </Button>
                    </Link>
                    <a href="https://wa.me/596000000" target="_blank" rel="noopener noreferrer">
                         <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
                             WhatsApp
                         </Button>
                    </a>
                </div>
             </div>
         </div>
      </section>

    </div>
  );
}

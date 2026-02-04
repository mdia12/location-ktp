import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Truck, Shield, Calendar, Phone, ArrowLeft } from "lucide-react";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: ProductPageProps) {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) return { title: 'Produit non trouvé' };
    
    return {
        title: `${product.name} | Location KTP`,
        description: product.shortDesc,
    };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb / Back */}
        <div className="mb-6">
            <Link href="/catalogue" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4 mr-1" /> Retour au catalogue
            </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-6 md:p-10 rounded-xl shadow-sm">
            {/* Gallery (Simple) */}
            <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 border">
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Thumbnails if any ... */}
            </div>

            {/* Info */}
            <div>
                <div className="mb-2">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">{product.category}</Badge>
                    {product.specs.energie && (
                         <Badge variant="outline" className="ml-2 text-gray-600 border-gray-300">{product.specs.energie}</Badge>
                    )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-lg text-gray-600 mb-6">{product.description}</p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8 bg-gray-50 p-4 rounded-lg">
                    {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex flex-col">
                            <span className="text-xs uppercase text-gray-500 font-semibold">{key}</span>
                            <span className="font-medium text-gray-900">{value}</span>
                        </div>
                    ))}
                </div>

                {/* Pricing Box */}
                <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-8">
                    <p className="text-sm text-gray-600 mb-2 font-medium">Tarifs indicatifs (HT)</p>
                    <div className="grid grid-cols-3 gap-4 text-center divide-x divide-gray-200">
                        <div>
                            <div className="text-2xl font-bold text-primary">{formatPrice(product.price.day)}</div>
                            <div className="text-xs text-gray-500">par jour</div>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-gray-800">{formatPrice(product.price.week)}</div>
                            <div className="text-xs text-gray-500">/j (semaine)</div>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-gray-800">{formatPrice(product.price.month)}</div>
                            <div className="text-xs text-gray-500">/j (mois)</div>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Link href={`/devis?product=${product.slug}`} className="flex-1">
                        <Button size="lg" className="w-full text-lg h-14 font-bold">
                            Demander un devis
                        </Button>
                    </Link>
                    <a href="https://wa.me/596000000" target="_blank" className="flex-1">
                        <Button size="lg" variant="outline" className="w-full text-lg h-14 gap-2">
                            <Phone className="h-5 w-5" /> Vérifier dispo
                        </Button>
                    </a>
                </div>

                {/* Features list */}
                <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" /> Maintenance incluse</li>
                    <li className="flex items-center"><Truck className="h-4 w-4 mr-2 text-blue-500" /> Livraison possible sous 24h</li>
                    <li className="flex items-center"><Shield className="h-4 w-4 mr-2 text-gray-500" /> Assurance bris de machine disponible</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

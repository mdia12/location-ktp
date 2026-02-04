import ProductCard from "@/components/ProductCard";
import FiltersSidebar from "@/components/FiltersSidebar";
import { products, Category, Energy, Traction } from "@/data/products";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Catalogue - KTP Location",
    description: "Découvrez notre large gamme de matériel de chantier à louer en Martinique.",
};

interface CataloguePageProps {
  searchParams: {
    category?: string;
    energy?: string;
    traction?: string;
    q?: string;
    city?: string; // Not used for filtering products currently
  };
}

export default function CataloguePage({ searchParams }: CataloguePageProps) {
  // Filter Logic
  let filteredProducts = [...products];

  if (searchParams.category) {
      filteredProducts = filteredProducts.filter(p => p.category === searchParams.category);
  }

  if (searchParams.energy) {
      filteredProducts = filteredProducts.filter(p => p.specs.energie === searchParams.energy);
  }

  if (searchParams.traction) {
      filteredProducts = filteredProducts.filter(p => p.specs.traction === searchParams.traction);
  }

  if (searchParams.q) {
      const query = searchParams.q.toLowerCase();
      filteredProducts = filteredProducts.filter(p => 
          p.name.toLowerCase().includes(query) || 
          p.tags.some(tag => tag.toLowerCase().includes(query)) ||
          p.category.toLowerCase().includes(query)
      );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="bg-white border-b py-8 mb-8">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-900">Catalogue</h1>
            <p className="text-gray-500 mt-2">
                {filteredProducts.length} matériel{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
                {searchParams.q && ` pour "${searchParams.q}"`}
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Desktop */}
            <aside className="hidden lg:block">
                <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                    <FiltersSidebar />
                </div>
            </aside>

            {/* Product Grid */}
            <div className="lg:col-span-3">
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-lg border border-dashed">
                        <p className="text-gray-500 text-lg">Aucun matériel ne correspond à vos critères.</p>
                        <a href="/catalogue" className="text-primary hover:underline mt-2 inline-block">Voir tout le catalogue</a>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}

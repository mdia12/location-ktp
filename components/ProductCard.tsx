import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ruler, Weight, Zap } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2">
            <Badge variant="secondary" className="bg-white/90 text-primary font-bold shadow-sm">
                {product.category}
            </Badge>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
          <Link href={`/catalogue/${product.slug}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">{product.shortDesc}</p>
        
        {/* Key Specs */}
        <div className="mt-4 flex gap-4 text-xs text-gray-600">
            {product.specs.poids && (
                <div className="flex items-center gap-1" title="Poids">
                    <Weight className="h-3.5 w-3.5" />
                    <span>{product.specs.poids}</span>
                </div>
            )}
            {product.specs.energie && (
                <div className="flex items-center gap-1" title="Énergie">
                    <Zap className="h-3.5 w-3.5" />
                    <span>{product.specs.energie}</span>
                </div>
            )}
            {/* Fallback spec if none of the above */}
            {!product.specs.poids && !product.specs.energie && (
                <div className="flex items-center gap-1">
                     <Ruler className="h-3.5 w-3.5" />
                     <span>Voir fiche</span>
                </div>
            )}
        </div>

        <div className="mt-auto pt-4 flex items-end justify-between border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500">À partir de</p>
            <p className="text-lg font-bold text-primary">{formatPrice(product.price.day)}<span className="text-sm font-normal text-gray-500">/j</span></p>
          </div>
          <Button size="sm" variant="ghost" className="text-primary hover:text-primary hover:bg-red-50 relative z-10">
            Voir <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

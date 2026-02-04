import Link from "next/link";
import { Menu, Phone, ShoppingCart, Search } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-primary">KTP</span>
            <span className="text-2xl font-bold text-secondary">Location</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/catalogue" className="hover:text-primary transition-colors">Tous nos matériels</Link>
          <Link href="/catalogue?category=Terrassement" className="hover:text-primary transition-colors">Terrassement</Link>
          <Link href="/catalogue?category=Élévation" className="hover:text-primary transition-colors">Élévation</Link>
          <Link href="/agences" className="hover:text-primary transition-colors">Nos Agences</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a href="tel:+596596000000" className="hidden lg:flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-primary">
            <Phone className="h-4 w-4" />
            <span>0596 00 00 00</span>
          </a>
          
          <Link href="/devis">
             <Button className="hidden sm:flex bg-primary hover:bg-red-700 text-white">
                Demander un devis
             </Button>
          </Link>

          {/* Mobile Menu Trigger (Placeholder) */}
          <button className="md:hidden p-2 text-gray-700">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

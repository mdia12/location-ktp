import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-primary">KTP</span>
                <span className="text-2xl font-bold text-white">Location</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Votre partenaire de confiance pour la location de matériel de chantier en Martinique depuis 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-primary">Accueil</Link></li>
              <li><Link href="/catalogue" className="hover:text-primary">Matériel</Link></li>
              <li><Link href="/agences" className="hover:text-primary">Nos agences</Link></li>
              <li><Link href="/devis" className="hover:text-primary">Demander un devis</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4">Gammes</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/catalogue?category=Terrassement" className="hover:text-primary">Terrassement</Link></li>
              <li><Link href="/catalogue?category=Élévation" className="hover:text-primary">Élévation</Link></li>
              <li><Link href="/catalogue?category=Compactage" className="hover:text-primary">Compactage</Link></li>
              <li><Link href="/catalogue?category=Manutention" className="hover:text-primary">Manutention</Link></li>
              <li><Link href="/catalogue?category=Outillage" className="hover:text-primary">Outillage</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nous contacter</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>ZI La Lézarde, 97232 Le Lamentin</span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>0596 00 00 00</span>
              </li>
              <li className="flex gap-2">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>contact@ktp-location.MQ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 KTP Location. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-white">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

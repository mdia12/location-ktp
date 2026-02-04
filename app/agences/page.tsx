import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image"; // Placeholder for map

export const metadata: Metadata = {
    title: "Nos Agences - KTP Location",
    description: "Retrouvez nos agences de location de matériel en Martinique : Lamentin, Ducos...",
};

const agencies = [
    {
        name: 'Agence Centrale - Le Lamentin',
        address: 'ZI La Lézarde, 97232 Le Lamentin',
        phone: '0596 00 00 00',
        hours: 'Lun-Ven: 06h30 - 17h00 / Sam: 07h00 - 12h00',
        mapUrl: 'https://placehold.co/800x400/E30613/white?text=Carte+Martinique+Agence+Lamentin'
    },
    {
        name: 'Dépôt Sud - Ducos',
        address: 'Zone Industrielle de la Marie, 97224 Ducos',
        phone: '0596 00 01 01',
        hours: 'Lun-Ven: 07h00 - 16h00',
        mapUrl: 'https://placehold.co/800x400/E30613/white?text=Carte+Martinique+Dépôt+Ducos'
    }
];

export default function AgencesPage() {
    return (
        <div className="bg-white min-h-screen pb-12">
            <div className="bg-secondary py-12 text-center text-white">
                <h1 className="text-3xl font-bold mb-4">Nos Agences en Martinique</h1>
                <p className="max-w-xl mx-auto text-gray-300">
                    Proche de vos chantiers, KTP Location vous accueille dans ses 2 points de vente stratégiques.
                </p>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* List */}
                    <div className="space-y-8">
                        {agencies.map((agence, idx) => (
                            <div key={idx} className="bg-gray-50 border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{agence.name}</h3>
                                <div className="space-y-3 text-gray-600">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>{agence.address}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 text-primary shrink-0" />
                                        <a href={`tel:${agence.phone}`} className="hover:text-primary underline">{agence.phone}</a>
                                    </div>
                                     <div className="flex items-start gap-3">
                                        <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>{agence.hours}</span>
                                    </div>
                                </div>
                                <div className="mt-6 flex gap-3">
                                    <Button variant="outline" className="flex-1">Itinéraire</Button>
                                    <Button className="flex-1">Appeler</Button>
                                </div>
                            </div>
                        ))}

                        {/* Callback Form (Mini) */}
                        <div className="bg-primary/5 p-6 rounded-xl mt-8">
                            <h3 className="font-bold text-lg mb-2">Être rappelé par un conseiller</h3>
                            <p className="text-sm text-gray-600 mb-4">Laissez-nous votre numéro, on vous rappelle dans les 10 min.</p>
                            <form className="flex gap-2">
                                <Input placeholder="0696..." className="bg-white" />
                                <Button type="submit">OK</Button>
                            </form>
                        </div>
                    </div>

                    {/* Map Visual */}
                    <div>
                         <div className="sticky top-24 rounded-xl overflow-hidden shadow-lg border-4 border-white h-[600px] bg-gray-200 relative">
                            <Image 
                                src="https://placehold.co/800x800/e2e8f0/94a3b8?text=CARTE+INTERACTIVE+MARTINIQUE" 
                                alt="Carte des agences"
                                fill
                                className="object-cover"
                            />
                            {/* Fake pins */}
                            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <MapPin className="h-10 w-10 text-primary drop-shadow-md animate-bounce" />
                                <span className="bg-white px-2 py-1 rounded text-xs font-bold shadow absolute left-1/2 -translate-x-1/2 top-10 whitespace-nowrap">Lamentin</span>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8">
                                <MapPin className="h-10 w-10 text-primary drop-shadow-md" />
                                <span className="bg-white px-2 py-1 rounded text-xs font-bold shadow absolute left-1/2 -translate-x-1/2 top-10 whitespace-nowrap">Ducos</span>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

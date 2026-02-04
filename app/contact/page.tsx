import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
    title: "Contact - KTP Location",
    description: "Contactez KTP Location pour toute question sur la location de matériel BTP.",
};

export default function ContactPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="text-3xl font-bold text-center mb-10">Contactez-nous</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Info */}
                    <div className="bg-white p-8 rounded-xl shadow-sm space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Nos Coordonnées</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full text-primary shrink-0">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-500">Téléphone</p>
                                        <p className="text-lg font-bold text-gray-900">0596 00 00 00</p>
                                        <p className="text-xs text-green-600">Dispo 24/7 pour urgences</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full text-primary shrink-0">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-500">Email</p>
                                        <p className="text-lg font-bold text-gray-900">contact@ktp-location.mq</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full text-primary shrink-0">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-500">Adresse Siège</p>
                                        <p className="text-lg font-bold text-gray-900">ZI La Lézarde</p>
                                        <p className="text-gray-600">97232 Le Lamentin, Martinique</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* General Form */}
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold mb-6">Envoyer un message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Prénom</label>
                                    <Input placeholder="Jean" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Nom</label>
                                    <Input placeholder="Dupont" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input type="email" placeholder="jean@mail.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                            </div>
                            <Button className="w-full font-bold">Envoyer</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

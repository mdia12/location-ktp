"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"; 
// I need checkbox from ui or native. Let's make a quick one inline or just use native type="checkbox" styled.
import { Loader2, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

// Schema (matching API)
const formSchema = z.object({
  productSlug: z.string().optional(),
  startDate: z.string().min(1, "Date de début requise"),
  endDate: z.string().min(1, "Date de fin requise"),
  location: z.string().min(2, "Ville ou adresse requise"),
  delivery: z.boolean().default(false),
  driver: z.boolean().default(false),
  name: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(8, "Téléphone requis"),
  company: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface QuoteFormProps {
    defaultProductSlug?: string;
}

const QuoteForm = ({ defaultProductSlug }: QuoteFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    
    // Calculate default dates (tomorrow)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            productSlug: defaultProductSlug || "",
            startDate: tomorrowStr,
            delivery: true,
            driver: false,
        }
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/devis', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            
            if (response.ok) {
                setIsSuccess(true);
                // Optional: Scroll to top
                window.scrollTo(0, 0);
            } else {
                alert("Une erreur est survenue. Merci de réessayer.");
            }
        } catch (e) {
             console.error(e);
             alert("Erreur de connexion.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-in fade-in">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">Demande envoyée !</h2>
                <p className="text-green-700 mb-6">
                    Nous avons bien reçu votre demande de devis. Notre équipe commerciale vous recontactera sous 24h avec une offre personnalisée.
                </p>
                <Button onClick={() => window.location.href = '/catalogue'} variant="outline" className="bg-white">
                    Retour au catalogue
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Project Details */}
            <div className="bg-white p-6 rounded-lg shadow-sm border space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">Le chantier</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Matériel souhaité</label>
                        <select 
                            {...register("productSlug")}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option value="">-- Sélectionnez un matériel --</option>
                            {products.map(p => (
                                <option key={p.slug} value={p.slug}>{p.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                         <label className="text-sm font-medium">Lieu du chantier (Ville)</label>
                         <Input {...register("location")} placeholder="Ex: Ducos, Fort-de-France..." />
                         {errors.location && <p className="text-red-500 text-xs">{errors.location.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <label className="text-sm font-medium">Date de début</label>
                        <Input type="date" {...register("startDate")} />
                        {errors.startDate && <p className="text-red-500 text-xs">{errors.startDate.message}</p>}
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-medium">Date de fin</label>
                        <Input type="date" {...register("endDate")} />
                        {errors.endDate && <p className="text-red-500 text-xs">{errors.endDate.message}</p>}
                     </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-2">
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="delivery" {...register("delivery")} className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                        <label htmlFor="delivery" className="text-sm text-gray-700 cursor-pointer">Je souhaite la livraison sur chantier</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="driver" {...register("driver")} className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                        <label htmlFor="driver" className="text-sm text-gray-700 cursor-pointer">J'ai besoin d'un chauffeur</label>
                    </div>
                </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white p-6 rounded-lg shadow-sm border space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">Vos coordonnées</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Nom complet</label>
                        <Input {...register("name")} placeholder="Jean Dupont" />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Société (Optionnel)</label>
                        <Input {...register("company")} placeholder="KTP Construction" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email professionnel</label>
                        <Input type="email" {...register("email")} placeholder="jean@exemple.com" />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>
                     <div className="space-y-2">
                        <label className="text-sm font-medium">Téléphone</label>
                        <Input type="tel" {...register("phone")} placeholder="0696 00 00 00" />
                        {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                     <label className="text-sm font-medium">Message ou précisions</label>
                     <textarea 
                        {...register("message")}
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Détails sur l'accès, horaires spécifiques..."
                     />
                </div>
            </div>

            <Button type="submit" size="lg" className="w-full text-lg font-bold" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande de devis"}
            </Button>
            <p className="text-center text-xs text-gray-500 mt-4">
                En soumettant ce formulaire, vous acceptez d'être recontacté par nos services. Vos données restent confidentielles.
            </p>
        </form>
    );
};

export default QuoteForm;

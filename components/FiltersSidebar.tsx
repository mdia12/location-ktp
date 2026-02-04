"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import { Product, Category, Energy, Traction } from "@/data/products";
import { Button } from "./ui/button";

const CATEGORIES: Category[] = ['Terrassement', 'Élévation', 'Compactage', 'Transport', 'Outillage', 'Manutention', 'Énergie'];
const ENERGIES: Energy[] = ['Diesel', 'Électrique', 'Hybride', 'Essence'];
const TRACTIONS: Traction[] = ['Chenilles', 'Roues'];

const FiltersSidebar = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            
            // Toggle logic for multiple selection could be implemented, keeping it simple (single select per filter or replace)
            // For categories, usually single select or multiple. Let's do simple replace for now.
            if (params.get(name) === value) {
                params.delete(name);
            } else {
                params.set(name, value);
            }
    
            return params.toString();
        },
        [searchParams]
    );

    const isSelected = (name: string, value: string) => searchParams.get(name) === value;

    const navigate = (name: string, value: string) => {
        router.push(pathname + '?' + createQueryString(name, value));
    };

    const clearFilters = () => {
        router.push(pathname);
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Filtres</h3>
                {searchParams.toString() && (
                    <Button variant="link" onClick={clearFilters} className="text-sm p-0 h-auto text-primary">
                        Effacer
                    </Button>
                )}
            </div>

            {/* Categories */}
            <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-500">Catégorie</h4>
                <div className="space-y-2">
                    {CATEGORIES.map(cat => (
                        <div key={cat} className="flex items-center">
                            <input 
                                type="checkbox" 
                                id={`cat-${cat}`} 
                                checked={isSelected('category', cat)}
                                onChange={() => navigate('category', cat)}
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor={`cat-${cat}`} className="ml-2 text-sm text-gray-700 cursor-pointer select-none">
                                {cat}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Énergie */}
            <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-500">Énergie</h4>
                <div className="space-y-2">
                    {ENERGIES.map(energy => (
                        <div key={energy} className="flex items-center">
                            <input 
                                type="checkbox" 
                                id={`en-${energy}`} 
                                checked={isSelected('energy', energy)}
                                onChange={() => navigate('energy', energy)}
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor={`en-${energy}`} className="ml-2 text-sm text-gray-700 cursor-pointer select-none">
                                {energy}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
             {/* Traction */}
             <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-500">Traction</h4>
                <div className="space-y-2">
                    {TRACTIONS.map(trac => (
                        <div key={trac} className="flex items-center">
                            <input 
                                type="checkbox" 
                                id={`tr-${trac}`} 
                                checked={isSelected('traction', trac)}
                                onChange={() => navigate('traction', trac)}
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor={`tr-${trac}`} className="ml-2 text-sm text-gray-700 cursor-pointer select-none">
                                {trac}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FiltersSidebar;

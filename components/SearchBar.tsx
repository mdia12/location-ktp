"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [city, setCity] = useState("");
    // Dates placeholders - in real app, use a date range picker component
    const [startDate, setStartDate] = useState("");
    
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (query) params.set("q", query);
        if (city) params.set("city", city);
        
        router.push(`/catalogue?${params.toString()}`);
    };

    return (
        <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 md:hidden">Trouvez votre matériel</h2>
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                
                {/* What */}
                <div className="flex-1 relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <Search className="h-5 w-5" />
                    </div>
                    <Input 
                        placeholder="Que souhaitez-vous louer ?" 
                        className="pl-10 h-12 text-base"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                 {/* Where */}
                 <div className="flex-1 md:max-w-[200px] relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <MapPin className="h-5 w-5" />
                    </div>
                    <Input 
                        placeholder="Ville ou CP" 
                        className="pl-10 h-12 text-base"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>

                {/* When (Simplified) */}
                <div className="flex-1 md:max-w-[200px] relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <Calendar className="h-5 w-5" />
                    </div>
                    <Input 
                        type="date"
                        className="pl-10 h-12 text-base text-gray-600"
                        title="Date de début"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                <Button type="submit" size="lg" className="h-12 px-8 bg-primary hover:bg-red-700 text-white font-bold">
                    Rechercher
                </Button>
            </form>
        </div>
    );
};

export default SearchBar;

export type Category = 'Terrassement' | 'Élévation' | 'Compactage' | 'Transport' | 'Outillage' | 'Manutention' | 'Énergie';
export type Energy  = 'Diesel' | 'Électrique' | 'Hybride' | 'Essence';
export type Traction = 'Chenilles' | 'Roues' | 'Autre';

export interface ProductSpecs {
  poids?: string;
  profondeur?: string; // profondeur d'excavation
  largeur?: string;
  energie?: Energy;
  traction?: Traction;
  capacite?: string;
  puissance?: string;
  hauteur?: string; // hauteur de travail
}

export interface Product {
    slug: string;
    id: string; // for easier listing if needed
    name: string;
    category: Category;
    shortDesc: string;
    description: string;
    images: string[];
    price: {
        day: number;
        week: number; // price per day for a week
        month: number; // price per day for a month
    };
    specs: ProductSpecs;
    tags: string[];
    featured?: boolean;
}

export const products: Product[] = [
    // Terrassement - Mini-pelles
    {
        slug: 'mini-pelle-1t',
        id: 'mp-1t',
        name: 'Mini-pelle 1T',
        category: 'Terrassement',
        shortDesc: 'Idéale pour les espaces restreints et petits travaux de terrassement.',
        description: 'Cette mini-pelle de 1 tonne est parfaite pour les travaux dans des espaces exigus. Sa largeur réduite lui permet de passer par des portes standards. Idéale pour le creusement de tranchées, l\'aménagement paysager et les petits travaux de démolition.',
        images: ['https://images.pexels.com/photos/14846286/pexels-photo-14846286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        price: { day: 105, week: 85, month: 65 },
        specs: { poids: '1.2t', profondeur: '1.8m', largeur: '75cm', energie: 'Diesel', traction: 'Chenilles', puissance: '10kW' },
        tags: ['mini-pelle', 'terrassement', 'chenilles'],
        featured: true
    },
    {
        slug: 'mini-pelle-2-5t',
        id: 'mp-25t',
        name: 'Mini-pelle 2.5T',
        category: 'Terrassement',
        shortDesc: 'Polyvalente et puissante pour les chantiers moyens.',
        description: 'La mini-pelle 2.5T offre un excellent compromis entre puissance et encombrement. Elle est adaptée aux travaux de terrassement, de nivellement et de chargement. Cabine confortable et commandes précises.',
        images: ['https://images.pexels.com/photos/14846286/pexels-photo-14846286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        price: { day: 160, week: 130, month: 100 },
        specs: { poids: '2.5t', profondeur: '2.8m', largeur: '150cm', energie: 'Diesel', traction: 'Chenilles', puissance: '18kW' },
        tags: ['mini-pelle', 'terrassement', 'chenilles'],
        featured: true
    },
    {
        slug: 'mini-pelle-5t',
        id: 'mp-5t',
        name: 'Mini-pelle 5T',
        category: 'Terrassement',
        shortDesc: 'Grande capacité pour les travaux de VRD et fondations.',
        description: 'Machine robuste pour les travaux de plus grande envergure. Excellente stabilité et force d\'arrachement.',
        images: ['https://images.pexels.com/photos/14846286/pexels-photo-14846286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        price: { day: 220, week: 180, month: 140 },
        specs: { poids: '5t', profondeur: '3.9m', largeur: '190cm', energie: 'Diesel', traction: 'Chenilles', puissance: '30kW' },
        tags: ['mini-pelle', 'terrassement', 'chenilles']
    },
    
    // Terrassement - Chargeuses & Dumpers
    {
        slug: 'dumper-1t',
        id: 'dup-1t',
        name: 'Dumper 1T',
        category: 'Terrassement',
        shortDesc: 'Transport de matériaux sur chantier facile et rapide.',
        description: 'Mini-tombereau de 1 tonne, idéal pour évacuer la terre ou transporter des matériaux (sable, gravier) sur des terrains difficiles.',
        images: ['https://images.pexels.com/photos/15859690/pexels-photo-15859690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        price: { day: 80, week: 65, month: 50 },
        specs: { poids: '1.2t', capacite: '1000kg', largeur: '100cm', energie: 'Diesel', traction: 'Roues' },
        tags: ['dumper', 'transport', 'roues']
    },
    {
        slug: 'chargeuse-articulee',
        id: 'charg-art',
        name: 'Chargeuse Articulée',
        category: 'Terrassement',
        shortDesc: 'Pour le chargement et le déplacement de matériaux en vrac.',
        description: 'Chargeuse compacte articulée, très maniable. Idéale pour reprendre des tas et charger des camions.',
        images: ['https://images.pexels.com/photos/28753109/pexels-photo-28753109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        price: { day: 190, week: 150, month: 120 },
        specs: { poids: '2.5t', capacite: '800L', largeur: '160cm', energie: 'Diesel', traction: 'Roues' },
        tags: ['chargeuse', 'terrassement']
    },

    // Compactage
    {
        slug: 'plaque-vibrante',
        id: 'comp-plaque',
        name: 'Plaque Vibrante 80kg',
        category: 'Compactage',
        shortDesc: 'Compactage de sable, gravier et enrobé.',
        description: 'Plaque vibrante maniable pour les petites surfaces et les tranchées. Livrée avec tapis caoutchouc pour pavés.',
        images: ['https://images.pexels.com/photos/11973740/pexels-photo-11973740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        price: { day: 45, week: 35, month: 25 },
        specs: { poids: '80kg', energie: 'Essence', largeur: '40cm' },
        tags: ['plaque vibrante', 'compactage', 'outillage']
    },
    {
        slug: 'rouleau-tandem',
        id: 'comp-rouleau',
        name: 'Rouleau Tandem 1.2M',
        category: 'Compactage',
        shortDesc: 'Compactage d\'allées, parkings et terrains de sport.',
        description: 'Rouleau vibrant double bille pour un compactage efficace des sols et enrobés.',
        images: ['https://images.pexels.com/photos/15456924/pexels-photo-15456924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        price: { day: 150, week: 120, month: 90 },
        specs: { poids: '2.5t', largeur: '120cm', energie: 'Diesel', traction: 'Roues' },
        tags: ['rouleau', 'compactage']
    },

    // Élévation
    {
        slug: 'nacelle-ciseaux-10m',
        id: 'elev-cis-10',
        name: 'Nacelle Ciseaux 10m',
        category: 'Élévation',
        shortDesc: 'Travail en hauteur vertical sur sol stable.',
        description: 'Nacelle électrique silencieuse pour travaux intérieurs ou extérieurs sur sol plat. Grande plateforme extensible.',
        images: ['https://images.pexels.com/photos/13532460/pexels-photo-13532460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        price: { day: 110, week: 90, month: 70 },
        specs: { hauteur: '10m', poids: '2.5t', energie: 'Électrique', capacite: '230kg' },
        tags: ['nacelle', 'elevation', 'electrique'],
        featured: true
    },
    {
        slug: 'nacelle-articulee-16m',
        id: 'elev-art-16',
        name: 'Nacelle Articulée 16m',
        category: 'Élévation',
        shortDesc: 'Grande portée et déport pour accès difficiles.',
        description: 'Nacelle diesel tout-terrain 4x4. Idéale pour les travaux de charpente, élagage ou bardage.',
        images: ['https://images.pexels.com/photos/27330792/pexels-photo-27330792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        price: { day: 250, week: 200, month: 160 },
        specs: { hauteur: '16m', poids: '7t', energie: 'Diesel', capacite: '230kg', traction: 'Roues' },
        tags: ['nacelle', 'elevation']
    },

    // Manutention
    {
        slug: 'chariot-telescopique-6m',
        id: 'manu-tel-6',
        name: 'Chariot Téléscopique 6m',
        category: 'Manutention',
        shortDesc: 'Levage et manutention sur chantier.',
        description: 'Chariot polyvalent pour décharger les camions et approvisionner le chantier en hauteur.',
        images: ['https://images.pexels.com/photos/34132984/pexels-photo-34132984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        price: { day: 180, week: 145, month: 110 },
        specs: { hauteur: '6m', capacite: '2.5t', energie: 'Diesel', traction: 'Roues' },
        tags: ['chariot', 'manutention', 'levage'],
        featured: true
    },

    // Outillage / Énergie
    {
        slug: 'groupe-electro-5kva',
        id: 'nrj-grp-5',
        name: 'Groupe Électrogène 5kVA',
        category: 'Énergie',
        shortDesc: 'Alimentation électrique autonome monophasée.',
        description: 'Groupe essence portable pour alimenter l\'outillage electroportatif.',
        images: ['https://images.pexels.com/photos/35042792/pexels-photo-35042792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        price: { day: 40, week: 30, month: 20 },
        specs: { puissance: '5kVA', energie: 'Essence', poids: '80kg' },
        tags: ['groupe', 'energie', 'outillage']
    },
    {
        slug: 'marteau-piqueur-electrique',
        id: 'out-mar-pic',
        name: 'Brise-béton Électrique',
        category: 'Outillage',
        shortDesc: 'Démolition de dalle béton et chape.',
        description: 'Marteau piqueur puissant 30kg sur chariot. Alimentation 230V.',
        images: ['https://images.pexels.com/photos/29274508/pexels-photo-29274508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        price: { day: 35, week: 25, month: 15 },
        specs: { puissance: '2000W', poids: '30kg', energie: 'Électrique' },
        tags: ['marteau', 'demolition', 'outillage']
    }
];

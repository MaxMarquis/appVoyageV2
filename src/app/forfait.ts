export interface Forfait {
  id: number;
  destination: string;
  villeDepart: string;
  hotel: Hotel;
  dateDepart: string;
  dateRetour: string;
  prix: number;
  rabais: number;
  vedette: boolean;
}

export interface Hotel {
  nom: string;
  coordonnees: string;
  nombreEtoiles: number;
  nombreChambres: number;
  caracteristiques: [string, string, string];
}

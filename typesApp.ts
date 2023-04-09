export interface Movie {
    type: "film" | "serie";
    id: number;
    name: string;
    image1: string;
    year: string;
    price: number;
    description: string;
    favorite: boolean;
  }
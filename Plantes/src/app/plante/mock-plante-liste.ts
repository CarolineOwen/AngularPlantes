import { Plante } from "./plante";

export const PLANTES: Plante[] = [
  {
    id: 1,
    name: 'Rose',
    created: new Date(),
    exposition: 'mi-ombre',
    picture: "./assets/rose.jpg",
    types: ['Fleur', 'Beau'],
  },
  {
    id: 2,
    name: 'Palmier',
    created: new Date(),
    exposition: 'soleil',
    picture: './assets/palmier.jpg',
    types: ['Arbre', 'Chaleur'],
  },
  {
    id: 3,
    name: 'Lys',
    created: new Date(),
    exposition: 'mi-ombre',
    picture: './assets/lys.jpg',
    types: ['Fleur', 'Beau'],
  },
];
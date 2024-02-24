import { IArtikel } from "./Iilste";

export const artikel:IArtikel[] = [
  {
    id: 1,
    name: 'Milch',
    img: 'https://cdn.pixabay.com/photo/2017/07/05/15/41/milk-2474993_1280.jpg',
    beschreibung:
      'Frische Kuhmilch, ideal für den täglichen Verzehr oder zum Kochen und Backen.',
    preis: 2,
    verfuegbar: true,
  },
  {
    id: 2,
    name: 'Bio-Hähnchenbrust',
    img: 'https://cdn.pixabay.com/photo/2017/10/22/21/53/food-2879410_960_720.jpg',
    beschreibung:
      ' Zarte Hähnchenbrustfilets aus biologischer Haltung, ohne Antibiotika oder Hormone. Perfekt für gesunde Mahlzeiten. ',
    preis: 12,
    verfuegbar: true,
  },
  {
    id: 3,
    name: 'Bio-Quinoa',
    img: 'https://cdn.pixabay.com/photo/2016/11/13/22/00/cinnamon-1822178_1280.jpg',
    beschreibung:
      'Hochwertiges Bio-Quinoa, reich an Protein und Ballaststoffen. Vielseitig verwendbar für Salate, Beilagen oder als Hauptgericht. ',
    preis: 4,
    verfuegbar: false,
  },
  {
    id: 4,
    name: 'Vollkornbrot',
    img: 'https://cdn.pixabay.com/photo/2016/07/11/18/42/bread-1510298_1280.jpg',
    beschreibung:
      ' Frisch gebackenes Vollkornbrot, reich an Ballaststoffen und Nährstoffen. Perfekt für Sandwiches oder als Beilage zu Suppen und Salaten.',
    preis: 3,
    verfuegbar: false,
  },
  {
    id: 5,
    name: 'Naturjoghurt',
    img: 'https://cdn.pixabay.com/photo/2017/12/14/02/41/yogurt-3018152_960_720.jpg',
    beschreibung:
      ' Griechischer Naturjoghurt ohne Zusatz von Zucker oder Konservierungsstoffen. Reich an Protein und probiotischen Kulturen, perfekt für Müsli, Smoothies oder als Basis für Dips und Saucen. ',
    preis: 2,
    verfuegbar: true,
  },
  {
    id: 6,
    name: 'Instant-Kaffee',
    img: 'https://cdn.pixabay.com/photo/2020/05/15/16/53/coffee-5174330_1280.jpg',
    beschreibung:
      'Hochwertiger Instant-Kaffee, perfekt für einen schnellen Energieschub am Morgen oder unterwegs. Einfach mit heißem Wasser zuzubereiten.',
    preis: 6,
    verfuegbar: true,
  },
];

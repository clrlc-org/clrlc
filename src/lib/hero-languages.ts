// Languages shown on the homepage globe.
// `spokenIn` is the text shown after "Spoken in" on the card.
// `markers` are [latitude, longitude] pairs. The first marker is where the globe turns to.
// Add a language by adding an entry; the globe, pills and card read from this list.

export interface HeroLanguage {
  name: string;
  spokenIn: string;
  markers: [number, number][];
}

export const HERO_LANGUAGES: HeroLanguage[] = [
  {
    name: "Yoruba",
    spokenIn: "Nigeria, Benin and Togo",
    markers: [[7.38, 3.94], [7.5, 2.6], [7.53, 1.13]],
  },
  {
    name: "Hausa",
    spokenIn:
      "Nigeria and Niger, and widely used in Ghana, Cameroon, Chad, Benin, Togo and Sudan",
    markers: [[12.0, 8.52], [13.5, 7.1]],
  },
  { name: "Igbo", spokenIn: "Nigeria", markers: [[6.45, 7.5]] },
  { name: "Igala", spokenIn: "Nigeria", markers: [[7.1, 6.73]] },
  {
    name: "Ewe",
    spokenIn: "Ghana, Togo and Benin",
    markers: [[6.6, 0.47], [6.17, 1.23], [6.9, 1.7]],
  },
  { name: "Twi/Akan", spokenIn: "Ghana", markers: [[6.69, -1.62]] },
  {
    name: "Fon",
    spokenIn: "Benin, Togo and Nigeria",
    markers: [[7.18, 1.99], [6.9, 1.45], [6.45, 2.88]],
  },
  { name: "Bambara", spokenIn: "Mali", markers: [[12.64, -8.0]] },
  {
    name: "Swahili",
    spokenIn: "Tanzania, Kenya, Uganda, DR Congo, Rwanda, Burundi, Mozambique, Comoros and more",
    markers: [
      [-6.79, 39.21],
      [-4.04, 39.67],
      [0.35, 32.58],
      [-1.68, 29.22],
      [-12.97, 40.5],
    ],
  },
  { name: "Kikuyu", spokenIn: "Kenya", markers: [[-0.42, 36.95]] },
  {
    name: "Kinyarwanda",
    spokenIn: "Rwanda, Uganda and DR Congo",
    markers: [[-1.94, 30.06], [-1.28, 29.69], [-1.5, 29.0]],
  },
  {
    name: "Lingala",
    spokenIn: "DR Congo and Republic of Congo",
    markers: [[-4.32, 15.31], [0.0, 16.0]],
  },
  {
    name: "Wolof",
    spokenIn: "Senegal, The Gambia and Mauritania",
    markers: [[14.69, -17.44], [13.45, -16.58], [16.51, -15.8]],
  },
  {
    name: "Oromo",
    spokenIn: "Ethiopia and Kenya",
    markers: [[7.5, 39.0], [3.52, 39.05]],
  },
  { name: "Luganda", spokenIn: "Uganda", markers: [[0.35, 32.58]] },
  {
    name: "isiZulu",
    spokenIn: "South Africa and Lesotho",
    markers: [[-29.0, 31.0], [-29.6, 28.2]],
  },
  {
    name: "Tamazight (Amazigh)",
    spokenIn: "Morocco, Algeria, Libya, Tunisia, Niger and Mali",
    markers: [
      [31.0, -7.0],
      [36.5, 4.5],
      [32.0, 12.0],
      [33.8, 10.9],
      [18.0, 8.0],
      [18.0, 1.0],
    ],
  },
];

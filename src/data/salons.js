import salon1 from "../assets/images/salon1.png";
import salon2 from "../assets/images/salon2.png";
import salon3 from "../assets/images/salon3.png";
import salon4 from "../assets/images/salon4.png";
import salon5 from "../assets/images/salon5.png";
import salon6 from "../assets/images/salon6.png";

const salons = [
  {
    id: 1,
    name: "Beauty Salon Lux",
    city: "București",
    description: "Servicii premium de coafură și manichiură",
    image: salon1,
    rating: 4.5,
    services: ["coafor", "manichiură", "pedichiură", "vopsit"],
  },
  {
    id: 2,
    name: "Relax Spa",
    city: "Cluj-Napoca",
    description: "Spa și masaj relaxant",
    image: salon2,
    rating: 4.8,
    services: ["masaj", "saună", "împachetări", "spa"],
  },
  {
    id: 3,
    name: "Hair & Style",
    city: "București",
    description: "Tunsori moderne și vopsit",
    image: salon3,
    rating: 4.2,
    services: ["tuns", "coafor", "vopsit", "styling"],
  },
  {
    id: 4,
    name: "Wellness Center",
    city: "Timișoara",
    description: "Masaj, saună și tratamente faciale",
    image: salon4,
    rating: 4.7,
    services: ["masaj", "saună", "tratamente faciale"],
  },
  {
    id: 5,
    name: "Glam Nails Studio",
    city: "Iași",
    description: "Manichiură, pedichiură și nail art profesional",
    image: salon5,
    rating: 4.6,
    services: [
      "manichiură",
      "pedichiură",
      "nail art",
      "gel",
      "întărire unghii",
    ],
  },
  {
    id: 6,
    name: "Barber Pro",
    city: "Brașov",
    description: "Tunsori bărbătești moderne și bărbierit tradițional",
    image: salon6,
    rating: 4.9,
    services: ["tuns", "barbierit", "contur", "styling barba"],
  },
];

export default salons;

import one from "~/assets/img/products/one.png";
import two from "~/assets/img/products/two.png";
import three from "~/assets/img/products/three.png";
import four from "~/assets/img/products/three.png";

export interface IProductViews {
  title: string;
  description: string;
  image: string;
  priceRub: string;
  priceEur: string;
}

export const viewsProducts: IProductViews[] = [
  {
    title: "BXC",
    description: "Вытяжное устройство для механической системы вентиляции",
    image: one,
    priceRub: "6 848 ₽ – 56 584 ₽",
    priceEur: "77.60 € – 643.86 €",
  },
  {
    title: "G2H",
    description:
      "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
    image: two,
    priceRub: "6 848 ₽ – 56 584 ₽",
    priceEur: "77.60 € – 643.86 €",
  },
  {
    title: "GHN",
    description: "Вытяжное устройство с датчиком присутствия",
    image: three,
    priceRub: "6 848 ₽ – 56 584 ₽",
    priceEur: "77.60 € – 643.86 €",
  },
  {
    title: "TDA",
    description: "Вытяжное устройство с датчиком присутствия",
    image: four,
    priceRub: "6 848 ₽ – 56 584 ₽",
    priceEur: "77.60 € – 643.86 €",
  },
];

export interface IProductViews {
    title: string,
    description: string,
    image: string,
    priceRub: string
    priceEur: string
}


export const viewsProducts: IProductViews[] = [
    {
        title: "BXC",
        description: "Вытяжное устройство для механической системы вентиляции",
        image: "~/assets/img/products/zero.jpg",
        priceRub: "6 848 ₽ – 56 584 ₽",
        priceEur: "77.60 € – 643.86 €"
    },
    {
        title: "G2H",
        description: "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
        image: "~/assets/img/products/one.jpg",
        priceRub: "6 848 ₽ – 56 584 ₽",
        priceEur: "77.60 € – 643.86 €"
    },
    {
        title: "GHN",
        description: "Вытяжное устройство с датчиком присутствия",
        image: "~/assets/img/products/two.jpg",
        priceRub: "6 848 ₽ – 56 584 ₽",
        priceEur: "77.60 € – 643.86 €"
    },
    {
        title: "TDA",
        description: "Вытяжное устройство с датчиком присутствия",
        image: "~/assets/img/products/three.jpg",
        priceRub: "6 848 ₽ – 56 584 ₽",
        priceEur: "77.60 € – 643.86 €"
    }
]

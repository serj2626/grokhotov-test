import { defineStore } from "pinia";
import { ref } from "vue";

import two from "~/assets/img/products/two.png";
import one from "~/assets/img/products/one.png";
import three from "~/assets/img/products/three.png";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  article: string;
  count: number;
  price: number;
  currency: string;
  totalSum?: number;
}

export const useProductsStore = defineStore("products", () => {
  const products = ref<IProduct[]>([
    {
      id: 1,
      title: "Вытяжное устройство G2H",
      description:
        "<span>12-72/168 м3/ч / гидрорегулируемый расход <br>от датчика присутствия</span>",
      image: two,
      article: "Артикул: G2H1065",
      count: 1,
      price: 12644,
      currency: "₽",
    },
    {
      id: 2,
      title: "Вытяжное устройство BXC",
      description:
        "<span>12-72/168 м3/ч / гидрорегулируемый расход <br>от датчика присутствия</span>",
      image: one,
      article: "Артикул: G2H10655",
      count: 2,
      price: 12644,
      currency: "₽",
    },
    {
      id: 3,
      title: "Вытяжное устройство GHN",
      description:
        "<span>12-72/168 м3/ч / гидрорегулируемый расход <br>от датчика присутствия</span>",
      image: three,
      article: "Артикул: G2H1065",
      count: 1,
      price: 12644,
      currency: "₽",
    },
  ]);

  const checked = ref(false);

  const getCurrentProduct = (id: number) => {
    return products.value.find((product) => product.id === id);
  };

  const allProducts = computed(() => {
    return products.value.map((product) => {
      return {
        ...product,
        totalSum: product.price * product.count,
      };
    });
  });

  const totalSum = computed(() => {
    return products.value.reduce((acc, product) => {
      return acc + product.price * product.count;
    }, 0);
  });

  const totalCount = computed(() => {
    return products.value.reduce((acc, product) => {
      return acc + product.count;
    }, 0);
  });

  const incrementCount = (index: number) => {
    return products.value.map((product, i) => {
      if (i === index - 1) {
        product.count++;
      }
      return product;
    });
  };

  const decrementCount = (index: number) => {
    return products.value.map((product, i) => {
      if (i === index - 1 && product.count >= 1) {
        product.count--;
      }
      return product;
    });
  };

  const removeProduct = (index: number) => {
    products.value = products.value.filter((item) => item.id !== index);
  };

  const delAllProducts = () => {
    products.value = [];
  };

  const toggleChecked = () => {
    checked.value = !checked.value;
  };

  return {
    products,
    allProducts,
    totalSum,
    totalCount,
    incrementCount,
    decrementCount,
    toggleChecked,
    checked,
    delAllProducts,
    getCurrentProduct,
    removeProduct,
  };
});

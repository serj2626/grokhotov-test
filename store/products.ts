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
  const message = ref("");

  const getCurrentProduct = (id: number) => {
    return products.value.find((product) => product.id === id);
  };

  function getTotalSum(sum: number) {
    return String(sum).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function getRussianEnding(number: number) {
    let item = "товар";
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return item + "ов";
    } else if (lastDigit === 1) {
      return item;
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return item + "а";
    } else {
      return item + "ов";
    }
  }

  const allProducts = computed(() => {
    return products.value.map((product) => {
      return {
        ...product,
        totalSum: product.price * product.count, // Return a number instead of a string
      };
    });
  });

  const totalSum = computed(() => {
    return getTotalSum(
      products.value.reduce((acc, product) => {
        return acc + product.price * product.count;
      }, 0)
    );
  });

  const totalCount = computed(() => {
    let count = products.value.reduce((acc, product) => {
      return acc + product.count;
    }, 0);

    return count + " " + getRussianEnding(count);
  });

  const incrementCount = (index: number) => {
    return products.value.map((product) => {
      if (product.id === index) {
        product.count++;
      }
      return product;
    });
  };

  const decrementCount = (index: number) => {
    return products.value.map((product) => {
      if (product.id === index && product.count >= 1) {
        product.count--;
      }
      return product;
    });
  };

  const removeProduct = (index: number) => {
    products.value = products.value.filter((item) => item.id !== index);
  };

  const delAllProducts = () => {
    if (products.value.length) {
      products.value = [];
      setValueMessage("Ваша корзина очищена");
    } else {
      setValueMessage("Ваша корзина и так пуста");
    }
  };

  const submitForm = async () => {
    if (products.value.length) {
      try {
        const response = await $fetch(
          "https://0520dfbd4229d5e2.mokky.dev/orders",
          {
            method: "POST",
            body: products.value,
          }
        );
        console.log(response);
        setValueMessage("Ваша заявка успешно отправлена");
        products.value = [];
      } catch (error) {
        setValueMessage("Отправка невозможна, тк корзина пуста");
      }
    } else {
      message.value = "Отправка невозможна, тк корзина пуста";
    }
  };

  const toggleChecked = () => {
    checked.value = !checked.value;
  };

  function setValueMessage(value: string) {
    message.value = value;

    setTimeout(() => {
      message.value = "";
    }, 2000);
  }
  const clearMessage = () => {
    setTimeout(() => {
      message.value = "";
    }, 2000);
  };

  return {
    products,
    allProducts,
    totalSum,
    totalCount,
    checked,
    message,

    incrementCount,
    decrementCount,
    toggleChecked,
    delAllProducts,
    getCurrentProduct,
    removeProduct,
    submitForm,
    clearMessage,
    setValueMessage,
  };
});

import { defineStore } from 'pinia'
import { ref } from 'vue';

export interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  article: string;
  count: number;
  price: number;
  currency: string;
}

export const useProductsStore = defineStore('products', () => {

  const products = ref<IProduct[]>([
    {
      id: 1,
      title: "Вытяжное устройство G2H",
      description: "<span>12-72/168 м3/ч / гидрорегулируемый расход <br>от датчика присутствия</span>",
      image: "~/assets/img/products/one.jpg",
      article: "Артикул: G2H1065",
      count: 1,
      price: 12644,
      currency: "₽",
    },
    {
      id: 2,
      title: "Вытяжное устройство BXC",
      description: "<span>12-72/168 м3/ч / гидрорегулируемый расход <br>от датчика присутствия</span>",
      image: "~/assets/img/products/zero.jpg",
      article: "Артикул: G2H10655",
      count: 2,
      price: 12644,
      currency: "₽",
    },
    {
      id: 3,
      title: "Вытяжное устройство GHN",
      description: "<span>12-72/168 м3/ч / гидрорегулируемый расход <br>от датчика присутствия</span>",
      image: "~/assets/img/products/two.jpg",
      article: "Артикул: G2H1065",
      count: 1,
      price: 12644,
      currency: "₽",
    }
  ])

  const allProducts = computed(() => {
    return products.value
  })


  const totalSum = computed(() => {
    return products.value.reduce((acc, product) => {
      return acc + product.price * product.count
    }, 0)
  })

  const totalCount = computed(() => {
    return products.value.reduce((acc, product) => {
      return acc + product.count
    }, 0)
  })

  const incrementCount = (index: number) => {
    return products.value.map((product, i) => {
      if (i === index) {
        product.count++
      }
      return product
    })
  }

  const decrementCount = (index: number) => {
    return products.value.map((product, i) => {
      if (i === index && product.count > 1) {
        product.count--
      }
      return product
    })
  }

  const checked = ref(true)
  
  const toggleChecked = () => {
    checked.value = !checked.value
  }

  return { products, allProducts, totalSum, totalCount, incrementCount, decrementCount, toggleChecked, checked }
})

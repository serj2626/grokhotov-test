import { defineStore } from 'pinia'
import { ref } from 'vue';

interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  article: string;
  count: number;
  price: number;
  currency: string;
}

export const useCategoriesStore = defineStore('products', () => {

  const products = ref<IProduct[]>([
    {
      id: 1,
      title: "Вытяжное устройство G2H",
      description: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
      image: "~/assets/img/products/one.jpg",
      article: "Артикул: G2H1065",
      count: 1,
      price: 12644,
      currency: "₽",
    },
    {
      id: 2,
      title: "Вытяжное устройство BXC",
      description: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
      image: "~/assets/img/products/zero.jpg",
      article: "Артикул: G2H10655",
      count: 2,
      price: 12644,
      currency: "₽",
    },
    {
      id: 3,
      title: "Вытяжное устройство GHN",
      description: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
      image: "~/assets/img/products/two.jpg",
      article: "Артикул: G2H1065",
      count: 1,
      price: 12644,
      currency: "₽",
    }
  ])

  const checked = ref(false)


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

  const toggleChecked = () => {
    checked.value = !checked.value
  }

  return { products, totalSum, totalCount, incrementCount, decrementCount, toggleChecked, checked }
})

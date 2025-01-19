import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useCategoriesStore = defineStore('products', () => {
  // STATE
  const products = ref([]);

  // GETTERS

  // ACTIONS

  return { products };
})
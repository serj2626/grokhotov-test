<script lang="ts" setup>
import { useProductsStore } from "~/store/products";

const store = useProductsStore();

const { message } = storeToRefs(store);
</script>

<template>
  <header class="header">
    <Header />
  </header>
  <main>
    <BreadCrumb />
    <ShoppingCart />
    <ProductsViewsList />
    <Alert :message="message" />
  </main>
</template>

<script lang="ts" setup>
const { data } = await useFetch('/api/products');
console.log(data);
</script>

<template>
  <header class="header">
    <Header />
  </header>
  <main>
    <BreadCrumb />
    <ShoppingCart />
    <ProductsList />
  </main>
</template>

<script lang="ts" setup>
import { viewsProducts } from "~/types/product_views.data";
</script>

<template>
  <section class="products products_margin">
    <div class="container products__container">
      <h2 class="products__title">Просмотренные товары</h2>
      <div class="products__list">
        <ProductsViewsDetail
          v-for="(product, index) in viewsProducts"
          :key="index"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

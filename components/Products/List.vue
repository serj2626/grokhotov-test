<script lang="ts" setup></script>

<template>
  <section class="products">
    <div class="container products__container">
      <h2 class="products__title">Просмотренные товары</h2>
      <div class="products__list">
        <ProductsDetail />
        <ProductsDetail />
        <ProductsDetail />
        <ProductsDetail />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.products__title {
  color: var(--color-black);
  font-size: 30px;
  font-weight: 600;
  line-height: 120.5%;
  margin-bottom: 60px;
}
.products__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>

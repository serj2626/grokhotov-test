<script lang="ts" setup>
import { viewsProducts } from "~/types/product_views.data";

import { ref, onMounted } from "vue";
import Swiper from "swiper";
const swiperRef = ref(null);

onMounted(() => {
  const swiper = new Swiper(swiperRef.value, {
    direction: "horizontal",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
</script>

<template>
  <section class="products products_margin">
    <div class="container products__container products__container_position">
      <h2 class="products__title">Просмотренные товары</h2>
      <div class="products__list swiper-container">
        <div class="swiper-wrapper">
          <ProductsViewsDetail
            v-for="(product, index) in viewsProducts"
            :key="index"
            :product="product"
            class="swiper-slide"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.products__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

}

</style>

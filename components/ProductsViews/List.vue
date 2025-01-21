<script lang="ts" setup>
import { viewsProducts } from "~/types/product_views.data";
const containerRef = ref(null);
const swiper = useSwiper(containerRef);

onMounted(() => {
  // Access Swiper instance
  // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
  console.log(swiper.instance);
});
</script>

<template>
  <section class="products products_margin">
    <div class="container products__container products__container_position">
      <h2 class="products__title">Просмотренные товары</h2>
      <div class="products__list">
        <ProductsViewsDetail
          v-for="(product, index) in viewsProducts"
          :key="index"
          :product="product"
        />
      </div>
      <div class="products__swiper-btns">
        <button
          @click="swiper.prev()"
          class="products__swiper-prev swiper__btn"
        >
          <img src="~/assets/img/prev.svg" alt="prev" loading="lazy" />
        </button>

        <button
          @click="swiper.next()"
          class="products__swiper-next swiper__btn"
        >
          <img src="~/assets/img/next.svg" alt="next" loading="lazy" />
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.products__container_position {
  position: relative;
}
.products__swiper-btns {
  position: absolute;
  top: 0;
  right: 20px;
}

.products__swiper-btns img {
  padding: 16px;
}

.swiper__btn {
  display: inline-flex;
  background-color: #90a2b5;
  border-radius: 50%;
  border: none;
}
</style>

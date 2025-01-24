<script lang="ts" setup>
import { viewsProducts } from "~/types/product_views.data";
const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
});

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
        <ClientOnly>
          <swiper-container ref="containerRef">
            <swiper-slide v-for="(product, idx) in viewsProducts" :key="idx">
              <ProductsViewsDetail :product="product" />
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
      <div class="products__swiper-actions">
        <button
          @click="swiper.prev()"
          class="products__swiper-prev swiper__btn"
        >
          <img src="~/assets/img/prev.svg" alt="prev" loading="lazy" />
        </button>
        <p class="products__swiper-current">
          <strong class="products__swiper-current-bold">1</strong> /
          <span class="products__swiper-current-total">6</span>
        </p>
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
.products__swiper-actions {
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: 20px;
}

.swiper__btn {
  display: inline-flex;
  background-color: #90a2b5;
  border-radius: 50%;
  border: none;
  padding: 15px 20px;
}

.products__swiper-current {
  margin-inline: 20px 15px;
}

.products__swiper-current-bold {
  font-weight: 600;
  font-size: 20px;
}

.products__swiper-current-total {
  color: var(--color-article-price);
}
</style>

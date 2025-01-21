<script setup lang="ts">
import { viewsProducts } from "~/types/product_views.data";
// Create 10 slides
const containerRef = ref(null);
const slides = ref(Array.from({ length: 10 }));

const swiper = useSwiper(containerRef);

onMounted(() => {
  // Access Swiper instance
  // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
  console.log(swiper.instance);
});
</script>

<template>
  <ClientOnly>
    <swiper-container ref="containerRef" class="swiper">
      <swiper-slide v-for="(product, idx) in viewsProducts" :key="idx" class="card">
        <img
          class="card__img"
          :src="product.image"
          alt="Product"
          loading="lazy"
        />
        <div class="card__body">
          <div class="card__body-top">
            <h4 class="card__title">{{ product.title }}</h4>
            <p class="card__desc">
              {{ product.description }}
            </p>
          </div>
          <div class="card__body-footer">
            <div class="card__footer-prices">
              <strong class="card__price-rub">{{ product.priceRub }}</strong>
              <span class="card__price-eur">{{ product.priceEur }}</span>
            </div>

            <UIButton color="blue" class="card__btn card__btn_margin">
              Подробнее
            </UIButton>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>

  <!-- Go back one slide -->
  <button @click="swiper.prev()">Prev</button>
  <!-- Go forward one slide -->
  <button @click="swiper.next()">Next</button>
</template>

<style lang="css" scoped>
.swiper{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>

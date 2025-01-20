<script lang="ts" setup>
import type {IProductViews} from "~/types/product_views.data";

defineProps<{product: IProductViews}>();
</script>

<template>

  <article class="card">
    <img
      class="card__img"
 
      :src="product.image"
      alt="Product"
      loading="lazy"
    />
    <div class="card__body">
      <div class="card__body-top">
        <h3 class="card__title">{{ product.title }}</h3>
        <p class="card__desc">
          {{ product.description }}
        </p>
      </div>
    </div>
    <div class="card__body-footer">
      <strong class="card__price-rub">{{ product.priceRub }}</strong>
      <span class="card__price-eur">{{ product.priceEur }}</span>

      <button class="card__btn card__btn_margin">Подробнее</button>
    </div>
  </article>
</template>
<style lang="scss" scoped>
.card__btn_margin {
  margin-top: 20px;
}
</style>

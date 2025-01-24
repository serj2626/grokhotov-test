<script lang="ts" setup>
import type { IProductViews } from "~/types/product_views.data";

defineProps<{ product: IProductViews }>();
</script>

<template>
  <article class="card">
    <img class="card__img" :src="product.image" alt="Product" loading="lazy" />
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
  </article>
</template>

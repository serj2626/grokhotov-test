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
<style lang="scss">
.card {
  padding: 25px;
  width: 305px;
  background-color: var(--color-gray);
}

.card__img {
  display: block;
  width: 100%;
  height: 245px;
  margin-bottom: 5px;
}

.card__title {
  font-size: 22px;
  font-weight: 700;
  color: #1f2432;
  line-height: 120.5%;
  margin-bottom: 10px;
}
.card__desc {
  font-size: 14px;
  color: #1f2432;
  line-height: 145%;
  min-height: 97px;
}

.card__body-top {
  margin-bottom: 39px;
  
}

.card__body-footer {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.card__body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card__footer-prices {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.card__price-rub {
  font-size: 22px;
  font-weight: 500;
  line-height: 130%;
  color: #1f2432;
  font-family: "Roboto", sans-serif;
}
.card__price-eur {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #797b86;
}
</style>

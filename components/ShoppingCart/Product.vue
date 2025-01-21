<script lang="ts" setup>
import type { IProduct } from "~/store/products";
import { useProductsStore } from "~/store/products";
import { storeToRefs } from "pinia";

const store = useProductsStore();

const { incrementCount, decrementCount,  removeProduct } =
  store;

const { product } = defineProps<{ product: IProduct }>();
</script>

<template>
  <article class="product">
    <img
      class="product__img"
      :src="product.image"
      alt="product"
      loading="lazy"
    />
    <div class="product__info">
      <h3 class="product__title">{{ product.title }} {{ product.id }}</h3>
      <p class="product__desc" v-html="product.description"></p>
      <span class="product__article">{{ product.article }}</span>
    </div>
    <div class="product__actions">
      <button class="product__btn" @click="decrementCount(product.id)">
        -
      </button>
      <button class="product__btn" disabled>
        {{ product.count }}
      </button>
      <button class="product__btn" @click="incrementCount(product.id)">
        +
      </button>
    </div>
    <strong class="product__sum">{{ product.totalSum }} ₽</strong>
    <button @click="removeProduct(product.id)" class="product__close">
      &times
    </button>
  </article>
</template>
<style scoped lang="scss">
/* Product */

.product {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  padding-left: 15px;
  padding-bottom: 20px;

  border-bottom: var(--border-gray);

  &:last-child {
    border-bottom: none;
    padding-block: 0;
  }
}

.product__img {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 2px;
  object-fit: cover;
}

.product__info {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-inline: 30px 78px;
}
.product__title {
  color: #1f2432;
  line-height: 145%;
  font-weight: 600;
}
.product__desc {
  color: #2c3242;
  font-size: 12px;
}
.product__article {
  font-size: 14px;
  line-height: 150%;
  color: #797b86;
}

.product__actions {
  display: flex;
  gap: 3px;
}

.product__btn {
  background-color: var(--color-gray);
  color: var(--color-dark);
  width: 34px;
  height: 34px;
  border-radius: 2px;

  border: none;
  transition: var(--transition-base);

  &:not(:disabled):hover {
    background-color: var(--color-gray-hover);
    color: #fff;
  }
}

.product__sum {
  font-size: 18px;
  line-height: 145%;
  font-weight: 500;
  color: #1f2432;
  font-family: "Roboto", sans-serif;
  margin-left: 84px;
}

.product__btn {
  background-color: var(--color-gray);
  color: var(--color-dark);
  width: 34px;
  height: 34px;

  border: none;
  cursor: pointer;
}

.product__close {
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent;
  border: none;
  font-size: 30px;
  transition: var(--transition-base);

  &:hover {
    scale: 1.2;
  }
}
</style>

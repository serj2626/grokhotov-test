<script lang="ts" setup>
import type { IProduct } from "~/store/products";

defineProps<{ product: IProduct }>();
</script>

<template>
  <article class="product">
    <img
      class="product__img"
      src="~/assets/img/products/one.jpg"
      alt="product"
      loading="lazy"
    />
    <div class="product__info">
      <h3 class="product__title">{{ $props.product.title }}</h3>
      <p class="product__desc" v-html="$props.product.description">

      </p>
      <span class="product__article">{{ $props.product.article }}</span>
    </div>
    <div class="product__actions">
      <button class="product__btn">-</button>
      <button class="product__btn" disabled>
        {{ $props.product.count }}
      </button>
      <button class="product__btn">+</button>
    </div>
    <strong class="product__sum">12 644 ₽</strong>
    <button class="product__close">&times</button>
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
  right: 1px;
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

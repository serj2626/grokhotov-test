<script lang="ts" setup>
import { useProductsStore } from "~/store/products";
import { storeToRefs } from "pinia";

const store = useProductsStore();

const { totalCount, totalSum } = storeToRefs(store);
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__basket-data">
        <img
          class="header__basket-icon"
          src="~/assets/img/basket/icon.svg"
          alt=""
          loading="lazy"
        />
        <div class="header__basket-content">
          <p class="header__basket-title">Ваша корзина</p>
          <span class="header__basket-count">{{ totalCount }}</span>
          <strong class="header__basket-sum">{{ totalSum }} ₽</strong>
        </div>
      </div>
    </div>
  </header>
</template>
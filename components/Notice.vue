<script lang="ts" setup>
import { useProductsStore } from "~/store/products";
import { storeToRefs } from "pinia";

const store = useProductsStore();
const { checked } = storeToRefs(store);
const { toggleChecked } = store;
</script>

<template>
  <div class="notice">
    <UICheckBox :checked="checked" @toggle="toggleChecked" />
    <img
      class="notice__img"
      src="~/assets/img/installed.svg"
      alt="Install"
      loading="lazy"
    />
    <div class="notice__info">
      <p class="notice__title">Установка</p>
      <span class="notice__desc">
        Отметьте, если Вам необходима консультация профессионала по монтажу
        выбранных товаров.
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notice {
  width: 800px;
  display: flex;
  align-items: center;
  padding-block: 29px;
  padding-right: 42px;
  padding-left: 25px;
  background-color: var(--color-gray);
}

.notice__img {
  margin-left: 20px;
}
.notice__info {
  margin-left: 20px;
}
.notice__title {
  color: var(--color-dark);
  font-size: 16px;
  font-weight: 600;
  line-height: 145%;
}
.notice__desc {
  font-size: 14px;
  line-height: 150%;
  color: var(--color-article-price);
}
</style>

<script lang="ts" setup>
import { useProductsStore } from "~/store/products";
import { storeToRefs } from "pinia";

const store = useProductsStore();

const { totalCount, totalSum , checked} = storeToRefs(store);
</script>

<template>
  <section class="total">
    <div class="total__top">
      <h3 class="total__title">Итого</h3>
      <div class="total__top-content">
        <div class="total__sum">
          <p class="total__sum-title">Сумма заказа</p>
          <p class="total__sum-value">{{ totalSum }} ₽</p>
        </div>
        <div class="total__count">
          <p class="total__count-title">Количество</p>
          <p class="total__count-value">{{ totalCount }} шт</p>
        </div>
        <div class="total__installation">
          <p class="total__installation-title">Установка</p>
          <p class="total__installation-value">{{ checked ? "Да" : "Нет" }}</p>
        </div>
      </div>
    </div>
    <div class="total__horizontal-line"></div>
    <div class="total__footer">
      <div class="total__footer-content">
        <p class="total__footer-title">Стоимость товаров</p>
        <p class="total__footer-value">{{ totalSum }} ₽</p>
      </div>

      <div class="total__actions">
        <UIButton :color="'blue'" class="total__btn">Оформить заказ</UIButton>
        <UIButton :color="'white'" class="total__btn">Купить в 1 клик</UIButton>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.total__actions {
  display: flex;
  flex-direction: column;
  gap: 11px;
}
</style>

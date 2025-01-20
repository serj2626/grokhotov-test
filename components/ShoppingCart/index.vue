<script lang="ts" setup>
import { useProductsStore } from "~/store/products";
import { storeToRefs } from "pinia";

const store = useProductsStore();
const { allProducts: products } = storeToRefs(store);
</script>

<template>
  <div class="shopping-cart shooping-cart_margin">
    <div class="container shooping-cart__container">
      <div class="shooping-cart__top">
        <div class="shooping-cart__content">
          <h2 class="shooping-cart__title">Ваша корзина</h2>
          <span class="shooping-cart__count">4 товара</span>
        </div>

        <a class="shooping-cart__clear">Очистить корзину</a>
      </div>

      <div class="shooping-cart__main">
        <div class="shopping-cart__list-products">
          <ShoppingCartProduct
            v-for="(product, index) in products"
            :key="index"
            :product="product"
          />
        </div>
        <ShoppingCartTotal />
      </div>
      <div class="shooping-cart__bottom">
        <Notice class="shooping-cart__notice" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.shopping-cart__list-products {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.shooping-cart_margin {
  margin-bottom: 95px;
}
</style>

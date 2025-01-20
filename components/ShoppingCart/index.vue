<script lang="ts" setup>
import { useProductsStore } from "~/store/products";
import { storeToRefs } from "pinia";

const store = useProductsStore();
const { allProducts, totalCount } = storeToRefs(store);
const { delAllProducts } = store;
</script>

<template>
  <div class="shopping-cart shooping-cart_margin">
    <div class="container shooping-cart__container container_padding">
      <div class="shooping-cart__top">
        <div class="shooping-cart__content">
          <h2 class="shooping-cart__title">Ваша корзина</h2>
          <span class="shooping-cart__count">{{ totalCount }} товара</span>
        </div>

        <a @click="delAllProducts" class="shooping-cart__clear"
          >Очистить корзину</a
        >
      </div>

      <div class="shooping-cart__main">
        <div v-if="allProducts.length" class="shopping-cart__list-products">
          <ShoppingCartProduct
            v-for="(product, index) in allProducts"
            :key="index"
            :product="product"
          />
        </div>
        <p v-else class="shooping-cart__empty">Корзина пуста</p>
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

.shooping-cart__empty {
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-top: 25px;
}
</style>

<script lang="ts" setup></script>

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
          <ShoppingCartProduct />
          <ShoppingCartProduct />
          <ShoppingCartProduct />
        </div>
        <ShoppingCartTotal />
      </div>
      <div class="shooping-cart__bottom">
        <div class="shooping-cart__bottom-notice">
dsa
        </div>
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


</style>

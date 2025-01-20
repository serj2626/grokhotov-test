<script lang="ts" setup></script>

<template>
  <!-- saas -->
  <article class="product">
    <img
      class="product__img"
      src="~/assets/img/products/one.jpg"
      alt="product"
      loading="lazy"
    />
    <div class="product__info">
      <h3 class="product__title">Вытяжное устройство G2H</h3>
      <p class="product__desc">
        12-72/168 м3/ч / гидрорегулируемый расход /<br />
        от датчика присутствия
      </p>
      <span class="product__article">Артикул: G2H1065</span>
    </div>
    <div class="product__actions">
      <button class="product__btn">-</button>
      <button class="product__btn" disabled>0</button>
      <button class="product__btn">+</button>
    </div>
    <strong class="product__sum">12 644 ₽</strong>
    <button class="product__close">&times</button>
  </article>
</template>
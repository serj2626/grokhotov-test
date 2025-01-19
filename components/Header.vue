<script lang="ts" setup></script>

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
          <span class="header__basket-count">3 товара</span>
          <strong class="header__basket-sum">50 576 ₽</strong>
        </div>
      </div>
    </div>
  </header>
  <main>
    <section class="shopping-cart">

    </section>
    <section class="products">
      
    </section>
  </main>
</template>

<style scoped lang="scss">
.header {
  height: 100px;
}

.header__container {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.header__basket-data {
  margin-top: 30px;
  display: flex;
  gap: 12px;
}

.header__basket-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.header__basket-title {
  font-size: 14px;
  line-height: 150%;
}
.header__basket-count {
  font-size: 12px;
  line-height: 145%;
  color: var(--color-article-price);
}
.header__basket-sum {
  font-size: 12px;
  line-height: 145%;
  color: var(--color-dark);
}
</style>

<script lang="ts" setup></script>

<template>
  <div class="breadcrumb breadcrumb_margin">
    <div class="container breadcrumb__container">
      <ul class="breadcrumb__list">
        <li class="breadcrumb__item">
          <a class="breadcrumb__link breadcrumb__link_home" href="#">Главная</a>
        </li>
        <li class="breadcrumb__item">
          <a class="breadcrumb__link" href="#">
            <img
              class="breadcrumb__icon"
              src="~assets/img/breadcrumb.svg"
              alt="breadcrumb"
              loading="lazy"
            />
          </a>
        </li>
        <li class="breadcrumb__item">
          <a class="breadcrumb__link breadcrumb__link_basket" href="#"
            >Корзина</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* BREADCRUMBS */
.breadcrumb_margin {
  margin-block: 30px 60px;
}

.breadcrumb__list {
  display: flex;
  align-items: center;
  gap: 10px;
}

.breadcrumb__item {
  list-style: none;
}
.breadcrumb__link {
  text-decoration: none;
  font-size: 14px;
  line-height: 150%;
}

.breadcrumb__link_home {
  color: #33374e;
}

.breadcrumb__link_basket {
  color: #797b86;
}
</style>

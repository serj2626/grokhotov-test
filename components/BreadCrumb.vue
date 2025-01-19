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
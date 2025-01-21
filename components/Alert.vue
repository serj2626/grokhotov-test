<script lang="ts" setup>
import { useProductsStore } from "~/store/products";

const store = useProductsStore();

interface IProps {
  message: string;
}

defineProps<IProps>();
</script>

<template>
  <div class="alert" v-if="message">
    <p class="alert__text">
      {{ message }}
    </p>
    <span class="alert__info"
      >Данное уведомление закроется через 2 секунды</span
    >
  </div>
</template>

<style lang="scss" scoped>
.alert {
  position: absolute;
  top: 20px;
  padding: 10px 15px;
  background-color: orange;

  border-radius: 15px;

  &__text {
    font-size: 20px;
    font-weight: 700;
    color: white;
    text-align: center;
  }

  &__info {
    font-size: 16px;
    font-weight: 500;
    color: white;
    text-align: center;
  }
}
</style>

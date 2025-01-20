<script lang="ts" setup>
interface IProps {
  show: boolean;
  view: "modal" | "buy" | "decr";
}

const props = defineProps<IProps>();

const message = computed(() => {
  if (props.view === "modal") {
    return "Модальное окно не работает";
  } else if (props.view === "buy") {
    return "Купить не работает";
  }
  return "Количество ниже нуля не предусмотренно";
});
</script>

<template>
  <div class="alert">
    <Transition name="fade">
      <p class="alert__text">
        {{ message }}
      </p>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.alert {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

  background-color: rgb(219, 174, 13);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &__text {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

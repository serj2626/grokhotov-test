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
      <div class="alert__modal">
        <p class="alert__text">
          {{ message }}
        </p>
        <span class="alert__info">Данное уведомление закроется через 2 секунды</span>
      </div>
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

  background-color: rgba(0, 0, 0, 0.724);
  font-size: 20px;
  &__modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    background-color: #dc2020;
    padding: 30px 50px;
    border-radius: 15px;
  }
  &__text {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }

  &__info {
    color: #fff;
    font-size: 14px;
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

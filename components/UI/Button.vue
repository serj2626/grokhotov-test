<script lang="ts" setup>
interface IProps {
  color: "blue" | "white";
  size?: string;
}
const props = defineProps<IProps>();

const styleObject = computed(() => {
  return {
    backgroundColor: props.color === "blue" ? "#0069b4" : "white",
    color: props.color === "blue" ? "white" : "#0069b4",
    outline: props.color === "blue" ? "none" : "1px solid #0069b4",
  };
});
</script>

<template>
  <button class="btn" :style="styleObject"><slot /></button>
</template>

<style lang="scss" scoped>
.btn {
  display: block;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 18px;
  padding-block: 14px;
  border: none;
  width: 100%;
  transition: var(--transition-base);
}
</style>

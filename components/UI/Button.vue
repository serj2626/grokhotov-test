<script lang="ts" setup>
interface IProps {
  type: "button" | "submit" | "reset";
  color: "blue" | "white";
  size: string;
}
</script>

<template>
  <button class="btn"><slot /></button>
</template>

<style lang="scss" scoped>
.btn {
  display: block;
  border-radius: 4px;
  font-size: 16px;
  color: white;
  background-color: #0069b4;
  padding-block: 15px;
  border: none;
  width: 100%;
  margin-top: 20px;
}
</style>

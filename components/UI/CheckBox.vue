<script lang="ts" setup>
defineProps<{
  checked: boolean;
}>();
</script>

<template>
  <input
    class="notice__checkbox"
    :checked="checked"
    @click="$emit('toggle')"
    type="checkbox"
  />
</template>

<style lang="scss" scoped>
.notice__checkbox {
  width: 20px;
  height: 20px;
}
</style>

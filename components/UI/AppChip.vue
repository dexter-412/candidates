<template>
  <QChip v-bind="$attrs">
    <template
        v-for="(slot, index) of Object.keys($slots)"
        :key="index"
        v-slot:[slot]
    >
      <slot :name="slot"></slot>
    </template>
  </QChip>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
<template>
<QTable
  :columns="columns"
  :rows="rows"
  v-bind="$attrs"
>
  <template
      v-for="(slot, index) of Object.keys($slots)"
      :key="index"
      v-slot:[slot]="slotProps"
  >
    <slot :name="slot" v-bind="slotProps"></slot>
  </template>
</QTable>
</template>

<script setup lang="ts">
import type {QTableProps} from "quasar";

interface Props {
  columns: QTableProps['columns'],
  rows: QTableProps['rows'],
}

defineProps<Props>()
</script>

<style scoped>

</style>
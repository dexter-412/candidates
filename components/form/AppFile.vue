<template>
<QFile
    v-bind="$attrs"
    :model-value="modelValue"
    @update:model-value="update"
/>
</template>

<script setup lang="ts">
import {UpdateEvent} from "~/application/types/app/events";
import type {FileModelType} from "~/application/types/app/types";

interface Emits {
  (event: UpdateEvent.ModelValue, value: FileModelType): void,
}

const emit = defineEmits<Emits>()

interface Props {
  modelValue: FileModelType,
}

defineProps<Props>()

function update(val: FileModelType) {
  emit(UpdateEvent.ModelValue, val)
}
</script>

<style scoped>

</style>
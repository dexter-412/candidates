<template>
<QInput
    v-bind="$attrs"
    :model-value="modelValue"
    @update:model-value="update"
/>
</template>

<script setup lang="ts">
import {UpdateEvent} from "~/application/types/app/events";
import type {ModelType} from "~/application/types/app/types";

interface Emits {
  (event: UpdateEvent.ModelValue, value: ModelType): void,
}

const emit = defineEmits<Emits>()

interface Props {
  modelValue: ModelType | undefined,
}

defineProps<Props>()

function update(val: ModelType) {
  emit(UpdateEvent.ModelValue, val)
}
</script>

<style scoped>

</style>
<template>
<QToolbar class="q-mb-md bg-primary text-white">
    {{ title }}
</QToolbar>
</template>

<script setup lang="ts">
interface Props {
  title: string,
}

defineProps<Props>()
</script>

<style scoped>

</style>
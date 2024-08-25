<template>
  <PageHeader title="Home" />

  <CandidatesTable :rows="candidateStore.candidatesTableView" />
</template>

<script setup lang="ts">
import useCandidateStore from "~/store/candidate";
import {RouteName} from "~/application/types/app/router";

definePageMeta({
  name: RouteName.Home,
})

const candidateStore = useCandidateStore()
</script>

<style scoped>

</style>
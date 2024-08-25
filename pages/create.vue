<template>
  <PageHeader title="Create" />

  <CandidateForm @submit:form="handleSubmit"/>
</template>

<script setup lang="ts">

import CandidateForm from "~/components/CandidateForm.vue";
import useCandidateStore from "~/store/candidate";
import {RouteName} from "~/application/types/app/router";

const { addCandidate } = useCandidateStore()

const router = useRouter()

function handleSubmit(values: CandidateForm) {
  addCandidate(values);

  router.push({name: RouteName.Home})
}
</script>

<style scoped>

</style>
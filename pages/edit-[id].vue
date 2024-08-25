<template>
  <PageHeader :title="pageTitle" />

  <CandidateForm
      :initial-values="candidate"
      @submit:form="handleSubmit"
      editable
  />
</template>

<script setup lang="ts">
import {RouteName} from "~/application/types/app/router";
import useCandidateStore from "~/store/candidate";
import type {Candidate} from "~/application/types/api/candidate";
import type {CandidateForm} from "~/composables/useCandidateValidation";

definePageMeta({
  name: RouteName.EditCandidate,
})

const route = useRoute()
const router = useRouter()

const candidateId = Number(route.params.id)

const { getCandidateById, editCandidate } = useCandidateStore()

const candidate = computed<Candidate>(() => {
  return getCandidateById(candidateId)
})

const pageTitle = computed<string>(() => {
  return `Edit - ${candidate.value.first_name} ${candidate.value.last_name}`
})

function handleSubmit(values: CandidateForm) {
  editCandidate(values, candidateId)

  router.push({name: RouteName.Home})
}
</script>

<style scoped>

</style>
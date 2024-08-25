<template>
<AppTable
    :columns="CandidatesTableColumns"
    :rows="rows"
    class="candidate-table"
>
  <template #top-left>
    <AppInput
        placeholder="search"
        :model-value="search"
        @update:model-value="updateSearch"
    />
  </template>

  <template #top-right>
    <AppButton to="/create">Create</AppButton>
  </template>

  <template #body-cell-skills="props">
      <QTd>
      <AppChip
          v-for="(item, index) in props.value"
          :key="index"
          color="primary"
          text-color="white"
      >
        {{ item }}
      </AppChip>
      </QTd>
  </template>

  <template #body-cell-actions="props">
      <QTd align="right">
        <AppButton :to="{
          name: RouteName.EditCandidate,
          params: { id: props.value }
        }">Edit</AppButton>
      </QTd>
  </template>
</AppTable>
</template>

<script setup lang="ts">
import type {QTableProps} from "quasar";
import AppTable from "~/components/UI/AppTable.vue";
import AppInput from "~/components/form/AppInput.vue";
import AppButton from "~/components/UI/AppButton.vue";
import type {CandidatesTableInfo} from "~/application/componentResources/candidatesTable";
import AppChip from "~/components/UI/AppChip.vue";
import {RouteName} from "~/application/types/app/router";
import {debounce} from "~/application/helpers/debounce";

interface Props {
  rows: CandidatesTableInfo[],
}

defineProps<Props>()

const search = ref<string>('')

const CandidatesTableColumns = ref<QTableProps['columns']>([
  {
    name: 'fullName',
    label: 'Full name',
    field: 'fullName',
    align: 'left',
  },
  {
    name: 'email',
    label: 'Email',
    field: 'email',
    align: 'left',
  },
  {
    name: 'skills',
    label: 'Skills',
    field: 'skills',
    align: 'left',
  },
  {
    name: 'actions',
    label: 'Actions',
    field: 'id',
    align: 'right'
  },
])

function updateSearch(value: string) {
  console.log(value);
  // debounce(() => {console.log(value);}, 1000)
}
</script>

<style scoped lang="scss">
.candidate-table {
  max-width: 700px;
  margin: 0 auto;
}
</style>
<template>
<div class="skills">
  <div class="q-field__label q-mb-md">{{label}}</div>

  <div
      v-if="isEditMode"
      class="skills__input q-mb-md"
  >
    <AppInput
        dense
        v-model="skill"
        placeholder="Enter skill"
    />

    <AppButton
        @click="addSkillHandler"
    >
      Add skill
    </AppButton>
  </div>

  <div class="skills__list q-mb-md">
    <AppChip
        v-for="(skill, index) in skillsList"
        :key="index"
        removable
        @remove="removeSkillHandler(index)"
    >
      {{ skill }}
    </AppChip>
  </div>

  <AppButton @click="toggleEditMode">{{ modeButtonLabel }}</AppButton>

  <div
      class="text-negative"
      v-if="error"
  >
    {{ errorMessage }}
  </div>
</div>
</template>

<script setup lang="ts">
import AppInput from "~/components/form/AppInput.vue";
import AppChip from "~/components/UI/AppChip.vue";
import AppButton from "~/components/UI/AppButton.vue";
import {UpdateEvent} from "~/application/types/app/events";

interface Emits {
  (event: UpdateEvent.ModelValue, value: string[]): void,
}

const emit = defineEmits<Emits>()

interface Props {
  modelValue: string[],
  label: string,
  error: boolean,
  errorMessage: string | undefined,
}

const props = defineProps<Props>()

const skill = ref<string>('')

const skillsList = ref<string[]>(props.modelValue)

const isEditMode = ref<boolean>(false)

const modeButtonLabel = computed<string>(
    ()=> isEditMode.value ? 'Finish editing' : 'Add skills'
)

function removeSkillHandler(index: number) {
  skillsList.value.splice(index, 1)

  update()
}

function addSkillHandler() {
  if(skill.value === '') {return}

  skillsList.value.push(skill.value)

  update()

  skill.value = ''
}

function update() {
  emit(UpdateEvent.ModelValue, skillsList.value)
}

function toggleEditMode() {
  isEditMode.value = !isEditMode.value
}
</script>

<style scoped lang="scss">
.skills {
  &__input {
    display: flex;
    gap: 12px;
  }
}
</style>
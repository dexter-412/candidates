<template>
<AppForm
    class="candidate-form"
    @submit="onSubmit"
>
  <AppInput
      v-model="firstName"
      :error-message="errors.firstName"
      :error="!!errors.firstName"
      label="First name"
  />

  <AppInput
      v-model="lastName"
      :error-message="errors.lastName"
      :error="!!errors.lastName"
      label="Last name"
  />

  <AppInput
      v-model="email"
      :error-message="errors.email"
      :error="!!errors.email"
      label="Email"
  />

  <AppInput
      v-model="bio"
      type="textarea"
      :error-message="errors.bio"
      :error="!!errors.bio"
      label="Bio"
  />

  <AppSkills
      v-model="skills"
      :error-message="errors.skills"
      :error="!!errors.skills"
      label="Skills"
  />

  <AppFile
      v-model="resume"
      :error-message="errors.resume"
      :error="!!errors.resume"
      label="Resume"
  />

  <AppInput
      v-model="link"
      :error-message="errors.link"
      :error="!!errors.link"
      label="Github URL"
  />

  <div class="candidate-form__actions">
    <AppButton :to="{ name: RouteName.Home }">Back</AppButton>
    <AppButton type="submit">{{ submitButtonTitle }}</AppButton>
  </div>
</AppForm>
</template>

<script setup lang="ts">
import AppInput from "~/components/form/AppInput.vue";
import AppForm from "~/components/form/AppForm.vue";
import AppSkills from "~/components/form/AppSkills.vue";
import AppFile from "~/components/form/AppFile.vue";
import AppButton from "~/components/UI/AppButton.vue";
import {ComponentEvent} from "~/application/types/app/events";
import type {CandidateForm} from "~/composables/useCandidateValidation";
import useCandidateValidation from "~/composables/useCandidateValidation";
import {RouteName} from "~/application/types/app/router";
import type {Candidate} from "~/application/types/api/candidate";

interface Emits {
  (event: ComponentEvent.SubmitForm, value: CandidateForm): void,
}

const emit = defineEmits<Emits>()

interface Props {
  initialValues?: Candidate | undefined,
  editable?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  initialValues: undefined,
  editable: false,
})

const submitButtonTitle = computed<string>(() => {
  return props.editable ? 'Edit' : 'Save'
})

const {
  handleSubmit,
  defineField,
  errors,
  setFieldValue,
} = useCandidateValidation()

const [link] = defineField('link')
const [firstName] = defineField('firstName')
const [lastName] = defineField('lastName')
const [email] = defineField('email')
const [bio] = defineField('bio')
const [resume] = defineField('resume')
const [skills] = defineField('skills')


if(props.initialValues !== undefined) {
  setFieldValue('firstName', props.initialValues.first_name)
  setFieldValue('lastName', props.initialValues.last_name)
  setFieldValue('email', props.initialValues.email)
  setFieldValue('bio', props.initialValues.bio)
  setFieldValue('skills', props.initialValues.skills)
  setFieldValue('link', props.initialValues.github_url)
  setFieldValue('resume', props.initialValues.resume_file)
}


const onSubmit = handleSubmit((values: CandidateForm) => {
  emit(ComponentEvent.SubmitForm, values)
})
</script>

<style scoped lang="scss">
.candidate-form {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__actions {
    display: flex;
    gap: 12px;
  }
}
</style>
<script setup>
import { ref } from 'vue'
import BaseInput from '../components/UI/BaseInput.vue'
import AuthWrapper from '../components/AuthWrapper.vue'
import auth from '../stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({ name: '', email: '', password: '', confirm: '' })
const error = ref('')

function submit() {
  if (form.value.password !== form.value.confirm) {
    error.value = 'Passwords do not match'
    return
  }

  const res = auth.register(form.value)
  if (res.ok) router.push('/admin')
}
</script>

<template>
  <AuthWrapper>
    <template #header><h2>Register</h2></template>

    <BaseInput v-model="form.name" label="Name" />
    <BaseInput v-model="form.email" label="Email" />
    <BaseInput v-model="form.password" label="Password" type="password" />
    <BaseInput v-model="form.confirm" label="Confirm" type="password" />
    <button @click="submit">Register</button>

    <div v-if="error" style="color:red">{{ error }}</div>

    <template #footer>
      <router-link to="/login">Login</router-link>
    </template>
  </AuthWrapper>
</template>

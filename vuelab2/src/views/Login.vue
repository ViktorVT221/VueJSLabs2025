<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import BaseInput from '../components/UI/BaseInput.vue'
import AuthWrapper from '../components/AuthWrapper.vue'
import auth from '../stores/auth'

const router = useRouter()
const route = useRoute()

const form = ref({ email: '', password: '' })
const error = ref('')

function submit() {
  const res = auth.login(form.value)
  if (!res.ok) {
    error.value = res.error
    return
  }
  router.push(route.query.redirect || '/admin')
}
</script>

<template>
  <AuthWrapper>
    <template #header><h2>Login</h2></template>

    <BaseInput v-model="form.email" label="Email" />
    <BaseInput v-model="form.password" label="Password" type="password" />
    <button @click="submit">Login</button>
    <div v-if="error" style="color:red">{{ error }}</div>

    <template #footer>
      <router-link to="/register">Register</router-link>
    </template>
  </AuthWrapper>
</template>

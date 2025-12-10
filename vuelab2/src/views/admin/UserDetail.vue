<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const user = ref(null)

onMounted(() => {
  const id = Number(route.params.id)
  user.value = {
    id,
    name: "User " + id,
    email: `user${id}@example.com`
  }
})
</script>

<template>
  <div>
    <h2>User #{{ user?.id }}</h2>
    <p v-if="user">
      Name: {{ user.name }}<br>
      Email: {{ user.email }}
    </p>
  </div>
</template>

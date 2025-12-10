<script setup>
import { ref } from 'vue'

const users = ref([
  { id: 1, name: "Alice", email: "a@example" },
  { id: 2, name: "Bob", email: "b@example" }
])
</script>

<template>
  <div>
    <h2>Users</h2>
    <ul>
      <li v-for="u in users" :key="u.id">
        <router-link :to="`/admin/user/${u.id}`">
          {{ u.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { provide } from 'vue'
import Sidebar from '../../components/Sidebar.vue'
import auth from '../../stores/auth'

const authUser = auth.state.user

provide('authUser', authUser)
</script>

<template>
  <div style="display: flex">
    <Sidebar>
      <template #menu>
        <router-link to="/admin/dashboard">Dashboard</router-link><br />
        <router-link to="/admin/users">Users</router-link><br />
        <router-link to="/admin/reports">Reports</router-link><br />
      </template>

      <template #user>
        <div v-if="authUser">
          {{ authUser.name }}
        </div>
      </template>
    </Sidebar>

    <div class="admin-content">
      <router-view />
    </div>
  </div>
</template>

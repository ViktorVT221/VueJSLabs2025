<script setup>
import { ref } from 'vue'
import Overview from './dashboard/Overview.vue'
import Activity from './dashboard/Activity.vue'

const tab = ref('overview')
</script>

<template>
  <div>
    <h2>Dashboard</h2>

    <button @click="tab='overview'">Overview</button>
    <button @click="tab='activity'">Activity</button>

    <KeepAlive include="Overview">
      <component :is="tab === 'overview' ? Overview : Activity" />
    </KeepAlive>
  </div>
</template>
